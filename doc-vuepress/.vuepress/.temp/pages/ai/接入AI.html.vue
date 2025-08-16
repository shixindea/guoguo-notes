<template><div><h2 id="pom-配置" tabindex="-1"><a class="header-anchor" href="#pom-配置"><span>Pom 配置</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line"># Spring Boot Admin 配置项</span>
<span class="line">spring:</span>
<span class="line">   ai:</span>
<span class="line">    ollama:</span>
<span class="line">      chat:</span>
<span class="line">        model: qwen3:1.7b</span>
<span class="line">      base-url: http://localhost:11434</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>
<h2 id="官网链接" tabindex="-1"><a class="header-anchor" href="#官网链接"><span>官网链接</span></a></h2>
<p>https://doc.spring4all.com/spring-ai/reference/api/chatclient.html</p>
<h2 id="sse-长链接-单向数据传输-后端-前端" tabindex="-1"><a class="header-anchor" href="#sse-长链接-单向数据传输-后端-前端"><span>sse 长链接  单向数据传输 后端 -&gt; 前端</span></a></h2>
<h2 id="websorket-双向数据传输" tabindex="-1"><a class="header-anchor" href="#websorket-双向数据传输"><span>websorket 双向数据传输</span></a></h2>
<h2 id="ai-格式化输出" tabindex="-1"><a class="header-anchor" href="#ai-格式化输出"><span>ai 格式化输出</span></a></h2>
<div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="diff"><pre v-pre class="language-diff"><code><span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> Boolean aBoolean = chatclient.prompt()ChatClientRequestSpec// 用户提示词</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line"> .user( text: message + "/no_think")</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line"> .system(p -> p.param(k:"current_date", LocalDate.now().t</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line"> .call()CallResponseSpec</span>
<span class="line"></span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  entity(Boolean.class)</span>
<span class="line"></span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="切换大模型教程" tabindex="-1"><a class="header-anchor" href="#切换大模型教程"><span>切换大模型教程</span></a></h2>
<p><img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250703094738518.png" alt="image-20250703094738518"></p>
</div></template>


