function getElement(id){
    return document.getElementById(id);
}

function userLoginValidate(){
    //alert("hello ");
    refresh();
    var has_err=false;
    /*var username=getElement("username");
    var password=getElement("pass");*/
    var err_username=getElement("err_username");
    var err_password=getElement("err_pass");

    var username = document.forms["loginForm"]["username"].value;
    //alert(username);
    var password = document.forms["loginForm"]["pass"].value;

    if(username == ""){
        alert("empty username");
        has_err=true;
        err_username.innerHTML="Username cannot be empty";
        err_username.focus();
        return false;
    }
    else {
        alert(username);
        return true;
    }
    if(password == ""){
        alert("empty password");
        has_err=true;
        err_password.innerHTML="Password cannot be empty";
        err_password.focus();
        return false;
    }
    else {
        alert(password);
        return true;
    }

    return !has_err;
}

function getElement(id){
    return document.getElementById(id);
}
function userRegistrationValidate(){
    refresh();
    var hasErr=false;
    var e_name = getElement("name");
    var e_email = getElement("email");
    var e_username = getElement("username");
    var e_password = getElement("pass");
    var e_phone = getElement("phone");

    var err_password = getElement("err_pass");
    var err_name = getElement("err_name");
    var err_email = getElement("err_email");
    var err_username = getElement("err_username");
    var err_phone = getElement("err_phone");

    if(e_name.value == ""){
        hasErr= true;
        err_name.innerHTML = "Username Required";
        e_name.focus();
        return !hasErr;
    }
    if(e_email.value == ""){
        hasErr= true;
        err_email.innerHTML = "Email Required";
        e_email.focus();
        return !hasErr;
    }
    if(e_username.value == ""){
        hasErr= true;
        err_username.innerHTML = "Username Required";
        e_username.focus();
        return !hasErr;
    }
    return !hasErr;

}
function refresh(){
    var err_name = getElement("err_name");
    var err_email = getElement("err_email");
    var err_username = getElement("err_username");

    err_name.innerHTML = "";
    err_email.innerHTML = "";
    err_username.innerHTML = "";

}

/*function refresh(){
    var err_name = getElement("err_name");
    var err_email = getElement("err_email");
    var err_username = getElement("err_username");
    var err_password = getElement("err_password");
    var err_phone = getElement("err_phone");

    err_name.innerHTML = "";
    err_email.innerHTML = "";
    err_username.innerHTML = "";
    err_phone.innerHTML = "";
    err_password.innerHTML = "";

}*/