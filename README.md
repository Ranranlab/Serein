# Serein 记忆手册网页

沿用 `output/serein-intro-v1` 的纸白、墨黑、蓝色与编辑式图解，把 18 页内容重新排成原生 HTML。桌面采用横向展开的分栏，手机自然重排为纵向阅读，正文至少 16px，不需要放大图片。占星盘仅作为静态封面局部，花园截图保留实际比例。

无需构建、JavaScript、后端、模型或数据库。中文标题与英文书体是本地字体子集，对应开源字体许可保存在 `fonts/`；正文使用系统字体。全部内容无脚本也能完整阅读。

本地预览：在仓库根目录运行 `python -m http.server 8765 --bind 127.0.0.1 --directory site`。

公开地址：<https://yinglianchun.github.io/Serein/>。GitHub Pages 仅从独立的 `gh-pages` 分支根目录发布，不改变应用的 `main` 分支。

发布内容由 `publish-manifest.json` 明确列出。更新时仅将列出的文件复制到 `gh-pages` 检出目录，并移除上一版清单中不再使用的文件，然后 commit、push；禁止复制整个仓库、运行数据或 Git 历史。插图与截图来自已有公开介绍稿与 README，不连接任何私有服务。

原来的滚动设计草稿保留在本地忽略目录 `output/serein-scroll-prototype`，不发布。
