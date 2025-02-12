import{_ as a,c as s,o as n,a as e}from"./app-463uV9-A.js";const t={},l=e(`<h2 id="模糊查询" tabindex="-1"><a class="header-anchor" href="#模糊查询"><span>模糊查询</span></a></h2><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username!=null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    username like  CONCAT(&#39;%&#39;,#{username},&#39;%&#39;)</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制台打印sql" tabindex="-1"><a class="header-anchor" href="#控制台打印sql"><span>控制台打印sql</span></a></h2><p>在 <code>application.yml</code> 增加</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">mybatis</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">configuration</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[l];function i(c,o){return n(),s("div",null,p)}const r=a(t,[["render",i],["__file","Mybatis 语法.html.vue"]]),d=JSON.parse(`{"path":"/Java/Mybatis%20%E8%AF%AD%E6%B3%95.html","title":"Mybatis 语法","lang":"zh-CN","frontmatter":{"title":"Mybatis 语法","date":"2023-5-21","tags":["Java","Mybatis","语法"],"categories":["自学篇"]},"headers":[{"level":2,"title":"模糊查询","slug":"模糊查询","link":"#模糊查询","children":[]},{"level":2,"title":"控制台打印sql","slug":"控制台打印sql","link":"#控制台打印sql","children":[]}],"git":{"updatedTime":1727229103000,"contributors":[{"name":"袁果锅","email":"2914310412@qq.com","commits":1}]},"filePathRelative":"Java/Mybatis 语法.md","excerpt":"<h2>模糊查询</h2>\\n<div class=\\"language-xml\\" data-highlighter=\\"prismjs\\" data-ext=\\"xml\\" data-title=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"line\\"><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>if</span> <span class=\\"token attr-name\\">test</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>username!=null<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\">    username like  CONCAT('%',#{username},'%')</span>\\n<span class=\\"line\\"><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>if</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\"></span></code></pre></div>"}`);export{r as comp,d as data};
