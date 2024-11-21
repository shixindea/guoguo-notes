<template><div><h2 id="转移包" tabindex="-1"><a class="header-anchor" href="#转移包"><span>转移包</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">pnpm</span> build:webpack</span>
<span class="line"></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token punctuation">..</span>/tsp-fe-release/tsp-fe-b/*             // 删除包</span>
<span class="line"><span class="token function">scp</span> <span class="token parameter variable">-r</span> dist/* <span class="token punctuation">..</span>/tsp-fe-release/tsp-fe-b/      // 复制包</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


