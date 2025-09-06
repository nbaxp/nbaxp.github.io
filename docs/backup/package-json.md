# package.json

<https://docs.npmjs.com/>
<https://docs.npmjs.com/cli/v11/configuring-npm/package-json>

## 基础结构

```jsonc
{
  "name": "demo",
  "version": "0.0.0",
  "description": "description",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/author/demo.git"
  },
  "license": "license",
  "author": "author",
  "scripts": {
    "name": "command"
  },
  "dependencies": {
    //项目依赖项
    "name": "version"
  },
  "devDependencies": {
    //开发依赖项
    "name": "version"
  },
  "peerDependencies": {
    //安装依赖项
    "name": "version"
  },
  "engines": {
    "node": ">=22"
  },
  "private": true, //防止误发布
  "packageManager": "npm",
  "workspaces": [
    //Monorepo
    "packages/*"
  ]
}
```
