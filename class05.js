// 一步一步学习Typescript(05数组);
// 在ts中声明数组有如下两种方式;
// 第一种方式在元素类型后紧跟一个中括号[]
{
    var a = [1, 2, 3];
    console.log(a.length);
}
// 第二种方式使用泛型Array<T>
{
    var a = ['a', 'b', 'c'];
    console.log(a[1]);
}
// 声明一个空数组
{
    var c = [];
    c[0] = 1;
    c[100] = 2;
    // 可以使用push方法增加
    c.push(12345);
    console.log(c.length);
    // let d:number[]=new number[2];
    // 错误，不能这么声明数组
}
