# 个人网站

参考 freecodetiger/freecodetiger.github.io 的 Astro 个人作品集。内容配置在 `src/config.ts`，静态构建输出至 `dist/`。

在线主页：https://s1mple555.github.io/

## 修改与发布

`D:\homepage` 是本机的 Git 工作目录，远程仓库为 https://github.com/s1mple555/s1mple555.github.io ，发布分支为 `main`。

修改页面代码或在 `src/content/posts/` 中添加 Markdown 后：

```powershell
cd D:\homepage
git add .
git commit -m "Update website"
git push
```

每次推送会触发 `.github/workflows/deploy.yml`，自动完成检查、构建和 GitHub Pages 发布。等待仓库 Actions 中的 `Deploy personal site` 成功后，刷新在线页面即可看到更新。删除帖子的 Markdown 并推送，也会删除对应的在线阅读页面。

`node_modules/`、`.astro/` 和 `dist/` 不提交。构建依赖由 `package-lock.json` 锁定，使用 Node.js 24。GitHub Pages 的发布来源应保持为 **GitHub Actions**。

## 运行与校验

```powershell
cd D:\homepage
npm run dev
```

打开 http://127.0.0.1:4321/ 。依赖重新安装时使用 `npm install`。

```powershell
npm run check
npm run build
```

## 页面结构

- 首页、关于、EasyStudy、项目2、经历、摄影、田径各占一屏，极短窗口允许当前部分内部滚动。
- 顶部“项目”进入 EasyStudy，向下滚动进入独立的项目2部分；“爱好”进入摄影，向下滚动进入田径。
- EasyStudy 展示总览与五项特色，支持鼠标悬停、点击和键盘切换。截图使用关键区域局部图，所有展示框高度一致，图片不拉伸。项目地址为 https://easy-study.s1mple.top/ 。截图内容是明确标注的演示数据。
- 经历左侧为教育经历，右侧为竞赛奖项与科研项目；没有单独的奖学金栏目。
- 摄影包含 18 张照片，支持悬停、点击、左右按钮、键盘和触屏滑动。原编号 3、4、7 的竖幅照片排在最后。
- 田径包含 4 张圆角照片，支持左右按钮、键盘和触屏切换。
- `/posts/` 为帖子列表，每篇文章有独立阅读页面，使用普通滚动。已发布的 `Hello World` 是 Markdown 发帖示例。

项目2的浅灰短线是尚未填写的内容位置。

## 内容和资源

个人信息、项目、经历和照片顺序在 `src/config.ts` 中维护。GitHub 和邮箱已配置为真实链接。图片位于 `public/images/`；摄影使用展示版照片，田径使用四张合照及奖牌照片。页面背景共用渐变色与方格线。

将 `.md` 文件放入 `src/content/posts/` 即可收录，支持普通 Markdown 和可选的标题、日期、摘要、标签及草稿信息。本地开发自动更新，推送到 `main` 后在线页面自动更新。格式见 `POSTS.md`。

## 字体与许可

沿用参考站的 `"IBM Plex Mono", monospace`，提供 100–700 正常字重及 400、500 斜体。字体从本站加载，常用 400、700 字重预加载，无需连接 Google Fonts。字体文件位于 `src/assets/fonts/ibm-plex-mono/`，OFL 许可位于 `public/fonts/ibm-plex-mono-OFL.txt`。中文字符使用系统回退字体。

MIT 许可和参考来源见 `LICENSE.md` 与 `NOTICE.md`。
