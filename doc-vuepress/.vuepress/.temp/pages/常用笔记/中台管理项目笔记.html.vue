<template><div><h2 id="try-catch-finally-校验" tabindex="-1"><a class="header-anchor" href="#try-catch-finally-校验"><span>try catch finally 校验</span></a></h2>
<p><strong>try</strong>成功后的回调</p>
<p><strong>catch</strong>失败后的回调</p>
<p><strong>finally</strong>不论成功还是失败都执行的回调</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>loading<span class="token operator">=</span><span class="token boolean">true</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token string">'user/login'</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>loginForm<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">//  登录成功之后</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> <span class="token string">'登录失败'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>loading<span class="token operator">=</span><span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导航守卫" tabindex="-1"><a class="header-anchor" href="#导航守卫"><span>导航守卫</span></a></h2>
<p><img src="https://s1.ax1x.com/2022/08/16/vw6B7Q.png" alt=""></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 权限拦截在路由跳转  导航守卫</span></span>
<span class="line"><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">"./router"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">"./store"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> nProgress <span class="token keyword">from</span> <span class="token string">"nprogress"</span><span class="token punctuation">;</span>  <span class="token comment">//引入进度条插件</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'nprogress/nprogress.css'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 前置守卫</span></span>
<span class="line"><span class="token comment">// next() 放行</span></span>
<span class="line"><span class="token comment">// next(false) 跳转终止</span></span>
<span class="line"><span class="token comment">// next(地址) 跳转到某个地址</span></span>
<span class="line"><span class="token keyword">const</span> whiteList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'/login'</span><span class="token punctuation">,</span> <span class="token string">'/404'</span><span class="token punctuation">]</span>  <span class="token comment">//请求白名单</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  nProgress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//开启进度条</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 如果有token</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">'/login'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 如果要访问的是  登录页</span></span>
<span class="line">      <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>  <span class="token comment">//跳到主页</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>whiteList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 表示要去的地址在白名单</span></span>
<span class="line">      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  nProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//解决手动切换地址时 进度条不关闭的情况</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 后置守卫</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  nProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scss-同级选择和子集选择" tabindex="-1"><a class="header-anchor" href="#scss-同级选择和子集选择"><span>scss 同级选择和子集选择 (&amp;.)</span></a></h2>
<p><strong>使用&amp;连接符</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token comment">//sass</span></span>
<span class="line"><span class="token selector">.side-container </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">transition</span><span class="token punctuation">:</span> width 0.5s<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #263238<span class="token punctuation">;</span></span>
<span class="line">  <span class="token selector"><span class="token parent important">&amp;</span>.unfolded </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 195px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token selector">.logo </span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">width</span><span class="token punctuation">:</span> 195px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">height</span><span class="token punctuation">:</span> 64px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector"><span class="token parent important">&amp;</span>.folded </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 64px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token selector">.logo </span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">width</span><span class="token punctuation">:</span> 64px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">height</span><span class="token punctuation">:</span> 64px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不适用连接符</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line"><span class="token comment">// sass</span></span>
<span class="line"><span class="token selector">.side-container </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">transition</span><span class="token punctuation">:</span> width 0.5s<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #263238<span class="token punctuation">;</span></span>
<span class="line">  <span class="token selector">.unfolded </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 195px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token selector">.logo </span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">width</span><span class="token punctuation">:</span> 195px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">height</span><span class="token punctuation">:</span> 64px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">.folded </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 64px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token selector">.logo </span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">width</span><span class="token punctuation">:</span> 64px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">height</span><span class="token punctuation">:</span> 64px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>*<em>多类选择器：**.side-container.unfolded*<em>与*</em>.side-container .unfolded*<em>是不一样的，前者是*<em>同级关系*</em>，后者是*<em>父子级关系*</em>。</em></em></p>
<h2 id="默认全部导入方法" tabindex="-1"><a class="header-anchor" href="#默认全部导入方法"><span>默认全部导入方法</span></a></h2>
<p><strong>全部导入</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> directives <span class="token keyword">from</span> <span class="token string">'./directives'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="对象转数组-object-keys" tabindex="-1"><a class="header-anchor" href="#对象转数组-object-keys"><span>对象转数组 Object.keys</span></a></h2>
<p><strong>示例代码</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// simple array</span></span>
<span class="line"><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// console: ['0', '1', '2']</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// array like object</span></span>
<span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token string">'c'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// console: ['0', '1', '2']</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// array like object with random key ordering</span></span>
<span class="line"><span class="token keyword">var</span> anObj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">100</span><span class="token operator">:</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token operator">:</span> <span class="token string">'c'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>anObj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// console: ['2', '7', '100']</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// getFoo is a property which isn't enumerable</span></span>
<span class="line"><span class="token keyword">var</span> myObj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">getFoo</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>foo<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">myObj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>myObj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// console: ['foo']</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义指令用法实例" tabindex="-1"><a class="header-anchor" href="#自定义指令用法实例"><span>自定义指令用法实例</span></a></h2>
<blockquote>
<h3 id="本节主要解决异常图片情况" tabindex="-1"><a class="header-anchor" href="#本节主要解决异常图片情况"><span><strong>本节主要解决异常图片情况</strong></span></a></h3>
</blockquote>
<p><strong><code v-pre>目标</code></strong>： 通过自定义指令的形式解决异常图片的处理</p>
<blockquote>
<h3 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令"><span><strong>自定义指令</strong></span></a></h3>
</blockquote>
<p>首先定义第一个自定义指令  <strong><code v-pre>v-imagerror</code></strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> imagerror <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 指令对象 会在当前的dom元素插入到节点之后执行</span></span>
<span class="line">  <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">dom<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// options是 指令中的变量的解释  其中有一个属性叫做 value</span></span>
<span class="line">    <span class="token comment">// dom 表示当前指令作用的dom对象</span></span>
<span class="line">    <span class="token comment">// dom认为此时就是图片</span></span>
<span class="line">    <span class="token comment">// 当图片有地址 但是地址没有加载成功的时候 会报错 会触发图片的一个事件 => onerror</span></span>
<span class="line">    dom<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 当图片出现异常的时候 会将指令配置的默认图片设置为该图片的内容</span></span>
<span class="line">      <span class="token comment">// dom可以注册error事件</span></span>
<span class="line">      dom<span class="token punctuation">.</span>src <span class="token operator">=</span> options<span class="token punctuation">.</span>value <span class="token comment">// 这里不能写死</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h3 id="在main-js完成自定义指令全局注册" tabindex="-1"><a class="header-anchor" href="#在main-js完成自定义指令全局注册"><span><strong>在main.js完成自定义指令全局注册</strong></span></a></h3>
</blockquote>
<p>然后，在**<code v-pre>main.js</code>**中完成对于该文件中所有指令的全局注册</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> directives <span class="token keyword">from</span> <span class="token string">'@/directives'</span></span>
<span class="line"><span class="token comment">// 注册自定义指令</span></span>
<span class="line"><span class="token comment">// 遍历所有的导出的指令对象 完成自定义全局注册</span></span>
<span class="line">Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>directives<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 注册自定义指令</span></span>
<span class="line">  Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> directives<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>针对上面的引入语法  <strong><code v-pre>import *  as  变量</code></strong>  得到的是一个对象**<code v-pre>{ 变量1：对象1，变量2： 对象2 ...   }</code>**, 所以可以采用对象遍历的方法进行处理</p>
<p>指令注册成功，可以在**<code v-pre>navbar.vue</code>**中直接使用了</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">v-imageerror</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultImg<span class="token punctuation">"</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>staffPhoto<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-avatar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"> <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">defaultImg</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@/assets/common/head.jpg'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数式组件" tabindex="-1"><a class="header-anchor" href="#函数式组件"><span>函数式组件</span></a></h2>
<p><code v-pre>functional</code>为<code v-pre>true</code>，表示该组件为一个函数式组件</p>
<p>函数式组件： 没有<code v-pre>data</code>状态，没有<code v-pre>响应式数据</code>，只会接收<code v-pre>props</code>属性， 没有<code v-pre>this</code>， 他就是一个函数</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'MenuItem'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">functional</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">''</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="debugger-调试" tabindex="-1"><a class="header-anchor" href="#debugger-调试"><span>debugger 调试</span></a></h2>
<blockquote>
<h3 id="debugger-可以在js中写入这个代码来进行调试" tabindex="-1"><a class="header-anchor" href="#debugger-可以在js中写入这个代码来进行调试"><span>debugger 可以在js中写入这个代码来进行调试</span></a></h3>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"> <span class="token keyword">function</span> <span class="token function">tranListToTreeDate</span><span class="token punctuation">(</span><span class="token parameter">list<span class="token punctuation">,</span> rootValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">debugger</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="native-修饰符" tabindex="-1"><a class="header-anchor" href="#native-修饰符"><span>native 修饰符</span></a></h2>
<blockquote>
<h4 id="作用-唤醒该组件原生的事件" tabindex="-1"><a class="header-anchor" href="#作用-唤醒该组件原生的事件"><span>作用：唤醒该组件原生的事件</span></a></h4>
</blockquote>
<h2 id="利用sync修饰符关闭新增弹层" tabindex="-1"><a class="header-anchor" href="#利用sync修饰符关闭新增弹层"><span>利用sync修饰符关闭新增弹层</span></a></h2>
<blockquote>
<p>这里我们学习一个新的技巧，<strong><code v-pre>sync修饰符</code></strong></p>
</blockquote>
<p>按照常规，想要让父组件更新**<code v-pre>showDialog</code>**的话，需要这样做</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 子组件</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'changedialog'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">//触发事件</span></span>
<span class="line"><span class="token comment">// 父组件</span></span>
<span class="line"><span class="token operator">&lt;</span>child @changedialog<span class="token operator">=</span><span class="token string">"method"</span> <span class="token operator">:</span>showDialog<span class="token operator">=</span><span class="token string">"showDialog"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"> <span class="token function">method</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>showDialog <span class="token operator">=</span> value</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>但是，vuejs为我们提供了**<code v-pre>sync修饰符</code>**，它提供了一种简写模式 也就是</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 子组件 update:固定写法 (update:props名称, 值)</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'update:showDialog'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">//触发事件</span></span>
<span class="line"><span class="token comment">// 父组件 sync修饰符</span></span>
<span class="line"><span class="token operator">&lt;</span>child  <span class="token operator">:</span>showDialog<span class="token punctuation">.</span>sync<span class="token operator">=</span><span class="token string">"showDialog"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要用sync修饰，就可以省略父组件的监听和方法，直接将值赋值给showDialog</p>
<p><strong>取消按钮和关闭</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 点击确定时触发</span></span>
<span class="line">    <span class="token function">btnOK</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>deptForm<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">isOK</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>isOK<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// 表示可以提交了</span></span>
<span class="line">          <span class="token keyword">await</span> <span class="token function">addDepartments</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>formData<span class="token punctuation">,</span> <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>treeNode<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 调用新增接口 添加父部门的id</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'addDepts'</span><span class="token punctuation">)</span> <span class="token comment">// 告诉父组件 新增数据成功 重新拉取数据</span></span>
<span class="line">          <span class="token comment">// update:props名称</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'update:showDialog'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插槽的两种写法" tabindex="-1"><a class="header-anchor" href="#插槽的两种写法"><span>插槽的两种写法</span></a></h2>
<p><strong>定义一个插槽</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line">   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>  <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showBefore<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>before<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>el-icon-info<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">          <span class="token comment">&lt;!-- 定义前面得插槽 --></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>before<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-col</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-row</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span> <span class="token attr-name">justify</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>end<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">           <span class="token comment">&lt;!-- 定义后面的插槽 --></span></span>
<span class="line">           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>after<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-row</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-col</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>两种写法：</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line">// 第一种写法 template 标签嵌套使用</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>before</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>前面的插槽<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">// 第二种写法 slot 直接引用</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>after<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 导入excel <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局注册组件" tabindex="-1"><a class="header-anchor" href="#全局注册组件"><span>全局注册组件</span></a></h2>
<blockquote>
<p>为了方便所有的页面都可以不用引用该组件，可以进行全局注册</p>
</blockquote>
<p>提供注册入口 <strong><code v-pre>src/componets/index.js</code></strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 该文件负责所有的公共的组件的全局注册   Vue.use</span></span>
<span class="line"><span class="token keyword">import</span> PageTools <span class="token keyword">from</span> <span class="token string">'./PageTools'</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//  注册全局的通用栏组件对象</span></span>
<span class="line">    Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'PageTools'</span><span class="token punctuation">,</span> PageTools<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>在入口处进行注册 <strong><code v-pre>src/main.js</code></strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> Component <span class="token keyword">from</span> <span class="token string">'@/components'</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span> <span class="token comment">// 注册自己的插件</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分页-实现-逻辑" tabindex="-1"><a class="header-anchor" href="#分页-实现-逻辑"><span>分页 实现 逻辑</span></a></h2>
<p><strong>接口</strong></p>
<p><strong>Path：</strong> /sys/user</p>
<p><strong>Method：</strong> GET
<strong>Query</strong></p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>是否必须</th>
<th>示例</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>page</td>
<td>是</td>
<td>1</td>
<td>页码</td>
</tr>
<tr>
<td>size</td>
<td>是</td>
<td>10</td>
<td>每页条数</td>
</tr>
</tbody>
</table>
<p><strong>返回数据</strong></p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>是否必须</th>
<th>默认值</th>
<th>备注</th>
<th>其他信息</th>
</tr>
</thead>
<tbody>
<tr>
<td>success</td>
<td>boolean</td>
<td>非必须</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>code</td>
<td>number</td>
<td>非必须</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>message</td>
<td>string</td>
<td>非必须</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>object</td>
<td>非必须</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>├─ total</td>
<td>number</td>
<td>非必须</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>├─ rows</td>
<td>object []</td>
<td>非必须</td>
<td></td>
<td></td>
<td>item 类型: object</td>
</tr>
<tr>
<td>├─├─ id</td>
<td>string</td>
<td>必须</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>├─├─ username</td>
<td>string</td>
<td>必须</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>├─├─ password</td>
<td>string</td>
<td>必须</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<blockquote>
<h3 id="_1-调用接口" tabindex="-1"><a class="header-anchor" href="#_1-调用接口"><span>1.调用接口</span></a></h3>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 获取员工列表</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getEmployeeList</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/sys/user'</span><span class="token punctuation">,</span></span>
<span class="line">        params</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h3 id="_2-组件中定义" tabindex="-1"><a class="header-anchor" href="#_2-组件中定义"><span>2.组件中定义</span></a></h3>
</blockquote>
<blockquote>
<p><code v-pre>list</code>负责接收所需要的数据</p>
<p><code v-pre>page</code>负责控制分页</p>
<p>loading控制加载样式</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token operator">&lt;</span>script<span class="token operator">></span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getEmployeeList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/employees.js'</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token comment">//当前第几页</span></span>
<span class="line">        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span><span class="token comment">//每页的个数，当前每页十条记录</span></span>
<span class="line">        <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">//总数</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span>  <span class="token comment">//加载状态为false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getEmployeeList</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">getEmployeeList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">      <span class="token keyword">const</span> <span class="token punctuation">{</span> total<span class="token punctuation">,</span> rows <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getEmployeeList</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">.</span>total <span class="token operator">=</span> total</span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> rows</span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h3 id="页面中去绑定" tabindex="-1"><a class="header-anchor" href="#页面中去绑定"><span>页面中去绑定</span></a></h3>
<p>表格控件绑定 数据</p>
 <el-table border `:data="list"`>  绑定到上方定义的list 数据
<el-table-column label="序号" sortable="" `type="index" `/> 表示 显示为`序号`
 <el-table-column label="姓名" sortable="" `prop="username"` /> 将`list数据`中的`username`绑定到这个位置
</blockquote>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token comment">&lt;!-- 放置表格和分页 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-card</span> <span class="token attr-name">v-loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span> <span class="token attr-name">border</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>序号<span class="token punctuation">"</span></span> <span class="token attr-name">sortable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>姓名<span class="token punctuation">"</span></span> <span class="token attr-name">sortable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>工号<span class="token punctuation">"</span></span> <span class="token attr-name">sortable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>workNumber<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>聘用形式<span class="token punctuation">"</span></span> <span class="token attr-name">sortable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formOfEmployment<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>部门<span class="token punctuation">"</span></span> <span class="token attr-name">sortable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>departmentName<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>入职时间<span class="token punctuation">"</span></span> <span class="token attr-name">sortable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>timeOfEntry<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>账户状态<span class="token punctuation">"</span></span> <span class="token attr-name">sortable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>enableState<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>操作<span class="token punctuation">"</span></span> <span class="token attr-name">sortable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">fixed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>280<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>查看<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>转正<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>调岗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>离职<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>角色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>删除<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 分页组件 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-row</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span> <span class="token attr-name">justify</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>middle<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 60px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-pagination</span></span>
<span class="line">                       <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prev, pager, next<span class="token punctuation">"</span></span></span>
<span class="line">                       <span class="token attr-name">:page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page.size<span class="token punctuation">"</span></span></span>
<span class="line">                       <span class="token attr-name">:current-page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page.page<span class="token punctuation">"</span></span></span>
<span class="line">                       <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page.total<span class="token punctuation">"</span></span></span>
<span class="line">                       <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changePage<span class="token punctuation">"</span></span></span>
<span class="line">                       <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-row</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-card</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="excel-插件-xlsx" tabindex="-1"><a class="header-anchor" href="#excel-插件-xlsx"><span>Excel 插件 XLSX</span></a></h2>
<blockquote>
<h3 id="扩展-复杂表头的导出" tabindex="-1"><a class="header-anchor" href="#扩展-复杂表头的导出"><span><strong><code v-pre>扩展</code>  复杂表头的导出</strong></span></a></h3>
</blockquote>
<blockquote>
<p>当需要导出复杂表头的时候，vue-element-admin同样支持该类操作</p>
</blockquote>
<p><strong>vue-element-admin</strong> 提供的导出方法中有 <strong>multiHeader</strong>和<strong>merges</strong> 的参数</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>multiHeader</td>
<td>复杂表头的部分</td>
<td>Array</td>
<td>/</td>
<td>[[]]</td>
</tr>
<tr>
<td>merges</td>
<td>需要合并的部分</td>
<td>Array</td>
<td>/</td>
<td>[]</td>
</tr>
</tbody>
</table>
<p>multiHeader里面是一个二维数组，里面的一个元素是一行表头，假设你想得到一个如图的结构</p>
<p><img src="@source/常用笔记/assets/image-20201014152302636.png" alt="image-20201014152302636"></p>
<p>mutiHeader应该这样定义</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> multiHeader <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'姓名'</span><span class="token punctuation">,</span> <span class="token string">'主要信息'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">'部门'</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>multiHeader中的一行表头中的字段的个数需要和真正的列数相等，假设想要跨列，多余的空间需要定义成空串</p>
<p>它主要对应的是标准的表头</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> header <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'姓名'</span><span class="token punctuation">,</span> <span class="token string">'手机号'</span><span class="token punctuation">,</span> <span class="token string">'入职日期'</span><span class="token punctuation">,</span> <span class="token string">'聘用形式'</span><span class="token punctuation">,</span> <span class="token string">'转正日期'</span><span class="token punctuation">,</span> <span class="token string">'工号'</span><span class="token punctuation">,</span> <span class="token string">'部门'</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果，我们要实现其合并的效果， 需要设定merges选项</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"> <span class="token keyword">const</span> merges <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'A1:A2'</span><span class="token punctuation">,</span> <span class="token string">'B1:F1'</span><span class="token punctuation">,</span> <span class="token string">'G1:G2'</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>merges的顺序是没关系的，只要配置这两个属性，就可以导出复杂表头的excel了</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">  <span class="token function">exportData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'姓名'</span><span class="token operator">:</span> <span class="token string">'username'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'手机号'</span><span class="token operator">:</span> <span class="token string">'mobile'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'入职日期'</span><span class="token operator">:</span> <span class="token string">'timeOfEntry'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'聘用形式'</span><span class="token operator">:</span> <span class="token string">'formOfEmployment'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'转正日期'</span><span class="token operator">:</span> <span class="token string">'correctionTime'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'工号'</span><span class="token operator">:</span> <span class="token string">'workNumber'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'部门'</span><span class="token operator">:</span> <span class="token string">'departmentName'</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token comment">// 导出excel</span></span>
<span class="line">      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/vendor/Export2Excel'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">excel</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//  excel是引入文件的导出对象</span></span>
<span class="line">        <span class="token comment">// 导出  header从哪里来</span></span>
<span class="line">        <span class="token comment">// data从哪里来</span></span>
<span class="line">        <span class="token comment">// 现在没有一个接口获取所有的数据</span></span>
<span class="line">        <span class="token comment">// 获取员工的接口 页码 每页条数    100   1 10000</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">{</span> rows <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getEmployeeList</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">.</span>total <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">formatJson</span><span class="token punctuation">(</span>headers<span class="token punctuation">,</span> rows<span class="token punctuation">)</span> <span class="token comment">// 返回的data就是 要导出的结构</span></span>
<span class="line">        <span class="token keyword">const</span> multiHeader <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'姓名'</span><span class="token punctuation">,</span> <span class="token string">'主要信息'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">'部门'</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token keyword">const</span> merges <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'A1:A2'</span><span class="token punctuation">,</span> <span class="token string">'B1:F1'</span><span class="token punctuation">,</span> <span class="token string">'G1:G2'</span><span class="token punctuation">]</span></span>
<span class="line">        excel<span class="token punctuation">.</span><span class="token function">export_json_to_excel</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">header</span><span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">          data<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'员工资料表'</span><span class="token punctuation">,</span></span>
<span class="line">          multiHeader<span class="token punctuation">,</span> <span class="token comment">// 复杂表头</span></span>
<span class="line">          merges <span class="token comment">// 合并选项</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// excel.export_json_to_excel({</span></span>
<span class="line">        <span class="token comment">//   header: ['姓名', '工资'],</span></span>
<span class="line">        <span class="token comment">//   data: [['张三', 3000], ['李四', 5000]],</span></span>
<span class="line">        <span class="token comment">//   filename: '员工工资表'</span></span>
<span class="line">        <span class="token comment">// })</span></span>
<span class="line">        <span class="token comment">// [{ username: '张三',mobile: 13112345678 }]  => [[]]</span></span>
<span class="line">        <span class="token comment">// 要转化 数据结构 还要和表头的顺序对应上</span></span>
<span class="line">        <span class="token comment">// 要求转出的标题是中文</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 将表头数据和数据进行对应</span></span>
<span class="line">    <span class="token comment">// [{}]  =>   [[]]</span></span>
<span class="line">    <span class="token function">formatJson</span><span class="token punctuation">(</span><span class="token parameter">headers<span class="token punctuation">,</span> rows</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> rows<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// item是一个对象  { mobile: 132111,username: '张三'  }</span></span>
<span class="line">        <span class="token comment">// ["手机号", "姓名", "入职日期" 。。]</span></span>
<span class="line">        <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// 需要判断 字段</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'timeOfEntry'</span> <span class="token operator">||</span> headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'correctionTime'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 格式化日期</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token function">formatDate</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'formOfEmployment'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> obj <span class="token operator">=</span> EmployeeEnum<span class="token punctuation">.</span>hireType<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">obj</span> <span class="token operator">=></span> obj<span class="token punctuation">.</span>id <span class="token operator">===</span> item<span class="token punctuation">[</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">return</span> obj <span class="token operator">?</span> obj<span class="token punctuation">.</span>value <span class="token operator">:</span> <span class="token string">'未知'</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          <span class="token keyword">return</span> item<span class="token punctuation">[</span>headers<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment">// ["132", '张三’， ‘’，‘’，‘’d]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token comment">// return rows.map(item => Object.keys(headers).map(key => item[headers[key]]))</span></span>
<span class="line">      <span class="token comment">// 需要处理时间格式问题</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态路由传参" tabindex="-1"><a class="header-anchor" href="#动态路由传参"><span>动态路由传参</span></a></h2>
<blockquote>
<p>? 的含义就是 id参数,可传可不传</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"detail/:id?"</span><span class="token punctuation">,</span>  <span class="token comment">//动态路由传参</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="图片校验文件大小和类型" tabindex="-1"><a class="header-anchor" href="#图片校验文件大小和类型"><span>图片校验文件大小和类型</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">beforeUpload</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 要开始做文件上传的检查了</span></span>
<span class="line">    <span class="token comment">// 文件类型 文件大小</span></span>
<span class="line">    <span class="token keyword">const</span> types <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'image/jpeg'</span><span class="token punctuation">,</span> <span class="token string">'image/gif'</span><span class="token punctuation">,</span> <span class="token string">'image/bmp'</span><span class="token punctuation">,</span> <span class="token string">'image/png'</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>types<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'上传图片只能是 JPG、GIF、BMP、PNG 格式!'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//  检查大小</span></span>
<span class="line">    <span class="token keyword">const</span> maxSize <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>maxSize <span class="token operator">&lt;</span> file<span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'图片大小最大不能超过5M'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


