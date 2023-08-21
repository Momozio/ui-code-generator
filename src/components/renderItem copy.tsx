import { componentMap, componentKeys } from "@/config/componentStore";
import { VNode } from "vue";
import { h } from "vue";
import * as ElementIcon from "@element-plus/icons-vue";

export function renderItem({ config }: any): VNode | null {
  // 获取componentStore中的组件对象
  const componentConfig = componentMap[config.key];
  // console.log('componentConfig', componentConfig)
  if (!componentConfig && !htmlTags.includes(config.key)) {
    return null;
  }
  // 处理 props
  processProps(config.props);
  // 处理 style
  // processStyle(config.style)

  // 处理子组件
  let subComponents: (VNode | string)[] = [];
  // 如果有子组件
  if (config.children && config.children.length > 0) {
    config.children.forEach((item: any) => {
      // 递归获取子组件，加入子组件列表
      const children = renderItem({ config: item });
      if (children) subComponents.push(children);
    });
  }

  // 处理插槽
  let slotComponents: { [key: string]: () => VNode | (VNode | string)[] } = {};
  if (config.slot) {
    Object.keys(config.slot).forEach((key) => {
      // 判断插槽是否为数组
      if (Array.isArray(config.slot[key])) {
        console.log("config.slot[key]", config.slot[key]);
        // 递归处理子组件
        let subSlot: (VNode | string)[] = [];
        config.slot[key].forEach((slot: any) => {
          const children = renderItem({ config: slot });
          console.log("children", children);
          if (children) subSlot.push(children);
        });
        slotComponents[key] = () => subSlot;
        console.log(subComponents);
      }
      // 不是数组，调用renderItem
      else {
        const slotItem = renderItem({ config: config.slot[key] });
        if (slotItem) {
          slotComponents[key] = () => slotItem;
        }
      }
    });
  }

  // 如果是图标
  if (config.key === "el-icon") {
    const iconKey = config.icon as keyof typeof ElementIcon;
    return h(ElementIcon[iconKey]);
  }
  // 如果组件是文本
  else if (typeof config === "string") {
    return h("span", config);
  }
  // 如果有text，作为组件的内部文字
  else if (config.text) {
    subComponents.unshift(config.text);
  }
  // 如果是原生html组件，渲染html组件
  if (htmlTags.includes(config.key)) {
    return h(config.key, config.props, {
      default: subComponents.length > 0 ? () => subComponents : null,
      ...slotComponents,
    });
  }
  // 最终渲染
  return h(componentConfig.render, config.props, {
    default: subComponents.length > 0 ? () => subComponents : null,
    ...slotComponents,
  });
}

/** 处理props */
const processProps = (props: any) => {
  if (props) {
    Object.keys(props).forEach((key) => {
      // 查看是否为组件
      if (props[key] && props[key].key !== undefined) {
        if (componentKeys.includes(props[key].key)) {
          props[key] = renderItem({ config: props[key] });
        }
      }
    });
  }
};

const htmlTags = [
  "a",
  "abbr",
  "acronym",
  "address",
  "applet",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "basefont",
  "bdi",
  "bdo",
  "bgsound",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "isindex",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "listing",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "nobr",
  "noframes",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "plaintext",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "shadow",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "xmp",
];
