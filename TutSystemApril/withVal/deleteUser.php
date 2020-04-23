<?php
   include("config.php");
    include("session.php");
     $logged_Email = $_SESSION['login_user'] ;
  
		$sql_select = "DELETE FROM userInfoFlight WHERE Email = '$logged_Email'";
		
		$results = mysqli_query($db,$sql_select);
		$row = mysqli_fetch_array($results,MYSQLI_ASSOC);
		$count = mysqli_num_rows($results);
	 

header( 'Location: index.html' );

   mysqli_close($db);
?>