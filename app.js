/**
 * app.ts - Lógica para el formulario de registro
 * Autor: Francisco Valdivia
 * Fecha: 18/08/2025
 *
 * Este archivo contiene la lógica para manejar el formulario de registro de usuario.
 */
// Función para inicializar el formulario y sus eventos
function inicializarFormulario() {
    var formulario = document.getElementById('registroForm');
    var resultado = document.getElementById('resultado');
    // Evento submit del formulario
    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío tradicional
        // Obtención de valores de los campos
        var usuario = {
            nombre: document.getElementById('nombre').value.trim(),
            apellidoPaterno: document.getElementById('apellidoPaterno').value.trim(),
            edad: parseInt(document.getElementById('edad').value, 10),
            genero: document.getElementById('genero').value,
            pais: document.getElementById('pais').value
        };
        // Validación de solo letras para nombres
        var regexSoloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
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
        // Validación básica
        if (!usuario.nombre || !usuario.apellidoPaterno || isNaN(usuario.edad) || !usuario.genero || !usuario.pais) {
            resultado.textContent = 'Por favor, complete todos los campos correctamente.';
            resultado.style.color = 'red';
            return;
        }
        // Mostrar resultado
        resultado.textContent = "Registro exitoso: ".concat(usuario.nombre, " ").concat(usuario.apellidoPaterno, ", Edad: ").concat(usuario.edad, ", G\u00E9nero: ").concat(usuario.genero, ", Pa\u00EDs: ").concat(usuario.pais);
        resultado.style.color = '#0078d4';
    });
}
// Inicializar el formulario cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', inicializarFormulario);
