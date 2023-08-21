import {
  ElAutocomplete,
  ElCascader,
  ElCheckbox,
  ElColorPicker,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputNumber,
  ElRadioGroup,
  ElRadio,
  ElRate,
  ElSelect,
  ElOption,
  ElSelectV2,
  ElSlider,
  ElSwitch,
  ElTimePicker,
  ElTimeSelect,
  ElTransfer,
  ElUpload,
} from "element-plus";
import componentStore from "../componentStore";
const type = "form";
export const registerFormComponent = () => {
  // 自动补全输入框
  componentStore.register({
    name: "el-autocomplete",
    key: "el-autocomplete",
    componentType: type,
    preview: () => <ElAutocomplete />,
    render: ElAutocomplete,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 级联选择器
  componentStore.register({
    name: "el-cascader",
    key: "el-cascader",
    componentType: type,
    preview: () => <ElCascader />,
    render: ElCascader,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 多选框
  componentStore.register({
    name: "el-checkbox",
    key: "el-checkbox",
    componentType: type,
    preview: () => <ElCheckbox />,
    render: ElCheckbox,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 颜色选择器
  componentStore.register({
    name: "el-color-picker",
    key: "el-color-picker",
    componentType: type,
    preview: () => <ElColorPicker />,
    render: ElColorPicker,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 日期选择器
  componentStore.register({
    name: "el-date-picker",
    key: "el-date-picker",
    componentType: type,
    preview: () => <ElDatePicker />,
    render: ElDatePicker,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 日期选择器
  componentStore.register({
    name: "el-date-picker",
    key: "el-date-picker",
    componentType: type,
    preview: () => <ElDatePicker />,
    render: ElDatePicker,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 表单
  componentStore.register({
    name: "el-form",
    key: "el-form",
    componentType: type,
    preview: () => <ElForm />,
    render: ElForm,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 表单item
  componentStore.register({
    name: "el-form-item",
    key: "el-form-item",
    componentType: type,
    preview: () => <ElFormItem />,
    render: ElFormItem,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // input
  componentStore.register({
    name: "el-input",
    key: "el-input",
    componentType: type,
    preview: () => <ElInput />,
    render: ElInput,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 数字输入框
  componentStore.register({
    name: "el-input-number",
    key: "el-input-number",
    componentType: type,
    preview: () => <ElInputNumber />,
    render: ElInputNumber,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 单选框group
  componentStore.register({
    name: "el-radio-group",
    key: "el-radio-group",
    componentType: type,
    preview: () => <ElRadioGroup />,
    render: ElRadioGroup,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 单选输入
  componentStore.register({
    name: "el-radio",
    key: "el-radio",
    componentType: type,
    preview: () => <ElRadio />,
    render: ElRadio,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 评分
  componentStore.register({
    name: "el-rate",
    key: "el-rate",
    componentType: type,
    preview: () => <ElRate />,
    render: ElRate,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 选择器
  componentStore.register({
    name: "el-select",
    key: "el-select",
    componentType: type,
    preview: () => <ElSelect />,
    render: ElSelect,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 选择器 option
  componentStore.register({
    name: "el-option",
    key: "el-option",
    componentType: type,
    preview: () => <ElOption value="0" />,
    render: ElOption,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 虚拟化选择器
  componentStore.register({
    name: "el-select-v2",
    key: "el-select-v2",
    componentType: type,
    preview: () => <ElSelectV2 />,
    render: ElSelectV2,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 滑块
  componentStore.register({
    name: "el-slider",
    key: "el-slider",
    componentType: type,
    preview: () => <ElSlider />,
    render: ElSlider,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 开关
  componentStore.register({
    name: "el-switch",
    key: "el-switch",
    componentType: type,
    preview: () => <ElSwitch />,
    render: ElSwitch,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 时间选择器
  componentStore.register({
    name: "el-time-picker",
    key: "el-time-picker",
    componentType: type,
    preview: () => <ElTimePicker />,
    render: ElTimePicker,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 时间选择
  componentStore.register({
    name: "el-time-select",
    key: "el-time-select",
    componentType: type,
    preview: () => <ElTimeSelect />,
    render: ElTimeSelect,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 穿梭框
  componentStore.register({
    name: "el-transfer",
    key: "el-transfer",
    componentType: type,
    preview: () => <ElTransfer />,
    render: ElTransfer,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 上传
  componentStore.register({
    name: "el-upload",
    key: "el-upload",
    componentType: type,
    preview: () => <ElUpload />,
    render: ElUpload,
    style: {},
    classDefine: [],
    componentConfig: [],
  });
};
