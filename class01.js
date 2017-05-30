// 一步一步学习TypeScirpt(基本类型);
// Boolean
var isDone = false;
// Number
var hegight = 6;
// String 
var named = 'bob';
// 可以使用双引号
named = 'smith';
// 或者使用单引号
// Array
var list = [1, 2, 3, 4];
// 第一种声明的方式
var list2 = [1, 2, 3, 4];
// 第二种声明的方式
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// 默认enum从0开始
var c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var d = Color1.Green;
// 我们可以改变起指从1开始
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
var e = Color2.Blue;
// 或者自定义值
var colorName = Color2[4];
console.log(colorName);
