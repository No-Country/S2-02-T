<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
</html>
<?php
    echo "<center>Base de datos<br></center>";
    include("dbml.php");
    $dbml = new dbManager("usuarios","id");
    $dbml->select();
    print_r($dbml->getArray());
?>