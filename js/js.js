$(document).ready(function () {
    const divr = $("#recamaradiv")
    const divb = $("#banodiv")
    const divs = $("#saladiv")
    const divcoc = $("#cocinadiv")
    const divcoch = $("#cocheradiv")
    const divj = $("#jardindiv")
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

    $(".btnflecha").click(function (e) { 
        e.preventDefault();
        console.log('hab on')
        $("#carrucel").css("display", "block");
        divr.css("display", "none");
        divb.css("display","none");
        divs.css("display", "none");
        divcoc.css("display", "none");
        divcoch.css("display", "none");
        divj.css("display", "none");
        br.removeClass("presion");
        br2.removeClass("presion");
        br3.removeClass("presion");
        br4.removeClass("presion");
        br5.removeClass("presion");
        br6.removeClass("presion");
        $("#imagen").addClass("aparecer");
    });

    $(".rec").click(function (e) { 
        e.preventDefault();
        console.log('hab on')
        $("#carrucel").css("display","none");
        divr.css("display","block");
        divb.css("display","none");
        divs.css("display","none");
        divcoc.css("display","none");
        divcoch.css("display","none");
        divj.css("display","none");
        br.addClass("presion");
        br2.removeClass("presion");
        br3.removeClass("presion");
        br4.removeClass("presion");
        br5.removeClass("presion");
        br6.removeClass("presion");
    });

    $(".bano").click(function (e) { 
        e.preventDefault();
        console.log('bano on')
        $("#carrucel").css("display","none");
        divr.css("display","none");
        divb.css("display","block");
        divs.css("display","none");
        divcoc.css("display","none");
        divcoch.css("display","none");
        divj.css("display","none");
        br.removeClass("presion");
        br2.addClass("presion");
        br3.removeClass("presion");
        br4.removeClass("presion");
        br5.removeClass("presion");
        br6.removeClass("presion");
    });

    $(".sala").click(function (e) { 
        e.preventDefault();
        console.log('bano on')
        $("#carrucel").css("display","none");
        divr.css("display","none");
        divb.css("display","none");
        divs.css("display","block");
        divcoc.css("display","none");
        divcoch.css("display","none");
        divj.css("display","none");
        br.removeClass("presion");
        br2.removeClass("presion");
        br3.addClass("presion");
        br4.removeClass("presion");
        br5.removeClass("presion");
        br6.removeClass("presion");
    });

    $(".cocina").click(function (e) { 
        e.preventDefault();
        console.log('bano on')
        $("#carrucel").css("display","none");
        divr.css("display","none");
        divb.css("display","none");
        divs.css("display","none");
        divcoc.css("display","block");
        divcoch.css("display","none");
        divj.css("display","none");
        br.removeClass("presion");
        br2.removeClass("presion");
        br3.removeClass("presion");
        br4.addClass("presion");
        br5.removeClass("presion");
        br6.removeClass("presion");
    });

    $(".jardin").click(function (e) { 
        e.preventDefault();
        console.log('bano on')
        $("#carrucel").css("display","none");
        divr.css("display","none");
        divb.css("display","none");
        divs.css("display","none");
        divcoc.css("display","none");
        divcoch.css("display","none");
        divj.css("display","block");
        br.removeClass("presion");
        br2.removeClass("presion");
        br3.removeClass("presion");
        br4.removeClass("presion");
        br5.addClass("presion");
        br6.removeClass("presion");
        
    });

    $(".cochera").click(function (e) { 
        e.preventDefault();
        console.log('bano on')
        $("#carrucel").css("display","none");
        divr.css("display","none");
        divb.css("display","none");
        divs.css("display","none");
        divcoc.css("display","none");
        divcoch.css("display","block");
        divj.css("display","none");
        br.removeClass("presion");
        br2.removeClass("presion");
        br3.removeClass("presion");
        br4.removeClass("presion");
        br5.removeClass("presion");
        br6.addClass("presion");
    });
})   
