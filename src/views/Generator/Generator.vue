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
        :group="{ name: 'componentsGroup', pull: true }"
        item-key="id"
        @start="isMove = true"
        @end="isMove = false"
      >
        <template #item="{ element }">
          <div
            class="render-item"
            @mousedown="selectElement(element.id)"
            @mouseleave="hoverElement('')"
            @mouseover="hoverElement(element.id)"
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
const renderComponentList = reactive<IComponent[]>([]);

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
  console.log(component)
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
        }
        &.highlight {
          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 2px solid #c21cff;
            box-sizing: border-box;
            border-radius: 3px;
          }
        }
        &.hover-highlight {
          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 2px dashed #c21cff;
            box-sizing: border-box;
            border-radius: 3px;
          }
        }
        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
        &:hover {
          .render-item-info-wrap {
            visibility: visible;
            opacity: 1;
            transition: all 0.2s ease;
          }
        }
        // &:active {
        //   .render-item-info-wrap {
        //     opacity: 0 !important;
        //     padding-top: 5px !important;
        //     transition: all 0.2s ease !important;
        //   }
        // }
        // 组件信息
        .render-item-info-wrap {
          opacity: 0;
          padding-top: 5px;
          position: absolute;
          z-index: 1000;
          min-width: 200px;
          visibility: hidden;

          .render-item-info-box {
            border: 1px solid var(--el-border-color-light);
            box-shadow: var(--el-box-shadow-light);
            border-radius: 4px;
            background-color: #fff;
            padding: 8px 12px;
            // 组件名
            .info-name {
              font-size: 12px;
              .tip {
                color: rgb(3, 3, 124);
                margin-right: 2px;
              }
            }
            // 组件key
            .info-key {
              font-size: 12px;
              .tip {
                color: rgb(107, 5, 60);
                margin-right: 2px;
              }
            }
            // 小三角形
            .arrow {
              z-index: 1;
              position: absolute;
              left: 12px;
              width: 10px;
              height: 10px;
              top: 0px;
              &::before {
                position: absolute;
                width: 10px;
                height: 10px;
                z-index: -1;
                content: " ";
                transform: rotate(45deg);
                background: var(--el-bg-color-overlay);
                box-sizing: border-box;
                border-bottom-color: transparent !important;
                border-right-color: transparent !important;
                border-top-left-radius: 2px;
                border: 1px solid var(--el-border-color-light);
                background: var(--el-bg-color-overlay);
                right: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
