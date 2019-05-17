<?php
include "classes/class.phpmailer.php";
$mail = new PHPMailer; 
$mail->IsSMTP();
$mail->SMTPSecure = 'ssl'; 
$mail->Host = "smtp.gmail.com"; //host masing2 provider email
$mail->SMTPDebug = 2;
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->Username = "alik.dagdigdug@gmail.com"; //user email
$mail->Password = "Lengkong88"; //password email 
$mail->SetFrom("mail@domain.com","Nama pengirim"); //set email pengirim
$mail->Subject = "Testing"; //subyek email
$mail->AddAddress("alik.dagdigdug@gmail.com","Abdul");  //tujuan email
$mail->MsgHTML("Testing...");
if($mail->Send()) echo "Message has been sent";
else echo "Failed to sending message";
?>