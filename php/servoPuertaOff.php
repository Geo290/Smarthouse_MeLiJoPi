<?php
    require('connection.php');

    $result= $con->exec("UPDATE componentes SET estado = 'off', fecha = CURRENT_DATE, hora = CURRENT_TIME, valor = 90 WHERE id = 8");


?>
