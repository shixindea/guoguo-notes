<template><div><h1 id="代码片段" tabindex="-1"><a class="header-anchor" href="#代码片段"><span>代码片段</span></a></h1>
<h2 id="_1-组件单条代码" tabindex="-1"><a class="header-anchor" href="#_1-组件单条代码"><span>1. 组件单条代码</span></a></h2>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token comment">&lt;!-- 现金退还方式 --></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yxd-order-list-container mgt-16<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>items <span class="token punctuation">"</span></span> <span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">				现金退还方式 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>smalltitle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item flex space-between<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>原路退回<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>itemRemarks paddingleft10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>（1-3个工作日内退款到原支付方）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item-img<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isSelect<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/static/active.png<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img100<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item-img-no<span class="token punctuation">"</span></span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">------------------------------------------------------------------------</span>
<span class="line">data() {</span>
<span class="line">    return {</span>
<span class="line">         isSelect:true,//是否选中</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line">------------------------------------------------------------------------</span>
<span class="line">method:{</span>
<span class="line">	Select(){</span>
<span class="line">				this.isSelect=!this.isSelect</span>
<span class="line">			},</span>
<span class="line">}</span>
<span class="line">------------------------------------------------------------------------</span>
<span class="line">	.apply-refund-container {</span>
<span class="line">		.toptip {</span>
<span class="line">			width: 100%;</span>
<span class="line">			padding: 10upx 40upx;</span>
<span class="line">			background-color: #fff4de;</span>
<span class="line">			color: #e2a509;</span>
<span class="line">			font-size: 26upx;</span>
<span class="line">			// line-height: 40upx;</span>
<span class="line">			// height: 40upx;</span>
<span class="line">			display: flex;</span>
<span class="line">			align-items: center;</span>
<span class="line">			justify-content: center;</span>
<span class="line">		}</span>
<span class="line">		</span>
<span class="line">		.refundable-refund {</span>
<span class="line">			font-size: 28upx;</span>
<span class="line">			color: #666666;</span>
<span class="line">		}</span>
<span class="line">		</span>
<span class="line">		.refund-price {</span>
<span class="line">			font-size: 30upx;</span>
<span class="line">			color: #fc322e;</span>
<span class="line">			font-weight: 700;</span>
<span class="line">			margin-left: 40upx;</span>
<span class="line">		}</span>
<span class="line">		</span>
<span class="line">		.items {</span>
<span class="line">		</span>
<span class="line">			width: 100%;</span>
<span class="line">			padding: 20upx 40upx;</span>
<span class="line">		</span>
<span class="line">			background-color: #fff;</span>
<span class="line">		</span>
<span class="line">			.title {</span>
<span class="line">				font-size: 34upx;</span>
<span class="line">				height: 85upx;</span>
<span class="line">				line-height: 85upx;</span>
<span class="line">			}</span>
<span class="line">		</span>
<span class="line">			.item {</span>
<span class="line">				height: 75upx;</span>
<span class="line">				line-height: 75upx;</span>
<span class="line">				border-top: 1px solid #f3f4f6;</span>
<span class="line">				display: flex;</span>
<span class="line">				align-items: center;</span>
<span class="line">		</span>
<span class="line">				.text {</span>
<span class="line">					font-size: 28upx;</span>
<span class="line">		</span>
<span class="line">					.itemRemarks {</span>
<span class="line">						font-size: 26upx;</span>
<span class="line">						color: #fd871f;</span>
<span class="line">						padding-left: 60upx;</span>
<span class="line">					}</span>
<span class="line">					.paddingleft10{</span>
<span class="line">						padding-left: 10upx;</span>
<span class="line">					}</span>
<span class="line">				}</span>
<span class="line">		</span>
<span class="line">				.item-img {</span>
<span class="line">					width: 30upx;</span>
<span class="line">					height: 30upx;</span>
<span class="line">					background-color: #fb8519;</span>
<span class="line">					border-radius: 50upx;</span>
<span class="line">					display: flex;</span>
<span class="line">					justify-content: center;</span>
<span class="line">					align-items: center;</span>
<span class="line">		</span>
<span class="line">					image {</span>
<span class="line">						width: 80%;</span>
<span class="line">						height: 80%;</span>
<span class="line">		</span>
<span class="line">					}</span>
<span class="line">				}</span>
<span class="line">		</span>
<span class="line">				.item-img-no {</span>
<span class="line">					width: 30upx;</span>
<span class="line">					height: 30upx;</span>
<span class="line">					border-radius: 50upx;</span>
<span class="line">					border: 1px solid #c6c6c6;</span>
<span class="line">		</span>
<span class="line">				}</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		</span>
<span class="line">		.refund-top {</span>
<span class="line">			padding: 0 40upx;</span>
<span class="line">			line-height: 90upx;</span>
<span class="line">		}</span>
<span class="line">		</span>
<span class="line">		.refund-info {</span>
<span class="line">			padding: 40upx;</span>
<span class="line">		</span>
<span class="line">			.refund-img {</span>
<span class="line">				width: 190upx;</span>
<span class="line">				height: 110upx;</span>
<span class="line">				// background-color: skyblue;</span>
<span class="line">			}</span>
<span class="line">		</span>
<span class="line">			.refund-right {</span>
<span class="line">				padding-left: 10upx;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		.page-bottom {</span>
<span class="line">			height: 50upx;</span>
<span class="line">		}</span>
<span class="line">		</span>
<span class="line">		.textarea-box {</span>
<span class="line">			font-size: 28upx;</span>
<span class="line">			padding: 30upx 20upx;</span>
<span class="line">		</span>
<span class="line">			.refund-textarea {</span>
<span class="line">				background-color: #f3f4f6;</span>
<span class="line">				border-radius: 15upx;</span>
<span class="line">				width: 90%;</span>
<span class="line">				margin: 0 auto;</span>
<span class="line">				height: 230upx;</span>
<span class="line">				padding-bottom: 30upx;</span>
<span class="line">			}</span>
<span class="line">		</span>
<span class="line">			.right-bottom-text {</span>
<span class="line">				position: absolute;</span>
<span class="line">				right: 69rpx;</span>
<span class="line">				bottom: 7rpx;</span>
<span class="line">				font-size: 28rpx;</span>
<span class="line">				color: #333;</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-底部-提交-大按钮" tabindex="-1"><a class="header-anchor" href="#_2-底部-提交-大按钮"><span>2.底部 提交 大按钮</span></a></h2>
<p><img src="@source/飞码篇/C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20220614150609189.png" alt="image-20220614150609189"></p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>payOrder<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">	提交</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">.payOrder {</span>
<span class="line">	margin: 0 auto;</span>
<span class="line">	width: 700upx;</span>
<span class="line">	height: 80upx;</span>
<span class="line">	display: flex;</span>
<span class="line">	align-items: center;</span>
<span class="line">	background: #ff7200;</span>
<span class="line">	justify-content: center;</span>
<span class="line">	color: #fff;</span>
<span class="line">	font-size: 30upx;</span>
<span class="line">	margin-top: 30upx;</span>
<span class="line">	padding: 0;</span>
<span class="line">	border-radius: 8upx;</span>
<span class="line">	margin-right: 30upx;</span>
<span class="line">	margin-bottom: 30upx;</span>
<span class="line"></span>
<span class="line">	&amp;::after {</span>
<span class="line">		border: none;</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line">-----------------------------------</span>
<span class="line">.textarea-box {</span>
<span class="line">	padding: 0 20upx 30upx 20upx;</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-清空购物车的内容" tabindex="-1"><a class="header-anchor" href="#_3-清空购物车的内容"><span>3.清空购物车的内容</span></a></h2>
<blockquote>
<p>asda</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> idx <span class="token keyword">in</span> that<span class="token punctuation">.</span>store_list<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> that<span class="token punctuation">.</span>store_list<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>goods_list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> removeid <span class="token operator">=</span> that<span class="token punctuation">.</span>pickids<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>that<span class="token punctuation">.</span>store_list<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>goods_list<span class="token punctuation">[</span>index<span class="token punctuation">]</span></span>
<span class="line">                                            <span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>removeid <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            that<span class="token punctuation">.</span>store_list<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>goods_list<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            index<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">.van-loading__spinner</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--loading-spinner-size<span class="token punctuation">,</span> 20px<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-滑动选择框picker" tabindex="-1"><a class="header-anchor" href="#_5-滑动选择框picker"><span>5.滑动选择框picker</span></a></h2>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picker</span> <span class="token attr-name">fields</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>year<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date<span class="token punctuation">"</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date<span class="token punctuation">"</span></span> <span class="token attr-name">:start</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>startDate<span class="token punctuation">"</span></span> <span class="token attr-name">:end</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>endDate<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bindDateChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uni-input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{date}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picker</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


