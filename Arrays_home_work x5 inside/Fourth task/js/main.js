var first_arr = [1,2,3];
console.log(first_arr);
function add(){
    first_arr.unshift(6);
    first_arr.unshift(5);
    first_arr.unshift(4);
    console.log("---------- arr after add ----------");
    console.log(first_arr);
}