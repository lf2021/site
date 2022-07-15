"use strict";
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";
import viteImagemin from "vite-plugin-imagemin";
var path = __require("path");
var vite_config_default = defineConfig({
  base: "/site/",
  publicDir: "site",
  plugins: [
    react(),
    svgr(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    }),
    visualizer()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor0: ["react", "react-dom"],
          vendor1: ["@douyinfe/semi-ui"],
          vendor2: ["react-markdown", "remark-gfm", "markdown-navbar"]
        }
      }
    }
  },
  resolve: {
    alias: {
      "@/": `${path.resolve("/Users/lee/Desktop/Project/FE-Website", "./src")}/`
    }
  },
  css: {
    modules: {
      generateScopedName: "[local]__[hash:base64:5]",
      hashPrefix: "prefix"
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve("/Users/lee/Desktop/Project/FE-Website", "src/styles/base.less")}";`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHN2Z3IgZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcbi8vIHJlZmVyOiBodHRwczovL2p1ZWppbi5jbi9wb3N0LzcwODE2Mjg4MjAxODg0MzAzNDQjaGVhZGluZy00XG5pbXBvcnQgdml0ZUltYWdlbWluIGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlbWluJztcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAvLyBodHRwczovL3ZpdGVqcy5kZXYvZ3VpZGUvc3RhdGljLWRlcGxveS5odG1sI2dpdGh1Yi1wYWdlc1xuICBiYXNlOiAnL3NpdGUvJyxcbiAgcHVibGljRGlyOiAnc2l0ZScsXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHN2Z3IoKSxcbiAgICB2aXRlSW1hZ2VtaW4oe1xuICAgICAgZ2lmc2ljbGU6IHtcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXG4gICAgICAgIGludGVybGFjZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIG9wdGlwbmc6IHtcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXG4gICAgICB9LFxuICAgICAgbW96anBlZzoge1xuICAgICAgICBxdWFsaXR5OiAyMCxcbiAgICAgIH0sXG4gICAgICBwbmdxdWFudDoge1xuICAgICAgICBxdWFsaXR5OiBbMC44LCAwLjldLFxuICAgICAgICBzcGVlZDogNCxcbiAgICAgIH0sXG4gICAgICBzdmdvOiB7XG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncmVtb3ZlVmlld0JveCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncmVtb3ZlRW1wdHlBdHRycycsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIC8vIFx1NkIyMVx1NjNEMlx1NEVGNlx1ODk4MVx1NjUzRVx1NTcyOFx1NjcwMFx1NTQwRVx1RkYwQ1x1NzUyOFx1Njc2NVx1NTIwNlx1Njc5MFx1NEY5RFx1OEQ1Nlx1NTkyN1x1NUMwRlxuICAgIHZpc3VhbGl6ZXIoKSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgdmVuZG9yMDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgICAgICB2ZW5kb3IxOiBbJ0Bkb3V5aW5mZS9zZW1pLXVpJ10sXG4gICAgICAgICAgdmVuZG9yMjogWydyZWFjdC1tYXJrZG93bicsICdyZW1hcmstZ2ZtJywgJ21hcmtkb3duLW5hdmJhciddLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdALyc6IGAke3BhdGgucmVzb2x2ZShcIi9Vc2Vycy9sZWUvRGVza3RvcC9Qcm9qZWN0L0ZFLVdlYnNpdGVcIiwgJy4vc3JjJyl9L2AsXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgbW9kdWxlczoge1xuICAgICAgZ2VuZXJhdGVTY29wZWROYW1lOiAnW2xvY2FsXV9fW2hhc2g6YmFzZTY0OjVdJyxcbiAgICAgIGhhc2hQcmVmaXg6ICdwcmVmaXgnLFxuICAgIH0sXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgbGVzczoge1xuICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwiJHtwYXRoLnJlc29sdmUoXCIvVXNlcnMvbGVlL0Rlc2t0b3AvUHJvamVjdC9GRS1XZWJzaXRlXCIsICdzcmMvc3R5bGVzL2Jhc2UubGVzcycpfVwiO2AsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsSUFBTSxPQUFPLFVBQVE7QUFHckIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFFMUIsTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsYUFBYTtBQUFBLE1BQ1gsVUFBVTtBQUFBLFFBQ1IsbUJBQW1CO0FBQUEsUUFDbkIsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsU0FBUyxDQUFDLEtBQUssR0FBRztBQUFBLFFBQ2xCLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFFRCxXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osU0FBUyxDQUFDLFNBQVMsV0FBVztBQUFBLFVBQzlCLFNBQVMsQ0FBQyxtQkFBbUI7QUFBQSxVQUM3QixTQUFTLENBQUMsa0JBQWtCLGNBQWMsaUJBQWlCO0FBQUEsUUFDN0Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE1BQU0sR0FBRyxLQUFLLFFBQVEseUNBQXlDLE9BQU87QUFBQSxJQUN4RTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLG9CQUFvQjtBQUFBLE1BQ3BCLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixtQkFBbUI7QUFBQSxRQUNuQixnQkFBZ0IsWUFBWSxLQUFLLFFBQVEseUNBQXlDLHNCQUFzQjtBQUFBLE1BQzFHO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
