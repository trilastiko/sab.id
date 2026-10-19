<?php
// Configure these variables in the hosting environment, never in this file.
$smtpUsername = getenv('SMTP_USERNAME');
$smtpPassword = getenv('SMTP_PASSWORD');
if (!$smtpUsername || !$smtpPassword) {
    http_response_code(503);
    exit('Mail service is temporarily unavailable.');
}
$mail = new PHPMailer;
$mail->IsSMTP();
$mail->SMTPSecure = getenv('SMTP_SECURE') ? getenv('SMTP_SECURE') : 'ssl';
$mail->Host = getenv('SMTP_HOST') ? getenv('SMTP_HOST') : 'banshee.mxlogin.com';
$mail->Port = getenv('SMTP_PORT') ? (int) getenv('SMTP_PORT') : 465;
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
$mail->Username = $smtpUsername;
$mail->Password = $smtpPassword;
$mail->SetFrom($smtpUsername, 'SAB');
?>
