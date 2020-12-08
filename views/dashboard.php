<?php
/*if(!isset($_POST['login'])){
    header('Location: ../index.php');
}*/
include_once '../models/database.php'
?>

<!doctype>
<html>
<head>

</head>
<body>
    <table align="center" border="1" cellspacing="2">
        <tr>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Phone</td>
        </tr>
        <?php
        $db = new DataBase();
        $db->dbCon();
        $data = $db->allUsers();
        if(!empty($data)) {
            foreach ($data as $users)
                echo "<tr>
                            <td>" . $users['name'] . "</td>
                            <td>" . $users['username'] . "</td>
                            <td>" . $users['email'] . "</td>
                            <td>" . $users['phone'] . "</td>
                        </tr>";
        }
        ?>
    </table>
</body>
</html>
