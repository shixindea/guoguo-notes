


---
title: CSS 封装

date: 2024-7-23
tags:
 - CSS
 - 封装
categories:
 -  居家篇
---

## 单行 多行 省略号 scss

```scss
/** @format */

@mixin multi-ellipsis($lines: 1) {
  display: -webkit-box;
  line-clamp: $lines;
  -webkit-line-clamp: $lines;
  text-overflow: ellipsis;
  word-break: break-all;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* autoprefixer: ignore next */
  box-orient: vertical;
}

@mixin ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
}
		
```

