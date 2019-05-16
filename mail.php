<?php
$to = 'alik.dagdigdug@gmail.com';
$subject = 'This is a test email';
$message = 'Hello john!';
$from = 'jane@runcloud.me';

$headers = sprintf("From: %s\r\nReply-To: %s", $from, $from);

mail($to, $subject, $message, $headers);