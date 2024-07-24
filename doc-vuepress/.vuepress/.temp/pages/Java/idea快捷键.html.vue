<template><div><h2 id="j快速生成定义名加方法-ctrl-alt-v" tabindex="-1"><a class="header-anchor" href="#j快速生成定义名加方法-ctrl-alt-v"><span>j快速生成定义名加方法[Ctrl + Alt + V]</span></a></h2>
<blockquote>
<p>首先拥有一个方法  <code v-pre>getMax</code></p>
<p>在调用的地方点击方法的名字  按快捷键  Ctrl + Alt + V</p>
</blockquote>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> hello_world <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token comment">// getMax(1, 2);    Ctrl + Alt + V</span></span>
<span class="line">        <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token function">getMax</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getMax</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">int</span> max <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> max<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速生成构造函数的变量-alt-fn-insert" tabindex="-1"><a class="header-anchor" href="#快速生成构造函数的变量-alt-fn-insert"><span>快速生成构造函数的变量[Alt+Fn+Insert]</span></a></h2>
<blockquote>
<p>从这里的代码 直接按 快捷键  <code v-pre>Alt+Fn+Insert</code></p>
</blockquote>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//    属性</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> gender<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>然后自动会生成下面的代码</p>
</blockquote>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//    属性</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> gender<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//以下代码为自动生成代码</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">,</span> <span class="token class-name">String</span> email<span class="token punctuation">,</span> <span class="token class-name">String</span> gender<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义方法后提示参数-ctrl-p" tabindex="-1"><a class="header-anchor" href="#定义方法后提示参数-ctrl-p"><span>定义方法后提示参数[Ctrl+P]</span></a></h2>
<h2 id="变量名批量修改-shift-f6" tabindex="-1"><a class="header-anchor" href="#变量名批量修改-shift-f6"><span>变量名批量修改 [Shift + F6]</span></a></h2>
<h2 id="字符串-fori-遍历-字符串-forr-反向遍历" tabindex="-1"><a class="header-anchor" href="#字符串-fori-遍历-字符串-forr-反向遍历"><span>字符串.fori 遍历   字符串.forr 反向遍历</span></a></h2>
<h2 id="将1行代码快速分割成两行-alt-enter" tabindex="-1"><a class="header-anchor" href="#将1行代码快速分割成两行-alt-enter"><span>将1行代码快速分割成两行 [Alt+Enter]</span></a></h2>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="line"><span class="token comment">//一行代码</span></span>
<span class="line"><span class="token class-name">String</span> num <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token comment">//使用快捷键之后</span></span>
<span class="line"><span class="token class-name">String</span> num<span class="token punctuation">;</span></span>
<span class="line">num <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="报错代码-按快捷键-alt-enter-快速生成错误解决方案" tabindex="-1"><a class="header-anchor" href="#报错代码-按快捷键-alt-enter-快速生成错误解决方案"><span>报错代码 按快捷键[Alt+Enter] 快速生成错误解决方案</span></a></h2>
<h2 id="快读生成方法片段-ctrl-alt-m" tabindex="-1"><a class="header-anchor" href="#快读生成方法片段-ctrl-alt-m"><span>快读生成方法片段 [Ctrl+Alt+M]</span></a></h2>
<blockquote>
<p>选中一段你需要 封装方法片段的代码  按住快捷键 <code v-pre>[Ctrl+Alt+M]</code> 就可以自动生成！</p>
</blockquote>
</div></template>


