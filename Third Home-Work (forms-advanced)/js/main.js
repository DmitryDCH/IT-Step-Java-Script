function get_age(){
    var age = document.querySelector(".enter_age").value;
    
   if (age >= 1 && age <= 2){
       console.log("You have a small child");
   }
    else if (age >= 3 && age <= 6) {
        console.log("Your child can attend a kindergarten");
    }
    else if (age >= 7 && age <= 16) {
        console.log("Your child can attend a school");
    }
    else if (age >= 17 && age <= 21){
       console.log("Your child can attend a colledge")
    }
    else{
        console.log("You have adult chid");
    }
}