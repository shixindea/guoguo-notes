import comp from "/Users/guoguo/code/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/npm.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/npm.html\",\"title\":\"npm 笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"npm 笔记\",\"date\":\"2024-5-21\",\"tags\":[\"npm\",\"笔记\",\"上传自己的npm包\"],\"categories\":[\"自学篇\"]},\"headers\":[{\"level\":2,\"title\":\"上传包 如何上传自己的npm包_npm上传-CSDN博客\",\"slug\":\"上传包-如何上传自己的npm包-npm上传-csdn博客\",\"link\":\"#上传包-如何上传自己的npm包-npm上传-csdn博客\",\"children\":[]},{\"level\":2,\"title\":\"淘宝镜像  切换至淘宝镜像\",\"slug\":\"淘宝镜像-切换至淘宝镜像\",\"link\":\"#淘宝镜像-切换至淘宝镜像\",\"children\":[]},{\"level\":2,\"title\":\"恢复官方镜像源\",\"slug\":\"恢复官方镜像源\",\"link\":\"#恢复官方镜像源\",\"children\":[]}],\"git\":{\"updatedTime\":1727229103000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/npm.md\",\"excerpt\":\"<h2><a class=\\\"header-anchor\\\" href=\\\"#上传包-如何上传自己的npm包-npm上传-csdn博客\\\"><span>上传包 </span></a><a href=\\\"https://blog.csdn.net/Her_smile/article/details/80519597\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">如何上传自己的npm包_npm上传-CSDN博客</a></h2>\\n<div class=\\\"language-bash\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"line\\\"><span class=\\\"token function\\\">npm</span> login</span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">npm</span> publish  //上传</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token function\\\">npm</span> unpublish <span class=\\\"token parameter variable\\\">--force</span>  //撤销上传</span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
