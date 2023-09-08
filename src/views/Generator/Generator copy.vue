<template>
  <div class="main">
    <!-- 左侧物料区 -->
    <div class="left-component-list">
      <draggable
        :list="leftComponentList"
        :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
        :clone="cloneElement"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="left-component-item" @click="addComponent(element)">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>

    <!-- 渲染区 -->
    <div class="render-main" @dblclick="selectElement('')">
      <draggable
        class="list-group"
        :list="renderComponentList"
        group="componentsGroup"
        item-key="id"
        @start="isMove = true"
        @end="isMove = false"
      >
        <template #item="{ element }">
          <div
            class="render-item"
            @mousedown.stop="selectElement(element.id)"
            @mouseleave="hoverElement('')"
            @mouseover.stop="hoverElement(element.id)"
            :class="{
              highlight: currentElementId == element.id,
              'hover-highlight':
                !isMove &&
                hoverElementId == element.id &&
                currentElementId != element.id,
            }"
          >
            <!-- 渲染内容 -->
            <renderItem :config="element" />

            <!-- 工具 -->
            <div
              class="tool-box"
              v-if="
                (currentElementId == element.id && hoverElementId == '') ||
                (!isMove && hoverElementId == element.id)
              "
            >
              <!-- 组件名 -->
              <div class="tip">{{ element.name }}</div>
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { renderItem } from "@/components/renderItem";
import { IComponent } from "@/types/generator";
import { reactive, ref } from "vue";
import { componentList } from "@/config/componentStore";
import deepcopy from "deepcopy";
import draggable from "vuedraggable";
import { v4 as uuidv4 } from "uuid";
const leftComponentList = reactive<IComponent[]>(
  componentList.map((c) => {
    return {
      id: uuidv4(),
      ...c,
    };
  })
);
const renderComponentList = reactive<IComponent[]>([
 
]);

/** 点击添加组件 */
const addComponent = (component: IComponent) => {
  let element = cloneElement(component);
  renderComponentList.push(element);
};

/** 拖拽克隆组件 */
const cloneElement = (component: IComponent) => {
  let com = deepcopy(component);
  com.id = uuidv4();
  currentElementId.value = com.id;
  console.log(component);
  return com;
};

/** 当前选中的组件 */
const currentElementId = ref<string>("");
/** 点选组件 */
const selectElement = (cId: string) => {
  currentElementId.value = cId;
};
/** 当前选中的组件 */
const hoverElementId = ref<string>("");
/** 鼠标悬浮组件 */
const hoverElement = (cId: string) => {
  hoverElementId.value = cId;
};
/** 是否正在移动 */
const isMove = ref<boolean>(false);
</script>

<style lang="scss" scoped>
.main {
  padding: 32px;
  display: flex;
  background-color: #f7f7f7;
  .left-component-list {
    max-height: calc(100vh - 64px);
    overflow-y: scroll;
    background-color: #fff;
    .left-component-item {
      padding: 4px 8rpx;
      text-align: center;
      border: 1px solid #eee;
      & + .left-component-item {
        margin-top: 8px;
      }
    }
  }
  .render-main {
    flex: 1;
    min-height: calc(100vh - 64px);
    overflow-y: scroll;
    margin-left: 16px;
    background-color: #fff;
    padding: 24px;
    .list-group {
      min-height: calc(100vh - 64px);
      .render-item {
        position: relative;
        box-sizing: border-box;
        width: fit-content;

        // 工具
        .tool-box {
          // 组件名
          .tip {
            z-index: 100;
            position: absolute;
            top: -24px;
            height: 24px;
            font-size: 14px;
            color: #fff;
            line-height: 24px;
            padding: 0 8px;
            background-color: #c21cffbc;
            white-space: nowrap;
            border-radius: 4px 4px 0 0;
          }
          // 右侧按钮
          .right-tool-box {
            position: absolute;
            top: -24px;
            height: 24px;
            right: 0;
            padding: 0 4px;
            background-color: #c21cffbc;
            border-radius: 4px 4px 0 0;
            .right-tool-item {
              i {
                font-size: 14px;
                color: #fff;
                line-height: 24px;
              }
            }
          }
          // 插槽面板
          .slot-panel {
            position: absolute;
            width: 200px;
            height: 50px;
            background-color: #fff;
            box-shadow: var(--el-box-shadow-lighter);
            z-index: 1;
            top: 0;
            opacity: 0.8;
            padding: 8px;
            .slot-title {
              font-size: 14px;
            }
          }
        }
        &.highlight {
          // &::after {
          //   content: "";
          //   position: absolute;
          //   top: -1px;
          //   left: -1px;
          //   width: 100%;
          //   height: 100%;
            border: 1px solid #c21cff;
          //   box-sizing: border-box;
          //   border-radius: 3px;
          //   z-index: -1;
          // }
        }
        &.hover-highlight {
          // &::after {
          //   content: "";
          //   position: absolute;
          //   top: 0;
          //   left: 0;
          //   width: 100%;
          //   height: 100%;
            border: 1px dashed #c21cff;
            // box-sizing: border-box;
            // border-radius: 3px;
          // }
        }
        // &::after {
        //   content: "";
        //   position: absolute;
        //   top: 0;
        //   right: 0;
        //   bottom: 0;
        //   left: 0;
        // }
        &:hover {
          .render-item-info-wrap {
            visibility: visible;
            opacity: 1;
            transition: all 0.2s ease;
          }
        }
      }
    }
  }
}
</style>
