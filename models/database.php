<?php
class DataBase
{
    private $serverName = "localhost: 3345";
    private $user = "root";
    private $dbpassword = "";
    private $dbName = "jslab3";

    private $con;

    function dbCon()
    {
        $this->con = mysqli_connect($this->serverName, $this->user, $this->dbpassword, $this->dbName);

        if (!$this->con) {
            die("not connected");
        } else {
            //echo "Connected<br> Now Showing data <br><br/>";
        }
    }

    function insertUser($name, $username, $email, $password, $phone){
        $sqlQuery = "INSERT INTO users (name, username, email, password, phone)
                    VALUES ('$name', '$username', '$email', '$password', '$phone')";

        mysqli_query($this->con, $sqlQuery);
    }

    function allUsers(){
        $sqlQuery = "SELECT * FROM users;";

        $result = mysqli_query($this->con, $sqlQuery);
        $row = mysqli_num_rows($result);

        $data = [];

        if($row > 0){
            while ($rowArray = mysqli_fetch_assoc($result)){
                $data[] = $rowArray;
            }
            return $data;
        }
        else{
            return $data;
        }

    }

    function searchUsers($username, $pass){
        $sqlQuery = "SELECT * FROM users WHERE username = '$username' AND password = '$pass';";

        $result = mysqli_query($this->con, $sqlQuery);
        $row = mysqli_num_rows($result);

        if($row > 0){
            return 1;
        }
        else{
            //return  "not found";
        }
    }

    function searchUserName($username){
        $sqlQuery = "SELECT * FROM users WHERE username = '$username';";

        $result = mysqli_query($this->con, $sqlQuery);
        $row = mysqli_num_rows($result);

        if($row > 0){
            return 1;
        }
        else{
            //return  "not found";
            return 0;
        }
    }
}
?>
