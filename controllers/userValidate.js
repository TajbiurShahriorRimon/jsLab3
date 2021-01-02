function getElement(id){
    return document.getElementById(id);
}

function userLoginValidate(){
    //alert("hello ");
    refresh();
    var has_err=false;
    /*var username=getElement("username");
    var password=getElement("pass");
    var err_username=getElement("err_username");
    var err_password=getElement("err_pass");

    var username = document.forms["loginForm"]["username"].value;
    //alert(username);
    var password = document.forms["loginForm"]["pass"].value;*/

    var e_username = getElement("username");
    var e_password = getElement("pass");
    var err_username = getElement("err_username");
    var err_password = getElement("err_pass");

    var hasErr = false;

    if(e_username.value == ""){
        hasErr= true;
        err_username.innerHTML = "Username Required";
        e_username.focus();
        return !hasErr;
    }
    if(e_password.value == ""){
        hasErr= true;
        err_password.innerHTML = "Password Required";
        e_password.focus();
        return !hasErr;
    }

    return !hasErr;
}

function getElement(id){
    return document.getElementById(id);
}
function userRegistrationValidate(){
    //refresh();
    var err_name = getElement("err_name");
    var err_email = getElement("err_email");
    var err_username = getElement("err_username");
    var err_phone = getElement("err_phone");

    err_name.innerHTML = "";
    err_email.innerHTML = "";
    err_username.innerHTML = "";
    err_phone.innerHTML = "";

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
    else if(e_name.search("1")!=-1 && e_name.search("2")!=-1 && e_name.search("3")!=-1 && e_name.search("4")!=-1 && e_name.search("5")!=-1 && e_name.search("6")!=-1 && e_name.search("7")!=-1 && e_name.search("8")!=-1 && e_name.search("9")!=-1 && e_name.search("0")!=-1){
        hasErr=true;
        err_name.innerHTML="Name Cannot Contain Any Number, Only Character";
        err_name.focus();
        return false;
    }
    if(e_email.value == ""){
        hasErr= true;
        err_email.innerHTML = "Email Required";
        e_email.focus();
        return false;
    }
    if(e_username.value == ""){
        hasErr= true;
        err_username.innerHTML = "Username Required";
        e_username.focus();
        return !hasErr;
    }

    if(e_phone.value==""){
        hasErr=true;
        err_phone.innerHTML="Phone number must be entered";
        err_phone.focus();
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