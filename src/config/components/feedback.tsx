import {
  ElAlert,
  ElDialog,
  ElDrawer,
  ElPopconfirm,
  ElPopover,
  ElTooltip,
} from "element-plus";
import componentStore from "../componentStore";

const type = "feedback";

export const registerFeedBackComponent = () => {
  // alert 提示
  componentStore.register({
    name: "el-alert",
    key: "el-alert",
    componentType:type,
    preview: () => <ElAlert />,
    render: ElAlert,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      title: null,
    },
  });

  // Dialog 对话框
  componentStore.register({
    name: "el-dialog",
    key: "el-dialog",
    componentType:type,
    preview: () => <ElDialog />,
    render: ElDialog,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      // 对话框标题的内容；会替换标题部分，但不会移除关闭按钮。
      header: null,
      // 与 header 作用相同 请使用 header
      title: null,
      // Dialog 按钮操作区的内容
      footer: null,
    },
  });

  // Drawer 抽屉
  componentStore.register({
    name: "el-drawer",
    key: "el-drawer",
    componentType:type,
    preview: () => <ElDrawer />,
    render: ElDrawer,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      // Drawer 标题的内容；会替换标题部分，但不会移除关闭按钮。
      header: null,
      // 与 header 作用相同 请使用 header
      title: null,
      // Drawer 页脚部分
      footer: null,
    },
  });

  // Popconfirm 气泡确认框
  componentStore.register({
    name: "el-popconfirm",
    key: "el-popconfirm",
    componentType:type,
    preview: () => <ElPopconfirm></ElPopconfirm>,
    render: ElPopconfirm,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      reference: null,
    },
  });

  // 弹出框
  componentStore.register({
    name: "el-popover",
    key: "el-popover",
    componentType:type,
    preview: () => <ElPopover></ElPopover>,
    render: ElPopover,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      reference: null,
    },
  });

  // tooltip提示
  componentStore.register({
    name: "el-tooltip",
    key: "el-tooltip",
    componentType:type,
    preview: () => <ElTooltip />,
    render: ElTooltip,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      content: null,
    },
  });
};
