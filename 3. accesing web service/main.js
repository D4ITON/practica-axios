console.log('hola mundo');
/* getResultGetRequest
getResultGetRequest
getResultPost */

document.querySelector('#performGetRequestGet').addEventListener('click', getRequestAll);
document.querySelector('#performGetRequestOne').addEventListener('click', getRequestOne);
document.querySelector('#performGetRequestPost').addEventListener('click', getRequestPost);


/* funcion para obtener todos los datos */

function getRequestAll() {
    var resultElement = document.getElementById('getResultGetRequestAll');
    //console.log('boton presionado');
    resultElement.innerHTML = '';

    // usando axios
    axios.get('https://jsonplaceholder.typicode.com/posts')
    /* axios.get('http://app.noveltie.la/api/posts') */
    /* axios.get('datos.json') */
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })


}

function generateSuccessHTMLOutput(response) {
    return '<h4>Resultado</h4>' +
        '<h5>Status</h5>' +
        '<pre>' + response.status + '' + response.statusText + '</pre>' +
        '<h5>Headers</h5>' +
        '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
        '<h5>Data</h5>' +
        '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'
}

function generateErrorHTMLOutput(error) {
    return '<h4>Resultado</h4>' +
        '<h5>Message</h5>'+
        '<pre>'+ error.message + '</pre>'+
        '<h5>Status</h5>' +
        '<pre>' + error.response.status + '' + error.response.statusText + '</pre>' +
        '<h5>Headers</h5>' +
        '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
        '<h5>Data</h5>' +
        '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>'
}


/* Funcion para obtener un dato en especifico */
function getRequestOne(){
    var resultElement = document.getElementById('getResultGetRequestOne');
    resultElement.innerHTML = '';
    var todoId = document.getElementById('todoId').value;

    axios.get('https://jsonplaceholder.typicode.com/posts',{
        params: {
            id: todoId
        }
    })
    .then( response => {
        console.log(response);
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
    } )
    .catch(error => {
        resultElement.innerHTML = generateSuccessHTMLOutput(error);
    })

}

/* Funcion para enviar parametros por el metodo post */

document.getElementById('todoInputForm').addEventListener('submit', getRequestPost);

function getRequestPost (evt) {
    var resultElement = document.getElementById('getResultPost');
    var todoTitle = document.getElementById('todoTitle').value;


    axios.post('https://jsonplaceholder.typicode.com/posts', {
        userId: '1',
        title: todoTitle,
        completed: false
    })
    .then(r=> {
        resultElement.innerHTML = generateSuccessHTMLOutput(r);
    })
    .catch(e => {
        resultElement.innerHTML = generateErrorHTMLOutput(e);
    })

    evt.preventDefault();
}




/* FUNCION PARA LIMPIAR TODA LA SALIDA */
function limpiarSalida() {
    console.log('limpiar');
    document.getElementById('getResultGetRequestAll').innerHTML = '';

}




