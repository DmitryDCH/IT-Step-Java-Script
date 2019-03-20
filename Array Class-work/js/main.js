var myArr = [];
var max = 50;
var min = -12;

var forminus = 0;
var forplus = 0;
for (var i = 0; i < 7; i++){
    myArr[i] = Math.floor(Math.random() * (max - min) + min);
    console.log(myArr[i]);
}

for (var i = 0; i< myArr.length; i++){
    if (myArr[i] < 0){
        console.log("Numbers < 0 :", myArr[i]);
        forminus++;
    }
}

for (var i = 0; i < myArr.length; i++){
    if (myArr[i] > 0){
        console.log("Numbers > 0 :" ,myArr[i]);
        forplus++;
    }
}


console.log(forminus + " - numbers less then 0");
console.log(forplus + " - numbers biger then 0");


