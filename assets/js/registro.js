let personas = JSON.parse(localStorage.getItem("personas")) || [];
                                                                                                                                                                                                                                                                                                                                                                                                                                
document.getElementById("formularioRegistro").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const contrasena = document.getElementById('contrasena').value;
    const genero = document.getElementById('genero').value;


    const correoDoble = personas.find(user => user.email === email);

    const usuarioNuevo = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        contrasena: contrasena,
        genero: genero
    };

    if (correoDoble) {
        alert('su correo ya se encuentra registrado')
        return;
    } else {
        personas.push(usuarioNuevo);
        localStorage.setItem("personas", JSON.stringify(personas));

        alert('usuario registrado correctamente')
        window.location.href = "/html/registro.html"
    }
});


/*let = cerrarsesion = document.querySelector("#buttonSesion");
nombreUsuario = localStorage.getItem("personas")

if (nombreUsuario) {
    cerrarsesion.textContent = "cerrar sesion";
    botonSesion.addEventListener("click", function () {
        // Eliminar el usuario del localStorage
        localStorage.removeItem("usuario");

        // Redirigir al inicio de sesión
        window.location.href = "/html/login.html";

    });
} else {
    cerrarsesion.textContent = ("iniciar seccion");
}
botonSesion.addEventListener("click", function () {
    window.location.href = "/html/registro.html";
});*/