import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/vueuse笔记.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/vueuse%E7%AC%94%E8%AE%B0.html\",\"title\":\"vueuse    -->   @vueuse/core\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]},{\"level\":2,\"title\":\"useDebounceFn（防抖）\",\"slug\":\"usedebouncefn-防抖\",\"link\":\"#usedebouncefn-防抖\",\"children\":[]},{\"level\":2,\"title\":\"useFullscreen（全屏）\",\"slug\":\"usefullscreen-全屏\",\"link\":\"#usefullscreen-全屏\",\"children\":[]},{\"level\":2,\"title\":\"useClipboard （剪切板功能）\",\"slug\":\"useclipboard-剪切板功能\",\"link\":\"#useclipboard-剪切板功能\",\"children\":[]},{\"level\":2,\"title\":\"useColorMode（切换主题颜色）\",\"slug\":\"usecolormode-切换主题颜色\",\"link\":\"#usecolormode-切换主题颜色\",\"children\":[]},{\"level\":2,\"title\":\"useWindowSize（响应式获取窗口尺寸）\",\"slug\":\"usewindowsize-响应式获取窗口尺寸\",\"link\":\"#usewindowsize-响应式获取窗口尺寸\",\"children\":[]},{\"level\":2,\"title\":\"onClickOutside 检测区域之外的的点击事件\",\"slug\":\"onclickoutside-检测区域之外的的点击事件\",\"link\":\"#onclickoutside-检测区域之外的的点击事件\",\"children\":[]},{\"level\":2,\"title\":\"useStorage 自动同步到 localstorage\",\"slug\":\"usestorage-自动同步到-localstorage\",\"link\":\"#usestorage-自动同步到-localstorage\",\"children\":[]}],\"git\":{\"updatedTime\":1725329595000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/vueuse笔记.md\",\"excerpt\":\"\\n<h2>安装</h2>\\n<div class=\\\"language-bash\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"sh\\\" data-title=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"line\\\"><span class=\\\"token function\\\">npm</span> i @vueuse/core</span>\\n<span class=\\\"line\\\"></span></code></pre></div><h2>useDebounceFn（防抖）</h2>\\n<p>防抖是指当一个事件被触发后，在一定时间内如果该事件再次被触发，那么就会取消前一次的操作，重新开始计时。（防止在短时间内频繁触发事件导致页面性能下降）</p>\"}")
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
