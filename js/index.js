//captura de apartado de resultado:

let resultado = document.getElementById("resultado");
resultado.innerText = "0"; //Indico que el texto de resultado sea cero por defecto

//Capturar elementos (botones):

let boton_1 = document.getElementById("1");
let boton_2 = document.getElementById("2");
let boton_3 = document.getElementById("3");
let boton_4 = document.getElementById("4");
let boton_5 = document.getElementById("5");
let boton_6 = document.getElementById("6");
let boton_7 = document.getElementById("7");
let boton_8 = document.getElementById("8");
let boton_9 = document.getElementById("9");
let boton_0 = document.getElementById("0");
let botonSum = document.getElementById("sum");
let botonRest = document.getElementById("rest");
let botonMult = document.getElementById("mult");
let botonDiv = document.getElementById("divi");
let botonIgual = document.getElementById("igual");
let botonBorrar = document.getElementById("C");

//logica para tomar los numeros y mostrarlos en el apartado de resultado:

//Escuchamos los eventos click de cada boton numero:
boton_1.addEventListener('click', () => sumarString("1"));
boton_2.addEventListener('click', () => sumarString("2"));
boton_3.addEventListener('click', () => sumarString("3"));
boton_4.addEventListener('click', () => sumarString("4"));
boton_5.addEventListener('click', () => sumarString("5"));
boton_6.addEventListener('click', () => sumarString("6"));
boton_7.addEventListener('click', () => sumarString("7"));
boton_8.addEventListener('click', () => sumarString("8"));
boton_9.addEventListener('click', () => sumarString("9"));
boton_0.addEventListener('click', () => sumarString("0"));

let tocaSobreEscribir = false;

//funcion para concatenar strings al dar click a cualquier boton:
function sumarString(numeroString) {
    console.log(result);
    //si en la pantalla hay un cero:
    if (resultado.innerText === "0") {
        resultado.innerText = numeroString; //sustituye asi evitamos tener '012304'
    }
    else if (tocaSobreEscribir) { //si toca sobre-escribir (abajo se denotara cuando)
        resultado.innerText = numeroString; //sustituyes, asi borramos lo que hubiese en la pantalla
        tocaSobreEscribir = false; //cambiamos a falso tocaLimpiar ya que ya se 'limpio'
    }
    else {//de lo contrario, concatena los strings de esta forma tendremos los numeros uno tras otro
        resultado.innerText = resultado.innerText + numeroString;
    }
}

//logica para cuando realicemos las operaciones:

//Escuchamos los eventos click de cada operacion:
botonSum.addEventListener('click', () => tomarNumero("+"));
botonRest.addEventListener('click', () => tomarNumero("-"));
botonMult.addEventListener('click', () => tomarNumero("*"));
botonDiv.addEventListener('click', () => tomarNumero("/"));
botonIgual.addEventListener('click', () => mostrarTotal());

//logica para tomar el numero, sumar y acumular operaciones:

let result = 0;
let operaciones = [];

//funcion para tomar los numeros y realizar las operaciones:
function tomarNumero(tipoOperacion) {

    //si el arreglo esta vacio push me colocara mi contenido en la primera posicion disponible
    //por tanto si el arreglo esta vacio, ocupara las primeras dos posiciones
    operaciones.push(resultado.innerText);
    operaciones.push(tipoOperacion);
    //limpiamos pantalla para sobre-escribir:
    limpiarPantalla();

    if (operaciones.length > 3) { //si la longitud del arreglo es mayor que 3 
        //osea [numero1[0], operacion[1], numero2[2], (operacion a omitir)[3]]
        //realiza la operacion correspondiente (enviando la operacion guardada en el arreglo para saber que hacer):
        realizarOperacion(operaciones[1]); //enviamos la operacion que esta en nuestro arreglo guardada
        //mostramos el resultado en la pantalla:
        resultado.innerText = result;
        //indicamos toca sobre-escribir ya que si agrego mas numeros debe borrarse el resultado mostrado:
        tocaSobreEscribir = true;
        //coloco el arreglo vacio de nuevo:
        operaciones = [];
        //envia en la posicion 0 el resultado temporal para no perder la acumulacion:
        operaciones.push(result);
        //envia en la posicion 2 la operacion que se introdujo al pulsar el boton (para no perderla):
        operaciones.push(tipoOperacion);
    }
}

//funcion para limpiar la pantalla resultado:
function limpiarPantalla() {
    resultado.innerText = "0";
}

//funcion para mostrar total al darle al igual:
function mostrarTotal() {
    operaciones.push(resultado.innerText);
    realizarOperacion(operaciones[1]);
    resultado.innerHTML = result;
}

//funcion con la logica de las operaciones:
function realizarOperacion(operacion) {
    switch (operacion) {
        case "+":
            result = parseInt(operaciones[0]) + parseInt(operaciones[2]);
            break;
        case "-":
            result = parseInt(operaciones[0]) - parseInt(operaciones[2]);
            break;
        case "*":
            result = parseInt(operaciones[0]) * parseInt(operaciones[2]);
            break;
        case "/":
            if (operaciones[2] === '0') {
                alert("ERROR: no se puede dividir por cero");
                borrarTodo();
            } else {
                result = parseInt(operaciones[0]) / parseInt(operaciones[2]);
            }
            break;
    }
}

//logica para limpiar todo:
//Escuchamos el evento click del boton C:
botonBorrar.addEventListener('click', () => borrarTodo());

//funcion para borrar todo:
function borrarTodo() {
    //colocamos los valores iniciales:
    result = 0;
    operaciones = [];
    //limpiamos pantalla:
    limpiarPantalla();
}
