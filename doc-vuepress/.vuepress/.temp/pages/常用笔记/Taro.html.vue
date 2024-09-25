<template><div><h2 id="小程序触底刷新下一页" tabindex="-1"><a class="header-anchor" href="#小程序触底刷新下一页"><span>小程序触底刷新下一页</span></a></h2>
<h3 id="usereachbottom" tabindex="-1"><a class="header-anchor" href="#usereachbottom"><span>useReachBottom<a href="https://taro-docs.jd.com/docs/composition-api#usereachbottom" target="_blank" rel="noopener noreferrer"></a></span></a></h3>
<p>监听用户上拉触底事件。等同于 <code v-pre>onReachBottom</code> 页面生命周期钩子。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line"></span>
<span class="line">  onReachBottom() {</span>
<span class="line">    if (this.theListCurrentPage &lt; this.theListPagination.lastPage) {</span>
<span class="line">      this.theListCurrentPage++</span>
<span class="line">      this.onGetList()</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  </span>
<span class="line">  </span>
<span class="line">  </span>
<span class="line">  </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


