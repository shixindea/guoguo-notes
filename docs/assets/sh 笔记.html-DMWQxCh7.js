import{_ as s,c as a,o as n,a as e}from"./app-463uV9-A.js";const t={},l=e(`<h2 id="转移包" tabindex="-1"><a class="header-anchor" href="#转移包"><span>转移包</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">pnpm</span> build:webpack</span>
<span class="line"></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token punctuation">..</span>/tsp-fe-release/tsp-fe-b/*             // 删除包</span>
<span class="line"><span class="token function">scp</span> <span class="token parameter variable">-r</span> dist/* <span class="token punctuation">..</span>/tsp-fe-release/tsp-fe-b/      // 复制包</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[l];function i(c,r){return n(),a("div",null,p)}const d=s(t,[["render",i],["__file","sh 笔记.html.vue"]]),h=JSON.parse('{"path":"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/sh%20%E7%AC%94%E8%AE%B0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"转移包","slug":"转移包","link":"#转移包","children":[]}],"git":{"updatedTime":1732174611000,"contributors":[{"name":"袁果锅","email":"2914310412@qq.com","commits":1}]},"filePathRelative":"常用笔记/sh 笔记.md","excerpt":"<h2>转移包</h2>\\n<div class=\\"language-bash\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"line\\"><span class=\\"token function\\">pnpm</span> build:webpack</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token function\\">rm</span> <span class=\\"token parameter variable\\">-rf</span> <span class=\\"token punctuation\\">..</span>/tsp-fe-release/tsp-fe-b/*             // 删除包</span>\\n<span class=\\"line\\"><span class=\\"token function\\">scp</span> <span class=\\"token parameter variable\\">-r</span> dist/* <span class=\\"token punctuation\\">..</span>/tsp-fe-release/tsp-fe-b/      // 复制包</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span></code></pre></div>"}');export{d as comp,h as data};
