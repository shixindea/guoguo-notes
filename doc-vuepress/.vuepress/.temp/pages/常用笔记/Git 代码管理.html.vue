<template><div><h2 id="插件安装-vue-tsc-pnpm-lint-fix" tabindex="-1"><a class="header-anchor" href="#插件安装-vue-tsc-pnpm-lint-fix"><span>插件安装   vue-tsc   <code v-pre>== &gt;</code> pnpm lint:fix</span></a></h2>
<p>安装：  npm i vue-tsc -D</p>
<p>安装：  npm install --save prettier -D</p>
<p>用法：vue-tsc --noEmit &amp;&amp; vite build</p>
<p>Vue 3 命令行类型检查工具基于 IDE 插件 <a href="https://github.com/vuejs/language-tools" target="_blank" rel="noopener noreferrer">Volar</a>。</p>
<blockquote>
<p>package.json 中添加</p>
</blockquote>
<div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="diff"><pre v-pre class="language-diff"><code><span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> "scripts": {</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   "dev": "vite",</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   "build": "run-p type-check \"build-only {@}\" --",</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   "preview": "vite preview",</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   "build-only": "vite build",</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   "type-check": "vue-tsc --build --force",</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   "format": "prettier --write src/",</span>
<span class="line"></span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    "lint:fix": "vue-tsc --noEmit &amp;&amp; prettier --write .",</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">    "gitcz": "git cz"</span>
<span class="line"></span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> },</span>
<span class="line"></span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件安装-pnpm-gitcz" tabindex="-1"><a class="header-anchor" href="#插件安装-pnpm-gitcz"><span>插件安装   <code v-pre>== &gt;</code>  pnpm gitcz</span></a></h2>
<blockquote>
<p>只需要简单的三个步骤:</p>
</blockquote>
<p><a href="https://cz-git.qbb.sh/zh/guide/#%E5%85%A8%E5%B1%80%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer">全局安装</a> <code v-pre>commitizen</code>,如此一来可以快速使用 <code v-pre>cz</code> 或 <code v-pre>git cz</code> 命令进行启动。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">npm install -g commitizen</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="步骤-1-下载依赖" tabindex="-1"><a class="header-anchor" href="#步骤-1-下载依赖"><span>步骤 1: 下载依赖</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">npm install -D cz-git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="步骤-2-修改-package-json-添加-config-指定使用的适配器" tabindex="-1"><a class="header-anchor" href="#步骤-2-修改-package-json-添加-config-指定使用的适配器"><span>步骤 2: 修改 <code v-pre>package.json</code> 添加 <code v-pre>config</code> 指定使用的适配器</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">{</span>
<span class="line">  "scripts": {</span>
<span class="line"></span>
<span class="line">  },</span>
<span class="line"> "config": {</span>
<span class="line">    "commitizen": {</span>
<span class="line">      "path": "n</span>
<span class="line">      ode_modules/cz-git",</span>
<span class="line">      "czConfig": "./commitlint.config.cjs"</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="步骤3-创建-commitlint-config-cjs-文件" tabindex="-1"><a class="header-anchor" href="#步骤3-创建-commitlint-config-cjs-文件"><span>步骤3：创建  commitlint.config.cjs 文件</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// .commitlintrc.js</span></span>
<span class="line"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'cz-git'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>UserConfig<span class="token punctuation">}</span></span> */</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// @see: https://commitlint.js.org/#/reference-rules</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">prompt</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">fd</span><span class="token operator">:</span> <span class="token string">"docs: fix typos"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"选择你要提交的类型 :"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">"选择一个提交范围（可选）:"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">customScope</span><span class="token operator">:</span> <span class="token string">"请输入自定义的提交范围 :"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">"填写简短精炼的变更描述 :\n"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">'填写更加详细的变更描述（可选）。使用 "|" 换行 :\n'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">breaking</span><span class="token operator">:</span> <span class="token string">'列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">footerPrefixesSelect</span><span class="token operator">:</span> <span class="token string">"选择关联issue前缀（可选）:"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">customFooterPrefix</span><span class="token operator">:</span> <span class="token string">"输入自定义issue前缀 :"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">"列举关联issue (可选) 例如: #31, #I3244 :\n"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">generatingByAI</span><span class="token operator">:</span> <span class="token string">"正在通过 AI 生成你的提交简短描述..."</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">generatedSelectByAI</span><span class="token operator">:</span> <span class="token string">"选择一个 AI 生成的简短描述:"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">confirmCommit</span><span class="token operator">:</span> <span class="token string">"是否提交或修改commit ?"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"特性"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"特性:     新增功能"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"修复"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"修复:     修复Bug"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"冲突"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"冲突:     代码合并，冲突处理"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"格式"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"格式:     代码格式（不影响功能，例如空格、分号等格式修正）"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"重构"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"重构:     代码重构（不包括 bug 修复、功能新增）"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"性能"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"性能:     性能优化"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"测试"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"测试:     添加疏漏测试或已有测试改动"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"构建"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"构建:     构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"集成"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"集成:     修改 CI 配置、脚本"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"回退"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"回退:     回滚 commit"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"其他"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"其他:     对构建过程或辅助工具和库的更改（不影响源文件、测试用例）"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">emojiAlign</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">useAI</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">aiNumber</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">themeColorCode</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allowCustomScopes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allowEmptyScopes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customScopesAlign</span><span class="token operator">:</span> <span class="token string">"bottom"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customScopesAlias</span><span class="token operator">:</span> <span class="token string">"以上都不是？我要自定义"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">emptyScopesAlias</span><span class="token operator">:</span> <span class="token string">"跳过"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">upperCaseSubject</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">markBreakingChangeMode</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allowBreakingChanges</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"feat"</span><span class="token punctuation">,</span> <span class="token string">"fix"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">breaklineNumber</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">breaklineChar</span><span class="token operator">:</span> <span class="token string">"|"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">skipQuestions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">issuePrefixes</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// 如果使用 gitee 作为开发管理</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"link"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"link:     链接 ISSUES 进行中"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"closed"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"closed:   标记 ISSUES 已完成"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customIssuePrefixAlign</span><span class="token operator">:</span> <span class="token string">"top"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">emptyIssuePrefixAlias</span><span class="token operator">:</span> <span class="token string">"跳过"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customIssuePrefixAlias</span><span class="token operator">:</span> <span class="token string">"自定义前缀"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allowCustomIssuePrefix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allowEmptyIssuePrefix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">confirmColorize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">maxHeaderLength</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">maxSubjectLength</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">minSubjectLength</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">scopeOverrides</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">defaultBody</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">defaultIssues</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">defaultScope</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">defaultSubject</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="袁果锅生态" tabindex="-1"><a class="header-anchor" href="#袁果锅生态"><span>袁果锅生态</span></a></h2>
<p>用于 git cz 提交规范</p>
<ol>
<li>安装依赖</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">npm install cz-customizable</span>
<span class="line">npm install @shixinde/guoguo-cz</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>配置</li>
</ol>
<p>在 package.json 中添加 <code v-pre>config.commitizen </code> 配置</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">  "scripts": {</span>
<span class="line">     "gitcz": "git-cz"</span>
<span class="line">    },</span>
<span class="line">  "config": {</span>
<span class="line">    "commitizen": {</span>
<span class="line">      "path": "node_modules/cz-customizable"</span>
<span class="line">    },</span>
<span class="line">    "cz-customizable": {</span>
<span class="line">      "config": "node_modules/@shixinde/guoguo-cz/commitlint.config.cjs"</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展-格式化工具" tabindex="-1"><a class="header-anchor" href="#扩展-格式化工具"><span>扩展： 格式化工具</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">安装</span>
<span class="line">  npm install -D prettier pretty-quick</span>
<span class="line"></span>
<span class="line"> </span>
<span class="line">执行</span>
<span class="line">  "scripts": {</span>
<span class="line">    "lint": "pretty-quick --staged",</span>
<span class="line">  },</span>
<span class="line"></span>
<span class="line">使用</span>
<span class="line">  npm run lint | pnpm lint</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件安装-pnpm-gitcz-1" tabindex="-1"><a class="header-anchor" href="#插件安装-pnpm-gitcz-1"><span>插件安装   <code v-pre>== &gt;</code>  pnpm gitcz</span></a></h2>
<p>安装 ：<code v-pre>npm install -g commitizen</code></p>
<p>安装： <code v-pre>commitizen init cz-conventional-changelog --save --save-exact</code></p>
<p>安装： <code v-pre>npm install @fe6/norm-git-cz-config</code></p>
<blockquote>
<p>新增加一个文件 <code v-pre>commitlint.config.cjs</code>    <strong>并添加内容</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/** <span class="token keyword">@format</span> */</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@fe6/norm-git-cz-config"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>package.json 中添加</p>
</blockquote>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">  "config": {</span>
<span class="line">    "commitizen": {</span>
<span class="line">      "path": "node_modules/cz-customizable"</span>
<span class="line">    },</span>
<span class="line">    "cz-customizable": {</span>
<span class="line">      "config": "node_modules/@fe6/norm-git-cz-config/customizable.js"</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://www.runoob.com/wp-content/uploads/2015/02/011500266295799.jpg" alt="img"></p>
<div class="language-git line-numbers-mode" data-highlighter="prismjs" data-ext="git" data-title="git"><pre v-pre class="language-git"><code><span class="line">在本地新建一个分支： git branch newBranch</span>
<span class="line">切换到你的新分支: git checkout newBranch</span>
<span class="line">创建并切换到新分支： git checkout -b newBranch</span>
<span class="line">将新分支发布在github上： git push origin newBranch</span>
<span class="line">在本地删除一个分支： git branch -d newBranch</span>
<span class="line">在github远程端删除一个分支： git push origin :newBranch (分支名前的冒号代表删除)</span>
<span class="line">                        </span>
<span class="line">原文链接：https://blog.csdn.net/qq_25623355/article/details/99292715</span>
<span class="line">git init                                                  # 初始化本地git仓库（创建新仓库）</span>
<span class="line">git config --global user.name <span class="token string">"xxx"</span>                       # 配置用户名</span>
<span class="line">git config --global user.email <span class="token string">"xxx@xxx.com"</span>              # 配置邮件</span>
<span class="line">git config --global color.ui true                         # git status等命令自动着色</span>
<span class="line">git config --global color.status auto</span>
<span class="line">git config --global color.diff auto</span>
<span class="line">git config --global color.branch auto</span>
<span class="line">git config --global color.interactive auto</span>
<span class="line">git config --global --unset http.proxy                    # remove  proxy configuration on git</span>
<span class="line">git clone git+ssh://git@192.168.53.168/VT.git             # clone远程仓库</span>
<span class="line">git status                                                # 查看当前版本状态（是否修改）</span>
<span class="line">git add xyz                                               # 添加xyz文件至index</span>
<span class="line">git add .                                                 # 增加当前子目录下所有更改过的文件至index</span>
<span class="line">git commit -m <span class="token string">'xxx'</span>                                       # 提交</span>
<span class="line">git commit --amend -m <span class="token string">'xxx'</span>                               # 合并上一次提交（用于反复修改）</span>
<span class="line">git commit -am <span class="token string">'xxx'</span>                                      # 将add和commit合为一步</span>
<span class="line">git rm xxx                                                # 删除index中的文件</span>
<span class="line">git rm -r *                                               # 递归删除</span>
<span class="line">git log                                                   # 显示提交日志</span>
<span class="line">git log -1                                                # 显示1行日志 -n为n行</span>
<span class="line">git log -5</span>
<span class="line">git log --stat                                            # 显示提交日志及相关变动文件</span>
<span class="line">git log -p -m</span>
<span class="line">git show dfb02e6e4f2f7b573337763e5c0013802e392818         # 显示某个提交的详细内容</span>
<span class="line">git show dfb02                                            # 可只用commitid的前几位</span>
<span class="line">git show HEAD                                             # 显示HEAD提交日志</span>
<span class="line">git show HEAD^                                            # 显示HEAD的父（上一个版本）的提交日志 ^^为上两个版本 ^5为上5个版本</span>
<span class="line">git tag                                                   # 显示已存在的tag</span>
<span class="line">git tag -a v2.0 -m <span class="token string">'xxx'</span>                                  # 增加v2.0的tag</span>
<span class="line">git show v2.0                                             # 显示v2.0的日志及详细内容</span>
<span class="line">git log v2.0                                              # 显示v2.0的日志</span>
<span class="line">git diff                                                  # 显示所有未添加至index的变更</span>
<span class="line">git diff --cached                                         # 显示所有已添加index但还未commit的变更</span>
<span class="line">git diff HEAD^                                            # 比较与上一个版本的差异</span>
<span class="line">git diff HEAD -- ./lib                                    # 比较与HEAD版本lib目录的差异</span>
<span class="line">git diff origin/master..master                            # 比较远程分支master上有本地分支master上没有的</span>
<span class="line">git diff origin/master..master --stat                     # 只显示差异的文件，不显示具体内容</span>
<span class="line">git remote add origin git+ssh://git@192.168.53.168/VT.git # 增加远程定义（用于push/pull/fetch）</span>
<span class="line">git branch                                                # 显示本地分支</span>
<span class="line">git branch --contains 50089                               # 显示包含提交50089的分支</span>
<span class="line">git branch -a                                             # 显示所有分支</span>
<span class="line">git branch -r                                             # 显示所有原创分支</span>
<span class="line">git branch --merged                                       # 显示所有已合并到当前分支的分支</span>
<span class="line">git branch --no-merged                                    # 显示所有未合并到当前分支的分支</span>
<span class="line">git branch -m master master_copy                          # 本地分支改名</span>
<span class="line">git checkout -b master_copy                               # 从当前分支创建新分支master_copy并检出</span>
<span class="line">git checkout -b master master_copy                        # 上面的完整版</span>
<span class="line">git checkout features/performance                         # 检出已存在的features/performance分支</span>
<span class="line">git checkout --track hotfixes/BJVEP933                    # 检出远程分支hotfixes/BJVEP933并创建本地跟踪分支</span>
<span class="line">git checkout v2.0                                         # 检出版本v2.0</span>
<span class="line">git checkout -b devel origin/develop                      # 从远程分支develop创建新本地分支devel并检出</span>
<span class="line">git checkout -- README                                    # 检出head版本的README文件（可用于修改错误回退）</span>
<span class="line">git merge origin/master                                   # 合并远程master分支至当前分支</span>
<span class="line">git cherry-pick ff44785404a8e                             # 合并提交ff44785404a8e的修改</span>
<span class="line">git push origin master                                    # 将当前分支push到远程master分支</span>
<span class="line">git push origin :hotfixes/BJVEP933                        # 删除远程仓库的hotfixes/BJVEP933分支</span>
<span class="line">git push --tags                                           # 把所有tag推送到远程仓库</span>
<span class="line">git fetch                                                 # 获取所有远程分支（不更新本地分支，另需merge）</span>
<span class="line">git fetch --prune                                         # 获取所有原创分支并清除服务器上已删掉的分支</span>
<span class="line">git pull origin master                                    # 获取远程分支master并merge到当前分支</span>
<span class="line">git mv README README2                                     # 重命名文件README为README2</span>
<span class="line">git reset --hard HEAD                                     # 将当前版本重置为HEAD（通常用于merge失败回退）</span>
<span class="line">git rebase</span>
<span class="line">git branch -d hotfixes/BJVEP933                           # 删除分支hotfixes/BJVEP933（本分支修改已合并到其他分支）</span>
<span class="line">git branch -D hotfixes/BJVEP933                           # 强制删除分支hotfixes/BJVEP933</span>
<span class="line">git ls-files                                              # 列出git index包含的文件</span>
<span class="line">git show-branch                                           # 图示当前分支历史</span>
<span class="line">git show-branch --all                                     # 图示所有分支历史</span>
<span class="line">git whatchanged                                           # 显示提交历史对应的文件修改</span>
<span class="line">git revert dfb02e6e4f2f7b573337763e5c0013802e392818       # 撤销提交dfb02e6e4f2f7b573337763e5c0013802e392818</span>
<span class="line">git ls-tree HEAD                                          # 内部命令：显示某个git对象</span>
<span class="line">git rev-parse v2.0                                        # 内部命令：显示某个ref对于的SHA1 HASH</span>
<span class="line">git reflog                                                # 显示所有提交，包括孤立节点</span>
<span class="line">git show HEAD@{5}</span>
<span class="line">git show master@{yesterday}                               # 显示master分支昨天的状态</span>
<span class="line">git log --pretty=format:<span class="token string">'%h %s'</span> --graph                   # 图示提交日志</span>
<span class="line">git show HEAD~3</span>
<span class="line">git show -s --pretty=raw 2be7fcb476</span>
<span class="line">git stash                                                 # 暂存当前修改，将所有至为HEAD状态</span>
<span class="line">git stash list                                            # 查看所有暂存</span>
<span class="line">git stash show -p stash@{0}                               # 参考第一次暂存</span>
<span class="line">git stash apply stash@{0}                                 # 应用第一次暂存</span>
<span class="line">git grep <span class="token string">"delete from"</span>                                    # 文件中搜索文本“delete from”</span>
<span class="line">git grep -e <span class="token string">'#define'</span> --and -e SORT_DIRENT</span>
<span class="line">git gc   </span>
<span class="line">git fsck</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="推送-dist-文件夹到子分支-gh-pages" tabindex="-1"><a class="header-anchor" href="#推送-dist-文件夹到子分支-gh-pages"><span>推送 dist 文件夹到子分支 gh-pages</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">第一步</span>
<span class="line"></span>
<span class="line">/dist 目录需要被 git 记录，于是后面我们才可以用它作为子树（subtree），因此 /dist 不能被 .gitignore 规则排除</span>
<span class="line"></span>
<span class="line">第二步</span>
<span class="line"></span>
<span class="line">git subtree push --prefix dist origin gh-pages</span>
<span class="line"></span>
<span class="line">搞定。其中：</span>
<span class="line"></span>
<span class="line">dist 代表子树所在的目录名</span>
<span class="line">origin 是 remote name</span>
<span class="line">gh-pages 是目标分支名称</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="当本地登陆了一个账号-但是要拉取另一个账号的git地址" tabindex="-1"><a class="header-anchor" href="#当本地登陆了一个账号-但是要拉取另一个账号的git地址"><span>当本地登陆了一个账号，但是要拉取另一个账号的git地址</span></a></h2>
<h1 id="git-使用采坑-the-project-you-were-looking-for-could-not-be-found-解决方式" tabindex="-1"><a class="header-anchor" href="#git-使用采坑-the-project-you-were-looking-for-could-not-be-found-解决方式"><span><a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Failijie.top%2Farchives%2Fgit-the-project-you-were-looking-for-could-not-be-found-" target="_blank" rel="noopener noreferrer">git 使用采坑 - The project you were looking for could not be found 解决方式</a></span></a></h1>
<p>问题描述：使用 git clone 项目，出现这个问题：The project you were looking for could not be found.</p>
<p>原因：gi t 自动保存 git 密码的功能（自己在单位电脑用了码云和 github 做了仓库，估计起了冲突）</p>
<p>解决方案一：</p>
<p>git clone <a href="https://www.oschina.net/action/GoToLink?url=http%3A%2F%2F@git.coding.net%2Fname%2Fproject.git" target="_blank" rel="noopener noreferrer">http://@git.coding.net/name/project.git</a>  ---- 失败</p>
<p>添加远程地址的时候带上用户名及密码即可解决，格式如下：</p>
<p>git clone <a href="https://www.oschina.net/action/GoToLink?url=http%3A%2F%2Fyourname%3Apassword@git.coding.net%2Fname%2Fproject.git" target="_blank" rel="noopener noreferrer">http://yourname:password@git.coding.net/name/project.git</a> ---- 成功</p>
<p>解决方案二：</p>
<p>在自己的项目路径上加上自己的用户名， 例如： Git clone <a href="https://www.oschina.net/action/GoToLink?url=http%3A%2F%2Fgit.coding.net%2Fname%2Fproject.git" target="_blank" rel="noopener noreferrer">http://git.coding.net/name/project.git</a> ---- 失败 Git clone <a href="https://www.oschina.net/action/GoToLink?url=http%3A%2F%2Fgit%E8%B4%A6%E6%88%B7%E5%90%8D@git.coding.net%2Fname%2Fproject.git" target="_blank" rel="noopener noreferrer">http://git 账户名 @git.coding.net/name/project.git</a> 然后再弹出的密码输入指令后面输入密码 ---- 成功</p>
<p>解决方案三：</p>
<p>清除本地 git 账户，重新输入用户名密码（最优）</p>
<p>git config --system --unset credential.helper
之后再进行 git 操作时，弹出用户名密码窗口，输入即可</p>
<p>有问题，请留言！</p>
</div></template>


