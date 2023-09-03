import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";
// refer: https://juejin.cn/post/7081628820188430344#heading-4
import viteImagemin from "vite-plugin-imagemin";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
	// https://vitejs.dev/guide/static-deploy.html#github-pages
	base: "/site/",
	publicDir: "site",
	plugins: [
		react(),
		svgr(),
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 20,
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4,
			},
			svgo: {
				plugins: [
					{
						name: "removeViewBox",
					},
					{
						name: "removeEmptyAttrs",
						active: false,
					},
				],
			},
		}),
		// 次插件要放在最后，用来分析依赖大小
		visualizer(),
	],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vendor0: ["react", "react-dom"],
					vendor1: ["@douyinfe/semi-ui"],
					vendor2: ["react-markdown", "remark-gfm", "markdown-navbar"],
				},
			},
		},
	},
	resolve: {
		alias: {
			"@/": `${path.resolve(__dirname, "./src")}/`,
		},
	},
	css: {
		modules: {
			generateScopedName: "[local]__[hash:base64:5]",
			hashPrefix: "prefix",
		},
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				additionalData: `@import "${path.resolve(__dirname, "src/styles/base.less")}";`,
			},
		},
	},
});
