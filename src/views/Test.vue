<template>
  <div>
    <draggable
      group="test"
      :list="testData"
      item-key="id"
      style="height: 300px"
    >
      <template #item="{ element }">
        <div>
          <el-row
            >{{ element.label }}
            <template v-if="element.children">
              <draggable
                style="
                  min-width: 20px;
                  min-height: 20px;
                  border: 1px dashed #eee;
                "
                group="test"
                :list="element.children"
                item-key="id"
              >
                <template #item="{ element: subElement }">
                  <div style="background-color: red">
                    {{ subElement.label }}
                  </div>
                </template>
              </draggable>
            </template>
          </el-row>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import draggable from "vuedraggable";
const testData = reactive([
  { id: "0", label: "123", children: [{ id: "01", label: "223" }] },
  { id: "1", label: "456", children: [{ id: "11", label: "556" }] },
  { id: "2", label: "567", children: [] },
]);
</script>

<style lang="scss" scoped></style>
