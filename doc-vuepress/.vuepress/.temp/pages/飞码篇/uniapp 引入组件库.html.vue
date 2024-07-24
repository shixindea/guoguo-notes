<template><div><h1 id="uni-app下使用vant组件" tabindex="-1"><a class="header-anchor" href="#uni-app下使用vant组件"><span>uni-app下使用vant组件</span></a></h1>
<p><a href="https://www.cnblogs.com/wines/p/14256507.html" target="_blank" rel="noopener noreferrer">uni-app下使用vant组件 - wines君 - 博客园 (cnblogs.com)</a></p>
<h2 id="_1-创建uni-app" tabindex="-1"><a class="header-anchor" href="#_1-创建uni-app"><span>1. 创建uni-app</span></a></h2>
<p>下载打开HbuilderX,注意这里下载app开发版的。然后创建新项目，创建的时候选择uni-app默认模板</p>
<p><img src="https://s1.ax1x.com/2022/08/04/veL9Qs.png" alt="img"></p>
<h2 id="_2-下载vant组件" tabindex="-1"><a class="header-anchor" href="#_2-下载vant组件"><span>2. 下载vant组件</span></a></h2>
<p><a href="https://github.com/youzan/vant-weapp/releases" target="_blank" rel="noopener noreferrer">vant的GitHub下载地址</a>下载完成后解压，然后在项目更目录下创建文件夹<code v-pre>wxcomponents</code>，注意这里的<code v-pre>wxcomponents</code>目录级别和<code v-pre>pages</code>在同一级别，然后再该目录下创建<code v-pre>vant</code>目录。回到刚才解压的vant目录，找到<code v-pre>dist</code>文件夹，把它复制到<code v-pre>vant</code>目录下</p>
<p><img src="https://img2020.cnblogs.com/blog/2178912/202101/2178912-20210109211915077-1529817012.png" alt="img"></p>
<h2 id="_3-引用vant组件" tabindex="-1"><a class="header-anchor" href="#_3-引用vant组件"><span>3. 引用vant组件</span></a></h2>
<h4 id="_3-1-首先在app-vue文件内添加" tabindex="-1"><a class="header-anchor" href="#_3-1-首先在app-vue文件内添加"><span>3.1 首先在<code v-pre>app.vue</code>文件内添加</span></a></h4>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">"/wxcomponents/vant/dist/common/index.wxss"</span><span class="token punctuation">;</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2178912/202101/2178912-20210109211930447-1387297735.png" alt="img"></p>
<h4 id="_3-2-在pages-json文件内添加组件引用" tabindex="-1"><a class="header-anchor" href="#_3-2-在pages-json文件内添加组件引用"><span>3.2 在pages.json文件内添加组件引用</span></a></h4>
<p><img src="https://img2020.cnblogs.com/blog/2178912/202101/2178912-20210109211945875-742009304.png" alt="img"></p>
<p>你可以选择在一个页面的配置文件里面配置，但是只能在这个页面内使用，你也可以选择在globalStyle里面配置，是的所有页面都可以直接使用</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token property">"usingComponents"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">			 <span class="token property">"van-button"</span><span class="token operator">:</span> <span class="token string">"/wxcomponents/vant/dist/button/index"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-使用组件" tabindex="-1"><a class="header-anchor" href="#_4-使用组件"><span>4. 使用组件</span></a></h2>
<p>在你要使用的页面内添加你要使用的组件就可以了<img src="https://img2020.cnblogs.com/blog/2178912/202101/2178912-20210109212004566-1193279790.png" alt="img"></p>
<p><img src="https://img2020.cnblogs.com/blog/2178912/202101/2178912-20210109212013736-351430392.png" alt="img"></p>
<h2 id="_5-重新编译【一定要重新编译】" tabindex="-1"><a class="header-anchor" href="#_5-重新编译【一定要重新编译】"><span>5.重新编译【一定要重新编译】</span></a></h2>
</div></template>


