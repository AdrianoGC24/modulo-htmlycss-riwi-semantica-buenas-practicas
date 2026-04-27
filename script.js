/* ============================= */
/* 🔹 ESPERAR A QUE EL DOM CARGUE */
/* ============================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ============================= */
    /* 🔹 SELECTORES (DOM) */
    /* ============================= */

    const btn = document.querySelector('.btn'); // selecciona un elemento
    const items = document.querySelectorAll('.item'); // varios elementos


    /* ============================= */
    /* 🔹 VARIABLES DE ESTADO */
    /* ============================= */

    let contador = 0; // cambia → let
    const limite = 10; // no cambia → const


    /* ============================= */
    /* 🔹 FUNCIONES */
    /* ============================= */

    function actualizarContador() {
        console.log(contador);
    }


    /* ============================= */
    /* 🔹 EVENTOS */
    /* ============================= */

    btn.addEventListener('click', () => {
        contador++;
        actualizarContador();
    });


});
