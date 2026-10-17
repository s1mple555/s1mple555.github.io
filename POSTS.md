# 用 Markdown 发布帖子

将 `.md` 文件放进 `src/content/posts/`，即可自动收录到 `/posts/`，并生成独立阅读页面。子目录也支持。

本地 `npm run dev` 会监听文件变化。将 Markdown 文件和代码一起提交并推送到 `main` 分支后，GitHub Actions 会自动检查、构建并发布到 https://s1mple555.github.io/ ，无需手动上传 `dist/`。

现有示例：`src/content/posts/hello-world.md`，阅读地址为 `/posts/hello-world/`。可以按这个文件的格式继续添加帖子。

## 最简写法

文件名例如 `first-post.md`，内容直接写：

```md
# 你的帖子标题

从这里开始写正文。

## 一个小节

继续写正文。
```

没有额外配置也能发布：标题取第一个一级标题，没有一级标题时取文件名；摘要取首个正文段落；没有填写日期时不显示日期。

## 可选信息

在正文之前加入 YAML 信息：

```md
---
title: 你的帖子标题
date: 2026-10-15
description: 一句话摘要，可不填
tags:
  - Python
  - Agent
draft: false
---

正文从这里开始。

## 一个小节

正文可以包含代码、列表、引用、图片和表格。
```

- `title`：覆盖正文标题或文件名。
- `date`：发布日期。填写日期的帖子按时间倒序排列，未填日期的帖子排在其后。
- `updated`：可选，更新日期。
- `description`：可选，列表摘要，不填则自动提取。
- `tags`：可选，标签列表，用于筛选。
- `draft: true`：草稿，不出现在帖子列表，也不生成公开阅读页面。

文件名决定文章地址；例如 `rag-notes.md` 对应 `/posts/rag-notes/`。需要长期保留链接时不要随意修改文件名。图片放在 `public/images/posts/`，正文可以引用 `/images/posts/图片名.jpg`。

列表支持搜索标题、摘要和正文，并按标签筛选；阅读页支持代码样式、表格、图片和二三级标题目录。帖子标题保留作者原文，站点栏目标题统一使用中文和英文。
