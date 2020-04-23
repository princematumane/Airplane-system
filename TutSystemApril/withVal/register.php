<?php
   include("config.php");
  
   $email = $_GET['email'];
   $password = $_GET['password'];
   $confirmPassword = $_GET['passwordConfirm'];
   $name = $_GET['name'];
   $surname = $_GET['surname'];
   $phoneNumber = $_GET['phoneNumber'];
   
   if($password == $confirmPassword)
   {
		$sql_select = "SELECT * FROM `userInfoFlight` WHERE Email ='$email'";
		$results = mysqli_query($db,$sql_select);
		$row = mysqli_fetch_array($results,MYSQLI_ASSOC);
		$count = mysqli_num_rows($results);
	  
		if($count >= 1)
		{
			echo "Exist";
		}else
		{
		   $sql ="INSERT INTO `userInfoFlight`(`Name`, `Surname`, `Email`, `PhoneNumber`, `Password`) VALUES ('$name','$surname ','$email','$phoneNumber', $password)";
		   if(mysqli_query($db,$sql))
		   {
			   echo "OK";
		   }else
		   {
			   echo "NOT OK";
		   }
		}
   }else{
	   echo "NOT MATCH";
   }
   mysqli_close($db);
?>