function get_degrees(){
    var degrees_array = [];
    var week_degrees = document.querySelector(".week_degrees");
    var max_degrees = document.querySelector(".max_degrees");
    var min_degrees = document.querySelector(".min_degrees");

    for( var i = 0; i < 7; i++){
        var a = Math.floor(Math.random()*100);
        degrees_array.push(a);
    }
    console.log(degrees_array);
    week_degrees.innerHTML = "Week degrees are " + degrees_array;

    var max = Math.max.apply(null, degrees_array);
    //console.log(max);
    max_degrees.innerHTML = "Max degrees are " + max;


    var min = Math.min.apply(null, degrees_array);
    //console.log(min);
    min_degrees.innerHTML = "Min degrees are " + min;
}