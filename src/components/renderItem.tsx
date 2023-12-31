import { componentMap, componentKeys } from "@/config/componentStore";
import { VNode } from "vue";
import { h } from "vue";
import * as ElementIcon from "@element-plus/icons-vue";
import { IComponent, IComponentConfig } from "@/types/generator";
import draggable from "vuedraggable";
import { useGeneratorStore } from "@/store/generator";
import "./renderItem.scss";
import { render } from "vue";

type IrenderItemProps = {
  config: IComponent;
  [key: string]: any;
};

export default {
  component: {
    draggable,
  },
};

export function renderItem({ config }: IrenderItemProps): VNode | null {
  // store
  const generatorStore = useGeneratorStore();

  // 获取componentStore中的组件对象
  const componentConfig: IComponent = componentMap[config.key];
  if (!componentConfig && !htmlTags.includes(config.key)) {
    return null;
  }
  // 处理 props
  const componentProps = processProps(config.componentConfig);
  // 处理 style
  if (config.style) {
    componentProps.style = { ...config.style, ...config.previewStyle };
  }

  // 处理子组件
  let subComponents: (VNode | string)[] = [];
  // 如果有子组件
  if (config.children && config.children.length > 0) {
    config.children.forEach((item: IComponent) => {
      // 递归获取子组件，加入子组件列表
      const children = renderItem({ config: item });
      if (children) subComponents.push(children);
    });
  }

  // 处理子组件2
  let draggableChildrens: VNode | null = null;
  // 是否展示工具栏
  const isShowToolBox = (id: string) => {
    return (
      (generatorStore.currentElementId == id &&
        generatorStore.hoverElementId == "") ||
      (!generatorStore.isMove && generatorStore.hoverElementId == id)
    );
  };
  // 工具栏
  const toolBox = () => {
    return (
      <>
        {config.id && isShowToolBox(config.id) && (
          <div class="tool-box">
            {/* 组件名 */}
            <div class="tip">{config.name}</div>
          </div>
        )}
      </>
    );
  };
  if (config.children) {
    draggableChildrens = (
      <draggable
        group="componentsGroup"
        item-key="id"
        style="padding:4px;box-sizing:border-box;"
        list={config.children}
      >
        {{
          item: ({ element }) => {
            return renderItem({ config: element });
            // return renderItem({config:element})
          },
        }}
      </draggable>
    );
  }

  // 处理插槽
  let slotComponents: { [key: string]: () => VNode | (VNode | string)[] } = {};
  if (config.slot != undefined) {
    Object.keys(config.slot).forEach((key) => {
      if (config.slot != undefined) {
        const slot = config.slot[key];
        // 判断插槽是否为数组
        if (Array.isArray(slot)) {
          // 递归处理子组件
          let subSlot: (VNode | string)[] = [];
          slot.forEach((slot: IComponent) => {
            const children = renderItem({ config: slot });
            if (children) subSlot.push(children);
          });
          slotComponents[key] = () => subSlot;
        }
        // 不是数组，调用renderItem
        else {
          const slotItem = renderItem({ config: slot });
          if (slotItem) {
            slotComponents[key] = () => slotItem;
          }
        }
      }
    });
  }

  // 如果是图标
  if (config.key === "el-icon") {
    const iconKey = componentProps.icon as keyof typeof ElementIcon;
    return h(ElementIcon[iconKey]);
  }
  // 如果组件是文本
  else if (typeof config === "string") {
    return h("span", config);
  }
  // 如果有innerText，作为组件的内部文字
  else if (config.innerText) {
    subComponents.unshift(config.innerText);
  }
  // 处理事件
  componentProps.onMousedown = (event: MouseEvent) => {
    event.stopPropagation();
    console.log(config.id);
    if (config.id) {
      generatorStore.handleSelectElement(config.id);
    }
  };
  componentProps.onMouseleave = (event: MouseEvent) => {
    event.stopPropagation();
    generatorStore.handleHoverElement("");
  };
  componentProps.onMouseover = (event: MouseEvent) => {
    event.stopPropagation();
    if (config.id) {
      generatorStore.handleHoverElement(config.id);
    }
  };
  // 处理class
  componentProps.class = {
    highlight: generatorStore.currentElementId == config.id,
    "hover-highlight":
      !generatorStore.isMove &&
      generatorStore.hoverElementId == config.id &&
      generatorStore.currentElementId != config.id,
    "render-item":true
  };

  // 如果是原生html组件，渲染html组件
  if (htmlTags.includes(config.key)) {
    return h(config.key, componentProps, {
      default: subComponents.length > 0 ? () => subComponents : null,
      ...slotComponents,
    });
  }
  // 最终渲染
  if (componentConfig.render == undefined) {
    return null;
  }
  // return h(componentConfig.render, componentProps, {
  //   default: subComponents.length > 0 ? () => subComponents : null,
  //   ...slotComponents,
  // });
  return h(componentConfig.render, componentProps, {
    default: () => [config.innerText, toolBox(), draggableChildrens],
    ...slotComponents,
  });
}

/** 处理props */
const processProps = (componentConfigs: IComponentConfig[]) => {
  let props: { [key: string]: any } = {};
  componentConfigs.forEach((config: any) => {
    props[config.attrName] = config.value;
  });
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
  return props;
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
