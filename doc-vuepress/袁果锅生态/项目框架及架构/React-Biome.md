## Biome格式化代码

> Package.json

```json
"lint:format": "git add . && biome check --write --staged  && git add . ",
"lint:format:fix": "biome check --write ./src",
```

> 根目录新增  biome.json  文件

```json
{
  "$schema": "https://biomejs.dev/schemas/1.5.3/schema.json",
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100
  },
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true
  }
}

```

