document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('form');
    const nombreInput = document.getElementById('nombre');
    const plazoInput = document.getElementById('plazo');
    const presupuestoInput = document.getElementById('presupuesto');
    const descripcionInput = document.getElementById('descripcion');
    const nombreCliInput = document.getElementById('nombre_cli');
    const whatsappInput = document.getElementById('whatsapp');
    const correoInput = document.getElementById('correo');
    const categoriaInputs = document.querySelectorAll('input[name="cat[]"]');

    function generarCaptcha(length = 5) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < length; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return captcha;
    }

    let codigoCaptcha = '';
    const captchaDiv = document.getElementById('captchaManual');
    const inputCaptcha = document.getElementById('inputCaptchaManual');
    const btnRefreshCaptcha = document.getElementById('refreshCaptcha');

    function mostrarCaptcha() {
        codigoCaptcha = generarCaptcha();
        captchaDiv.textContent = codigoCaptcha;
        if (inputCaptcha) inputCaptcha.value = '';
    }

    mostrarCaptcha();

    if (btnRefreshCaptcha) {
        btnRefreshCaptcha.addEventListener('click', mostrarCaptcha);
    }

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

        let categoriaSeleccionada = false;
        categoriaInputs.forEach(function (input) {
            if (input.checked) categoriaSeleccionada = true;
        });

        if (!categoriaSeleccionada) {
            alert('Por favor, selecciona al menos una categoría de proyecto.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correoInput.value.trim())) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        if (inputCaptcha.value.trim() !== codigoCaptcha) {
            alert('Captcha manual incorrecto. Por favor, inténtalo de nuevo.');
            mostrarCaptcha();
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

        alert('Formulario enviado con éxito!');
    });

});