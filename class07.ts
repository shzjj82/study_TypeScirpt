// 一步一步学习Typescript(07隐式/显示类型转换);
// Typescript中可以显示表明对象的类型
// 转换一个类型到其他类型时可以使用<>符号 如<T>value
// any类型可以转换成任意对象类型反之亦然
{
	class A{
		run(){
			console.log('run run run');
		}
		jump(){
			console.log('jump jump jump');
		}
	}

	class B{
		run():void{
			console.log('slow run');
		}
		cry(){
			console.log('cry cry cry');
		}
	}

	let a =new A();
	// 隐式转换a的类型
	let a1:A=new A();
	// 也可以显示的表明a1的类型;
	let b= new B();
	// a =b ; //错误，类型B不能赋值给类型A 因为B中没有定义Jump的方法
	// a=<A>b;
	// 错误,TS中<T>进行强制类型转换 错误原因 B中没有定义Jump的方法
	let b1:any=new B();
	// 声明为any类型 any类型可以转成任意其他类型，反之亦然
	a=b1;
	// OK
	b1=a;
	// OK

	let b2:any= new B();
	let newA=<A>b2;
	// 把b2的B类型转为A类型;
	newA.run();
	// ok 打印slow run
	newA.jump();
	// OK 编译期间不会有任何问题，但是运行时候会出现异常jump is not a function 
}
