<template><div><h2 id="tip" tabindex="-1"><a class="header-anchor" href="#tip"><span>TIP</span></a></h2>
<blockquote>
<p><a href="https://cz-git.qbb.sh/zh/guide/#%E5%85%A8%E5%B1%80%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer">全局安装</a> <code v-pre>commitizen</code>,如此一来可以快速使用 <code v-pre>cz</code> 或 <code v-pre>git cz</code> 命令进行启动。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> commitizen</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="格式化工具-pnpm-lint" tabindex="-1"><a class="header-anchor" href="#格式化工具-pnpm-lint"><span>格式化工具 --- pnpm lint</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">安装</span>
<span class="line">  <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span>  pretty-quick</span>
<span class="line"> </span>
<span class="line">执行</span>
<span class="line">  <span class="token string">"scripts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">"lint"</span><span class="token builtin class-name">:</span> <span class="token string">"pretty-quick --staged"</span>,</span>
<span class="line">  <span class="token punctuation">}</span>,</span>
<span class="line"></span>
<span class="line">使用</span>
<span class="line">  <span class="token function">npm</span> run lint <span class="token operator">|</span> <span class="token function">pnpm</span> lint</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="格式化规范" tabindex="-1"><a class="header-anchor" href="#格式化规范"><span>格式化规范</span></a></h2>
<blockquote>
<p>下载依赖</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"> <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span>  prettier @shixinde/guoguo-prettier  </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>添加配置</p>
</blockquote>
<div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="diff"><pre v-pre class="language-diff"><code><span class="line">// 根目录的 .prettierrc.js</span>
<span class="line">module.exports = {</span>
<span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   ...require('@shixinde/guoguo-prettier'),</span>
<span class="line"></span></span>};</span>
<span class="line"></span>
<span class="line">// 根目录的 .prettierignore</span>
<span class="line">index.html</span>
<span class="line">pnpm-lock.yaml</span>
<span class="line">public</span>
<span class="line">dist</span>
<span class="line">.history</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交规范工具-pnpm-gitcz" tabindex="-1"><a class="header-anchor" href="#提交规范工具-pnpm-gitcz"><span>提交规范工具 --- pnpm gitcz</span></a></h2>
<blockquote>
<p>安装</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> commitizen  //全局安装  安装过可以不用安装</span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> cz-git</span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> @shixinde/guoguo-cz --save-dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ol>
<li>配置   ----&gt;   在 package.json 中添加 <code v-pre>config.commitizen </code> 配置</li>
</ol>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">  <span class="token string">"scripts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token string">"gitcz"</span><span class="token builtin class-name">:</span> <span class="token string">"git-cz"</span></span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    </span>
<span class="line">  <span class="token string">"config"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">"commitizen"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">"path"</span><span class="token builtin class-name">:</span> <span class="token string">"node_modules/cz-git"</span>,</span>
<span class="line">      <span class="token string">"czConfig"</span><span class="token builtin class-name">:</span> <span class="token string">"node_modules/@shixinde/guoguo-cz/commitlint.config.js"</span></span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token string">"commitlint"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string">"extends"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">"@shixinde/guoguo-cz"</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span>,</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ol start="2">
<li>新增  ----&gt;   在 根目录 中添加 <code v-pre>commitlint.config.cjs </code> 文件</li>
</ol>
<p>&quot;@commitlint/config-conventional&quot; ： 代码提交时的名称校验</p>
<p>&quot;@shixinde/guoguo-cz&quot;：pnpm gitcz 文字格式化提示</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@commitlint/config-conventional"</span><span class="token punctuation">,</span> <span class="token string">"@shixinde/guoguo-cz"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-commitlint-工具和规则集" tabindex="-1"><a class="header-anchor" href="#安装-commitlint-工具和规则集"><span>安装 commitlint 工具和规则集</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> --save-dev @commitlint/cli @commitlint/config-conventional</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<h3 id="项目根目录新建文件-commitlint-config-cjs" tabindex="-1"><a class="header-anchor" href="#项目根目录新建文件-commitlint-config-cjs"><span>项目根目录新建文件  --&gt; commitlint.config.cjs</span></a></h3>
<blockquote>
<p><strong>Tip :  此处仅为技巧 ， 使用袁果锅生态可省略此步骤</strong></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">module.exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  extends: <span class="token punctuation">[</span><span class="token string">"@commitlint/config-conventional"</span>, <span class="token string">"@shixinde/guoguo-cz"</span><span class="token punctuation">]</span>,</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h2 id="安装-husky-用于git-拦截" tabindex="-1"><a class="header-anchor" href="#安装-husky-用于git-拦截"><span>安装 husky （用于git 拦截）</span></a></h2>
<div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd" data-title="cmd"><pre v-pre class="language-cmd"><code><span class="line">npm install husky --save-dev   // 安装依赖</span>
<span class="line"></span>
<span class="line">npx husky-init   // 安装初始化内容</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>在 <code v-pre>pre-commit</code> 中修改代码</p>
</blockquote>
<div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="diff"><pre v-pre class="language-diff"><code><span class="line">#!/usr/bin/env sh</span>
<span class="line">. "$(dirname -- "$0")/_/husky.sh"</span>
<span class="line"></span>
<span class="line"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  npm test</span>
<span class="line"></span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> npm run lint</span>
<span class="line"></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="以下为全文件配置-成功可忽略" tabindex="-1"><a class="header-anchor" href="#以下为全文件配置-成功可忽略"><span>以下为全文件配置 -- 成功可忽略</span></a></h3>
<p><img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/image-20241121140156285.png" alt="image-20241121140156285"></p>
<blockquote>
<p>.gitignore</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">*</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></blockquote>
<blockquote>
<p>husky.sh</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token shebang important">#!/usr/bin/env sh</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">"<span class="token variable">$husky_skip_init</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">  <span class="token function-name function">debug</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$HUSKY_DEBUG</span>"</span> <span class="token operator">=</span> <span class="token string">"1"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">      <span class="token builtin class-name">echo</span> <span class="token string">"husky (debug) - <span class="token variable">$1</span>"</span></span>
<span class="line">    <span class="token keyword">fi</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token builtin class-name">readonly</span> <span class="token assign-left variable">hook_name</span><span class="token operator">=</span><span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> -- <span class="token string">"<span class="token variable">$0</span>"</span><span class="token variable">)</span></span>"</span></span>
<span class="line">  debug <span class="token string">"starting <span class="token variable">$hook_name</span>..."</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$HUSKY</span>"</span> <span class="token operator">=</span> <span class="token string">"0"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    debug <span class="token string">"HUSKY env variable is set to 0, skipping hook"</span></span>
<span class="line">    <span class="token builtin class-name">exit</span> <span class="token number">0</span></span>
<span class="line">  <span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> ~/.huskyrc <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    debug <span class="token string">"sourcing ~/.huskyrc"</span></span>
<span class="line">    <span class="token builtin class-name">.</span> ~/.huskyrc</span>
<span class="line">  <span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line">  <span class="token builtin class-name">readonly</span> <span class="token assign-left variable">husky_skip_init</span><span class="token operator">=</span><span class="token number">1</span></span>
<span class="line">  <span class="token builtin class-name">export</span> husky_skip_init</span>
<span class="line">  <span class="token function">sh</span> <span class="token parameter variable">-e</span> <span class="token string">"<span class="token variable">$0</span>"</span> <span class="token string">"<span class="token variable">$@</span>"</span></span>
<span class="line">  <span class="token assign-left variable">exitCode</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$?</span>"</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$exitCode</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">"husky - <span class="token variable">$hook_name</span> hook exited with code <span class="token variable">$exitCode</span> (error)"</span></span>
<span class="line">  <span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$exitCode</span> <span class="token operator">=</span> <span class="token number">127</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">"husky - command not found in PATH=<span class="token environment constant">$PATH</span>"</span></span>
<span class="line">  <span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line">  <span class="token builtin class-name">exit</span> <span class="token variable">$exitCode</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<blockquote>
<p>commit-msg    校验是否报错 并不会校验提交的名称</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token shebang important">#!/usr/bin/env sh</span></span>
<span class="line"><span class="token builtin class-name">.</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">"<span class="token variable">$0</span>"</span><span class="token variable">)</span></span>/_/husky.sh"</span></span>
<span class="line"></span>
<span class="line">npx --no-install commitlint <span class="token parameter variable">--edit</span> <span class="token variable">$1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<blockquote>
<p>pre-commit</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token shebang important">#!/usr/bin/env sh</span></span>
<span class="line"><span class="token builtin class-name">.</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> -- <span class="token string">"<span class="token variable">$0</span>"</span><span class="token variable">)</span></span>/_/husky.sh"</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> run lint</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h2 id="生成日志" tabindex="-1"><a class="header-anchor" href="#生成日志"><span>生成日志</span></a></h2>
<p>conventional-changelog
可以根据项目的 commit 和 metadata 信息自动生成 changelogs 和 release notes 的系列工具。</p>
<blockquote>
<p>安装</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> conventional-changelog-cli conventional-changelog-gitmoji-config</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>将新脚本添加到您的 package.json</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token string">"scripts"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">..</span>.</span>
<span class="line">  <span class="token string">"changelog"</span><span class="token builtin class-name">:</span> <span class="token string">"conventional-changelog -p gitmoji-config -i CHANGELOG.md -s"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>运行 npm run changelog 生成日志</p>
</blockquote>
</div></template>


