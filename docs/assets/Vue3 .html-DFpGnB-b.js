import{_ as n,c as a,a as e,o as p}from"./app-CduvU-Ml.js";const t={};function l(i,s){return p(),a("div",null,s[0]||(s[0]=[e(`<p><a href="https://juejin.cn/post/7041038709906472974" target="_blank" rel="noopener noreferrer">Vue3.2的setup语法糖和Hook函数 (强烈推荐) - 掘金 (juejin.cn)</a></p><h2 id="toraw-和-markraw-取消响应式" tabindex="-1"><a class="header-anchor" href="#toraw-和-markraw-取消响应式"><span>toRaw 和 markRaw（取消响应式）</span></a></h2><p>●toRaw: 。作用:将一个由reactive生成的响应式对象转为普通对象。 D使用场景:用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。 ●markRaw: 。作用:标记一个对象，使其永远不会再成为响应式对象。 。应用场景: 1.有些值不应被设置为响应式的，例如复杂的第三方类库等。 2.当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。</p><h2 id="provide-和-inject" tabindex="-1"><a class="header-anchor" href="#provide-和-inject"><span>provide() 和 inject()</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">import { ref, provide } from &#39;vue&#39;</span>
<span class="line"></span>
<span class="line">const foo = ref(&#39;hello&#39;)</span>
<span class="line">// 提供静态值</span>
<span class="line">provide(&#39;foo&#39;, foo)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">------------子组件</span>
<span class="line"></span>
<span class="line">const bar = inject(&#39;foo&#39;)</span>
<span class="line">return{bar}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="watch监听函数" tabindex="-1"><a class="header-anchor" href="#watch监听函数"><span>watch监听函数</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">	<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;奇奇怪怪可可爱爱&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">	<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> obj<span class="token punctuation">.</span>msg<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">v1<span class="token punctuation">,</span> v2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// v1 就是被监听数据的最新值</span></span>
<span class="line">        <span class="token comment">// v2 就是被监听数据的原有值</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment">// 总结：如果侦听对象中当个属性，需要使用箭头函数的方式</span></span>
<span class="line">        <span class="token comment">// 侦听更少的数据有利于提高性能</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由跳转" tabindex="-1"><a class="header-anchor" href="#路由跳转"><span>路由跳转</span></a></h2><p>1.首先在需要跳转的页面引入API---useRouter</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2.在跳转页面定义router变量</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"> <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3.用<code>router.push跳转页面</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// 字符串</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 对象</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 命名的路由</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token string">&#39;123&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 带查询参数，变成 /register?userId=123</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;register&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token string">&#39;123&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.如果有参数的话，在接收页面引入API--useRoute</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>5.在接收页面定义变量route，获取传过来的变量</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">//query</span></span>
<span class="line"><span class="token keyword">let</span> userId<span class="token operator">=</span>route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>userId<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//params</span></span>
<span class="line"><span class="token keyword">let</span> userId<span class="token operator">=</span>route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>userId<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="值存入缓存" tabindex="-1"><a class="header-anchor" href="#值存入缓存"><span>值存入缓存</span></a></h2><ul><li><p><code>sessionStorage</code></p><p>也称会话缓存，当用户关闭浏览器窗口后，数据就会被删除；</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//存储</span></span>
<span class="line">sessionStorage<span class="token punctuation">.</span><span class="token function">getItems</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//按可以进行取值</span></span>
<span class="line">sessionStorage<span class="token punctuation">.</span><span class="token function">removeItems</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//按key单个删除</span></span>
<span class="line">sessionStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//删除全部数据</span></span>
<span class="line">sessionStorage<span class="token punctuation">.</span>length<span class="token punctuation">;</span><span class="token comment">//获取数据的数量</span></span>
<span class="line">sessionStorage<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取全部值</span></span>
<span class="line"><span class="token number">123456</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>localstorage</code></p><p>储存的数据没有时间限制，只要不删除，都会存在</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">localstorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//保存数据</span></span>
<span class="line">localstorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//读取数据</span></span>
<span class="line">localstorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//删除单个数据</span></span>
<span class="line">localstorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//删除所有数据</span></span>
<span class="line">localstorage<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//得到某个索引的key</span></span>
<span class="line">key和value都必须为字符串，web Storage的<span class="token constant">API</span>只能操作字符串</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="ts报错-绑定元素-id-隐式具有-any-类型" tabindex="-1"><a class="header-anchor" href="#ts报错-绑定元素-id-隐式具有-any-类型"><span>TS报错 <code>绑定元素“id”隐式具有“any”类型 </code></span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">方案一，修改tsconfig</span>
<span class="line">是修改tsconfig<span class="token punctuation">.</span>json，加下面这行参数屏蔽检查，从而不报错。</span>
<span class="line"></span>
<span class="line"><span class="token string-property property">&quot;suppressImplicitAnyIndexErrors&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ts报错-类型-never-上不存在属性-name" tabindex="-1"><a class="header-anchor" href="#ts报错-类型-never-上不存在属性-name"><span>TS报错 <code>类型“never”上不存在属性“name”</code></span></a></h2><blockquote><p>将他的类型转为 <code> null as any</code> 即可</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">   <span class="token literal-property property">subDataForm</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>   <span class="token comment">//修改之前</span></span>
<span class="line">   <span class="token literal-property property">subDataForm</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token keyword">as</span> any  <span class="token comment">//修改之后</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ts报错-类型-any-的参数不能赋给类型-never-的参数" tabindex="-1"><a class="header-anchor" href="#ts报错-类型-any-的参数不能赋给类型-never-的参数"><span>TS报错 <code>类型“any”的参数不能赋给类型“never”的参数</code></span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>formData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newUser <span class="token keyword">as</span> never<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="勾起整个页面刷新" tabindex="-1"><a class="header-anchor" href="#勾起整个页面刷新"><span>勾起整个页面刷新</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 相当于F5</span></span>
<span class="line"></span>
<span class="line">location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>location<span class="token punctuation">)</span>   <span class="token comment">// 刷新并且清除上一页缓存</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用命令跳转链接-本窗口、新窗口" tabindex="-1"><a class="header-anchor" href="#使用命令跳转链接-本窗口、新窗口"><span>使用命令跳转链接 （本窗口、新窗口）</span></a></h2><blockquote><p>新窗口跳转</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">     window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com/&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>本窗口跳转</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com/&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="setup-语法-script-中写name" tabindex="-1"><a class="header-anchor" href="#setup-语法-script-中写name"><span>setup 语法 script 中写name</span></a></h2><blockquote><p>下载包： <strong>npm i vite-plugin-vue-setup-extend -D</strong></p><p>在 <strong>vite.config.ts</strong> 中定义</p></blockquote><div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="diff"><pre class="language-diff"><code><span class="line">import { fileURLToPath, URL } from &#39;node:url&#39;</span>
<span class="line">import { defineConfig } from &#39;vite&#39;</span>
<span class="line">import vue from &#39;@vitejs/plugin-vue&#39;</span>
<span class="line"><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import VueSetExtend from &#39;vite-plugin-vue-setup-extend&#39;</span>
<span class="line"></span></span></span>
<span class="line">// https://vitejs.dev/config/</span>
<span class="line">export default defineConfig({</span>
<span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> plugins: [</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   vue(),</span>
<span class="line"></span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   VueSetExtend()</span>
<span class="line"></span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> ],</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line"> resolve: {</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   alias: {</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">     &#39;@&#39;: fileURLToPath(new URL(&#39;./src&#39;, import.meta.url))</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   }</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line"> }</span>
<span class="line"></span></span>})</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;person&quot;</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token generic-function"><span class="token function">defineProps</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span></span>
<span class="line">  msg<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38)]))}const o=n(t,[["render",l],["__file","Vue3 .html.vue"]]),r=JSON.parse('{"path":"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/Vue3%20.html","title":"Vue3 笔记","lang":"zh-CN","frontmatter":{"title":"Vue3 笔记","date":"2022-12-29T00:00:00.000Z","tags":["Vue3.0","笔记"],"categories":["居家篇"]},"headers":[{"level":2,"title":"toRaw 和 markRaw（取消响应式）","slug":"toraw-和-markraw-取消响应式","link":"#toraw-和-markraw-取消响应式","children":[]},{"level":2,"title":"provide() 和 inject()","slug":"provide-和-inject","link":"#provide-和-inject","children":[]},{"level":2,"title":"watch监听函数","slug":"watch监听函数","link":"#watch监听函数","children":[]},{"level":2,"title":"路由跳转","slug":"路由跳转","link":"#路由跳转","children":[]},{"level":2,"title":"值存入缓存","slug":"值存入缓存","link":"#值存入缓存","children":[]},{"level":2,"title":"TS报错 绑定元素“id”隐式具有“any”类型","slug":"ts报错-绑定元素-id-隐式具有-any-类型","link":"#ts报错-绑定元素-id-隐式具有-any-类型","children":[]},{"level":2,"title":"TS报错 类型“never”上不存在属性“name”","slug":"ts报错-类型-never-上不存在属性-name","link":"#ts报错-类型-never-上不存在属性-name","children":[]},{"level":2,"title":"TS报错 类型“any”的参数不能赋给类型“never”的参数","slug":"ts报错-类型-any-的参数不能赋给类型-never-的参数","link":"#ts报错-类型-any-的参数不能赋给类型-never-的参数","children":[]},{"level":2,"title":"勾起整个页面刷新","slug":"勾起整个页面刷新","link":"#勾起整个页面刷新","children":[]},{"level":2,"title":"使用命令跳转链接 （本窗口、新窗口）","slug":"使用命令跳转链接-本窗口、新窗口","link":"#使用命令跳转链接-本窗口、新窗口","children":[]},{"level":2,"title":"setup 语法 script 中写name","slug":"setup-语法-script-中写name","link":"#setup-语法-script-中写name","children":[]}],"git":{"updatedTime":1721805748000,"contributors":[{"name":"袁果锅","email":"2914310412@qq.com","commits":1}]},"filePathRelative":"常用笔记/Vue3 .md","excerpt":"<p><a href=\\"https://juejin.cn/post/7041038709906472974\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Vue3.2的setup语法糖和Hook函数 (强烈推荐) - 掘金 (juejin.cn)</a></p>\\n<h2>toRaw 和 markRaw（取消响应式）</h2>\\n<p>●toRaw:\\n。作用:将一个由reactive生成的响应式对象转为普通对象。\\nD使用场景:用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。\\n●markRaw:\\n。作用:标记一个对象，使其永远不会再成为响应式对象。\\n。应用场景:\\n1.有些值不应被设置为响应式的，例如复杂的第三方类库等。\\n2.当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。</p>"}');export{o as comp,r as data};
