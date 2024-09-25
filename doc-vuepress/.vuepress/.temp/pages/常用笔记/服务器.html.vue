<template><div><h2 id="nginx-启动和关闭" tabindex="-1"><a class="header-anchor" href="#nginx-启动和关闭"><span>nginx 启动和关闭</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line"></span>
<span class="line">###启动服务</span>
<span class="line">#需要先进入sbin目录下</span>
<span class="line">cd /usr/local/nginx/sbin</span>
<span class="line">#启动nginx服务</span>
<span class="line">./nginx</span>
<span class="line"></span>
<span class="line">###关闭服务</span>
<span class="line">#需要先进入sbin目录下</span>
<span class="line">cd /usr/local/nginx/sbin</span>
<span class="line">#关闭nginx服务</span>
<span class="line">./nginx -s stop</span>
<span class="line"></span>
<span class="line">#进入nginx目录</span>
<span class="line">cd /usr/local/nginx/sbin</span>
<span class="line">#执行重载命令 重启</span>
<span class="line">./nginx -s reload</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line"></span>
<span class="line">####端口号操作</span>
<span class="line">#查询开启的所有端口</span>
<span class="line">firewall-cmd --list-port</span>
<span class="line">#设置80端口开启</span>
<span class="line">firewall-cmd --zone=public --add-port=80/tcp --permanent</span>
<span class="line">#验证80端口是否开启成功 (单个端口查询)</span>
<span class="line">firewall-cmd --zone=public --query-port=80/tcp</span>
<span class="line">#设置80端口关闭</span>
<span class="line">firewall-cmd --zone=public --remove-port=80/tcp --permanent</span>
<span class="line"></span>
<span class="line">####防火墙操作</span>
<span class="line">#检查防火墙是否开启</span>
<span class="line">systemctl status firewalld</span>
<span class="line">#开机自启防火墙</span>
<span class="line">systemctl enable firewalld</span>
<span class="line">#开机禁止自启防火墙</span>
<span class="line">systemctl disable firewalld</span>
<span class="line">#启动</span>
<span class="line">systemctl start firewalld</span>
<span class="line">#关闭</span>
<span class="line">systemctl stop firewalld</span>
<span class="line">#重启</span>
<span class="line">firewall-cmd --reload</span>
<span class="line">————————————————</span>
<span class="line"></span>
<span class="line">                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。</span>
<span class="line">                        </span>
<span class="line">原文链接：https://blog.csdn.net/qq_45316925/article/details/128957728</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


