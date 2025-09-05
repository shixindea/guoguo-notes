<template><div><h2 id="_1-js数组操作" tabindex="-1"><a class="header-anchor" href="#_1-js数组操作"><span>1. js数组操作</span></a></h2>
<h4 id="【删】" tabindex="-1"><a class="header-anchor" href="#【删】"><span>【删】</span></a></h4>
<blockquote>
<p>pop() 方法用于删除数组的<strong>最后一个元素并返回删除的元素</strong>。</p>
<p>**注意：**此方法改变数组的长度！</p>
<p><strong>提示：</strong> 移除数组第一个元素，请使用 <a href="https://www.w3cschool.cn/jsref/jsref-shift.html" target="_blank" rel="noopener noreferrer">shift()</a> 方法</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Banana"</span><span class="token punctuation">,</span> <span class="token string">"Orange"</span><span class="token punctuation">,</span> <span class="token string">"Apple"</span><span class="token punctuation">,</span> <span class="token string">"Mango"</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">fruits<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">*</span>fruits<span class="token operator">*</span> 结果输出：</span>
<span class="line">Banana<span class="token punctuation">,</span>Orange<span class="token punctuation">,</span>Apple</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。</p>
<p><strong>注意：</strong> 此方法改变数组的长度！</p>
<p><strong>提示:</strong> 移除数组末尾的元素可以使用 <a href="https://www.w3cschool.cn/jsref/jsref-pop.html" target="_blank" rel="noopener noreferrer">pop()</a> 方法。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">var</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Banana"</span><span class="token punctuation">,</span> <span class="token string">"Orange"</span><span class="token punctuation">,</span> <span class="token string">"Apple"</span><span class="token punctuation">,</span> <span class="token string">"Mango"</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">fruits<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">*</span>fruits<span class="token operator">*</span>结果输出<span class="token operator">:</span></span>
<span class="line">Orange<span class="token punctuation">,</span>Apple<span class="token punctuation">,</span>Mango</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="【map】方法遍历数组" tabindex="-1"><a class="header-anchor" href="#【map】方法遍历数组"><span>【map】方法遍历数组</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">  <span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>  </span>
<span class="line">             <span class="token literal-property property">key</span> <span class="token operator">:</span> <span class="token string">"百度"</span><span class="token punctuation">,</span>  </span>
<span class="line">             <span class="token literal-property property">value</span> <span class="token operator">:</span> <span class="token string">"李彦宏"</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">             <span class="token literal-property property">key</span> <span class="token operator">:</span> <span class="token string">"阿里巴巴"</span><span class="token punctuation">,</span>  </span>
<span class="line">             <span class="token literal-property property">value</span> <span class="token operator">:</span> <span class="token string">"马云"</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">;</span>  </span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//输出结果</span></span>
<span class="line"><span class="token comment">//Object {key : "百度", value : "李彦宏"}</span></span>
<span class="line"><span class="token comment">//Object {key : "阿里巴巴", value : "马云"}</span></span>
<span class="line"></span>
<span class="line"><span class="token literal-property property">原文链接：https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>blog<span class="token punctuation">.</span>csdn<span class="token punctuation">.</span>net<span class="token operator">/</span>pang_da_xing<span class="token operator">/</span>article<span class="token operator">/</span>details<span class="token operator">/</span><span class="token number">75676014</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h3 id="_1、数组的属性" tabindex="-1"><a class="header-anchor" href="#_1、数组的属性"><span><strong>1、数组的属性</strong></span></a></h3>
</blockquote>
<p>在Array对象中有3个属性，分别是length、constructor和prototype。在初学者阶段，我们仅仅掌握length这个属性就可以了。</p>
<blockquote>
<h3 id="_2、数组的方法" tabindex="-1"><a class="header-anchor" href="#_2、数组的方法"><span>2、数组的方法</span></a></h3>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">·方法</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">slice()</td>
<td style="text-align:left">获取数组中的某段数组元素</td>
</tr>
<tr>
<td style="text-align:left">unshift()</td>
<td style="text-align:left">在数组开头添加元素</td>
</tr>
<tr>
<td style="text-align:left">push()</td>
<td style="text-align:left">在数组末尾添加元素</td>
</tr>
<tr>
<td style="text-align:left">shift()</td>
<td style="text-align:left">删除数组中第一个元素</td>
</tr>
<tr>
<td style="text-align:left">pop()</td>
<td style="text-align:left">删除数组最后一个元素</td>
</tr>
<tr>
<td style="text-align:left">toString()</td>
<td style="text-align:left">将数组转换为字符串</td>
</tr>
<tr>
<td style="text-align:left">join()</td>
<td style="text-align:left">将数组元素连接成字符串</td>
</tr>
<tr>
<td style="text-align:left">concat()</td>
<td style="text-align:left">多个数组连接为字符串</td>
</tr>
<tr>
<td style="text-align:left">sort()</td>
<td style="text-align:left">数组元素正向排序</td>
</tr>
<tr>
<td style="text-align:left">reverse()</td>
<td style="text-align:left">数组元素反向排序</td>
</tr>
</tbody>
</table>
<blockquote>
<h3 id="数值对象" tabindex="-1"><a class="header-anchor" href="#数值对象"><span><strong>数值对象</strong></span></a></h3>
</blockquote>
<p>下面都是这一章所讲解到的Math对象比较重要的方法：</p>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">max(x,y)</td>
<td style="text-align:left">返回x和y中的最大值</td>
</tr>
<tr>
<td style="text-align:left">min(x,y)</td>
<td style="text-align:left">返回x和y中的最小值</td>
</tr>
<tr>
<td style="text-align:left">pow(x,y)</td>
<td style="text-align:left">返回x的y次幂</td>
</tr>
<tr>
<td style="text-align:left">abs(x)</td>
<td style="text-align:left">返回数的绝对值</td>
</tr>
<tr>
<td style="text-align:left">round(x)</td>
<td style="text-align:left">把数四舍五入为最接近的整数</td>
</tr>
<tr>
<td style="text-align:left">random()</td>
<td style="text-align:left">返回0~1之间的随机数</td>
</tr>
<tr>
<td style="text-align:left">ceil(x)</td>
<td style="text-align:left">对一个数进行上舍入</td>
</tr>
<tr>
<td style="text-align:left">floor(x)</td>
<td style="text-align:left">对一个数进行下舍入</td>
</tr>
</tbody>
</table>
<h2 id="_2-过滤扩展名" tabindex="-1"><a class="header-anchor" href="#_2-过滤扩展名"><span>2. 过滤扩展名</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> name <span class="token operator">=</span> aaa<span class="token punctuation">.</span>png</span>
<span class="line">name<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> name<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-object-转换为-json-数据-json-stringify-obj对象数组" tabindex="-1"><a class="header-anchor" href="#_3-object-转换为-json-数据-json-stringify-obj对象数组"><span>3. Object  转换为 JSON 数据     JSON.stringify(OBJ对象数组)</span></a></h2>
<blockquote>
<h3 id="json-stringify-this-sign-time" tabindex="-1"><a class="header-anchor" href="#json-stringify-this-sign-time"><span>JSON.stringify(this.sign_time)</span></a></h3>
<h3 id="json-parse-json-stringify-obj对象数组" tabindex="-1"><a class="header-anchor" href="#json-parse-json-stringify-obj对象数组"><span>JSON.parse( JSON.stringify(OBJ对象数组))</span></a></h3>
<h2 id="vue-ob-observer" tabindex="-1"><a class="header-anchor" href="#vue-ob-observer"><span>Vue <strong>ob</strong>: Observer</span></a></h2>
<p>网上有很多解决的方案：</p>
<p><strong>第一种</strong>：<strong>ob</strong>: Observer 是 Vue 对数据监控添加的属性，如果想去掉可以用赋值的方式。例如Object.assign({},this.owner)。 用这种方式也是可以解决。</p>
<p>**第二种：**假设list里面存放的就是那些带有__ob__: Observer的可以用JSON.parse(JSON.stringify(this.list)）完美解决</p>
<p>作者：无枉少年
链接：https://www.jianshu.com/p/d9a8029356ef
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
</blockquote>
<h3 id="_3-2-数组传值使用json解析出现错误" tabindex="-1"><a class="header-anchor" href="#_3-2-数组传值使用json解析出现错误"><span>3.2 数组传值使用JSON解析出现错误</span></a></h3>
<p><img src="https://img-blog.csdnimg.cn/074749fca7f941a28b15f26d8915f5e1.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L6w5Lmd5Lmd,size_20,color_FFFFFF,t_70,g_se,x_16" alt="  "></p>
<blockquote>
<p><strong>编码：</strong> encodeURIComponent(JSON.stringify(item))</p>
</blockquote>
<blockquote>
<p><strong>解码：</strong> JSON.parse(decodeURIComponent(options.formData))</p>
</blockquote>
<h2 id="_4-强制刷新视图层-this-forceupdate" tabindex="-1"><a class="header-anchor" href="#_4-强制刷新视图层-this-forceupdate"><span>4. 强制刷新视图层  <strong>this.$forceUpdate();</strong></span></a></h2>
<p>​			<strong>this.$forceUpdate();</strong></p>
<h2 id="_5-四舍五入为指定小数位数-tofixed" tabindex="-1"><a class="header-anchor" href="#_5-四舍五入为指定小数位数-tofixed"><span>5. 四舍五入为指定小数位数 toFixed()</span></a></h2>
<blockquote>
<h2 id="定义和用法" tabindex="-1"><a class="header-anchor" href="#定义和用法"><span>定义和用法</span></a></h2>
</blockquote>
<p>toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。</p>
<blockquote>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">NumberObject<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">num</td>
<td style="text-align:left">必需。规定小数的位数，是 0 ~ 20 之间的值，包括 0 和 20，有些实现可以支持更大的数值范围。如果省略了该参数，将用 0 代替。</td>
</tr>
</tbody>
</table>
<h2 id="_6-对象转数组-object-keys" tabindex="-1"><a class="header-anchor" href="#_6-对象转数组-object-keys"><span>6. 对象转数组 Object.keys</span></a></h2>
<blockquote>
<p>将对象的 键值 转换为  数组</p>
</blockquote>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-校验是否有违禁词" tabindex="-1"><a class="header-anchor" href="#_7-校验是否有违禁词"><span>7.校验是否有违禁词</span></a></h2>
<p><strong>yxd-常用</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token literal-property property">keyWords</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">'装逼'</span><span class="token punctuation">,</span> <span class="token string">'草泥马'</span><span class="token punctuation">,</span> <span class="token string">'特么的'</span><span class="token punctuation">,</span> <span class="token string">'撕逼'</span><span class="token punctuation">,</span> <span class="token string">'玛拉戈壁'</span><span class="token punctuation">,</span> <span class="token string">'爆菊'</span><span class="token punctuation">,</span> <span class="token string">'JB'</span><span class="token punctuation">,</span> <span class="token string">'呆逼'</span><span class="token punctuation">,</span> <span class="token string">'本屌'</span><span class="token punctuation">,</span> <span class="token string">'齐B短裙'</span><span class="token punctuation">,</span> <span class="token string">'法克鱿'</span><span class="token punctuation">,</span> <span class="token string">'丢你老母'</span><span class="token punctuation">,</span> <span class="token string">'达菲鸡'</span><span class="token punctuation">,</span> <span class="token string">'装13'</span><span class="token punctuation">,</span> <span class="token string">'逼格'</span><span class="token punctuation">,</span> <span class="token string">'蛋疼'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'傻逼'</span><span class="token punctuation">,</span> <span class="token string">'绿茶婊'</span><span class="token punctuation">,</span> <span class="token string">'你妈的'</span><span class="token punctuation">,</span> <span class="token string">'表砸'</span><span class="token punctuation">,</span> <span class="token string">'屌爆了'</span><span class="token punctuation">,</span> <span class="token string">'买了个婊'</span><span class="token punctuation">,</span> <span class="token string">'已撸'</span><span class="token punctuation">,</span> <span class="token string">'吉跋猫'</span><span class="token punctuation">,</span> <span class="token string">'妈蛋'</span><span class="token punctuation">,</span> <span class="token string">'逗比'</span><span class="token punctuation">,</span> <span class="token string">'我靠'</span><span class="token punctuation">,</span> <span class="token string">'碧莲'</span><span class="token punctuation">,</span> <span class="token string">'碧池'</span><span class="token punctuation">,</span> <span class="token string">'然并卵'</span><span class="token punctuation">,</span> <span class="token string">'日了狗'</span><span class="token punctuation">,</span> <span class="token string">'屁民'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'吃翔'</span><span class="token punctuation">,</span> <span class="token string">'XX狗'</span><span class="token punctuation">,</span> <span class="token string">'淫家'</span><span class="token punctuation">,</span> <span class="token string">'你妹'</span><span class="token punctuation">,</span> <span class="token string">'浮尸国'</span><span class="token punctuation">,</span> <span class="token string">'滚粗'</span><span class="token punctuation">,</span> <span class="token string">'国家级'</span><span class="token punctuation">,</span> <span class="token string">'世界级'</span><span class="token punctuation">,</span> <span class="token string">'最高级'</span><span class="token punctuation">,</span> <span class="token string">'唯一'</span><span class="token punctuation">,</span> <span class="token string">'首个'</span><span class="token punctuation">,</span> <span class="token string">'首选'</span><span class="token punctuation">,</span> <span class="token string">'顶级'</span><span class="token punctuation">,</span> <span class="token string">'国家级产品'</span><span class="token punctuation">,</span> <span class="token string">'填补国内空白'</span><span class="token punctuation">,</span> <span class="token string">'独家'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'首家'</span><span class="token punctuation">,</span> <span class="token string">'最新'</span><span class="token punctuation">,</span> <span class="token string">'最先进'</span><span class="token punctuation">,</span> <span class="token string">'第一品牌'</span><span class="token punctuation">,</span> <span class="token string">'金牌'</span><span class="token punctuation">,</span> <span class="token string">'名牌'</span><span class="token punctuation">,</span> <span class="token string">'优秀'</span><span class="token punctuation">,</span> <span class="token string">'顶级'</span><span class="token punctuation">,</span> <span class="token string">'独家'</span><span class="token punctuation">,</span> <span class="token string">'全网销量第一'</span><span class="token punctuation">,</span> <span class="token string">'全国首家'</span><span class="token punctuation">,</span> <span class="token string">'全网首发'</span><span class="token punctuation">,</span> <span class="token string">'世界领先'</span><span class="token punctuation">,</span> <span class="token string">'顶级工艺'</span><span class="token punctuation">,</span> <span class="token string">'王牌'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'销量冠军'</span><span class="token punctuation">,</span> <span class="token string">'极致'</span><span class="token punctuation">,</span> <span class="token string">'永久'</span><span class="token punctuation">,</span> <span class="token string">'王牌'</span><span class="token punctuation">,</span> <span class="token string">'掌门人'</span><span class="token punctuation">,</span> <span class="token string">'领袖品牌'</span><span class="token punctuation">,</span> <span class="token string">'独一无二'</span><span class="token punctuation">,</span> <span class="token string">'绝无仅有'</span><span class="token punctuation">,</span> <span class="token string">'史无前例'</span><span class="token punctuation">,</span> <span class="token string">'万能'</span><span class="token punctuation">,</span> <span class="token string">'习近平'</span><span class="token punctuation">,</span> <span class="token string">'习大大'</span><span class="token punctuation">,</span> <span class="token string">'七七事变'</span><span class="token punctuation">,</span> <span class="token string">'垃圾'</span><span class="token punctuation">,</span> <span class="token string">'laji'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'勾八'</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 关键字校验</span></span>
<span class="line"><span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myContent</span>
<span class="line"><span class="token keyword">const</span> word <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyWords</span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">in</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> _reg <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> reg<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_reg<span class="token punctuation">,</span> <span class="token string">'reg.toString().substr(1, reg.length - 3)'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> _title <span class="token operator">=</span> <span class="token string">"您输入的包含违禁词\""</span> <span class="token operator">+</span> _reg <span class="token operator">+</span> <span class="token string">"\"，请重新输入"</span></span>
<span class="line">            uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">title</span><span class="token operator">:</span> _title<span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"none"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">return</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>搜取</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">></span></span>
<span class="line">    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">keyWords</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token string">'装逼'</span><span class="token punctuation">,</span> <span class="token string">'草泥马'</span><span class="token punctuation">,</span> <span class="token string">'特么的'</span><span class="token punctuation">,</span> <span class="token string">'撕逼'</span><span class="token punctuation">,</span> <span class="token string">'玛拉戈壁'</span><span class="token punctuation">,</span> <span class="token string">'爆菊'</span><span class="token punctuation">,</span> <span class="token string">'JB'</span><span class="token punctuation">,</span> <span class="token string">'呆逼'</span><span class="token punctuation">,</span> <span class="token string">'本屌'</span><span class="token punctuation">,</span> <span class="token string">'齐B短裙'</span><span class="token punctuation">,</span> <span class="token string">'法克鱿'</span><span class="token punctuation">,</span> <span class="token string">'丢你老母'</span><span class="token punctuation">,</span> <span class="token string">'达菲鸡'</span><span class="token punctuation">,</span> <span class="token string">'装13'</span><span class="token punctuation">,</span> <span class="token string">'逼格'</span><span class="token punctuation">,</span> <span class="token string">'蛋疼'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">'傻逼'</span><span class="token punctuation">,</span> <span class="token string">'绿茶婊'</span><span class="token punctuation">,</span> <span class="token string">'你妈的'</span><span class="token punctuation">,</span> <span class="token string">'表砸'</span><span class="token punctuation">,</span> <span class="token string">'屌爆了'</span><span class="token punctuation">,</span> <span class="token string">'买了个婊'</span><span class="token punctuation">,</span> <span class="token string">'已撸'</span><span class="token punctuation">,</span> <span class="token string">'吉跋猫'</span><span class="token punctuation">,</span> <span class="token string">'妈蛋'</span><span class="token punctuation">,</span> <span class="token string">'逗比'</span><span class="token punctuation">,</span> <span class="token string">'我靠'</span><span class="token punctuation">,</span> <span class="token string">'碧莲'</span><span class="token punctuation">,</span> <span class="token string">'碧池'</span><span class="token punctuation">,</span> <span class="token string">'然并卵'</span><span class="token punctuation">,</span> <span class="token string">'日了狗'</span><span class="token punctuation">,</span> <span class="token string">'屁民'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">'吃翔'</span><span class="token punctuation">,</span> <span class="token string">'XX狗'</span><span class="token punctuation">,</span> <span class="token string">'淫家'</span><span class="token punctuation">,</span> <span class="token string">'你妹'</span><span class="token punctuation">,</span> <span class="token string">'浮尸国'</span><span class="token punctuation">,</span> <span class="token string">'滚粗'</span><span class="token punctuation">,</span> <span class="token string">'国家级'</span><span class="token punctuation">,</span> <span class="token string">'世界级'</span><span class="token punctuation">,</span> <span class="token string">'最高级'</span><span class="token punctuation">,</span> <span class="token string">'唯一'</span><span class="token punctuation">,</span> <span class="token string">'首个'</span><span class="token punctuation">,</span> <span class="token string">'首选'</span><span class="token punctuation">,</span> <span class="token string">'顶级'</span><span class="token punctuation">,</span> <span class="token string">'国家级产品'</span><span class="token punctuation">,</span> <span class="token string">'填补国内空白'</span><span class="token punctuation">,</span> <span class="token string">'独家'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">'首家'</span><span class="token punctuation">,</span> <span class="token string">'最新'</span><span class="token punctuation">,</span> <span class="token string">'最先进'</span><span class="token punctuation">,</span> <span class="token string">'第一品牌'</span><span class="token punctuation">,</span> <span class="token string">'金牌'</span><span class="token punctuation">,</span> <span class="token string">'名牌'</span><span class="token punctuation">,</span> <span class="token string">'优秀'</span><span class="token punctuation">,</span> <span class="token string">'顶级'</span><span class="token punctuation">,</span> <span class="token string">'独家'</span><span class="token punctuation">,</span> <span class="token string">'全网销量第一'</span><span class="token punctuation">,</span> <span class="token string">'全国首家'</span><span class="token punctuation">,</span> <span class="token string">'全网首发'</span><span class="token punctuation">,</span> <span class="token string">'世界领先'</span><span class="token punctuation">,</span> <span class="token string">'顶级工艺'</span><span class="token punctuation">,</span> <span class="token string">'王牌'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">'销量冠军'</span><span class="token punctuation">,</span> <span class="token string">'极致'</span><span class="token punctuation">,</span> <span class="token string">'永久'</span><span class="token punctuation">,</span> <span class="token string">'王牌'</span><span class="token punctuation">,</span> <span class="token string">'掌门人'</span><span class="token punctuation">,</span> <span class="token string">'领袖品牌'</span><span class="token punctuation">,</span> <span class="token string">'独一无二'</span><span class="token punctuation">,</span> <span class="token string">'绝无仅有'</span><span class="token punctuation">,</span> <span class="token string">'史无前例'</span><span class="token punctuation">,</span> <span class="token string">'万能'</span><span class="token punctuation">,</span> <span class="token string">'习近平'</span><span class="token punctuation">,</span> <span class="token string">'习大大'</span><span class="token punctuation">,</span> <span class="token string">'七七事变'</span><span class="token punctuation">,</span> <span class="token string">'垃圾'</span><span class="token punctuation">,</span> <span class="token string">'laji'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">'勾八'</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">dialogOpen</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>afterCorrectWord <span class="token operator">=</span> val</span>
<span class="line">            <span class="token keyword">const</span> word <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyWords</span>
<span class="line">            <span class="token keyword">let</span> value <span class="token operator">=</span> val</span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">in</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">/* 替换全部空格 */</span></span>
<span class="line">                    <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token comment">// 判断内容中是否包括敏感词</span></span>
<span class="line">                    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">const</span> _reg <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> reg<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token keyword">const</span> _title <span class="token operator">=</span> <span class="token string">"您输入的包含违禁词\""</span> <span class="token operator">+</span> _reg<span class="token operator">+</span> <span class="token string">"\"，请重新输入"</span></span>
<span class="line">                        uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token literal-property property">title</span><span class="token operator">:</span> _title<span class="token punctuation">,</span></span>
<span class="line">                            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"none"</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">                        <span class="token keyword">const</span> result <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;span style="color:#f03b2c"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">                        value <span class="token operator">=</span> result</span>
<span class="line">                        <span class="token comment">// this.haveProhibitedWords = true</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>validateWords <span class="token operator">=</span> value</span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>dialogVisible <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-生成随机数" tabindex="-1"><a class="header-anchor" href="#_8-生成随机数"><span>8.生成随机数</span></a></h2>
<p><strong>上限  999999999  下限1</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">parseInt</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">999999999</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_9-去除字符串左右空格" tabindex="-1"><a class="header-anchor" href="#_9-去除字符串左右空格"><span>9.去除字符串左右空格</span></a></h2>
<blockquote>
<p><code v-pre>str</code>为字符串</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\s+|\s+$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">""</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_10-对象数组取异" tabindex="-1"><a class="header-anchor" href="#_10-对象数组取异"><span>10.对象数组取异</span></a></h2>
<blockquote>
<p>设有两个数组，且一个数组包含着另外一个数组，取出多出的数组</p>
<p>// var arr1 = [ {&quot;id&quot;: &quot;A&quot;},{&quot;id&quot;: &quot;B&quot;}];
// var arr2 = [ {&quot;id&quot;: &quot;A&quot;}, {&quot;id&quot;: &quot;B&quot;},{&quot;id&quot;: &quot;C&quot;}];</p>
<p>//  getArrDifSameValue(少的数据, 多的数据)
//  const data = getArrDifSameValue()   接收返回值</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// var arr1 = [ {"id": "A"},{"id": "B"}];</span></span>
<span class="line"><span class="token comment">// var arr2 = [ {"id": "A"}, {"id": "B"},{"id": "C"}];</span></span>
<span class="line"><span class="token comment">//  getArrDifSameValue(少的数据, 多的数据)</span></span>
<span class="line"><span class="token comment">//  const data = getArrDifSameValue()   接收返回值</span></span>
<span class="line"><span class="token function">getArrDifSameValue</span><span class="token punctuation">(</span><span class="token parameter">arr1<span class="token punctuation">,</span> arr2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr2<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> obj <span class="token operator">=</span> arr2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> id <span class="token operator">=</span> obj<span class="token punctuation">.</span>fileid<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> isExist <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">var</span> aj <span class="token operator">=</span> arr1<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">var</span> n <span class="token operator">=</span> aj<span class="token punctuation">.</span>fileid<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                isExist <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isExist<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise-延迟" tabindex="-1"><a class="header-anchor" href="#promise-延迟"><span>promise 延迟</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">     <span class="token keyword">const</span> prom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//执行函数体 1</span></span>
<span class="line">        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      prom<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//执行函数体 2</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="强制跳出-foreach循环-throw-new-error-error" tabindex="-1"><a class="header-anchor" href="#强制跳出-foreach循环-throw-new-error-error"><span>强制跳出 forEach循环 throw new Error('error')</span></a></h2>
<blockquote>
<p>抛出异常错误  throw new Error('error')</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token function">Array</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">id</span><span class="token operator">:</span> index<span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">value</span><span class="token operator">:</span> index</span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    </span>
<span class="line"><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>tableData<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'item.id'</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span>id<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>id <span class="token operator">==</span> <span class="token string">'5'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="this-nexttick-放到服务器环境不能使用了-本地环境可以-setimmediate-res" tabindex="-1"><a class="header-anchor" href="#this-nexttick-放到服务器环境不能使用了-本地环境可以-setimmediate-res"><span>this.nextTick 放到服务器环境不能使用了 本地环境可以 setImmediate(res=&gt;{})</span></a></h2>
<blockquote>
<p><code v-pre>this.nextTick</code> 是 Vue.js 框架中的一个方法，用于在下次 DOM 更新循环结束之后执行延迟回调。但是需要注意的是，这个方法只能在浏览器环境中使用，而不能在服务器环境（如 Node.js 环境）中使用。</p>
<p>原因是 <code v-pre>nextTick</code> 方法依赖于浏览器的异步更新机制（即事件循环），而服务器环境通常没有类似的机制。</p>
<p>在服务器环境中，可以使用 <code v-pre>setImmediate</code> 或 <code v-pre>process.nextTick</code> 方法来代替 <code v-pre>nextTick</code> 方法。例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 代替 this.nextTick 的方法</span></span>
<span class="line">process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 延迟回调处理逻辑</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<blockquote>
<p><strong>最终解决方法</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'延迟回调函数被执行'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setImmediate</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'立即执行'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>process.nextTick和tihis.nexttick 的区别</strong></p>
<p><code v-pre>process.nextTick</code> 和 <code v-pre>this.nextTick</code> 都是用于在下一个事件循环中执行回调函数的方法，但它们有一些区别：</p>
<ol>
<li>用途不同：<code v-pre>process.nextTick</code> 是 Node.js 中的方法，用于在当前操作系统进程的下一个事件循环中执行回调函数；而 <code v-pre>this.nextTick</code> 是 Vue.js 框架中的方法，用于在下次 DOM 更新循环结束之后执行延迟回调。</li>
<li>执行时机不同：<code v-pre>process.nextTick</code> 的回调函数会被优先于其他微任务（如 Promise）执行，且不会被阻塞，因此可能会导致回调函数执行过程中的 I/O 操作和 CPU 密集型计算影响其他事件的处理。而 <code v-pre>this.nextTick</code> 的回调函数是在浏览器的任务队列中执行的，因此不会对其他任务产生影响。</li>
<li>用法不同：<code v-pre>process.nextTick</code> 接受的参数是一个回调函数，回调函数会在当前事件循环退出时立即执行；而 <code v-pre>this.nextTick</code> 接受的参数也是回调函数，但它会被推入一个队列中，在下次 DOM 更新周期结束后执行。</li>
</ol>
<p>需要注意的是，在浏览器环境中，是没有 <code v-pre>process</code> 对象的，因此 <code v-pre>process.nextTick</code> 方法无法使用，而在 Node.js 环境中，<code v-pre>this.nextTick</code> 方法也不能使用。</p>
</blockquote>
<h2 id="复制剪贴板" tabindex="-1"><a class="header-anchor" href="#复制剪贴板"><span>复制剪贴板</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 复制文本</span></span>
<span class="line">navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span>$slot<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js对象剔除" tabindex="-1"><a class="header-anchor" href="#js对象剔除"><span>JS对象剔除</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span></span>
<span class="line">      Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>baseData<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span></span>
<span class="line">        value <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> key <span class="token operator">!==</span> <span class="token string">'pageSize'</span> <span class="token operator">&amp;&amp;</span> key <span class="token operator">!==</span> <span class="token string">'theTabActiveKey'</span></span>
<span class="line">      <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


