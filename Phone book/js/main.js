function get_data(){
    var name = document.querySelector(".get_name").value;
    var surname = document.querySelector(".get_surname").value;
    var number_phone = document.querySelector(".get_number").value;
    validation(name, surname, number_phone);
}

function validation(name, surname, number_phone){
    if( name.length < 3 || name.length > 16){
        console.log("Name must be bigger then 3 on less then 16");
    }
    else if (name === ""){
        console.log("Enter name");
    }
    else if (surname.length < 3 || surname.length > 16){
        console.log("Name must be bigger then 3 on less then 16");
    }
    else if (number_phone.length != 10){
        console.log("Number phone length must be 10");
    }
    else if(isNaN(number_phone)){
        console.log("Enter numbers");
    }
    else{
        var new_number = new save_obj(name, surname, number_phone);
        numbers_arr.push(new_number);
        console.log("<---------- Add new numbers ----------->");
        numbers_arr.forEach(function(element, index){
            console.log(element, index);
        });
        console.log("<---------- Add new numbers ----------->");
    }
}

function save_obj(name, surname, number_phone){
    this.name = name;
    this.surname = surname;
    this.number_phone = number_phone;
}

var numbers_arr = ["Phone book: "];

function del_num(){
    var num_del = document.querySelector(".get_number_to_delete").value;

    numbers_arr.splice(num_del, 1);
    console.log("<---------- Delete number ----------->");
    numbers_arr.forEach(function (element, index) {
        console.log(element, index);
    });
    console.log("<---------- Delete number ----------->");
    if(numbers_arr.length === 0){
        console.log("<--------------------->");
        console.log("You a empty phone book");
        console.log("<--------------------->");
    }
}


function delete_last(){
    numbers_arr.pop();
    console.log("<---------- Delete number by pop ----------->");
    numbers_arr.forEach(function (element, index) {
        console.log(element, index);
    });
    console.log("<---------- Delete number by pop ----------->");
}

