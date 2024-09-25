<template><div><h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>mySql</span></a></h1>
<h2 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表"><span>创建表</span></a></h2>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code><span class="line">CREATE TABLE student(</span>
<span class="line">id int comment &quot;编号&quot;,</span>
<span class="line">name VARCHAR(50) COMMENT &quot;姓名&quot;,</span>
<span class="line">age int COMMENT '年龄',</span>
<span class="line">gender VARCHAR(1) comment '性别')</span>
<span class="line">comment '用户表'</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="显示当前数据库中的表" tabindex="-1"><a class="header-anchor" href="#显示当前数据库中的表"><span>显示当前数据库中的表</span></a></h2>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code><span class="line">show tables</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="显示表结构" tabindex="-1"><a class="header-anchor" href="#显示表结构"><span>显示表结构</span></a></h2>
<div class="language-mySql line-numbers-mode" data-highlighter="prismjs" data-ext="mySql" data-title="mySql"><pre v-pre class="language-mySql"><code><span class="line">desc student</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="代码片段" tabindex="-1"><a class="header-anchor" href="#代码片段"><span>代码片段</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="line"><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> person <span class="token keyword">WHERE</span> id <span class="token operator">BETWEEN</span> <span class="token number">0</span> <span class="token operator">AND</span>  <span class="token number">122</span> <span class="token operator">and</span> name <span class="token operator">like</span> <span class="token string">'%23'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> person <span class="token keyword">WHERE</span> id <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token number">112</span><span class="token punctuation">,</span><span class="token number">113</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">select</span> gender<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> person <span class="token keyword">WHERE</span> id<span class="token operator">&lt;</span><span class="token number">200</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> gender</span>
<span class="line"></span>
<span class="line"><span class="token keyword">SELECT</span> name<span class="token punctuation">,</span>id<span class="token punctuation">,</span>gender <span class="token keyword">from</span> person <span class="token keyword">LIMIT</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="管理用户" tabindex="-1"><a class="header-anchor" href="#管理用户"><span>管理用户</span></a></h2>
<h3 id="查询用户" tabindex="-1"><a class="header-anchor" href="#查询用户"><span>查询用户</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="line"><span class="token keyword">use</span> mysql</span>
<span class="line"><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">user</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="line"><span class="token keyword">create</span> <span class="token keyword">user</span> <span class="token string">'yxd'</span><span class="token variable">@'localhost'</span> IDENTIFIED <span class="token keyword">by</span> <span class="token string">'123321'</span></span>
<span class="line"><span class="token keyword">create</span> <span class="token keyword">user</span> <span class="token string">'用户名'</span><span class="token variable">@'主机地址'</span> IDENTIFIED <span class="token keyword">by</span> <span class="token string">'密码'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>localhost</code>表示本机可用</p>
<p>如果任意主机都需要连接的话 使用<code v-pre>'%'</code> 即可</p>
</blockquote>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="line"><span class="token keyword">create</span> <span class="token keyword">user</span> <span class="token string">'用户名'</span><span class="token variable">@'%'</span> IDENTIFIED <span class="token keyword">by</span> <span class="token string">'密码'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="line"> <span class="token keyword">SELECT</span> NAME<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token keyword">CASE</span>		gender 		<span class="token keyword">WHEN</span> <span class="token string">'男'</span> <span class="token keyword">THEN</span>		<span class="token string">'小伙子'</span> 		<span class="token keyword">WHEN</span> <span class="token string">'女'</span> <span class="token keyword">THEN</span>		<span class="token string">'女朋友'</span> <span class="token keyword">ELSE</span> <span class="token string">'狗'</span> 	<span class="token keyword">END</span> <span class="token punctuation">)</span><span class="token keyword">AS</span> <span class="token string">'别称'</span> </span>
<span class="line"><span class="token keyword">FROM</span>	person</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="line"><span class="token keyword">create</span> <span class="token keyword">TABLE</span> <span class="token keyword">user</span><span class="token punctuation">(</span></span>
<span class="line">	id <span class="token keyword">int</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">auto_increment</span> <span class="token keyword">comment</span> <span class="token string">'主键'</span><span class="token punctuation">,</span></span>
<span class="line">	name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">NULL</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">COMMENT</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span></span>
<span class="line">	age <span class="token keyword">int</span> <span class="token keyword">check</span><span class="token punctuation">(</span>age<span class="token operator">></span><span class="token number">18</span> <span class="token operator">&amp;&amp;</span> age<span class="token operator">&lt;</span><span class="token number">120</span><span class="token punctuation">)</span> <span class="token keyword">COMMENT</span> <span class="token string">'年龄'</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token keyword">STATUS</span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">'1'</span> <span class="token keyword">COMMENT</span> <span class="token string">'状态'</span><span class="token punctuation">,</span></span>
<span class="line">	gender <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">comment</span> <span class="token string">'性别'</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">)</span><span class="token keyword">comment</span> <span class="token string">'用户表'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">use</span> test</span>
<span class="line"></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">into</span> <span class="token keyword">user</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span><span class="token keyword">status</span><span class="token punctuation">,</span>gender<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">'tom'</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token string">'1'</span><span class="token punctuation">,</span><span class="token string">'女'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'tom2'</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token string">'2'</span><span class="token punctuation">,</span><span class="token string">'男'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">user</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自查询" tabindex="-1"><a class="header-anchor" href="#自查询"><span>自查询</span></a></h2>
<blockquote>
<p>需要注意  子查询 必须起别名</p>
</blockquote>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> person <span class="token keyword">JOIN</span> person <span class="token keyword">as</span> b <span class="token keyword">ON</span> person<span class="token punctuation">.</span>id <span class="token operator">=</span> b<span class="token punctuation">.</span>idCard</span>
<span class="line"></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> person p<span class="token punctuation">,</span>person b <span class="token keyword">WHERE</span> p<span class="token punctuation">.</span>id <span class="token operator">=</span> b<span class="token punctuation">.</span>idCard</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合并-两个表查询后合并为新表" tabindex="-1"><a class="header-anchor" href="#合并-两个表查询后合并为新表"><span>合并  两个表查询后合并为新表</span></a></h2>
<blockquote>
<p>UNION all  合并查询              UNION 合并查询后去重</p>
<p>注意两个表的列数需要相同 字段类型也需要一致</p>
</blockquote>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">select * FROM person WHERE gender= '男' </span>
<span class="line">UNION all</span>
<span class="line">SELECT * FROM person WHERE name like '张三</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="distinct-去除重复项-去重" tabindex="-1"><a class="header-anchor" href="#distinct-去除重复项-去重"><span>DISTINCT 去除重复项  去重</span></a></h2>
<h2 id="事务-四大特性-基本操作-隔离级别" tabindex="-1"><a class="header-anchor" href="#事务-四大特性-基本操作-隔离级别"><span>事务  四大特性 基本操作   隔离级别</span></a></h2>
<h3 id="四大特性acid" tabindex="-1"><a class="header-anchor" href="#四大特性acid"><span>四大特性ACID</span></a></h3>
<blockquote>
<ul>
<li>原子性(Atomicity)：事务是不可分割的最小操作但愿，要么全部成功，要么全部失败</li>
<li>一致性(Consistency)：事务完成时，必须使所有数据都保持一致状态</li>
<li>隔离性(Isolation)：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行</li>
<li>持久性(Durability)：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的</li>
</ul>
</blockquote>
<h3 id="事务的基本操作" tabindex="-1"><a class="header-anchor" href="#事务的基本操作"><span>事务的基本操作</span></a></h3>
<p>事务是一组操作的集合，事务会把所有操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。</p>
<p>基本操作：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code><span class="line">-- 1. 查询张三账户余额</span>
<span class="line">select * from account where name = '张三';</span>
<span class="line">-- 2. 将张三账户余额-1000</span>
<span class="line">update account set money = money - 1000 where name = '张三';</span>
<span class="line">-- 此语句出错后张三钱减少但是李四钱没有增加</span>
<span class="line">模拟sql语句错误</span>
<span class="line">-- 3. 将李四账户余额+1000</span>
<span class="line">update account set money = money + 1000 where name = '李四';</span>
<span class="line"></span>
<span class="line">-- 查看事务提交方式</span>
<span class="line">SELECT @@AUTOCOMMIT;</span>
<span class="line">-- 设置事务提交方式，1为自动提交，0为手动提交，该设置只对当前会话有效</span>
<span class="line">SET @@AUTOCOMMIT = 0;</span>
<span class="line">-- 提交事务</span>
<span class="line">COMMIT;</span>
<span class="line">-- 回滚事务</span>
<span class="line">ROLLBACK;</span>
<span class="line"></span>
<span class="line">-- 设置手动提交后上面代码改为：</span>
<span class="line">select * from account where name = '张三';</span>
<span class="line">update account set money = money - 1000 where name = '张三';</span>
<span class="line">update account set money = money + 1000 where name = '李四';</span>
<span class="line">commit;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>操作方式二：</p>
<p>开启事务：
<code v-pre>START TRANSACTION 或 BEGIN TRANSACTION;</code>
提交事务：
<code v-pre>COMMIT;</code>
回滚事务：
<code v-pre>ROLLBACK;</code></p>
<p>操作实例：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql" data-title="mysql"><pre v-pre class="language-mysql"><code><span class="line">start transaction;</span>
<span class="line">select * from account where name = '张三';</span>
<span class="line">update account set money = money - 1000 where name = '张三';</span>
<span class="line">update account set money = money + 1000 where name = '李四';</span>
<span class="line">commit;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并发事务</p>
<table>
<thead>
<tr>
<th>问题</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>脏读</td>
<td>一个事务读到另一个事务还没提交的数据</td>
</tr>
<tr>
<td>不可重复读</td>
<td>一个事务先后读取同一条记录，但两次读取的数据不同</td>
</tr>
<tr>
<td>幻读</td>
<td>一个事务按照条件查询数据时，没有对应的数据行，但是再插入数据时，又发现这行数据已经存在</td>
</tr>
</tbody>
</table>
<blockquote>
<p>这三个问题的详细演示：https://www.bilibili.com/video/BV1Kr4y1i7ru?p=55cd</p>
</blockquote>
<p>并发事务隔离级别：</p>
<table>
<thead>
<tr>
<th>隔离级别</th>
<th>脏读</th>
<th>不可重复读</th>
<th>幻读</th>
</tr>
</thead>
<tbody>
<tr>
<td>Read uncommitted</td>
<td>√</td>
<td>√</td>
<td>√</td>
</tr>
<tr>
<td>Read committed</td>
<td>×</td>
<td>√</td>
<td>√</td>
</tr>
<tr>
<td>Repeatable Read(默认)</td>
<td>×</td>
<td>×</td>
<td>√</td>
</tr>
<tr>
<td>Serializable</td>
<td>×</td>
<td>×</td>
<td>×</td>
</tr>
</tbody>
</table>
<ul>
<li>√表示在当前隔离级别下该问题会出现</li>
<li>Serializable 性能最低；Read uncommitted 性能最高，数据安全性最差</li>
</ul>
<p>查看事务隔离级别：
<code v-pre>SELECT @@TRANSACTION_ISOLATION;</code>
设置事务隔离级别：
<code v-pre>SET [ SESSION | GLOBAL ] TRANSACTION ISOLATION LEVEL {READ UNCOMMITTED | READ COMMITTED | REPEATABLE READ | SERIALIZABLE };</code>
SESSION 是会话级别，表示只针对当前会话有效，GLOBAL 表示对所有会话有效</p>
<p>‘</p>
<h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre v-pre class="language-sql"><code><span class="line"><span class="token comment">-- 创建索引</span></span>
<span class="line"><span class="token keyword">create</span> <span class="token keyword">index</span> idx_student_age <span class="token keyword">on</span> student<span class="token punctuation">(</span>age<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">-- 展示表名中的所有的索引</span></span>
<span class="line"><span class="token keyword">show</span> <span class="token keyword">index</span> <span class="token keyword">from</span> student</span>
<span class="line"><span class="token comment">-- 删除索引</span></span>
<span class="line"><span class="token keyword">DROP</span> <span class="token keyword">index</span> idx_student_age <span class="token keyword">on</span> student</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="学到了-65集" tabindex="-1"><a class="header-anchor" href="#学到了-65集"><span>学到了 65集</span></a></h1>
<p><a href="https://www.bilibili.com/video/BV1Kr4y1i7ru?p=65&amp;vd_source=cb80c53a34a612fea928a61d4319bb8d" target="_blank" rel="noopener noreferrer">08. 进阶-MySQL安装(linux版本)_哔哩哔哩_bilibili</a></p>
</div></template>


