// Duck typing
// 关于Duck typing 在维基上的说明
// 使用Ts的实现
var Duck = (function () {
    function Duck() {
    }
    Duck.prototype.quack = function () {
        console.log('呱呱呱');
    };
    Duck.prototype.feathers = function () {
        console.log('是一个灰色羽毛的鸭子');
    };
    return Duck;
}());
var Person = (function () {
    function Person() {
    }
    Person.prototype.quack = function () {
        console.log('这个人在模仿鸭子！呱呱叫');
    };
    Person.prototype.feathers = function () {
        console.log('穿着鸭绒背心的人');
    };
    return Person;
}());
function inTheForest(Duck) {
    Duck.quack();
    Duck.feathers();
}
function game() {
    var duck = new Duck();
    var feathers = new Person();
    inTheForest(duck);
    inTheForest(feathers);
}
game();
