function iniciar(){
    var promesa =  navigator.mediaDevices.getUserMedia({video:true});
    promesa.then(exito);
    promesa.catch(mostrarerror);
    
    function exito(transmision){
        var boton = document.getElementById("boton");
        boton.addEventListener("click",function(){
            detenerTransmision(transmision);
        });

        var video = document.getElementById("medio");
        video.srcObject = transmision;
        video.play();

       /*  var cajadatos = document.getElementById("cajadatos");
        var pistasvideo = transmision.getVideoTracks();
        var pista = pistasvideo[0];
        var datos = "";
        datos += "<br> Habilitado: " + pista.enabled;
        datos += "<br> Tipo: " + pista.kind;
        datos += "<br> Dispositivos: " + pista.labed;
        cajadatos.innerHTML = datos; */

    }

    function mostrarerror(error){
        console.log("Error: " + error.name);
    }
    function detenerTransmision(transmision){
        var pistasvideo = transmision.getVideoTracks();
        var pista =pistasvideo[0];
        pista.stop();
        alert("Transmicion Cancelada")

    }
}

window.addEventListener("load", iniciar);