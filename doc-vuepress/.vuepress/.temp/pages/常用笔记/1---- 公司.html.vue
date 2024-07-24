<template><div><blockquote>
<p><strong>数字类字体：font-family: &quot;DIN-Medium&quot; !important;</strong></p>
<p><strong>.card+.card : 16间距</strong></p>
</blockquote>
<blockquote>
<p><strong>定向计划</strong></p>
<ol>
<li>变量名修改</li>
</ol>
</blockquote>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">前端</span>
<span class="line">后端+数据库</span>
<span class="line">服务器</span>
<span class="line">UI    页面样式</span>
<span class="line">产品   几个端  业务线    </span>
<span class="line"></span>
<span class="line">支付功能</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>await onSetStoreProps();</p>
<p>await onTripStoreMangerEditSetStoreProps();</p>
<p>shopid  orgid</p>
<div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="diff"><pre v-pre class="language-diff"><code><span class="line">登录账号密码</span>
<span class="line"><span class="token coord">13011805800  番知云大剧院</span></span>
<span class="line"><span class="token coord">13011009880  十猫</span></span>
<span class="line"><span class="token coord">63010693  达人抖音号</span></span>
<span class="line"></span>
<span class="line">https://open.weixin.qq.com/</span>
<span class="line">账号： ihui_i@sina.com</span>
<span class="line">密码： Fanzhi2022</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">conf.ts -> 配置文件</span>
<span class="line">form.ts -> form-pro 配置文件</span>
<span class="line">form-filter.ts -> table 的搜索表单</span>
<span class="line">form-edit.ts -> </span>
<span class="line">table.ts</span>
<span class="line"></span>
<span class="line">time-rounding  日期</span>
<span class="line">:inputEnterSubmit="true"   输入框回车提交 formPro</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>git 禁止 crlf 转换，为了解决执行代码校验时转换得问题，需要运行 <code v-pre>git config --global core.autocrlf false</code></p>
<p>依赖问题   rm -rf node_modules/</p>
</blockquote>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">南宁</span>
<span class="line">账号：13011805800</span>
<span class="line">密码：Fanzhi0828           H:\FanZhi\tsp-fe-c-seat-only\</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">袁鑫德@LAPTOP-U0A583BC MINGW64 /h/FanZhi/ticket-saas-fe-b (feat-user-power)</span>
<span class="line">$ git stash list</span>
<span class="line">stash@{0}: WIP on feat-user-power: 6f9084703 Merge #35 into master from fix-divide-accounts</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">git stash    		提交到暂存区</span>
<span class="line">git status  		查看状态</span>
<span class="line">git stash list		展示版本</span>
<span class="line">git stash pop       切回来</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抖音部署测试" tabindex="-1"><a class="header-anchor" href="#抖音部署测试"><span>抖音部署测试</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">账号：13011805800</span>
<span class="line">密码：Fanzhi2022</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">pnpm build:test:tt 打包抖音测试</span>
<span class="line">找到 toutiao 这个包</span>
<span class="line">上传 </span>
<span class="line"></span>
<span class="line">https://partner.open-douyin.com/developer_thirdparty/tta37fd5c23c550c32/develop/template_manage?pageIdx=1&amp;pageSize=10</span>
<span class="line">添加到模板库</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="灰度环境上线流程" tabindex="-1"><a class="header-anchor" href="#灰度环境上线流程"><span>灰度环境上线流程</span></a></h2>
<div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="diff"><pre v-pre class="language-diff"><code><span class="line">git checkout gray</span>
<span class="line"><span class="token coord">1. 跟测试环境一样  </span></span>
<span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   git fetch origin</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   git merge origin/gray</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   git merge origin/xxxx</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   git push</span>
<span class="line"></span></span></span>
<span class="line"><span class="token coord">2. 打开 tsp-fe-release 项目仓库</span></span>
<span class="line">	git checkout gray</span>
<span class="line">	git fetch origin</span>
<span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   git merge origin/gray</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   </span>
<span class="line"></span></span><span class="token coord">3. 返回 自己的项目 仓库  ==>	执行命令</span></span>
<span class="line">	[B端] bash ./gray.sh    [C端] bash ./online.sh </span>
<span class="line"><span class="token coord">4. 返回 tsp-fe-release 项目仓库</span></span>
<span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   git add .     			=</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   git commit -m "feat(b):XXXXX"   git commit -m "feat(c): tab页相关优化"</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   git push  /  git push origin gray</span>
<span class="line"></span></span><span class="token coord">4. 进入灰度后台 新建申请</span></span>
<span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   https://newsubmit.fanzhi.cn:4433/deploy/request</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   账号： limenglong</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   密码:  FZc.lml@6.08.9891</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   Eg: [灰度][SAAS][前端][功能][B端] 回车搜索</span>
<span class="line"></span></span><span class="token coord">5.点击右侧发布</span></span>
<span class="line"><span class="token coord">6.查看发布成果</span></span>
<span class="line">https://fzsuper.fanzhi.cn/admin</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正式环境上线流程" tabindex="-1"><a class="header-anchor" href="#正式环境上线流程"><span>正式环境上线流程</span></a></h2>
<div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="diff"><pre v-pre class="language-diff"><code><span class="line"><span class="token coord">1. 先把 master 合并到自己分支    git merge origin/master</span></span>
<span class="line"><span class="token coord">2. 合并请求    https://codeup.aliyun.com/6307600e95064d67d4465b72/tickets-saas/ticket-saas-fe-c</span></span>
<span class="line"><span class="token coord">3. 切换到master分支  git checkout master</span></span>
<span class="line"><span class="token coord">4. 将内容合并到master分支</span></span>
<span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   git fetch origin</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   git merge origin/master</span>
<span class="line"></span></span><span class="token coord">5. 打开 tsp-fe-release 项目仓库  [B端][C端]</span></span>
<span class="line">	git checkout master</span>
<span class="line">	git fetch origin</span>
<span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   git merge origin/master</span>
<span class="line"></span></span><span class="token coord">5. 执行命令</span></span>
<span class="line"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   [B端命令行]	 	 bash ./aprod-b.sh  </span>
<span class="line"></span><span class="token prefix deleted">-</span><span class="token line">   [微信小程序]  	pnpm build:weapp   </span>
<span class="line"></span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       地址查看：https://fzsuper.fanzhi.cn/admin/shop/applet/wechat</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">       https://open.weixin.qq.com/        账号： ihui_i@sina.com       密码： Fanzhi2022</span>
<span class="line"></span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   [快手小程序]  	</span>
<span class="line"></span></span>		pnpm build:ks</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line">		</span>
<span class="line"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   [抖音小程序]  	</span>
<span class="line"></span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       新建 package.json</span>
<span class="line"></span></span>{</span>
<span class="line">	"industrySDK": true</span>
<span class="line">}</span>
<span class="line"><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">       https://partner.open-douyin.com/developer_thirdparty/tta37fd5c23c550c32/develop/template_manage?  pageIdx=1&amp;pageSize=10</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">     账号：13011805800</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">     密码：Fanzhi2022</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">	  勾选 Es6转Es5</span>
<span class="line"></span><span class="token prefix inserted">+</span><span class="token line">     日志：日常维护</span>
<span class="line"></span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   [H5]  		   pnpm build:weapp</span>
<span class="line"></span></span><span class="token coord">6. 打开 tsp-fe-release 项目仓库</span></span>
<span class="line"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   git add .  </span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   git commit -m "feat(b):XXXXXX"     git commit -m "feat(b):增加角色功能 外部角色和内部角色分开"</span>
<span class="line"></span><span class="token prefix unchanged"> </span><span class="token line">   git push</span>
<span class="line"></span></span><span class="token coord">7. 找到 阿里云中标签  ==>  新建标签 [打tag]</span></span>
<span class="line"><span class="token coord">8. 在另一个项目仓库( tsp-fe-release项目仓库 )中也 新建标签 [打tag]</span></span>
<span class="line"><span class="token coord">9. 进入瓦力 ==> 新建上线  </span></span>
<span class="line">https://submit.fanzhi.cn:4433/login</span>
<span class="line">limenglong@fanzhi.cn</span>
<span class="line">FZc.lml@6.08</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">[b] bash ./aprod-b.sh      [C] bash ./online.sh</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="新手入门" tabindex="-1"><a class="header-anchor" href="#新手入门"><span>新手入门</span></a></h2>
<div class="language-git line-numbers-mode" data-highlighter="prismjs" data-ext="git" data-title="git"><pre v-pre class="language-git"><code><span class="line">番知云测试环境super后台：https://super.test.fanzhi.cn/</span>
<span class="line">登录账号：yuanxinde</span>
<span class="line">密码：yuanxinde2024</span>
<span class="line"></span>
<span class="line">写代码之前</span>
<span class="line">git fetch origin</span>
<span class="line">git merge origin/xxxx</span>
<span class="line"></span>
<span class="line">C端 代码提交流程</span>
<span class="line">git add .</span>
<span class="line">//代码检查           </span>
<span class="line">pnpm lint</span>
<span class="line">pnpm gitcz</span>
<span class="line">git push</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">B端 代码提交流程</span>
<span class="line">pnpm lint:fix</span>
<span class="line">git add .</span>
<span class="line">pnpm gitcz</span>
<span class="line">git push</span>
<span class="line"></span>
<span class="line">部署到 测试环境   scss 系统</span>
<span class="line">git checkout test</span>
<span class="line">git fetch origin</span>
<span class="line">git merge origin/test</span>
<span class="line">git merge origin/xxxxx</span>
<span class="line">git push </span>
<span class="line">bash ./test_win.sh</span>
<span class="line"></span>
<span class="line">// 切换分支</span>
<span class="line">git checkout 分支名称</span>
<span class="line">//查看本地分支</span>
<span class="line">git branch</span>
<span class="line"></span>
<span class="line">//新分支！！！</span>
<span class="line">创建一个分支  feat-esc-1-16</span>
<span class="line">git fetch origin</span>
<span class="line">git checkout feat-esc-1-16</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    field<span class="token operator">:</span> <span class="token string">"rightsName"</span><span class="token punctuation">,</span></span>
<span class="line">    component<span class="token operator">:</span> <span class="token string">"InputCount"</span><span class="token punctuation">,</span></span>
<span class="line">    label<span class="token operator">:</span> <span class="token string">"权益名称"</span><span class="token punctuation">,</span></span>
<span class="line">    componentProps<span class="token operator">:</span> () => <span class="token punctuation">{</span></span>
<span class="line">        return <span class="token punctuation">{</span></span>
<span class="line">            placeholder<span class="token operator">:</span> <span class="token string">"请输入权益名称"</span><span class="token punctuation">,</span></span>
<span class="line">            maxLength<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span>;</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    rules<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">            trigger<span class="token operator">:</span> <span class="token string">"blur"</span><span class="token punctuation">,</span></span>
<span class="line">            message<span class="token operator">:</span> <span class="token string">"请输入权益名称"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>ts 忽略</p>
</blockquote>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">单行忽略</span>
<span class="line">// @ts-ignore</span>
<span class="line"></span>
<span class="line">忽略全文</span>
<span class="line">// @ts-nocheck</span>
<span class="line"></span>
<span class="line">取消忽略全文</span>
<span class="line">// @ts-check</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://www.runoob.com/wp-content/uploads/2015/02/011500266295799.jpg" alt="img"></p>
<div class="language-git line-numbers-mode" data-highlighter="prismjs" data-ext="git" data-title="git"><pre v-pre class="language-git"><code><span class="line">git init                                                  # 初始化本地git仓库（创建新仓库）</span>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


