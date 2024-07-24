---
title: git 笔记

date: 2023-9-23
tags:
 - git
 - 笔记
categories:
 -  居家篇
---


## 插件安装   vue-tsc   `== >` pnpm lint:fix

安装：  npm i vue-tsc -D

安装：  npm install --save prettier -D

用法：vue-tsc --noEmit && vite build

Vue 3 命令行类型检查工具基于 IDE 插件 [Volar](https://github.com/vuejs/language-tools)。



> package.json 中添加

```diff
  "scripts": {
    "dev": "vite",
    "build": "run-p type-check \"build-only {@}\" --",
    "preview": "vite preview",
    "build-only": "vite build",
    "type-check": "vue-tsc --build --force",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    "format": "prettier --write src/",
+    "lint:fix": "vue-tsc --noEmit && prettier --write .",
+    "gitcz": "git cz"
  },
```

## 插件安装   `== >`  pnpm gitcz

> 只需要简单的三个步骤:



[全局安装](https://cz-git.qbb.sh/zh/guide/#全局使用) `commitizen`,如此一来可以快速使用 `cz` 或 `git cz` 命令进行启动。



```
npm install -g commitizen
```

#### 步骤 1: 下载依赖

```
npm install -D cz-git
```

#### 步骤 2: 修改 `package.json` 添加 `config` 指定使用的适配器

```
{
  "scripts": {

  },
 "config": {
    "commitizen": {
      "path": "n
      ode_modules/cz-git",
      "czConfig": "./commitlint.config.cjs"
    }
  },
}
```

#### 步骤3：创建  commitlint.config.cjs 文件

```js
// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: "选择关联issue前缀（可选）:",
      customFooterPrefix: "输入自定义issue前缀 :",
      footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      generatingByAI: "正在通过 AI 生成你的提交简短描述...",
      generatedSelectByAI: "选择一个 AI 生成的简短描述:",
      confirmCommit: "是否提交或修改commit ?",
    },
    types: [
      { value: "特性", name: "特性:     新增功能" },
      { value: "修复", name: "修复:     修复Bug" },
      { value: "冲突", name: "冲突:     代码合并，冲突处理" },
      {
        value: "格式",
        name: "格式:     代码格式（不影响功能，例如空格、分号等格式修正）",
      },
      {
        value: "重构",
        name: "重构:     代码重构（不包括 bug 修复、功能新增）",
      },
      { value: "性能", name: "性能:     性能优化" },
      { value: "测试", name: "测试:     添加疏漏测试或已有测试改动" },
      {
        value: "构建",
        name: "构建:     构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）",
      },
      { value: "集成", name: "集成:     修改 CI 配置、脚本" },
      { value: "回退", name: "回退:     回滚 commit" },
      {
        value: "其他",
        name: "其他:     对构建过程或辅助工具和库的更改（不影响源文件、测试用例）",
      },
    ],
    useEmoji: false,
    emojiAlign: "center",
    useAI: false,
    aiNumber: 1,
    themeColorCode: "",
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "以上都不是？我要自定义",
    emptyScopesAlias: "跳过",
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ["feat", "fix"],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixes: [
      // 如果使用 gitee 作为开发管理
      { value: "link", name: "link:     链接 ISSUES 进行中" },
      { value: "closed", name: "closed:   标记 ISSUES 已完成" },
    ],
    customIssuePrefixAlign: "top",
    emptyIssuePrefixAlias: "跳过",
    customIssuePrefixAlias: "自定义前缀",
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: "",
  },
};

```















## 插件安装   `== >`  pnpm gitcz

安装 ：`npm install -g commitizen`

安装： `commitizen init cz-conventional-changelog --save --save-exact`

安装： `npm install @fe6/norm-git-cz-config`



> 新增加一个文件 `commitlint.config.cjs`    **并添加内容**

```js
/** @format */

module.exports = {
  extends: ["@fe6/norm-git-cz-config"],
};

```

>package.json 中添加

```
  "config": {
    "commitizen": {
      "path": "node_modules/cz-customizable"
    },
    "cz-customizable": {
      "config": "node_modules/@fe6/norm-git-cz-config/customizable.js"
    }
  }
```









![img](https://www.runoob.com/wp-content/uploads/2015/02/011500266295799.jpg)

```git
在本地新建一个分支： git branch newBranch
切换到你的新分支: git checkout newBranch
创建并切换到新分支： git checkout -b newBranch
将新分支发布在github上： git push origin newBranch
在本地删除一个分支： git branch -d newBranch
在github远程端删除一个分支： git push origin :newBranch (分支名前的冒号代表删除)
                        
原文链接：https://blog.csdn.net/qq_25623355/article/details/99292715
git init                                                  # 初始化本地git仓库（创建新仓库）
git config --global user.name "xxx"                       # 配置用户名
git config --global user.email "xxx@xxx.com"              # 配置邮件
git config --global color.ui true                         # git status等命令自动着色
git config --global color.status auto
git config --global color.diff auto
git config --global color.branch auto
git config --global color.interactive auto
git config --global --unset http.proxy                    # remove  proxy configuration on git
git clone git+ssh://git@192.168.53.168/VT.git             # clone远程仓库
git status                                                # 查看当前版本状态（是否修改）
git add xyz                                               # 添加xyz文件至index
git add .                                                 # 增加当前子目录下所有更改过的文件至index
git commit -m 'xxx'                                       # 提交
git commit --amend -m 'xxx'                               # 合并上一次提交（用于反复修改）
git commit -am 'xxx'                                      # 将add和commit合为一步
git rm xxx                                                # 删除index中的文件
git rm -r *                                               # 递归删除
git log                                                   # 显示提交日志
git log -1                                                # 显示1行日志 -n为n行
git log -5
git log --stat                                            # 显示提交日志及相关变动文件
git log -p -m
git show dfb02e6e4f2f7b573337763e5c0013802e392818         # 显示某个提交的详细内容
git show dfb02                                            # 可只用commitid的前几位
git show HEAD                                             # 显示HEAD提交日志
git show HEAD^                                            # 显示HEAD的父（上一个版本）的提交日志 ^^为上两个版本 ^5为上5个版本
git tag                                                   # 显示已存在的tag
git tag -a v2.0 -m 'xxx'                                  # 增加v2.0的tag
git show v2.0                                             # 显示v2.0的日志及详细内容
git log v2.0                                              # 显示v2.0的日志
git diff                                                  # 显示所有未添加至index的变更
git diff --cached                                         # 显示所有已添加index但还未commit的变更
git diff HEAD^                                            # 比较与上一个版本的差异
git diff HEAD -- ./lib                                    # 比较与HEAD版本lib目录的差异
git diff origin/master..master                            # 比较远程分支master上有本地分支master上没有的
git diff origin/master..master --stat                     # 只显示差异的文件，不显示具体内容
git remote add origin git+ssh://git@192.168.53.168/VT.git # 增加远程定义（用于push/pull/fetch）
git branch                                                # 显示本地分支
git branch --contains 50089                               # 显示包含提交50089的分支
git branch -a                                             # 显示所有分支
git branch -r                                             # 显示所有原创分支
git branch --merged                                       # 显示所有已合并到当前分支的分支
git branch --no-merged                                    # 显示所有未合并到当前分支的分支
git branch -m master master_copy                          # 本地分支改名
git checkout -b master_copy                               # 从当前分支创建新分支master_copy并检出
git checkout -b master master_copy                        # 上面的完整版
git checkout features/performance                         # 检出已存在的features/performance分支
git checkout --track hotfixes/BJVEP933                    # 检出远程分支hotfixes/BJVEP933并创建本地跟踪分支
git checkout v2.0                                         # 检出版本v2.0
git checkout -b devel origin/develop                      # 从远程分支develop创建新本地分支devel并检出
git checkout -- README                                    # 检出head版本的README文件（可用于修改错误回退）
git merge origin/master                                   # 合并远程master分支至当前分支
git cherry-pick ff44785404a8e                             # 合并提交ff44785404a8e的修改
git push origin master                                    # 将当前分支push到远程master分支
git push origin :hotfixes/BJVEP933                        # 删除远程仓库的hotfixes/BJVEP933分支
git push --tags                                           # 把所有tag推送到远程仓库
git fetch                                                 # 获取所有远程分支（不更新本地分支，另需merge）
git fetch --prune                                         # 获取所有原创分支并清除服务器上已删掉的分支
git pull origin master                                    # 获取远程分支master并merge到当前分支
git mv README README2                                     # 重命名文件README为README2
git reset --hard HEAD                                     # 将当前版本重置为HEAD（通常用于merge失败回退）
git rebase
git branch -d hotfixes/BJVEP933                           # 删除分支hotfixes/BJVEP933（本分支修改已合并到其他分支）
git branch -D hotfixes/BJVEP933                           # 强制删除分支hotfixes/BJVEP933
git ls-files                                              # 列出git index包含的文件
git show-branch                                           # 图示当前分支历史
git show-branch --all                                     # 图示所有分支历史
git whatchanged                                           # 显示提交历史对应的文件修改
git revert dfb02e6e4f2f7b573337763e5c0013802e392818       # 撤销提交dfb02e6e4f2f7b573337763e5c0013802e392818
git ls-tree HEAD                                          # 内部命令：显示某个git对象
git rev-parse v2.0                                        # 内部命令：显示某个ref对于的SHA1 HASH
git reflog                                                # 显示所有提交，包括孤立节点
git show HEAD@{5}
git show master@{yesterday}                               # 显示master分支昨天的状态
git log --pretty=format:'%h %s' --graph                   # 图示提交日志
git show HEAD~3
git show -s --pretty=raw 2be7fcb476
git stash                                                 # 暂存当前修改，将所有至为HEAD状态
git stash list                                            # 查看所有暂存
git stash show -p stash@{0}                               # 参考第一次暂存
git stash apply stash@{0}                                 # 应用第一次暂存
git grep "delete from"                                    # 文件中搜索文本“delete from”
git grep -e '#define' --and -e SORT_DIRENT
git gc   
git fsck
```

## 推送 dist 文件夹到子分支 gh-pages

```
第一步

/dist 目录需要被 git 记录，于是后面我们才可以用它作为子树（subtree），因此 /dist 不能被 .gitignore 规则排除

第二步

git subtree push --prefix dist origin gh-pages

搞定。其中：

dist 代表子树所在的目录名
origin 是 remote name
gh-pages 是目标分支名称
```

