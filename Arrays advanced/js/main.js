/* pop() - удаляє останній елемент массиву */

/*
var arr = [1,2,3,4,5];

for (var i = 0; i < arr.length; i++){
    console.log("Before pop: " + arr[i]);
}


arr.pop();

console.log("--------BEFORE POP----------")

for (var i = 0; i < arr.length; i++){
    console.log("Before pop: "  + arr[i]);
}
*/

/* push() - новий елемент в кінець массиву */

/*
var arr = [1,2,3,4,5];

for (var i = 0; i < arr.length; i++){
    console.log("Before push: " + arr[i]);
}


arr.push(3);

console.log("--------BEFORE PUSH----------")

for (var i = 0; i < arr.length; i++){
    console.log("Before push: "  + arr[i]);
}

*/

/* shift удаляє 1 елемент */

/* 
var arr = [1,2,3,4,5];

for (var i = 0; i < arr.length; i++){
    console.log("Before shift: " + arr[i]);
}


arr.shift();

console.log("--------BEFORE SHIFT----------")

for (var i = 0; i < arr.length; i++){
    console.log("Before shift: "  + arr[i]);
}

*/

/*  */

/* UNshift добавляє 1 елемент */

/*
var arr = [1,2,3,4,5];

for (var i = 0; i < arr.length; i++){
    console.log("Before unshift: " + arr[i]);
}


arr.unshift(3);

console.log("--------BEFORE UNSHIFT----------")

for (var i = 0; i < arr.length; i++){
    console.log("Before unshift: "  + arr[i]);
}
*/

/* For each  цикл для массива по индексу і значенню  ( errow function =>)*/

/*
var arr = [1,23,152,767,666];

arr.forEach(function(item,i){
    console.log("item = ", item, "I = ", i);
});

*/

/* forOF приймаємо тількі значення */

/*
var arr = [1,23,152,767,666];

for (var item of arr){
    console.log("For of ", item);
}
*/

/* forIN приймаємо тількі індекс */

/*
var arr = [1,23,152,767,666];

for (var item in arr){
    console.log("For in ", item);
}
*/

/* split розділяє по знаку всередині */
/*

var str = prompt("");

var arr = [];

arr = str.split(",");

console.log(arr);
*/

/* join з массива строку*/

/* sort соіртує в алфавітному порядку нюанс з числами compare function */

var arr = [5,4,3,2,1];

console.log(arr);

arr = arr.sort();

console.log(arr);



