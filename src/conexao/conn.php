<?php
$hostname = "sql300.epizy.com";	
$database ="epiz_31642495_sysrifa";
$user = "epiz_31642495";
$password = "lxrc9P5IaIr";

try{
    $pdo = new PDO('mysql:host=' . $hostname .';dbname=' . $database, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
}catch(PDOException $e){
    echo 'Erro: ' . $e->getMessage();
}