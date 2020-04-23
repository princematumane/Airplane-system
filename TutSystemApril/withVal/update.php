<?php
   include("config.php");
   include("session.php");
      $logged_Email = $_SESSION['login_user'] ;
    

   $password_update  = $_GET['password'];
   $confirmPassword = $_GET['passwordConfirm'];
   $name_update = $_GET['name'];
   $surname_update  = $_GET['surname'];
   $phoneNumber_update  = $_GET['phoneNumber'];

   if($password_update == $confirmPassword)
   {
   
       $sql_Update = "UPDATE userInfoFlight SET Name='$name_update',Surname='$surname_update',Email='$logged_Email',PhoneNumber=' $phoneNumber_update',Password='$password_update' WHERE Email='$logged_Email'";
        $results = mysqli_query($db,$sql_Update);
        $row = mysqli_fetch_array($results,MYSQLI_ASSOC);
      
        if($results)
        {
    		echo "OK";
        }else
    	{
    		echo "Not UPDATED";
    	}
   }else{
	   echo "NOT MATCH";
   }
   mysqli_close($db);
?>