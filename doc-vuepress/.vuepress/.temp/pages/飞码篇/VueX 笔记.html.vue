<template><div><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2>
<blockquote>
<p>一、Vuex的五个核心概念：state、getters、mutations、actions、modules
1、state: vuex的基本数据，用来存储变量；
2、getters: 从基本数据（state）派生的数据，相当于state的计算属性；
3、mutations: 提交更新数据的方法，必须是同步的(如果需要异步使用action)。每个mution 都有一个字符串的事件类型（type）和一个回调函数（handler）。
回调函数就是我们实际进行状态更改的地方，并且它会接受 state作为第一个参数，提交载荷作为第二个参数。
4、action: 和mution的功能大致相同，不同之处在于 ①Action提交的是mution，而不是直接变更状态，②Action可以包含任意异步操作。
5、modules: 模块化vuex，可以让每一个模块拥有自己的 state、mutation、action、 getters，使得结构非常清晰，方便管理。</p>
</blockquote>
<h2 id="npm-i-vuex-save" tabindex="-1"><a class="header-anchor" href="#npm-i-vuex-save"><span>npm i vueX --save</span></a></h2>
<h2 id="引入vuex并访问存储在vuex中的数据" tabindex="-1"><a class="header-anchor" href="#引入vuex并访问存储在vuex中的数据"><span>引入vuex并访问存储在vuex中的数据</span></a></h2>
<p>1、在vue项目中①：使用命令yarn add vuex安装vuex插件②：新建文件命名为store.js,在文件中引入vue和vuex并使用vuex③构建新的Vuex.store对象,传入作为参数的对象，对象中包含基本的state、getter、mutations、actions四个属性。</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">state</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">mutations</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、将store.js文件引入到main.js文件中，将store作为子属性传入构建出vue对象。这样在全局都可以访问到store中存储的数据。</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span></span>
<span class="line"><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./store/index'</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    store<span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问state-中的数据" tabindex="-1"><a class="header-anchor" href="#访问state-中的数据"><span>访问state  中的数据</span></a></h2>
<p>3、这样就可以在任何vue文件中通过this.$store.state来访问数值了。</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vue logo<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./assets/logo.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        {{a}}</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    export default {</span>
<span class="line">        name: 'app',</span>
<span class="line">        data(){</span>
<span class="line">            return{</span>
<span class="line">                a:1,</span>
<span class="line">            }</span>
<span class="line">        },</span>
<span class="line">        created(){</span>
<span class="line">            this.a = this.$store.state.x;</span>
<span class="line">            console.log(this.a)</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>也可以使用 ES6 语法进行结构取值</p>
</blockquote>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span></span>
<span class="line">    数据为{{$store.state.count}} {{count}}</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'count'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mutations改变state-中的数据" tabindex="-1"><a class="header-anchor" href="#mutations改变state-中的数据"><span>mutations改变state 中的数据</span></a></h2>
<p>vuex 中定义</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//修改state的mutation方法</span></span>
<span class="line">    <span class="token comment">//每一个mutation方法都有对应的参数</span></span>
<span class="line">    <span class="token comment">// state 指的就是当前vuex中的state对象</span></span>
<span class="line">    <span class="token comment">// payload 载荷提交mutation的方法的时候传 递的参数它可以是任何形式的任何类型的值</span></span>
<span class="line">    <span class="token function">addcount</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//payload 是形参可以不写</span></span>
<span class="line">      state<span class="token punctuation">.</span>count <span class="token operator">+=</span> payload</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h2 id="原始方法调用" tabindex="-1"><a class="header-anchor" href="#原始方法调用"><span>原始方法调用</span></a></h2>
</blockquote>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addcount<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>改变button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"> <span class="token function">addcount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'addcount'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h2 id="辅助函数" tabindex="-1"><a class="header-anchor" href="#辅助函数"><span>辅助函数</span></a></h2>
</blockquote>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addcount(100)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>改变button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">import { mapMutations } from 'vuex'</span>
<span class="line"></span>
<span class="line">methods: {</span>
<span class="line">...mapMutations(['addcount'])</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="action和-mutations-模块化存储调用mapstate、dispatch" tabindex="-1"><a class="header-anchor" href="#action和-mutations-模块化存储调用mapstate、dispatch"><span><code v-pre>action</code>和<code v-pre> mutations</code> 模块化存储调用<code v-pre>mapState</code>、<code v-pre>dispatch</code></span></a></h2>
<p><strong>vueX</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> reqCategoryList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api'</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">namespaced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//开启namespace:true，该模块就成为命名空间模块了</span></span>
<span class="line">    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">categoryListData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token constant">CATEGORYLIST</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            state<span class="token punctuation">.</span>categoryListData <span class="token operator">=</span> data</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">async</span> <span class="token function">categoryList_action</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">reqCategoryList</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//请求成功</span></span>
<span class="line">                <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'CATEGORYLIST'</span><span class="token punctuation">,</span> result<span class="token punctuation">.</span>data<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>home.vue</strong></p>
<blockquote>
<p><code v-pre>mapState</code> 页面调用</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'home/categoryList_action'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function-variable function">categoryList</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>home<span class="token punctuation">.</span>categoryListData</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


