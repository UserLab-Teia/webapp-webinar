// app.js - Compilado de app.ts
// Este archivo se genera a partir de TypeScript. No modificar directamente.

// Interfaz para los datos del usuario
// function inicializarFormulario(): void {
// ...ver app.ts para documentación...
window.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('registroForm');
    var resultado = document.getElementById('resultado');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        var usuario = {
            nombre: document.getElementById('nombre').value.trim(),
            apellidoPaterno: document.getElementById('apellidoPaterno').value.trim(),
            edad: parseInt(document.getElementById('edad').value, 10),
            genero: document.getElementById('genero').value
        };
            const regexSoloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
            if (!regexSoloLetras.test(usuario.nombre)) {
                resultado.textContent = 'El nombre no debe contener números.';
                resultado.style.color = 'red';
                return;
            }
            if (!regexSoloLetras.test(usuario.apellidoPaterno)) {
                resultado.textContent = 'El apellido paterno no debe contener números.';
                resultado.style.color = 'red';
                return;
            }
        if (!usuario.nombre || !usuario.apellidoPaterno || isNaN(usuario.edad) || !usuario.genero) {
            resultado.textContent = 'Por favor, complete todos los campos correctamente.';
            resultado.style.color = 'red';
            return;
        }
        resultado.textContent = "Registro exitoso: ".concat(usuario.nombre, " ").concat(usuario.apellidoPaterno, ", Edad: ").concat(usuario.edad, ", Género: ").concat(usuario.genero);
        resultado.style.color = '#0078d4';
    });
});
