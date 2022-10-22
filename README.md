中级实战课程项目：vip.yideng.com 刷题网站
请及时该项目代码与 git 同步

## 项目技术栈

前端：React + React-router + axios + TS + Recoil + Hooks + cssnext

后端：BFF、Node、Koa、Serverless（阿里云的函数计算）、OSS

## 核心技术点

1. 微信扫码登录认证机制
2. markdown 渲染
3. 防爬虫：接口返回的已经经过处理，字符（乱码）格式 - 字体的作用？字符映射？随机动态生成？
   1. 前端只要将字体加载过来 (由后台生成，前端只需加载)（注意使用版权的问题）

      ```css
      // html中以style插入
      <style>
      	@font-face {
      		font-family: 'custom';
      		src: url(https://xxxx/api/interInfo?key=xxxx&st=yyy) format(’woff’)
      	}
      </style>
      ```
4. pdf 渲染

### 1. 项目初始化

`pnpm init -y && tsc —init`

**index-dev.html 与 index-prod.html**

```bash
├── .vscode
|  └── settings.json
├── README.md
├── config
|  ├── webpack.development.config.js
|  └── webpack.production.config.js
├── gitigonore
├── package.json
├── src
|  ├── @types
|  ├── apis
|  ├── assets
|  ├── components
|  ├── hooks
|  ├── index-dev.html # 在开发阶段，我们可以直接引入本地的库，减少启动时间，增加开发效率，比如在index-dev.html中直接使用`<script src="localhost:js/react.js"></script>` ，不进行打包
|  ├── index-prod.html # 在生产阶段，部分公司由自己的cdn，可以直接在index-prod.html中引入线上cdn地址（比如react.js这种变化较小，直接从静态资源服务器拉取即可）
|  ├── index.css
|  ├── index.tsx
|  ├── pages
|  ├── recoil
|  ├── routes
|  └── utils
├── tsconfig.json
└── webpack.config.js

directory: 12 file: 12
```

### 2. 安装依赖

#### dependencies：

- react
- react-dom
- react-router
- axios
- recoil：状态管理

#### devDependencies：

- webpack
- webpack-cli
- typescript
- webpack-merge
- scripty
- yargs-parser
- @types/react、@types/react-dom、@types/react-router-dom
- babel 系列(@babel/preset-env、@babel/preset-react、@babel/preset-typescript)
