function get_data(){
    var num1 = document.querySelector(".num-1").value;
    var num2 = document.querySelector(".num-2").value;
    var num3 = document.querySelector(".num-3").value;

    var result = document.querySelector(".text");

    var middle_num = Math.round((+num1 + +num2 + +num3) / 3);
    
    if (num1 >= 6 || num2 >= 6 || num3 >= 6){
        result.innerHTML = "Number must be bigger then 0 and less then 5";
    }
    else{
        switch (middle_num) {
            case 1:
                result.innerHTML = "Your result is " + middle_num + " it's very bad";
            break;
            case 2:
                result.innerHTML = "Your result is " + middle_num + " it's bad";
            break;
            case 3:
                result.innerHTML = "Your result is " + middle_num + " it's not bad";
            break;
            case 4:
                result.innerHTML = "Your result is " + middle_num + " it's good";
            break;
            case 5:
                result.innerHTML = "Your result is " + middle_num + " it's exellent";
                break;
            default:
                result.innerHTML = "Number must be less than 5 or bigger then 0";
            break;
        }
    }
}