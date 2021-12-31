<?php
$email = test_input($_POST["email"]);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $emailErr = "Invalid email format";
}
$name = test_input($_POST["name"]);

$message = "Sender: ".$email ."\n". test_input($_POST["message"]);

mail('tristansizik@gmail.com', 'Email from Website',$message );

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data);
}
?>