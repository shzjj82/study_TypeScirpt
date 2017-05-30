// 一步一步学习TypeScript（06Any类型）;
// 学习前先看一下03章(严格的对象赋值检查),与之相对的只要为元素指定了any类型，则可以对其任意赋值
// 代码回顾
{
	let x:{foo:number};
	x={foo:3};
	// x={foo:1,baz:2};
	// 错误，初始化时没有指名有baz属性。
	// 或
	let y ={foo:3}
	// 隐含的类型指定 等价于var y:{foo:number}={foo:3}
	// y={foo:1,bax:2}
	// 错误，初始化时没有致命有bax属性
}

{
	let x:any={foo:3};
	x={foo:5,name:'h'};
	// 正确，因为x为any类型
	x={name:'h',just:true};
	// 正确，因为x可以是任何类型
	x={};
	// 也没有问题
	x='a string hhhhhhh';
	// 可以改变为string类型

	// 可以声明为一个函数
	x=function(){
		console.log('hello any!');
	}

	x();
	// hello any！
}

// 多说一些关于any类型与Object类型的区别
{
	class Blablabla{
	field:Object;
	}

	let my=function(bla:Blablabla){
		// bla.field.comingMethod
		// 错误，属性commingMethod在Object不存在
	}
}

// 修改成any类型后
{
	class Blablalal{
		field:any 
		// any
	}

	let bla =new Blablalal();
	bla.field={
		comingMethod:function(){
			console.log('hi any!');
			// lambda表达式写法
		// comingMethod:()=>console.log('hi any!');
		}
	}

	let my=function(bla:Blablalal){
		bla.field.comingMethod();
		// OK,只有在运行时才会关心comingMethod方法是否真的存在
	}

	my(bla);
}


