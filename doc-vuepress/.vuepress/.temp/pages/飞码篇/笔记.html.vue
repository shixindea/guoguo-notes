<template><div><h1 id="笔记" tabindex="-1"><a class="header-anchor" href="#笔记"><span>笔记</span></a></h1>
<h2 id="_1-利用-style写多个多元表达式" tabindex="-1"><a class="header-anchor" href="#_1-利用-style写多个多元表达式"><span>1. 利用<code v-pre>:style</code>写多个多元表达式</span></a></h2>
<blockquote>
<p>两个条件的多元表达式</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"card-left"</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">"index ===1?'background-color:#3cb7ff;':''"</span><span class="token operator">></span> <span class="token operator">&lt;</span>view<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>三个条件的多远表达式</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-left<span class="token punctuation">"</span></span><span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[{'background-color':index ===0?'red':index ===1?'#3cb7ff':'#ffbb48'}]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>图片示例：</p>
<img src="https://s1.ax1x.com/2022/06/08/XrtowV.png" alt="样图" style="zoom: 50%;" />
<h2 id="商品列表的单选和全选的实现-多选框" tabindex="-1"><a class="header-anchor" href="#商品列表的单选和全选的实现-多选框"><span>商品列表的单选和全选的实现<code v-pre>[多选框]</code></span></a></h2>
<blockquote>
<p>详情见上图</p>
<p><strong><code v-pre>具体步骤</code></strong></p>
<ol>
<li>创建一个数组变量</li>
<li>当点击列表中的某一个列表时，将这个<code v-pre>id</code>值存到数组中，这个数组所拥有的数据就是你在这个列表中选中的数据，</li>
<li>同理如果点击<code v-pre>全选</code>直接全部添加到数组中即可</li>
</ol>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 判断 如果你这个数据列表里面有那么就返回 true  </span></span>
<span class="line"><span class="token function">is_pick</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isselected<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 全选中</span></span>
<span class="line">    <span class="token function">pick_all</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>isselected<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//如果，当前是全部选中的状态</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>isselected <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> item<span class="token punctuation">.</span>id</span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>isselected <span class="token operator">=</span> arr<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 单个选中</span></span>
<span class="line">        <span class="token function">isselect</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isselected<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//移除数组中的数据，index为从第几个开始数，1为移除几个。</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>isselected<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>isselected<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>isselected<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


