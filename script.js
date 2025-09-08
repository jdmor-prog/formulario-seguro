document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('form');
    const nombreInput = document.getElementById('nombre');
    const plazoInput = document.getElementById('plazo');
    const presupuestoInput = document.getElementById('presupuesto');
    const descripcionInput = document.getElementById('descripcion');
    const nombreCliInput = document.getElementById('nombre_cli');
    const whatsappInput = document.getElementById('whatsapp');
    const correoInput = document.getElementById('correo');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (
            !nombreInput.value.trim() ||
            !plazoInput.value.trim() ||
            !presupuestoInput.value.trim() ||
            !descripcionInput.value.trim() ||
            !nombreCliInput.value.trim() ||
            !whatsappInput.value.trim() ||
            !correoInput.value.trim()
        ) {
            alert('Por favor, completa todos los campos antes de enviar.');
            return;
        }
        console.log('Intentando enviar formulario...');
        console.log('Nombre del proyecto:', nombreInput.value);
        console.log('Plazo estimado:', plazoInput.value);
        console.log('Presupuesto estimado:', presupuestoInput.value);
        console.log('Descripción:', descripcionInput.value);
        console.log('Su nombre:', nombreCliInput.value);
        console.log('Whatsapp:', whatsappInput.value);
        console.log('Correo:', correoInput.value);
    });

});