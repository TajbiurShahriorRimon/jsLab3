<?php
/*if (isset($_POST['login'])){
    header('Location: views/dashboard.php');
}*/
include 'controllers/userControllers.php'
?>
<!doctype>
<html>
<head>
    <!--
<script src="controllers/userValidate.js"></script>
-->
</head>
<body>
<form name="login" action="" method="post"> <!--onsubmit="return userLoginValidate()"-->
    <table align="center">
        <tr>
            <td align="right">
                Username:</td>
            <td><input type="text" id="username" name="username"><span id="err_username"></span>
                <?php
                //echo $err_username;
                ?>
            </td>
        </tr>
        <tr>
            <td align="right">Password:</td>
            <td><input type="password" id="pass" name="pass"><span id="err_pass"></span>
                <?php
                //echo $err_pass;
                ?>
            </td>
        </tr>
        <tr align="center">
            <td colspan="2">
                <input name="login" type="submit" value="Login">
            </td>
        </tr>
    </table>
</form>
</body>
</html>
