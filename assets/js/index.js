
const usuario = JSON.parse(localStorage.getItem('usuario')) || null;
const button = document.getElementById('buttonSesion');
const banner = document.getElementById('bienvenidoUsuario');
if (usuario) {
    banner.innerHTML = 'Bienvenid@ ' + usuario.nombre + ' ' + usuario.apellido;
    button.innerHTML = 'Cerrar Sesion'
    button.classList.add("inicio-sesion")
}
button.addEventListener('click', function (even) {
    if (button.classList.contains('inicio-sesion')) {
        button.classList.remove('inicio-sesion')
        localStorage.removeItem('usuario')
        banner.innerHTML = 'Bienvenido'
        button.innerHTML = 'Iniciar Sesion'
    } else {
        window.location.href = "./html/registro.html";
    }
});



const reponsive = document.querySelector("#responsive")
const navbar = document.querySelector("#barnav")

reponsive.addEventListener("click", () => {
    event.preventDefault()
    navbar.classList.toggle("responsive")

});

//3 ventana modal
const adquirir = document.querySelector("#adquirirmodal");
const abrir = document.querySelector("#ventana")

adquirir.addEventListener("click", () => {
    abrir.classList.add("abrir")
});
const cerrar = document.querySelector("#x");
cerrar.addEventListener("click", () => {
    abrir.classList.remove("abrir")
});
//2 ventana modal
const adquirir2 = document.querySelector("#adquirirmodal2");
const abrir2 = document.querySelector("#ventana2")

adquirir2.addEventListener("click", () => {
    abrir2.classList.add("abrir")
});
const cerrar2 = document.querySelector("#x2");
cerrar2.addEventListener("click", () => {
    abrir2.classList.remove("abrir")
});
//1 ventana modañ
const adquirir3 = document.querySelector("#adquirirmodal3");
const abrir3 = document.querySelector("#ventana3")
adquirir3.addEventListener("click", () => {
    abrir3.classList.add("abrir")
});
const cerrar3 = document.querySelector("#x3");
cerrar3.addEventListener("click", () => {
    abrir3.classList.remove("abrir")
});


//otra ventana modal
const terminosycondiciones = document.querySelector("#terminoscondiciones")
const Xcerrar = document.querySelector("#Xcerrar")
const tc = document.querySelector("#tc")
tc.addEventListener("click", () => {
    event.preventDefault();
    terminosycondiciones.classList.add("abrirmodal")
});
Xcerrar.addEventListener("click", () => {
    terminosycondiciones.classList.remove("abrirmodal")
});
const preguntasfrecuentes = document.querySelector("#preguntasfrecuentes")
const pf = document.querySelector("#pf")
const Zcerrar = document.querySelector("#Zcerrar")
pf.addEventListener("click", () => {
    event.preventDefault();
    preguntasfrecuentes.classList.add("abrirmodal")
})
Zcerrar.addEventListener("click", () => {
    preguntasfrecuentes.classList.remove("abrirmodal")
})
const politicaprivacidad = document.querySelector("#politicadeprivacidad")
const Ycerrar = document.querySelector("#Ycerrar")
const pp = document.querySelector("#politicap")
pp.addEventListener("click", () => {
    event.preventDefault()
    politicaprivacidad.classList.add("abrirmodal")
})
Ycerrar.addEventListener("click", () => {
    politicaprivacidad.classList.remove("abrirmodal")
})





let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

const coment = document.getElementsByClassName("coment-div");
const formulariocomentario = document.getElementById("formulariocomentario");
const ulcoment = document.getElementById("reseñasUsuarios");


function mostrarcomentarios() {
    ulcoment.innerHTML = ""; 
    comentarios.forEach(comentario => {
        const divcomentario = document.createElement("div");
        divcomentario.classList.add("comentarioclass")

        const nombre = document.createElement("p");
        nombre.classList.add("nombre");
        nombre.textContent = comentario.nombre;

        const texto = document.createElement("p");
        texto.classList.add("mensaje");
        texto.textContent = comentario.texto;

        divcomentario.appendChild(nombre);
        divcomentario.appendChild(texto);
        ulcoment.appendChild(divcomentario);
    });
}
formulariocomentario.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombrecoment = document.getElementById("nombre").value;
    const mensajetexto = document.getElementById("comentario").value;
    const nuevocoment = {
        nombre: nombrecoment,
        texto: mensajetexto,
    }
    comentarios.unshift(nuevocoment);

    localStorage.setItem("comentarios", JSON.stringify(comentarios));
    mostrarcomentarios();

    formulariocomentario.reset();
});

mostrarcomentarios();





//otra cosa

let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

const pedido = document.getElementsByClassName("product");
const formulariopedido = document.getElementById("pedidosss");
const lista = document.getElementById("listaProyectos");

let miequipo = ["David Muñoz", "Cristian", "Camila mendez", "Santiago Villalobo", "Luciana Castro"]
function obtenerNombreAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * miequipo.length);
    return miequipo[indiceAleatorio];
}

function mostrarpedidos() {
    lista.innerHTML = ""; 
    pedidos.forEach(ped => {
        const divped = document.createElement("div");
        divped.classList.add("producto")

        const servicio = document.createElement("h6");
        servicio.classList.add("DG");
        servicio.textContent = ped.servicio;

        const mensaje = document.createElement("p");
        mensaje.classList.add("PDG");
        mensaje.textContent = ped.mensaje;

        const nombreEquipo = document.createElement("p");
        nombreEquipo.classList.add("PDGC");
        nombreEquipo.textContent = `Integrante asignado: ${ped.integrante}`;

        divped.appendChild(servicio);
        divped.appendChild(mensaje);
        divped.appendChild(nombreEquipo)
        lista.appendChild(divped);
    });
}

formulariopedido.addEventListener("submit", function(event) {
    event.preventDefault();
    const servicioped = document.getElementById("selects").value;
    const mensajeped = document.getElementById("texarea").value;
    const integranteAleatorio = obtenerNombreAleatorio();
    const nuevopedido = {
        servicio: servicioped,
        mensaje: mensajeped,
        integrante: integranteAleatorio,
    }
    pedidos.unshift(nuevopedido);

    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    mostrarpedidos();

    formulariopedido.reset();
});

mostrarpedidos();