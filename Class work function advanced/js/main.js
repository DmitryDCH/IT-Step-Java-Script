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
        //var result = document.querySelector(".result");
        //result.innerHTML = "Name must be bigger then 3 letters or less then 16 letters";
        console.log("Name must be bigger then 3 letters or less then 16 letters");
    } else if (surname.length < 3 || surname.length > 16){
        console.log("Surname must be bigger then 3 letters or less then 16 letters");
    } else if (amount < 0 || amount > 50000){
        console.log("You can request 50000$ or less");
    } else if (isNaN(amount)){
        console.log("Enter value of money");
    } else if (isNaN(period)){
        console.log("Enter value of period")
    } else if (period < 0 || period > 24){
        console.log("Period must be bigger then 0 and less then 24");
    } else if (isNaN(id)){
        console.log("Enter numbers in ID");
    } else{
        var name = name;
        var surname = surname;
        var amount = amount;
        var period = period;
        var id = id;
        console.log("Your name", name);
        console.log(surname);
        console.log(amount);
        console.log(period);
        console.log(id);
    }
}

function randomProcent(){
    return Math.floor(Math.random() * 16);
}

console.log(randomProcent());

/* Enter cute text innerHTML*/
/* condition on numbers in string (patterns)*/
