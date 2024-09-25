<template><div><h2 id="后台数据库字段创建" tabindex="-1"><a class="header-anchor" href="#后台数据库字段创建"><span>后台数据库字段创建</span></a></h2>
<ol>
<li>createTime	创建时间	date</li>
<li>creatorId	创建人编号	bigint</li>
<li>updator	更新人	varchar</li>
<li>del	是否删除	tinyint		0为正常，1为删除</li>
</ol>
<p>时间 <code v-pre>datetime</code></p>
<p>排序<code v-pre> sort</code>  《 1 2 3 4 5 6 》  用于后续排序使用</p>
<h2 id="渲染列表由用户决定有多少个的情况" tabindex="-1"><a class="header-anchor" href="#渲染列表由用户决定有多少个的情况"><span>渲染列表由用户决定有多少个的情况</span></a></h2>
<p>示例图片</p>
<p><img src="https://s1.ax1x.com/2022/07/02/j10IIg.png" alt=""></p>
<blockquote>
<p>我们不知道管理员会添加多少个字段，</p>
<p>对于渲染列表由用户决定有多少个的情况【比如管理员自己添加字段，用户自己输入值】，这种情况</p>
<p>我们不应该用变量去接收这个值，</p>
<p>我们可以在得到这个渲染数据的时候，对这个数据统一的加上一个值 <code v-pre>Value</code> ，</p>
<p>这样我们每次渲染或者赋值的时候，我们就可以通过对这个<code v-pre>item.value</code>赋值，</p>
<p>来做到，统一管理 items 列表项中，每一项的值。</p>
</blockquote>
<p><strong>如果出现，选项中出现单选多选的情况且单选多选会有<code v-pre>确定取消</code>按钮的情况</strong></p>
<blockquote>
<p>即当前列表中 还存在一个列表的情况</p>
<p>我们应该将这个value 定义为一个数组，</p>
<p>我们整个页面的 修改存在于一个临时的数组变量中</p>
<p>每次点击确定的时候我们在讲这个临时的数组变量保存到我们本身的 <code v-pre>item.value </code>中</p>
</blockquote>
<h2 id="拍照图片上传到小程序中" tabindex="-1"><a class="header-anchor" href="#拍照图片上传到小程序中"><span>拍照图片上传到小程序中</span></a></h2>
<p>我们拍照会得到一个临时的路径</p>
<p>我们将这个路径存到后台，会返回给一个正常的路径</p>
<p>然后将这个正常的路径渲染</p>
<h2 id="保存图片到相册逻辑" tabindex="-1"><a class="header-anchor" href="#保存图片到相册逻辑"><span>保存图片到相册逻辑</span></a></h2>
<blockquote>
<h3 id="uni-downloadfile-object" tabindex="-1"><a class="header-anchor" href="#uni-downloadfile-object"><span>uni.downloadFile(OBJECT)</span></a></h3>
<p>下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。</p>
<p>得到临时路径之后</p>
<h3 id="uni-saveimagetophotosalbum-object" tabindex="-1"><a class="header-anchor" href="#uni-saveimagetophotosalbum-object"><span>uni.saveImageToPhotosAlbum(OBJECT)</span></a></h3>
<p>保存图片到系统相册。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">saveImage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	uni<span class="token punctuation">.</span><span class="token function">downloadFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">url</span><span class="token operator">:</span> e<span class="token punctuation">,</span></span>
<span class="line">		<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">			<span class="token comment">//图片保存到本地</span></span>
<span class="line">			uni<span class="token punctuation">.</span><span class="token function">saveImageToPhotosAlbum</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">				<span class="token literal-property property">filePath</span><span class="token operator">:</span> res<span class="token punctuation">.</span>tempFilePath<span class="token punctuation">,</span></span>
<span class="line">				<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">					uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">						<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'保存成功'</span><span class="token punctuation">,</span></span>
<span class="line">						<span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span></span>
<span class="line">						<span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span></span>
<span class="line">					<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">				<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">					<span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>errMsg <span class="token operator">===</span> <span class="token string">"saveImageToPhotosAlbum:fail auth deny"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">						console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"当初用户拒绝，再次发起授权"</span><span class="token punctuation">)</span></span>
<span class="line">						uni<span class="token punctuation">.</span><span class="token function">openSetting</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">							<span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">settingdata</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">								console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>settingdata<span class="token punctuation">)</span></span>
<span class="line">								<span class="token keyword">if</span> <span class="token punctuation">(</span>settingdata<span class="token punctuation">.</span>authSetting<span class="token punctuation">[</span></span>
<span class="line">										<span class="token string">'scope.writePhotosAlbum'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">									console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取权限成功，给出再次点击图片保存到相册的提示。'</span><span class="token punctuation">)</span></span>
<span class="line">								<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">									console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取权限失败，给出不给权限就无法正常使用的提示'</span><span class="token punctuation">)</span></span>
<span class="line">								<span class="token punctuation">}</span></span>
<span class="line">							<span class="token punctuation">}</span></span>
<span class="line">						<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">					<span class="token punctuation">}</span></span>
<span class="line">				<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token function">complete</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">				<span class="token punctuation">}</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组合框-下拉框-三级联动-等等等等" tabindex="-1"><a class="header-anchor" href="#组合框-下拉框-三级联动-等等等等"><span>组合框，下拉框，三级联动，等等等等</span></a></h2>
<blockquote>
<p>能使用数字就不适用true或者false</p>
<p>可以使用select_ing ：0/1/2  -1为下拉</p>
</blockquote>
<blockquote>
<h2 id="嵌套格式全部使用这种格式书写" tabindex="-1"><a class="header-anchor" href="#嵌套格式全部使用这种格式书写"><span>嵌套格式全部使用这种格式书写</span></a></h2>
</blockquote>
<pre><code>optionitems: [{
				text: '商品类别',
				value: &quot;a&quot;,
				children:[
					{
						text:'1',
						value:'1'
					}
				]
			}]
</code></pre>
<h2 id="登录逻辑" tabindex="-1"><a class="header-anchor" href="#登录逻辑"><span>登录逻辑</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">Login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loginBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"> <span class="token function">loginBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        uni<span class="token punctuation">.</span><span class="token function">getUserProfile</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">'用于完善会员资料'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">infoRes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// console.log(infoRes, '微信的全部信息');</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>infoRes<span class="token punctuation">.</span>userInfo<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'____'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            uni<span class="token punctuation">.</span><span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'infoRes'</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">data</span><span class="token operator">:</span> infoRes<span class="token punctuation">,</span></span>
<span class="line">              <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'infoRes--success'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            uni<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            uni<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">provider</span><span class="token operator">:</span> <span class="token string">'weixin'</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">,</span> <span class="token string">'info'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// info.code 就是唯一码</span></span>
<span class="line">                <span class="token keyword">const</span> db <span class="token operator">=</span> wx<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">'userInfo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                      <span class="token literal-property property">code</span><span class="token operator">:</span> info<span class="token punctuation">.</span>code<span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">'info.code 存储成功'</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token comment">// 信息存到内存中</span></span>
<span class="line">                    <span class="token comment">// 存储 OpenId</span></span>
<span class="line">                    _this<span class="token punctuation">.</span><span class="token function">createOpenId</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token comment">// 存储并获取微信里的信息</span></span>
<span class="line">                    _this<span class="token punctuation">.</span><span class="token function">getUserInfo</span><span class="token punctuation">(</span>infoRes<span class="token punctuation">,</span> res<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">                    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                      uni<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">                      <span class="token keyword">const</span> isopenid <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">'OpenId'</span><span class="token punctuation">)</span></span>
<span class="line">                      <span class="token keyword">if</span> <span class="token punctuation">(</span>isopenid<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"登陆成功"</span><span class="token punctuation">,</span></span>
<span class="line">                          <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                        _this<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">                        _this<span class="token punctuation">.</span><span class="token function">$forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">                      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                        uni<span class="token punctuation">.</span><span class="token function">clearStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">                        uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"登陆失败"</span><span class="token punctuation">,</span></span>
<span class="line">                          <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span></span>
<span class="line">                          <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"error"</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                      <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span></span>
<span class="line">                  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token function">fail</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fail'</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 获取 openId 并存储到本地</span></span>
<span class="line"><span class="token function">createOpenId</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>_id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> db <span class="token operator">=</span> wx<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">'userInfo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doc</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span>_id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">'获取openID'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>openId <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>_openid</span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>openId<span class="token punctuation">,</span> <span class="token string">'openid 不保存本地能不能成功？'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            uni<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token string">'OpenId'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>openId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeSomeUserInfo</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">//获取用户的微信中的基本信息</span></span>
<span class="line"><span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token parameter">infoRes<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 数据库存储</span></span>
<span class="line">    <span class="token keyword">const</span> db <span class="token operator">=</span> wx<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// //存储之前把数据库之前的冗余记录给删除掉</span></span>
<span class="line">    <span class="token comment">// db.collection('userInfo').where({</span></span>
<span class="line">    <span class="token comment">//   _openid: uni.getStorageSync('OpenId')</span></span>
<span class="line">    <span class="token comment">// }).remove()</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 存储数据库</span></span>
<span class="line">    db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">'userInfo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">_id</span><span class="token operator">:</span> res<span class="token punctuation">.</span>_id</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// openId: uni.getStorageSync('OpenId'),</span></span>
<span class="line">            <span class="token literal-property property">headUrl</span><span class="token operator">:</span> infoRes<span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>avatarUrl<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">nickName</span><span class="token operator">:</span> infoRes<span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>nickName<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">dateTime</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDataTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span>infoRes<span class="token punctuation">.</span>userInfo <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">// province: infoRes.userInfo.province,</span></span>
<span class="line">            <span class="token comment">// city: infoRes.userInfo.city,</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">'基本信息存储成功'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    wx<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token string">"guoguo-tools-7gys61wtaa51feb4"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> openId <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">'OpenId'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>openId <span class="token operator">=</span> openId</span>
<span class="line">    <span class="token comment">//如果有openID 的初始化操作</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>openId<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> infoRes <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">'infoRes'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>headUrl <span class="token operator">=</span> infoRes<span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>avatarUrl</span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>nickName <span class="token operator">=</span> infoRes<span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>nickName</span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'登陆成功'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 判断是不是管理员</span></span>
<span class="line">        <span class="token keyword">const</span> db <span class="token operator">=</span> wx<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">'administrator'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'管理员的信息'</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>administratorList <span class="token operator">=</span> res<span class="token punctuation">.</span>data</span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>administratorList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">if</span> <span class="token punctuation">(</span>openId <span class="token operator">===</span> res<span class="token punctuation">.</span>subOpenid<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">this</span><span class="token punctuation">.</span>isAdministrator <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上移、下移逻辑" tabindex="-1"><a class="header-anchor" href="#上移、下移逻辑"><span>上移、下移逻辑</span></a></h2>
</div></template>


