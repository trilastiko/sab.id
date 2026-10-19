<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    exit('Method not allowed.');
}
$email = isset($_POST['userEmail']) && is_string($_POST['userEmail']) ? trim($_POST['userEmail']) : '';
$name = isset($_POST['userName']) && is_string($_POST['userName']) ? trim($_POST['userName']) : '';
$message = isset($_POST['message']) && is_string($_POST['message']) ? trim($_POST['message']) : '';
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $email . $name) || strlen($name) > 200 || $message === '' || strlen($message) > 20000) {
    http_response_code(400);
    exit('Please provide a valid email address and message.');
}
include __DIR__ . '/classes/class.phpmailer.php';
require __DIR__ . '/smtp_config.php';
$mail->AddReplyTo($email, $name);
$mail->Subject = 'Contact form from website sab.id';
$mail->AddAddress('mail@sab.id', 'SAB');
$mail->MsgHTML(nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8')));
if ($mail->Send()) echo "<p class='success'>Contact Mail Sent.</p>";
else {
    http_response_code(502);
    echo "<p class='Error'>Problem in Sending Mail.</p>";
}
?>
