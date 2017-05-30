// 一步一步学习TypeScript(enums枚举)
// 之前在01.typescript基本类型中 初步学习enum类型 这篇是对enum类型的一些补充
// Enums
{
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    var colorValue = Color.Red;
    // colorVaule='2';
    // 错误 enum值为number类型，并且是从0开始的，所以赋值string会得到一个错误
}
// enums和numbers
// typescript enum类型是基于number的 所以使用number类型变量对其赋值
{
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    var colorValue = Color.Red;
    colorValue = 2;
    console.log(colorValue);
    // OK，colorVaule隐式转为了number类型
}
// 打开之前我们编译的Class08.js
//  	var Color;
//     (function (Color) {
//         Color[Color["Red"] = 0] = "Red";
//         Color[Color["Green"] = 1] = "Green";
//         Color[Color["Blue"] = 2] = "Blue";
//     })(Color || (Color = {}));
//     var colorValue = Color.Red;
//     colorValue = 2;
//     console.log(colorValue);
// Color[Color['Red']=0]='Red'; 这行等价于
// Color['Red']=0;Color[0]="Red";
{
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    console.log(Color["Red"]);
    // 0;
    console.log(Color[0]);
    // 'Red';
    console.log(Color.Red);
    // 'Red'因为Color.Red==0;
}
// 可以定义两个同名的enum，但其中一个enum必需设置一个初始标识
{
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    (function (Color) {
        Color[Color["DarkRed"] = 3] = "DarkRed";
        Color[Color["DarkGreen"] = 4] = "DarkGreen";
        Color[Color["DarkBlue"] = 5] = "DarkBlue";
    })(Color || (Color = {}));
}
// Const Enums
// 使用Const修饰enmu
{
    var vaule = 0 /* 'Red' */;
    console.log(vaule);
}
