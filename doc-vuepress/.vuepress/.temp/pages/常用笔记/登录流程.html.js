import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/登录流程.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/%E7%99%BB%E5%BD%95%E6%B5%81%E7%A8%8B.html\",\"title\":\"登录流程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"登录流程\",\"date\":\"2022-12-29T00:00:00.000Z\",\"tags\":[\"登录\",\"流程\"],\"categories\":[\"居家篇\"]},\"headers\":[{\"level\":2,\"title\":\"名称，status  ，number ,\",\"slug\":\"名称-status-number\",\"link\":\"#名称-status-number\",\"children\":[]},{\"level\":2,\"title\":\"手机号登录的直接在数据库中存储手机号   会得到一个openID\",\"slug\":\"手机号登录的直接在数据库中存储手机号-会得到一个openid\",\"link\":\"#手机号登录的直接在数据库中存储手机号-会得到一个openid\",\"children\":[]},{\"level\":2,\"title\":\"微信登陆会在数据库中存储各种微信信息，会得到一个openID\",\"slug\":\"微信登陆会在数据库中存储各种微信信息-会得到一个openid\",\"link\":\"#微信登陆会在数据库中存储各种微信信息-会得到一个openid\",\"children\":[]},{\"level\":2,\"title\":\"微信用户会使用，自己的头像，进行登录，\",\"slug\":\"微信用户会使用-自己的头像-进行登录\",\"link\":\"#微信用户会使用-自己的头像-进行登录\",\"children\":[]},{\"level\":2,\"title\":\"手机号的用户，会使用默认的头像和名称进行登录，\",\"slug\":\"手机号的用户-会使用默认的头像和名称进行登录\",\"link\":\"#手机号的用户-会使用默认的头像和名称进行登录\",\"children\":[]},{\"level\":2,\"title\":\"需要在每个端口进行登陆的过程中，标注一下，是否已经进行微信验证，\",\"slug\":\"需要在每个端口进行登陆的过程中-标注一下-是否已经进行微信验证\",\"link\":\"#需要在每个端口进行登陆的过程中-标注一下-是否已经进行微信验证\",\"children\":[]},{\"level\":2,\"title\":\"如果有人验证了，那么对其进行，处理\",\"slug\":\"如果有人验证了-那么对其进行-处理\",\"link\":\"#如果有人验证了-那么对其进行-处理\",\"children\":[]}],\"git\":{\"updatedTime\":1721805748000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/登录流程.md\",\"excerpt\":\"<ol>\\n<li>使用登录命令login 获取 code</li>\\n<li>根据code 获取道openid</li>\\n<li>存储openid</li>\\n<li>讲所需要的所有的信息存储道数据库中</li>\\n<li>验证数据库存储状态</li>\\n</ol>\\n<h2>名称，status  ，number ,</h2>\\n<h2>手机号登录的直接在数据库中存储手机号   会得到一个openID</h2>\\n<h2>微信登陆会在数据库中存储各种微信信息，会得到一个openID</h2>\\n<h2>微信用户会使用，自己的头像，进行登录，</h2>\\n<h2>手机号的用户，会使用默认的头像和名称进行登录，</h2>\"}")
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
