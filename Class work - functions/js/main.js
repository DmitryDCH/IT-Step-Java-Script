function Get_user_data(){
    var value_benz = parseInt( document.querySelector(".benzin").value);
    var distance = parseInt(document.querySelector(".distance").value);
    var price = parseInt( document.querySelector(".price").value);
   
    var result = document.querySelector(".result");

   if (value_benz <= 0 || distance <= 0 || price <=0){
       result.innerHTML = "Enter valid numbers (must be bigger then 0)";
   } /*else if (typeof(value_benz === NaN) || typeof(distance === NaN) || typeof(price) === NaN) { 
        result.innerHTML = "Please, enter numbers";
   }*/ else {
        result.innerHTML = priceOfTrip(value_benz, distance, price);
   }
}


function priceOfTrip(value_l, km, money){
    return  summ = ((km * 2 * value_l) / 100) * money;
}

/* typeOf(NaN) === number ? */



