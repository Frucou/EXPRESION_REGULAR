"use strict";

// Nodos
const expreg = document.querySelector("#expreg");
const message = document.querySelector(".message");




// Funciones
const buscarFabian = () => {
    // Busqueda exacta en una cadena
    const patron = /fabian/; // objeto de expresión regular
    // Busqueda con mayúsculas o minúsculas --con flags
    const patronMayMin = /fabian/i;
    let cadena = prompt("Dame tu nombre:");
    if(cadena === null) {// pulsé el botón cancelar
        message.innerHTML = "";
        return;
    }

    if(patronMayMin.test(cadena)) {
        message.innerHTML = `El texto <strong>fabian</strong> se
        encuentra en la cadena`;
    } else {
        message.innerHTML = `El texto <strong>fabian</strong> no
        coincide con el texto de búsqueda "${cadena}"`;
    }

}

// validamos un código postal
/**
 * 
 * @param {object} patron Expresión regular con 
 * formato literal /xxxxx/
 */
const validarCP = (patron) => {
    let cp = prompt("Dame un CP:");
    if(cp === null) {// pulsé el botón cancelar
        message.innerHTML = "";
        return;
    }

    if(patron.test(cp)) 
        message.innerHTML = `${cp} es un CP válido`;
    else 
        message.innerHTML = `${cp} es un CP NO válido`;
    

}



// Eventos
// formas de ejecutar eventos, los "e" "magicos" solo 
// ocurre en eventos
expreg.onchange = (e) => {
    switch(e.target.value) {
        // case "0":
        //     break;
        case "1":
            buscarFabian();
            break;
        case "2":
            validarCP(/^[0-9][0-9][0-9][0-9][0-9]$/);
            break;
        default:
            // alert("No existe la opción");
            break;
    }
}