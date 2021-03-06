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

环境部署
- 用了 github 提供的开源依赖 gh-pages，可自行去 npm 上查看用法

打包优化 https://juejin.cn/post/7081628820188430344
- rollup-plugin-visualizer 打包体积可视化
- vite-plugin-imagemin 打包图片压缩

问题
- 打开具体某个路由的时候 404，https://github.com/madneal/articles-translator/blob/master/Github%20Pages%E4%BB%A5%E5%8F%8A%E5%8D%95%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8.md
