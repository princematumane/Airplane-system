<?php
   include("config.php");
   session_start();
  
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      $myusername = mysqli_real_escape_string($db,$_POST['email']);
      $mypassword = mysqli_real_escape_string($db,$_POST['password']); 
      
      $sql = "SELECT * FROM userInfoFlight WHERE Email = '$myusername' and password = '$mypassword'";
      $result = mysqli_query($db,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      
	  $name = $row['Name'];
	  $surname = $row['Surname'];
	  
      // = $row['active'];
      
      $count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count >= 1) {
         $_SESSION['login_user'] = $myusername;
         $_SESSION['login_password'] = $mypassword;
         $_SESSION['login_name'] =   $name;
         $_SESSION['login_surname'] = $surname;
         
		 echo "LOGGED";
      }else {
		  echo "WRONG";
      }
   }
   mysqli_close($db);
?>