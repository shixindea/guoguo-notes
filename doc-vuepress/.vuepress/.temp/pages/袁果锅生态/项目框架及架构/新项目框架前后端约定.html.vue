<template><div><h2 id="新项目" tabindex="-1"><a class="header-anchor" href="#新项目"><span>新项目</span></a></h2>
<h2 id="代码格式化问题" tabindex="-1"><a class="header-anchor" href="#代码格式化问题"><span>代码格式化问题</span></a></h2>
<blockquote>
<p>方案1 prettier</p>
</blockquote>
<p><a href="https://shixindea.github.io/guoguo-notes/%E8%A2%81%E6%9E%9C%E9%94%85%E7%94%9F%E6%80%81/%E9%A1%B9%E7%9B%AE%E6%A1%86%E6%9E%B6%E5%8F%8A%E6%9E%B6%E6%9E%84/%E9%87%8D%E8%A6%81_%E6%A1%86%E6%9E%B6%20-%20%E5%88%9D%E5%A7%8B%E5%8C%96%E9%A1%B9%E7%9B%AE%E7%BA%A6%E6%9D%9F.html#%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%B7%A5%E5%85%B7-pnpm-lint" target="_blank" rel="noopener noreferrer">👋Guoguo-notes 约束</a></p>
<blockquote>
<p>方案2 biome</p>
</blockquote>
<h2 id="消息提示-message" tabindex="-1"><a class="header-anchor" href="#消息提示-message"><span>消息提示 message</span></a></h2>
<blockquote>
<p>电脑端 消息提示</p>
</blockquote>
<img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250905133708616.png" alt="image-20250905133708616" style="zoom: 33%;" />
<blockquote>
<p>手机端 消息提示</p>
</blockquote>
<img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250905133747705.png" alt="image-20250905133747705" style="zoom:33%;" />
<blockquote>
<p>小程序默认消息提示</p>
</blockquote>
<img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250905134058839.png" alt="image-20250905134058839" style="zoom:33%;" />
<blockquote>
<p>单按钮样式 - 确定、知道了...</p>
</blockquote>
<blockquote>
<p>双按钮样式 - 取消/确定...</p>
</blockquote>
<h2 id="全局loading-样式全局统一" tabindex="-1"><a class="header-anchor" href="#全局loading-样式全局统一"><span>全局loading - 样式全局统一</span></a></h2>
<blockquote>
<p>全屏 loading</p>
</blockquote>
<blockquote>
<p>局部 loading</p>
</blockquote>
<h2 id="前后端状态码约定-异常报错" tabindex="-1"><a class="header-anchor" href="#前后端状态码约定-异常报错"><span>前后端状态码约定 - 异常报错</span></a></h2>
<blockquote>
<p>Code == 1 消息通知前端处理</p>
<p>Code == 401 token过期或者未登录，弹框或者跳转登陆页面</p>
<p>Code !==1 前端整理状态码，若前端未兼容状态码消息，所有报错后端处理</p>
</blockquote>
<p><strong>示例</strong></p>
<img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250905183552375.png" alt="image-20250905183552375" style="zoom: 50%;" />
<img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250905183241446.png" alt="image-20250905183241446" style="zoom: 67%;" />
<p><strong>代码如下</strong></p>
<blockquote>
<p>error-code.ts</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> <span class="token keyword">enum</span> <span class="token constant">THE_MESSAGE_TYPE</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">SHOW_MODAL</span> <span class="token operator">=</span> <span class="token string">'showModal'</span><span class="token punctuation">,</span> <span class="token comment">// 模态框提示</span></span>
<span class="line">  <span class="token constant">SHOW_TOAST</span> <span class="token operator">=</span> <span class="token string">'showToast'</span> <span class="token comment">// 消息提示</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> errorCode <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token number">10909089</span><span class="token operator">:</span> <span class="token punctuation">{</span> msg<span class="token operator">:</span> <span class="token string">'订单已消耗无法转赠'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token constant">THE_MESSAGE_TYPE</span><span class="token punctuation">.</span><span class="token constant">SHOW_TOAST</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>request.ts</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> errorCode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../error-code'</span></span>
<span class="line"></span>
<span class="line">Taro<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    title<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span></span>
<span class="line">      errorCode<span class="token punctuation">[</span>code<span class="token punctuation">]</span><span class="token operator">?.</span>msg</span>
<span class="line">        <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>errorCode<span class="token punctuation">[</span>code<span class="token punctuation">]</span><span class="token operator">?.</span>msg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">        <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg <span class="token operator">||</span> <span class="token string">'未知错误'</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">    <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">    icon<span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span></span>
<span class="line">    duration<span class="token operator">:</span> <span class="token number">2000</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250905224855898.png" alt="image-20250905224855898"></p>
<h2 id="图片、图标约定问题" tabindex="-1"><a class="header-anchor" href="#图片、图标约定问题"><span>图片、图标约定问题</span></a></h2>
<p>图片上传oss或者cdn，图标上传 iconfont</p>
<img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250906000033792.png" alt="image-20250906000033792" style="zoom: 50%;" />
</div></template>


