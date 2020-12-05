<?php
 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Connecting to MySQL Database.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate Student ID from JSON $obj array and store into $S_Name.

 $S_FN = $obj['fname'];
 $S_SN = $obj['sname'];
 $S_NP = $obj['nphone'];
 
 // Populate Student name from JSON $obj array and store into $S_Name.
 //$S_ID = $obj['id'];

 
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = "INSERT INTO mbook (idauto,fname,sname,nphone) values ('','$S_FN','$S_SN','$S_NP')";

 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Successfully Inserted Database.';
 
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