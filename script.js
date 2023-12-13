function iniciar() {
    const nameInput = document.getElementById('nombre');
    const mensajeBienvenida = document.getElementById('mensaje-bienvenida');
    const textoBienvenida = document.getElementById('texto-bienvenida');

    const name = nameInput.value;

    if (name.trim() !== '') {
        // Cambiar el color de fondo después de ingresar el nombre
        document.body.style.backgroundColor = '#68ddbd';

        // Mostrar el mensaje de bienvenida con el nombre
        textoBienvenida.textContent = `¡Que bueno es recibirte por aquí, ${name}!`;
        mensajeBienvenida.style.display = 'block';

        // Ocultar el formulario
        document.getElementById('formulario').style.display = 'none';
    }
}
