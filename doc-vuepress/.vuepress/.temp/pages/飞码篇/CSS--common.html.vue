<template><div><h1 id="这个是果锅自己总结的一套-uniapp-版本的-css-库-希望可以给予大家一些启发" tabindex="-1"><a class="header-anchor" href="#这个是果锅自己总结的一套-uniapp-版本的-css-库-希望可以给予大家一些启发"><span>这个是果锅自己总结的一套 <code v-pre>Uniapp</code> 版本的 <code v-pre>CSS</code> 库，希望可以给予大家一些启发</span></a></h1>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token comment">/* 默认视图  div模块 */</span></span>
<span class="line"><span class="token selector">view</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 将外边距和内边距都计算到整个的盒子中 */</span></span>
<span class="line">    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.clickbg12312312:active</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>$<span class="token property">color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">,</span> $<span class="token property">alpha</span><span class="token punctuation">:</span> .1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.button123123:active</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>$<span class="token property">color</span><span class="token punctuation">:</span> #fc851a<span class="token punctuation">,</span> $<span class="token property">alpha</span><span class="token punctuation">:</span> .8<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">textEllipsis</span><span class="token punctuation">(</span>$lineNum<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token atrule"><span class="token rule">@if</span> $lineNum == 1</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> $lineNum<span class="token punctuation">;</span> //需要显示的行数</span>
<span class="line">    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"> <span class="token selector">.borderbottom</span><span class="token punctuation">{</span></span>
<span class="line">	 <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #EEEEEE<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line">	</span>
<span class="line"><span class="token comment">/* flex 布局模块 */</span></span>
<span class="line"><span class="token selector">.flex</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.transition</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">transition</span><span class="token punctuation">:</span> all 1s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.align-end</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">align-items</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.colormt</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">color</span><span class="token punctuation">:</span> #ff9137<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.flex1</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.flexcolumn</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*  flex布局的元素内部上下左右居中 */</span></span>
<span class="line"><span class="token selector">.center</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.color333</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.align-start</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.align-center</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.just-center</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.wrap</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">// 靠两边对齐</span>
<span class="line">.space-between</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.space-around</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token selector">// flex竖向布局</span>
<span class="line">.column</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">// 在flex布局的父元素中默认填满空白</span>
<span class="line">.flex1</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 左右居中 */</span></span>
<span class="line"><span class="token selector">.marginauto</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 超出显示点点点 */</span></span>
<span class="line"><span class="token selector">.nowrap</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.height100upx</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span> 100upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.height50upx</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">height</span><span class="token punctuation">:</span> 50upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* 宽度100% */</span></span>
<span class="line"><span class="token selector">.width100</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">// 高度100%</span>
<span class="line">.height100</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">// 图片大小填满父元素</span>
<span class="line">.img100</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">// 图片填满父元素并且不重复</span>
<span class="line">.img-style</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100% <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 100% <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">// 字体加粗</span>
<span class="line">.fontweigth</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">// 文字居中对齐</span>
<span class="line">.text-center</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.bgcRgba08</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>$<span class="token property">color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">,</span> $<span class="token property">alpha</span><span class="token punctuation">:</span> 0.8<span class="token punctuation">)</span><span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token selector">// 遮罩层</span>
<span class="line">.mask</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">z-index</span><span class="token punctuation">:</span> 9<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>$<span class="token property">color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">,</span> $<span class="token property">alpha</span><span class="token punctuation">:</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">animation</span><span class="token punctuation">:</span> showmask 0.3s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.transition</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">// 隐藏遮罩层动画</span>
<span class="line">.mask-hide</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>$<span class="token property">color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">,</span> $<span class="token property">alpha</span><span class="token punctuation">:</span> 0.0<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">// 页面默认铺满屏幕</span>
<span class="line">.app-box</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.border0</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span> none <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">// 遮罩层显示动画</span>
<span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> showmask</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">from</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>$<span class="token property">color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">,</span> $<span class="token property">alpha</span><span class="token punctuation">:</span> 0.0<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">to</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>$<span class="token property">color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">,</span> $<span class="token property">alpha</span><span class="token punctuation">:</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">// 遮罩层显示动画兼容写法</span>
<span class="line"><span class="token atrule"><span class="token rule">@-webkit-keyframes</span> showmask</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">from</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>$<span class="token property">color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">,</span> $<span class="token property">alpha</span><span class="token punctuation">:</span> 0.0<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">to</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>$<span class="token property">color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">,</span> $<span class="token property">alpha</span><span class="token punctuation">:</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 清空默认样式 */</span></span>
<span class="line"><span class="token selector">ul</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">*</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.transitionAll</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">transition</span><span class="token punctuation">:</span> all 1s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.flex-start</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">// 查看更多和收起的时候可以用到的样式</span>
<span class="line">.heightHidden</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 360upx <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.color999</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.color666</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.colorRed</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.bgcfff</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">background-color</span><span class="token punctuation">:</span> #FFFFFF<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.bgceee</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">background-color</span><span class="token punctuation">:</span> #EEEEEE<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.bgcRed</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">background-color</span><span class="token punctuation">:</span> #ff0000<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.bgc999</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">background-color</span><span class="token punctuation">:</span> #999<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.bgc666</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">background-color</span><span class="token punctuation">:</span> #666<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.bgc333</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.bgcf8</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">background-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.pdl-28</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">padding-left</span><span class="token punctuation">:</span> 28upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.pdt-10</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">padding-top</span><span class="token punctuation">:</span> 10upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.pdl-20</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">padding-left</span><span class="token punctuation">:</span> 20upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.pd0-20</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">padding</span><span class="token punctuation">:</span>  0 20upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.color8080</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">color</span><span class="token punctuation">:</span> #808080<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.mb0</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.lineHeight1</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.lineHeight15</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.lineHeight2</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">line-height</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">// uniapp 字体</span>
<span class="line">.fsize24</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 24upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.fsize28</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">font-size</span><span class="token punctuation">:</span> 28upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.textRight</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.mgt-50</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">margin-top</span><span class="token punctuation">:</span> 50upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* 内外边距模块 */</span></span>
<span class="line"><span class="token selector">.mgl-2</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin-left</span><span class="token punctuation">:</span> 4upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.mgl-4</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin-left</span><span class="token punctuation">:</span> 8upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.mgt-10</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">margin-top</span><span class="token punctuation">:</span> 10upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.mgt0</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.mgr-2</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin-right</span><span class="token punctuation">:</span> 4upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.mgr-6</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">margin-right</span><span class="token punctuation">:</span> 12upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.mgl-20</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">margin-left</span><span class="token punctuation">:</span> 20upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.mgr-20</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin-right</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.mgt-2</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">margin-top</span><span class="token punctuation">:</span> 4upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.mgt-4</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">margin-top</span><span class="token punctuation">:</span> 8upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.mgt-20</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin-top</span><span class="token punctuation">:</span> 20rpx<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.pdl-2</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">padding-left</span><span class="token punctuation">:</span> 4upx<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* 顺时针旋转90° */</span></span>
<span class="line"><span class="token selector">.rotate90</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.block</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


