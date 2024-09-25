import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/1----公司代码片段.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/1----%E5%85%AC%E5%8F%B8%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"限制不能选择今天之前的日期 不包括今天  [日期组件]\",\"slug\":\"限制不能选择今天之前的日期-不包括今天-日期组件\",\"link\":\"#限制不能选择今天之前的日期-不包括今天-日期组件\",\"children\":[]},{\"level\":2,\"title\":\"antd 图表 自定义 tootip\",\"slug\":\"antd-图表-自定义-tootip\",\"link\":\"#antd-图表-自定义-tootip\",\"children\":[]},{\"level\":2,\"title\":\"Ref 引用组件 需要 在子组件导出  父组件异步加载\",\"slug\":\"ref-引用组件-需要-在子组件导出-父组件异步加载\",\"link\":\"#ref-引用组件-需要-在子组件导出-父组件异步加载\",\"children\":[]},{\"level\":2,\"title\":\"antd 图表[柱状图]  增加横向滚动条\",\"slug\":\"antd-图表-柱状图-增加横向滚动条\",\"link\":\"#antd-图表-柱状图-增加横向滚动条\",\"children\":[]},{\"level\":2,\"title\":\"输入框 回车 调接口\",\"slug\":\"输入框-回车-调接口\",\"link\":\"#输入框-回车-调接口\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/1----公司代码片段.md\",\"excerpt\":\"<div class=\\\"language-text\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre class=\\\"language-text\\\"><code><span class=\\\"line\\\">  Modal.confirm({</span>\\n<span class=\\\"line\\\">    title: \\\"确定要删除吗？\\\",</span>\\n<span class=\\\"line\\\">    okText: \\\"确定\\\",</span>\\n<span class=\\\"line\\\">    cancelText: \\\"取消\\\",</span>\\n<span class=\\\"line\\\">    onOk: () =&gt; {</span>\\n<span class=\\\"line\\\">      theSaveDatas.rows[theProps.pathId].splice(delIdx, 1);</span>\\n<span class=\\\"line\\\">      if (delIdx === theActiveIdx.value) {</span>\\n<span class=\\\"line\\\">        theActiveIdx.value = theSaveDatas.rows[theProps.pathId].length - 1;</span>\\n<span class=\\\"line\\\">      }</span>\\n<span class=\\\"line\\\">    },</span>\\n<span class=\\\"line\\\">  });</span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
