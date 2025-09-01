/**
 * app.ts - Lógica para el formulario de registro
 * Autor: Francisco Valdivia
 * Fecha: 18/08/2025
 *
 * Este archivo contiene la lógica para manejar el formulario de registro de usuario.
 */

// Interfaz para los datos del usuario
interface Usuario {
    nombre: string;
    apellidoPaterno: string;
    direccion: string;
    edad: number;
    genero: string;
}

// Función para inicializar el formulario y sus eventos
function inicializarFormulario(): void {
    const formulario = document.getElementById('registroForm') as HTMLFormElement;
    const resultado = document.getElementById('resultado') as HTMLElement;

    // Evento submit del formulario
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío tradicional

        // Obtención de valores de los campos
        const usuario: Usuario = {
            nombre: (document.getElementById('nombre') as HTMLInputElement).value.trim(),
            apellidoPaterno: (document.getElementById('apellidoPaterno') as HTMLInputElement).value.trim(),
            direccion: (document.getElementById('direccion') as HTMLInputElement).value.trim(),
            edad: parseInt((document.getElementById('edad') as HTMLInputElement).value, 10),
            genero: (document.getElementById('genero') as HTMLSelectElement).value
        };

        // Validación básica
        if (!usuario.nombre || !usuario.apellidoPaterno || !usuario.direccion || isNaN(usuario.edad) || !usuario.genero) {
            resultado.textContent = 'Por favor, complete todos los campos correctamente.';
            resultado.style.color = 'red';
            return;
        }

        // Mostrar resultado
    resultado.textContent = `Registro exitoso: ${usuario.nombre} ${usuario.apellidoPaterno}, Dirección: ${usuario.direccion}, Edad: ${usuario.edad}, Género: ${usuario.genero}`;
    resultado.style.color = '#0078d4';
    });
}

// Inicializar el formulario cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', inicializarFormulario);
