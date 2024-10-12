import{_ as n,c as a,a as e,o as p}from"./app-76EUTbgz.js";const t={};function l(i,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h2 id="插件安装-vue-tsc-pnpm-lint-fix" tabindex="-1"><a class="header-anchor" href="#插件安装-vue-tsc-pnpm-lint-fix"><span>插件安装 vue-tsc <code>== &gt;</code> pnpm lint:fix</span></a></h2><p>安装： npm i vue-tsc -D</p><p>安装： npm install --save prettier -D</p><p>用法：vue-tsc --noEmit &amp;&amp; vite build</p><p>Vue 3 命令行类型检查工具基于 IDE 插件 <a href="https://github.com/vuejs/language-tools" target="_blank" rel="noopener noreferrer">Volar</a>。</p><blockquote><p>package.json 中添加</p></blockquote><div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="diff"><pre class="language-diff"><code><span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &quot;scripts&quot;: {</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   &quot;dev&quot;: &quot;vite&quot;,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   &quot;build&quot;: &quot;run-p type-check \\&quot;build-only {@}\\&quot; --&quot;,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   &quot;preview&quot;: &quot;vite preview&quot;,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   &quot;build-only&quot;: &quot;vite build&quot;,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   &quot;type-check&quot;: &quot;vue-tsc --build --force&quot;,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   &quot;lint&quot;: &quot;eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore&quot;,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   &quot;format&quot;: &quot;prettier --write src/&quot;,</span>
<span class="line"></span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    &quot;lint:fix&quot;: &quot;vue-tsc --noEmit &amp;&amp; prettier --write .&quot;,</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">    &quot;gitcz&quot;: &quot;git cz&quot;</span>
<span class="line"></span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> },</span>
<span class="line"></span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件安装-pnpm-gitcz" tabindex="-1"><a class="header-anchor" href="#插件安装-pnpm-gitcz"><span>插件安装 <code>== &gt;</code> pnpm gitcz</span></a></h2><blockquote><p>只需要简单的三个步骤:</p></blockquote><p><a href="https://cz-git.qbb.sh/zh/guide/#%E5%85%A8%E5%B1%80%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer">全局安装</a> <code>commitizen</code>,如此一来可以快速使用 <code>cz</code> 或 <code>git cz</code> 命令进行启动。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">npm install -g commitizen</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="步骤-1-下载依赖" tabindex="-1"><a class="header-anchor" href="#步骤-1-下载依赖"><span>步骤 1: 下载依赖</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">npm install -D cz-git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="步骤-2-修改-package-json-添加-config-指定使用的适配器" tabindex="-1"><a class="header-anchor" href="#步骤-2-修改-package-json-添加-config-指定使用的适配器"><span>步骤 2: 修改 <code>package.json</code> 添加 <code>config</code> 指定使用的适配器</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">{</span>
<span class="line">  &quot;scripts&quot;: {</span>
<span class="line"></span>
<span class="line">  },</span>
<span class="line"> &quot;config&quot;: {</span>
<span class="line">    &quot;commitizen&quot;: {</span>
<span class="line">      &quot;path&quot;: &quot;n</span>
<span class="line">      ode_modules/cz-git&quot;,</span>
<span class="line">      &quot;czConfig&quot;: &quot;./commitlint.config.cjs&quot;</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="步骤3-创建-commitlint-config-cjs-文件" tabindex="-1"><a class="header-anchor" href="#步骤3-创建-commitlint-config-cjs-文件"><span>步骤3：创建 commitlint.config.cjs 文件</span></a></h4><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// .commitlintrc.js</span></span>
<span class="line"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;cz-git&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>UserConfig<span class="token punctuation">}</span></span> */</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// @see: https://commitlint.js.org/#/reference-rules</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">prompt</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">fd</span><span class="token operator">:</span> <span class="token string">&quot;docs: fix typos&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;选择你要提交的类型 :&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">&quot;选择一个提交范围（可选）:&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">customScope</span><span class="token operator">:</span> <span class="token string">&quot;请输入自定义的提交范围 :&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">&quot;填写简短精炼的变更描述 :\\n&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&#39;填写更加详细的变更描述（可选）。使用 &quot;|&quot; 换行 :\\n&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">breaking</span><span class="token operator">:</span> <span class="token string">&#39;列举非兼容性重大的变更（可选）。使用 &quot;|&quot; 换行 :\\n&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">footerPrefixesSelect</span><span class="token operator">:</span> <span class="token string">&quot;选择关联issue前缀（可选）:&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">customFooterPrefix</span><span class="token operator">:</span> <span class="token string">&quot;输入自定义issue前缀 :&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">&quot;列举关联issue (可选) 例如: #31, #I3244 :\\n&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">generatingByAI</span><span class="token operator">:</span> <span class="token string">&quot;正在通过 AI 生成你的提交简短描述...&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">generatedSelectByAI</span><span class="token operator">:</span> <span class="token string">&quot;选择一个 AI 生成的简短描述:&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">confirmCommit</span><span class="token operator">:</span> <span class="token string">&quot;是否提交或修改commit ?&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;特性&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;特性:     新增功能&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;修复&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;修复:     修复Bug&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;冲突&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;冲突:     代码合并，冲突处理&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;格式&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;格式:     代码格式（不影响功能，例如空格、分号等格式修正）&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;重构&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;重构:     代码重构（不包括 bug 修复、功能新增）&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;性能&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;性能:     性能优化&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;测试&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;测试:     添加疏漏测试或已有测试改动&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;构建&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;构建:     构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;集成&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;集成:     修改 CI 配置、脚本&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;回退&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;回退:     回滚 commit&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;其他&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;其他:     对构建过程或辅助工具和库的更改（不影响源文件、测试用例）&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">emojiAlign</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">useAI</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">aiNumber</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">themeColorCode</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allowCustomScopes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allowEmptyScopes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customScopesAlign</span><span class="token operator">:</span> <span class="token string">&quot;bottom&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customScopesAlias</span><span class="token operator">:</span> <span class="token string">&quot;以上都不是？我要自定义&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">emptyScopesAlias</span><span class="token operator">:</span> <span class="token string">&quot;跳过&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">upperCaseSubject</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">markBreakingChangeMode</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allowBreakingChanges</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;feat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fix&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">breaklineNumber</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">breaklineChar</span><span class="token operator">:</span> <span class="token string">&quot;|&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">skipQuestions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">issuePrefixes</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// 如果使用 gitee 作为开发管理</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;link:     链接 ISSUES 进行中&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;closed&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;closed:   标记 ISSUES 已完成&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customIssuePrefixAlign</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">emptyIssuePrefixAlias</span><span class="token operator">:</span> <span class="token string">&quot;跳过&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">customIssuePrefixAlias</span><span class="token operator">:</span> <span class="token string">&quot;自定义前缀&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allowCustomIssuePrefix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allowEmptyIssuePrefix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">confirmColorize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">maxHeaderLength</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">maxSubjectLength</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">minSubjectLength</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">scopeOverrides</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">defaultBody</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">defaultIssues</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">defaultScope</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">defaultSubject</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件安装-pnpm-gitcz-1" tabindex="-1"><a class="header-anchor" href="#插件安装-pnpm-gitcz-1"><span>插件安装 <code>== &gt;</code> pnpm gitcz</span></a></h2><p>安装 ：<code>npm install -g commitizen</code></p><p>安装： <code>commitizen init cz-conventional-changelog --save --save-exact</code></p><p>安装： <code>npm install @fe6/norm-git-cz-config</code></p><blockquote><p>新增加一个文件 <code>commitlint.config.cjs</code> <strong>并添加内容</strong></p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/** <span class="token keyword">@format</span> */</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@fe6/norm-git-cz-config&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>package.json 中添加</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">  &quot;config&quot;: {</span>
<span class="line">    &quot;commitizen&quot;: {</span>
<span class="line">      &quot;path&quot;: &quot;node_modules/cz-customizable&quot;</span>
<span class="line">    },</span>
<span class="line">    &quot;cz-customizable&quot;: {</span>
<span class="line">      &quot;config&quot;: &quot;node_modules/@fe6/norm-git-cz-config/customizable.js&quot;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://www.runoob.com/wp-content/uploads/2015/02/011500266295799.jpg" alt="img"></p><div class="language-git line-numbers-mode" data-highlighter="prismjs" data-ext="git" data-title="git"><pre class="language-git"><code><span class="line">在本地新建一个分支： git branch newBranch</span>
<span class="line">切换到你的新分支: git checkout newBranch</span>
<span class="line">创建并切换到新分支： git checkout -b newBranch</span>
<span class="line">将新分支发布在github上： git push origin newBranch</span>
<span class="line">在本地删除一个分支： git branch -d newBranch</span>
<span class="line">在github远程端删除一个分支： git push origin :newBranch (分支名前的冒号代表删除)</span>
<span class="line">                        </span>
<span class="line">原文链接：https://blog.csdn.net/qq_25623355/article/details/99292715</span>
<span class="line">git init                                                  # 初始化本地git仓库（创建新仓库）</span>
<span class="line">git config --global user.name <span class="token string">&quot;xxx&quot;</span>                       # 配置用户名</span>
<span class="line">git config --global user.email <span class="token string">&quot;xxx@xxx.com&quot;</span>              # 配置邮件</span>
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
<span class="line">git commit -m <span class="token string">&#39;xxx&#39;</span>                                       # 提交</span>
<span class="line">git commit --amend -m <span class="token string">&#39;xxx&#39;</span>                               # 合并上一次提交（用于反复修改）</span>
<span class="line">git commit -am <span class="token string">&#39;xxx&#39;</span>                                      # 将add和commit合为一步</span>
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
<span class="line">git tag -a v2.0 -m <span class="token string">&#39;xxx&#39;</span>                                  # 增加v2.0的tag</span>
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
<span class="line">git log --pretty=format:<span class="token string">&#39;%h %s&#39;</span> --graph                   # 图示提交日志</span>
<span class="line">git show HEAD~3</span>
<span class="line">git show -s --pretty=raw 2be7fcb476</span>
<span class="line">git stash                                                 # 暂存当前修改，将所有至为HEAD状态</span>
<span class="line">git stash list                                            # 查看所有暂存</span>
<span class="line">git stash show -p stash@{0}                               # 参考第一次暂存</span>
<span class="line">git stash apply stash@{0}                                 # 应用第一次暂存</span>
<span class="line">git grep <span class="token string">&quot;delete from&quot;</span>                                    # 文件中搜索文本“delete from”</span>
<span class="line">git grep -e <span class="token string">&#39;#define&#39;</span> --and -e SORT_DIRENT</span>
<span class="line">git gc   </span>
<span class="line">git fsck</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="推送-dist-文件夹到子分支-gh-pages" tabindex="-1"><a class="header-anchor" href="#推送-dist-文件夹到子分支-gh-pages"><span>推送 dist 文件夹到子分支 gh-pages</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">第一步</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)]))}const c=n(t,[["render",l],["__file","Git 代码管理.html.vue"]]),r=JSON.parse('{"path":"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/Git%20%E4%BB%A3%E7%A0%81%E7%AE%A1%E7%90%86.html","title":"git 笔记","lang":"zh-CN","frontmatter":{"title":"git 笔记","date":"2023-9-23","tags":["git","笔记"],"categories":["居家篇"]},"headers":[{"level":2,"title":"插件安装   vue-tsc   == > pnpm lint:fix","slug":"插件安装-vue-tsc-pnpm-lint-fix","link":"#插件安装-vue-tsc-pnpm-lint-fix","children":[]},{"level":2,"title":"插件安装   == >  pnpm gitcz","slug":"插件安装-pnpm-gitcz","link":"#插件安装-pnpm-gitcz","children":[]},{"level":2,"title":"插件安装   == >  pnpm gitcz","slug":"插件安装-pnpm-gitcz-1","link":"#插件安装-pnpm-gitcz-1","children":[]},{"level":2,"title":"推送 dist 文件夹到子分支 gh-pages","slug":"推送-dist-文件夹到子分支-gh-pages","link":"#推送-dist-文件夹到子分支-gh-pages","children":[]}],"git":{"updatedTime":1727229103000,"contributors":[{"name":"袁果锅","email":"2914310412@qq.com","commits":1}]},"filePathRelative":"常用笔记/Git 代码管理.md","excerpt":"<h2>插件安装   vue-tsc   <code>== &gt;</code> pnpm lint:fix</h2>\\n<p>安装：  npm i vue-tsc -D</p>\\n<p>安装：  npm install --save prettier -D</p>\\n<p>用法：vue-tsc --noEmit &amp;&amp; vite build</p>\\n<p>Vue 3 命令行类型检查工具基于 IDE 插件 <a href=\\"https://github.com/vuejs/language-tools\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Volar</a>。</p>"}');export{c as comp,r as data};
