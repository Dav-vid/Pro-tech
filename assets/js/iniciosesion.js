let personas = JSON.parse(localStorage.getItem("personas")) || [];

document.getElementById("inicioSeccion").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("Iemail").value;
    const contrasena = document.getElementById("Icontraseña").value;

    const usuarioExistente = personas.find((user) => user.email === email && user.contrasena === contrasena);

    if (usuarioExistente) {
        alert('inicio de sesión exitoso')
        localStorage.setItem("usuario", JSON.stringify(usuarioExistente))
       window.location.href = "../../indexx.html"
    } else {
        alert('usuario o contraseña incorrectas, por favor intente de nuevo');
        document.getElementById('iniciarSeccion').reset();
    }
});
