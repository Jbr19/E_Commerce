import { funciones } from "./funciones.js";

const starWarsSection = document.querySelector("[data-productos-legos]");
const consolasSection = document.querySelector("[data-productos-funko_pop]");
const diversosSection = document.querySelector("[data-productos-tazas]");


funciones.mostrarProductosIndex(starWarsSection,"Legos");
funciones.mostrarProductosIndex(consolasSection,"Funko_Pop");
funciones.mostrarProductosIndex(diversosSection,"Tazas");