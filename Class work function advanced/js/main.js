function get_data(){
    var name = document.querySelector(".get_name").value;
    var surname = document.querySelector(".get_surname").value;
    var amount = parseInt(document.querySelector(".get_amount").value);
    var period = parseInt(document.querySelector(".get_period").value);
    var id = parseInt(document.querySelector(".get_id").value);
    validation(name, surname, amount, period,id);
}

function validation(name, surname, amount, period, id){
    if (name.length < 3 || name.length > 16){
        var error = document.querySelector(".error");
        error.innerHTML = "Name must be bigger then 3 letters or less then 16 letters";
    } else if (surname.length < 3 || surname.length > 16){
        var error = document.querySelector(".error");
        error.innerHTML = "Surname must be bigger then 3 letters or less then 16 letters";
    } else if (amount < 0 || amount > 50000){
        var error = document.querySelector(".error");
        error.innerHTML = "You can request 50000$ or less";
    } else if (isNaN(amount)){
        var error = document.querySelector(".error");
        error.innerHTML = "Enter value of money";
    } else if (isNaN(period)){
        var error = document.querySelector(".error");
        error.innerHTML = "Enter value of period";
    } else if (period < 0 || period > 24){
        var error = document.querySelector(".error");
        error.innerHTML = "Period must be bigger then 0 and less then 24";
    } else if (isNaN(id)){
        var error = document.querySelector(".error");
        error.innerHTML = "Enter numbers in ID";
    } else{
        var name = name;
        var surname = surname;
        var amount = amount;
        var period = period;
        var id = "Your id is valid";

        var result_name = document.querySelector(".result_name");
        var result_surname = document.querySelector(".result_surname");
        var result_amount = document.querySelector(".result_amount");
        var result_period = document.querySelector(".result_period");
        var result_id = document.querySelector(".result_id");
        var error = document.querySelector(".error");

        error.innerHTML = "";
        result_name.innerHTML = "Your name: " + name;
        result_surname.innerHTML = "Your surname: " + surname;
        result_amount.innerHTML = "You take a: " + amount + "$" + " on " +  randomProcent(21) + "%";
        result_period.innerHTML = "On " + period + " mounth";
        result_id.innerHTML = id;
    }
}

function randomProcent(number){
    return Math.floor(Math.random() * number);
}



/* condition on numbers in string (patterns) in name, surname*/
