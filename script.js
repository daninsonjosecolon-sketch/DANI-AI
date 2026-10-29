const texto =
"Hola. Soy DANI AI.\nDaninson me creó para acompañarte cuando él no pueda responder de inmediato.\nNo soy él, pero fui construido con el cariño, las palabras y los mensajes que quiso dejar para ti.\n💙 Bienvenida.";

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

    const texto = comando.toLowerCase();

    if(texto.includes("hola")){

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

    pregunta.value="";

}

botonEnviar.addEventListener("click", ejecutarComando);

pregunta.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        ejecutarComando();
    }
});