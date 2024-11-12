
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
})



const reponsive = document.querySelector("#responsive")
const navbar = document.querySelector("#barnav")

reponsive.addEventListener("click", () => {
    navbar.classList.toggle("responsive")

})

//3 ventana modal
const adquirir = document.querySelector("#adquirirmodal");
const abrir = document.querySelector("#ventana")

adquirir.addEventListener("click",() =>{
    abrir.classList.add("abrir")
} )
const cerrar = document.querySelector("#x");
cerrar.addEventListener("click", () => {
    abrir.classList.remove("abrir")
})
//2 ventana modal
const adquirir2 = document.querySelector("#adquirirmodal2");
const abrir2 = document.querySelector("#ventana2")

adquirir2.addEventListener("click",() =>{
    abrir2.classList.add("abrir")
} )
const cerrar2 = document.querySelector("#x2");
cerrar2.addEventListener("click", () => {
    abrir2.classList.remove("abrir")
})
//1 ventana modañ
const adquirir3 = document.querySelector("#adquirirmodal3");
const abrir3 = document.querySelector("#ventana3")
adquirir3.addEventListener("click",() =>{
    abrir3.classList.add("abrir")
} )
const cerrar3 = document.querySelector("#x3");
cerrar3.addEventListener("click", () => {
    abrir3.classList.remove("abrir")
})

