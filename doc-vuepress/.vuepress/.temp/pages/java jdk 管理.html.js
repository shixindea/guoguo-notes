import comp from "/Users/guoguo/code/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/java jdk 管理.html.vue"
const data = JSON.parse("{\"path\":\"/java%20jdk%20%E7%AE%A1%E7%90%86.html\",\"title\":\"MacOS 配置 jenv环境\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1747276455000,\"contributors\":[{\"name\":\"yuanxinde\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"java jdk 管理.md\",\"excerpt\":\"\\n<ol>\\n<li>安装HomeBrew：</li>\\n</ol>\\n<p>/bin/zsh -c \\\"$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)\\\" speed\\n2. 使用brew安装Fvm：</p>\\n<p>brew install jenv\\n3. 写入配置文件</p>\\n<p>echo 'export PATH=\\\"$HOME/.jenv/bin:$PATH\\\"' &gt;&gt; ~/.zshrc\\necho 'eval \\\"$(jenv init -)\\\"' &gt;&gt; ~/.zshrc\\n4.配置生效.</p>\"}")
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
