function get_data(){
    var login = document.querySelector(".log").value;
    var password = document.querySelector(".pass").value;
    var re_password = document.querySelector(".re_pass").value;

    var current_login = "admin";

    if (login === current_login){
        console.log("login accept");
    }
    else if (password.length <= 4 || re_password.length <= 4){
        console.log("Password must be bigger than 4 letters");
    }
    else if (password.length >= 16 || re_password.length >= 16){
        console.log("Password must be less then 16 letters");
    }
    else if (password === re_password){
        console.log("Welcome");
    }
    else{
        console.log("Different passwords");
    }
}