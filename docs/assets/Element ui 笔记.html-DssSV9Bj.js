import{_ as s,c as a,a as t,o as p}from"./app-CduvU-Ml.js";const e={};function l(c,n){return p(),a("div",null,n[0]||(n[0]=[t(`<h2 id="input输入限制只能输入大写字母-数字-汉字等" tabindex="-1"><a class="header-anchor" href="#input输入限制只能输入大写字母-数字-汉字等"><span>input输入限制只能输入大写字母/数字/汉字等</span></a></h2><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line">1. 限制只能输入大写字母</span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span> <span class="token attr-name">oninput</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value=value.replace(/[^A-Z]/g,&#39;&#39;);<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">2. 限制只能输入数字</span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span> <span class="token attr-name">oninput</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>this.value = this.value.replace(/[^0-9]/g, &#39;&#39;);<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">限制只能输入数字的情况下还是用计数器比较好，，不会为负也不能输入e等</span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input-number</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:precision</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input-number</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">3.限制只能输入汉字</span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span> <span class="token attr-name">oninput</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value=value.replace(/[^\\u4E00-\\u9FA5]/g,&#39;&#39;);<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码式显示-dialog-弹框" tabindex="-1"><a class="header-anchor" href="#代码式显示-dialog-弹框"><span>代码式显示 dialog 弹框</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$confirm</span><span class="token punctuation">(</span><span class="token string">&quot;确定删除该信息吗？&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;警告信息&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">//结构体</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码式显示-dialog-输入框" tabindex="-1"><a class="header-anchor" href="#代码式显示-dialog-输入框"><span>代码式显示 dialog 输入框</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$prompt</span><span class="token punctuation">(</span><span class="token string">&#39;请输入内容&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;提示&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token literal-property property">inputAttrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>  </span>
<span class="line">    <span class="token literal-property property">maxlength</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 设置最大长度为10  </span></span>
<span class="line">    <span class="token comment">// 其他输入属性  </span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span>  </span>
<span class="line">  <span class="token comment">// 其他配置选项  </span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token comment">// 处理输入值  </span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  </span>
<span class="line">  <span class="token comment">// 取消操作  </span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">inputType：设置输入框的类型，如 <span class="token string">&#39;text&#39;</span>、<span class="token string">&#39;password&#39;</span> 等。</span>
<span class="line">inputValue：设置输入框的初始值。</span>
<span class="line">inputName：设置输入框的名称。</span>
<span class="line">inputLimit：设置输入的最大长度。</span>
<span class="line">inputPattern：设置输入的验证模式，用于验证输入是否符合特定的格式或模式。</span>
<span class="line">inputErrorMessage：设置输入错误时的错误消息。</span>
<span class="line">confirmButtonColor：设置确定按钮的颜色。</span>
<span class="line">confirmButtonText：设置确定按钮的文本。</span>
<span class="line">cancelButtonColor：设置取消按钮的颜色。</span>
<span class="line">cancelButtonText：设置取消按钮的文本。</span>
<span class="line">inputEvent：设置输入框的事件类型，如 <span class="token string">&#39;input&#39;</span>、<span class="token string">&#39;change&#39;</span> 等。</span>
<span class="line">inputReadOnly：设置输入框是否只读，即用户不能修改其内容。</span>
<span class="line">inputDisabled：设置输入框是否禁用，即用户不能进行任何操作。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const u=s(e,[["render",l],["__file","Element ui 笔记.html.vue"]]),i=JSON.parse(`{"path":"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/Element%20ui%20%E7%AC%94%E8%AE%B0.html","title":"Element Plus --vue3.0","lang":"zh-CN","frontmatter":{"title":"Element Plus --vue3.0","date":"2022-12-29T00:00:00.000Z","tags":["vue3.0","Element Plus"],"categories":["居家篇"]},"headers":[{"level":2,"title":"input输入限制只能输入大写字母/数字/汉字等","slug":"input输入限制只能输入大写字母-数字-汉字等","link":"#input输入限制只能输入大写字母-数字-汉字等","children":[]},{"level":2,"title":"代码式显示 dialog 弹框","slug":"代码式显示-dialog-弹框","link":"#代码式显示-dialog-弹框","children":[]},{"level":2,"title":"代码式显示 dialog 输入框","slug":"代码式显示-dialog-输入框","link":"#代码式显示-dialog-输入框","children":[]}],"git":{"updatedTime":1721805748000,"contributors":[{"name":"袁果锅","email":"2914310412@qq.com","commits":1}]},"filePathRelative":"常用笔记/Element ui 笔记.md","excerpt":"<h2>input输入限制只能输入大写字母/数字/汉字等</h2>\\n<div class=\\"language-html\\" data-highlighter=\\"prismjs\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"line\\">1. 限制只能输入大写字母</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-input</span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>input<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">oninput</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>value=value.replace(/[^A-Z]/g,'');<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-input</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\">2. 限制只能输入数字</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-input</span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>input<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">oninput</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>this.value = this.value.replace(/[^0-9]/g, '');<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-input</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\">限制只能输入数字的情况下还是用计数器比较好，，不会为负也不能输入e等</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-input-number</span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>input<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:min</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>0<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:max</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>10<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:precision</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>0<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">:step</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>1<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-input-number</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\">3.限制只能输入汉字</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-input</span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>input<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">oninput</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>value=value.replace(/[^\\\\u4E00-\\\\u9FA5]/g,'');<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-input</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\"></span></code></pre></div>"}`);export{u as comp,i as data};
