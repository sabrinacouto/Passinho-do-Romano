var buttonCodificar = document.getElementById("codificar");

var buttonDecodifica = document.getElementById("decodificar");

var button = document.getElementById("submit");

var inserirCripto = document.getElementById("inserirCripto");

var alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZÃÕãõéàÀúÚÓóÍí";

var choose = document.getElementById("choose");

var selectNumber = document.getElementById('selectNumber');



buttonCodificar.addEventListener("click", function () {
  button.innerText = "Codificar mensagem";
});

buttonDecodifica.addEventListener("click", function () {
  button.innerText = "Decodificar mensagem";
});

choose.addEventListener('change', function(){
    if (choose.value == "Cifra de Cesar"){
      selectNumber.style.display = 'block'
    }else{
      selectNumber.style.display = 'none'
    }
  } )
  
  button.addEventListener("click", function (e) {
    e.preventDefault();
    var imputNumber = document.getElementById('imputNumber').value;
    if (choose.value == "Cifra de Cesar") {
      if (buttonCodificar.checked) {
        console.log(buttonCodificar.value);
        var codificarMensagem = document.getElementById("text").value;
        var alfabetoLetras = codificarMensagem.toLowerCase();
        var mensagemCodificada = "";
        for (var i = 0; i < alfabetoLetras.length; i++) {
          for (var j = 0; j < alfabeto.length; j++) {
            if (alfabetoLetras[i] == alfabeto[j]) {
              mensagemCodificada += alfabeto[j + parseInt(imputNumber)];
              break;
            } else if (alfabetoLetras[i] == " ") {
              mensagemCodificada += " ";
            }
          }
        }
      } else {
        var codificarMensagem = document.getElementById("text").value;
        var alfabetoLetras = codificarMensagem.toLowerCase();
        var mensagemCodificada = "";
        for (var i = 0; i < alfabetoLetras.length; i++) {
          for (var j = alfabeto.length; j >= 0; j--) {
            if (alfabetoLetras[i] == alfabeto[j]) {
              mensagemCodificada += alfabeto[j - parseInt(imputNumber)];
              break;
            } else if (alfabetoLetras[i] == " ") {
              mensagemCodificada += " ";
            }
          }
        }
      }
    } else {
      if (buttonCodificar.checked) {
        var codificarMensagem = document.getElementById("text").value;
        var mensagemCodificada = btoa(codificarMensagem);
      } else {
        var codificarMensagem = document.getElementById("text").value;
        var mensagemCodificada = atob(codificarMensagem);
      }
    }
{
}
inserirCripto.innerHTML = `<p>${mensagemCodificada}</p>`;
})