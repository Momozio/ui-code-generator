import { Component } from "vue";

/**
 * 组件属性 type
 */
export type IComponentConfig = {
  /** 属性名 */
  attrName: string;
  /** 属性值 */
  value: any;
  /** 对应编辑属性的组件 */
  editConfig: {
    /** 编辑属性的组件 key */
    key: string;
    /** 多选值 */
    options?: { label: string; value: any };
  };
};

/**
 * 组件 type
 */
export type IComponent = {
  /** id uuid */
  id?: string;
  /** 组件名 */
  name: string;
  /** 组件类型 */
  componentType?:string,
  /** 唯一key */
  key: string;
  /** 组件预览渲染方法 */
  preview?: Component;
  /** 组件渲染方法 */
  render?: Component;
  /** 行内样式 */
  style: {[key: string]: any};
  /** 组件内文字 */
  innerText?: string,
  /** 样式 */
  classDefine: { className: string; value: string }[];
  /** 组件属性 */
  componentConfig: IComponentConfig[];
  /** 子组件 */
  children?: IComponent[];
  /** 插槽 */
  slot?: {[key:string]:IComponent|IComponent[]|null};
};
