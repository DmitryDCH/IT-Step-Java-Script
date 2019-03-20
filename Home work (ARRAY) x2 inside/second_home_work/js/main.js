var my_array = [];
var result = document.querySelector(".result");

for (i = 0; i < 20; i++){
    my_array[i] = Math.floor(Math.random()* (-10 - 20) + 20);
    if(my_array[i] < 0){
        my_array[i] = 0;
    }
}

result.innerHTML = my_array;
//console.log(my_array);