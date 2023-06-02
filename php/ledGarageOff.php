<?php
    require('connection.php');

    $result= $con->exec("UPDATE componentes SET estado = 'off', fecha = CURRENT_DATE, hora = CURRENT_TIME, valor = 0 WHERE id = 5");
    
    $total_income_query = $con->prepare("SELECT SUM(valor) FROM componentes WHERE id < 7");
    $total_income_query->execute();
    $total = $total_income_query->fetch(PDO::FETCH_NUM);
    echo $suma = $total[0];
    
    shell_exec("sudo python /var/www/html/smartHouse/python/componentes.py ".$suma);
?>
