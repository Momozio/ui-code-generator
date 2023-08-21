import {
  ElButton,
  ElCol,
  ElIcon,
  ElLink,
  ElRow,
  ElScrollbar,
  ElSpace,
  ElText,
} from "element-plus";
import componentStore from "../componentStore";

const type = "bese";

export const registerBaseComponent = () => {
  // 按钮
  componentStore.register({
    name: "按钮",
    key: "el-button",
    componentType: type,
    preview: () => <ElButton type="primary">按钮</ElButton>,
    render: ElButton,
    innerText:'按钮',
    style: {},
    classDefine: [],
    componentConfig: [
      { attrName: "size", value: "default", editConfig: { key: "" } },
    ],
  });

  // 图标
  componentStore.register({
    name: "el-icon",
    key: "el-icon",
    componentType: type,
    preview: () => <ElIcon></ElIcon>,
    render: ElIcon,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 行布局
  componentStore.register({
    name: "el-row",
    key: "el-row",
    componentType: type,
    preview: () => <ElRow></ElRow>,
    render: ElRow,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 列布局
  componentStore.register({
    name: "el-col",
    key: "el-col",
    componentType: type,
    preview: () => <ElCol></ElCol>,
    render: ElCol,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 链接
  componentStore.register({
    name: "el-link",
    key: "el-link",
    componentType: type,
    preview: () => <ElLink />,
    render: ElLink,
    innerText:'链接',
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 文本
  componentStore.register({
    name: "el-text",
    key: "el-text",
    componentType: type,
    preview: () => <ElText />,
    render: ElText,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 滚动条
  componentStore.register({
    name: "el-scrollbar",
    key: "el-scrollbar",
    componentType: type,
    preview: () => <ElScrollbar />,
    render: ElScrollbar,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 间距
  componentStore.register({
    name: "el-space",
    key: "el-space",
    componentType: type,
    preview: () => <ElSpace />,
    render: ElSpace,
    style: {},
    classDefine: [],
    componentConfig: [],
  });
};
