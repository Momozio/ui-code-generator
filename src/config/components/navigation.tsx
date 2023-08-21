import { ElAffix, ElBacktop, ElBreadcrumb, ElBreadcrumbItem, ElDropdown, ElDropdownMenu, ElDropdownItem, ElMenu, ElSubMenu, ElMenuItem, ElMenuItemGroup, ElPageHeader, ElSteps, ElStep, ElTabs, ElTabPane } from "element-plus";
import componentStore from "../componentStore";

const type = "navigation";

export const registerNavigation = () => {
  // Affix 固钉
  componentStore.register({
    name: "el-affix",
    key: "el-affix",
    componentType:type,
    preview: () => <ElAffix />,
    render: ElAffix,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // Backtop 回到顶部
  componentStore.register({
    name: "el-backtop",
    key: "el-backtop",
    componentType:type,
    preview: () => <ElBacktop />,
    render: ElBacktop,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // Breadcrumb 面包屑
  componentStore.register({
    name: "el-breadcrumb",
    key: "el-breadcrumb",
    componentType:type,
    preview: () => <ElBreadcrumb />,
    render: ElBreadcrumb,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // Breadcrumb 面包屑 item
  componentStore.register({
    name: "el-breadcrumb-item",
    key: "el-breadcrumb-item",
    componentType:type,
    preview: () => <ElBreadcrumbItem />,
    render: ElBreadcrumbItem,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // Dropdown 下拉菜单
  componentStore.register({
    name: "el-dropdown",
    key: "el-dropdown",
    componentType:type,
    preview: () => <ElDropdown />,
    render: ElDropdown,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      dropdown: null,
    },
  });

  // Dropdown 下拉菜单 menu
  componentStore.register({
    name: "el-dropdown-menu",
    key: "el-dropdown-menu",
    componentType:type,
    preview: () => <ElDropdownMenu />,
    render: ElDropdownMenu,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // Dropdown 下拉菜单 menu
  componentStore.register({
    name: "el-dropdown-item",
    key: "el-dropdown-item",
    componentType:type,
    preview: () => <ElDropdownItem />,
    render: ElDropdownItem,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // Menu 菜单
  componentStore.register({
    name: "el-menu",
    key: "el-menu",
    componentType:type,
    preview: () => <ElMenu />,
    render: ElMenu,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // Menu 菜单 sub menu
  componentStore.register({
    name: "el-sub-menu",
    key: "el-sub-menu",
    componentType:type,
    preview: () => {},
    render: ElSubMenu,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      title: null,
    },
  });

  // Menu 菜单 menu-item
  componentStore.register({
    name: "el-menu-item",
    key: "el-menu-item",
    componentType:type,
    preview: () => <ElMenuItem />,
    render: ElMenuItem,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      title: null,
    },
  });

  // Menu 菜单 menu-item-group
  componentStore.register({
    name: "el-menu-item-group",
    key: "el-menu-item-group",
    componentType:type,
    preview: () => <ElMenuItemGroup />,
    render: ElMenuItemGroup,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      title: null,
    },
  });

  // Page Header 页头
  componentStore.register({
    name: "el-page-header",
    key: "el-page-header",
    componentType:type,
    preview: () => <ElPageHeader />,
    render: ElPageHeader,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      // 图标内容
      icon: null,
      // 标题内容
      title: null,
      // 内容
      content: null,
      // 扩展设置
      extra: null,
      // 面包屑导航内容
      breadcrumb: null,
      // 默认内容
      default: null,
    },
  });

  // Steps 步骤条
  componentStore.register({
    name: "el-steps",
    key: "el-steps",
    componentType:type,
    preview: () => <ElSteps />,
    render: ElSteps,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // Step 步骤条
  componentStore.register({
    name: "el-step",
    key: "el-step",
    componentType:type,
    preview: () => <ElStep />,
    render: ElStep,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      // 自定义图标
      icon: null,
      // 自定义标题
      title: null,
      // 自定义描述文案
      description: null,
    },
  });

  // 标签页
  componentStore.register({
    name: "el-tabs",
    key: "el-tabs",
    componentType:type,
    preview: () => <ElTabs />,
    render: ElTabs,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 标签页 pane
  componentStore.register({
    name: "el-tab-pane",
    key: "el-tab-pane",
    componentType:type,
    preview: () => <ElTabPane />,
    render: ElTabPane,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      label: null,
    },
  });
};
