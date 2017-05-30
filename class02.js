// 一步一步学习TypeScript(let和const)
// let
// Es6中有两个新特性 let和const 为了理解let，让我们看看let与var声明变量的区别
if (true) {
    var a_1 = 5;
    var b = 6;
    console.log(a_1);
    console.log(b);
}
// console.log(a); 错误 a未定义;
// console.log(b); 正确 输出6;
// let声明的变量只在声明它的代码快内部可以使用 var声明的变量则可上升为整个函数内部都可以使用;
// const
// 使用const声明的变量是不允许改变的 常量
var a = 5;
// console.log(a);正确输出5;
// a=7;错误.不可以被修改; 
