import { defineNoteConfig } from "vuepress-theme-plume";

export const themeGuide = defineNoteConfig({
  dir: "theme/guide",
  link: "/guide/",
  sidebar: [
    {
      text: "从这里开始",
      collapsed: false,
      icon: "carbon:idea",
      items: ["介绍", "安装与使用", "项目结构", "编写文章", "博客", "知识笔记", "国际化", "部署", "构建优化"]
    },
    {
      text: "写作",
      icon: "fluent-mdl2:edit-create",
      collapsed: false,
      items: [
        {
          text: "markdown",
          icon: "material-symbols:markdown-outline",
          prefix: "markdown",
          collapsed: true,
          items: ["基础", "扩展", "图标", "卡片", "步骤", "文件树", "选项组", "隐秘文本", "示例容器", "npm-to", "caniuse", "导入文件"]
        },
        {
          text: "代码块",
          prefix: "代码",
          icon: "ph:code-bold",
          collapsed: true,
          items: ["介绍", "特性支持", "代码组", "导入代码", "twoslash"]
        },
        {
          text: "代码演示",
          prefix: "代码演示",
          icon: "carbon:demo",
          collapsed: true,
          items: ["前端", "rust", "golang", "kotlin", "codepen", "jsFiddle", "codeSandbox", "replit"]
        },
        {
          text: "图表",
          icon: "mdi:chart-line",
          prefix: "图表",
          collapsed: true,
          items: ["chart", "echarts", "mermaid", "flowchart"]
        },
        {
          text: "资源嵌入",
          icon: "dashicons:embed-video",
          prefix: "嵌入",
          collapsed: true,
          items: ["pdf", "bilibili", "youtube"]
        }
      ]
    },
    {
      text: "功能",
      icon: "lucide:box",
      collapsed: false,
      prefix: "功能",
      items: ["图标", "代码复制", "内容搜索", "评论", "公告板", "加密", "文章贡献者", "文章变更历史", "文章版权所有", "文章水印", "友情链接页", "seo", "sitemap"]
    },
    {
      text: "组件",
      prefix: "组件",
      icon: "uiw:component",
      collapsed: false,
      items: ["徽章", "图标", "隐秘文本", "卡片", "链接卡片", "图片卡片", "卡片容器", "首页布局容器", "repoCard", "npmBadge", "轮播图"]
    },
    {
      text: "自定义",
      icon: "material-symbols:dashboard-customize-outline-rounded",
      collapsed: false,
      items: ["自定义首页", "自定义样式", "布局插槽", "组件覆写"]
    },
    {
      text: "API",
      icon: "mdi:api",
      collapsed: false,
      items: ["api-客户端", "api-node"]
    }
  ]
});
