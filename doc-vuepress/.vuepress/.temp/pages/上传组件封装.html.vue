<template><div><h1 id="《page-upload组件》" tabindex="-1"><a class="header-anchor" href="#《page-upload组件》"><span>《page-upload组件》</span></a></h1>
<p><img src="@source/上传组件封装.assets/image-20240823232039376.png" alt="image-20240823232039376"></p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<blockquote>
<p>html</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>page-upload</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageUpload<span class="token punctuation">"</span></span> <span class="token attr-name">:maxCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span>  <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onUploadChange<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>js</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"> <span class="token comment">// 上传图片回调</span></span>
<span class="line">    <span class="token function">onUploadChange</span><span class="token punctuation">(</span><span class="token parameter">images</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//返回的数据格式["1.jpg"，"2.jpg"]</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">,</span> <span class="token string">'image'</span><span class="token punctuation">,</span> images<span class="token punctuation">)</span>   </span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>得到数据后初始化组件</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>pageUpload<span class="token punctuation">.</span><span class="token function">onTheInit</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>images<span class="token punctuation">)</span>  <span class="token comment">//传递的数据格式["1.jpg"，"2.jpg"]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>扩展</p>
<p>maxCount 最大上传数量</p>
</blockquote>
</div></template>


