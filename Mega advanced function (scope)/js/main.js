/*
function sellcar(car_name){
    var count = 0;
    return function(){
        console.log(car_name, ++count);
    }
}

var audi = sellcar("Audi");
var ford = sellcar("Ford");
console.log(audi);

audi();
audi();
audi();
audi();

ford();
ford();
*/

/*
var phase = "Hello";

function say(){
    function go(){
        alert(phase);
    }
    go();
}
say();
*/

function make_count(){
    var count = 1;
    // if (isNaN(count)){
    //    count = 1;
    // }
    return function(){
        return   count++;
    };
}
//  var count = 10; не доступно бо замикание закриває переменну но якщо
//  робить цей приклад через свойства функции и юзать ФУНКЦИЮ як обьект
//  то до неї можна доступиться везде, приклад нижче!
var counter =  make_count();
var counter2 =  make_count();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

console.log(counter2());
console.log(counter2());

/*
function make_count2(){
    function counter2_1(){
        return counter.currentCount++;
    };
    counter.currentCount = 1;

    return counter2_1;
}
var counter_1_1 = make_count2();
counter.currentCount = 10;

console.log(counter_1_1());

    т.е замыкание функции це замыкание переменной для 
    ограничения доступа до неї в window
*/



function say(name){
    alert(name + ", " + phrase );
}
var phrase = "Привет";
say("Вася");