function money_data(){
    var money_value = document.querySelector(".money_value").value;
    //var atraction_value = document.querySelector(".atraction_value").value;

    var money = +money_value;
    //console.log(typeof(money));
    //console.log(typeof(atraction));
    
    if (money <= 0 || atraction <= 0 || atraction > 6){
        console.log("R.T.F.M");
    }  else{
        while(money > 0){
          var atraction_value =  prompt("Enter value of atraction");
          var atraction = +atraction_value;
           switch(atraction){
               case 1:
                    money-=100;
               break;
               case 2:
                    money -=200;
               break;
               case 3:
                    money -=50;
               break;
               case 4:
                    money -=300;
               break;
               case 5:
                    money -=250;
               break;
               default:
                console.log("How you do this ?");
            }
           alert("Now you have a " + money + "$");
        }
    }
    alert("You money is 0");
}