<?php
include "classes/class.phpmailer.php";
$mail = new PHPMailer; 
$mail->IsSMTP();
$mail->SMTPSecure = 'ssl'; 
$mail->Host = "banshee.mxlogin.com"; //host masing2 provider email
$mail->SMTPDebug = 2;
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->Username = "mail@sab.id"; //user email
$mail->Password = "APn7Tyue3t,N"; //password email 
$mail->SetFrom("alik.dagdigdug@gmail.com","Abdul"); //set email pengirim
$mail->Subject = "Testing"; //subyek email
$mail->AddAddress("mail@sab.id","SAB");  //tujuan email
$mail->MsgHTML("Testing...");
if($mail->Send()) echo "Message has been sent";
else echo "Failed to sending message";
?>