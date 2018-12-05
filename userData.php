<?php  
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
?>  

<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);

//Load the database configuration file
require 'dbConfig.php';

$ID       = $_POST['uname'];
$Password = $_POST['psw'];

// Create connection
$conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);
// Check connection
if (!$conn) {
     die("Connection failed: " . mysqli_connect_error());
}
$userName = test_data($_REQUEST["uname"]);    
$mypswd = test_data($_REQUEST["psw"]);

function test_data($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
$sql = "SELECT * FROM users WHERE userName = '$userName' and pass = '$mypswd'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_row($result);

if ($row[1] === $userName){    
    // Set session variables
    $_SESSION["uname"] = $userName;
    $_SESSION["full_name"] = $row[3];
    header('Location: index.php');
    exit;
}
mysqli_close($conn);

?>