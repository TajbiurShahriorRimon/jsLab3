function getElement(id){
    return document.getElementById(id);
}

function userValidate(){
    refresh();
    document.writeln('dsef');
    /*var name = document.forms["registration"]["name"];
    var username = document.forms["registration"]["username"];
    var password = document.forms["registration"]["pass"];
    var email = document.forms["registration"]["email"];
    var phone = document.forms["registration"]["phone"];*/

    var name = getElement("name");
    var email = getElement("email");
    var username = getElement("username");
    var password = getElement("pass");
    var phone = getElement("phone");

    var err_name = getElement("err_name");
    var err_email = getElement("err_email");
    var err_username = getElement("err_username");
    var err_password = getElement("err_pass");
    var err_phone = getElement("err_phone");

    console.log(name);
    document.writeln(name);
    alert('efaf');

    var has_err = false;

    if(name.value == ""){
        hasErr= true;
        err_name.innerHTML = "Name Required";
        name.focus();
        //return !hasErr;
    }
    if(name.value != ""){
        if(name.search("1") && name.search("2") && name.search("3") && name.search("4")){
            hasErr= true;
            err_name.innerHTML = "Name cannot contain value/number";
            name.focus();
        }
    }
    if (username == "") {
        alert("username must be filled out");
        has_err = true;
        return false;
    }
    if (password == "") {
        document.write("password must be filled out");
        has_err = true;
        return false;
    }
    if (email == "") {
        document.write("email must be filled out");
        has_err = true;
        return false;
    }
    if (phone == "") {
        document.write("phone must be filled out");
        has_err = true;
        return false;
    }
    if(!has_err){
        document.write('done!!!');
        return false;
    }
    //return false;
}

function refresh(){
    var err_name = getElement("err_name");
    var err_email = getElement("err_email");
    var err_username = getElement("err_username");

    err_name.innerHTML = "";
    err_email.innerHTML = "";
    err_username.innerHTML = "";

}