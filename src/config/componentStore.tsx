import { IComponent } from "@/types/generator";
import { ElDivider } from "element-plus";

import { registerBaseComponent } from "./components/base";
import { registerFormComponent } from "./components/form";
import { registerNavigation } from "./components/navigation";
import { registoerDataComponent } from "./components/data";
import { registerFeedBackComponent } from "./components/feedback";

/**
 * 组件注册器
 */
function createComponentStore() {
  // 组件key映射
  const componentMap: { [key: string]: IComponent } = {};
  // 组件key列表
  const componentKeys: string[] = [];
  // 组件列表
  const componentList: IComponent[] = [];

  return {
    componentMap,
    componentKeys,
    componentList,
    register: (component: IComponent) => {
      componentMap[component.key] = component;
      componentKeys.push(component.key);
      componentList.push(component);
    },
  };
}

const componentStore = createComponentStore();
export default componentStore;
export const componentMap = componentStore.componentMap;
export const componentKeys = componentStore.componentKeys;
export const componentList = componentStore.componentList;

// 注册 基础组件
registerBaseComponent();

// 注册 表单组件
registerFormComponent();

// 注册 导航组件
registerNavigation();

// 注册 数组展示组件
registoerDataComponent();

// 注册 反馈组件
registerFeedBackComponent();

// 注册 其他组件
// Divider 分割线
componentStore.register({
  name: "el-divider",
  key: "el-divider",
  preview: () => <ElDivider />,
  render: ElDivider,
  style: {},
  classDefine: [],
  componentConfig: [],
});
