# FE-Website

```bash
git clone [项目地址]

cd FE-Website
// 初始化依赖
yarn
// 启动项目
yarn dev
```

依赖
- 组件库 [semi design](https://semi.design/zh-CN/start/getting-started)
- classnames
- postcss-px-to-viewport

配置
- 别名 src: '@'
- css module
- css 预处理器 less

react 项目引用markdown文件并解析，[参考文档](https://juejin.cn/post/7028826246616350728)
- react-markdown
- remark-gfm

移动端适配
- meta 标签设置 viewport 宽度为屏幕宽度；
- 开发环境配置 postcss-px-to-viewport 或者类似插件；
- 根据设计稿写样式，元素宽高直接取设计稿宽高即可，单位为 px，插件会将其转换为 vw；
- 段落文本也按照设计稿写，单位为px，不需要转换为 vw；

环境部署
- 用了 github 提供的开源依赖 gh-pages，可自行去 npm 上查看用法
