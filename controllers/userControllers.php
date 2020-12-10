<?php
//include 'models/database.php';
//include_once 'views/dashboard.php';
echo 'fasf';
if(isset($_POST['login'])){
    include 'models/database.php';
    echo 'fszdfs';
    $username = htmlspecialchars($_POST['username']);
    $pass = htmlspecialchars($_POST['pass']);
    $encPass = md5($pass);

    $db = new DataBase();
    $db->dbCon();
    $sig = $db->searchUsers($username, $pass);
    //$sig = $db->searchUsers($username, $encPass);
    if($sig == 1){
        header('Location: views/dashboard.php');
    }
    else{
        $found = "password did not match with the username";
    }
}

if(isset($_POST['register'])) {
    include '../models/database.php';
    $name = htmlspecialchars($_POST['name']);
    $username = htmlspecialchars($_POST['username']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $pass = htmlspecialchars($_POST['pass']);
    $encPass = md5($pass);

    $db = new DataBase();
    $db->dbCon();
    $sig = $db->searchUserName($username);
    if($sig == 0){
        $db->insertUser($name, $username, $email, $pass, $phone);
        //$db->insertUser($name, $username, $email, $encPass, $phone);
        header("Location : ../index.php");
    }
}
?>
