document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form")
  const nombreInput = document.getElementById("nombre")
  const plazoInput = document.getElementById("plazo")
  const presupuestoInput = document.getElementById("presupuesto")
  const descripcionInput = document.getElementById("descripcion")
  const nombreCliInput = document.getElementById("nombre_cli")
  const whatsappInput = document.getElementById("whatsapp")
  const correoInput = document.getElementById("correo")
  const categoriaInputs = document.querySelectorAll('input[name="cat[]"]')
  const grecaptcha = window.grecaptcha

  form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (
      !nombreInput.value.trim() ||
      !plazoInput.value.trim() ||
      !presupuestoInput.value.trim() ||
      !descripcionInput.value.trim() ||
      !nombreCliInput.value.trim() ||
      !whatsappInput.value.trim() ||
      !correoInput.value.trim()
    ) {
      alert("Por favor, completa todos los campos antes de enviar.")
      return
    }

    let categoriaSeleccionada = false
    categoriaInputs.forEach((input) => {
      if (input.checked) categoriaSeleccionada = true
    })

    if (!categoriaSeleccionada) {
      alert("Por favor, selecciona al menos una categoría de proyecto.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(correoInput.value.trim())) {
      alert("Por favor, ingresa un correo electrónico válido.")
      return
    }

    const recaptchaResponse = grecaptcha.getResponse()
    if (!recaptchaResponse) {
      alert("Por favor, completa el reCAPTCHA antes de enviar el formulario.")
      return
    }

    console.log("reCAPTCHA Response:", recaptchaResponse)

    console.log("Intentando enviar formulario...")
    console.log("Nombre del proyecto:", nombreInput.value)
    console.log("Plazo estimado:", plazoInput.value)
    console.log("Presupuesto estimado:", presupuestoInput.value)
    console.log("Descripción:", descripcionInput.value)
    console.log("Su nombre:", nombreCliInput.value)
    console.log("Whatsapp:", whatsappInput.value)
    console.log("Correo:", correoInput.value)

    grecaptcha.reset()

    alert("Formulario enviado con éxito!")
  })
})
