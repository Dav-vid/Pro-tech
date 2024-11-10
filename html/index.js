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

    if(correoDoble){
        alert('su correo ya se encuentra registrado')
        return;
    }else{
        personas.push(usuarioNuevo);
        localStorage.setItem("personas", JSON.stringify(personas));
        
        alert('usuario registrado correctamente')
        window.location.href = "/html/registro.html"
    }
});

document.getElementById("inicioSeccion").addEventListener("submit", function (a) {
    a.preventDefault();
    const correo = document.getElementById("Iemail").value;
    const contrasena = document.getElementById("Icontraseña").value;

    const usuario = personas.find(user => user.email === correo && user.contrasena === contrasena)

    if(usuario){
        alert("inicio de seccion exitoso")
        window.location.href = "/html/indexx.html"
    }else{
        alert("usuario o contraseña incorrectas, por favor intente de nuevo");
        document.getElementById('iniciarSeccion').reset();
    }
});