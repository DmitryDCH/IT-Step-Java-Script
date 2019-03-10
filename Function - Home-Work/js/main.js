function get_data(){
    var distance = parseInt(document.querySelector(".value_distance").value);
    var time = parseInt(document.querySelector(".value_time").value);
    var result = document.querySelector(".result");

    if(distance <= 0 || time <= 0){
        result.innerHTML = "Enter valid numbers";
    } else{
        result.innerHTML = "Your speed : " + simple_task(distance, time);
    }
}

function simple_task(value_distance, value_time){
    return  value_distance / value_time;
}