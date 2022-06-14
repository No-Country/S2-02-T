<?php
    $config = file_get_contents("config.json");
    $config = json_decode($config, true);
    $link = mysqli_connect($config["server"],$config["user"],$config["pass"]);
    $sql = "CREATE DATABASE ".$config["db_name"];
    $result	= mysqli_query($link,$sql); 
    include("dbml.php");
    $dbml = new dbManager($config["db_name"],"id");
    $sql = "CREATE TABLE usuarios (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";
    $dbml->qy($sql);
    $dbml = new dbManager("usuarios","id");
    $dbml->insert("dert","Dert","Driver","dertdriver@hotmail.com");
    $dbml->save();
    $dbml->insert("edu","Edu","edumo","edugo@hotmail.com");
    $dbml->save();
    $dbml->insert("mariano","Mariano","maca","maca@hotmail.com");
    $dbml->save();
    $dbml->insert("vane","vane","vanesa","vanesa@hotmail.com");
    $dbml->save();
?>