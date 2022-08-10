
// variable initialization
// Dom Element
const info = document.querySelector('.respons__App')
const app = document.querySelector('.respons__App')
const textApp = document.querySelector('#text_App')
// Button Element
const encriptar = document.querySelector('#Encriptar')
const desencriptar = document.querySelector('#desencriptar')


const writeText = (elemento) => {
    app.innerHTML = `
    <div class="container__App" id="App">
        <textarea class="parrafo" id="parrafo">${elemento}</textarea>
        <button type="button" class="copy btn_3" id="copy">Copiar</button>
    </div>
    `
}

const encryptText = () => {
    info.innerHTML = ''
    const entryInfo = textApp.value.toLowerCase()
    let transform = entryInfo.replace(/e/igm, "enter")
    transform = transform.replace(/i/igm, "imes")
    transform = transform.replace(/a/igm, "ai")
    transform = transform.replace(/o/igm, "ober")
    transform = transform.replace(/u/igm, "ufat")
    writeText(transform)
}

const desencryptText = () => {
    info.innerHTML = ''
    const entryInfo = textApp.value.toLowerCase()
    let transform = entryInfo.replace(/enter/igm, "e")
    transform = transform.replace(/imes/igm, "i")
    transform = transform.replace(/ai/igm, "a")
    transform = transform.replace(/ober/igm, "o")
    transform = transform.replace(/ufat/igm, "u")
    writeText(transform)
}

// funcion copiar
const on = (element, event, selector, handler) => {
    element.addEventListener(event, (e) => {
      if (e.target.closest(selector)) {
        handler(e);
      }
    });
  };

on(document, 'click', '#copy', (e) => {
    const elemento = e.target.parentNode;
    let content = elemento.firstElementChild
    content.select()
    document.execCommand('copy')
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Perfecto, has copiado tu texto encriptado',
        showConfirmButton: false,
        timer: 1500
      })
})






















// funcion copiar
// function copyToClipBoard() {

//     var content = document.getElementById('textArea');
    
//     content.select();
//     document.execCommand('copy');

//     alert("Copied!");
//}

