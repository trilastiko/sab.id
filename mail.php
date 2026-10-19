<?php
// Diagnostic endpoint: keep disabled in production.
if (getenv('SMTP_TEST_ENABLED') !== '1') {
    http_response_code(404);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    exit('Method not allowed.');
}
include __DIR__ . '/classes/class.phpmailer.php';
require __DIR__ . '/smtp_config.php';
$mail->Subject = 'SMTP configuration test';
$mail->AddAddress('mail@sab.id', 'SAB');
$mail->MsgHTML('Testing...');
if ($mail->Send()) echo 'Message has been sent';
else {
    http_response_code(502);
    echo 'Failed to send message';
}
?>
