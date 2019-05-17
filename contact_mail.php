<?php
include "classes/class.phpmailer.php";
$mail = new PHPMailer; 
$mail->IsSMTP();
$mail->SMTPSecure = 'ssl'; 
$mail->Host = "banshee.mxlogin.com"; //host masing2 provider email
$mail->SMTPDebug = 0;
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->Username = "mail@sab.id"; //user email
$mail->Password = "APn7Tyue3t,N"; //password email 
$mail->SetFrom($_POST["userEmail"],$_POST["userName"]); //set email pengirim
$mail->Subject = "Contact form from website sab.id"; //subyek email
$mail->AddAddress("mail@sab.id","SAB");  //tujuan email
$mail->MsgHTML($_POST["message"]);
if($mail->Send()) echo "<p class='success'>Contact Mail Sent.</p>";
else echo "<p class='Error'>Problem in Sending Mail.</p>";
?>
