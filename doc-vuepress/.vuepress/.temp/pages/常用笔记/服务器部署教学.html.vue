<template><div><h2 id="windows部署-linux部署" tabindex="-1"><a class="header-anchor" href="#windows部署-linux部署"><span>windows部署   Linux部署</span></a></h2>
<h2 id="华为云-阿里云-百度云等等" tabindex="-1"><a class="header-anchor" href="#华为云-阿里云-百度云等等"><span>华为云 阿里云 百度云等等</span></a></h2>
<h1 id="windows部署" tabindex="-1"><a class="header-anchor" href="#windows部署"><span>windows部署</span></a></h1>
<h2 id="打开iis-全名-internet-information-services-iis-管理器" tabindex="-1"><a class="header-anchor" href="#打开iis-全名-internet-information-services-iis-管理器"><span>打开IIS 全名  Internet Information Services (IIS)管理器</span></a></h2>
<img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/image-20240927214405743.png"/>
<h2 id="添加网站" tabindex="-1"><a class="header-anchor" href="#添加网站"><span>添加网站</span></a></h2>
<p><img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/image-20240927214346579.png" alt="image-20240927214346579"></p>
<h2 id="点击启动遇到第一个报错-【万维网发布服务-w3svc-已停止】" tabindex="-1"><a class="header-anchor" href="#点击启动遇到第一个报错-【万维网发布服务-w3svc-已停止】"><span>点击启动遇到第一个报错 【万维网发布服务(w3svc)已停止】</span></a></h2>
<p>解决办法 ：<a href="https://www.cnblogs.com/net-sky/p/13129783.html" target="_blank" rel="noopener noreferrer">万维网发布服务(w3svc)已停止解决办法 - net-sky - 博客园 (cnblogs.com)</a></p>
<h2 id="遇到第二个报错-【万维网发布服务-w3svc-已停止】" tabindex="-1"><a class="header-anchor" href="#遇到第二个报错-【万维网发布服务-w3svc-已停止】"><span>遇到第二个报错 【万维网发布服务(w3svc)已停止】</span></a></h2>
<p><img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/image-20240927214904586.png" alt="image-20240927214904586"></p>
<p><strong>解决方案：</strong></p>
<p><a href="https://blog.csdn.net/qubernet/article/details/129312428" target="_blank" rel="noopener noreferrer">解决当前标识(IIS APPPOOL\XXXX)没有对“C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Temporary ASP.NET Files”...-CSDN博客</a></p>
<h3 id="管理员身份打开-cmd" tabindex="-1"><a class="header-anchor" href="#管理员身份打开-cmd"><span>管理员身份打开  CMD</span></a></h3>
<h3 id="执行命令" tabindex="-1"><a class="header-anchor" href="#执行命令"><span>执行命令</span></a></h3>
<div class="language-dist line-numbers-mode" data-highlighter="prismjs" data-ext="dist" data-title="dist"><pre v-pre class="language-dist"><code><span class="line">C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Aspnet_regiis.exe -ga 'IIS APPPOOL\XXXX'</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="配置一下" tabindex="-1"><a class="header-anchor" href="#配置一下"><span>配置一下</span></a></h3>
<p><img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/image-20240927215557621.png" alt="image-20240927215557621"></p>
<h2 id="windows-扩展" tabindex="-1"><a class="header-anchor" href="#windows-扩展"><span>windows 扩展</span></a></h2>
<h3 id="公网ip" tabindex="-1"><a class="header-anchor" href="#公网ip"><span>公网IP</span></a></h3>
<h3 id="端口号-http默认端口号80-https默认端口号443" tabindex="-1"><a class="header-anchor" href="#端口号-http默认端口号80-https默认端口号443"><span>端口号  http默认端口号80  https默认端口号443</span></a></h3>
<h3 id="前端部署-直接将打包后的的文件" tabindex="-1"><a class="header-anchor" href="#前端部署-直接将打包后的的文件"><span>前端部署 直接将打包后的的文件</span></a></h3>
<h1 id="linux-部署" tabindex="-1"><a class="header-anchor" href="#linux-部署"><span>linux 部署</span></a></h1>
<blockquote>
<p>下载 <code v-pre>WinSCP</code>软件</p>
<p>tip: 前端都是需要经过<code v-pre>NGINX技术</code>进行代理项目</p>
</blockquote>
<h2 id="在服务器下载linux" tabindex="-1"><a class="header-anchor" href="#在服务器下载linux"><span>在服务器下载linux</span></a></h2>
<p><a href="https://blog.csdn.net/qq_65732918/article/details/131862373" target="_blank" rel="noopener noreferrer">Linux系统下安装配置nginx（保姆级教程）_nginx下载安装教程-CSDN博客</a></p>
<blockquote>
<p>在Linux系统上进行下载（示例：下载1.25.1版本）</p>
<div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre v-pre class="language-nginx"><code><span class="line">wget http://nginx.org/download/nginx-1.25.1.tar.gz</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></blockquote>
<h2 id="配置nginx" tabindex="-1"><a class="header-anchor" href="#配置nginx"><span>配置NGINX</span></a></h2>
<blockquote>
<p>打开文件夹 ==&gt; nginx/conf/nginx.conf              ** 配置即可**</p>
</blockquote>
<h1 id="后端-linux" tabindex="-1"><a class="header-anchor" href="#后端-linux"><span>后端 LINUX</span></a></h1>
<h2 id="代码放到服务器" tabindex="-1"><a class="header-anchor" href="#代码放到服务器"><span>代码放到服务器</span></a></h2>
<h2 id="服务器上搭建java环境" tabindex="-1"><a class="header-anchor" href="#服务器上搭建java环境"><span>服务器上搭建Java环境</span></a></h2>
<h2 id="java-jar-jar包-6969" tabindex="-1"><a class="header-anchor" href="#java-jar-jar包-6969"><span>java -jar jar包   <code v-pre>---&gt; :6969</code></span></a></h2>
</div></template>


