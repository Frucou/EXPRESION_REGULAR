"use strict";

// Nodos
const expreg = document.querySelector("#select");
const message = document.querySelector(".message");




// Funciones
/**
 * Validaremos una palabra de 5 letras que empieza con a y 
 * termina con a
 * pista: regxObj.test(texto) Devuelve true o false según
 * el patrón buscado coincide con la cadena.
 */
const validarPalabra = () => {
    // Busqueda exacta en una cadena
    const pattern = /^a.{3}a$/; // objeto de expresión regular
    // Busqueda con mayúsculas o minúsculas --con flags
    // const patronMayMin = /aa/i;
    let texto = prompt("Texto (patrón: \"axxxa\")");
    if(texto === null) {// pulsé el botón cancelar
        message.innerHTML = "";
        return;
    }

    if(pattern.test(texto)) {
        message.innerHTML = `El texto <strong>introducido</strong> se
        encuentra en la cadena`;
    } else {
        alerta(`${texto} no cumple con el patrón "axxxa"`);
    }

}

/**
 * 
 * @param {string} mensaje 
 */
const alerta = (mensaje) => {
    message.innerHTML = `<strong style="color:red">${mensaje}</strong>`;
}

// validamos un código postal
/**
 * 
 * @param {object} patron Expresión regular con 
 * formato literal /xxxxx/
 */
const coordenadas = (pattern, msgPrompt) => {
    // const numCoordenadas = /^\d{1,3},\d{1,3}$/;
    let num = prompt(msgPrompt);
    if(num === null) {// pulsé el botón cancelar
        message.innerHTML = "";
        return;
    }

    if(!pattern.test(num)) {
        alerta(`${num} NO cumple con el patrón 999,999`);
        
    } else {
        message.innerHTML = `${num} es una coordenada válida.`;
    }
    

}

/**
 * 
 * @param {object} pattern a comparar con el string
 * @param {string} msgPrompt mensaje del prompt para que el usuario sepa que hacer
 * @returns 
 */
const diasSemana = (pattern, msgPrompt) => {    
    let dia = prompt(msgPrompt)
    if(dia === null) {// pulsé el botón cancelar
        message.innerHTML = "";
        return;
    }

    if(pattern.test(dia)) {
        message.innerHTML = `${dia} es un día valido.`;
    } else {
        alerta(`${dia} No es un día válido, ${msgPrompt}.`)
    }
}

const validarExpresionRegular = (pattern, msgPrompt) => {
    let expresionRegular = prompt(msgPrompt);
    if(expresionRegular === null) {// pulsé el botón cancelar
        message.innerHTML = "";
        return;
    }

    if(!pattern.test(expresionRegular)) {
        alerta(`${expresionRegular} NO es un dato válido, ${msgPrompt}`)
    } else {
        message.innerHTML = `Dato introducido: ${expresionRegular}`;
    }
}


/**
 * 
 * @param {*} pattern 
 * @param {*} msgPromt 
 * @returns {array} devuelve un array con números o vacío si 
 * no hay números.
 */
const buscarNumeros = () => {
    let resultado = [];
    const patron = /\d+/g;
    const cadena = prompt("Dame mucho texto alfanumérico");
    resultado = cadena.match(patron)
    if (resultado === null) {
        return [];
    }
    return resultado;
}



// Eventos
// formas de ejecutar eventos, los "e" "magicos" solo 
// ocurre en eventos
expreg.onchange = (e) => {
    switch(e.target.value) {
        case "0":
            message.innerHTML = "";
            break;
        case "1":
            validarPalabra();
            break;
        case "2":
            coordenadas( /^\d{1,3},\d{1,3}$/, "Coordenadas (patrón: \"999,999\")");
            break;
        case "3":
            diasSemana(/^(Lunes|Martes|Miércoles|Jueves|Viernes|Sábado|Domingo),[ ]?\d{1,2}$/, 
            `Introduce el día (patrón: "Lunes, 31")`);
            break;
        case "4":
            fecha(
                /^\d{1,2}\/\d{1,2}\/\d{4}$/, 
                `Introduce la fecha: (patrón: dd/mm/aaaa)`
                );
            break;
        case "5":
            validarExpresionRegular(
                /^[+-]?\d+$/, `Introduce un número entero: 
                (patrón: + ó -3)`
            );
        break;
        case "6":
            //Comprobar por un promp si una palabra empieza por "hiper" o "hipo"
            validarExpresionRegular(
                /^(hiper|hipo)/,
                "Palabra que empiece por hiper o hipo"
            );
        break;
        case "7":
            //Oración con alguna palabra de al menos 6 caracteres.
            validarExpresionRegular(
                /^.{6,}$/,
                "Mínimo 6 caracteres"
            );
        break;
        case "8":
            // Validar la capital de España
            validarExpresionRegular(
                /Madrid/i,
                "Capital de España"
            );
            break;
        case "9": 
        //Validar una cadena vacía
        validarExpresionRegular(
            /^\s*$/,
            "Introduce una cadena vacía"
        );
        break;
        case "match":
            // A partir de una cadena dada mostrar sólo los números
            let numeros = buscarNumeros();
            message.innerHTML = `<div>${numeros.join("<br>")}</div>`
            break;
        default:
            // alert("No existe la opción");
            break;
    }
}