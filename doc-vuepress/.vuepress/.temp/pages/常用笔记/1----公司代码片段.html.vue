<template><div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">  Modal.confirm({</span>
<span class="line">    title: "确定要删除吗？",</span>
<span class="line">    okText: "确定",</span>
<span class="line">    cancelText: "取消",</span>
<span class="line">    onOk: () => {</span>
<span class="line">      theSaveDatas.rows[theProps.pathId].splice(delIdx, 1);</span>
<span class="line">      if (delIdx === theActiveIdx.value) {</span>
<span class="line">        theActiveIdx.value = theSaveDatas.rows[theProps.pathId].length - 1;</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="限制不能选择今天之前的日期-不包括今天-日期组件" tabindex="-1"><a class="header-anchor" href="#限制不能选择今天之前的日期-不包括今天-日期组件"><span>限制不能选择今天之前的日期 不包括今天  [日期组件]</span></a></h2>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-date-picker</span></span>
<span class="line">               <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>model.validDate.deadline<span class="token punctuation">"</span></span></span>
<span class="line">               <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>YYYY-MM-DD<span class="token punctuation">"</span></span></span>
<span class="line">               <span class="token attr-name">valueFormat</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>YYYY-MM-DD<span class="token punctuation">"</span></span></span>
<span class="line">               <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!!theId<span class="token punctuation">"</span></span></span>
<span class="line">               <span class="token attr-name">:disabled-date</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disabledDate<span class="token punctuation">"</span></span></span>
<span class="line">               <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 限制选择日期 start</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">disabledDate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">current</span><span class="token operator">:</span> Dayjs</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">endOf</span><span class="token punctuation">(</span><span class="token string">"day"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"YYYY-MM-DD"</span><span class="token punctuation">)</span> <span class="token operator">==</span> current<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"YYYY-MM-DD"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> current <span class="token operator">&lt;</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">endOf</span><span class="token punctuation">(</span><span class="token string">"day"</span><span class="token punctuation">)</span> </span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 限制选择日期 end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="antd-图表-自定义-tootip" tabindex="-1"><a class="header-anchor" href="#antd-图表-自定义-tootip"><span>antd 图表 自定义 tootip</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">      <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">customContent</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">title<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div style='height:35px;display:flex;align-items:center;'> </span>
<span class="line">            &lt;span style="width:5px;height:5px;border-radius:50%;margin-right:10px; background-color:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span></span>
<span class="line">              data<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>color <span class="token operator">:</span> <span class="token string">"#fff"</span></span>
<span class="line">            <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">">&lt;/span></span>
<span class="line"></span>
<span class="line">            </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">： </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>value <span class="token operator">:</span> <span class="token keyword">null</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> (</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span></span>
<span class="line">            data<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>percentage <span class="token operator">:</span> <span class="token keyword">null</span></span>
<span class="line">          <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%)</span>
<span class="line">            &lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ref-引用组件-需要-在子组件导出-父组件异步加载" tabindex="-1"><a class="header-anchor" href="#ref-引用组件-需要-在子组件导出-父组件异步加载"><span>Ref 引用组件 需要 在子组件导出  父组件异步加载</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">//子组件</span></span>
<span class="line"><span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>onInit<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//父组件</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>onInit<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> theProjectGangedRef<span class="token punctuation">.</span>value</span>
<span class="line"><span class="token function">onInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="antd-图表-柱状图-增加横向滚动条" tabindex="-1"><a class="header-anchor" href="#antd-图表-柱状图-增加横向滚动条"><span>antd 图表[柱状图]  增加横向滚动条</span></a></h2>
<div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="diff"><pre v-pre class="language-diff"><code><span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> setTimeout(() => {</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   let plot = new Mix(document.getElementById("column2") as string | HTMLElement, {</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">     appendPadding: 8,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">     tooltip: {</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       shared: true,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       // @ts-ignore</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       formatter: (data) => {</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">         return `${data.seriesName}：${data.value}`; // 显示系列名和值</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       },</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">     },</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">     syncViewPadding: true,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">     legend: {</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       position: "top-left",</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       layout: "horizontal", // 添加这一行来设置图例为横向显示</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">     },</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">     plots: [</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       // （1.）柱状图配置</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">       {</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">         type: "column",</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">         options: {</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">           data: theMemberLevelOrderTrendData.value,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">           xField: "label",</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">           yField: "value",</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">           isGroup: true,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">           isStack: true,</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">           seriesField: "title",</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">           groupField: "label",</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">           columnWidthRatio: 15, // 设置柱状图的宽度为分组区域的60%</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">           marginRatio: 13, // 设置两个柱子之间的间距，可以根据需要调整</span>
<span class="line"></span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">            scrollbar: {</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">              common: { padding: [8, 8, 8, 8] },</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">              default: {</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">                style: {</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">                  trackColor: "rgba(255,255,255,0.65)",</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">                  thumbColor: "rgba(0,0,0,0.35)",</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">                },</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">              },</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">              hover: { style: { thumbColor: "rgba(0,0,0,0.45)" } },</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">            },</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">          },</span>
<span class="line"></span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">       },</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">     ],</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   });</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   plot.render();</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line"> }, 300);</span>
<span class="line"></span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输入框-回车-调接口" tabindex="-1"><a class="header-anchor" href="#输入框-回车-调接口"><span>输入框 回车 调接口</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token literal-property property">componentProps</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">onKeydown</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> key <span class="token punctuation">}</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token string">'Enter'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">onFilterSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


