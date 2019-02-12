console.log('hola desde ajax');

document.querySelector('#boton').addEventListener('click', traerDatos); 

function traerDatos(){
    //console.log('boton presioniado');
    //instanciar el objeto XMLHttpRequest();
    const xhttp = new XMLHttpRequest(); //aqui se esta creando el objeto
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200 ){
            //console.log(this.responseText);
            document.querySelector('#datos').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET','datos.txt',true); // si es verdadero todo va a ser de forma asincrona
    xhttp.send(); // se envia lo de arriba

}

