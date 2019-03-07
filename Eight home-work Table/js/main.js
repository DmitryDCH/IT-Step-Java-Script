function get_data(){
    var number = document.querySelector(".number").value;
    var number_multiplicate = +number;
    
    var result = document.querySelector(".result");

    if(number_multiplicate <= 0 || number_multiplicate > 9 ){
        result.innerHTML = "Enter valid value";
    } else {
        switch (number_multiplicate){
            case 1:
                for (var i = 0; i<=10; i++){
                    var output = number_multiplicate * i;
                    result.innerHTML +=  number_multiplicate + " * " + i + " = " + output + "<br>";  
                }
            break;
            
            case 2:
            for (var i = 0; i<=10; i++){
                var output = number_multiplicate * i;
                result.innerHTML +=  number_multiplicate + " * " + i + " = " + output + "<br>";     
            }
            break;   

            case 3:
            for (var i = 0; i<=10; i++){
                var output = number_multiplicate * i;
                result.innerHTML +=  number_multiplicate + " * " + i + " = " + output + "<br>";     
            }
            break;   

            case 4:
            for (var i = 0; i<=10; i++){
                var output = number_multiplicate * i;
                console.log( number_multiplicate + " * " + i + " = " + output);
                result.innerHTML +=  number_multiplicate + " * " + i + " = " + output + "<br>";  
            }
            break;   

            case 5:
            for (var i = 0; i<=10; i++){
                var output = number_multiplicate * i;
                result.innerHTML +=  number_multiplicate + " * " + i + " = " + output + "<br>";     
            }
            break;   

            case 6:
            for (var i = 0; i<=10; i++){
                var output = number_multiplicate * i;
                result.innerHTML +=  number_multiplicate + " * " + i + " = " + output + "<br>";     
            }
            break;   

            case 7:
            for (var i = 0; i<=10; i++){
                var output = number_multiplicate * i;
                result.innerHTML +=  number_multiplicate + " * " + i + " = " + output + "<br>";  
            }
            break;   

            case 8:
            for (var i = 0; i<=10; i++){
                var output = number_multiplicate * i;
                result.innerHTML +=  number_multiplicate + " * " + i + " = " + output + "<br>";     
            }
            break;   

            case 9:
            for (var i = 0; i<=10; i++){
                var output = number_multiplicate * i;
                result.innerHTML +=  number_multiplicate + " * " + i + " = " + output + "<br>";     
            }
            break;   

            default:
            console.log("R.T.F.M");
        }
    }
}