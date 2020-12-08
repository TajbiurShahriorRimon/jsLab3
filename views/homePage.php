<?php
?>

<!doctype>
<html>
<head>
    <title></title>
    <script src="../controllers/userValidate.js"></script>
</head>
<body>
<p id='1'></p>
<!--
<script>
    document.getElementById('1').innerHTML= 1 + 6;
</script>
-->
<form name="registration" action="../controllers/userValidate.js" method="post" onsubmit="userValidate()">
    <table align="center">
        <tr>
            <td align="right">Name:</td>
            <td><input id="name" type="text" id="name" name="name"> <span id="err_name"></span>
                <script>

                </script>
                <?php
                //echo $err_name;
                ?>
            </td>
        </tr>
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

        <tr>
            <td align="right">
                Email:</td>
            <td><input type="text" id="email" name="email"><span id="err_email"></span>
                <?php
                //echo $err_email;
                ?>
            </td>
        </tr>
        <tr>
            <td align="right">
                Phone:</td>
            <td><input type="text" id="phone" name="phone"><span id="err_phone"></span>
                <?php
                //echo $err_email;
                ?>
            </td>
        </tr>
        <tr align="center">
            <td colspan="2">
                <input type="submit" value="Register">
            </td>
        </tr>
    </table>
    <br><br>
</body>
</html>
