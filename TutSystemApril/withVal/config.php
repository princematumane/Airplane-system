<?php
   define('DB_SERVER', 'localhost');
   define('DB_USERNAME', 'id5856110_prince');
   define('DB_PASSWORD', 'kb@12345');
   define('DB_DATABASE', 'id5856110_smartparking');
   $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
	if(!$db)
	{
		die("ERROR"  + mysqli_connect_error());
	}else{
		
	}
?>