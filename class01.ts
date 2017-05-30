// 一步一步学习TypeScirpt(基本类型);
// Boolean
let isDone:boolean= false;

// Number
let hegight:number=6;

// String 
var named: string='bob';
// 可以使用双引号
named='smith';
// 或者使用单引号


// Array
let list:number[]=[1,2,3,4];
// 第一种声明的方式
let list2:Array<number>=[1,2,3,4];
// 第二种声明的方式


enum Color{
	Red,Green,Blue
}
// 默认enum从0开始
var c:Color=Color.Green;

enum Color1{
	Red=1,Green,Blue
}
var d:Color1=Color1.Green;

// 我们可以改变起指从1开始

enum Color2{
	Red=1,Green=2,Blue=4
}
var e:Color2=Color2.Blue;
// 或者自定义值

var colorName:string=Color2[4];

console.log(colorName);
// 可以反向推出这个值对应的enum名称

// Any
// 当我们不确定声明值对应的类型，想要由程序运行时确定时，就可以事先声明成Any类型
var notSure:any=4;
notSure='maybe a string instead';
// OK ，声明为String类型
notSure=false;
// OK，声明为boolean类型

var list3:any[]=[1,true,'free'];
// 数组中声明多个类型