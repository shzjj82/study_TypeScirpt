// 一步一步学习TypeScript(03.严格的对象赋值检查)
// srrick object literal assignment checking(严格的对象赋值检查)
// 对象赋值时必需严格按照声明时指定的属性类型以及属性个数
{
	let x:{foo:number}
	x={foo:3};
	// x={foo:1,baz:2};
	// 错误，初始化时没有指定有baz属性
}

{
	let y:{foo:number,bar?:number};
	// y={foo:1,baz:2}
	// 错误,超过或者缺少属性‘baz’	
}

// 可以用新对象对原有对象进行赋值，要求新对象必需包含原对象属性值，且赋值后多余属性不可以被使用;
{
	let x:{foo:number};
	var x1={foo:1,bar:2};
	x=x1; //只能对共同的属性进行赋值;
	console.log(x.foo);
	// console.log(x.bar);
	// 错误，缺少属性baz;

	let y:{foo:number,bar?:number};
	let y1={foo:1,bar:2};
	y=y1;
	console.log(y.foo);//ok
	console.log(y.bar);//ok
}

{
	let x:{foo:string,[x:string]:string}
	// 表示x可以有任意的名字，但必须要是string类型的
	x={foo:"1",baz:"123",foot:'123'};//正确
}