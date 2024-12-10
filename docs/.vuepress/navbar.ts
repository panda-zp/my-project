import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/" },
  {
    text: "文档",
    icon: 'f7:doc',
    link: "/notes/docs/1.更新日志.md",
    activeMatch: '^/docs/',
  },
  {
    text: "指南",
    icon: 'icon-park-outline:guide-board',
    link: "/notes/theme/guide/介绍.md",
    activeMatch: '^/guide/',
  },
  {
    text: '配置',
    icon: 'icon-park-outline:setting-two',
    link: '/notes/theme/config/配置说明.md',
    activeMatch: '^/config/',
  },
  { text: "博客", link: "/blog/" },
  { text: "标签", link: "/blog/tags/" },
  { text: "归档", link: "/blog/archives/" }
]);
