var arr_users = [];

function get_data(){
    var name = document.querySelector(".get_name").value;
    var surname = document.querySelector(".get_surname").value;
    var amount = parseInt(document.querySelector(".get_amount").value);
    var period = parseInt(document.querySelector(".get_period").value);
    var id = parseInt(document.querySelector(".get_id").value);
    validation(name, surname, amount, period,id);
}

function validation(name, surname, amount, period, id){
    var error = document.querySelector(".error");
    if (name.length < 3 || name.length > 16){
        error.innerHTML = "Name must be bigger then 3 letters or less then 16 letters";
    } else if (surname.length < 3 || surname.length > 16){
        error.innerHTML = "Surname must be bigger then 3 letters or less then 16 letters";
    } else if (amount < 0 || amount > 50000){
        error.innerHTML = "You can request 50000$ or less";
    } else if (isNaN(amount)){
        error.innerHTML = "Enter value of money";
    } else if (isNaN(period)){
        error.innerHTML = "Enter value of period";
    } else if (period < 0 || period > 24){
        error.innerHTML = "Period must be bigger then 0 and less then 24";
    } else if (isNaN(id)){
        error.innerHTML = "Enter numbers in ID";
    } else{
        var result_name = document.querySelector(".result_name");
        var result_surname = document.querySelector(".result_surname");
        var result_amount = document.querySelector(".result_amount");
        var result_period = document.querySelector(".result_period");
        var result_id = document.querySelector(".result_id");
        var error = document.querySelector(".error");

        var random_procent = random();

        error.innerHTML = "";
        result_name.innerHTML = "Your name: " + name;
        result_surname.innerHTML = "Your surname: " + surname;
        result_amount.innerHTML = "You take a: " + amount + "$" + " on " + random_procent()  + "%";
        result_period.innerHTML = "On " + period + " mounth";
        result_id.innerHTML = "Your id is valid" /* id */;

        var user = new constructor_user(name, surname, amount, period, id);
        arr_users.push(user);
        console.log(arr_users);
    }
}

function random() {
    var number_range = 16;
    return function () {
        return Math.floor(Math.random() * number_range);
    }
}

function constructor_user(name, surname, amount, period, id){
    this.name = name;
    this.surname = surname;
    this.amount = amount;
    this.period = period;
    this.id = id;
}

// -------------
// start request
// -------------

var xhr = new XMLHttpRequest();
  
var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
xhr.open("GET", url, true);
  
xhr.send();
  
xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;
  
    if (xhr.status != 200) {
        var errStatus = xhr.status;
        var errText = xhr.statusText;
        console.log(errStatus + ": " + errText);
    } else {
        var data = JSON.parse(xhr.responseText);
        ShowCurrency(data);
        req_table(data);
        console.log(data);
      }
    };
function ShowCurrency(data) {
    for(var i = 0; i < data.length; i++){
      console.log(` ${data[i].ccy} / ${data[i].base_ccy} Buy ${data[i].buy} Sell ${data[i].sale} `);
    } 
}

function req_table(data){
    var usd = document.querySelector(".usd");
    usd.innerHTML = (data[0].ccy);
    var eur = document.querySelector(".eur");
    eur.innerHTML = (data[1].ccy);
    var rur = document.querySelector(".rur");
    rur.innerHTML = (data[2].ccy);
    var btc = document.querySelector(".btc");
    btc.innerHTML = (data[3].ccy);

    var usd_buy = document.querySelector(".usd_buy");
    usd_buy.innerHTML = data[0].buy;

    var usd_sale = document.querySelector(".usd_sell");
    usd_sale.innerHTML = data[0].sale;

    var eur_buy = document.querySelector(".eur_buy");
    eur_buy.innerHTML = data[1].buy;

    var eur_sell = document.querySelector(".eur_sell");
    eur_sell.innerHTML = data[1].sale;

    var rur_buy = document.querySelector(".rur_buy");
    rur_buy.innerHTML = data[2].buy;

    var rur_sell = document.querySelector(".rur_sell");
    rur_sell.innerHTML = data[2].sale;

    var btc_buy = document.querySelector(".btc_buy");
    btc_buy.innerHTML = data[3].buy;

    var btc_sell = document.querySelector(".btc_sell");
    btc_sell.innerHTML = data[3].sale;
}


