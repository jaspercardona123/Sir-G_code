<?php 
session_start();
$con=new mysqli('localhost' , 'root' , '', 'mydbit107');

    header('location:..//PHP/login.php');
    session_unset();
    session_destroy();


?>