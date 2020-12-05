<?php
 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Connecting to MySQL Database.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 

 $S_FN = $obj['fname'];

 
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = "SELECT * FROM mbook where fname = '$S_FN' ";
 $objQuery = mysqli_query($con,$Sql_Query);
 $objResult = mysqli_fetch_array($objQuery,MYSQLI_ASSOC);
 $S1 = $objResult["fname"];
 $S2 = $objResult["sname"];
 $S3 = $objResult["nphone"];
 if(mysqli_query($con,$Sql_Query)){

 // If the record inserted successfully then show the message.
$MSG = "ชื่อ "."$S1"." นามสกุล "."$S2"." เบอร์ "."$S3";
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
?>