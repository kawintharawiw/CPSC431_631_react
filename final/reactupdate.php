<?php
 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Connecting to MySQL Database.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 

 $S_ID = $obj['idauto'];
 $S_FN = $obj['fname'];
 $S_SN = $obj['sname'];
 $S_NP = $obj['nphone'];
 
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = "UPDATE mbook SET fname = '$S_FN',sname ='$S_SN', nphone = '$S_NP' WHERE idauto = $S_ID";
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Update Successfully' ;
 
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