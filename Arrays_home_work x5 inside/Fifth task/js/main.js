var first_arr = [1,2,3,4,5];
console.log(first_arr);
function clice(){
    console.log("---------- After splice ----------");
    var removed = first_arr.splice(1,2);
    console.log(first_arr);
}