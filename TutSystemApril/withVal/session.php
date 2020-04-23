<?php
   include('config.php');
   session_start();
   
   $user_check = $_SESSION['login_user'];
   $user_password =  $_SESSION['login_password'];
   
   $ses_sql = mysqli_query($db,"SELECT * FROM userInfoFlight WHERE Email = '$user_check' and password = '$user_password'");
   
   $row = mysqli_fetch_array($ses_sql,MYSQLI_ASSOC);
   
   $login_session = $row['username'];
   
   if(!isset($_SESSION['login_user'])){
      header("location:index.html");
      die();
   }
?>