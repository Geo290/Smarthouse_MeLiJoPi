$(document).ready(function () {

    const divr = $("#recamaradiv")
    const divb = $("#banodiv")
    const divs = $("#saladiv")
    const divcoc = $("#cocinadiv")
    const divcoch = $("#cocheradiv")
    const divj = $("#jardindiv")
    const divest = $("#estadoleds")
    //botones
    const bled = $("#botled")
    const br = $("#rec")
    const br2 = $("#bano");
    const br3 = $("#sala")
    const br4 = $("#cocina")
    const br5 = $("#jardin")
    const br6 = $("#cochera")
    const volver = $("#flecha")
    const btnvolver = $("#btnvolver")
    const btnled1 = $("#led1Encender")
    const btnled1a = $("led1Apagar")
    const ledrecE= $("ledRecamaraEncender")
    const ledrecA= $("ledRecamaraApagar")

 

    $(".btnflecha").click(function (e) {
        e.preventDefault();
        console.log('hab on')
        //divs
        $("#carrucel").css("display", "block");
        divest.css("display", "none");
        divr.css("display", "none");
        divb.css("display", "none");
        divs.css("display", "none");
        divcoc.css("display", "none");
        divcoch.css("display", "none");
        divj.css("display", "none");        
        divest.css("display", "none");
        $(".rec").removeClass("presion");
        $(".bano").removeClass("presion");
        $(".sala").removeClass("presion");
        $(".cocina").removeClass("presion");
        $(".jardin").removeClass("presion");
        $(".cochera").removeClass("presion");
        $(".botled").removeClass("click");
        

        $("#imagen").addClass("aparecer");
    });

    $(".botled").click(function (e) { 
        e.preventDefault();
        console.log("entro a estado");
        $("#carrucel").css("display","none");
        divr.css("display","none");
        divb.css("display","none");
        divs.css("display","none");
        divcoc.css("display","none");
        divcoch.css("display","none");
        divj.css("display","none");
        divest.css("display","block");
        $(".botled").addClass("click");
        $(".rec").removeClass("presion");
        $(".bano").removeClass("presion");
        $(".sala").removeClass("presion");
        $(".cocina").removeClass("presion");
        $(".jardin").removeClass("presion");
        $(".cochera").removeClass("presion");
        
    });


    $(".rec").click(function (e) {
        e.preventDefault();
        console.log('hab on')
        console.log('recamara')
        $("#carrucel").css("display", "none");
        divr.css("display", "block");
        divb.css("display", "none");
        divs.css("display", "none");
        divcoc.css("display", "none");
        divcoch.css("display", "none");
        divj.css("display", "none");
        divest.css("display", "none");

        // hacerlo sin constantes, como se muestra en la
        $(".botled").removeClass("click");
        $(".rec").addClass("presion");
        $(".bano").removeClass("presion");
        $(".sala").removeClass("presion");
        $(".cocina").removeClass("presion");
        $(".jardin").removeClass("presion");
        $(".cochera").removeClass("presion");

     
    });

    $(".bano").click(function (e) {
        e.preventDefault();
        console.log('bano on')
        $("#carrucel").css("display", "none");
        divr.css("display", "none");
        divb.css("display", "block");
        divs.css("display", "none");
        divcoc.css("display", "none");
        divcoch.css("display", "none");
        divj.css("display", "none");
        divest.css("display", "none");
        $(".botled").removeClass("click");
        $(".rec").removeClass("presion");
        $(".bano").addClass("presion");
        $(".sala").removeClass("presion");
        $(".cocina").removeClass("presion");
        $(".jardin").removeClass("presion");
        $(".cochera").removeClass("presion");

    });

    $(".sala").click(function (e) {
        e.preventDefault();
        console.log('bano on')
        $("#carrucel").css("display", "none");
        divr.css("display", "none");
        divb.css("display", "none");
        divs.css("display", "block");
        divcoc.css("display", "none");
        divcoch.css("display", "none");
        divj.css("display", "none");
        divest.css("display", "none");
        $(".botled").removeClass("click");
        $(".rec").removeClass("presion");
        $(".bano").removeClass("presion");
        $(".sala").addClass("presion");
        $(".cocina").removeClass("presion");
        $(".jardin").removeClass("presion");
        $(".cochera").removeClass("presion");
    });

    $(".cocina").click(function (e) {
        e.preventDefault();
        console.log('bano on')
        $("#carrucel").css("display", "none");
        divr.css("display", "none");
        divb.css("display", "none");
        divs.css("display", "none");
        divcoc.css("display", "block");
        divcoch.css("display", "none");
        divj.css("display", "none");
        divest.css("display", "none");
        $(".botled").removeClass("click");
        $(".rec").removeClass("presion");
        $(".bano").removeClass("presion");
        $(".sala").removeClass("presion");
        $(".cocina").addClass("presion");
        $(".jardin").removeClass("presion");
        $(".cochera").removeClass("presion");
    });

    $(".jardin").click(function (e) {
        e.preventDefault();
        console.log('bano on')
        $("#carrucel").css("display", "none");
        divr.css("display", "none");
        divb.css("display", "none");
        divs.css("display", "none");
        divcoc.css("display", "none");
        divcoch.css("display", "none");
        divj.css("display", "block");
        divest.css("display", "none");
        $(".botled").removeClass("click");
        $(".rec").removeClass("presion");
        $(".bano").removeClass("presion");
        $(".sala").removeClass("presion");
        $(".cocina").removeClass("presion");
        $(".jardin").addClass("presion");
        $(".cochera").removeClass("presion");

    });

    $(".cochera").click(function (e) {
        e.preventDefault();
        console.log('bano on')
        $("#carrucel").css("display", "none");
        divr.css("display", "none");
        divb.css("display", "none");
        divs.css("display", "none");
        divcoc.css("display", "none");
        divcoch.css("display", "block");
        divj.css("display", "none");
        divest.css("display", "none");
        $(".botled").removeClass("click");
        $(".rec").removeClass("presion");
        $(".bano").removeClass("presion");
        $(".sala").removeClass("presion");
        $(".cocina").removeClass("presion");
        $(".jardin").removeClass("presion");
        $(".cochera").addClass("presion");
    });
    
    //==== RECAMARA =====
    $("#ledRecamaraEncender").click(function (e) {
        $.post("php/ledRecamaraOn.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
            }

        );
    });
    $("#ledRecamaraApagar").click(function (e) {
        $.post("php/ledRecamaraOff.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
                
            }
        );
    });

    // ===== BAÑO =====
    $("#ledBanoEncender").click(function (e) {
        $.post("php/ledBanoOn.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
                
            }
        );
    });
    $("#ledBanoApagar").click(function (e) {
        $.post("php/ledBanoOff.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
                
            }
        );
    });

    // ===== SALA ======
    $("#ledSalaEncender").click(function (e) {
        $.post("php/ledSalaOn.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
                
            }
        );
    });
    $("#ledSalaApagar").click(function (e) {
        $.post("php/ledSalaOff.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
                
            }
        );
    });

    // ====== COCINA =====
    $("#ledCocinaEncender").click(function (e) {
        $.post("php/ledCocinaOn.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
                
            }
        );
    });
    $("#ledCocinaApagar").click(function (e) {
        $.post("php/ledCocinaOff.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
                
            }
        );
    });

    // ===== COCHERA =====
    $("#servoCocheraAbrir").click(function (e) {
        $.post("php/servoGarageOn.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
                
            }
        );
    });
    $("#servoCocheraCerrar").click(function (e) {
        $.post("php/servoGarageOff.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
                
            }
        );
    });
    $("#ledCocheraEncender").click(function (e) {
        $.post("php/ledGarageOn.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
            
            }
        );
    });
    $("#ledCocheraApagar").click(function (e) {
        $.post("php/ledGarageOff.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
               
            }
        );
    });

    // ===== jardin =====

    $("#servoPuertaAbrir").click(function (e) {
        $.post("php/servoPuertaOn.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
               
            }
        );
    });
    $("#servoPuertaCerrar").click(function (e) {
        $.post("php/servoPuertaOff.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
               
            }
        );
    });

    // ===== ventilador =====
    $("#ventiladorEncender").click(function (e) {
        $.post("php/ventiladorOn.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
               
            }
        );
    });
    $("#ventiladorApagar").click(function (e) {
        $.post("php/ventiladorOff.php", { estado: 'hola' },
            function (data, textStatus, jqXHR) {
               
            }
        );
    });
});
