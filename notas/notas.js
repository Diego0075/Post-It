var nNotas = [];

class nota{
    constructor(titulo,cuerpo,numero){
        this.titulo = titulo;
        this.cuerpo = cuerpo;
        this.contenedor = "";
        this.numero = numero;
        this.fecha = new Date();
        this.hora = new Date().getHours() + ":" + new Date().getMinutes();
        this.timestamp = new Date().getTime();
    }
}



function nuevaNota(){
    var titulo = document.getElementById("titulo").value;
    var cuerpo = document.getElementById("cuerpo").value;

    nNotas.push( new nota(titulo,cuerpo));

    localStorage.setItem("array", JSON.stringify(nNotas));

   visualiza(nNotas[nNotas.length-1]);

}


function eliminarNota(){
    var narray = document.getElementById("narray").value;
    if (narray > -1) {
        nNotas[narray].contenedor.remove();
        // console.log(nNotas[narray]);
        nNotas.splice(narray, 1);
    }

    
    
}



function visualiza(nota){
    var tablero = document.getElementById("tablero");
    var div = document.createElement("div");
    var espacio= document.createElement("p")
    div.innerText ="Numero de nota: " +[nNotas.length-1]+ " Titulo: "+nota.titulo+"\n"+" Cuerpo de nota: "+nota.cuerpo+"\n"+nota.fecha;
    espacio.innerText="";

    nota.contenedor = div;
    tablero.appendChild(div);
    
    tablero.appendChild(espacio);

}

