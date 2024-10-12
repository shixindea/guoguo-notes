import{_ as n,c as a,a as t,o as e}from"./app-CGwmzqDL.js";const p={};function o(l,s){return e(),a("div",null,s[0]||(s[0]=[t(`<h2 id="_1-js数组操作" tabindex="-1"><a class="header-anchor" href="#_1-js数组操作"><span>1. js数组操作</span></a></h2><h4 id="【删】" tabindex="-1"><a class="header-anchor" href="#【删】"><span>【删】</span></a></h4><blockquote><p>pop() 方法用于删除数组的<strong>最后一个元素并返回删除的元素</strong>。</p><p>**注意：**此方法改变数组的长度！</p><p><strong>提示：</strong> 移除数组第一个元素，请使用 <a href="https://www.w3cschool.cn/jsref/jsref-shift.html" target="_blank" rel="noopener noreferrer">shift()</a> 方法</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Orange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Mango&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">fruits<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">*</span>fruits<span class="token operator">*</span> 结果输出：</span>
<span class="line">Banana<span class="token punctuation">,</span>Orange<span class="token punctuation">,</span>Apple</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。</p><p><strong>注意：</strong> 此方法改变数组的长度！</p><p><strong>提示:</strong> 移除数组末尾的元素可以使用 <a href="https://www.w3cschool.cn/jsref/jsref-pop.html" target="_blank" rel="noopener noreferrer">pop()</a> 方法。</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Orange&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Mango&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">fruits<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">*</span>fruits<span class="token operator">*</span>结果输出<span class="token operator">:</span></span>
<span class="line">Orange<span class="token punctuation">,</span>Apple<span class="token punctuation">,</span>Mango</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【map】方法遍历数组" tabindex="-1"><a class="header-anchor" href="#【map】方法遍历数组"><span>【map】方法遍历数组</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">  <span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>  </span>
<span class="line">             <span class="token literal-property property">key</span> <span class="token operator">:</span> <span class="token string">&quot;百度&quot;</span><span class="token punctuation">,</span>  </span>
<span class="line">             <span class="token literal-property property">value</span> <span class="token operator">:</span> <span class="token string">&quot;李彦宏&quot;</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">             <span class="token literal-property property">key</span> <span class="token operator">:</span> <span class="token string">&quot;阿里巴巴&quot;</span><span class="token punctuation">,</span>  </span>
<span class="line">             <span class="token literal-property property">value</span> <span class="token operator">:</span> <span class="token string">&quot;马云&quot;</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">;</span>  </span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//输出结果</span></span>
<span class="line"><span class="token comment">//Object {key : &quot;百度&quot;, value : &quot;李彦宏&quot;}</span></span>
<span class="line"><span class="token comment">//Object {key : &quot;阿里巴巴&quot;, value : &quot;马云&quot;}</span></span>
<span class="line"></span>
<span class="line"><span class="token literal-property property">原文链接：https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>blog<span class="token punctuation">.</span>csdn<span class="token punctuation">.</span>net<span class="token operator">/</span>pang_da_xing<span class="token operator">/</span>article<span class="token operator">/</span>details<span class="token operator">/</span><span class="token number">75676014</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-正则" tabindex="-1"><a class="header-anchor" href="#_2-正则"><span>2. 正则</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">regularexpression<span class="token operator">=</span><span class="token operator">/</span>pattern<span class="token operator">/</span><span class="token punctuation">[</span><span class="token keyword">switch</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这个switch就有三种值 g: 全局匹配 i: 忽略大小写 gi: 全局匹配 + 忽略大小写 JScript 语言参考</p><h2 id="_3-object-转换为-json-数据-json-stringify-obj对象数组" tabindex="-1"><a class="header-anchor" href="#_3-object-转换为-json-数据-json-stringify-obj对象数组"><span>3. Object 转换为 JSON 数据 JSON.stringify(OBJ对象数组)</span></a></h2><blockquote><h3 id="json-stringify-this-sign-time" tabindex="-1"><a class="header-anchor" href="#json-stringify-this-sign-time"><span>JSON.stringify(this.sign_time)</span></a></h3><h3 id="json-parse-json-stringify-obj对象数组" tabindex="-1"><a class="header-anchor" href="#json-parse-json-stringify-obj对象数组"><span>JSON.parse( JSON.stringify(OBJ对象数组))</span></a></h3><h1 id="vue-ob-observer" tabindex="-1"><a class="header-anchor" href="#vue-ob-observer"><span>Vue <strong>ob</strong>: Observer</span></a></h1><p>网上有很多解决的方案：</p><p><strong>第一种</strong>：<strong>ob</strong>: Observer 是 Vue 对数据监控添加的属性，如果想去掉可以用赋值的方式。例如Object.assign({},this.owner)。 用这种方式也是可以解决。</p><p>**第二种：**假设list里面存放的就是那些带有__ob__: Observer的可以用JSON.parse(JSON.stringify(this.list)）完美解决</p><p>作者：无枉少年 链接：https://www.jianshu.com/p/d9a8029356ef 来源：简书 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p></blockquote><h2 id="_4-强制刷新视图层-this-forceupdate" tabindex="-1"><a class="header-anchor" href="#_4-强制刷新视图层-this-forceupdate"><span>4.强制刷新视图层 <strong>this.$forceUpdate();</strong></span></a></h2><p>​ <strong>this.$forceUpdate();</strong></p>`,15)]))}const c=n(p,[["render",o],["__file","js常规.html.vue"]]),r=JSON.parse('{"path":"/%E9%A3%9E%E7%A0%81%E7%AF%87/js%E5%B8%B8%E8%A7%84.html","title":"JS常规","lang":"zh-CN","frontmatter":{"title":"JS常规","date":"2022-08-04T00:00:00.000Z","tags":["JavaScript"],"categories":["飞码篇"]},"headers":[{"level":2,"title":"1. js数组操作","slug":"_1-js数组操作","link":"#_1-js数组操作","children":[]},{"level":2,"title":"2. 正则","slug":"_2-正则","link":"#_2-正则","children":[]},{"level":2,"title":"3. Object  转换为 JSON 数据     JSON.stringify(OBJ对象数组)","slug":"_3-object-转换为-json-数据-json-stringify-obj对象数组","link":"#_3-object-转换为-json-数据-json-stringify-obj对象数组","children":[]},{"level":2,"title":"4.强制刷新视图层  this.$forceUpdate();","slug":"_4-强制刷新视图层-this-forceupdate","link":"#_4-强制刷新视图层-this-forceupdate","children":[]}],"git":{"updatedTime":1727229103000,"contributors":[{"name":"袁果锅","email":"2914310412@qq.com","commits":1}]},"filePathRelative":"飞码篇/js常规.md","excerpt":"<h2>1. js数组操作</h2>\\n<h4>【删】</h4>\\n<blockquote>\\n<p>pop() 方法用于删除数组的<strong>最后一个元素并返回删除的元素</strong>。</p>\\n<p>**注意：**此方法改变数组的长度！</p>\\n<p><strong>提示：</strong> 移除数组第一个元素，请使用 <a href=\\"https://www.w3cschool.cn/jsref/jsref-shift.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">shift()</a> 方法</p>\\n</blockquote>\\n<div class=\\"language-javascript\\" data-highlighter=\\"prismjs\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"line\\"><span class=\\"token keyword\\">var</span> fruits <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"Banana\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"Orange\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"Apple\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"Mango\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">fruits<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token operator\\">*</span>fruits<span class=\\"token operator\\">*</span> 结果输出：</span>\\n<span class=\\"line\\">Banana<span class=\\"token punctuation\\">,</span>Orange<span class=\\"token punctuation\\">,</span>Apple</span>\\n<span class=\\"line\\"></span></code></pre></div>"}');export{c as comp,r as data};
