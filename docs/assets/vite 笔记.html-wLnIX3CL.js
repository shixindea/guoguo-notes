import{_ as n,c as s,o as a,a as p}from"./app-463uV9-A.js";const t={},e=p(`<h2 id="开启-css-路径追踪" tabindex="-1"><a class="header-anchor" href="#开启-css-路径追踪"><span>开启 CSS 路径追踪</span></a></h2><blockquote><p>devSourcemap: true,</p></blockquote><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    optimizeDeps<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        exclude<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 将指定数组中的依赖不进行依赖预构建</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    envPrefix<span class="token operator">:</span> <span class="token string">&quot;VITE_&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 配置环境变量前缀</span></span>
<span class="line">    css<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        devSourcemap<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 开启 CSS source map 追踪 就是在页面上的</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite-base-config-ts-配置" tabindex="-1"><a class="header-anchor" href="#vite-base-config-ts-配置"><span>vite.Base.config.ts 配置</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> viteCompression <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-compression&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    optimizeDeps<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        exclude<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 将指定数组中的依赖不进行依赖预构建</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    envPrefix<span class="token operator">:</span> <span class="token string">&quot;VITE_&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 配置环境变量前缀</span></span>
<span class="line">    resolve<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        alias<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/src&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">&quot;@assets&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/src/assets&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">   plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">viteCompression</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 压缩插件</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    build<span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">// 配置打包配置</span></span>
<span class="line">        rollupOptions<span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">// rollup 配置</span></span>
<span class="line">            output<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                assetFileNames<span class="token operator">:</span> <span class="token string">&quot;[name].[ext].[hash]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 输出的文件名  名称.扩展名.hash值</span></span>
<span class="line">                <span class="token comment">// 分包策略  会再打包时 将node_modules 打包为 vendor 文件</span></span>
<span class="line">                <span class="token function-variable function">manualChunks</span><span class="token operator">:</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;id ===&gt;&#39;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">return</span> <span class="token string">&#39;vendor&#39;</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        assetsInlineLimit<span class="token operator">:</span> <span class="token number">4096000</span><span class="token punctuation">,</span> <span class="token comment">// 4000kb</span></span>
<span class="line">        outDir<span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 输出目录</span></span>
<span class="line">        assetsDir<span class="token operator">:</span> <span class="token string">&#39;static&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        minify<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 打包后不乱码</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite-config-ts-配置" tabindex="-1"><a class="header-anchor" href="#vite-config-ts-配置"><span>vite.config.ts 配置</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> loadEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> viteBaseConfig <span class="token keyword">from</span> <span class="token string">&#39;./vite.base.config.ts&#39;</span></span>
<span class="line"><span class="token keyword">import</span> viteDevConfig <span class="token keyword">from</span> <span class="token string">&#39;./vite.dev.config.ts&#39;</span></span>
<span class="line"><span class="token keyword">import</span> viteTestConfig <span class="token keyword">from</span> <span class="token string">&#39;./vite.dev.config.ts&#39;</span></span>
<span class="line"><span class="token keyword">import</span> viteProdConfig <span class="token keyword">from</span> <span class="token string">&#39;./vite.prod.config.ts&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> envResolver<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;本地环境&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>viteBaseConfig<span class="token punctuation">,</span> <span class="token operator">...</span>viteDevConfig <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;测试环境&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>viteBaseConfig<span class="token punctuation">,</span> <span class="token operator">...</span>viteTestConfig <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;生产环境&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>viteBaseConfig<span class="token punctuation">,</span> <span class="token operator">...</span>viteProdConfig <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> command<span class="token punctuation">,</span> mode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;command,mode ===&gt;&#39;</span><span class="token punctuation">,</span> command<span class="token punctuation">,</span> mode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 加载环境变量，确保环境变量文件路径正确</span></span>
<span class="line">  <span class="token keyword">const</span> env <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/config/env</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token string">&#39;VITE_&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 这个地方控制的是 env 中的变量</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;env.VITE_APP_KEY ===&gt;&#39;</span><span class="token punctuation">,</span> env<span class="token punctuation">.</span><span class="token constant">VITE_APP_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 指定新的 env 目录路径</span></span>
<span class="line">  <span class="token keyword">const</span> envDir <span class="token operator">=</span> <span class="token string">&#39;./config/env&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    envDir<span class="token punctuation">,</span>           <span class="token comment">// 指定新的 env 目录路径  这个地方控制的是 import.meta.env 中的变量</span></span>
<span class="line">    plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token operator">...</span>envResolver<span class="token punctuation">[</span>command<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  </span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编写插件已学配置" tabindex="-1"><a class="header-anchor" href="#编写插件已学配置"><span>编写插件已学配置</span></a></h2><p><img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/image-20241124094133403.png" alt="image-20241124094133403"></p><h2 id="vite-打包-gzip压缩-vite-plugin-compression" tabindex="-1"><a class="header-anchor" href="#vite-打包-gzip压缩-vite-plugin-compression"><span>vite 打包 <strong>[gzip压缩]</strong> vite-plugin-compression</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> viteCompression <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-compression&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">viteCompression</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite-cdn-加速" tabindex="-1"><a class="header-anchor" href="#vite-cdn-加速"><span>vite CDN 加速</span></a></h2><p><img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/image-20241124164217011.png" alt="image-20241124164217011"></p>`,13),o=[e];function i(l,c){return a(),s("div",null,o)}const r=n(t,[["render",i],["__file","vite 笔记.html.vue"]]),k=JSON.parse('{"path":"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/vite%20%E7%AC%94%E8%AE%B0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"开启 CSS 路径追踪","slug":"开启-css-路径追踪","link":"#开启-css-路径追踪","children":[]},{"level":2,"title":"vite.Base.config.ts 配置","slug":"vite-base-config-ts-配置","link":"#vite-base-config-ts-配置","children":[]},{"level":2,"title":"vite.config.ts 配置","slug":"vite-config-ts-配置","link":"#vite-config-ts-配置","children":[]},{"level":2,"title":"编写插件已学配置","slug":"编写插件已学配置","link":"#编写插件已学配置","children":[]},{"level":2,"title":"vite 打包 [gzip压缩]    vite-plugin-compression","slug":"vite-打包-gzip压缩-vite-plugin-compression","link":"#vite-打包-gzip压缩-vite-plugin-compression","children":[]},{"level":2,"title":"vite CDN 加速","slug":"vite-cdn-加速","link":"#vite-cdn-加速","children":[]}],"git":{"updatedTime":1739351223000,"contributors":[{"name":"袁果锅","email":"2914310412@qq.com","commits":1}]},"filePathRelative":"常用笔记/vite 笔记.md","excerpt":"<h2>开启 CSS 路径追踪</h2>\\n<blockquote>\\n<p>devSourcemap: true,</p>\\n</blockquote>\\n<div class=\\"language-typescript\\" data-highlighter=\\"prismjs\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"line\\"><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> defineConfig <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"vite\\"</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token function\\">defineConfig</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    optimizeDeps<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        exclude<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> <span class=\\"token comment\\">// 将指定数组中的依赖不进行依赖预构建</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    envPrefix<span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"VITE_\\"</span><span class=\\"token punctuation\\">,</span>  <span class=\\"token comment\\">// 配置环境变量前缀</span></span>\\n<span class=\\"line\\">    css<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        devSourcemap<span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span>  <span class=\\"token comment\\">// 开启 CSS source map 追踪 就是在页面上的</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span></code></pre></div>"}');export{r as comp,k as data};
