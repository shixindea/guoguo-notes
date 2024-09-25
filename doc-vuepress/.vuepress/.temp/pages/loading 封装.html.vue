<template><div><h1 id="page-loading" tabindex="-1"><a class="header-anchor" href="#page-loading"><span>page-loading</span></a></h1>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>page-loading</span><span class="token punctuation">></span></span></span>
<span class="line">     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">      	内容....</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>page-loading</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'loading/setState'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>           <span class="token comment">//页面初始化 给true  启动loading</span></span>
<span class="line">    </span>
<span class="line">	调用接口   <span class="token comment">//接口异步请求</span></span>
<span class="line">  </span>
<span class="line"> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'loading/setState'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>            <span class="token comment">//接口完成 false  关闭loading</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


