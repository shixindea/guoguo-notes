<template><div><h2 id="使用postcss-px2rem适配已经做成功1920-1080适配为rem" tabindex="-1"><a class="header-anchor" href="#使用postcss-px2rem适配已经做成功1920-1080适配为rem"><span>使用<code v-pre>postcss-px2rem</code>适配已经做成功<code v-pre>1920*1080</code>适配为rem</span></a></h2>
<p>要使<code v-pre>postcss-px2rem</code>生效，您需要确保已经在项目中安装了<code v-pre>postcss-loader</code>和<code v-pre>postcss-px2rem</code>。然后，您需要在<code v-pre>webpack.config.js</code>中配置它们。以下是修改后的示例：</p>
<ol>
<li>首先，确保已经安装了<code v-pre>postcss-loader</code>：</li>
</ol>
<p>InsertCopy</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">npm install postcss<span class="token operator">-</span>loader <span class="token operator">--</span>save<span class="token operator">-</span>dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol>
<li>然后，在<code v-pre>webpack.config.js</code>中配置<code v-pre>postcss-loader</code>：</li>
</ol>
<p>InsertCopy</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line"> <span class="token comment">// ...</span></span>
<span class="line"> <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">     <span class="token comment">// ...</span></span>
<span class="line">     <span class="token punctuation">{</span></span>
<span class="line">       <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">       <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">         <span class="token string">'vue-style-loader'</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token string">'css-loader'</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token string">'postcss-loader'</span> <span class="token comment">// 添加此行</span></span>
<span class="line">       <span class="token punctuation">]</span></span>
<span class="line">     <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token comment">// ...</span></span>
<span class="line">   <span class="token punctuation">]</span></span>
<span class="line"> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>接下来，确保已经安装了<code v-pre>postcss-px2rem</code>：</li>
</ol>
<p>InsertCopy</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">npm install postcss<span class="token operator">-</span>px2rem <span class="token operator">--</span>save<span class="token operator">-</span>dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol>
<li>在<code v-pre>postcss.config.js</code>中配置<code v-pre>postcss-px2rem</code>：</li>
</ol>
<p>InsertCopy</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line"> <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token literal-property property">autoprefixer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token string-property property">'postcss-px2rem'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token literal-property property">remUnit</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token comment">// 设置rem单位为16</span></span>
<span class="line">     <span class="token literal-property property">viewBox</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 关闭viewBox</span></span>
<span class="line">     <span class="token literal-property property">selectorBlackList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.ignore'</span><span class="token punctuation">,</span> <span class="token string">'.hairlines'</span><span class="token punctuation">]</span> <span class="token comment">// 排除特定选择器</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>确保在<code v-pre>vue.config.js</code>中配置了<code v-pre>css.loaderOptions</code>：</li>
</ol>
<p>InsertCopy</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line"> <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">         <span class="token comment">// ...</span></span>
<span class="line">         <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'postcss-px2rem'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">           <span class="token literal-property property">remUnit</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span></span>
<span class="line">           <span class="token literal-property property">viewBox</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">           <span class="token literal-property property">selectorBlackList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.ignore'</span><span class="token punctuation">,</span> <span class="token string">'.hairlines'</span><span class="token punctuation">]</span></span>
<span class="line">         <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">         <span class="token comment">// ...</span></span>
<span class="line">       <span class="token punctuation">]</span></span>
<span class="line">     <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，<code v-pre>postcss-px2rem</code>应该已经生效了。</p>
<p>如果您已经按照上述步骤配置了<code v-pre>postcss-px2rem</code>，但仍然没有看到效果，那么可能是因为以下原因：</p>
<ol>
<li>确保您的<code v-pre>postcss.config.js</code>文件位于项目的根目录下。</li>
<li>确保您的<code v-pre>webpack.config.js</code>文件也位于项目的根目录下。</li>
<li>确保您的<code v-pre>vue.config.js</code>文件也位于项目的根目录下。</li>
<li>确保您的<code v-pre>package.json</code>文件中包含了<code v-pre>postcss-loader</code>和<code v-pre>postcss-px2rem</code>的依赖。</li>
<li>清除浏览器缓存，以便新的配置生效。</li>
</ol>
<p>如果问题仍然存在，请检查控制台输出中是否有关于<code v-pre>postcss-px2rem</code>的错误信息。</p>
</div></template>


