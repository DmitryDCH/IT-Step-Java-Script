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
        error.innerHTML = "";
        var random_number = random();
        var user = new constructor_user(name, surname, amount, period, id, random_number);
        arr_users.push(user);
        console.log(user);
        generated();
    }
}

/* start gener user data */
function generated(){
    var root_element = document.querySelector("#js_output");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");

    root_element.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);


    for(var i = 0; i < arr_users.length; i++){
        td1.innerHTML = arr_users[i].name;
        td2.innerHTML = arr_users[i].surname;
        td3.innerHTML = arr_users[i].amount;
        td4.innerHTML = arr_users[i].period;
        td5.innerHTML = arr_users[i].id;
        td6.innerHTML = arr_users[i].random_number;
    }
}
/* end gener user data */

function random() {
    var number_range = 16;
    return function () {
        return Math.floor(Math.random() * number_range);
    }
}
function constructor_user(name, surname, amount, period, id, random_number){
    this.name = name;
    this.surname = surname;
    this.amount = amount;
    this.period = period;
    this.id = id;
    this.random_number = random_number();
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
        //ShowCurrency(data);
        req_table(data);
        //console.log(data);
      }
    };
/*
function ShowCurrency(data) {
    for(var i = 0; i < data.length; i++){
      console.log(` ${data[i].ccy} / ${data[i].base_ccy} Buy ${data[i].buy} Sell ${data[i].sale} `);
    } 
}
*/
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

function set_int(){
    var body = document.querySelector("body");
    var body_class = body.getAttribute("class");
    
    
    var button = document.querySelector(".toggler");
    var button_send = document.querySelector(".toggler2");
    
    var table = document.querySelector("table");

    if(body_class == "day_style"){
        body.setAttribute("class","night_style");

        button.innerHTML = "Day";
        button.setAttribute("class","btn btn-danger toggler");
        button_send.setAttribute("class","btn btn-primary toggler2");
        /* Created */
        //table.setAttribute("style","font-size:50px");
        table.setAttribute("border","3px");
        table.setAttribute("bordercolor","green");
        /* by */
    } else{
        body.setAttribute("class","day_style");

        button.innerHTML = "Night";
        button.setAttribute("class","btn btn-success toggler");
        button_send.setAttribute("class","btn btn-success toggler2");
        /* https://github.com/DmitryDCH */
        table.setAttribute("style","font-size:20px");
        table.setAttribute("bordercolor","black");
        table.setAttribute("border","1px");
    }
}



