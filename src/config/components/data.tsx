import {
  ElAvatar,
  ElBadge,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCollapse,
  ElCollapseItem,
  ElDescriptions,
  ElDescriptionsItem,
  ElEmpty,
  ElImage,
  ElPagination,
  ElProgress,
  ElResult,
  ElSkeleton,
  ElSkeletonItem,
  ElTable,
  ElTableColumn,
  ElTableV2,
  ElTag,
  ElTimeline,
  ElTimelineItem,
  ElTree,
  ElTreeSelect,
  ElTreeV2,
  ElStatistic,
} from "element-plus";
import componentStore from "../componentStore";

const type = "data";

export const registoerDataComponent = () => {
  // 头像
  componentStore.register({
    name: "el-avatar",
    key: "el-avatar",
    componentType: type,
    preview: () => <ElAvatar />,
    render: ElAvatar,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // Badge 徽章
  componentStore.register({
    name: "el-badge",
    key: "el-badge",
    componentType: type,
    preview: () => <ElBadge />,
    render: ElBadge,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 日历
  componentStore.register({
    name: "el-calendar",
    key: "el-calendar",
    componentType: type,
    preview: () => <ElCalendar />,
    render: ElCalendar,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 卡片
  componentStore.register({
    name: "el-card",
    key: "el-card",
    componentType: type,
    preview: () => <ElCard />,
    render: ElCard,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      header: null,
    },
  });

  // el-carousel 走马灯
  componentStore.register({
    name: "el-carousel",
    key: "el-carousel",
    componentType: type,
    preview: () => <ElCarousel />,
    render: ElCarousel,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // el-carousel-item 走马灯item
  componentStore.register({
    name: "el-carousel-item",
    key: "el-carousel-item",
    componentType: type,
    preview: () => <ElCarouselItem />,
    render: ElCarouselItem,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 折叠面板
  componentStore.register({
    name: "el-collapse",
    key: "el-collapse",
    componentType: type,
    preview: () => <ElCollapse />,
    render: ElCollapse,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 折叠面板
  componentStore.register({
    name: "el-collapse-item",
    key: "el-collapse-item",
    componentType: type,
    preview: () => <ElCollapseItem />,
    render: ElCollapseItem,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      title: null,
    },
  });

  // Descriptions 描述列表
  componentStore.register({
    name: "el-descriptions",
    key: "el-descriptions",
    componentType: type,
    preview: () => <ElDescriptions />,
    render: ElDescriptions,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // Descriptions 描述列表item
  componentStore.register({
    name: "el-descriptions-item",
    key: "el-descriptions-item",
    componentType: type,
    preview: () => <ElDescriptionsItem />,
    render: ElDescriptionsItem,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      label: null,
    },
  });

  // 空对象
  componentStore.register({
    name: "el-empty",
    key: "el-empty",
    componentType: type,
    preview: () => <ElEmpty />,
    render: ElEmpty,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      image: null,
      description: null,
    },
  });

  // 图片
  componentStore.register({
    name: "el-image",
    key: "el-image",
    componentType: type,
    preview: () => <ElImage />,
    render: ElImage,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 分页
  componentStore.register({
    name: "el-pagination",
    key: "el-pagination",
    componentType: type,
    preview: () => <ElPagination />,
    render: ElPagination,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 进度条
  componentStore.register({
    name: "el-progress",
    key: "el-progress",
    componentType: type,
    preview: () => <ElProgress />,
    render: ElProgress,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 结果
  componentStore.register({
    name: "el-result",
    key: "el-result",
    componentType: type,
    preview: () => <ElResult />,
    render: ElResult,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      icon: null,
      title: null,
      "sub-title": null,
      extra: null,
    },
  });

  // 进度条
  componentStore.register({
    name: "el-progress",
    key: "el-progress",
    componentType: type,
    preview: () => <ElProgress />,
    render: ElProgress,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 骨架屏
  componentStore.register({
    name: "el-skeleton",
    key: "el-skeleton",
    componentType: type,
    preview: () => <ElSkeleton />,
    render: ElSkeleton,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      template: null,
    },
  });

  // 骨架屏item
  componentStore.register({
    name: "el-skeleton-item",
    key: "el-skeleton-item",
    componentType: type,
    preview: () => <ElSkeletonItem />,
    render: ElSkeletonItem,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // 表格
  componentStore.register({
    name: "el-table",
    key: "el-table",
    componentType: type,
    preview: () => <ElTable />,
    render: ElTable,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      append: null,
      empty: null,
    },
  });

  // 表格column
  componentStore.register({
    name: "el-table-column",
    key: "el-table-column",
    componentType: type,
    preview: () => <ElTableColumn />,
    render: ElTableColumn,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      header: null,
    },
  });

  // 虚拟化表格
  componentStore.register({
    name: "el-table-v2",
    key: "el-table-v2",
    componentType: type,
    preview: () => {},
    render: ElTableV2,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      cell: null,
      header: null,
      "header-cell": null,
      row: null,
      footer: null,
      empty: null,
      overlay: null,
    },
  });

  // tag标签
  componentStore.register({
    name: "el-tag",
    key: "el-tag",
    componentType: type,
    preview: () => <ElTag />,
    render: ElTag,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // timeline时间线
  componentStore.register({
    name: "el-timeline",
    key: "el-timeline",
    componentType: type,
    preview: () => <ElTimeline />,
    render: ElTimeline,
    style: {},
    classDefine: [],
    componentConfig: [],
  });

  // timeline时间线 item
  componentStore.register({
    name: "el-timeline-item",
    key: "el-timeline-item",
    componentType: type,
    preview: () => <ElTimelineItem />,
    render: ElTimelineItem,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      dot: null,
    },
  });

  // 树形结构
  componentStore.register({
    name: "el-tree",
    key: "el-tree",
    componentType: type,
    preview: () => <ElTree />,
    render: ElTree,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      empty: null,
    },
  });

  // 树形结构选择
  componentStore.register({
    name: "el-tree-select",
    key: "el-tree-select",
    componentType: type,
    preview: () => <ElTreeSelect />,
    render: ElTreeSelect,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      empty: null,
    },
  });

  // 虚拟化树形结构
  componentStore.register({
    name: "el-tree-v2",
    key: "el-tree-v2",
    componentType: type,
    preview: () => <ElTreeV2 />,
    render: ElTreeV2,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      empty: null,
    },
  });

  // 统计组件
  componentStore.register({
    name: "el-statistic",
    key: "el-statistic",
    componentType: type,
    preview: () => <ElStatistic />,
    render: ElStatistic,
    style: {},
    classDefine: [],
    componentConfig: [],
    slot: {
      empty: null,
    },
  });
};
