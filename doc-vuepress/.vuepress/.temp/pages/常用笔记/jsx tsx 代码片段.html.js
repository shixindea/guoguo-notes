import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/常用笔记/jsx tsx 代码片段.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/jsx%20tsx%20%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"使用手册\",\"slug\":\"使用手册\",\"link\":\"#使用手册\",\"children\":[{\"level\":3,\"title\":\"vitejs/plugin-vue-jsx 插件\",\"slug\":\"vitejs-plugin-vue-jsx-插件\",\"link\":\"#vitejs-plugin-vue-jsx-插件\",\"children\":[]},{\"level\":3,\"title\":\"@vue/babel-plugin-jsx 插件\",\"slug\":\"vue-babel-plugin-jsx-插件\",\"link\":\"#vue-babel-plugin-jsx-插件\",\"children\":[]},{\"level\":3,\"title\":\"第三步：\",\"slug\":\"第三步\",\"link\":\"#第三步\",\"children\":[]}]},{\"level\":2,\"title\":\"使用 jsx 写页面\",\"slug\":\"使用-jsx-写页面\",\"link\":\"#使用-jsx-写页面\",\"children\":[]},{\"level\":2,\"title\":\"jsx 调用页面组件\",\"slug\":\"jsx-调用页面组件\",\"link\":\"#jsx-调用页面组件\",\"children\":[]},{\"level\":2,\"title\":\"[重要！]通过一个页面 tsx 文件 完成整个页面的绘制并且实现方法形式调用\",\"slug\":\"重要-通过一个页面-tsx-文件-完成整个页面的绘制并且实现方法形式调用\",\"link\":\"#重要-通过一个页面-tsx-文件-完成整个页面的绘制并且实现方法形式调用\",\"children\":[{\"level\":3,\"title\":\"插槽的使用\",\"slug\":\"插槽的使用\",\"link\":\"#插槽的使用\",\"children\":[]},{\"level\":3,\"title\":\"props使用\",\"slug\":\"props使用\",\"link\":\"#props使用\",\"children\":[]},{\"level\":3,\"title\":\"方法使用\",\"slug\":\"方法使用\",\"link\":\"#方法使用\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"常用笔记/jsx tsx 代码片段.md\",\"excerpt\":\"<h2>使用手册</h2>\\n<h3>vitejs/plugin-vue-jsx 插件</h3>\\n<h4>第一步：安装插件</h4>\\n<blockquote>\\n<p>npm install @vitejs/plugin-vue-jsx -D</p>\\n</blockquote>\\n<h4>第二步： 在vite.config.ts中进行引入插件和注册插件</h4>\\n<div class=\\\"language-tsx\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"tsx\\\" data-title=\\\"tsx\\\"><pre class=\\\"language-tsx\\\"><code><span class=\\\"line\\\"><span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> defineConfig <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'vite'</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">import</span> vue <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'@vitejs/plugin-vue'</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">import</span> vueJsx <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'@vitejs/plugin-vue-jsx'</span> <span class=\\\"token comment\\\">// 引入插件</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">export</span> <span class=\\\"token keyword\\\">default</span> <span class=\\\"token function\\\">defineConfig</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  plugins<span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">[</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token function\\\">vue</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token function\\\">vueJsx</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token comment\\\">// 注册插件</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\"></span></code></pre></div>\"}")
export { comp, data }
