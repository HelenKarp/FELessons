<?php
use PHPMailer/PHPMailer/PHPMailer;
use PHPMailer/PHPMailer/SMTP;
use PHPMailer/PHPMailer/Exeption;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer('true');
$mail->CharSet = 'UTF-8';
$mail->setLanguage('en', 'phpmailer/language/');
$mail->isHTML('true');

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'alona.karpenko44@gmail.com';
$mail->Password = 'vtkdgwfxdsunmqoy';
$mail->Port = ' 587';
$mail->SMTPSecure = 'TLS';

$mail->SetForm('alona.karpenko44@gmail.com', 'Alona Test');
$mail->addAdress('alona.karpenko44@gmail.com');
$mail->Subject = 'Email from Alona';

$body = '<h1> Hi! It`s Alona </h1>';

if (trim(!empty(POST['name']))) {
    $body .= "<p>Name: <strong>".$_POST['name']."<strong/></p>";
}

if (trim(!empty(POST['email']))) {
    $body .= "<p>E-mail: <strong>".$_POST['email']."<strong/></p>";
}

if (trim(!empty(POST['message']))) {
    $body .= "<p>Message: <strong>".$_POST['message']."<strong/></p>";
}
if (trim(!empty(POST['like']))) {
    $body .= "<p>Do you like?: <strong>".$_POST['like']."<strong/></p>";
}

if (trim(!empty(POST['thebest']))) {
    $body .= " <strong>"you rock!"<strong/>";
}

if (trim(!empty(S_FILES['image']['tmp_name']))) {
   $fileTmpName = S_FILES['image']['tmp_name'];
   $fileName = S_FILES['image']['name'];
   $mail->addAttachment($fileTmpName, $fileName);
}

$mail->send();
$mail->smtpClose();