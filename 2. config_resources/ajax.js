console.log('hola desde ajax');

document.querySelector('#boton').addEventListener('click', traerDatos); 


function traerDatos(){
    //console.log('boton presioniado');
    
    const xhttp = new XMLHttpRequest(); //aqui se esta creando el objeto
    //instanciar el objeto XMLHttpRequest();
    xhttp.open('GET','config.json',true); // si es verdadero todo va a ser de forma asincrona

    xhttp.send(); // se envia lo de arriba


    xhttp.onreadystatechange = function(){


        if(this.readyState == 4 && this.status == 200 ){
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            /* document.querySelector('#datos').innerHTML = this.responseText; */
        }
    }

}

