const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const usuario = document.getElementById('usuario').value
    const edad = document.getElementById('edad').value
    const correo = document.getElementById('correo').value
    const password = document.getElementById('password').value

    const errorUsuario = document.getElementById('errorUsuario')
    const errorEdad = document.getElementById('errorEdad')
    const errorCorreo = document.getElementById('errorCorreo')
    const errorPassword = document.getElementById('errorPassword')
    const resultado = document.getElementById('resultado')

    errorUsuario.innerText = '';
    errorEdad.innerText = '';
    errorCorreo.innerText = '';
    errorPassword.innerText = '';

    if (usuario === '') {
        errorUsuario.innerText = 'El nombre es requerido'
        errorUsuario.style.color = 'red'
    } else if (edad === '') {
        errorEdad.innerText = 'Debe ingresar un número válido'
        errorEdad.style.color = 'red'
    } else if (edad < 18) {
        errorEdad.innerText = 'Debe ser mayor o igual a 18 años'
        errorEdad.style.color = 'red'
    } else if (correo === '') {
        errorCorreo.innerText = 'El email es requerido'
        errorCorreo.style.color = 'red'
    } else if (password === '') {
        errorPassword.innerText = 'Contraseña requerida'
        errorPassword.style.color = 'red'
    } else if (password.length < 6) {
        errorPassword.innerText = 'Contraseña debe tener mínimo 6 caracteres'
        errorPassword.style.color = 'red'
    } else {
        resultado.innerHTML =
        `<p style="font-size: 30px">🎉 ¡Registro exitoso! Bienvenido, ${usuario}.</p>
        <ul style="font-size: 20px">
            <li><strong>Usuario:</strong> ${usuario}</li>
            <li><strong>Edad:</strong> ${edad}</li>
            <li><strong>Correo:</strong> ${correo}</li>
        </ul>`
        formulario.reset()
    }
})
