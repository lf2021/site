export const changelogs = [
  {
    time: '2022-07-03',
    content: {
      Feature: [{ desc: '导航栏新增 Changelog 选项，展示网站的更新日志。' }],
      Fix: [
        { desc: '修复了在移动端不适配的场景，支持移动端和 pc。' },
        { desc: '修复 markdown 文件中引用图片失效问题。' },
        { desc: '修复屏幕高度较小是，左侧导航栏超出视口高度且无法滚动。' },
      ],
      Chore: [
        { desc: '为网站定制了 favicon 图标。' },
        { desc: '项目配置路由跳转，支持多级路由。' },
        { desc: '为页面内的滚动定制了滚动条样式。' },
        { desc: '增加了打包体积可视化，对静态图片打包进行了压缩' },
        {
          desc: '增加404页面兜底，解决github pages静态路由的问题',
          link: 'https://github.com/madneal/articles-translator/blob/master/Github%20Pages%E4%BB%A5%E5%8F%8A%E5%8D%95%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8.md#%E7%AC%AC%E5%9B%9B%E9%83%A8%E5%88%86%E8%B7%AF%E7%94%B1',
          linkTitle: '直接访问子路由404',
        },
      ],
      BreakingChange: [{ desc: '新增 Changelog 功能，支持查看项目整体的改动情况。' }],
      Style: [{ desc: '调整 markdown 文件中图片样式问题。' }],
    },
    type: 'success',
  },
  {
    time: '2022-06-26',
    content: {
      Feature: [{ desc: '初始化一个 vite + react + ts 项目。' }],
      Chore: [
        { desc: '项目支持 markdown 文件的引用和解析，同时提供了目录的哈希跳转。' },
        { desc: '通过 gh-pages 配置脚本指令，yarn deploy 一键打包发布。' },
        { desc: '配置了运行脚本时的颜文字打印，提升逼格度（吊用没有）。' },
      ],
      Style: [{ desc: '设定顶部导航栏的基色，配备渐变效果。' }],
    },
    type: 'success',
  },
];
