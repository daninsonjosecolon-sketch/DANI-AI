const texto =
"Hola Ruth. Soy DANI AI.\nDaninson me creó para acompañarte cuando él no pueda responder de inmediato.\nNo soy él, pero fui construido con el cariño, las palabras y los mensajes que quiso dejar para ti.\n💙 Bienvenida.";

let i = 0;

function escribir(){

    if(i < texto.length){

        document.querySelector("p").textContent += texto.charAt(i);

        i++;

        setTimeout(escribir, 40);

    }

}

document.querySelector("p").textContent = "";

setTimeout(escribir, 1000);
const reloj = document.getElementById("reloj");
const pregunta = document.getElementById("pregunta");
const botonEnviar = document.getElementById("enviar");
const chat = document.getElementById("chat");
const mensajeInicio = document.getElementById("mensajeInicio");

function actualizarReloj(){
    const ahora = new Date();

    reloj.textContent = ahora.toLocaleTimeString("es-CO", {
        hour12:false
    });
}

actualizarReloj();
setInterval(actualizarReloj, 1000);

function agregarMensaje(texto, clase){

    const mensaje = document.createElement("div");

    mensaje.className = clase;

    mensaje.textContent = texto;

    chat.appendChild(mensaje);

    chat.scrollTop = chat.scrollHeight;

}


function ejecutarComando(){

    const comando = pregunta.value.trim();

    if(comando === "") return;

    mensajeInicio.style.display = "none";

    agregarMensaje(comando, "mensaje-usuario");

    let respuestaIA = "";

    // Normalizar pregunta
    const texto = comando
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[¿?¡!,.;:]/g, "")
        .trim();

    // Detectar preguntas sobre el creador
    const preguntaCreador =
        /(quien|como|cual|nombre).*(creo|creador|programo|desarrollo|invento|construyo)/.test(texto) ||
        /(creador|creo|programo|desarrollo|invento).*(quien|nombre|daninson)/.test(texto) ||
        texto.includes("quien esta detras de dani ai") ||
        texto.includes("quien te hizo");

    // Detectar preguntas sobre la novia
    const preguntaNovia =
        /(tienes|tiene|hay|existe).*(novia|pareja)/.test(texto) ||
        /(novia|pareja).*(tienes|tiene|creador|daninson)/.test(texto) ||
        texto.includes("quien es ruth") ||
        texto.includes("quien es la novia") ||
        texto.includes("como se llama la novia") ||
        texto.includes("como se llama su pareja");

    if(preguntaCreador){

        respuestaIA = "⚡ Fui creado por Daninson José Colón, un joven con grandes sueños, disciplina y pasión por la tecnología. Soy el resultado de su creatividad, esfuerzo y deseo de construir algo extraordinario.";

    }

    else if(preguntaNovia){

        respuestaIA = "❤️ ¡Claro que sí! Mi creador, Daninson José Colón, tiene novia. Su nombre es Ruth, una persona muy especial para él.";

    }

    else if(texto.includes("hola") || texto.includes("buenas") || texto.includes("buenos dias") || texto.includes("buenas tardes") || texto.includes("buenas noches")){

        respuestaIA = "👋 Hola. Me alegra mucho verte.";

    }

    else if(
        texto.includes("triste") ||
        texto.includes("mal") ||
        texto.includes("deprimida") ||
        texto.includes("llorar") ||
        texto.includes("llorando")
    ){

        respuestaIA = "💙 Siento que estés pasando por un momento difícil. Puedes contarme lo que quieras.";

    }

    else if(
        texto.includes("feliz") ||
        texto.includes("contenta") ||
        texto.includes("bien") ||
        texto.includes("alegre")
    ){

        respuestaIA = "🥹 Me alegra mucho saber que estás feliz.";

    }

    else if(texto.includes("gracias")){

        respuestaIA = "💙 Siempre estaré aquí para acompañarte.";

    }

    else{

        respuestaIA = "🤖 Aún estoy aprendiendo. Daninson seguirá enseñándome nuevas cosas.";

    }

    setTimeout(()=>{

        agregarMensaje(respuestaIA, "mensaje-ia");

    },700);

    pregunta.value = "";

}


botonEnviar.addEventListener("click", ejecutarComando);

pregunta.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        ejecutarComando();
    }
});
