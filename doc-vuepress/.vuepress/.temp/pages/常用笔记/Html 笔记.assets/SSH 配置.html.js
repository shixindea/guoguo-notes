import comp from "/Users/guoguo/code/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/Html 笔记.assets/SSH 配置.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/Html%20%E7%AC%94%E8%AE%B0.assets/SSH%20%E9%85%8D%E7%BD%AE.html\",\"title\":\"Mac获取SSH公钥添加到码云\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1747276455000,\"contributors\":[{\"name\":\"yuanxinde\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/Html 笔记.assets/SSH 配置.md\",\"excerpt\":\"\\n<p>本文档详细介绍了如何配置和使用SSH密钥，以安全地连接到Git仓库进行远程操作。步骤包括设置Git用户名和邮箱，生成RSA秘钥，设置密钥名称，设置私钥密码，将私钥添加到本地ssh-agent，开启远程登录功能，并验证SSH连接。此过程对于频繁的Git推送和拉取操作至关重要，确保了身份验证的安全性。</p>\\n<p>1.配置好git的名字和邮箱\\n2.生成秘钥</p>\\n<div class=\\\"language-csharp\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"cs\\\" data-title=\\\"cs\\\"><pre class=\\\"language-csharp\\\"><code><span class=\\\"line\\\">ssh<span class=\\\"token operator\\\">-</span>keygen <span class=\\\"token operator\\\">-</span>t rsa <span class=\\\"token operator\\\">-</span>C <span class=\\\"token string\\\">\\\"your email\\\"</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
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
