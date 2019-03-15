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