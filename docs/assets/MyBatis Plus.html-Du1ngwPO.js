import{_ as d,r as t,c as p,b as s,d as e,e as a,w as i,a as l,o as r}from"./app-JqYoc4F5.js";const c={},u=l(`<p>大家学习中如果碰到困难，可以加入**<a href="https://b11et3un53m.feishu.cn/wiki/M9LKwYAlHiZoyhkB5iKcgOh1nmc" target="_blank" rel="noopener noreferrer">黑马智学伴侣</a>**寻求帮助，有学习交流群，老师、同学在线答疑。还有独享的企业级项目，避免与人撞车。</p><p>本篇学习文档对应B站视频：</p><p>暂时无法在飞书文档外展示此内容</p><p>大家在日常开发中应该能发现，单表的CRUD功能代码重复度很高，也没有什么难度。而这部分代码量往往比较大，开发起来比较费时。</p><p>因此，目前企业中都会使用一些组件来简化或省略单表的CRUD开发工作。目前在国内使用较多的一个组件就是MybatisPlus.</p><p>官方网站如下：</p><p>暂时无法在飞书文档外展示此内容</p><p>当然，MybatisPlus不仅仅可以简化单表操作，而且还对Mybatis的功能有很多的增强。可以让我们的开发更加的简单，高效。</p><p>通过今天的学习，我们要达成下面的目标：</p><ul><li>能利用MybatisPlus实现基本的CRUD</li><li>会使用条件构建造器构建查询和更新语句</li><li>会使用MybatisPlus中的常用注解</li><li>会使用MybatisPlus处理枚举、JSON类型字段</li><li>会使用MybatisPlus实现分页</li></ul><h1 id="_1-快速入门" tabindex="-1"><a class="header-anchor" href="#_1-快速入门"><span><strong>1.快速入门</strong></span></a></h1><p>为了方便测试，我们先创建一个新的项目，并准备一些基础数据。</p><h2 id="_1-1-环境准备" tabindex="-1"><a class="header-anchor" href="#_1-1-环境准备"><span><strong>1.1.环境准备</strong></span></a></h2><p>复制课前资料提供好的一个项目到你的工作空间（不要包含空格和特殊字符）：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=ZmQxZDMyNTEyYWMxOTZlODY2MmEwMDExYjRhZDY1MGNfVVFnY1VDS2oxWHliUTUzWHV1MFV1R3VhRXBjeTMzVUhfVG9rZW46TmU0M2JNbkFVbzZIekl4Z1RrYmNEYmFsblJiXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>然后用你的IDEA工具打开，项目结构如下：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=MWQ3Y2U3ZTJmMTU3YTAwMzA0ODgyNTFjYjdlNTY0MjJfU3VHVEppQWFOZVVXdzhEYXZrUFp2bGgxUVRicklrQ2dfVG9rZW46WjhOSmJOMUp5bzFqeEt4R2xvTmN3R1JHbk5mXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>注意配置一下项目的JDK版本为JDK11。首先点击项目结构设置：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=OGZhNjM2M2U4Zjk2NTc5ODk5YjhlZWJjZDQ3MDRkYzVfN0tvVkliVUE2Wk9Va0xDWUhSQ0ZPNHNSbGhGQXZPcHBfVG9rZW46TXV2ZmJKQlJwb1pCbHl4Zkt3eGNLdDRrbkpoXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>在弹窗中配置JDK：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjU4NzE5NTI0ZmY4NjlhNzI5MzFhOWI4OTVlZmJjOTRfV0FpR2lMVXdualZ3OGEybGxraXRBRjRSbTVlTDRYcVRfVG9rZW46TEVRbWJ0UVR4b0s0eld4SDRyRWNFd1dIbnFoXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>接下来，要导入两张表，在课前资料中已经提供了SQL文件：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTUzOTBhMjkxYzc2YzUzODRlODIzZWIzNGRkYTNmY2VfZ0N6Y0J3Sk1VWUFhT2FabjRKTmpyajJCelA5Zk9nZWJfVG9rZW46WTNvN2JQZ0c4b0ZNQmt4MlVuVmNlZm9lblNkXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>对应的数据库表结构如下：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=OGRjOTZhZTVjZTRmYzc1YWRhOGQzNzUzNjJlYTM3N2FfTkdtNDF0TDROTFBsSjVTZkhWVFJRNVJUa2Zhck0yTVdfVG9rZW46Qm5uU2JHQm12b0s0eTB4SENyYWM0alFjbnpkXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>最后，在<code>application.yaml</code>中修改jdbc参数为你自己的数据库参数：</p><div class="language-YAML line-numbers-mode" data-highlighter="prismjs" data-ext="YAML" data-title="YAML"><pre class="language-YAML"><code><span class="line">spring:</span>
<span class="line">  datasource:</span>
<span class="line">    url: jdbc:mysql://127.0.0.1:3306/mp?useUnicode=true&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;serverTimezone=Asia/Shanghai</span>
<span class="line">    driver-class-name: com.mysql.cj.jdbc.Driver</span>
<span class="line">    username: root</span>
<span class="line">    password: MySQL123</span>
<span class="line">logging:</span>
<span class="line">  level:</span>
<span class="line">    com.itheima: debug</span>
<span class="line">  pattern:</span>
<span class="line">    dateformat: HH:mm:ss</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-快速开始" tabindex="-1"><a class="header-anchor" href="#_1-2-快速开始"><span><strong>1.2.快速开始</strong></span></a></h2><p>比如我们要实现User表的CRUD，只需要下面几步：</p><ul><li>引入MybatisPlus依赖</li><li>定义Mapper</li></ul><h3 id="_1-2-1引入依赖" tabindex="-1"><a class="header-anchor" href="#_1-2-1引入依赖"><span><strong>1.2.1引入依赖</strong></span></a></h3><p>MybatisPlus提供了starter，实现了自动Mybatis以及MybatisPlus的自动装配功能，坐标如下：</p><div class="language-XML line-numbers-mode" data-highlighter="prismjs" data-ext="XML" data-title="XML"><pre class="language-XML"><code><span class="line">&lt;dependency&gt;</span>
<span class="line">    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;</span>
<span class="line">    &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;</span>
<span class="line">    &lt;version&gt;3.5.3.1&lt;/version&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于这个starter包含对mybatis的自动装配，因此完全可以替换掉Mybatis的starter。 最终，项目的依赖如下：</p><div class="language-XML line-numbers-mode" data-highlighter="prismjs" data-ext="XML" data-title="XML"><pre class="language-XML"><code><span class="line">&lt;dependencies&gt;</span>
<span class="line">    &lt;dependency&gt;</span>
<span class="line">        &lt;groupId&gt;com.baomidou&lt;/groupId&gt;</span>
<span class="line">        &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;</span>
<span class="line">        &lt;version&gt;3.5.3.1&lt;/version&gt;</span>
<span class="line">    &lt;/dependency&gt;</span>
<span class="line">    &lt;dependency&gt;</span>
<span class="line">        &lt;groupId&gt;com.mysql&lt;/groupId&gt;</span>
<span class="line">        &lt;artifactId&gt;mysql-connector-j&lt;/artifactId&gt;</span>
<span class="line">        &lt;scope&gt;runtime&lt;/scope&gt;</span>
<span class="line">    &lt;/dependency&gt;</span>
<span class="line">    &lt;dependency&gt;</span>
<span class="line">        &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;</span>
<span class="line">        &lt;artifactId&gt;lombok&lt;/artifactId&gt;</span>
<span class="line">        &lt;optional&gt;true&lt;/optional&gt;</span>
<span class="line">    &lt;/dependency&gt;</span>
<span class="line">    &lt;dependency&gt;</span>
<span class="line">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span>
<span class="line">        &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;</span>
<span class="line">        &lt;scope&gt;test&lt;/scope&gt;</span>
<span class="line">    &lt;/dependency&gt;</span>
<span class="line">&lt;/dependencies&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-2-定义mapper" tabindex="-1"><a class="header-anchor" href="#_1-2-2-定义mapper"><span><strong>1.2.2.定义Mapper</strong></span></a></h3><p>为了简化单表CRUD，MybatisPlus提供了一个基础的<code>BaseMapper</code>接口，其中已经实现了单表的CRUD：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=MTA4ODM5ODJjNDk0YTQzODhjMGM2ZDg0Mjc1ZDQ1MTlfMFkzdVN2dUdNVTFXUWFOQktwcTJrUEVlejhkOFEwakRfVG9rZW46S0ZZdmJYdzdmb1BmM0x4dzVDamNkbTdvbnRiXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>因此我们自定义的Mapper只要实现了这个<code>BaseMapper</code>，就无需自己实现单表CRUD了。 修改mp-demo中的<code>com.itheima.mp.mapper</code>包下的<code>UserMapper</code>接口，让其继承<code>BaseMapper</code>：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=M2FjYjBiOTNhMzczODBiMDhmOWM1YWI2MzlmNDYwYjNfRnN5RWxmb1NVVTVBc0ZMREVvZjh4UmpJTUxTT1ZaSXFfVG9rZW46QzJDNGJOQ29yb25tMVB4aUQwS2NGNjdNbmxjXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>代码如下：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.mapper;</span>
<span class="line"></span>
<span class="line">import com.baomidou.mybatisplus.core.mapper.BaseMapper;</span>
<span class="line">import com.itheima.mp.domain.po.User;</span>
<span class="line"></span>
<span class="line">public interface UserMapper extends BaseMapper&lt;User&gt; {</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-3-测试" tabindex="-1"><a class="header-anchor" href="#_1-2-3-测试"><span><strong>1.2.3.测试</strong></span></a></h3><p>新建一个测试类，编写几个单元测试，测试基本的CRUD功能：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.mapper;</span>
<span class="line"></span>
<span class="line">import com.itheima.mp.domain.po.User;</span>
<span class="line">import org.junit.jupiter.api.Test;</span>
<span class="line">import org.springframework.beans.factory.annotation.Autowired;</span>
<span class="line">import org.springframework.boot.test.context.SpringBootTest;</span>
<span class="line"></span>
<span class="line">import java.time.LocalDateTime;</span>
<span class="line">import java.util.List;</span>
<span class="line"></span>
<span class="line">@SpringBootTest</span>
<span class="line">class UserMapperTest {</span>
<span class="line"></span>
<span class="line">    @Autowired</span>
<span class="line">    private UserMapper userMapper;</span>
<span class="line"></span>
<span class="line">    @Test</span>
<span class="line">    void testInsert() {</span>
<span class="line">        User user = new User();</span>
<span class="line">        user.setId(5L);</span>
<span class="line">        user.setUsername(&quot;Lucy&quot;);</span>
<span class="line">        user.setPassword(&quot;123&quot;);</span>
<span class="line">        user.setPhone(&quot;18688990011&quot;);</span>
<span class="line">        user.setBalance(200);</span>
<span class="line">        user.setInfo(&quot;{\\&quot;age\\&quot;: 24, \\&quot;intro\\&quot;: \\&quot;英文老师\\&quot;, \\&quot;gender\\&quot;: \\&quot;female\\&quot;}&quot;);</span>
<span class="line">        user.setCreateTime(LocalDateTime.now());</span>
<span class="line">        user.setUpdateTime(LocalDateTime.now());</span>
<span class="line">        userMapper.insert(user);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    @Test</span>
<span class="line">    void testSelectById() {</span>
<span class="line">        User user = userMapper.selectById(5L);</span>
<span class="line">        System.out.println(&quot;user = &quot; + user);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    @Test</span>
<span class="line">    void testSelectByIds() {</span>
<span class="line">        List&lt;User&gt; users = userMapper.selectBatchIds(List.of(1L, 2L, 3L, 4L, 5L));</span>
<span class="line">        users.forEach(System.out::println);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    @Test</span>
<span class="line">    void testUpdateById() {</span>
<span class="line">        User user = new User();</span>
<span class="line">        user.setId(5L);</span>
<span class="line">        user.setBalance(20000);</span>
<span class="line">        userMapper.updateById(user);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    @Test</span>
<span class="line">    void testDelete() {</span>
<span class="line">        userMapper.deleteById(5L);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，在运行过程中打印出的SQL日志，非常标准：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">11:05:01  INFO 15524 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...</span>
<span class="line">11:05:02  INFO 15524 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.</span>
<span class="line">11:05:02 DEBUG 15524 --- [           main] c.i.mp.mapper.UserMapper.selectById      : ==&gt;  Preparing: SELECT id,username,password,phone,info,status,balance,create_time,update_time FROM user WHERE id=?</span>
<span class="line">11:05:02 DEBUG 15524 --- [           main] c.i.mp.mapper.UserMapper.selectById      : ==&gt; Parameters: 5(Long)</span>
<span class="line">11:05:02 DEBUG 15524 --- [           main] c.i.mp.mapper.UserMapper.selectById      : &lt;==      Total: 1</span>
<span class="line">user = User(id=5, username=Lucy, password=123, phone=18688990011, info={&quot;age&quot;: 21}, status=1, balance=20000, createTime=Fri Jun 30 11:02:30 CST 2023, updateTime=Fri Jun 30 11:02:30 CST 2023)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只需要继承BaseMapper就能省去所有的单表CRUD，是不是非常简单！</p><h2 id="_1-3-常见注解" tabindex="-1"><a class="header-anchor" href="#_1-3-常见注解"><span>**1.3.**<strong>常见注解</strong></span></a></h2><p>在刚刚的入门案例中，我们仅仅引入了依赖，继承了BaseMapper就能使用MybatisPlus，非常简单。但是问题来了： MybatisPlus如何知道我们要查询的是哪张表？表中有哪些字段呢？</p><p>大家回忆一下，UserMapper在继承BaseMapper的时候指定了一个泛型：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=ZmJmODU1ZDY4MzhiMzc0ZTk4YWI0MGY2ODQ0MDhiM2VfTEtMbnJjNUUzSFhXeTB1YmgycHNsQ3BnODROczZIUXZfVG9rZW46U1N6b2JzS1cxbzUySnh4WlRaamMyZU45bmhlXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>泛型中的User就是与数据库对应的PO.</p><p>MybatisPlus就是根据PO实体的信息来推断出表的信息，从而生成SQL的。默认情况下：</p><ul><li>MybatisPlus会把PO实体的类名驼峰转下划线作为表名</li><li>MybatisPlus会把PO实体的所有变量名驼峰转下划线作为表的字段名，并根据变量类型推断字段类型</li><li>MybatisPlus会把名为id的字段作为主键</li></ul><p>但很多情况下，默认的实现与实际场景不符，因此MybatisPlus提供了一些注解便于我们声明表信息。</p><h3 id="_1-3-1-tablename" tabindex="-1"><a class="header-anchor" href="#_1-3-1-tablename"><span>**1.3.1.@**<strong>TableName</strong></span></a></h3><p>说明：</p><ul><li>描述：表名注解，标识实体类对应的表</li><li>使用位置：实体类</li></ul><p>示例：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@TableName(&quot;user&quot;)</span>
<span class="line">public class User {</span>
<span class="line">    private Long id;</span>
<span class="line">    private String name;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TableName注解除了指定表名以外，还可以指定很多其它属性：</p><table><thead><tr><th><strong>属性</strong></th><th><strong>类型</strong></th><th><strong>必须指定</strong></th><th><strong>默认值</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>value</td><td>String</td><td>否</td><td>&quot;&quot;</td><td>表名</td></tr><tr><td>schema</td><td>String</td><td>否</td><td>&quot;&quot;</td><td>schema</td></tr><tr><td>keepGlobalPrefix</td><td>boolean</td><td>否</td><td>false</td><td>是否保持使用全局的 tablePrefix 的值（当全局 tablePrefix 生效时）</td></tr><tr><td>resultMap</td><td>String</td><td>否</td><td>&quot;&quot;</td><td>xml 中 resultMap 的 id（用于满足特定类型的实体类对象绑定）</td></tr><tr><td>autoResultMap</td><td>boolean</td><td>否</td><td>false</td><td>是否自动构建 resultMap 并使用（如果设置 resultMap 则不会进行 resultMap 的自动构建与注入）</td></tr><tr><td>excludeProperty</td><td>String[]</td><td>否</td><td>{}</td><td>需要排除的属性名 @since 3.3.1</td></tr></tbody></table><h3 id="_1-3-2-tableid" tabindex="-1"><a class="header-anchor" href="#_1-3-2-tableid"><span><strong>1.3.2.@TableId</strong></span></a></h3><p>说明：</p><ul><li>描述：主键注解，标识实体类中的主键字段</li><li>使用位置：实体类的主键字段</li></ul><p>示例：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@TableName(&quot;user&quot;)</span>
<span class="line">public class User {</span>
<span class="line">    @TableId</span>
<span class="line">    private Long id;</span>
<span class="line">    private String name;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>TableId</code>注解支持两个属性：</p><table><thead><tr><th style="text-align:left;"><strong>属性</strong></th><th style="text-align:left;"><strong>类型</strong></th><th style="text-align:left;"><strong>必须指定</strong></th><th style="text-align:left;"><strong>默认值</strong></th><th style="text-align:left;"><strong>描述</strong></th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">&quot;&quot;</td><td style="text-align:left;">表名</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">Enum</td><td style="text-align:left;">否</td><td style="text-align:left;">IdType.NONE</td><td style="text-align:left;">指定主键类型</td></tr></tbody></table><p><code>IdType</code>支持的类型有：</p><table><thead><tr><th style="text-align:left;"><strong>值</strong></th><th style="text-align:left;"><strong>描述</strong></th></tr></thead><tbody><tr><td style="text-align:left;">AUTO</td><td style="text-align:left;">数据库 ID 自增</td></tr><tr><td style="text-align:left;">NONE</td><td style="text-align:left;">无状态，该类型为未设置主键类型（注解里等于跟随全局，全局里约等于 INPUT）</td></tr><tr><td style="text-align:left;">INPUT</td><td style="text-align:left;">insert 前自行 set 主键值</td></tr><tr><td style="text-align:left;">ASSIGN_ID</td><td style="text-align:left;">分配 ID(主键类型为 Number(Long 和 Integer)或 String)(since 3.3.0),使用接口IdentifierGenerator的方法nextId(默认实现类为DefaultIdentifierGenerator雪花算法)</td></tr><tr><td style="text-align:left;">ASSIGN_UUID</td><td style="text-align:left;">分配 UUID,主键类型为 String(since 3.3.0),使用接口IdentifierGenerator的方法nextUUID(默认 default 方法)</td></tr><tr><td style="text-align:left;">ID_WORKER</td><td style="text-align:left;">分布式全局唯一 ID 长整型类型(please use ASSIGN_ID)</td></tr><tr><td style="text-align:left;">UUID</td><td style="text-align:left;">32 位 UUID 字符串(please use ASSIGN_UUID)</td></tr><tr><td style="text-align:left;">ID_WORKER_STR</td><td style="text-align:left;">分布式全局唯一 ID 字符串类型(please use ASSIGN_ID)</td></tr></tbody></table><p>这里比较常见的有三种：</p><ul><li><code>AUTO</code>：利用数据库的id自增长</li><li><code>INPUT</code>：手动生成id</li><li><code>ASSIGN_ID</code>：雪花算法生成<code>Long</code>类型的全局唯一id，这是默认的ID策略</li></ul><h3 id="_1-3-3-tablefield" tabindex="-1"><a class="header-anchor" href="#_1-3-3-tablefield"><span><strong>1.3.3.@TableField</strong></span></a></h3><p>说明：</p><blockquote><p>描述：普通字段注解</p></blockquote><p>示例：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@TableName(&quot;user&quot;)</span>
<span class="line">public class User {</span>
<span class="line">    @TableId</span>
<span class="line">    private Long id;</span>
<span class="line">    private String name;</span>
<span class="line">    private Integer age;</span>
<span class="line">    @TableField(is_married&quot;)</span>
<span class="line">    private Boolean isMarried;</span>
<span class="line">    @TableField(&quot;\`concat\`&quot;)</span>
<span class="line">    private String concat;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般情况下我们并不需要给字段添加<code>@TableField</code>注解，一些特殊情况除外：</p><ul><li>成员变量名与数据库字段名不一致</li><li>成员变量是以<code>isXXX</code>命名，按照<code>JavaBean</code>的规范，<code>MybatisPlus</code>识别字段时会把<code>is</code>去除，这就导致与数据库不符。</li><li>成员变量名与数据库一致，但是与数据库的关键字冲突。使用<code>@TableField</code>注解给字段名添加转义字符：\`\`\`\`</li></ul><p>支持的其它属性如下：</p>`,82),o=s("thead",null,[s("tr",null,[s("th",null,[s("strong",null,"属性")]),s("th",null,[s("strong",null,"类型")]),s("th",null,[s("strong",null,"必填")]),s("th",null,[s("strong",null,"默认值")]),s("th",null,[s("strong",null,"描述")])])],-1),v=s("tr",null,[s("td",null,"value"),s("td",null,"String"),s("td",null,"否"),s("td",null,'""'),s("td",null,"数据库字段名")],-1),m=s("tr",null,[s("td",null,"exist"),s("td",null,"boolean"),s("td",null,"否"),s("td",null,"true"),s("td",null,"是否为数据库表字段")],-1),b=s("tr",null,[s("td",null,"condition"),s("td",null,"String"),s("td",null,"否"),s("td",null,'""'),s("td",null,[e("字段 where 实体查询比较条件，有值设置则按设置的值为准，没有则为默认全局的 %s=#{%s}，"),s("a",{href:"https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-annotation/src/main/java/com/baomidou/mybatisplus/annotation/SqlCondition.java",target:"_blank",rel:"noopener noreferrer"},"参考(opens new window)")])],-1),g=s("tr",null,[s("td",null,"update"),s("td",null,"String"),s("td",null,"否"),s("td",null,'""'),s("td",null,'字段 update set 部分注入，例如：当在version字段上注解update="%s+1" 表示更新时会 set version=version+1 （该属性优先级高于 el 属性）')],-1),h=s("td",null,"insertStrategy",-1),M=s("td",null,"Enum",-1),y=s("td",null,"否",-1),N=s("td",null,"FieldStrategy.DEFAULT",-1),U=s("tr",null,[s("td",null,"updateStrategy"),s("td",null,"Enum"),s("td",null,"否"),s("td",null,"FieldStrategy.DEFAULT"),s("td",null,"举例：IGNORED update table_a set column=#{columnProperty}")],-1),T=s("td",null,"whereStrategy",-1),q=s("td",null,"Enum",-1),z=s("td",null,"否",-1),V=s("td",null,"FieldStrategy.DEFAULT",-1),f=s("tr",null,[s("td",null,"fill"),s("td",null,"Enum"),s("td",null,"否"),s("td",null,"FieldFill.DEFAULT"),s("td",null,"字段自动填充策略")],-1),W=s("tr",null,[s("td",null,"select"),s("td",null,"boolean"),s("td",null,"否"),s("td",null,"true"),s("td",null,"是否进行 select 查询")],-1),O=s("tr",null,[s("td",null,"keepGlobalFormat"),s("td",null,"boolean"),s("td",null,"否"),s("td",null,"false"),s("td",null,"是否保持使用全局的 format 进行处理")],-1),J=s("tr",null,[s("td",null,"jdbcType"),s("td",null,"JdbcType"),s("td",null,"否"),s("td",null,"JdbcType.UNDEFINED"),s("td",null,"JDBC 类型 (该默认值不代表会按照该值生效)")],-1),D=s("tr",null,[s("td",null,"typeHandler"),s("td",null,"TypeHander"),s("td",null,"否"),s("td"),s("td",null,"类型处理器 (该默认值不代表会按照该值生效)")],-1),S=s("tr",null,[s("td",null,"numericScale"),s("td",null,"String"),s("td",null,"否"),s("td",null,'""'),s("td",null,"指定小数点后保留的位数")],-1),x=l(`<h2 id="_1-4-常见配置" tabindex="-1"><a class="header-anchor" href="#_1-4-常见配置"><span><strong>1.4.常见配置</strong></span></a></h2><p>MybatisPlus也支持基于yaml文件的自定义配置，详见官方文档：</p><p>https://baomidou.com/reference/</p><p>大多数的配置都有默认值，因此我们都无需配置。但还有一些是没有默认值的，例如:</p><ul><li>实体类的别名扫描包</li><li>全局id类型</li></ul><div class="language-YAML line-numbers-mode" data-highlighter="prismjs" data-ext="YAML" data-title="YAML"><pre class="language-YAML"><code><span class="line">mybatis-plus:</span>
<span class="line">  type-aliases-package: com.itheima.mp.domain.po</span>
<span class="line">  global-config:</span>
<span class="line">    db-config:</span>
<span class="line">      id-type: auto # 全局id类型为自增长</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，MyBatisPlus也支持手写SQL的，而mapper文件的读取地址可以自己配置：</p><div class="language-YAML line-numbers-mode" data-highlighter="prismjs" data-ext="YAML" data-title="YAML"><pre class="language-YAML"><code><span class="line">mybatis-plus:</span>
<span class="line">  mapper-locations: &quot;classpath*:/mapper/**/*.xml&quot; # Mapper.xml文件地址，当前这个是默认值。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到默认值是<code>classpath*:/mapper/**/*.xml</code>，也就是说我们只要把mapper.xml文件放置这个目录下就一定会被加载。</p><p>例如，我们新建一个<code>UserMapper.xml</code>文件：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NDFhZTZlMzdlZjQ3NjE3OGFjNGEwMWM0MzhkMmNkOWVfbDZNVVZSYXdNM3FsWjl4Sjd0M2kyaUU0c1ZOUVhvT3hfVG9rZW46RnhoNGJBQVZLb3Rpcmd4a24xNWNVMUhXbkRoXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>然后在其中定义一个方法：</p><div class="language-XML line-numbers-mode" data-highlighter="prismjs" data-ext="XML" data-title="XML"><pre class="language-XML"><code><span class="line">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="line">&lt;!DOCTYPE mapper PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot; &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span>
<span class="line">&lt;mapper namespace=&quot;com.itheima.mp.mapper.UserMapper&quot;&gt;</span>
<span class="line"></span>
<span class="line">    &lt;select id=&quot;queryById&quot; resultType=&quot;User&quot;&gt;</span>
<span class="line">        SELECT * FROM user WHERE id = #{id}</span>
<span class="line">    &lt;/select&gt;</span>
<span class="line">&lt;/mapper&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在测试类<code>UserMapperTest</code>中测试该方法：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Test</span>
<span class="line">void testQuery() {</span>
<span class="line">    User user = userMapper.queryById(1L);</span>
<span class="line">    System.out.println(&quot;user = &quot; + user);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-核心功能" tabindex="-1"><a class="header-anchor" href="#_2-核心功能"><span><strong>2.核心功能</strong></span></a></h1><p>刚才的案例中都是以id为条件的简单CRUD，一些复杂条件的SQL语句就要用到一些更高级的功能了。</p><h2 id="_2-1-条件构造器" tabindex="-1"><a class="header-anchor" href="#_2-1-条件构造器"><span>**2.1.**<strong>条件构造器</strong></span></a></h2><p>除了新增以外，修改、删除、查询的SQL语句都需要指定where条件。因此BaseMapper中提供的相关方法除了以<code>id</code>作为<code>where</code>条件以外，还支持更加复杂的<code>where</code>条件。</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=MjdlZmRmODE0OGIyNTkxMThjNzBiN2UzNmQ3NGU0YjBfcm9QTXZpMnFVZTAwbk5ueEdldjdmc0oyVUpZT1FrTnZfVG9rZW46QXlTUGJCVVVTb25wa3p4Y0x6SGNLTlhwblVjXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>参数中的<code>Wrapper</code>就是条件构造的抽象类，其下有很多默认实现，继承关系如图：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=OWQ5MDJjYjFkZjRhZDgzZjhhY2M1ZDc2OTExZWM2N2JfcEVFZXM0RXA5MW1IdGVTT3IzclhJdW5OYVFlcktjZVNfVG9rZW46WjFUU2JGUk1ubzZWaWp4Q1BDbmN6MmdEbjNlXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p><code>Wrapper</code>的子类<code>AbstractWrapper</code>提供了where中包含的所有条件构造方法：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NjIzNjFlY2JjZDU0MTY5MGNjMTc0MzIzZTMxOTU3ZjNfODNZUXZpZXBRTDNrVUJlQUVybW94b1RNVnJQUjVsaXJfVG9rZW46RXlZeWJzZnBBb0FaVnF4V2p5YmNXSzNlbmFmXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>而QueryWrapper在AbstractWrapper的基础上拓展了一个select方法，允许指定查询字段：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=YzBlZDY3ODBjYTYyMjQwY2FiMWRkM2VhZmUzNGQxYzVfd0Q5MXR0Z0FNSWhYdFZiN0pudDZuVzhoN3NWQlhnM3FfVG9rZW46RVVzUmJwaERQbzJNNTN4WjBrSGNCMWhFbmpoXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>而UpdateWrapper在AbstractWrapper的基础上拓展了一个set方法，允许指定SQL中的SET部分：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NzNhZWIwMzJjMmQ5MjRmNTI2NjBiZTVkOGQ2MTIzN2VfYmYwc2ZITzhhZnVESlNGaEx3MVdQY1o2TzgwUDlMZVhfVG9rZW46TDZVRWJEZ1V5b0R4blZ4UW92SWNpYmEzbmRiXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>接下来，我们就来看看如何利用<code>Wrapper</code>实现复杂查询。</p><h3 id="_2-1-1-querywrapper" tabindex="-1"><a class="header-anchor" href="#_2-1-1-querywrapper"><span><strong>2.1.1.QueryWrapper</strong></span></a></h3><p>无论是修改、删除、查询，都可以使用QueryWrapper来构建查询条件。接下来看一些例子： <strong>查询</strong>：查询出名字中带<code>o</code>的，存款大于等于1000元的人。代码如下：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Test</span>
<span class="line">void testQueryWrapper() {</span>
<span class="line">    // 1.构建查询条件 where name like &quot;%o%&quot; AND balance &gt;= 1000</span>
<span class="line">    QueryWrapper&lt;User&gt; wrapper = new QueryWrapper&lt;User&gt;()</span>
<span class="line">            .select(&quot;id&quot;, &quot;username&quot;, &quot;info&quot;, &quot;balance&quot;)</span>
<span class="line">            .like(&quot;username&quot;, &quot;o&quot;)</span>
<span class="line">            .ge(&quot;balance&quot;, 1000);</span>
<span class="line">    // 2.查询数据</span>
<span class="line">    List&lt;User&gt; users = userMapper.selectList(wrapper);</span>
<span class="line">    users.forEach(System.out::println);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>更新</strong>：更新用户名为jack的用户的余额为2000，代码如下：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Test</span>
<span class="line">void testUpdateByQueryWrapper() {</span>
<span class="line">    // 1.构建查询条件 where name = &quot;Jack&quot;</span>
<span class="line">    QueryWrapper&lt;User&gt; wrapper = new QueryWrapper&lt;User&gt;().eq(&quot;username&quot;, &quot;Jack&quot;);</span>
<span class="line">    // 2.更新数据，user中非null字段都会作为set语句</span>
<span class="line">    User user = new User();</span>
<span class="line">    user.setBalance(2000);</span>
<span class="line">    userMapper.update(user, wrapper);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-2-updatewrapper" tabindex="-1"><a class="header-anchor" href="#_2-1-2-updatewrapper"><span><strong>2.1.2.UpdateWrapper</strong></span></a></h3><p>基于BaseMapper中的update方法更新时只能直接赋值，对于一些复杂的需求就难以实现。 例如：更新id为<code>1,2,4</code>的用户的余额，扣200，对应的SQL应该是：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">UPDATE user SET balance = balance - 200 WHERE id in (1, 2, 4)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>SET的赋值结果是基于字段现有值的，这个时候就要利用UpdateWrapper中的setSql功能了：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Test</span>
<span class="line">void testUpdateWrapper() {</span>
<span class="line">    List&lt;Long&gt; ids = List.of(1L, 2L, 4L);</span>
<span class="line">    // 1.生成SQL</span>
<span class="line">    UpdateWrapper&lt;User&gt; wrapper = new UpdateWrapper&lt;User&gt;()</span>
<span class="line">            .setSql(&quot;balance = balance - 200&quot;) // SET balance = balance - 200</span>
<span class="line">            .in(&quot;id&quot;, ids); // WHERE id in (1, 2, 4)</span>
<span class="line">        // 2.更新，注意第一个参数可以给null，也就是不填更新字段和数据，</span>
<span class="line">    // 而是基于UpdateWrapper中的setSQL来更新</span>
<span class="line">    userMapper.update(null, wrapper);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-3-lambdaquerywrapper" tabindex="-1"><a class="header-anchor" href="#_2-1-3-lambdaquerywrapper"><span>**2.1.3.**<strong>LambdaQueryWrapper</strong></span></a></h3><p>无论是QueryWrapper还是UpdateWrapper在构造条件的时候都需要写死字段名称，会出现字符串<code>魔法值</code>。这在编程规范中显然是不推荐的。 那怎么样才能不写字段名，又能知道字段名呢？</p><p>其中一种办法是基于变量的<code>gettter</code>方法结合反射技术。因此我们只要将条件对应的字段的<code>getter</code>方法传递给MybatisPlus，它就能计算出对应的变量名了。而传递方法可以使用JDK8中的<code>方法引用</code>和<code>Lambda</code>表达式。 因此MybatisPlus又提供了一套基于Lambda的Wrapper，包含两个：</p><ul><li>LambdaQueryWrapper</li><li>LambdaUpdateWrapper</li></ul><p>分别对应QueryWrapper和UpdateWrapper</p><p>其使用方式如下：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Test</span>
<span class="line">void testLambdaQueryWrapper() {</span>
<span class="line">    // 1.构建条件 WHERE username LIKE &quot;%o%&quot; AND balance &gt;= 1000</span>
<span class="line">    QueryWrapper&lt;User&gt; wrapper = new QueryWrapper&lt;&gt;();</span>
<span class="line">    wrapper.lambda()</span>
<span class="line">            .select(User::getId, User::getUsername, User::getInfo, User::getBalance)</span>
<span class="line">            .like(User::getUsername, &quot;o&quot;)</span>
<span class="line">            .ge(User::getBalance, 1000);</span>
<span class="line">    // 2.查询</span>
<span class="line">    List&lt;User&gt; users = userMapper.selectList(wrapper);</span>
<span class="line">    users.forEach(System.out::println);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-自定义sql" tabindex="-1"><a class="header-anchor" href="#_2-2-自定义sql"><span><strong>2.2</strong>**.<strong><strong>自定义</strong></strong>SQL**</span></a></h2><p>在演示UpdateWrapper的案例中，我们在代码中编写了更新的SQL语句：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=ZmM3YjBmYzQ2YTYzNjgzNGVhNGQ4ZmFkNjgyMjMxZGVfY2dNWTA1QzBDSTZ5cVBrcU5oQmdaQUVYems5U1RjZ0RfVG9rZW46WUR5cGJEalh3b3JXRmV4eEVHWGNtelZvbkNlXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>这种写法在某些企业也是不允许的，因为SQL语句最好都维护在持久层，而不是业务层。就当前案例来说，由于条件是in语句，只能将SQL写在Mapper.xml文件，利用foreach来生成动态SQL。 这实在是太麻烦了。假如查询条件更复杂，动态SQL的编写也会更加复杂。</p><p>所以，MybatisPlus提供了自定义SQL功能，可以让我们利用Wrapper生成查询条件，再结合Mapper.xml编写SQL</p><h3 id="_2-2-1-基本用法" tabindex="-1"><a class="header-anchor" href="#_2-2-1-基本用法"><span><strong>2.2.1.基本用法</strong></span></a></h3><p>以当前案例来说，我们可以这样写：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Test</span>
<span class="line">void testCustomWrapper() {</span>
<span class="line">    // 1.准备自定义查询条件</span>
<span class="line">    List&lt;Long&gt; ids = List.of(1L, 2L, 4L);</span>
<span class="line">    QueryWrapper&lt;User&gt; wrapper = new QueryWrapper&lt;User&gt;().in(&quot;id&quot;, ids);</span>
<span class="line"></span>
<span class="line">    // 2.调用mapper的自定义方法，直接传递Wrapper</span>
<span class="line">    userMapper.deductBalanceByIds(200, wrapper);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在UserMapper中自定义SQL：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.mapper;</span>
<span class="line"></span>
<span class="line">import com.baomidou.mybatisplus.core.mapper.BaseMapper;</span>
<span class="line">import com.itheima.mp.domain.po.User;</span>
<span class="line">import org.apache.ibatis.annotations.Param;</span>
<span class="line">import org.apache.ibatis.annotations.Update;</span>
<span class="line">import org.apache.ibatis.annotations.Param;</span>
<span class="line"></span>
<span class="line">public interface UserMapper extends BaseMapper&lt;User&gt; {</span>
<span class="line">    @Select(&quot;UPDATE user SET balance = balance - #{money} \${ew.customSqlSegment}&quot;)</span>
<span class="line">    void deductBalanceByIds(@Param(&quot;money&quot;) int money, @Param(&quot;ew&quot;) QueryWrapper&lt;User&gt; wrapper);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就省去了编写复杂查询条件的烦恼了。</p><h3 id="_2-2-2-多表关联" tabindex="-1"><a class="header-anchor" href="#_2-2-2-多表关联"><span><strong>2.2.2.多表关联</strong></span></a></h3><p>理论上来讲MyBatisPlus是不支持多表查询的，不过我们可以利用Wrapper中自定义条件结合自定义SQL来实现多表查询的效果。 例如，我们要查询出所有收货地址在北京的并且用户id在1、2、4之中的用户 要是自己基于mybatis实现SQL，大概是这样的：</p><div class="language-XML line-numbers-mode" data-highlighter="prismjs" data-ext="XML" data-title="XML"><pre class="language-XML"><code><span class="line">&lt;select id=&quot;queryUserByIdAndAddr&quot; resultType=&quot;com.itheima.mp.domain.po.User&quot;&gt;</span>
<span class="line">      SELECT *</span>
<span class="line">      FROM user u</span>
<span class="line">      INNER JOIN address a ON u.id = a.user_id</span>
<span class="line">      WHERE u.id</span>
<span class="line">      &lt;foreach collection=&quot;ids&quot; separator=&quot;,&quot; item=&quot;id&quot; open=&quot;IN (&quot; close=&quot;)&quot;&gt;</span>
<span class="line">          #{id}</span>
<span class="line">      &lt;/foreach&gt;</span>
<span class="line">      AND a.city = #{city}</span>
<span class="line">  &lt;/select&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出其中最复杂的就是WHERE条件的编写，如果业务复杂一些，这里的SQL会更变态。</p><p>但是基于自定义SQL结合Wrapper的玩法，我们就可以利用Wrapper来构建查询条件，然后手写SELECT及FROM部分，实现多表查询。</p><p>查询条件这样来构建：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Test</span>
<span class="line">void testCustomJoinWrapper() {</span>
<span class="line">    // 1.准备自定义查询条件</span>
<span class="line">    QueryWrapper&lt;User&gt; wrapper = new QueryWrapper&lt;User&gt;()</span>
<span class="line">            .in(&quot;u.id&quot;, List.of(1L, 2L, 4L))</span>
<span class="line">            .eq(&quot;a.city&quot;, &quot;北京&quot;);</span>
<span class="line"></span>
<span class="line">    // 2.调用mapper的自定义方法</span>
<span class="line">    List&lt;User&gt; users = userMapper.queryUserByWrapper(wrapper);</span>
<span class="line"></span>
<span class="line">    users.forEach(System.out::println);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在UserMapper中自定义方法：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Select(&quot;SELECT u.* FROM user u INNER JOIN address a ON u.id = a.user_id \${ew.customSqlSegment}&quot;)</span>
<span class="line">List&lt;User&gt; queryUserByWrapper(@Param(&quot;ew&quot;)QueryWrapper&lt;User&gt; wrapper);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，也可以在<code>UserMapper.xml</code>中写SQL：</p><div class="language-XML line-numbers-mode" data-highlighter="prismjs" data-ext="XML" data-title="XML"><pre class="language-XML"><code><span class="line">&lt;select id=&quot;queryUserByIdAndAddr&quot; resultType=&quot;com.itheima.mp.domain.po.User&quot;&gt;</span>
<span class="line">    SELECT * FROM user u INNER JOIN address a ON u.id = a.user_id \${ew.customSqlSegment}</span>
<span class="line">&lt;/select&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-service接口" tabindex="-1"><a class="header-anchor" href="#_2-3-service接口"><span>**2.3.**<strong>Service接口</strong></span></a></h2><p>MybatisPlus不仅提供了BaseMapper，还提供了通用的Service接口及默认实现，封装了一些常用的service模板方法。 通用接口为<code>IService</code>，默认实现为<code>ServiceImpl</code>，其中封装的方法可以分为以下几类：</p><ul><li><code>save</code>：新增</li><li><code>remove</code>：删除</li><li><code>update</code>：更新</li><li><code>get</code>：查询单个结果</li><li><code>list</code>：查询集合结果</li><li><code>count</code>：计数</li><li><code>page</code>：分页查询</li></ul><h3 id="_2-3-1-crud" tabindex="-1"><a class="header-anchor" href="#_2-3-1-crud"><span>**2.3.1.**<strong>CRUD</strong></span></a></h3><p>我们先俩看下基本的CRUD接口。 <strong>新增</strong>：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NmZiNDIxMzk5MDVjNzRhZDVmZDk2MTVlNGJmNjUxOWJfVHdHZktaU0NRem1nVlNJbUJLVnIyUzdaN25Vc0JrdE1fVG9rZW46WGJpS2JCZ0Ixb1k2aER4V3ZCVmNwWDlsbkZoXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><ul><li><code>save</code>是新增单个元素</li><li><code>saveBatch</code>是批量新增</li><li><code>saveOrUpdate</code>是根据id判断，如果数据存在就更新，不存在则新增</li><li><code>saveOrUpdateBatch</code>是批量的新增或修改</li></ul><p><strong>删除：</strong></p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=MGQ2MWRkNGE5MTg0MTY0MzAyYzVhYWZkYjIwNTcxMzlfUXhzRHlRR2tvTHowUUM1ZTlnM2E5bHVFTTkyN3JuSzhfVG9rZW46T2dBcGJNVGJGbzA3OTJ4Q0hjQmNJa3libmZkXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><ul><li><code>removeById</code>：根据id删除</li><li><code>removeByIds</code>：根据id批量删除</li><li><code>removeByMap</code>：根据Map中的键值对为条件删除</li><li><code>remove(Wrapper&lt;T&gt;)</code>：根据Wrapper条件删除</li><li><code>~~removeBatchByIds~~</code>：暂不支持</li></ul><p><strong>修改：</strong></p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=OTUzNjk2ZTliODRmNzU5ZTNlMDhiMzBlMjk1ZWFiYjBfdkNDa25ZdVZqN1JtOWJsekVhaThZNTZ6dnh0YWJmYmNfVG9rZW46RnpNTWJEdFNRb0NFeVN4ZVd0MWM4VGNYbkdkXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><ul><li><code>updateById</code>：根据id修改</li><li><code>update(Wrapper&lt;T&gt;)</code>：根据<code>UpdateWrapper</code>修改，<code>Wrapper</code>中包含<code>set</code>和<code>where</code>部分</li><li><code>update(T，Wrapper&lt;T&gt;)</code>：按照<code>T</code>内的数据修改与<code>Wrapper</code>匹配到的数据</li><li><code>updateBatchById</code>：根据id批量修改</li></ul><p><strong>Get：</strong></p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2EwNDlkOGRiM2E5MDAxZjc0MjUzNDFlNmJhMTMyYWNfUlo5TXZOQVpsRW5VV3Z0SlB4bHU3QUdzaWJ3YWtNenZfVG9rZW46UXN6ZGJjNTB6b0xwdUl4NEI4dWNHbnp0bjdmXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><ul><li><code>getById</code>：根据id查询1条数据</li><li><code>getOne(Wrapper&lt;T&gt;)</code>：根据<code>Wrapper</code>查询1条数据</li><li><code>getBaseMapper</code>：获取<code>Service</code>内的<code>BaseMapper</code>实现，某些时候需要直接调用<code>Mapper</code>内的自定义<code>SQL</code>时可以用这个方法获取到<code>Mapper</code></li></ul><p><strong>List：</strong></p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=MjAxZDg4ZGU1MDI2ZWZlM2VkZTJlOWFhZGUzMzJjZjlfSjVlNGVkd3hjNmpDTWtmeVZZQmo0dzgyM2lKVVNiTmdfVG9rZW46UWhVNmI3TFdZb0tlR0N4NGFOVmNObklCblZkXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><ul><li><code>listByIds</code>：根据id批量查询</li><li><code>list(Wrapper&lt;T&gt;)</code>：根据Wrapper条件查询多条数据</li><li><code>list()</code>：查询所有</li></ul><p><strong>Count</strong>：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=MmNlMzNjNDI0Yzg2ZDdlNmEwNjlhYzYxZWViMTdlZDFfbmJmTzRlcm5ManhUR2NrU0pNU21NMXhrNE1yTU1kck9fVG9rZW46UndyZ2JaUFQwb2VoekJ4cE1VMmN0NlhLbmlmXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><ul><li><code>count()</code>：统计所有数量</li><li><code>count(Wrapper&lt;T&gt;)</code>：统计符合<code>Wrapper</code>条件的数据数量</li></ul><p><strong>getBaseMapper</strong>： 当我们在service中要调用Mapper中自定义SQL时，就必须获取service对应的Mapper，就可以通过这个方法：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=YTBjN2U1ZjUwNjE1YjdlNzUwZTMyNmQ5ZGEyNTA1YjhfUjg0aXZ1dkRmT1Uwa3VmNGpUUEFzemtSYnkxV1ZJNnlfVG9rZW46TFdqc2JTMVUzb1JCdXh4MWhDMGMxMzdBbmpoXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><h3 id="_2-3-2-基本用法" tabindex="-1"><a class="header-anchor" href="#_2-3-2-基本用法"><span><strong>2.3.2.基本用法</strong></span></a></h3><p>由于<code>Service</code>中经常需要定义与业务有关的自定义方法，因此我们不能直接使用<code>IService</code>，而是自定义<code>Service</code>接口，然后继承<code>IService</code>以拓展方法。同时，让自定义的<code>Service实现类</code>继承<code>ServiceImpl</code>，这样就不用自己实现<code>IService</code>中的接口了。</p><p>首先，定义<code>IUserService</code>，继承<code>IService</code>：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.service;</span>
<span class="line"></span>
<span class="line">import com.baomidou.mybatisplus.extension.service.IService;</span>
<span class="line">import com.itheima.mp.domain.po.User;</span>
<span class="line"></span>
<span class="line">public interface IUserService extends IService&lt;User&gt; {</span>
<span class="line">    // 拓展自定义方法</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，编写<code>UserServiceImpl</code>类，继承<code>ServiceImpl</code>，实现<code>UserService</code>：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.service.impl;</span>
<span class="line"></span>
<span class="line">import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;</span>
<span class="line">import com.itheima.mp.domain.po.User;</span>
<span class="line">import com.itheima.mp.domain.po.service.IUserService;</span>
<span class="line">import com.itheima.mp.mapper.UserMapper;</span>
<span class="line">import org.springframework.stereotype.Service;</span>
<span class="line"></span>
<span class="line">@Service</span>
<span class="line">public class UserServiceImpl extends ServiceImpl&lt;UserMapper, User&gt;</span>
<span class="line">                                                                                                        implements IUserService {</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目结构如下：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=OTAzNGMyOTdiZTBlMWFhMmNmMzA3Yzc0NWEwYTg0YzBfYXB2MW52Mlg4MzRQeTg5SGxjZkZBSzI2dFk4ZnBWckFfVG9rZW46S1BYcGJkM3Y4b2pZVkt4ZHhFUmNmcHpPbnJnXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>接下来，我们快速实现下面4个接口：</p><table><thead><tr><th style="text-align:left;"><strong>编号</strong></th><th style="text-align:left;"><strong>接口</strong></th><th style="text-align:left;"><strong>请求方式</strong></th><th style="text-align:left;"><strong>请求路径</strong></th><th style="text-align:left;"><strong>请求参数</strong></th><th style="text-align:left;"><strong>返回值</strong></th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;">新增用户</td><td style="text-align:left;">POST</td><td style="text-align:left;">/users</td><td style="text-align:left;">用户表单实体</td><td style="text-align:left;">无</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">删除用户</td><td style="text-align:left;">DELETE</td><td style="text-align:left;">/users/{id}</td><td style="text-align:left;">用户id</td><td style="text-align:left;">无</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">根据id查询用户</td><td style="text-align:left;">GET</td><td style="text-align:left;">/users/{id}</td><td style="text-align:left;">用户id</td><td style="text-align:left;">用户VO</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;">根据id批量查询</td><td style="text-align:left;">GET</td><td style="text-align:left;">/users</td><td style="text-align:left;">用户id集合</td><td style="text-align:left;">用户VO集合</td></tr></tbody></table><p>首先，我们在项目中引入几个依赖：</p><div class="language-XML line-numbers-mode" data-highlighter="prismjs" data-ext="XML" data-title="XML"><pre class="language-XML"><code><span class="line">&lt;!--swagger--&gt;</span>
<span class="line">&lt;dependency&gt;</span>
<span class="line">    &lt;groupId&gt;com.github.xiaoymin&lt;/groupId&gt;</span>
<span class="line">    &lt;artifactId&gt;knife4j-openapi2-spring-boot-starter&lt;/artifactId&gt;</span>
<span class="line">    &lt;version&gt;4.1.0&lt;/version&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line">&lt;!--web--&gt;</span>
<span class="line">&lt;dependency&gt;</span>
<span class="line">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span>
<span class="line">    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后需要配置swagger信息：</p><div class="language-YAML line-numbers-mode" data-highlighter="prismjs" data-ext="YAML" data-title="YAML"><pre class="language-YAML"><code><span class="line">knife4j:</span>
<span class="line">  enable: true</span>
<span class="line">  openapi:</span>
<span class="line">    title: 用户管理接口文档</span>
<span class="line">    description: &quot;用户管理接口文档&quot;</span>
<span class="line">    email: zhanghuyi@itcast.cn</span>
<span class="line">    concat: 虎哥</span>
<span class="line">    url: https://www.itcast.cn</span>
<span class="line">    version: v1.0.0</span>
<span class="line">    group:</span>
<span class="line">      default:</span>
<span class="line">        group-name: default</span>
<span class="line">        api-rule: package</span>
<span class="line">        api-rule-resources:</span>
<span class="line">          - com.itheima.mp.controller</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，接口需要两个实体：</p><ul><li>UserFormDTO：代表新增时的用户表单</li><li>UserVO：代表查询的返回结果</li></ul><p>首先是UserFormDTO：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.domain.dto;</span>
<span class="line"></span>
<span class="line">import com.baomidou.mybatisplus.annotation.TableField;</span>
<span class="line">import com.baomidou.mybatisplus.extension.handlers.JacksonTypeHandler;</span>
<span class="line">import io.swagger.annotations.ApiModel;</span>
<span class="line">import io.swagger.annotations.ApiModelProperty;</span>
<span class="line">import lombok.Data;</span>
<span class="line"></span>
<span class="line">@Data</span>
<span class="line">@ApiModel(description = &quot;用户表单实体&quot;)</span>
<span class="line">public class UserFormDTO {</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;id&quot;)</span>
<span class="line">    private Long id;</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;用户名&quot;)</span>
<span class="line">    private String username;</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;密码&quot;)</span>
<span class="line">    private String password;</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;注册手机号&quot;)</span>
<span class="line">    private String phone;</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;详细信息，JSON风格&quot;)</span>
<span class="line">    private String info;</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;账户余额&quot;)</span>
<span class="line">    private Integer balance;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后是UserVO：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.domain.vo;</span>
<span class="line"></span>
<span class="line">import io.swagger.annotations.ApiModel;</span>
<span class="line">import io.swagger.annotations.ApiModelProperty;</span>
<span class="line">import lombok.Data;</span>
<span class="line"></span>
<span class="line">@Data</span>
<span class="line">@ApiModel(description = &quot;用户VO实体&quot;)</span>
<span class="line">public class UserVO {</span>
<span class="line">    </span>
<span class="line">    @ApiModelProperty(&quot;用户id&quot;)</span>
<span class="line">    private Long id;</span>
<span class="line">    </span>
<span class="line">    @ApiModelProperty(&quot;用户名&quot;)</span>
<span class="line">    private String username;</span>
<span class="line">    </span>
<span class="line">    @ApiModelProperty(&quot;详细信息&quot;)</span>
<span class="line">    private String info;</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;使用状态（1正常 2冻结）&quot;)</span>
<span class="line">    private Integer status;</span>
<span class="line">    </span>
<span class="line">    @ApiModelProperty(&quot;账户余额&quot;)</span>
<span class="line">    private Integer balance;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，按照Restful风格编写Controller接口方法：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.controller;</span>
<span class="line"></span>
<span class="line">import cn.hutool.core.bean.BeanUtil;</span>
<span class="line">import com.itheima.mp.domain.dto.UserFormDTO;</span>
<span class="line">import com.itheima.mp.domain.po.User;</span>
<span class="line">import com.itheima.mp.domain.vo.UserVO;</span>
<span class="line">import com.itheima.mp.service.IUserService;</span>
<span class="line">import io.swagger.annotations.Api;</span>
<span class="line">import io.swagger.annotations.ApiOperation;</span>
<span class="line">import lombok.RequiredArgsConstructor;</span>
<span class="line">import org.springframework.web.bind.annotation.*;</span>
<span class="line"></span>
<span class="line">import java.util.List;</span>
<span class="line"></span>
<span class="line">@Api(tags = &quot;用户管理接口&quot;)</span>
<span class="line">@RequiredArgsConstructor</span>
<span class="line">@RestController</span>
<span class="line">@RequestMapping(&quot;users&quot;)</span>
<span class="line">public class UserController {</span>
<span class="line"></span>
<span class="line">    private final IUserService userService;</span>
<span class="line"></span>
<span class="line">    @PostMapping</span>
<span class="line">    @ApiOperation(&quot;新增用户&quot;)</span>
<span class="line">    public void saveUser(@RequestBody UserFormDTO userFormDTO){</span>
<span class="line">        // 1.转换DTO为PO</span>
<span class="line">        User user = BeanUtil.copyProperties(userFormDTO, User.class);</span>
<span class="line">        // 2.新增</span>
<span class="line">        userService.save(user);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    @DeleteMapping(&quot;/{id}&quot;)</span>
<span class="line">    @ApiOperation(&quot;删除用户&quot;)</span>
<span class="line">    public void removeUserById(@PathVariable(&quot;id&quot;) Long userId){</span>
<span class="line">        userService.removeById(userId);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    @GetMapping(&quot;/{id}&quot;)</span>
<span class="line">    @ApiOperation(&quot;根据id查询用户&quot;)</span>
<span class="line">    public UserVO queryUserById(@PathVariable(&quot;id&quot;) Long userId){</span>
<span class="line">        // 1.查询用户</span>
<span class="line">        User user = userService.getById(userId);</span>
<span class="line">        // 2.处理vo</span>
<span class="line">        return BeanUtil.copyProperties(user, UserVO.class);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    @GetMapping</span>
<span class="line">    @ApiOperation(&quot;根据id集合查询用户&quot;)</span>
<span class="line">    public List&lt;UserVO&gt; queryUserByIds(@RequestParam(&quot;ids&quot;) List&lt;Long&gt; ids){</span>
<span class="line">        // 1.查询用户</span>
<span class="line">        List&lt;User&gt; users = userService.listByIds(ids);</span>
<span class="line">        // 2.处理vo</span>
<span class="line">        return BeanUtil.copyToList(users, UserVO.class);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到上述接口都直接在controller即可实现，无需编写任何service代码，非常方便。</p><p>不过，一些带有业务逻辑的接口则需要在service中自定义实现了。例如下面的需求：</p><ul><li>根据id扣减用户余额</li></ul><p>这看起来是个简单修改功能，只要修改用户余额即可。但这个业务包含一些业务逻辑处理：</p><ul><li>判断用户状态是否正常</li><li>判断用户余额是否充足</li></ul><p>这些业务逻辑都要在service层来做，另外更新余额需要自定义SQL，要在mapper中来实现。因此，我们除了要编写controller以外，具体的业务还要在service和mapper中编写。</p><p>首先在UserController中定义一个方法：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@PutMapping(&quot;{id}/deduction/{money}&quot;)</span>
<span class="line">@ApiOperation(&quot;扣减用户余额&quot;)</span>
<span class="line">public void deductBalance(@PathVariable(&quot;id&quot;) Long id, @PathVariable(&quot;money&quot;)Integer money){</span>
<span class="line">    userService.deductBalance(id, money);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后是UserService接口：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.service;</span>
<span class="line"></span>
<span class="line">import com.baomidou.mybatisplus.extension.service.IService;</span>
<span class="line">import com.itheima.mp.domain.po.User;</span>
<span class="line"></span>
<span class="line">public interface IUserService extends IService&lt;User&gt; {</span>
<span class="line">    void deductBalance(Long id, Integer money);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后是UserServiceImpl实现类：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.service.impl;</span>
<span class="line"></span>
<span class="line">import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;</span>
<span class="line">import com.itheima.mp.domain.po.User;</span>
<span class="line">import com.itheima.mp.mapper.UserMapper;</span>
<span class="line">import com.itheima.mp.service.IUserService;</span>
<span class="line">import org.springframework.stereotype.Service;</span>
<span class="line"></span>
<span class="line">@Service</span>
<span class="line">public class UserServiceImpl extends ServiceImpl&lt;UserMapper, User&gt; implements IUserService {</span>
<span class="line">    @Override</span>
<span class="line">    public void deductBalance(Long id, Integer money) {</span>
<span class="line">        // 1.查询用户</span>
<span class="line">        User user = getById(id);</span>
<span class="line">        // 2.判断用户状态</span>
<span class="line">        if (user == null || user.getStatus() == 2) {</span>
<span class="line">            throw new RuntimeException(&quot;用户状态异常&quot;);</span>
<span class="line">        }</span>
<span class="line">        // 3.判断用户余额</span>
<span class="line">        if (user.getBalance() &lt; money) {</span>
<span class="line">            throw new RuntimeException(&quot;用户余额不足&quot;);</span>
<span class="line">        }</span>
<span class="line">        // 4.扣减余额</span>
<span class="line">        baseMapper.deductMoneyById(id, money);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后是mapper：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Update(&quot;UPDATE user SET balance = balance - #{money} WHERE id = #{id}&quot;)</span>
<span class="line">void deductMoneyById(@Param(&quot;id&quot;) Long id, @Param(&quot;money&quot;) Integer money);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-3-lambda" tabindex="-1"><a class="header-anchor" href="#_2-3-3-lambda"><span>**2.3.3.**<strong>Lambda</strong></span></a></h3><p>IService中还提供了Lambda功能来简化我们的复杂查询及更新功能。我们通过两个案例来学习一下。</p><p>案例一：实现一个根据复杂条件查询用户的接口，查询条件如下：</p><ul><li>name：用户名关键字，可以为空</li><li>status：用户状态，可以为空</li><li>minBalance：最小余额，可以为空</li><li>maxBalance：最大余额，可以为空</li></ul><p>可以理解成一个用户的后台管理界面，管理员可以自己选择条件来筛选用户，因此上述条件不一定存在，需要做判断。</p><p>我们首先需要定义一个查询条件实体，UserQuery实体：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.domain.query;</span>
<span class="line"></span>
<span class="line">import io.swagger.annotations.ApiModel;</span>
<span class="line">import io.swagger.annotations.ApiModelProperty;</span>
<span class="line">import lombok.Data;</span>
<span class="line"></span>
<span class="line">@Data</span>
<span class="line">@ApiModel(description = &quot;用户查询条件实体&quot;)</span>
<span class="line">public class UserQuery {</span>
<span class="line">    @ApiModelProperty(&quot;用户名关键字&quot;)</span>
<span class="line">    private String name;</span>
<span class="line">    @ApiModelProperty(&quot;用户状态：1-正常，2-冻结&quot;)</span>
<span class="line">    private Integer status;</span>
<span class="line">    @ApiModelProperty(&quot;余额最小值&quot;)</span>
<span class="line">    private Integer minBalance;</span>
<span class="line">    @ApiModelProperty(&quot;余额最大值&quot;)</span>
<span class="line">    private Integer maxBalance;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们在UserController中定义一个controller方法：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@GetMapping(&quot;/list&quot;)</span>
<span class="line">@ApiOperation(&quot;根据id集合查询用户&quot;)</span>
<span class="line">public List&lt;UserVO&gt; queryUsers(UserQuery query){</span>
<span class="line">    // 1.组织条件</span>
<span class="line">    String username = query.getName();</span>
<span class="line">    Integer status = query.getStatus();</span>
<span class="line">    Integer minBalance = query.getMinBalance();</span>
<span class="line">    Integer maxBalance = query.getMaxBalance();</span>
<span class="line">    LambdaQueryWrapper&lt;User&gt; wrapper = new QueryWrapper&lt;User&gt;().lambda()</span>
<span class="line">            .like(username != null, User::getUsername, username)</span>
<span class="line">            .eq(status != null, User::getStatus, status)</span>
<span class="line">            .ge(minBalance != null, User::getBalance, minBalance)</span>
<span class="line">            .le(maxBalance != null, User::getBalance, maxBalance);</span>
<span class="line">    // 2.查询用户</span>
<span class="line">    List&lt;User&gt; users = userService.list(wrapper);</span>
<span class="line">    // 3.处理vo</span>
<span class="line">    return BeanUtil.copyToList(users, UserVO.class);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组织查询条件的时候，我们加入了 <code>username != null</code> 这样的参数，意思就是当条件成立时才会添加这个查询条件，类似Mybatis的mapper.xml文件中的<code>&lt;if&gt;</code>标签。这样就实现了动态查询条件效果了。</p><p>不过，上述条件构建的代码太麻烦了。 因此Service中对<code>LambdaQueryWrapper</code>和<code>LambdaUpdateWrapper</code>的用法进一步做了简化。我们无需自己通过<code>new</code>的方式来创建<code>Wrapper</code>，而是直接调用<code>lambdaQuery</code>和<code>lambdaUpdate</code>方法：</p><p>基于Lambda查询：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@GetMapping(&quot;/list&quot;)</span>
<span class="line">@ApiOperation(&quot;根据id集合查询用户&quot;)</span>
<span class="line">public List&lt;UserVO&gt; queryUsers(UserQuery query){</span>
<span class="line">    // 1.组织条件</span>
<span class="line">    String username = query.getName();</span>
<span class="line">    Integer status = query.getStatus();</span>
<span class="line">    Integer minBalance = query.getMinBalance();</span>
<span class="line">    Integer maxBalance = query.getMaxBalance();</span>
<span class="line">    // 2.查询用户</span>
<span class="line">    List&lt;User&gt; users = userService.lambdaQuery()</span>
<span class="line">            .like(username != null, User::getUsername, username)</span>
<span class="line">            .eq(status != null, User::getStatus, status)</span>
<span class="line">            .ge(minBalance != null, User::getBalance, minBalance)</span>
<span class="line">            .le(maxBalance != null, User::getBalance, maxBalance)</span>
<span class="line">            .list();</span>
<span class="line">    // 3.处理vo</span>
<span class="line">    return BeanUtil.copyToList(users, UserVO.class);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现lambdaQuery方法中除了可以构建条件，还需要在链式编程的最后添加一个<code>list()</code>，这是在告诉MP我们的调用结果需要是一个list集合。这里不仅可以用<code>list()</code>，可选的方法有：</p><ul><li><code>.one()</code>：最多1个结果</li><li><code>.list()</code>：返回集合结果</li><li><code>.count()</code>：返回计数结果</li></ul><p>MybatisPlus会根据链式编程的最后一个方法来判断最终的返回结果。</p><p>与lambdaQuery方法类似，IService中的lambdaUpdate方法可以非常方便的实现复杂更新业务。</p><p>例如下面的需求：</p><blockquote><p>需求：改造根据id修改用户余额的接口，要求如下</p><ul><li>如果扣减后余额为0，则将用户status修改为冻结状态（2）</li></ul></blockquote><p>也就是说我们在扣减用户余额时，需要对用户剩余余额做出判断，如果发现剩余余额为0，则应该将status修改为2，这就是说update语句的set部分是动态的。</p><p>实现如下：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Override</span>
<span class="line">@Transactional</span>
<span class="line">public void deductBalance(Long id, Integer money) {</span>
<span class="line">    // 1.查询用户</span>
<span class="line">    User user = getById(id);</span>
<span class="line">    // 2.校验用户状态</span>
<span class="line">    if (user == null || user.getStatus() == 2) {</span>
<span class="line">        throw new RuntimeException(&quot;用户状态异常！&quot;);</span>
<span class="line">    }</span>
<span class="line">    // 3.校验余额是否充足</span>
<span class="line">    if (user.getBalance() &lt; money) {</span>
<span class="line">        throw new RuntimeException(&quot;用户余额不足！&quot;);</span>
<span class="line">    }</span>
<span class="line">    // 4.扣减余额 update tb_user set balance = balance - ?</span>
<span class="line">    int remainBalance = user.getBalance() - money;</span>
<span class="line">    lambdaUpdate()</span>
<span class="line">            .set(User::getBalance, remainBalance) // 更新余额</span>
<span class="line">            .set(remainBalance == 0, User::getStatus, 2) // 动态判断，是否更新status</span>
<span class="line">            .eq(User::getId, id)</span>
<span class="line">            .eq(User::getBalance, user.getBalance()) // 乐观锁</span>
<span class="line">            .update();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-4-批量新增" tabindex="-1"><a class="header-anchor" href="#_2-3-4-批量新增"><span>**2.3.4.**<strong>批量新增</strong></span></a></h3><p>IService中的批量新增功能使用起来非常方便，但有一点注意事项，我们先来测试一下。 首先我们测试逐条插入数据：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Test</span>
<span class="line">void testSaveOneByOne() {</span>
<span class="line">    long b = System.currentTimeMillis();</span>
<span class="line">    for (int i = 1; i &lt;= 100000; i++) {</span>
<span class="line">        userService.save(buildUser(i));</span>
<span class="line">    }</span>
<span class="line">    long e = System.currentTimeMillis();</span>
<span class="line">    System.out.println(&quot;耗时：&quot; + (e - b));</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">private User buildUser(int i) {</span>
<span class="line">    User user = new User();</span>
<span class="line">    user.setUsername(&quot;user_&quot; + i);</span>
<span class="line">    user.setPassword(&quot;123&quot;);</span>
<span class="line">    user.setPhone(&quot;&quot; + (18688190000L + i));</span>
<span class="line">    user.setBalance(2000);</span>
<span class="line">    user.setInfo(&quot;{\\&quot;age\\&quot;: 24, \\&quot;intro\\&quot;: \\&quot;英文老师\\&quot;, \\&quot;gender\\&quot;: \\&quot;female\\&quot;}&quot;);</span>
<span class="line">    user.setCreateTime(LocalDateTime.now());</span>
<span class="line">    user.setUpdateTime(user.getCreateTime());</span>
<span class="line">    return user;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NjgwYmJmOGZlMTk4MDQ5ZDQ1ZTNiZTFhNzAzYmFiYjBfZWhBNHNvNUt3eDBpR0JYMFBBVjFoWm84U2ZyQ3lSTE5fVG9rZW46WERQT2IxVWtHb0Rod3F4MHlwV2MzM3VEbjFkXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>可以看到速度非常慢。</p><p>然后再试试MybatisPlus的批处理：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Test</span>
<span class="line">void testSaveBatch() {</span>
<span class="line">    // 准备10万条数据</span>
<span class="line">    List&lt;User&gt; list = new ArrayList&lt;&gt;(1000);</span>
<span class="line">    long b = System.currentTimeMillis();</span>
<span class="line">    for (int i = 1; i &lt;= 100000; i++) {</span>
<span class="line">        list.add(buildUser(i));</span>
<span class="line">        // 每1000条批量插入一次</span>
<span class="line">        if (i % 1000 == 0) {</span>
<span class="line">            userService.saveBatch(list);</span>
<span class="line">            list.clear();</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    long e = System.currentTimeMillis();</span>
<span class="line">    System.out.println(&quot;耗时：&quot; + (e - b));</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行最终耗时如下：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2M3YzQ3MWIwNWEwMmY4MjliNTRhM2ZjNmQ5NjBmMTdfYzJqUUthT3dvSk5CRHI0a2IyTWZMbFF4VmJadFpsbzZfVG9rZW46S0dLYWJpVnVjb1ZqaEp4Sm9BU2M2YmlKbjlRXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>可以看到使用了批处理以后，比逐条新增效率提高了10倍左右，性能还是不错的。</p><p>不过，我们简单查看一下<code>MybatisPlus</code>源码：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Transactional(rollbackFor = Exception.class)</span>
<span class="line">@Override</span>
<span class="line">public boolean saveBatch(Collection&lt;T&gt; entityList, int batchSize) {</span>
<span class="line">    String sqlStatement = getSqlStatement(SqlMethod.INSERT_ONE);</span>
<span class="line">    return executeBatch(entityList, batchSize, (sqlSession, entity) -&gt; sqlSession.insert(sqlStatement, entity));</span>
<span class="line">}</span>
<span class="line">// ...SqlHelper</span>
<span class="line">public static &lt;E&gt; boolean executeBatch(Class&lt;?&gt; entityClass, Log log, Collection&lt;E&gt; list, int batchSize, BiConsumer&lt;SqlSession, E&gt; consumer) {</span>
<span class="line">    Assert.isFalse(batchSize &lt; 1, &quot;batchSize must not be less than one&quot;);</span>
<span class="line">    return !CollectionUtils.isEmpty(list) &amp;&amp; executeBatch(entityClass, log, sqlSession -&gt; {</span>
<span class="line">        int size = list.size();</span>
<span class="line">        int idxLimit = Math.min(batchSize, size);</span>
<span class="line">        int i = 1;</span>
<span class="line">        for (E element : list) {</span>
<span class="line">            consumer.accept(sqlSession, element);</span>
<span class="line">            if (i == idxLimit) {</span>
<span class="line">                sqlSession.flushStatements();</span>
<span class="line">                idxLimit = Math.min(idxLimit + batchSize, size);</span>
<span class="line">            }</span>
<span class="line">            i++;</span>
<span class="line">        }</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现其实<code>MybatisPlus</code>的批处理是基于<code>PrepareStatement</code>的预编译模式，然后批量提交，最终在数据库执行时还是会有多条insert语句，逐条插入数据。SQL类似这样：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">Preparing: INSERT INTO user ( username, password, phone, info, balance, create_time, update_time ) VALUES ( ?, ?, ?, ?, ?, ?, ? )</span>
<span class="line">Parameters: user_1, 123, 18688190001, &quot;&quot;, 2000, 2023-07-01, 2023-07-01</span>
<span class="line">Parameters: user_2, 123, 18688190002, &quot;&quot;, 2000, 2023-07-01, 2023-07-01</span>
<span class="line">Parameters: user_3, 123, 18688190003, &quot;&quot;, 2000, 2023-07-01, 2023-07-01</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而如果想要得到最佳性能，最好是将多条SQL合并为一条，像这样：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">INSERT INTO user ( username, password, phone, info, balance, create_time, update_time )</span>
<span class="line">VALUES </span>
<span class="line">(user_1, 123, 18688190001, &quot;&quot;, 2000, 2023-07-01, 2023-07-01),</span>
<span class="line">(user_2, 123, 18688190002, &quot;&quot;, 2000, 2023-07-01, 2023-07-01),</span>
<span class="line">(user_3, 123, 18688190003, &quot;&quot;, 2000, 2023-07-01, 2023-07-01),</span>
<span class="line">(user_4, 123, 18688190004, &quot;&quot;, 2000, 2023-07-01, 2023-07-01);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该怎么做呢？</p><p>MySQL的客户端连接参数中有这样的一个参数：<code>rewriteBatchedStatements</code>。顾名思义，就是重写批处理的<code>statement</code>语句。参考文档：</p><p>https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-connp-props-performance-extensions.html#cj-conn-prop_rewriteBatchedStatements</p><p>这个参数的默认值是false，我们需要修改连接参数，将其配置为true</p><p>修改项目中的application.yml文件，在jdbc的url后面添加参数<code>&amp;rewriteBatchedStatements=true</code>:</p><div class="language-YAML line-numbers-mode" data-highlighter="prismjs" data-ext="YAML" data-title="YAML"><pre class="language-YAML"><code><span class="line">spring:</span>
<span class="line">  datasource:</span>
<span class="line">    url: jdbc:mysql://127.0.0.1:3306/mp?useUnicode=true&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;serverTimezone=Asia/Shanghai&amp;rewriteBatchedStatements=true</span>
<span class="line">    driver-class-name: com.mysql.cj.jdbc.Driver</span>
<span class="line">    username: root</span>
<span class="line">    password: MySQL123</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次测试插入10万条数据，可以发现速度有非常明显的提升：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NDM1YjIyNzVmYmIwMDkzZTc5Y2NlZTY3ZjIzNGNjMDdfRTFJbGFUeHNhUkR6ckJYd3VqU0k1bE00TzhwZmRkcndfVG9rZW46VERIY2JrTjdHbzhmODJ4enhPSWNjYnFobkFmXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>在<code>ClientPreparedStatement</code>的<code>executeBatchInternal</code>中，有判断<code>rewriteBatchedStatements</code>值是否为true并重写SQL的功能：</p><p>最终，SQL被重写了：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=YTIzZmQ1YjkwYjU3OTFlOTEzNmFkMDRjMzg1ZGQ5MTJfeFJhaUc2cXFtYUIwTFVNT2FPZG42WGVTMzJLdExPVXZfVG9rZW46QlNNSWJkemhxbzVUdkh4d2FCM2NPQktkbkxlXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><h1 id="_3-扩展功能" tabindex="-1"><a class="header-anchor" href="#_3-扩展功能"><span><strong>3.扩展功能</strong></span></a></h1><h2 id="_3-1-代码生成" tabindex="-1"><a class="header-anchor" href="#_3-1-代码生成"><span><strong>3.1.代码生成</strong></span></a></h2><p>在使用MybatisPlus以后，基础的<code>Mapper</code>、<code>Service</code>、<code>PO</code>代码相对固定，重复编写也比较麻烦。因此MybatisPlus官方提供了代码生成器根据数据库表结构生成<code>PO</code>、<code>Mapper</code>、<code>Service</code>等相关代码。只不过代码生成器同样要编码使用，也很麻烦。</p><p>这里推荐大家使用一款<code>MybatisPlus</code>的插件，它可以基于图形化界面完成<code>MybatisPlus</code>的代码生成，非常简单。</p><h3 id="_3-1-1-安装插件" tabindex="-1"><a class="header-anchor" href="#_3-1-1-安装插件"><span><strong>3.1.1.安装插件</strong></span></a></h3><p>在<code>Idea</code>的plugins市场中搜索并安装<code>MyBatisPlus</code>插件：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=N2NiY2E5NGQwZmM5ZTJiYjVhNzAxMzRhNDkxODVlZDlfOE9YcDNxWWRPc29DVnR3UERjZ0EwN3ZFREFNclpLeGtfVG9rZW46Vjh4MWJzUzBIb1dWN0h4RWluOWNvUmI5bjRlXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>然后重启你的Idea即可使用。</p><h3 id="_3-1-2-使用" tabindex="-1"><a class="header-anchor" href="#_3-1-2-使用"><span><strong>3.1.2.使用</strong></span></a></h3><p>刚好数据库中还有一张address表尚未生成对应的实体和mapper等基础代码。我们利用插件生成一下。 首先需要配置数据库地址，在Idea顶部菜单中，找到<code>other</code>，选择<code>Config Database</code>：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=MjEwYTg0MmJmNWViNzFlNmYzZjM4NmY2Mjk4NGM5NWVfN21qMUdaaXZZZ29CWms5NGdnN1EzTml1S0pieWNhbkNfVG9rZW46SktBNmJPT05Mb29qVUd4aU0xMWNGRHRibnNjXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>在弹出的窗口中填写数据库连接的基本信息：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NzNlMWE5Zjc5Y2ViNDNjYzBlNWRkMzg3NTIyMDliZGRfbnB6SFVKejJCdW53MjBiOG1sem40RWgyMXRmdjdXeHpfVG9rZW46WWtXbWJwZ1VFbzVWcHB4ZU84NGNGZ2FLbjRmXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>点击OK保存。</p><p>然后再次点击Idea顶部菜单中的other，然后选择<code>Code Generator</code>:</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjMwY2I4OGZjZTQ2YTA5MDE4Mjc5MWZjOTg3MjA0ZTJfTHZqYjlOOHB2Q1RsVWJUYmk2Uko0cXlmRURvRjl5UmlfVG9rZW46TzRVY2JINThMb05PWlN4RTNPeWNybWE3bjljXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>在弹出的表单中填写信息：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTViZmIyMjI0ZjE5MDYwOGYzMmU3YmE0MjE1NWI0NjBfcXpWU053c1ZtOXliMHQ4ZjFzcmF2ckxyMzdQempnT2tfVG9rZW46WlRqemI4SGVjb080VWp4Sko0ZWNZR2lTbnRoXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>最终，代码自动生成到指定的位置了：</p><h2 id="_3-2-静态工具" tabindex="-1"><a class="header-anchor" href="#_3-2-静态工具"><span><strong>3.2.静态工具</strong></span></a></h2><p>有的时候Service之间也会相互调用，为了避免出现循环依赖问题，MybatisPlus提供一个静态工具类：<code>Db</code>，其中的一些静态方法与<code>IService</code>中方法签名基本一致，也可以帮助我们实现CRUD功能：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=MjY2NWEwODQ2Y2MyMDE5NzYxYzAxZjQ1MTQxMDVlZjRfZGo4RFlwckhyalVlOGlFTHRxcmlyZWRhbTdpSU5qaWNfVG9rZW46WUFLWmJUQ3VKbzNpelp4SFp3NWNSMWpkbm5lXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>示例：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Test</span>
<span class="line">void testDbGet() {</span>
<span class="line">    User user = Db.getById(1L, User.class);</span>
<span class="line">    System.out.println(user);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">@Test</span>
<span class="line">void testDbList() {</span>
<span class="line">    // 利用Db实现复杂条件查询</span>
<span class="line">    List&lt;User&gt; list = Db.lambdaQuery(User.class)</span>
<span class="line">            .like(User::getUsername, &quot;o&quot;)</span>
<span class="line">            .ge(User::getBalance, 1000)</span>
<span class="line">            .list();</span>
<span class="line">    list.forEach(System.out::println);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">@Test</span>
<span class="line">void testDbUpdate() {</span>
<span class="line">    Db.lambdaUpdate(User.class)</span>
<span class="line">            .set(User::getBalance, 2000)</span>
<span class="line">            .eq(User::getUsername, &quot;Rose&quot;);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求：改造根据id用户查询的接口，查询用户的同时返回用户收货地址列表</p><p>首先，我们要添加一个收货地址的VO对象：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.domain.vo;</span>
<span class="line"></span>
<span class="line">import io.swagger.annotations.ApiModel;</span>
<span class="line">import io.swagger.annotations.ApiModelProperty;</span>
<span class="line">import lombok.Data;</span>
<span class="line"></span>
<span class="line">@Data</span>
<span class="line">@ApiModel(description = &quot;收货地址VO&quot;)</span>
<span class="line">public class AddressVO{</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;id&quot;)</span>
<span class="line">    private Long id;</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;用户ID&quot;)</span>
<span class="line">    private Long userId;</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;省&quot;)</span>
<span class="line">    private String province;</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;市&quot;)</span>
<span class="line">    private String city;</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;县/区&quot;)</span>
<span class="line">    private String town;</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;手机&quot;)</span>
<span class="line">    private String mobile;</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;详细地址&quot;)</span>
<span class="line">    private String street;</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;联系人&quot;)</span>
<span class="line">    private String contact;</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;是否是默认 1默认 0否&quot;)</span>
<span class="line">    private Boolean isDefault;</span>
<span class="line"></span>
<span class="line">    @ApiModelProperty(&quot;备注&quot;)</span>
<span class="line">    private String notes;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，改造原来的UserVO，添加一个地址属性：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NjNlZjVkOTE5YjA0NWQzYWRkMDczYWMzNDRkYjdlMzVfaGRKWjJ4Z00ybFpOVnNoYzZnZTZLSDVYdnJqbVROUUNfVG9rZW46UjZoTGJPWjJSb3hxbFJ4eWdEVGNVOURLblllXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>接下来，修改UserController中根据id查询用户的业务接口：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@GetMapping(&quot;/{id}&quot;)</span>
<span class="line">@ApiOperation(&quot;根据id查询用户&quot;)</span>
<span class="line">public UserVO queryUserById(@PathVariable(&quot;id&quot;) Long userId){</span>
<span class="line">    // 基于自定义service方法查询</span>
<span class="line">    return userService.queryUserAndAddressById(userId);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于查询业务复杂，所以要在service层来实现。首先在IUserService中定义方法：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.service;</span>
<span class="line"></span>
<span class="line">import com.baomidou.mybatisplus.extension.service.IService;</span>
<span class="line">import com.itheima.mp.domain.po.User;</span>
<span class="line">import com.itheima.mp.domain.vo.UserVO;</span>
<span class="line"></span>
<span class="line">public interface IUserService extends IService&lt;User&gt; {</span>
<span class="line">    void deduct(Long id, Integer money);</span>
<span class="line"></span>
<span class="line">    UserVO queryUserAndAddressById(Long userId);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在UserServiceImpl中实现该方法：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Override</span>
<span class="line">public UserVO queryUserAndAddressById(Long userId) {</span>
<span class="line">    // 1.查询用户</span>
<span class="line">    User user = getById(userId);</span>
<span class="line">    if (user == null) {</span>
<span class="line">        return null;</span>
<span class="line">    }</span>
<span class="line">    // 2.查询收货地址</span>
<span class="line">    List&lt;Address&gt; addresses = Db.lambdaQuery(Address.class)</span>
<span class="line">            .eq(Address::getUserId, userId)</span>
<span class="line">            .list();</span>
<span class="line">    // 3.处理vo</span>
<span class="line">    UserVO userVO = BeanUtil.copyProperties(user, UserVO.class);</span>
<span class="line">    userVO.setAddresses(BeanUtil.copyToList(addresses, AddressVO.class));</span>
<span class="line">    return userVO;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在查询地址时，我们采用了Db的静态方法，因此避免了注入AddressService，减少了循环依赖的风险。</p><p>再来实现一个功能：</p><ul><li>根据id批量查询用户，并查询出用户对应的所有地址</li></ul><h2 id="_3-3-逻辑删除" tabindex="-1"><a class="header-anchor" href="#_3-3-逻辑删除"><span>**3.3.**<strong>逻辑删除</strong></span></a></h2><p>对于一些比较重要的数据，我们往往会采用逻辑删除的方案，即：</p><ul><li>在表中添加一个字段标记数据是否被删除</li><li>当删除数据时把标记置为true</li><li>查询时过滤掉标记为true的数据</li></ul><p>一旦采用了逻辑删除，所有的查询和删除逻辑都要跟着变化，非常麻烦。</p><p>为了解决这个问题，MybatisPlus就添加了对逻辑删除的支持。</p><p><strong>注意</strong>，只有MybatisPlus生成的SQL语句才支持自动的逻辑删除，自定义SQL需要自己手动处理逻辑删除。</p><p>例如，我们给<code>address</code>表添加一个逻辑删除字段：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">alter table address add deleted bit default b&#39;0&#39; null comment &#39;逻辑删除&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后给<code>Address</code>实体添加<code>deleted</code>字段：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NTdlNDRjM2Q2NDRkOGYyYmJiMDY0NTFhY2VmYzE5NmZfUTVmbUlQSkpyb2Z3cm5WeDg1RllmblpDRDR0c1F2TWpfVG9rZW46WE9sWGJkMFF5b0lKRm54Vzg0V2NlNnNQbjNkXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>接下来，我们要在<code>application.yml</code>中配置逻辑删除字段：</p><div class="language-YAML line-numbers-mode" data-highlighter="prismjs" data-ext="YAML" data-title="YAML"><pre class="language-YAML"><code><span class="line">mybatis-plus:</span>
<span class="line">  global-config:</span>
<span class="line">    db-config:</span>
<span class="line">      logic-delete-field: deleted # 全局逻辑删除的实体字段名(since 3.3.0,配置后可以忽略不配置步骤2)</span>
<span class="line">      logic-delete-value: 1 # 逻辑已删除值(默认为 1)</span>
<span class="line">      logic-not-delete-value: 0 # 逻辑未删除值(默认为 0)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试： 首先，我们执行一个删除操作：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Test</span>
<span class="line">void testDeleteByLogic() {</span>
<span class="line">    // 删除方法与以前没有区别</span>
<span class="line">    addressService.removeById(59L);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法与普通删除一模一样，但是底层的SQL逻辑变了：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=YzMwNThlMmJlYzBjNmJlOTE2MGRmMDFhYWE1YWY5Y2JfWFFFSFdINmhlb0NYbkdwVnZFdUdCTkVwYnExSFpOR2lfVG9rZW46VHdXaWJOTUlrb1BkNnl4WGYxbWNvamRqbnNiXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>查询一下试试：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Test</span>
<span class="line">void testQuery() {</span>
<span class="line">    List&lt;Address&gt; list = addressService.list();</span>
<span class="line">    list.forEach(System.out::println);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会发现id为59的确实没有查询出来，而且SQL中也对逻辑删除字段做了判断：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NzY2ZjQxMWU2ZmY5NzRkYzY1YWM4ZjU1ZGQyODkyZjhfVzlLV21EZjJMSVV4VllWUnptUXpCbzNPcXFlZU5PdHpfVG9rZW46TmhPWmJVelg1b3FmTWh4QTNzb2NWSkRsbmpiXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>综上， 开启了逻辑删除功能以后，我们就可以像普通删除一样做CRUD，基本不用考虑代码逻辑问题。还是非常方便的。</p><p><strong>注意</strong>： 逻辑删除本身也有自己的问题，比如：</p><ul><li>会导致数据库表垃圾数据越来越多，从而影响查询效率</li><li>SQL中全都需要对逻辑删除字段做判断，影响查询效率</li></ul><p>因此，我不太推荐采用逻辑删除功能，如果数据不能删除，可以采用把数据迁移到其它表的办法。</p><h2 id="_3-3-通用枚举" tabindex="-1"><a class="header-anchor" href="#_3-3-通用枚举"><span><strong>3.3.通用枚举</strong></span></a></h2><p>User类中有一个用户状态字段：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=YjFjNWI4Y2Y4YzNjYjdkN2NmMGYzZTE2YjBhNjEzNWNfd3c3aVdubkViOWpDODcyODJIcTNZUU9LeVh6R0lXckhfVG9rZW46VTNzMWJHQ1Brb0xZYWR4cFViSWNJVEpVbmFlXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>像这种字段我们一般会定义一个枚举，做业务判断的时候就可以直接基于枚举做比较。但是我们数据库采用的是<code>int</code>类型，对应的PO也是<code>Integer</code>。因此业务操作时必须手动把<code>枚举</code>与<code>Integer</code>转换，非常麻烦。</p><p>因此，MybatisPlus提供了一个处理枚举的类型转换器，可以帮我们<strong>把****枚举类型与数据库类型自动转换</strong>。</p><h3 id="_3-3-1-定义枚举" tabindex="-1"><a class="header-anchor" href="#_3-3-1-定义枚举"><span><strong>3.3.1.定义枚举</strong></span></a></h3><p>我们定义一个用户状态的枚举：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=ODM0MTFhNDkwODBmZmU2ZDE2MWU2ZmZjZGQ5ODdhNmZfUHBLWG1kUWZqRThXUzdKVjIwNlJDUGZDTFkyY0dNdEdfVG9rZW46WjdXS2JTNUZOb2dlczF4V05CU2NYa3l1bkpnXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>代码如下：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.enums;</span>
<span class="line"></span>
<span class="line">import com.baomidou.mybatisplus.annotation.EnumValue;</span>
<span class="line">import lombok.Getter;</span>
<span class="line"></span>
<span class="line">@Getter</span>
<span class="line">public enum UserStatus {</span>
<span class="line">    NORMAL(1, &quot;正常&quot;),</span>
<span class="line">    FREEZE(2, &quot;冻结&quot;)</span>
<span class="line">    ;</span>
<span class="line">    private final int value;</span>
<span class="line">    private final String desc;</span>
<span class="line"></span>
<span class="line">    UserStatus(int value, String desc) {</span>
<span class="line">        this.value = value;</span>
<span class="line">        this.desc = desc;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后把<code>User</code>类中的<code>status</code>字段改为<code>UserStatus</code> 类型：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=ODg1YjYzMzZiYWY2OGU5YzlhNmRkMTg0MzIzMzMxOTNfNHhFSEpNUWRTaWdlZDVFUjg4aHJMRU01S2FoczVGY0hfVG9rZW46THUxaGJGV2lwb2ZnbHV4RHlEM2NyamRnbmROXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>要让<code>MybatisPlus</code>处理枚举与数据库类型自动转换，我们必须告诉<code>MybatisPlus</code>，枚举中的哪个字段的值作为数据库值。 <code>MybatisPlus</code>提供了<code>@EnumValue</code>注解来标记枚举属性：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NGRiMzk5NmVjZDM1MjBlZTQ2OGUxM2NlNzhjZDM3MTBfaGV4U2RCQkR2Q1FsOHBZb2g0N1VyNDBqYmt4cXhsOGdfVG9rZW46UkhPeWJ3TU9Rb3NwZUN4OUpLa2N3SkJpbmJlXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><h3 id="_3-3-2-配置枚举处理器" tabindex="-1"><a class="header-anchor" href="#_3-3-2-配置枚举处理器"><span><strong>3.3.2.<strong><strong>配置枚举处理</strong></strong>器</strong></span></a></h3><p>在application.yaml文件中添加配置：</p><div class="language-YAML line-numbers-mode" data-highlighter="prismjs" data-ext="YAML" data-title="YAML"><pre class="language-YAML"><code><span class="line">mybatis-plus:</span>
<span class="line">  configuration:</span>
<span class="line">    default-enum-type-handler: com.baomidou.mybatisplus.core.handlers.MybatisEnumTypeHandler</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-3-测试" tabindex="-1"><a class="header-anchor" href="#_3-3-3-测试"><span><strong>3.3.3.测试</strong></span></a></h3><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Test</span>
<span class="line">void testService() {</span>
<span class="line">    List&lt;User&gt; list = userService.list();</span>
<span class="line">    list.forEach(System.out::println);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终，查询出的<code>User</code>类的<code>status</code>字段会是枚举类型：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=Mzg4YjE4YTQ0MWU2ZGFkNmIyZWFhZGU5ZmJhNjJiMDlfRkJuV0RQdkF0RjhPV2ZnVDN6ZUhuSXlWalZsWkFKdE5fVG9rZW46RkJ0cmJmS0ZDb0g5SHp4VGQ4UWM0WGxQbm9iXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>同时，为了使页面查询结果也是枚举格式，我们需要修改UserVO中的status属性：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NWE2ZTAwYTU4YjhiYmQ0ZmNmOTdiNDllNTEyYzkyNWJfdElaZzBMb0FwZFZHWnJiZU5OMkJyUTlHY1dXeXM3OWxfVG9rZW46SW9Ya2Jrb0pDb0ZSaU14ZjRMNWNqUHdZbkZoXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>并且，在UserStatus枚举中通过<code>@JsonValue</code>注解标记JSON序列化时展示的字段：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=MzgzNTE2YTg3NjE4MzNhNTUxN2VjNjZiYjE1N2ExZDZfR1prQlFwb21IWWRNam9NR1JPYjVBMzU5RmVMRU5GYkhfVG9rZW46QzNaWmJmanBtb2ZUQ1J4a2ozSmMyc2tVbkZoXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>最后，在页面查询，结果如下：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=YjU4N2FjODkxOWM2N2UxMjhkYmMwMTg1MGUzM2IzOWJfWkZqZkE4NlFiWlhOMTRyVU5YMnJIeTQ0Tmx1TTl4Y1lfVG9rZW46Wjd2VGJNd0ZXb1JBRjN4RkpFOGNKN2tPblhjXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><h2 id="_3-4-json类型处理器" tabindex="-1"><a class="header-anchor" href="#_3-4-json类型处理器"><span><strong>3.4.<strong><strong>JSON</strong></strong>类型处理器</strong></span></a></h2><p>数据库的user表中有一个<code>info</code>字段，是JSON类型：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=MDc2YTU5MDhkNjU0ZWM0NWU2ZWE1YTRjNWZmOWM5ZjNfeWFSZmdjQ0xxVDQ5RjFGNTFESmpNelV6dnZzeGxnVVJfVG9rZW46UWl3aGJUcWYzb0xnS2x4NGtST2NrQ3Rrbk9iXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>格式像这样：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre class="language-JSON"><code><span class="line">{&quot;age&quot;: 20, &quot;intro&quot;: &quot;佛系青年&quot;, &quot;gender&quot;: &quot;male&quot;}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>而目前<code>User</code>实体类中却是<code>String</code>类型：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NTA1ZWExMDUxMWVkYjY4NTU1Y2Q2MGRhZjhmOTgzNjJfSXVCUXo4eloxUEVwUWZ1Z2Z0R0praUs4QW9PN0FVOGdfVG9rZW46TkZNRmIxMWhFb21EZlJ4bnRZeWNUUUsxbldiXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>这样一来，我们要读取info中的属性时就非常不方便。如果要方便获取，info的类型最好是一个<code>Map</code>或者实体类。</p><p>而一旦我们把<code>info</code>改为<code>对象</code>类型，就需要在写入数据库时手动转为<code>String</code>，再读取数据库时，手动转换为<code>对象</code>，这会非常麻烦。</p><p>因此MybatisPlus提供了很多特殊类型字段的类型处理器，解决特殊字段类型与数据库类型转换的问题。例如处理JSON就可以使用<code>JacksonTypeHandler</code>处理器。</p><p>接下来，我们就来看看这个处理器该如何使用。</p><h3 id="_3-4-1-定义实体" tabindex="-1"><a class="header-anchor" href="#_3-4-1-定义实体"><span><strong>3.4.1.定义实体</strong></span></a></h3><p>首先，我们定义一个单独实体类来与info字段的属性匹配：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2MzNmQzOTMyMGJlMDZmMDY3ZjY1Y2U1OWM4ODYwNDRfQ0RaT1R6cGFMa2VKUjJSVVRncWdYRnFJNm5TUFNhMWVfVG9rZW46R1JrZmJUZWxCbzhuYnV4WUd4cmNoTEhLbjFBXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>代码如下：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.domain.po;</span>
<span class="line"></span>
<span class="line">import lombok.Data;</span>
<span class="line"></span>
<span class="line">@Data</span>
<span class="line">public class UserInfo {</span>
<span class="line">    private Integer age;</span>
<span class="line">    private String intro;</span>
<span class="line">    private String gender;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-2-使用类型处理器" tabindex="-1"><a class="header-anchor" href="#_3-4-2-使用类型处理器"><span><strong>3.4.2.使用类型处理器</strong></span></a></h3><p>接下来，将User类的info字段修改为UserInfo类型，并声明类型处理器：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=YmU1Y2E0ODVhZjFiZDJjNTYwMGQyYWFkYmYxZjI0ZTlfeHh2TGV1QUpOd3ZpUTVTZFFwZ1F1QjFXcnBtdkNqS2pfVG9rZW46WndrUmJocnZub1RPVlZ4N0ppd2N6cHdLbnlkXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>同时，在User类上添加一个注解，声明自动映射：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=Mzg5ZjU0MTQzMjE5Yjg3NzE3YWVhYjc4NmU0ZjJlYzRfNHpkRkJJWVVLZUg2OVp1bHNFMnhoQVozR2JxVGZhY0RfVG9rZW46UWhlUmJMek5ObzRod2x4WXhkMWMxcU1pbjNlXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>测试可以发现，所有数据都正确封装到UserInfo当中了：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NmI3MDNiYzdkYTdkNDViYjRmYTAzMDgzMGEwOTI0OTZfT0Nld3c1QzNQMTdkNTNQTVo0RkFoYkxDZ0pySXoweU9fVG9rZW46V04wRmJ4Slp4b0JDVXh4QjE3MWMwMlhNbktlXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>同时，为了让页面返回的结果也以对象格式返回，我们要修改UserVO中的info字段：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=MWVhMTk2ZjVhMTFmYWZiMTlkNmY3MDQ1YzMwODYzMWVfaUpLVXFIM2tWZlBpdFB1MWJDb3ZoaXlsWDlScmo1ZE5fVG9rZW46SzR5S2JOVHNmb1BxNFB4WUdYY2M4MDE4blFlXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>此时，在页面查询结果如下：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjM2OGIxYTQzNWFkODIyNzI3NGIyN2M4OGM5MDFmNGNfbTJWajJZVVJMaWd2WUp0MzVQOEpIWHNzSEtDRHRNUVFfVG9rZW46QlZZdWJydktab1poRUl4NllqWmNYVFVibkFlXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><h2 id="_3-5-配置加密-选学" tabindex="-1"><a class="header-anchor" href="#_3-5-配置加密-选学"><span><strong>3.5.配置加密（选学）</strong></span></a></h2><p>目前我们配置文件中的很多参数都是明文，如果开发人员发生流动，很容易导致敏感信息的泄露。所以MybatisPlus支持配置文件的加密和解密功能。</p><p>我们以数据库的用户名和密码为例。</p><h3 id="_3-5-1-生成-秘钥" tabindex="-1"><a class="header-anchor" href="#_3-5-1-生成-秘钥"><span><strong>3.5.1.生成****秘钥</strong></span></a></h3><p>首先，我们利用AES工具生成一个随机秘钥，然后对用户名、密码加密：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp;</span>
<span class="line"></span>
<span class="line">import com.baomidou.mybatisplus.core.toolkit.AES;</span>
<span class="line">import org.junit.jupiter.api.Test;</span>
<span class="line"></span>
<span class="line">class MpDemoApplicationTests {</span>
<span class="line">    @Test</span>
<span class="line">    void contextLoads() {</span>
<span class="line">        // 生成 16 位随机 AES 密钥</span>
<span class="line">        String randomKey = AES.generateRandomKey();</span>
<span class="line">        System.out.println(&quot;randomKey = &quot; + randomKey);</span>
<span class="line"></span>
<span class="line">        // 利用密钥对用户名加密</span>
<span class="line">        String username = AES.encrypt(&quot;root&quot;, randomKey);</span>
<span class="line">        System.out.println(&quot;username = &quot; + username);</span>
<span class="line"></span>
<span class="line">        // 利用密钥对用户名加密</span>
<span class="line">        String password = AES.encrypt(&quot;MySQL123&quot;, randomKey);</span>
<span class="line">        System.out.println(&quot;password = &quot; + password);</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果如下：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code><span class="line">randomKey = 6234633a66fb399f</span>
<span class="line">username = px2bAbnUfiY8K/IgsKvscg==</span>
<span class="line">password = FGvCSEaOuga3ulDAsxw68Q==</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-2-修改配置" tabindex="-1"><a class="header-anchor" href="#_3-5-2-修改配置"><span><strong>3.5.2.修改配置</strong></span></a></h3><p>修改application.yaml文件，把jdbc的用户名、密码修改为刚刚加密生成的密文：</p><div class="language-YAML line-numbers-mode" data-highlighter="prismjs" data-ext="YAML" data-title="YAML"><pre class="language-YAML"><code><span class="line">spring:</span>
<span class="line">  datasource:</span>
<span class="line">    url: jdbc:mysql://127.0.0.1:3306/mp?useUnicode=true&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;serverTimezone=Asia/Shanghai&amp;rewriteBatchedStatements=true</span>
<span class="line">    driver-class-name: com.mysql.cj.jdbc.Driver</span>
<span class="line">    username: mpw:QWWVnk1Oal3258x5rVhaeQ== # 密文要以 mpw:开头</span>
<span class="line">    password: mpw:EUFmeH3cNAzdRGdOQcabWg== # 密文要以 mpw:开头</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-3-测试" tabindex="-1"><a class="header-anchor" href="#_3-5-3-测试"><span><strong>3.5.3.测试</strong></span></a></h3><p>在启动项目的时候，需要把刚才生成的秘钥添加到启动参数中，像这样：</p><p>--mpw.key=6234633a66fb399f</p><p>单元测试的时候不能添加启动参数，所以要在测试类的注解上配置：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NDkxNGJlM2ExNjc5ODUxMGEyMTYwMjg5ZjFlM2UxMDBfQ0cyQ3NtNXZvYUFjNGlFbUFwUG9OdEJWa2hBWVJWdjNfVG9rZW46WlNKeGJFM0Nkb0J5dzN4ckVUdmNLUmhsbkRiXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>然后随意运行一个单元测试，可以发现数据库查询正常。</p><h1 id="_4-插件功能" tabindex="-1"><a class="header-anchor" href="#_4-插件功能"><span><strong>4.插件功能</strong></span></a></h1><p>MybatisPlus提供了很多的插件功能，进一步拓展其功能。目前已有的插件有：</p><ul><li><code>PaginationInnerInterceptor</code>：自动分页</li><li><code>TenantLineInnerInterceptor</code>：多租户</li><li><code>DynamicTableNameInnerInterceptor</code>：动态表名</li><li><code>OptimisticLockerInnerInterceptor</code>：乐观锁</li><li><code>IllegalSQLInnerInterceptor</code>：sql 性能规范</li><li><code>BlockAttackInnerInterceptor</code>：防止全表更新与删除</li></ul><p><strong>注意：</strong> 使用多个分页插件的时候需要注意插件定义顺序，建议使用顺序如下：</p><ul><li>多租户,动态表名</li><li>分页,乐观锁</li><li>sql 性能规范,防止全表更新与删除</li></ul><p>这里我们以分页插件为里来学习插件的用法。</p><h2 id="_4-1-分页插件" tabindex="-1"><a class="header-anchor" href="#_4-1-分页插件"><span><strong>4.1.分页插件</strong></span></a></h2><p>在未引入分页插件的情况下，<code>MybatisPlus</code>是不支持分页功能的，<code>IService</code>和<code>BaseMapper</code>中的分页方法都无法正常起效。 所以，我们必须配置分页插件。</p><h3 id="_4-1-1-配置分页插件" tabindex="-1"><a class="header-anchor" href="#_4-1-1-配置分页插件"><span><strong>4.1.1.配置分页插件</strong></span></a></h3><p>在项目中新建一个配置类：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=YTZmMjg0OGQ2N2U2NWMzM2E5ZGFjMmQ0NzdmZGMyMDhfMEVBcTQwMmlaQklVOTZoMzBIMDdUVGZDQm1ucVNhYWhfVG9rZW46WVpDMWJtMWNib1ViOGd4eEZwUmMxb0p6bkJnXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>其代码如下：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.config;</span>
<span class="line"></span>
<span class="line">import com.baomidou.mybatisplus.annotation.DbType;</span>
<span class="line">import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;</span>
<span class="line">import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;</span>
<span class="line">import org.springframework.context.annotation.Bean;</span>
<span class="line">import org.springframework.context.annotation.Configuration;</span>
<span class="line"></span>
<span class="line">@Configuration</span>
<span class="line">public class MybatisConfig {</span>
<span class="line"></span>
<span class="line">    @Bean</span>
<span class="line">    public MybatisPlusInterceptor mybatisPlusInterceptor() {</span>
<span class="line">        // 初始化核心插件</span>
<span class="line">        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();</span>
<span class="line">        // 添加分页插件</span>
<span class="line">        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));</span>
<span class="line">        return interceptor;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-2-分页-api" tabindex="-1"><a class="header-anchor" href="#_4-1-2-分页-api"><span><strong>4.1.2.分页****API</strong></span></a></h3><p>编写一个分页查询的测试：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Test</span>
<span class="line">void testPageQuery() {</span>
<span class="line">    // 1.分页查询，new Page()的两个参数分别是：页码、每页大小</span>
<span class="line">    Page&lt;User&gt; p = userService.page(new Page&lt;&gt;(2, 2));</span>
<span class="line">    // 2.总条数</span>
<span class="line">    System.out.println(&quot;total = &quot; + p.getTotal());</span>
<span class="line">    // 3.总页数</span>
<span class="line">    System.out.println(&quot;pages = &quot; + p.getPages());</span>
<span class="line">    // 4.数据</span>
<span class="line">    List&lt;User&gt; records = p.getRecords();</span>
<span class="line">    records.forEach(System.out::println);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行的SQL如下：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjVmNTYxYjc5ZDBkNTUwOWZhOWZkODkyN2RjNDEwYjRfMjJKeXFISVU3Z3dBcXkzOE83TllLZUhXVkIzQkIwbGxfVG9rZW46U1hYaWIxOEc5b05zeXB4YmExNWNYMWZvbkNkXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>这里用到了分页参数，Page，即可以支持分页参数，也可以支持排序参数。常见的API如下：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">int pageNo = 1, pageSize = 5;</span>
<span class="line">// 分页参数</span>
<span class="line">Page&lt;User&gt; page = Page.of(pageNo, pageSize);</span>
<span class="line">// 排序参数, 通过OrderItem来指定</span>
<span class="line">page.addOrder(new OrderItem(&quot;balance&quot;, false));</span>
<span class="line"></span>
<span class="line">userService.page(page);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-通用分页实体" tabindex="-1"><a class="header-anchor" href="#_4-2-通用分页实体"><span><strong>4.2.通用分页实体</strong></span></a></h2><p>现在要实现一个用户分页查询的接口，接口规范如下：</p><table><thead><tr><th><strong>参数</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>请求方式</td><td>GET</td></tr><tr><td>请求路径</td><td>/users/page</td></tr><tr><td>请求参数</td><td><code>{ &quot;pageNo&quot;: 1, &quot;pageSize&quot;: 5, &quot;sortBy&quot;: &quot;balance&quot;, &quot;isAsc&quot;: false, &quot;name&quot;: &quot;o&quot;, &quot;status&quot;: 1 }</code></td></tr><tr><td>返回值</td><td><code>{ &quot;total&quot;: 100006, &quot;pages&quot;: 50003, &quot;list&quot;: [ { &quot;id&quot;: 1685100878975279298, &quot;username&quot;: &quot;user_9****&quot;, &quot;info&quot;: { &quot;age&quot;: 24, &quot;intro&quot;: &quot;英文老师&quot;, &quot;gender&quot;: &quot;female&quot; }, &quot;status&quot;: &quot;正常&quot;, &quot;balance&quot;: 2000 } ] }</code></td></tr><tr><td>特殊说明</td><td>如果排序字段为空，默认按照更新时间排序排序字段不为空，则按照排序字段排序</td></tr></tbody></table><p>这里需要定义3个实体：</p><ul><li><code>UserQuery</code>：分页查询条件的实体，包含分页、排序参数、过滤条件</li><li><code>PageDTO</code>：分页结果实体，包含总条数、总页数、当前页数据</li><li><code>UserVO</code>：用户页面视图实体</li></ul><h3 id="_4-2-1-实体" tabindex="-1"><a class="header-anchor" href="#_4-2-1-实体"><span><strong>4.2.1.实体</strong></span></a></h3><p>由于UserQuery之前已经定义过了，并且其中已经包含了过滤条件，具体代码如下：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.domain.query;</span>
<span class="line"></span>
<span class="line">import io.swagger.annotations.ApiModel;</span>
<span class="line">import io.swagger.annotations.ApiModelProperty;</span>
<span class="line">import lombok.Data;</span>
<span class="line"></span>
<span class="line">@Data</span>
<span class="line">@ApiModel(description = &quot;用户查询条件实体&quot;)</span>
<span class="line">public class UserQuery {</span>
<span class="line">    @ApiModelProperty(&quot;用户名关键字&quot;)</span>
<span class="line">    private String name;</span>
<span class="line">    @ApiModelProperty(&quot;用户状态：1-正常，2-冻结&quot;)</span>
<span class="line">    private Integer status;</span>
<span class="line">    @ApiModelProperty(&quot;余额最小值&quot;)</span>
<span class="line">    private Integer minBalance;</span>
<span class="line">    @ApiModelProperty(&quot;余额最大值&quot;)</span>
<span class="line">    private Integer maxBalance;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中缺少的仅仅是分页条件，而分页条件不仅仅用户分页查询需要，以后其它业务也都有分页查询的需求。因此建议将分页查询条件单独定义为一个<code>PageQuery</code>实体：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2M0ZDU2ZGRhMTJhNmQ0OGQ2MGFkZGY3M2IwYjE5ZGNfZDFTa0tGWnA4eEtnVmZ4aTFpS28zdDRkN2ZUb2dCS0lfVG9rZW46RlFtSGJmbnBYbzlDeG14Tk45OWNlTHh4bkcyXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p><code>PageQuery</code>是前端提交的查询参数，一般包含四个属性：</p><ul><li><code>pageNo</code>：页码</li><li><code>pageSize</code>：每页数据条数</li><li><code>sortBy</code>：排序字段</li><li><code>isAsc</code>：是否升序</li></ul><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Data</span>
<span class="line">@ApiModel(description = &quot;分页查询实体&quot;)</span>
<span class="line">public class PageQuery {</span>
<span class="line">    @ApiModelProperty(&quot;页码&quot;)</span>
<span class="line">    private Long pageNo;</span>
<span class="line">    @ApiModelProperty(&quot;页码&quot;)</span>
<span class="line">    private Long pageSize;</span>
<span class="line">    @ApiModelProperty(&quot;排序字段&quot;)</span>
<span class="line">    private String sortBy;</span>
<span class="line">    @ApiModelProperty(&quot;是否升序&quot;)</span>
<span class="line">    private Boolean isAsc;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，让我们的UserQuery继承这个实体：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.domain.query;</span>
<span class="line"></span>
<span class="line">import io.swagger.annotations.ApiModel;</span>
<span class="line">import io.swagger.annotations.ApiModelProperty;</span>
<span class="line">import lombok.Data;</span>
<span class="line">import lombok.EqualsAndHashCode;</span>
<span class="line"></span>
<span class="line">@EqualsAndHashCode(callSuper = true)</span>
<span class="line">@Data</span>
<span class="line">@ApiModel(description = &quot;用户查询条件实体&quot;)</span>
<span class="line">public class UserQuery extends PageQuery {</span>
<span class="line">    @ApiModelProperty(&quot;用户名关键字&quot;)</span>
<span class="line">    private String name;</span>
<span class="line">    @ApiModelProperty(&quot;用户状态：1-正常，2-冻结&quot;)</span>
<span class="line">    private Integer status;</span>
<span class="line">    @ApiModelProperty(&quot;余额最小值&quot;)</span>
<span class="line">    private Integer minBalance;</span>
<span class="line">    @ApiModelProperty(&quot;余额最大值&quot;)</span>
<span class="line">    private Integer maxBalance;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回值的用户实体沿用之前定一个<code>UserVO</code>实体：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=NmY3MjI1NGFiNWU4NTQ2NWYyZjRkNmMzZTQ2YjA3M2VfaW5tU0ZPWmY1a0xHdGZ4M05JdWtJOWN0TVlqc2hKakxfVG9rZW46UW5Hb2I4ZUZPbzlWWnp4UXZjZWM3aXBIbkFnXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>最后，则是分页实体PageDTO:</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=MzFhMTkyNzA2ZmZkMTVjZDVjNzI3MjFiODJjZTk4MTlfV2ljekNLZ1NzNEI4TmJ2NnJwZ3ZDNmc1YWpna2lPdHFfVG9rZW46VFI1MWI3NVJxb1VNejh4dU9NYmNsWWVBbk5kXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><p>代码如下：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.domain.dto;</span>
<span class="line"></span>
<span class="line">import io.swagger.annotations.ApiModel;</span>
<span class="line">import io.swagger.annotations.ApiModelProperty;</span>
<span class="line">import lombok.Data;</span>
<span class="line"></span>
<span class="line">import java.util.List;</span>
<span class="line"></span>
<span class="line">@Data</span>
<span class="line">@ApiModel(description = &quot;分页结果&quot;)</span>
<span class="line">public class PageDTO&lt;T&gt; {</span>
<span class="line">    @ApiModelProperty(&quot;总条数&quot;)</span>
<span class="line">    private Long total;</span>
<span class="line">    @ApiModelProperty(&quot;总页数&quot;)</span>
<span class="line">    private Long pages;</span>
<span class="line">    @ApiModelProperty(&quot;集合&quot;)</span>
<span class="line">    private List&lt;T&gt; list;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-2-开发接口" tabindex="-1"><a class="header-anchor" href="#_4-2-2-开发接口"><span><strong>4.2.2.开发接口</strong></span></a></h3><p>我们在<code>UserController</code>中定义分页查询用户的接口：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.controller;</span>
<span class="line"></span>
<span class="line">import com.itheima.mp.domain.dto.PageDTO;</span>
<span class="line">import com.itheima.mp.domain.query.PageQuery;</span>
<span class="line">import com.itheima.mp.domain.vo.UserVO;</span>
<span class="line">import com.itheima.mp.service.UserService;</span>
<span class="line">import lombok.RequiredArgsConstructor;</span>
<span class="line">import org.springframework.web.bind.annotation.GetMapping;</span>
<span class="line">import org.springframework.web.bind.annotation.RequestMapping;</span>
<span class="line">import org.springframework.web.bind.annotation.RestController;</span>
<span class="line"></span>
<span class="line">@RestController</span>
<span class="line">@RequestMapping(&quot;users&quot;)</span>
<span class="line">@RequiredArgsConstructor</span>
<span class="line">public class UserController {</span>
<span class="line"></span>
<span class="line">    private final UserService userService;</span>
<span class="line"></span>
<span class="line">    @GetMapping(&quot;/page&quot;)</span>
<span class="line">    public PageDTO&lt;UserVO&gt; queryUsersPage(UserQuery query){</span>
<span class="line">        return userService.queryUsersPage(query);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 。。。 略</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在<code>IUserService</code>中创建<code>queryUsersPage</code>方法：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">PageDTO&lt;UserVO&gt; queryUsersPage(PageQuery query);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接下来，在UserServiceImpl中实现该方法：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Override</span>
<span class="line">public PageDTO&lt;UserVO&gt; queryUsersPage(PageQuery query) {</span>
<span class="line">    // 1.构建条件</span>
<span class="line">    // 1.1.分页条件</span>
<span class="line">    Page&lt;User&gt; page = Page.of(query.getPageNo(), query.getPageSize());</span>
<span class="line">    // 1.2.排序条件</span>
<span class="line">    if (query.getSortBy() != null) {</span>
<span class="line">        page.addOrder(new OrderItem(query.getSortBy(), query.getIsAsc()));</span>
<span class="line">    }else{</span>
<span class="line">        // 默认按照更新时间排序</span>
<span class="line">        page.addOrder(new OrderItem(&quot;update_time&quot;, false));</span>
<span class="line">    }</span>
<span class="line">    // 2.查询</span>
<span class="line">    page(page);</span>
<span class="line">    // 3.数据非空校验</span>
<span class="line">    List&lt;User&gt; records = page.getRecords();</span>
<span class="line">    if (records == null || records.size() &lt;= 0) {</span>
<span class="line">        // 无数据，返回空结果</span>
<span class="line">        return new PageDTO&lt;&gt;(page.getTotal(), page.getPages(), Collections.emptyList());</span>
<span class="line">    }</span>
<span class="line">    // 4.有数据，转换</span>
<span class="line">    List&lt;UserVO&gt; list = BeanUtil.copyToList(records, UserVO.class);</span>
<span class="line">    // 5.封装返回</span>
<span class="line">    return new PageDTO&lt;UserVO&gt;(page.getTotal(), page.getPages(), list);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动项目，在页面查看：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=MjVmNGY3ZTBlMThiNTZmOTNkMjI3NGQxMzNmZjZmYzVfcFhCOFVEemRqR1I2bUNmaXU1R3VPczZFU3VtRUFxWThfVG9rZW46VFZUN2JsckpVb0ZmYVJ4eDhrVmNrdDFMbm9oXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><h3 id="_4-2-3-改造pagequery实体" tabindex="-1"><a class="header-anchor" href="#_4-2-3-改造pagequery实体"><span><strong>4.2.3.改造PageQuery实体</strong></span></a></h3><p>在刚才的代码中，从<code>PageQuery</code>到<code>MybatisPlus</code>的<code>Page</code>之间转换的过程还是比较麻烦的。</p><p>我们完全可以在<code>PageQuery</code>这个实体中定义一个工具方法，简化开发。 像这样：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.domain.query;</span>
<span class="line"></span>
<span class="line">import com.baomidou.mybatisplus.core.metadata.OrderItem;</span>
<span class="line">import com.baomidou.mybatisplus.extension.plugins.pagination.Page;</span>
<span class="line">import lombok.Data;</span>
<span class="line"></span>
<span class="line">@Data</span>
<span class="line">public class PageQuery {</span>
<span class="line">    private Integer pageNo;</span>
<span class="line">    private Integer pageSize;</span>
<span class="line">    private String sortBy;</span>
<span class="line">    private Boolean isAsc;</span>
<span class="line"></span>
<span class="line">    public &lt;T&gt;  Page&lt;T&gt; toMpPage(OrderItem ... orders){</span>
<span class="line">        // 1.分页条件</span>
<span class="line">        Page&lt;T&gt; p = Page.of(pageNo, pageSize);</span>
<span class="line">        // 2.排序条件</span>
<span class="line">        // 2.1.先看前端有没有传排序字段</span>
<span class="line">        if (sortBy != null) {</span>
<span class="line">            p.addOrder(new OrderItem(sortBy, isAsc));</span>
<span class="line">            return p;</span>
<span class="line">        }</span>
<span class="line">        // 2.2.再看有没有手动指定排序字段</span>
<span class="line">        if(orders != null){</span>
<span class="line">            p.addOrder(orders);</span>
<span class="line">        }</span>
<span class="line">        return p;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public &lt;T&gt; Page&lt;T&gt; toMpPage(String defaultSortBy, boolean isAsc){</span>
<span class="line">        return this.toMpPage(new OrderItem(defaultSortBy, isAsc));</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public &lt;T&gt; Page&lt;T&gt; toMpPageDefaultSortByCreateTimeDesc() {</span>
<span class="line">        return toMpPage(&quot;create_time&quot;, false);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public &lt;T&gt; Page&lt;T&gt; toMpPageDefaultSortByUpdateTimeDesc() {</span>
<span class="line">        return toMpPage(&quot;update_time&quot;, false);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们在开发也时就可以省去对从<code>PageQuery</code>到<code>Page</code>的的转换：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">// 1.构建条件</span>
<span class="line">Page&lt;User&gt; page = query.toMpPageDefaultSortByCreateTimeDesc();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-4-改造pagedto实体" tabindex="-1"><a class="header-anchor" href="#_4-2-4-改造pagedto实体"><span><strong>4.2.4.改造PageDTO实体</strong></span></a></h3><p>在查询出分页结果后，数据的非空校验，数据的vo转换都是模板代码，编写起来很麻烦。</p><p>我们完全可以将其封装到PageDTO的工具方法中，简化整个过程：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">package com.itheima.mp.domain.dto;</span>
<span class="line"></span>
<span class="line">import cn.hutool.core.bean.BeanUtil;</span>
<span class="line">import com.baomidou.mybatisplus.extension.plugins.pagination.Page;</span>
<span class="line">import lombok.AllArgsConstructor;</span>
<span class="line">import lombok.Data;</span>
<span class="line">import lombok.NoArgsConstructor;</span>
<span class="line"></span>
<span class="line">import java.util.Collections;</span>
<span class="line">import java.util.List;</span>
<span class="line">import java.util.function.Function;</span>
<span class="line">import java.util.stream.Collectors;</span>
<span class="line"></span>
<span class="line">@Data</span>
<span class="line">@NoArgsConstructor</span>
<span class="line">@AllArgsConstructor</span>
<span class="line">public class PageDTO&lt;V&gt; {</span>
<span class="line">    private Long total;</span>
<span class="line">    private Long pages;</span>
<span class="line">    private List&lt;V&gt; list;</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 返回空分页结果</span>
<span class="line">     * @param p MybatisPlus的分页结果</span>
<span class="line">     * @param &lt;V&gt; 目标VO类型</span>
<span class="line">     * @param &lt;P&gt; 原始PO类型</span>
<span class="line">     * @return VO的分页对象</span>
<span class="line">     */</span>
<span class="line">    public static &lt;V, P&gt; PageDTO&lt;V&gt; empty(Page&lt;P&gt; p){</span>
<span class="line">        return new PageDTO&lt;&gt;(p.getTotal(), p.getPages(), Collections.emptyList());</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 将MybatisPlus分页结果转为 VO分页结果</span>
<span class="line">     * @param p MybatisPlus的分页结果</span>
<span class="line">     * @param voClass 目标VO类型的字节码</span>
<span class="line">     * @param &lt;V&gt; 目标VO类型</span>
<span class="line">     * @param &lt;P&gt; 原始PO类型</span>
<span class="line">     * @return VO的分页对象</span>
<span class="line">     */</span>
<span class="line">    public static &lt;V, P&gt; PageDTO&lt;V&gt; of(Page&lt;P&gt; p, Class&lt;V&gt; voClass) {</span>
<span class="line">        // 1.非空校验</span>
<span class="line">        List&lt;P&gt; records = p.getRecords();</span>
<span class="line">        if (records == null || records.size() &lt;= 0) {</span>
<span class="line">            // 无数据，返回空结果</span>
<span class="line">            return empty(p);</span>
<span class="line">        }</span>
<span class="line">        // 2.数据转换</span>
<span class="line">        List&lt;V&gt; vos = BeanUtil.copyToList(records, voClass);</span>
<span class="line">        // 3.封装返回</span>
<span class="line">        return new PageDTO&lt;&gt;(p.getTotal(), p.getPages(), vos);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 将MybatisPlus分页结果转为 VO分页结果，允许用户自定义PO到VO的转换方式</span>
<span class="line">     * @param p MybatisPlus的分页结果</span>
<span class="line">     * @param convertor PO到VO的转换函数</span>
<span class="line">     * @param &lt;V&gt; 目标VO类型</span>
<span class="line">     * @param &lt;P&gt; 原始PO类型</span>
<span class="line">     * @return VO的分页对象</span>
<span class="line">     */</span>
<span class="line">    public static &lt;V, P&gt; PageDTO&lt;V&gt; of(Page&lt;P&gt; p, Function&lt;P, V&gt; convertor) {</span>
<span class="line">        // 1.非空校验</span>
<span class="line">        List&lt;P&gt; records = p.getRecords();</span>
<span class="line">        if (records == null || records.size() &lt;= 0) {</span>
<span class="line">            // 无数据，返回空结果</span>
<span class="line">            return empty(p);</span>
<span class="line">        }</span>
<span class="line">        // 2.数据转换</span>
<span class="line">        List&lt;V&gt; vos = records.stream().map(convertor).collect(Collectors.toList());</span>
<span class="line">        // 3.封装返回</span>
<span class="line">        return new PageDTO&lt;&gt;(p.getTotal(), p.getPages(), vos);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终，业务层的代码可以简化为：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Override</span>
<span class="line">public PageDTO&lt;UserVO&gt; queryUserByPage(PageQuery query) {</span>
<span class="line">    // 1.构建条件</span>
<span class="line">    Page&lt;User&gt; page = query.toMpPageDefaultSortByCreateTimeDesc();</span>
<span class="line">    // 2.查询</span>
<span class="line">    page(page);</span>
<span class="line">    // 3.封装返回</span>
<span class="line">    return PageDTO.of(page, UserVO.class);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是希望自定义PO到VO的转换过程，可以这样做：</p><div class="language-Java line-numbers-mode" data-highlighter="prismjs" data-ext="Java" data-title="Java"><pre class="language-Java"><code><span class="line">@Override</span>
<span class="line">public PageDTO&lt;UserVO&gt; queryUserByPage(PageQuery query) {</span>
<span class="line">    // 1.构建条件</span>
<span class="line">    Page&lt;User&gt; page = query.toMpPageDefaultSortByCreateTimeDesc();</span>
<span class="line">    // 2.查询</span>
<span class="line">    page(page);</span>
<span class="line">    // 3.封装返回</span>
<span class="line">    return PageDTO.of(page, user -&gt; {</span>
<span class="line">        // 拷贝属性到VO</span>
<span class="line">        UserVO vo = BeanUtil.copyProperties(user, UserVO.class);</span>
<span class="line">        // 用户名脱敏</span>
<span class="line">        String username = vo.getUsername();</span>
<span class="line">        vo.setUsername(username.substring(0, username.length() - 2) + &quot;**&quot;);</span>
<span class="line">        return vo;</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终查询的结果如下：</p><p><img src="https://b11et3un53m.feishu.cn/space/api/box/stream/download/asynccode/?code=Mjc1NjE2NzA1NGM4YzEwNzQ0YWIyZWRjZTIxYWE2MjdfazE5emFzRjREcGtyVWs4Rm40TkpZa1Y2MUk4STNKbTdfVG9rZW46QmdjWWJjYkpObzFMY014b2tQWWM5OGFybmJnXzE3NDg3OTM4MzU6MTc0ODc5NzQzNV9WNA" alt="img"></p><h1 id="_5-作业" tabindex="-1"><a class="header-anchor" href="#_5-作业"><span><strong>5.作业</strong></span></a></h1><p>尝试改造项目一中的<code>Service</code>层和<code>Mapper</code>层实现，用<code>MybatisPlus</code>代替单表的CRUD</p>`,379);function Z(j,I){const n=t("if");return r(),p("div",null,[u,s("table",null,[o,s("tbody",null,[v,m,b,g,s("tr",null,[h,M,y,N,s("td",null,[e("举例：NOT_NULL insert into table_a("),a(n,{test:"columnProperty != null"},{default:i(()=>[e("column")]),_:1}),e(") values ("),a(n,{test:"columnProperty != null"},{default:i(()=>[e("#{columnProperty}")]),_:1}),e(")")])]),U,s("tr",null,[T,q,z,V,s("td",null,[e("举例：NOT_EMPTY where "),a(n,{test:"columnProperty != null and columnProperty!=''"},{default:i(()=>[e("column=#{columnProperty}")]),_:1})])]),f,W,O,J,D,S])]),x])}const Q=d(c,[["render",Z],["__file","MyBatis Plus.html.vue"]]),P=JSON.parse('{"path":"/Java/MyBatis%20Plus.html","title":"1.快速入门","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.1.环境准备","slug":"_1-1-环境准备","link":"#_1-1-环境准备","children":[]},{"level":2,"title":"1.2.快速开始","slug":"_1-2-快速开始","link":"#_1-2-快速开始","children":[{"level":3,"title":"1.2.1引入依赖","slug":"_1-2-1引入依赖","link":"#_1-2-1引入依赖","children":[]},{"level":3,"title":"1.2.2.定义Mapper","slug":"_1-2-2-定义mapper","link":"#_1-2-2-定义mapper","children":[]},{"level":3,"title":"1.2.3.测试","slug":"_1-2-3-测试","link":"#_1-2-3-测试","children":[]}]},{"level":2,"title":"**1.3.**常见注解","slug":"_1-3-常见注解","link":"#_1-3-常见注解","children":[{"level":3,"title":"**1.3.1.@**TableName","slug":"_1-3-1-tablename","link":"#_1-3-1-tablename","children":[]},{"level":3,"title":"1.3.2.@TableId","slug":"_1-3-2-tableid","link":"#_1-3-2-tableid","children":[]},{"level":3,"title":"1.3.3.@TableField","slug":"_1-3-3-tablefield","link":"#_1-3-3-tablefield","children":[]}]},{"level":2,"title":"1.4.常见配置","slug":"_1-4-常见配置","link":"#_1-4-常见配置","children":[]},{"level":2,"title":"**2.1.**条件构造器","slug":"_2-1-条件构造器","link":"#_2-1-条件构造器","children":[{"level":3,"title":"2.1.1.QueryWrapper","slug":"_2-1-1-querywrapper","link":"#_2-1-1-querywrapper","children":[]},{"level":3,"title":"2.1.2.UpdateWrapper","slug":"_2-1-2-updatewrapper","link":"#_2-1-2-updatewrapper","children":[]},{"level":3,"title":"**2.1.3.**LambdaQueryWrapper","slug":"_2-1-3-lambdaquerywrapper","link":"#_2-1-3-lambdaquerywrapper","children":[]}]},{"level":2,"title":"2.2**.自定义SQL**","slug":"_2-2-自定义sql","link":"#_2-2-自定义sql","children":[{"level":3,"title":"2.2.1.基本用法","slug":"_2-2-1-基本用法","link":"#_2-2-1-基本用法","children":[]},{"level":3,"title":"2.2.2.多表关联","slug":"_2-2-2-多表关联","link":"#_2-2-2-多表关联","children":[]}]},{"level":2,"title":"**2.3.**Service接口","slug":"_2-3-service接口","link":"#_2-3-service接口","children":[{"level":3,"title":"**2.3.1.**CRUD","slug":"_2-3-1-crud","link":"#_2-3-1-crud","children":[]},{"level":3,"title":"2.3.2.基本用法","slug":"_2-3-2-基本用法","link":"#_2-3-2-基本用法","children":[]},{"level":3,"title":"**2.3.3.**Lambda","slug":"_2-3-3-lambda","link":"#_2-3-3-lambda","children":[]},{"level":3,"title":"**2.3.4.**批量新增","slug":"_2-3-4-批量新增","link":"#_2-3-4-批量新增","children":[]}]},{"level":2,"title":"3.1.代码生成","slug":"_3-1-代码生成","link":"#_3-1-代码生成","children":[{"level":3,"title":"3.1.1.安装插件","slug":"_3-1-1-安装插件","link":"#_3-1-1-安装插件","children":[]},{"level":3,"title":"3.1.2.使用","slug":"_3-1-2-使用","link":"#_3-1-2-使用","children":[]}]},{"level":2,"title":"3.2.静态工具","slug":"_3-2-静态工具","link":"#_3-2-静态工具","children":[]},{"level":2,"title":"**3.3.**逻辑删除","slug":"_3-3-逻辑删除","link":"#_3-3-逻辑删除","children":[]},{"level":2,"title":"3.3.通用枚举","slug":"_3-3-通用枚举","link":"#_3-3-通用枚举","children":[{"level":3,"title":"3.3.1.定义枚举","slug":"_3-3-1-定义枚举","link":"#_3-3-1-定义枚举","children":[]},{"level":3,"title":"3.3.2.配置枚举处理器","slug":"_3-3-2-配置枚举处理器","link":"#_3-3-2-配置枚举处理器","children":[]},{"level":3,"title":"3.3.3.测试","slug":"_3-3-3-测试","link":"#_3-3-3-测试","children":[]}]},{"level":2,"title":"3.4.JSON类型处理器","slug":"_3-4-json类型处理器","link":"#_3-4-json类型处理器","children":[{"level":3,"title":"3.4.1.定义实体","slug":"_3-4-1-定义实体","link":"#_3-4-1-定义实体","children":[]},{"level":3,"title":"3.4.2.使用类型处理器","slug":"_3-4-2-使用类型处理器","link":"#_3-4-2-使用类型处理器","children":[]}]},{"level":2,"title":"3.5.配置加密（选学）","slug":"_3-5-配置加密-选学","link":"#_3-5-配置加密-选学","children":[{"level":3,"title":"3.5.1.生成****秘钥","slug":"_3-5-1-生成-秘钥","link":"#_3-5-1-生成-秘钥","children":[]},{"level":3,"title":"3.5.2.修改配置","slug":"_3-5-2-修改配置","link":"#_3-5-2-修改配置","children":[]},{"level":3,"title":"3.5.3.测试","slug":"_3-5-3-测试","link":"#_3-5-3-测试","children":[]}]},{"level":2,"title":"4.1.分页插件","slug":"_4-1-分页插件","link":"#_4-1-分页插件","children":[{"level":3,"title":"4.1.1.配置分页插件","slug":"_4-1-1-配置分页插件","link":"#_4-1-1-配置分页插件","children":[]},{"level":3,"title":"4.1.2.分页****API","slug":"_4-1-2-分页-api","link":"#_4-1-2-分页-api","children":[]}]},{"level":2,"title":"4.2.通用分页实体","slug":"_4-2-通用分页实体","link":"#_4-2-通用分页实体","children":[{"level":3,"title":"4.2.1.实体","slug":"_4-2-1-实体","link":"#_4-2-1-实体","children":[]},{"level":3,"title":"4.2.2.开发接口","slug":"_4-2-2-开发接口","link":"#_4-2-2-开发接口","children":[]},{"level":3,"title":"4.2.3.改造PageQuery实体","slug":"_4-2-3-改造pagequery实体","link":"#_4-2-3-改造pagequery实体","children":[]},{"level":3,"title":"4.2.4.改造PageDTO实体","slug":"_4-2-4-改造pagedto实体","link":"#_4-2-4-改造pagedto实体","children":[]}]}],"git":{"updatedTime":1755344722000,"contributors":[{"name":"袁果锅","email":"2914310412@qq.com","commits":3}]},"filePathRelative":"Java/MyBatis Plus.md","excerpt":"<p>大家学习中如果碰到困难，可以加入**<a href=\\"https://b11et3un53m.feishu.cn/wiki/M9LKwYAlHiZoyhkB5iKcgOh1nmc\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">黑马智学伴侣</a>**寻求帮助，有学习交流群，老师、同学在线答疑。还有独享的企业级项目，避免与人撞车。</p>\\n<p>本篇学习文档对应B站视频：</p>\\n<p>暂时无法在飞书文档外展示此内容</p>\\n<p>大家在日常开发中应该能发现，单表的CRUD功能代码重复度很高，也没有什么难度。而这部分代码量往往比较大，开发起来比较费时。</p>"}');export{Q as comp,P as data};
