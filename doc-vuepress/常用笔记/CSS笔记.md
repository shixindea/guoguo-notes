

---

title: CSS 笔记

date: 2024-8-4
tags:

 - CSS
 - 笔记
   categories:
 - 自学篇

---

## 省略号 - 单行

```scss
.singe-line {
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
  }

  <p>单行省略</p>
  <div class="singe-line box" :title="content">
    {{ content }}
  </div>

```

## 省略号 - 两行

```css
.double-line {
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  <p>两行省略</p>
  <div class="box">
    <div class="double-line" :title="content2">
      {{ content2 }}
    </div>
  </div>

```

## 超过元素宽高省略

> 需要设置元素宽度与高度,根据高度看下最多能放几行,再设置-webkit-line-clamp的值为最大行数

```css
.over-line {
    height: 65px;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  <p>超过元素宽高省略</p>
  <div class="box">
    <div class="over-line" :title="content">
      {{ content }}
    </div>
  </div>

```

