<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <!-- native CSS -->
   
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
  <link rel="stylesheet" href="css/estilo.css">
    <!-- Icons -->
    <script src="https://kit.fontawesome.com/3a8bd5f476.js" crossorigin="anonymous"></script>
    <title>Document</title>
</head>

<body>

    <div class="container">
        <div class="titulo">
            <img class="logo" src="img/logo.png" alt=""> Smart House
            <!--<div>
               <button class="bot botled">Ver estado de leds</button>
            </div>-->
        </div>

        <hr>
        <div class="rows">
            <!--Barra de Opciones-->
            <div class="col1">
                <!--tooltips-->


                <div class="tooltip"> Habitaciones:
                    <span class="tooltiptext">Da clic en la habitacion a modificar</span>
                </div>

                <div id="" class="boton rec"><i class="fa-solid fa-bed" id="r" style="color: #000000;"></i>Recámara</div>

                <div id="" class="boton bano"><i class="fa-solid fa-toilet-paper" id="r" style="color: #000000;"></i>Baño</div>

                <div id="" class="boton sala"><i class="fa-solid fa-couch" id="r" style="color: #000000;"></i>Sala</div>

                <div id="" class="boton cocina"><i class="fa-solid fa-utensils" id="r" style="color: #000000;"></i>Cocina</div>

                <!--<div id="" class="boton jardin"><i class="fa-solid fa-seedling" id="r" style="color: #000000;"></i>Jardín</div>-->

                <div id="" class="boton cochera"><i class="fa-solid fa-car-side" id="r" style="color: #000000;"></i>Cochera</div>

            </div>

            <!--Contenido y Carrucel-->
            <div class="col2">
                <div id="carrucel" class="carrucel">
                    <p class="textoc">======= Vista previa de habitaciones de la casa:</p>
                    <section>
                        <img class="rec" src="img/recamara.PNG" alt="">
                        <img class="bano" src="img/bano.jpg" alt="">
                        <img class="sala" src="img/sala.jpg" alt="">
                        <img class="c" src="img/casa.PNG" alt="">
                        <img class="cocina" src="img/cocina.jpg" alt="">
                        <!--<img class="jardin" src="img/jardin.jpg" alt="">-->
                        <img class="cochera" src="img/cochera.jpg" alt="">
                    </section>


                    <div class="box"></div>

                </div>
                <!--Recamara-->
                <div id="recamaradiv" class="divs" style="background-color: #e1bea4b7;">
                    <div class="t"> Recámara
                        <div id="flecha" class="flecha">
                            <div class="tooltip"><button class="btnflecha"><img class="flecha v" src="img/volver.png" alt=""></button>
                                <span class="tooltiptext">Volver a la página principal</span>
                            </div>
                        </div>
                    </div>
                    <img class="imagen o" id="imagen" style="height: 250px;" src="img/recamara.PNG" alt=""><br>
                    <div class="b">
                        <button class="op encender" id="ledRecamaraEncender" >Encender luz <i class="fa-solid fa-lightbulb" style="color: #ffae00;"></i></button>
                        <button class="op apagar" id="ledRecamaraApagar" >Apagar <i class="fa-regular fa-lightbulb" style="color: #4f4f4f;"></i></button>
                        <button class="op encender" id="ventiladorEncender">Encender Ventilador <i class="fa-solid fa-fan" style="color: #2e919e;"></i></button>
                        <button class="op apagar" id="ventiladorApagar">Apagar <i class="fa-solid fa-fan" style="color: #5f6c6e;"></i></button>

                    </div>
                </div>

                <!--Baño-->
                    <div id="banodiv" class="divs" style="background-color: #7fafb963;">
                        <div class="t">Baño
                            <div id="flecha" class="flecha">
                                <div class="tooltip"><button class="btnflecha"><img class="flecha v" src="img/volver.png" alt=""></button>
                                    <span class="tooltiptext">Volver a la página principal</span>
                                </div>
                            </div>
                        </div>
                        <img class="imagen o" style="height: 250px;" src="img/bano.jpg" alt=""> <br>
                        <div class="b dos">
                            <button class="op encender" id="ledBanoEncender">Encender luz <i class="fa-solid fa-lightbulb" style="color: #ffae00;"></i></button>
                            <button class="op apagar" id="ledBanoApagar">Apagar <i class="fa-regular fa-lightbulb" style="color: #4f4f4f;"></i></button>
                        </div>
                    </div>
                


                <!--Sala-->
                    <div id="saladiv" class="divs" style="background-color: #e5e49fd6;">
                        <div class="t">Sala
                            <div id="flecha" class="flecha">
                                <div class="tooltip"><button class="btnflecha"><img class="flecha v" src="img/volver.png" alt=""></button>
                                    <span class="tooltiptext">Volver a la página principal</span>
                                </div>
                            </div>
                        </div>
                        <img class="imagen o" style="height: 250px;" src="img/sala.jpg" alt=""><br>
                        <div class="b dos">
                            <button class="op encender" id="ledSalaEncender">Encender luz <i class="fa-solid fa-lightbulb" style="color: #ffae00;"></i></button>
                            <button class="op apagar" id="ledSalaApagar">Apagar <i class="fa-regular fa-lightbulb" style="color: #4f4f4f;"></i></button>
                        </div>
                    </div>
                


                <!--Cocina-->
                    <div id="cocinadiv" class="divs" style="background-color: #eabc7b7f;">
                        <div class="t">Cocina
                            <div id="flecha" class="flecha">
                                <div class="tooltip"><button class="btnflecha"><img class="flecha v" src="img/volver.png" alt=""></button>
                                    <span class="tooltiptext">Volver a la página principal</span>
                                </div>
                            </div>
                        </div>
                        <img class="imagen o" style="height: 250px;" src="img/cocina.jpg" alt=""><br>
                        <div class="b dos">
                            <button class="op encender" id="ledCocinaEncender">Encender luz <i class="fa-solid fa-lightbulb" style="color: #ffae00;"></i></button>
                            <button class="op apagar" id="ledCocinaApagar">Apagar <i class="fa-regular fa-lightbulb" style="color: #4f4f4f;"></i></button>
                        </div>
                    </div>
                

                <!--Cochera-->
                    <div id="cocheradiv" class="divs" style="background-color: #f0d39da0;">
                        <div class="t">Cochera
                            <div id="flecha" class="flecha">
                                <div class="tooltip"><button class="btnflecha"><img class="flecha v" src="img/volver.png" alt=""></button>
                                    <span class="tooltiptext">Volver a la página principal</span>
                                </div>
                            </div>
                        </div>
                        <img class="imagen o" style="height: 250px;" src="img/cochera.jpg" alt=""><br>
                        <div class="b">
                            <button class="op encender" id="ledCocheraEncender">Encender luz <i class="fa-solid fa-lightbulb" style="color: #ffae00;"></i></button>
                            <button class="op apagar" id="ledCocheraApagar">Apagar <i class="fa-regular fa-lightbulb" style="color: #4f4f4f;"></i></button>
                            <button class="op encender" id="servoCocheraAbrir">Abrir Garage <i class="fa-solid fa-door-open" style="color: #c46b3b;"></i> </button>
                            <button class="op apagar" id="servoCocheraCerrar">Cerrar <i class="fa-solid fa-door-closed" style="color: #c69239;"></i></button>

                        </div>
                    </div>

                </div>


                <!--Jardin-->
                    <!--<div id="jardindiv" class="divs" style="background-color: #ade2b2ae;">
                        <div class="t">Jardin
                            <div id="flecha" class="flecha">
                                <div class="tooltip"><button class="btnflecha"><img class="flecha v" src="img/volver.png" alt=""></button>
                                    <span class="tooltiptext">Volver a la página principal</span>
                                </div>
                            </div>
                        </div>
                        <img class="imagen o" style="height: 250px;" src="img/jardin.jpg" alt=""><br>
                        <div class="b dos">
                            <!--button class="op encender" id="led6">Encender luz <i class="fa-solid fa-lightbulb" style="color: #ffae00;"></i></button>
                            <button class="op apagar" id="led6a">Apagar <i class="fa-regular fa-lightbulb" style="color: #4f4f4f;"></i></button
                            <button class="op encender" id="servoPuertaAbrir">Abrir puerta <i class="fa-solid fa-door-open" style="color: #c46b3b;"></i></button>
                            <button class="op apagar" id="servoPuertaCerrar">Cerrar <i class="fa-solid fa-door-closed" style="color: #c69239;"></i> </button>
                        </div>
                    </div>-->
                
            </div>
        </div>
    </div>
    <div class="pie">
    </div>
    <!-- Native JQuery -->
    <script src="js/main.js"></script>
</body>

</html>
