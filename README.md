

# web-learning-test

## 2020年8月1日：

webpack的本地安装 `cnpm install webpack --save-dev`

配置package.json及webpack.config.js

webpack.config.js:

`entry output path filname`

node模块path `path.resolve(_dirname,bundle.js)`

###### webpack的使用

commonjs模块导入导出语法：

```javascript
module.exports={
    props,
    functions....
}
const (props,functions) = require ('./abs.js')
```

ES6模块导入导出语法

```javascript
export{
	a,b,c
};
export default d;
import {a,b,c} from './a.js'
import d from 'd.js'
```



## 2020年7月30日：

复习了Vue父子组件的通讯，父->子`props`，子->父`this.$emit("事件名",props...)`。组件data双向绑定时可以使用诸如input事件，触发自定义事件绑定；也可以使用watch方法触发事件绑定。

### Vue学习了：

###### 1.父组件访问子组件的两个方法，children和refs方法

```javascript
this.$children[0].props;
this.$refs.pros;
```

###### 2.子组件访问父组件及根组件的方法(不常用)

```javascript
this.$parent.props;
this.$root.props;
```

###### 3.slot插槽的使用

```html
<slot> </slot>
<slot name="slot's name"></slot> //具名插槽
//具名插槽的使用：
<template v-slot:slotsName="自定义插槽引用名s">{{s.props}} </template>
//具名插槽的定义及子组件数据绑定
<slot name="abc" v-bind:props="自定义属性名"></slot>
//插槽使用时的语法糖
<template #slotsName="自定义插槽名"></template>

```

###### 4.编译作用域：

父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。->父级模板的插槽直接引用会引用到父级作用域中的porps

## 2020年7月28日：

### Vue学习了：

###### v-on(语法糖@)指令,绑定事件时，不带圆括号，event将被自动当作实参传入

```javascript
v-on:click="myOwnClick"//使用不带圆括号的形式，event 对象将被自动当做实参传入；
methods:
myOwnClick(){
    event.target.input...
}
```

###### 使用带圆括号时，需要使用$event变量显式传入event对象

```
v-on:click="myOwnClick($event)"
//使用带圆括号的形式，我们需要使用 $event 变量显式传入 event 对象。
methods:
myOwnClick(){
    event.target.input...
}
```

子组件在生成事件时，使用：

`this.$emit("enventName",prop1....)`

## 2020年7月26日：

周日，陪媳妇

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



