<?php
    $con = new PDO('mysql:host=localhost;dbname=smarthouse','root','12345');
    /*if(!$con){
        echo 'error al conectar';
    }else{
        echo 'conectado';
    }*/
    return $con;
?>
