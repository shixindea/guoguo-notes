<template><div><h2 id="最新uniapp登录逻辑" tabindex="-1"><a class="header-anchor" href="#最新uniapp登录逻辑"><span>最新uniapp登录逻辑</span></a></h2>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>avatar-wrapper<span class="token punctuation">"</span></span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chooseAvatar<span class="token punctuation">"</span></span> <span class="token attr-name">@chooseavatar</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onChooseAvatar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>avatar<span class="token punctuation">"</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>avatarUrl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nickname<span class="token punctuation">"</span></span> <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getnickname<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入昵称<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 提交 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">avatarUrl</span><span class="token operator">:</span> <span class="token string">'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">nickname</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">onChooseAvatar</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>avatarUrl <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>avatarUrl</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">getnickname</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>nickname <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">getDataTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 得到时间参数</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">timestampToTime</span><span class="token punctuation">(</span><span class="token parameter">timestamp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//时间戳为10位需*1000，时间戳为13位的话不需乘1000</span></span>
<span class="line">          <span class="token keyword">var</span> <span class="token constant">Y</span> <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'-'</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">var</span> <span class="token constant">M</span> <span class="token operator">=</span> <span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">'0'</span> <span class="token operator">+</span> <span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'-'</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">var</span> <span class="token constant">D</span> <span class="token operator">=</span> <span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">'0'</span> <span class="token operator">+</span> date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">' '</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">var</span> h <span class="token operator">=</span> <span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">'0'</span> <span class="token operator">+</span> date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">':'</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">'0'</span> <span class="token operator">+</span> date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">':'</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">var</span> s <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">'0'</span> <span class="token operator">+</span> date<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> date<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token constant">Y</span> <span class="token operator">+</span> <span class="token constant">M</span> <span class="token operator">+</span> <span class="token constant">D</span> <span class="token operator">+</span> h <span class="token operator">+</span> m <span class="token operator">+</span> s<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">var</span> timestamp <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">timestampToTime</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> db <span class="token operator">=</span> wx<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">'userInfo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">dateTime</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDataTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">headUrl</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>avatarUrl<span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nickname</span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">const</span> db <span class="token operator">=</span> wx<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">'userInfo'</span><span class="token punctuation">)</span></span>
<span class="line">              <span class="token punctuation">.</span><span class="token function">doc</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>_id<span class="token punctuation">)</span></span>
<span class="line">              <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">const</span> lsData <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">avatarUrl</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>avatarUrl<span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nickname</span>
<span class="line">                  <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                uni<span class="token punctuation">.</span><span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'OpenId'</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token literal-property property">data</span><span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>_openid<span class="token punctuation">,</span></span>
<span class="line">                  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                  		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'OpenId___success'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                  	<span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                uni<span class="token punctuation">.</span><span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'infoRes'</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token literal-property property">data</span><span class="token operator">:</span>lsData<span class="token punctuation">,</span></span>
<span class="line">                  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                  		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'infoRes___success'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                  	<span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token keyword">const</span> db <span class="token operator">=</span> wx<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">'userInfo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token literal-property property">_openid</span><span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>_openid<span class="token punctuation">,</span></span>
<span class="line">                  <span class="token literal-property property">dateTime</span><span class="token operator">:</span> db<span class="token punctuation">.</span>command<span class="token punctuation">.</span><span class="token function">neq</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>dateTime<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">                  uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"登陆成功"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                      uni<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/index/index'</span></span>
<span class="line">                      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">              <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>avatarUrl<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nickname<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用接口" tabindex="-1"><a class="header-anchor" href="#调用接口"><span>调用接口</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">import {</span>
<span class="line">    getNewsList</span>
<span class="line">} from '@/api/user.js';</span>
<span class="line">---</span>
<span class="line">    onShow() {</span>
<span class="line">    this.init()</span>
<span class="line">},</span>
<span class="line">    ---</span>
<span class="line">        init() {</span>
<span class="line">        </span>
<span class="line">        getInfo({</span>
<span class="line">            data: {</span>
<span class="line"></span>
<span class="line">            }</span>
<span class="line">        }).then(res => {</span>
<span class="line">            if (res.code == 1) {</span>
<span class="line">                console.log(res.data)</span>
<span class="line">            }</span>
<span class="line">        })</span>
<span class="line">        </span>
<span class="line">    }，</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-getuserprofile-object-获取用户信息" tabindex="-1"><a class="header-anchor" href="#uni-getuserprofile-object-获取用户信息"><span>uni.getUserProfile(OBJECT)--获取用户信息</span></a></h3>
<p>获取用户信息。每次请求都会弹出授权窗口，用户同意后返回 userInfo。</p>
<h3 id="将内容复制到剪贴板" tabindex="-1"><a class="header-anchor" href="#将内容复制到剪贴板"><span>将内容复制到剪贴板</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">uni<span class="token punctuation">.</span><span class="token function">setClipboardData</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将图片保存到本地" tabindex="-1"><a class="header-anchor" href="#将图片保存到本地"><span>将图片保存到本地</span></a></h3>
<p>1.在main.js中 最下面进行注册</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">saveImage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	uni<span class="token punctuation">.</span><span class="token function">downloadFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">url</span><span class="token operator">:</span> e<span class="token punctuation">,</span></span>
<span class="line">		<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token comment">//图片保存到本地</span></span>
<span class="line">			uni<span class="token punctuation">.</span><span class="token function">saveImageToPhotosAlbum</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">				<span class="token literal-property property">filePath</span><span class="token operator">:</span> res<span class="token punctuation">.</span>tempFilePath<span class="token punctuation">,</span></span>
<span class="line">				<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">					uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">						<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'保存成功'</span><span class="token punctuation">,</span></span>
<span class="line">						<span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span></span>
<span class="line">						<span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span></span>
<span class="line">					<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">				<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">					<span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>errMsg <span class="token operator">===</span> <span class="token string">"saveImageToPhotosAlbum:fail auth deny"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">						console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"当初用户拒绝，再次发起授权"</span><span class="token punctuation">)</span></span>
<span class="line">						uni<span class="token punctuation">.</span><span class="token function">openSetting</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">							<span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">settingdata</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">								console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>settingdata<span class="token punctuation">)</span></span>
<span class="line">								<span class="token keyword">if</span> <span class="token punctuation">(</span>settingdata<span class="token punctuation">.</span>authSetting<span class="token punctuation">[</span></span>
<span class="line">										<span class="token string">'scope.writePhotosAlbum'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">									console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取权限成功，给出再次点击图片保存到相册的提示。'</span><span class="token punctuation">)</span></span>
<span class="line">								<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">									console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取权限失败，给出不给权限就无法正常使用的提示'</span><span class="token punctuation">)</span></span>
<span class="line">								<span class="token punctuation">}</span></span>
<span class="line">							<span class="token punctuation">}</span></span>
<span class="line">						<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">					<span class="token punctuation">}</span></span>
<span class="line">				<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token function">complete</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">				<span class="token punctuation">}</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$uniApi <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">	saveImage</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>在所需要的文件中进行引入然后进行调用</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">	<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 调用代码</span></span>
<span class="line">	<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$uniApi<span class="token punctuation">.</span><span class="token function">saveImage</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cover<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="长按图片可以保存-收藏-发送给朋友" tabindex="-1"><a class="header-anchor" href="#长按图片可以保存-收藏-发送给朋友"><span>长按图片可以保存，收藏，发送给朋友</span></a></h3>
<blockquote>
<p>show-menu-by-longpress</p>
</blockquote>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">show-menu-by-longpress</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="长按保存图片" tabindex="-1"><a class="header-anchor" href="#长按保存图片"><span>长按保存图片</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line">uni-app中长按保存图片</span>
<span class="line">个人第二个项目是在小程序和app端的一款应用，在项目中需要使用到长按保存二维码功能，但uni-app官方的uni.saveImageToPhotosAlbum api只能传入文件路径，不支持网络路径，而我们大部分需要保存的图片基本都是网络路径，所以想到了uni.downloadFile,这个api会返还一个图片的临时路径，刚好可以作为参数使用saveImageToPhotosAlbum，所以问题就可以解决！</span>
<span class="line"></span>
<span class="line">关于长按事件，我使用的是canvas的@longtop，不过这个不是难点，看需求只要能执行即可</span>
<span class="line"></span>
<span class="line">1.放置二维码图片</span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>CodeBox MarginAuto MarginT_20rpx BackgroundC_FFFFFF PaddingT_1rpx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 440rpx<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 490rpx<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name">canvas-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>code<span class="token punctuation">"</span></span> <span class="token attr-name">@longtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bc_code<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>CodeImg Block<span class="token punctuation">"</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>codeImg<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>widthFix<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">></span></span></span>
<span class="line">				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">//注意，canvas必须添加属性canvas-id，否则不显示</span>
<span class="line">2.主体代码</span>
<span class="line"></span>
<span class="line">//长按保存二维码</span>
<span class="line">			bc_code(){</span>
<span class="line">				let that = this;</span>
<span class="line">				//console.log('保存二维码')</span>
<span class="line">				uni.downloadFile({           //获得二维码的临时地址</span>
<span class="line">					url:this.codeImg,</span>
<span class="line">					success:(res)=>{</span>
<span class="line">						//console.log('获取url',res)</span>
<span class="line">						if(res.statusCode == 200){</span>
<span class="line">							uni.saveImageToPhotosAlbum({</span>
<span class="line">								filePath:res.tempFilePath,//传入临时地址</span>
<span class="line">								success() {</span>
<span class="line">									that.$.ti_shi('保存成功')//封装的提示</span>
<span class="line">								},</span>
<span class="line">								fail() {</span>
<span class="line">									that.$.ti_shi('保存失败')</span>
<span class="line">								}</span>
<span class="line">							})</span>
<span class="line">						}</span>
<span class="line">					}</span>
<span class="line">				})</span>
<span class="line">			},</span>
<span class="line">————————————————</span>
<span class="line">版权声明：本文为CSDN博主「jiangbei-north」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。</span>
<span class="line">原文链接：https://blog.csdn.net/m0_47703222/article/details/107779627</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将服务器文件保存到本地-有转发、浮窗、选择其他应用打开、收藏、保存到手机" tabindex="-1"><a class="header-anchor" href="#将服务器文件保存到本地-有转发、浮窗、选择其他应用打开、收藏、保存到手机"><span>将服务器文件保存到本地 [有转发、浮窗、选择其他应用打开、收藏、保存到手机]</span></a></h3>
<p>需要使用的组件中</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line">import Vue from 'vue'</span>
<span class="line"></span>
<span class="line">// 保存文件</span>
<span class="line">dialogConfirm() {</span>
<span class="line">Vue.prototype.$uniApi.saveFile(this.exportlink);</span>
<span class="line">},</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>下面这个文件放在 main.js 文件中</p>
</blockquote>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">const saveFile = function(e) {</span>
<span class="line">	let FileSystemManager = uni.getFileSystemManager();</span>
<span class="line">	uni.downloadFile({</span>
<span class="line">		url: e,</span>
<span class="line">		success: function(res) {</span>
<span class="line">			console.log(res);</span>
<span class="line">			//图片保存到本地</span>
<span class="line">			uni.openDocument({</span>
<span class="line">				filePath: res.tempFilePath,</span>
<span class="line">				showMenu:true,</span>
<span class="line">				success: function(data) {</span>
<span class="line">					FileSystemManager.open({</span>
<span class="line">						filePath: data.savedFilePath,</span>
<span class="line">						success: function(data) {</span>
<span class="line"></span>
<span class="line">						},</span>
<span class="line">						fail: function(err) {</span>
<span class="line">						</span>
<span class="line">						},</span>
<span class="line">						complete(res) {</span>
<span class="line"></span>
<span class="line">						}</span>
<span class="line">					})</span>
<span class="line">				},</span>
<span class="line">				fail: function(err) {</span>
<span class="line"></span>
<span class="line">				},</span>
<span class="line">				complete(res) {</span>
<span class="line">					console.log(res);</span>
<span class="line">				}</span>
<span class="line">			})</span>
<span class="line">		}</span>
<span class="line">	})</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件"><span>上传文件</span></a></h3>
<p><strong>获取文件的临时路径</strong></p>
<blockquote>
<p><strong><code v-pre>chooseMessageFile </code>获取文件的临时路径</strong></p>
</blockquote>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">  uni.chooseMessageFile({</span>
<span class="line">        count: 1,</span>
<span class="line">        type: 'file',</span>
<span class="line">        success: (res) => {</span>
<span class="line">            uni.showLoading({</span>
<span class="line">                title:'上传中...',</span>
<span class="line">            })</span>
<span class="line">            const path = res.tempFiles[0].path</span>
<span class="line">            let size = res.tempFiles[0].size;</span>
<span class="line">            let filename = res.tempFiles[0].name;</span>
<span class="line">            if (filename.indexOf(".xls") == -1) {</span>
<span class="line">                uni.showModal({</span>
<span class="line">                    title: '提示',</span>
<span class="line">                    content: '文件类型必须为excel！(.xls)',</span>
<span class="line">                    confirmColor: '#0177ff',</span>
<span class="line">                    confirmText: '确定',</span>
<span class="line">                })</span>
<span class="line"></span>
<span class="line">            } else {</span>
<span class="line">                //res.tempFiles[0].path</span>
<span class="line">                //这里写选择exec文件后的操作 就可以获取到文件路径了   </span>
<span class="line">                console.log(res.tempFiles[0].path);</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">        }</span>
<span class="line">    })</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong><code v-pre>upload</code>用来将临时文件转换为网络文件</strong></p>
<pre><code>           upload({
                filePath:res.tempFiles[0].path,
            }).then(ras=&gt;{
                uni.hideLoading();
                signAddCheck({
                    data: {
                        code: this.code,
                        file_path: ras.info.path
                    }
                }).then(res =&gt; {
                    if (res.code == 1) {
                        console.log(res.data)
                    }
                })
</code></pre>
</blockquote>
<blockquote>
<p><strong>完整代码</strong></p>
</blockquote>
<p>在api文件中声明这个文件</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">upload</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> req<span class="token punctuation">.</span><span class="token constant">UPLOAD</span><span class="token punctuation">(</span><span class="token string">'file/upload'</span><span class="token punctuation">,</span>params<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>upload<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/api/index.js"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">upload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    uni<span class="token punctuation">.</span><span class="token function">chooseMessageFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'file'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            uni<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">'上传中...'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">const</span> path <span class="token operator">=</span> res<span class="token punctuation">.</span>tempFiles<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>path</span>
<span class="line">            <span class="token keyword">let</span> size <span class="token operator">=</span> res<span class="token punctuation">.</span>tempFiles<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>size<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">let</span> filename <span class="token operator">=</span> res<span class="token punctuation">.</span>tempFiles<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>filename<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">".xls"</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                uni<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'文件类型必须为excel！(.xls)'</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">confirmColor</span><span class="token operator">:</span> <span class="token string">'#0177ff'</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">confirmText</span><span class="token operator">:</span> <span class="token string">'确定'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//res.tempFiles[0].path</span></span>
<span class="line">                <span class="token comment">//这里写选择exec文件后的操作    </span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>tempFiles<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token function">upload</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">filePath</span><span class="token operator">:</span>res<span class="token punctuation">.</span>tempFiles<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>path<span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">ras</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">                    uni<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token function">signAddCheck</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>code<span class="token punctuation">,</span></span>
<span class="line">                            <span class="token literal-property property">file_path</span><span class="token operator">:</span> ras<span class="token punctuation">.</span>info<span class="token punctuation">.</span>path</span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拍照并上传图片" tabindex="-1"><a class="header-anchor" href="#拍照并上传图片"><span>拍照并上传图片</span></a></h3>
<pre><code>import {
	upload
} from &quot;@/api/index.js&quot;
</code></pre>
<p>方法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">		<span class="token function">camera</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">			uni<span class="token punctuation">.</span><span class="token function">chooseImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">				<span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//默认9</span></span>
<span class="line">				<span class="token literal-property property">sizeType</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'original'</span><span class="token punctuation">,</span> <span class="token string">'compressed'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//可以指定是原图还是压缩图，默认二者都有</span></span>
<span class="line">				<span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'camera'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//从相册选择  album</span></span>
<span class="line">				<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">					<span class="token keyword">let</span> imagepath <span class="token operator">=</span> res<span class="token punctuation">.</span>tempFilePaths<span class="token punctuation">;</span></span>
<span class="line">					<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> imagepath<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">						<span class="token function">upload</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">							<span class="token literal-property property">filePath</span><span class="token operator">:</span> imagepath<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">						<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">							<span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">								that<span class="token punctuation">.</span>imgsrc <span class="token operator">=</span> res<span class="token punctuation">.</span>info<span class="token punctuation">.</span>url<span class="token punctuation">;</span></span>
<span class="line">							<span class="token punctuation">}</span></span>
<span class="line">						<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">					<span class="token punctuation">}</span></span>
<span class="line">				<span class="token punctuation">}</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="值存入缓存" tabindex="-1"><a class="header-anchor" href="#值存入缓存"><span>值存入缓存</span></a></h3>
<p>将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">uni.setStorage({</span>
<span class="line">	key: 'storage_key',</span>
<span class="line">	data: 'hello',</span>
<span class="line">	success: function () {</span>
<span class="line">		console.log('success');</span>
<span class="line">	}</span>
<span class="line">});</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取缓存中的-token-值" tabindex="-1"><a class="header-anchor" href="#获取缓存中的-token-值"><span>获取缓存中的 token 值</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">const token = uni.getStorageSync('token');</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="地理位置-api-不能使用" tabindex="-1"><a class="header-anchor" href="#地理位置-api-不能使用"><span>地理位置 <code v-pre>api</code> 不能使用</span></a></h3>
<blockquote>
<p>在小程序manifase.json中进行配置</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">  <span class="token comment">/* 快应用特有相关 */</span></span>
<span class="line">  <span class="token string-property property">"mp-weixin"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"appid"</span><span class="token operator">:</span> <span class="token string">"wxa83ab7bd7e9f442b"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"setting"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"urlCheck"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"usingComponents"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"permission"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"scope.userLocation"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"desc"</span><span class="token operator">:</span> <span class="token string">"你的位置信息将用于小程序位置接口的效果展示"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"requiredPrivateInfos"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"getLocation"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"chooseLocation"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"onLocationChange"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"startLocationUpdateBackground"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"startLocationUpdate"</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>修改基础库版本</p>
</blockquote>
<p>在微信小程序的主页面中 找到 右上角   详情  ===》 本地设置===》 配置基础库  改为  2.25.4 就可以了</p>
<blockquote>
<p>别忘了 需要去微信公众平台申请相关的api调用权限</p>
</blockquote>
<h3 id="获取地理位置" tabindex="-1"><a class="header-anchor" href="#获取地理位置"><span>获取地理位置</span></a></h3>
<h4 id="获取地区-地址-经纬度-等信息【调用腾讯地图-选择地点】" tabindex="-1"><a class="header-anchor" href="#获取地区-地址-经纬度-等信息【调用腾讯地图-选择地点】"><span>获取地区 地址 经纬度 等信息【调用腾讯地图，选择地点】</span></a></h4>
<blockquote>
<p>调用这个方法 然后将 manifest.json 中微信小程序配置中的地理位置授权打开</p>
</blockquote>
<blockquote>
<p>文字介绍：    ***   你的位置信息将用于小程序位置接口的效果展示***</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">uni<span class="token punctuation">.</span><span class="token function">chooseLocation</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'位置名称：'</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'详细地址：'</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'纬度：'</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'经度：'</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        uni<span class="token punctuation">.</span><span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'gcj02'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">altitude</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">geocode</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'当前位置的经度：'</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'当前位置的纬度：'</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'省：'</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'省'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'市：'</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'省'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'市'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'区：'</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'市'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'区'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>query<span class="token punctuation">.</span>address <span class="token operator">=</span> res<span class="token punctuation">.</span>address<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>query<span class="token punctuation">.</span>latitude <span class="token operator">=</span> res<span class="token punctuation">.</span>latitude<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>query<span class="token punctuation">.</span>longitude <span class="token operator">=</span> res<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>query<span class="token punctuation">.</span>province <span class="token operator">=</span> res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'省'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>query<span class="token punctuation">.</span>city <span class="token operator">=</span> res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'省'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'市'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>query<span class="token punctuation">.</span>district <span class="token operator">=</span> res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'市'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>address<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'区'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取经纬度【获取的是当前位置】" tabindex="-1"><a class="header-anchor" href="#获取经纬度【获取的是当前位置】"><span>获取经纬度【获取的是当前位置】</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">uni<span class="token punctuation">.</span><span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'gcj02'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'当前位置的经度：'</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'当前位置的纬度：'</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h3 id="根据经纬度解析出对应的地理位置" tabindex="-1"><a class="header-anchor" href="#根据经纬度解析出对应的地理位置"><span>根据经纬度解析出对应的地理位置</span></a></h3>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">			<span class="token function">localtion</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">				<span class="token keyword">let</span> that <span class="token operator">=</span><span class="token keyword">this</span></span>
<span class="line">				uni<span class="token punctuation">.</span><span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">					<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'gcj02'</span><span class="token punctuation">,</span></span>
<span class="line">					<span class="token literal-property property">geocode</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">					<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">						console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">						console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'当前位置的经度：'</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">						console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'当前位置的纬度：'</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>latitude<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">						uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">							<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://restapi.amap.com/v3/geocode/regeo'</span><span class="token punctuation">,</span></span>
<span class="line">							<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">							<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">								<span class="token literal-property property">location</span><span class="token operator">:</span> res<span class="token punctuation">.</span>longitude <span class="token operator">+</span> <span class="token string">','</span> <span class="token operator">+</span> res<span class="token punctuation">.</span>latitude<span class="token punctuation">,</span></span>
<span class="line">								<span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'83a2cb04cb7c947dfeaa59583f4823da'</span><span class="token punctuation">,</span> <span class="token comment">// batch:false,</span></span>
<span class="line"></span>
<span class="line">							<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">							<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">								console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"-------------------> 城市解析"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">								console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>regeocode<span class="token punctuation">.</span>formatted_address<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">								<span class="token comment">// _this.geography = res.data.regeocode.formatted_address;</span></span>
<span class="line">								that<span class="token punctuation">.</span>fromData<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token operator">=</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>regeocode<span class="token punctuation">.</span>formatted_address</span>
<span class="line">								that<span class="token punctuation">.</span><span class="token function">$forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">							<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">							<span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">								console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'地址解析失败'</span> <span class="token operator">+</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">							<span class="token punctuation">}</span></span>
<span class="line">						<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">					<span class="token punctuation">}</span></span>
<span class="line">				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打开分享图片弹窗-可以将图片发送给朋友、收藏或下载" tabindex="-1"><a class="header-anchor" href="#打开分享图片弹窗-可以将图片发送给朋友、收藏或下载"><span>打开分享图片弹窗，可以将图片发送给朋友、收藏或下载</span></a></h3>
<p>示例图片：</p>
<p><img src="https://s1.ax1x.com/2022/06/30/jKt6U0.png" alt=""></p>
<p>【所有的 wx.方法，都可以直接写成 uni.方法】</p>
<p><a href="https://developers.weixin.qq.com/minigame/dev/api/share/wx.showShareImageMenu.html" target="_blank" rel="noopener noreferrer">wx.showShareImageMenu(Object object) | 微信开放文档 (qq.com)</a></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"> uni<span class="token punctuation">.</span><span class="token function">downloadFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">   <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://res.wx.qq.com/wxdoc/dist/assets/img/demo.ef5c5bef.jpg'</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">     uni<span class="token punctuation">.</span><span class="token function">showShareImageMenu</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">       <span class="token literal-property property">path</span><span class="token operator">:</span> res<span class="token punctuation">.</span>tempFilePath</span>
<span class="line">     <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分享一个-类似于推文的" tabindex="-1"><a class="header-anchor" href="#分享一个-类似于推文的"><span>分享一个 类似于推文的</span></a></h3>
<p>示例图片</p>
<p><img src="https://s1.ax1x.com/2022/06/30/jK80Tf.png" alt=""></p>
<p>​</p>
<p>这个必须是button按钮 ，且必须这么写</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>buttoncontact<span class="token punctuation">"</span></span> <span class="token attr-name">data-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>shareBtn<span class="token punctuation">"</span></span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>share<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>分享<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>按钮 html 二</strong></p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>buttoncontact flex column center<span class="token punctuation">"</span></span> <span class="token attr-name">data-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>shareBtn<span class="token punctuation">"</span></span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>share<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-icons</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>redo-filled<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#0095ff<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>29<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uni-icons</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>分享<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面这个定义的和 <code v-pre>onLoad</code> 平级 来定义</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">onShareAppMessage</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>from <span class="token operator">===</span> <span class="token string">'button'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 来自页面内分享按钮</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>target<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'自定义分享标题'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/pages/signIn/detail'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">imageUrl</span><span class="token operator">:</span><span class="token string">'/static/images/signIn/copy.png'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>清除按钮的样式</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line">  <span class="token selector">.buttoncontact</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">background</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">font-size</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token selector">&amp;::after</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>按钮 CSS 二</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">.buttoncontact</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 170upx<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 28upx<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token selector">&amp;::after</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用相机或本机相册的api" tabindex="-1"><a class="header-anchor" href="#调用相机或本机相册的api"><span>调用相机或本机相册的API</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">uni<span class="token punctuation">.</span><span class="token function">chooseImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token comment">//默认9 这个是可以选择的图片的个数</span></span>
<span class="line">	<span class="token literal-property property">sizeType</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'original'</span><span class="token punctuation">,</span> <span class="token string">'compressed'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//可以指定是原图还是压缩图，默认二者都有</span></span>
<span class="line">	<span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'album'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//从相册选择  改为camera是相机</span></span>
<span class="line">	<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>tempFilePaths<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>crop 参数说明</strong></p>
<h2 id="消息提示框" tabindex="-1"><a class="header-anchor" href="#消息提示框"><span>消息提示框</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'标题'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="弹出框-uni-ui" tabindex="-1"><a class="header-anchor" href="#弹出框-uni-ui"><span>弹出框 uni-ui</span></a></h2>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token comment">&lt;!-- 提示窗示例 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-popup</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alertDialog<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-popup-dialog</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">cancelText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>关闭<span class="token punctuation">"</span></span> <span class="token attr-name">confirmText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>删除<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>通知<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>确定要删除此管理员吗？<span class="token punctuation">"</span></span> <span class="token attr-name">@confirm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialogConfirm<span class="token punctuation">"</span></span></span>
<span class="line">                      <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialogClose<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uni-popup-dialog</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uni-popup</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>创建一个点击事件来调用这个窗口</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>alertDialog<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="弹出框-代码式" tabindex="-1"><a class="header-anchor" href="#弹出框-代码式"><span>弹出框 代码式</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">uni<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'这是一个模态弹窗'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">confirmColor</span><span class="token operator">:</span> <span class="token string">'#ee6666'</span><span class="token punctuation">,</span> <span class="token comment">//确定字体颜色</span></span>
<span class="line">    <span class="token literal-property property">showCancel</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//没有取消按钮的弹框</span></span>
<span class="line">    <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">'确定'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'用户点击确定'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>cancel<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'用户点击取消'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态修改-uniapp-的导航栏标题" tabindex="-1"><a class="header-anchor" href="#动态修改-uniapp-的导航栏标题"><span>动态修改 uniapp 的导航栏标题</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">uni<span class="token punctuation">.</span><span class="token function">setNavigationBarTitle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'复制签到'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="是否下拉刷新" tabindex="-1"><a class="header-anchor" href="#是否下拉刷新"><span>是否下拉刷新</span></a></h2>
<pre><code>onPullDownRefresh() {
    //监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
    console.log('refresh');
    setTimeout(function () {
        uni.stopPullDownRefresh();  //停止下拉刷新动画
    }, 1000);
}
</code></pre>
<p>————————————————
版权声明：本文为CSDN博主「攻城狮YanGo」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_39644462/article/details/83038684</p>
<h2 id="添加右上角的发送给朋友" tabindex="-1"><a class="header-anchor" href="#添加右上角的发送给朋友"><span>添加右上角的发送给朋友</span></a></h2>
<p>onShareAppMessage() {},</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">onShareAppMessage</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>from <span class="token operator">===</span> <span class="token string">'button'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 来自页面内分享按钮</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>target<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">title</span><span class="token operator">:</span> 果锅留言<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/pages/index/index'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">imageUrl</span><span class="token operator">:</span> <span class="token string">"/static/images/img1.jpg"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="长按震动" tabindex="-1"><a class="header-anchor" href="#长按震动"><span>长按震动</span></a></h2>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">@longtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vibrateShort<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ house.Name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">vibrateShort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    uni<span class="token punctuation">.</span><span class="token function">vibrateShort</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">&lt;script></span>
<span class="line">  export default {</span>
<span class="line">    data() {</span>
<span class="line">      return {</span>
<span class="line">        id: "",</span>
<span class="line">        formData:{}</span>
<span class="line">      };</span>
<span class="line">    },</span>
<span class="line">    onLoad(options) {</span>
<span class="line">      console.log('接收的options参数：', options);</span>
<span class="line">      this.id = options.id</span>
<span class="line">    },</span>
<span class="line">    onShow() {</span>
<span class="line"></span>
<span class="line">      const db = wx.cloud.database();</span>
<span class="line">      db.collection('question-investigation').where({</span>
<span class="line">        _id: this.id</span>
<span class="line">      }).get({</span>
<span class="line">        success: (res => {</span>
<span class="line">          console.log('返回回来的数据  &amp;&amp; this.formData', res.data[0]);</span>
<span class="line">          this.formData = res.data[0]</span>
<span class="line">        })</span>
<span class="line">      })</span>
<span class="line"></span>
<span class="line">    },</span>
<span class="line"></span>
<span class="line">    methods: {</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">&lt;/script></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片点击放大" tabindex="-1"><a class="header-anchor" href="#图片点击放大"><span>图片点击放大</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">    <span class="token function">clickImg</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>formData<span class="token punctuation">.</span>imgUrl<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        uni<span class="token punctuation">.</span><span class="token function">previewImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">urls</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>formData<span class="token punctuation">.</span>imgUrl<span class="token punctuation">,</span> <span class="token comment">//需要预览的图片http链接列表，多张的时候，url直接写在后面就行了</span></span>
<span class="line">          <span class="token literal-property property">current</span><span class="token operator">:</span> index<span class="token punctuation">,</span> <span class="token comment">// 当前显示图片的http链接，默认是第一个</span></span>
<span class="line">          <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span><span class="token string">'success'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span><span class="token string">'fail'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span><span class="token string">'complete'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


