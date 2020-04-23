<?php
//insert.php;
include("session.php");

$loggedId_Num =  $_SESSION['login_user'];

if(isset($_POST["member_name"]))
{
$conn = new PDO("mysql:host=localhost;dbname=id5856110_smartparking", 'id5856110_prince', 'kb@12345');
 //$connect = new PDO("mysql:host=localhost;dbname=testing4", "root", "");

 for($count = 0; $count < count($_POST["member_name"]); $count++)
 {  
	$query = "INSERT INTO membersInfo (`memberName`, `memberId`, `memberTitle`, `memberGroupAge`, `HolderId`) VALUES (:member_name, :member_idNum , :member_title , :member_ageGroup , :holder_Id)";
	  $statement = $conn->prepare($query);
	  $statement->execute(
	   array(
		':member_name'  => $_POST["member_name"][$count], 
		':member_idNum' => $_POST["member_idNum"][$count], 
		':member_title'  => $_POST["member_title"][$count],
		':member_ageGroup' => $_POST["member_ageGroup"][$count],
		':holder_Id' => $loggedId_Num 
	   )
	  );
 }
 $result = $statement->fetchAll();
 if(isset($result))
 {
  echo 'ok';
 }
}
?>