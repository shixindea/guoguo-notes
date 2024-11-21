import{_ as s,c as a,a as l,o as i}from"./app-VlDFQNUa.js";const e={};function c(p,n){return i(),a("div",null,n[0]||(n[0]=[l(`<h2 id="nginx-启动和关闭" tabindex="-1"><a class="header-anchor" href="#nginx-启动和关闭"><span>nginx 启动和关闭</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line"></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line"></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const r=s(e,[["render",c],["__file","服务器.html.vue"]]),t=JSON.parse('{"path":"/%E5%B8%B8%E7%94%A8%E7%AC%94%E8%AE%B0/%E6%9C%8D%E5%8A%A1%E5%99%A8.html","title":"服务器","lang":"zh-CN","frontmatter":{"title":"服务器","date":"2022-12-29T00:00:00.000Z","tags":["服务器"],"categories":["自学篇"]},"headers":[{"level":2,"title":"nginx 启动和关闭","slug":"nginx-启动和关闭","link":"#nginx-启动和关闭","children":[]}],"git":{"updatedTime":1727229103000,"contributors":[{"name":"袁果锅","email":"2914310412@qq.com","commits":1}]},"filePathRelative":"常用笔记/服务器.md","excerpt":"<h2>nginx 启动和关闭</h2>\\n<div class=\\"language-text\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code><span class=\\"line\\"></span>\\n<span class=\\"line\\">###启动服务</span>\\n<span class=\\"line\\">#需要先进入sbin目录下</span>\\n<span class=\\"line\\">cd /usr/local/nginx/sbin</span>\\n<span class=\\"line\\">#启动nginx服务</span>\\n<span class=\\"line\\">./nginx</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">###关闭服务</span>\\n<span class=\\"line\\">#需要先进入sbin目录下</span>\\n<span class=\\"line\\">cd /usr/local/nginx/sbin</span>\\n<span class=\\"line\\">#关闭nginx服务</span>\\n<span class=\\"line\\">./nginx -s stop</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">#进入nginx目录</span>\\n<span class=\\"line\\">cd /usr/local/nginx/sbin</span>\\n<span class=\\"line\\">#执行重载命令 重启</span>\\n<span class=\\"line\\">./nginx -s reload</span>\\n<span class=\\"line\\"></span></code></pre></div>"}');export{r as comp,t as data};
