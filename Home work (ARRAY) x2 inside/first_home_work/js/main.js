
var my_array = [];
var result1 = document.querySelector(".result");
var result2 = document.querySelector(".result2");

for(let i = 0; i < 30; i++){
    my_array[i] = Math.floor(Math.random() * 30);
}




result1.innerHTML += my_array;

var reverse_my_arr = my_array.reverse();
result2.innerHTML += reverse_my_arr;

