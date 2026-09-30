# Serein 记忆手册网页

纯静态图片阅读页，保留 `output/serein-intro-v1/png` 中的 18 张原图。无需构建、JavaScript、后端、模型或数据库。桌面与手机都是单列阅读；点开图片可查看原尺寸。

本地预览：在仓库根目录运行 `python -m http.server 8765 --bind 127.0.0.1 --directory site`。

公开地址：<https://yinglianchun.github.io/Serein/>。GitHub Pages 仅从独立的 `gh-pages` 分支根目录发布，不改变应用的 `main` 分支。

发布内容由 `publish-manifest.json` 明确列出。更新时仅将列出的文件复制到 `gh-pages` 检出目录，然后 commit、push；禁止复制整个仓库、运行数据或 Git 历史。页面图片来自已有公开介绍稿，不连接任何服务。

原来的滚动设计草稿保留在本地忽略目录 `output/serein-scroll-prototype`，不发布。
