/*const usuario = JSON.parse(localStorage.getItem('usuario')) || null;
const button = document.getElementById('buttonSesion');
const banner = document.getElementById('bienvenidoUsuario');
console.log(button)
if (usuario) {
    console.log(usuario)
    banner.innerHTML = 'Bienvenid@ ' + usuario.nombre + ' ' + usuario.apellido;
    button.innerHTML = 'Cerrar Sesion'
    button.classList.add("inicio-sesion")
}
button.addEvenListener('click', function (even) {
    if (button.classList.contains('inicio-sesion')) {
        button.classList.remove('inicio-sesion')
        localStorage.removeItem('usuario')
        banner.innerHTML = 'bienvenido'
    }
})*/

const usuario = JSON.parse(localStorage.getItem('usuario')) || null;
const button = document.getElementById('buttonSesion');
const banner = document.getElementById('bienvenidoUsuario');
console.log(button)
if (usuario) {
    console.log(usuario)
    banner.innerHTML = 'Bienvenid@ ' + usuario.nombre + ' ' + usuario.apellido;
    button.innerHTML = 'Cerrar Sesion'
    button.classList.add("inicio-sesion")
}
console.log(button)
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


