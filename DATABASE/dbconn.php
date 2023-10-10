<?php
$host='localhost';
$username='root';
$password='';
$database='security';
$conn = new mysqli($host, $username, $password, $database);
if (!$conn) {
    mysqli_connect_error();
}

// $sql = "SELECT * FROM `user`";
// $result = mysqli_query($conn, $sql);
// $row = mysqli_fetch_assoc($result);
?>