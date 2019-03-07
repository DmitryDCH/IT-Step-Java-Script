function Get_user_data(){
    var value_benz = parseInt( document.querySelector(".benzin").value);
    var distance = parseInt(document.querySelector(".distance").value);
    var price = parseInt( document.querySelector(".price").value);
   
    var result = document.querySelector(".result");

   // console.log(priceOfTrip(value_benz, distance, price));

   result.innerHTML = priceOfTrip(value_benz, distance, price);
}


function priceOfTrip(value_l, km, money){
    return  summ = ((km * 2 * value_l) / 100) * money;
}

/* */