<template><div><h2 id="点赞-收藏-图标-形式" tabindex="-1"><a class="header-anchor" href="#点赞-收藏-图标-形式"><span>点赞  收藏 图标 形式</span></a></h2>
<p><img src="@source/组件调用.assets/image-20240810113711547.png" alt="image-20240810113711547"> <img src="@source/组件调用.assets/image-20240810115816453.png" alt="image-20240810115816453"><img src="@source/组件调用.assets/image-20240810114105387.png" alt="image-20240810114105387"></p>
<h3 id="用于写页面" tabindex="-1"><a class="header-anchor" href="#用于写页面"><span>用于写页面</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>page-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>collect<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>page-icon</span><span class="token punctuation">></span></span>   </span>
<span class="line">//type 取值</span>
<span class="line">collect 收藏</span>
<span class="line">vote 点赞</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用于写逻辑" tabindex="-1"><a class="header-anchor" href="#用于写逻辑"><span>用于写逻辑</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>page-icon</span> <span class="token attr-name">:status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageInfo.is_collect<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>collect<span class="token punctuation">"</span></span> <span class="token attr-name">:count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageInfo.collect_count<span class="token punctuation">"</span></span> <span class="token attr-name">:theId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageInfo.id<span class="token punctuation">"</span></span> <span class="token attr-name">topic</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>moments<span class="token punctuation">"</span></span> <span class="token attr-name">@refresh</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getList<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>page-icon</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">  props: {</span>
<span class="line">    /*ID */</span>
<span class="line">    theId: {</span>
<span class="line">      type: Number,</span>
<span class="line">      default: 0</span>
<span class="line">    },</span>
<span class="line">    /*是否点赞 1是 2否*/</span>
<span class="line">    status: {</span>
<span class="line">      type: Number,</span>
<span class="line">      default: 0</span>
<span class="line">    },</span>
<span class="line">    /*类型 参考README.md */</span>
<span class="line">    topic: {</span>
<span class="line">      type: String,</span>
<span class="line">      default: 0</span>
<span class="line">    },</span>
<span class="line">    /** 不传不显示 传递则右上角显示角标 */</span>
<span class="line">    count: {</span>
<span class="line">      type: Number,</span>
<span class="line">      default: null</span>
<span class="line">    },</span>
<span class="line">    /** collect | vote */</span>
<span class="line">    type: {</span>
<span class="line">      type: String,</span>
<span class="line">      default: 'vote'</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">topic:{</span>
<span class="line">    activity: "活动"</span>
<span class="line">    activity_review: "活动回顾"</span>
<span class="line">    article: "文章"</span>
<span class="line">    comments: "评论"</span>
<span class="line">    moments: "精彩瞬间"</span>
<span class="line">    product: "产品"</span>
<span class="line">    volunteer: "志愿者"</span>
<span class="line">    volunteer_team: "志愿团队"</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


