



## TIP

> [全局安装](https://cz-git.qbb.sh/zh/guide/#全局使用) `commitizen`,如此一来可以快速使用 `cz` 或 `git cz` 命令进行启动。

```sh
npm install -g commitizen
```

##  格式化工具 --- pnpm lint

```sh
安装
  npm install -D  pretty-quick   或者   pnpm install -D  pretty-quick
 
执行
  "scripts": {
    "lint": "pretty-quick --staged",
  },

或着--------------------------------------------------------------------------

 pnpm install lint-staged
 
   "scripts": {
    "lint": "lint-staged",
  },
  
  "lint-staged": {
    "*": [
      "prettier --write",
      "git add ."
    ]
  },



使用
  npm run lint | pnpm lint
```

## 格式化规范 

> 下载依赖

```sh
 npm install -D  prettier @shixinde/guoguo-prettier        //npm
 pnpm install -D  prettier @shixinde/guoguo-prettier      //pnpm
```

> 添加配置

```diff
// 根目录的 .prettierrc.js   如果报错  改为cjs  .prettierrc.cjs
module.exports = {
    ...require('@shixinde/guoguo-prettier'),
};

// 根目录的 .prettierignore
index.html
pnpm-lock.yaml
public
dist
.history

pnpm-lock.yaml
public
dist
.history
pnpm-lock.yaml
static/
.gitignore
.prettierignore
.prettierrc.json
commitlint.config.mjs
*.json
*.md
*.sh
.husky
node_modules/
.vscode/
**/*.ico

```

> 如果遇到报错

![image-20241122162443752](https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/image-20241122162443752.png)

> **解决方案**
>
> 将根目录的` .prettierrc.js`   改为cjs   ===>   `.prettierrc.cjs`





## 提交规范工具 --- pnpm gitcz

> 安装

```sh
npm install -g commitizen  //全局安装  安装过可以不用安装

npm install -D cz-git
pnpm install @shixinde/guoguo-cz --save-dev
pnpm install @commitlint/{config-conventional,cli}

快速安装三个依赖
pnpm install -D cz-git @commitlint/{config-conventional,cli} @shixinde/guoguo-cz --save-dev
```

>1. 配置   ---->   在 package.json 中添加 `config.commitizen ` 配置

```bash
  "scripts": {
     "gitcz": "git-cz"
    },
    
  "config": {
    "commitizen": {
      "path": "node_modules/cz-git",
      "czConfig": "node_modules/@shixinde/guoguo-cz/commitlint.config.js"
    },
    "commitlint": {
      "extends": [
        "@shixinde/guoguo-cz"
      ]
    }
  },
```

> 2. 新增  ---->   在 根目录 中添加 `commitlint.config.cjs ` 文件
>
> "@commitlint/config-conventional" ： 代码提交时的名称校验
>
> "@shixinde/guoguo-cz"：pnpm gitcz 文字格式化提示

```js
module.exports = {
  extends: ["@commitlint/config-conventional", "@shixinde/guoguo-cz"],
};
```



## 安装 commitlint 工具和规则集 【使用袁果锅生态可省略此步骤】

```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional

```

> ### 项目根目录新建文件  --> commitlint.config.cjs  
>
> > **Tip :  此处仅为技巧 ， 使用袁果锅生态可省略此步骤**
>
> ```bash
> module.exports = {
>   extends: ["@commitlint/config-conventional", "@shixinde/guoguo-cz"],
> };
> ```

## 安装 husky （用于git 拦截）

```cmd
npm install husky --save-dev  或者 pnpm install husky --save-dev   // 安装依赖

npx husky-init   // 安装初始化内容
```

> 在 `pre-commit` 中修改代码

```diff
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

-  npm test
+ npm run lint
```

> 增加 `commit-msg` 文件

```diff
#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1
```

> Mac 电脑有可能会出现 commit-msg 钩子未生效问题
>
> 执行下面这个命令可以。.husky/* 为目录层级

```ts
chmod 777 .husky/*
```

链接 https://blog.csdn.net/zy21131437/article/details/132713867

![image-20250220164845983](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250220164845983.png)

## 增加国内镜像

添加 .npmrc 文件

```js
registry=https://registry.npmmirror.com
```





### 以下为全文件配置 -- 成功可忽略

![image-20241121140156285](https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/image-20241121140156285.png)

> .gitignore
>
> ```
> *
> ```

> husky.sh
>
> ```sh
> #!/usr/bin/env sh
> if [ -z "$husky_skip_init" ]; then
>   debug () {
>     if [ "$HUSKY_DEBUG" = "1" ]; then
>       echo "husky (debug) - $1"
>     fi
>   }
> 
>   readonly hook_name="$(basename -- "$0")"
>   debug "starting $hook_name..."
> 
>   if [ "$HUSKY" = "0" ]; then
>     debug "HUSKY env variable is set to 0, skipping hook"
>     exit 0
>   fi
> 
>   if [ -f ~/.huskyrc ]; then
>     debug "sourcing ~/.huskyrc"
>     . ~/.huskyrc
>   fi
> 
>   readonly husky_skip_init=1
>   export husky_skip_init
>   sh -e "$0" "$@"
>   exitCode="$?"
> 
>   if [ $exitCode != 0 ]; then
>     echo "husky - $hook_name hook exited with code $exitCode (error)"
>   fi
> 
>   if [ $exitCode = 127 ]; then
>     echo "husky - command not found in PATH=$PATH"
>   fi
> 
>   exit $exitCode
> fi
> 
> ```

> commit-msg    校验是否报错 并不会校验提交的名称
>
> ```sh
> #!/usr/bin/env sh
> . "$(dirname "$0")/_/husky.sh"
> 
> npx --no-install commitlint --edit $1
> ```

> pre-commit
>
> ```sh
> #!/usr/bin/env sh
> . "$(dirname -- "$0")/_/husky.sh"
> 
> npm run lint
> ```

## 项目根目录 .editorconfig

> .editorconfig 通常用于统一代码风格，以便在不同的开发环境和编辑器中保持一致的格式。

```js
[*.{js,jsx,ts,tsx,vue}]
indent_style = space
indent_size = 2
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
max_line_length = 100
```





## 生成日志

conventional-changelog
可以根据项目的 commit 和 metadata 信息自动生成 changelogs 和 release notes 的系列工具。

> 安装

```sh
npm i -D conventional-changelog-cli conventional-changelog-gitmoji-config
```

> 将新脚本添加到您的 package.json

```sh
"scripts" : {
  ...
  "changelog": "conventional-changelog -p gitmoji-config -i CHANGELOG.md -s"
}
```

> 运行 npm run changelog 生成日志





