# Vue 知识点总汇

## 知识点讲解

1. 在使用计算属性时，函数名和 data 数据源中的数据命名问题

-   因为不管是计算属性还是 data、props 都会被挂载到 vM 上，所以都不能同名。

2. vue 中 data 的属性和 methods 中的方法命名问题

-   vue 会把 methods 和 data 的东西，全部代理到 vue 生成对象中。
    会产生覆盖所以最好不要同名。

3. 键名优先级

-   props > data > methods

4. 给 vue 定义全局的方法

-   第一种：挂载到 Vue 的 prototype 上。把全局方法写在一个文件里，然后 for 循环挂载到 Vue 的 prototype 上。
-   第二种：利用全局混入 mixin，因为 mixin 里面的 methods 会和创建的每个单文件组件合并。

5. keep-alive 的生命周期

-   activated ：页面第一次进入的时候钩子触发的顺序为 created > mounted > activated
-   deactivated ：页面退出的时候会触发 deactivated，当页面前进或后退时只会触发 activated

6. bind 与 call 和 apply 的区别

-   bind 的返回值是一个函数，而 call 和 apply 是立即调用

7. VueX 的核心组成部分

-   stater
-   getter
-   mutations
-   actions
-   module

8. VueX 的工作流程

-   组件派发一个动作到 actions 里，action 通过 Commit 到 mutations，mutations 使用 mutate 同步的更改数据到 state 中渲染组件

9.
