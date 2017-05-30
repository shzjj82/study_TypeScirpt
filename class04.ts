// Duck typing
// 关于Duck typing 在维基上的说明
// 使用Ts的实现
class Duck{
	quack(){
		console.log('呱呱呱');
	}
	feathers(){
		console.log('是一个灰色羽毛的鸭子');
	}
}

class Person{
	quack(){
		console.log('这个人在模仿鸭子！呱呱叫');
	}
	feathers(){
		console.log('穿着鸭绒背心的人');
	}
}

function inTheForest(Duck:any){
	Duck.quack();
	Duck.feathers();
}

function game(){
	var duck = new Duck();
	var feathers = new Person();
	inTheForest(duck);
	inTheForest(feathers);
}

game();