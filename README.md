# web-learning-test

## 2020年7月26日：

周六，陪媳妇

### JavaScript学习了：

用自己的方法实现call函数：

```javascript
Function.prototype.newCall=function(obj){
    obj.newFuc=this;
    obj.newFuc(处理后的arguments数组)//可以用eval函数用字符串执行的方式，实现arguments函数的传递执行
    delete obj.newFuc;
}
```

###### call函数：实现调用函数绑定到传入参数对象的this，并执行调用函数(使用传入对象的Execution context执行调用函数)

## 2020年7月25日：

### Javascript学习了：

`Vue v-bind:model="value"`

Radio checkbox select三个类型结合`v-bind:model`使用

#### Javascript高阶函数：

数组的 .filter .map .reduce属性

#### Vue组件开发：

学习了vue组件的使用过程：1、创建构造函数 `const a= vue.extend({template:...})`2.注册组件（全局/局部）: vue.component("组件注册名",a) ,或者使用Vue对象内部component属性；

学习了组件 语法糖

组件的分离编写：`<template>标签`

### html5学习了

label for 标签 绑定内部 `radio or checkbox or select `id选择器使用

## 2020年7月24日：

### JavaScript学习了：

学习了Vue for 循环绑定Key属性，virtul Dom虚拟dom渲染方式

let/var区别；块级作用域；闭包函数；

ES6对象字面量的增强写法:

`name="yxl";height=1.88;let obg={name,height}`

像C/C++一样声明函数：

`let a(){...}`

### css学习了:

table标签

thead,tbody

tr=table row

th=table head cell

td=table data cell

## 2020年7月23日：

学习vue  computed属性

### 2020年早些时候：

学习：第一次push到git

学习：第一次pull到本地



