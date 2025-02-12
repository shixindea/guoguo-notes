import comp from "F:/my-project/guoguo-notes/doc-vuepress/.vuepress/.temp/pages/袁果锅生态/他人项目组织规范.html.vue"
const data = JSON.parse("{\"path\":\"/%E8%A2%81%E6%9E%9C%E9%94%85%E7%94%9F%E6%80%81/%E4%BB%96%E4%BA%BA%E9%A1%B9%E7%9B%AE%E7%BB%84%E7%BB%87%E8%A7%84%E8%8C%83.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"4 项目组织规范\",\"slug\":\"_4-项目组织规范\",\"link\":\"#_4-项目组织规范\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"袁果锅生态/他人项目组织规范.md\",\"excerpt\":\"<h2>4 项目组织规范</h2>\\n<p>项目组织规范定义了如何组织一个前端项目, 例如项目的命名、项目的文件结构、版本号规范等等。尤其对于开源项目，规范化的项目组织就更重要了。</p>\\n<h4>4.1 通用的项目组织规范</h4>\\n<p>一个典型的项目组织规范如下:</p>\\n<ul>\\n<li>\\n<p>README.md: 项目说明, 这个是最重要。你必须在这里提供关于项目的关键信息或者相关信息的入口. 一般包含下列信息:</p>\\n<ul>\\n<li>简要描述、项目主要特性</li>\\n<li>运行环境/依赖、安装和构建、测试指南</li>\\n<li>简单示例代码</li>\\n<li>文档或文档入口, 其他版本或相关资源入口</li>\\n<li>联系方式、讨论群</li>\\n<li>许可、贡献/开发指南</li>\\n</ul>\\n</li>\\n<li>\\n<p>CHANGELOG.md: 放置每个版本的变动内容, 通常要描述每个版本变更的内容。方便使用者确定应该使用哪个版本. 关于CHANGELOG的规范可以参考keep a changelog</p>\\n</li>\\n<li>\\n<p>package.json: 前端项目必须. 描述当前的版本、可用的命令、包名、依赖、环境约束、项目配置等信息.</p>\\n</li>\\n<li>\\n<p>.gitignore: 忽略不必要的文件，避免将自动生成的文件提交到版本库</p>\\n</li>\\n<li>\\n<p>.gitattributes: git配置，有一些跨平台差异的行为可能需要在这里配置一下，如换行规则</p>\\n</li>\\n<li>\\n<p>docs/: 项目的细化文档, 可选.</p>\\n</li>\\n<li>\\n<p>examples/: 项目的示例代码，可选.</p>\\n</li>\\n<li>\\n<p>build: 项目工具类脚本放置在这里，非必须。如果使用统一构建工具，则没有这个目录</p>\\n</li>\\n<li>\\n<p>dist/: 项目构建结果输出目录</p>\\n</li>\\n<li>\\n<p>src/: 源代码目录</p>\\n</li>\\n<li>\\n<p>tests/: 单元测试目录. 按照Jest规范, <code>__tests__</code>目录通常和被测试的模块在同一个父目录下, 例如: /src  <strong>tests</strong>/    index.ts    a.ts  index.ts  a.ts 复制代码</p>\\n</li>\\n<li>\\n<p>tests: 全局的测试目录，通常放应用的集成测试或E2E测试等用例</p>\\n</li>\\n<li>\\n<p>.env*: 项目中我们通常会使用</p>\\n<div class=\\\"language-text\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre class=\\\"language-text\\\"><code><span class=\\\"line\\\">环境变量</span>\\n<span class=\\\"line\\\"></span></code></pre></div><p>来影响应用在不同运行环境下的行为. 可以通过dotEnv来从文件中读取环境变量. 通常有三个文件: 基本上这些文件的变动的频率很少，团队成员应该不要随意变动，以免影响其他成员。所以通常会使用</p>\\n<div class=\\\"language-text\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre class=\\\"language-text\\\"><code><span class=\\\"line\\\">.env.*.local</span>\\n<span class=\\\"line\\\"></span></code></pre></div><p>文件来覆盖上述的配置, 另外会设置版本库来忽略</p>\\n<div class=\\\"language-text\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\" data-title=\\\"text\\\"><pre class=\\\"language-text\\\"><code><span class=\\\"line\\\">*.local</span>\\n<span class=\\\"line\\\"></span></code></pre></div><p>文件.</p>\\n<ul>\\n<li><code>.env</code> 通用的环境变量</li>\\n<li><code>.env.development</code> 开发环境的环境变量</li>\\n<li><code>.env.production</code> 生成环境的环境变量</li>\\n</ul>\\n</li>\\n</ul>\"}")
export { comp, data }
