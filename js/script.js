
function   eliminarUsuario (usuarioEliminado){
    var usuarioEliminado = document.querySelector('.names-solicitudes');
    
    console.log(usuarioEliminado);

    usuarioEliminado.remove();
    
    var usuarioEliminadoContador = 2; // var para disminuir numero personas 
    var usuarioEliminadoContadorElement = document.querySelector("#number");

    usuarioEliminadoContador--;
    usuarioEliminadoContadorElement.innerText = usuarioEliminadoContador;

    console.log(usuarioEliminadoContador);

}

function addContcto(anadir){
    var anadir = document.querySelector('.names-conecciones');

    console.log(anadir)
    anadir.remove();

    var anadirAumentar = 500;
    var anadirAumentarElement = document.querySelector ("#number-conecciones");

       anadirAumentar++;
       anadirAumentarElement.innerText = anadirAumentar + "+";

       console.log(anadirAumentar);

}

function changeName(change){
    var change = document.querySelector ('.nameusser');
    
    change.innerText = "Ammy Joplin"

    console.log(change);

}
