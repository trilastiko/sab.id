<?php
$to = 'alik.dagdigdug@gmail.com';
$subject = 'This is a test email';
$message = 'Hello john!';
$from = 'jane@runcloud.me';

$headers = sprintf("From: %s\r\nReply-To: %s", $from, $from);

if(mail($to, $subject, $message, $headers)){
print "<p class='success'>Contact Mail Sent.</p>";
} else {
print "<p class='Error'>Problem in Sending Mail.</p>";
}