import{_ as s,c as a,a as p,o as t}from"./app-CGwmzqDL.js";const e={};function o(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 创建实例</span></span>
<span class="line"><span class="token keyword">const</span> Service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">8000</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;http://xxx.com&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&quot;content-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/json;charset:utf-8&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 请求拦截</span></span>
<span class="line">Service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//启动  加载中的   样式</span></span>
<span class="line">    <span class="token keyword">return</span> config</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//响应拦截</span></span>
<span class="line">Service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token comment">//清除加载中的样式</span></span>
<span class="line">    <span class="token keyword">return</span> response</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//清除加载中的样式</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 暴露实例</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Service</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="request-js" tabindex="-1"><a class="header-anchor" href="#request-js"><span>request.js</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">win</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/json;charset=utf-8&#39;</span></span>
<span class="line">  <span class="token comment">// 创建axios实例</span></span>
<span class="line">  <span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// axios中请求配置有baseURL选项，表示请求URL公共部分</span></span>
<span class="line">    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 超时</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10000000</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">// request拦截器</span></span>
<span class="line">  service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 是否需要设置 token</span></span>
<span class="line">    <span class="token comment">// const isToken = (config.headers || {}).isToken === false</span></span>
<span class="line">    <span class="token comment">// if (getToken() &amp;&amp; !isToken) {</span></span>
<span class="line">    <span class="token comment">//   config.headers[&#39;Authorization&#39;] = &#39;Bearer &#39; + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改</span></span>
<span class="line">    <span class="token comment">// }</span></span>
<span class="line">    <span class="token comment">// get请求映射params参数</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;get&#39;</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> url <span class="token operator">=</span> config<span class="token punctuation">.</span>url <span class="token operator">+</span> <span class="token string">&#39;?&#39;</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> propName <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> value <span class="token operator">=</span> config<span class="token punctuation">.</span>params<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> part <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>propName<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token keyword">let</span> params <span class="token operator">=</span> propName <span class="token operator">+</span> <span class="token string">&#39;[&#39;</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">;</span></span>
<span class="line">              <span class="token keyword">var</span> subPart <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;=&quot;</span><span class="token punctuation">;</span></span>
<span class="line">              url <span class="token operator">+=</span> subPart <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>value<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&amp;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            url <span class="token operator">+=</span> part <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&amp;&quot;</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      url <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      config<span class="token punctuation">.</span>params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      config<span class="token punctuation">.</span>url <span class="token operator">=</span> url<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> config</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">      Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 响应拦截器</span></span>
<span class="line">  service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg <span class="token operator">===</span> <span class="token string">&#39;NOTLOGIN&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 返回登录页面</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;---/backend/page/login/login.html---&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;userInfo&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        window<span class="token punctuation">.</span>top<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;/backend/page/login/login.html&#39;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">.</span>data</span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err&#39;</span> <span class="token operator">+</span> error<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">let</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token operator">=</span> error<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>message <span class="token operator">==</span> <span class="token string">&quot;Network Error&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        message <span class="token operator">=</span> <span class="token string">&quot;后端接口连接异常&quot;</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;timeout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        message <span class="token operator">=</span> <span class="token string">&quot;系统接口请求超时&quot;</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;Request failed with status code&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        message <span class="token operator">=</span> <span class="token string">&quot;系统接口&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;异常&quot;</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      window<span class="token punctuation">.</span><span class="token constant">ELEMENT</span><span class="token punctuation">.</span><span class="token function">Message</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">message</span><span class="token operator">:</span> message<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1000</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line">  win<span class="token punctuation">.</span>$axios <span class="token operator">=</span> service</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const i=s(e,[["render",o],["__file","axios 请求拦截.html.vue"]]),u=JSON.parse(`{"path":"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/axios%20%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA.html","title":"axios 请求拦截器","lang":"zh-CN","frontmatter":{"title":"axios 请求拦截器","date":"2022-12-29T00:00:00.000Z","tags":["vue","axios"],"categories":["居家篇"]},"headers":[{"level":2,"title":"request.js","slug":"request-js","link":"#request-js","children":[]}],"git":{"updatedTime":1727229103000,"contributors":[{"name":"袁果锅","email":"2914310412@qq.com","commits":1}]},"filePathRelative":"常用笔记/axios 请求拦截.md","excerpt":"<div class=\\"language-javascript\\" data-highlighter=\\"prismjs\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"line\\"><span class=\\"token keyword\\">import</span> axios <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"axios\\"</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">// 创建实例</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">const</span> Service <span class=\\"token operator\\">=</span> axios<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token literal-property property\\">timeout</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">8000</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token literal-property property\\">baseURL</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'http://xxx.com'</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token literal-property property\\">headers</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token string-property property\\">\\"content-type\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"application/json;charset:utf-8\\"</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">// 请求拦截</span></span>\\n<span class=\\"line\\">Service<span class=\\"token punctuation\\">.</span>interceptors<span class=\\"token punctuation\\">.</span>request<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">use</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">config</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token comment\\">//启动  加载中的   样式</span></span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">return</span> config</span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">//响应拦截</span></span>\\n<span class=\\"line\\">Service<span class=\\"token punctuation\\">.</span>interceptors<span class=\\"token punctuation\\">.</span>response<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">use</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">response</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">     <span class=\\"token comment\\">//清除加载中的样式</span></span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">return</span> response</span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span><span class=\\"token parameter\\">err</span><span class=\\"token operator\\">=&gt;</span><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token comment\\">//清除加载中的样式</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">// 暴露实例</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> Service</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span></code></pre></div>"}`);export{i as comp,u as data};
