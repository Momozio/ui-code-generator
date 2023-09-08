import { ref } from "vue";
import { defineStore } from "pinia";
export const useGeneratorStore = defineStore("generatorStore", () => {
  /** 当前选中的组件 */
  const currentElementId = ref<string>("");
  /** 点选组件 */
  const handleSelectElement = (cId: string) => {
    currentElementId.value = cId;
  };

  /** 当前选中的组件 */
  const hoverElementId = ref<string>("");
  /** 鼠标悬浮组件 */
  const handleHoverElement = (cId: string) => {
    hoverElementId.value = cId;
  };

  /** 是否正在移动 */
  const isMove = ref<boolean>(false);


  return {
    currentElementId,
    hoverElementId,
    handleSelectElement,
    handleHoverElement,
    isMove
  };
});
