<?php
    session_start();
    session_destroy();
    $_SESSION = [];
    print_r("sd");
    header('Location: index.php');
    exit;
?>