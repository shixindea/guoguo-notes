import comp from "/Users/guoguo/code/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/服务器.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/%E6%9C%8D%E5%8A%A1%E5%99%A8.html\",\"title\":\"服务器\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"服务器\",\"date\":\"2022-12-29T00:00:00.000Z\",\"tags\":[\"服务器\"],\"categories\":[\"自学篇\"]},\"headers\":[{\"level\":2,\"title\":\"nginx 启动和关闭\",\"slug\":\"nginx-启动和关闭\",\"link\":\"#nginx-启动和关闭\",\"children\":[]}],\"git\":{\"updatedTime\":1727229103000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/服务器.md\",\"excerpt\":\"<h2>nginx 启动和关闭</h2>\\n<div class=\\\"language-text\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre class=\\\"language-text\\\"><code><span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">###启动服务</span>\\n<span class=\\\"line\\\">#需要先进入sbin目录下</span>\\n<span class=\\\"line\\\">cd /usr/local/nginx/sbin</span>\\n<span class=\\\"line\\\">#启动nginx服务</span>\\n<span class=\\\"line\\\">./nginx</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">###关闭服务</span>\\n<span class=\\\"line\\\">#需要先进入sbin目录下</span>\\n<span class=\\\"line\\\">cd /usr/local/nginx/sbin</span>\\n<span class=\\\"line\\\">#关闭nginx服务</span>\\n<span class=\\\"line\\\">./nginx -s stop</span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">#进入nginx目录</span>\\n<span class=\\\"line\\\">cd /usr/local/nginx/sbin</span>\\n<span class=\\\"line\\\">#执行重载命令 重启</span>\\n<span class=\\\"line\\\">./nginx -s reload</span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
