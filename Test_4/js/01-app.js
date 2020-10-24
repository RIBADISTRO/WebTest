var video, reproductor;
function iniciar(){    
    video = document.getElementById("medio");
    /* video.addEventListener("click",expandir); */
    reproductor = document.getElementById("reproductor");
    reproductor.addEventListener("click", expandir);
}

function expandir(){
    if(!document.webkitFullscreeenElement){
        // video.webkitRequestFullscreen();
        reproductor.webkitRequestFullscreen();
        video.play();
    }else{
        document.webkitRequestFullscreen();
        video.pause();
    }
}

window.addEventListener("load", iniciar)