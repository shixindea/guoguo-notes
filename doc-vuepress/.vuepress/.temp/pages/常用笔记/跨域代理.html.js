import comp from "/Users/guoguo/code/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/跨域代理.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/%E8%B7%A8%E5%9F%9F%E4%BB%A3%E7%90%86.html\",\"title\":\"跨域代理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"跨域代理\",\"date\":\"2022-12-29T00:00:00.000Z\",\"tags\":[\"跨域\"],\"categories\":[\"居家篇\"]},\"headers\":[{\"level\":2,\"title\":\"解决开发环境的跨域问题\",\"slug\":\"解决开发环境的跨域问题\",\"link\":\"#解决开发环境的跨域问题\",\"children\":[]}],\"git\":{\"updatedTime\":1727229103000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"常用笔记/跨域代理.md\",\"excerpt\":\"<h2>解决开发环境的跨域问题</h2>\\n<p><strong>开发环境的跨域</strong></p>\\n<p>开发环境的跨域，也就是在**<code>vue-cli脚手架环境</code><strong>下开发启动服务时，我们访问接口所遇到的跨域问题，vue-cli为我们在本地</strong><code>开启了一个服务</code><strong>,可以通过这个服务帮我们</strong><code>代理请求</code>**,解决跨域问题</p>\\n<p>这就是vue-cli配置<strong>webpack的反向代理</strong></p>\\n<p>![image-20200811022013103](G:/web 百度网盘/03、第三章 HR-saas中台管理项目/资源/讲义/assets/image-20200811022013103.png)</p>\"}")
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
