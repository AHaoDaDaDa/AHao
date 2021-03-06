# vue 介绍和使用

## Vue 简介

<hr>

> Vue 是什么 <br>
> Vue 是前端开发框架;构建应用式的框架 能实现单页面应用渐进式的开发框架。

## vue 优点

<hr>

1. 遵循 `MVVM` 模式;
2. 体积小，运行效率高;
3. 关注数据的变化，不操作 `DOM` ;
4. 组件化开发，利于开发和维护;
5. 能实现单页面应用，`SPA`应用 `(single page application)`.

## vue 使用方式

<hr>

### 安装

#### 1. 本地引用

```
- 用 CDN 方式，引入项目；

- 下载到本地，通过 `<script>` 标签引入项目。
```

从官网下载 `vue.js` 文件，使用 `<script>` 标签引入，一般用在，学习，做 demo 的需要快速呈现效果的时候，实际工作开发中，没人这么做。

本地引用，在学习官网教程的时候，比如 ：在初始 vue 实例的时候，data 有时候是一个对象，有时候是一个函数。这就是两种使用方式

```js
// 本地引用方式
new Vue({
    data: {},
});
// 脚手架方式
export default {
    data() {
        return {};
    },
};
```

> 注意<br>
> 自己练习或者 demo 的时候，要看清楚是哪一个使用方式，如果报错，就换一下写法。

#### 2. 通过 `vue-cli` 脚手架安装

[vue-cli 官方网站](https://cli.vuejs.org/zh/)

> 说明
>
> > 什么是脚手架，它是基于 nodejs 运行，使用 webpack 打包工具开发的一个集成化开发环境。 简单来说，脚手架是官方出的一个帮助程序员快速开发的工具。

它的功能有:

-   热更新，即我们修改代码，页面自动刷新出新效果；
-   编译 es6 转成浏览器可执行的 es5 代码；
-   给 css 加兼容前缀；
-   代码校验，强制养成我们写规范代码的习惯等等

```js
//示例
  npm create [projectname] //用 vue-cli 创建项目
```

使用 `vue-cli` 脚手架，首先要 安装 `npm` 和 `vue-cli`

<h3>准备工作</h3>
<hr>
