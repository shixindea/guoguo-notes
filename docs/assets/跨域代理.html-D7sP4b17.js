import{_ as n,c as a,a as e,o as p}from"./app-CduvU-Ml.js";const t={};function l(i,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h2 id="解决开发环境的跨域问题" tabindex="-1"><a class="header-anchor" href="#解决开发环境的跨域问题"><span>解决开发环境的跨域问题</span></a></h2><p><strong>开发环境的跨域</strong></p><p>开发环境的跨域，也就是在**<code>vue-cli脚手架环境</code><strong>下开发启动服务时，我们访问接口所遇到的跨域问题，vue-cli为我们在本地</strong><code>开启了一个服务</code><strong>,可以通过这个服务帮我们</strong><code>代理请求</code>**,解决跨域问题</p><p>这就是vue-cli配置<strong>webpack的反向代理</strong></p><p>![image-20200811022013103](G:/web 百度网盘/03、第三章 HR-saas中台管理项目/资源/讲义/assets/image-20200811022013103.png)</p><blockquote><p>采用vue-cli的代理配置</p></blockquote><p>vue-cli的配置文件即**<code>vue.config.js</code>**,这里有我们需要的 <a href="https://cli.vuejs.org/zh/config/#devserver-proxy" target="_blank" rel="noopener noreferrer">代理选项</a></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token comment">// 代理配置</span></span>
<span class="line">    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 这里的api 表示如果我们的请求地址有/api的时候,就出触发代理机制</span></span>
<span class="line">        <span class="token comment">// localhost:8888/api/abc  =&gt; 代理给另一个服务器</span></span>
<span class="line">        <span class="token comment">// 本地的前端  =》 本地的后端  =》 代理我们向另一个服务器发请求 （行得通）</span></span>
<span class="line">        <span class="token comment">// 本地的前端  =》 另外一个服务器发请求 （跨域 行不通）</span></span>
<span class="line">        <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;www.baidu.com&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 我们要代理的地址</span></span>
<span class="line">        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否跨域 需要设置此值为true 才可以让本地服务代理我们发出请求</span></span>
<span class="line">         <span class="token comment">// 路径重写</span></span>
<span class="line">        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 重新路由  localhost:8888/api/login  =&gt; www.baidu.com/api/login</span></span>
<span class="line">            <span class="token string-property property">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// 假设我们想把 localhost:8888/api/login 变成www.baidu.com/login 就需要这么做 </span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是我们在vue-cli项目中配置的代理设置</p><blockquote><p>接下来,我们在代码中将要代理的后端地址变成 <a href="http://ihrm-java.itheima.net" target="_blank" rel="noopener noreferrer">后端接口地址</a></p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"> <span class="token comment">// 代理跨域的配置</span></span>
<span class="line">    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 当我们的本地的请求 有/api的时候，就会代理我们的请求地址向另外一个服务器发出请求</span></span>
<span class="line">      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://ihrm-java.itheima.net/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 跨域请求的地址</span></span>
<span class="line">        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 只有这个值为true的情况下 才表示开启跨域</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>本节注意</code></strong>：我们并没有进行**<code>pathRewrite</code><strong>,因为后端接口就是</strong><code>ihrm-java.itheima.net/api</code>**这种格式,所以不需要重写</p><p>**<code>vue.config.js</code>**的改动如果要生效,需要进行重启服务</p><p>同时，还需要注意的是，我们同时需要注释掉 mock的加载，因为mock-server会导致代理服务的异常</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// before: require(&#39;./mock/mock-server.js&#39;),  // 注释mock-server加载</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>生产环境的跨域</strong></p><p>生产环境表示我们已经开发完成项目，将项目部署到了服务器上,这时已经没有了vue-cli脚手架的**<code>辅助</code><strong>了，我们只是把打包好的</strong><code>html+js+css</code><strong>交付运维人员，放到</strong><code>Nginx</code><strong>服务器而已,所以此时需要借助</strong><code>Nginx</code>**的反向代理来进行</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">server<span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment"># 监听9099端口</span></span>
<span class="line">    listen <span class="token number">9099</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment"># 本地的域名是localhost</span></span>
<span class="line">    server_name localhost<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">#凡是localhost:9099/api这个样子的，都转发到真正的服务端地址http://baidu.com</span></span>
<span class="line">    location ^~ /api <span class="token punctuation">{</span></span>
<span class="line">        proxy_pass http://baidu.com<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span>    </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>注意</code></strong>:这里的操作一般由运维人员完成,需要前端进行操作,这里我们进行一下简单了解</p><p>更多正向代理和反向代理知识,请阅读这篇文章<a href="https://www.cnblogs.com/ysocean/p/9392908.html" target="_blank" rel="noopener noreferrer">Nginx反向代理</a></p><p><strong>提交代码</strong></p><p><strong><code>本节注意</code></strong>：我们并没有进行**<code>pathRewrite</code><strong>,因为后端接口就是</strong><code>ihrm-java.itheima.net/api</code>**这种格式,所以不需要重写</p><p><strong><code>本节任务</code></strong>： 配置vue-cli的反向代理，实现后端接口的跨域访问</p>`,23)]))}const c=n(t,[["render",l],["__file","跨域代理.html.vue"]]),r=JSON.parse('{"path":"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/%E8%B7%A8%E5%9F%9F%E4%BB%A3%E7%90%86.html","title":"跨域代理","lang":"zh-CN","frontmatter":{"title":"跨域代理","date":"2022-12-29T00:00:00.000Z","tags":["跨域"],"categories":["居家篇"]},"headers":[{"level":2,"title":"解决开发环境的跨域问题","slug":"解决开发环境的跨域问题","link":"#解决开发环境的跨域问题","children":[]}],"git":{"updatedTime":1721805748000,"contributors":[{"name":"袁果锅","email":"2914310412@qq.com","commits":1}]},"filePathRelative":"常用笔记/跨域代理.md","excerpt":"<h2>解决开发环境的跨域问题</h2>\\n<p><strong>开发环境的跨域</strong></p>\\n<p>开发环境的跨域，也就是在**<code>vue-cli脚手架环境</code><strong>下开发启动服务时，我们访问接口所遇到的跨域问题，vue-cli为我们在本地</strong><code>开启了一个服务</code><strong>,可以通过这个服务帮我们</strong><code>代理请求</code>**,解决跨域问题</p>\\n<p>这就是vue-cli配置<strong>webpack的反向代理</strong></p>\\n<p>![image-20200811022013103](G:/web 百度网盘/03、第三章 HR-saas中台管理项目/资源/讲义/assets/image-20200811022013103.png)</p>"}');export{c as comp,r as data};
