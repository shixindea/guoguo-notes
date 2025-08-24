import comp from "/Users/guoguo/code/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/vue笔记及周边生态/element plus 本地启动.html.vue"
const data = JSON.parse("{\"path\":\"/vue%E7%AC%94%E8%AE%B0%E5%8F%8A%E5%91%A8%E8%BE%B9%E7%94%9F%E6%80%81/element%20plus%20%E6%9C%AC%E5%9C%B0%E5%90%AF%E5%8A%A8.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"使用管理员命令提示符打开路径\",\"slug\":\"使用管理员命令提示符打开路径\",\"link\":\"#使用管理员命令提示符打开路径\",\"children\":[]},{\"level\":2,\"title\":\"切换源\",\"slug\":\"切换源\",\"link\":\"#切换源\",\"children\":[]},{\"level\":2,\"title\":\"pnpm i\",\"slug\":\"pnpm-i\",\"link\":\"#pnpm-i\",\"children\":[]}],\"git\":{\"updatedTime\":1755347964000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"vue笔记及周边生态/element plus 本地启动.md\",\"excerpt\":\"<p><img src=\\\"https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/image-20241219163123449.png\\\" alt=\\\"image-20241219163123449\\\"></p>\\n<h2>使用管理员命令提示符打开路径</h2>\\n<h2>切换源</h2>\\n<div class=\\\"language-text\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre class=\\\"language-text\\\"><code><span class=\\\"line\\\">npm config set registry https://registry.npmmirror.com</span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
