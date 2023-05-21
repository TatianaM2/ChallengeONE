function encriptar() {
    var textoOriginal = document.getElementById('text-area').value;
    var textoEncriptado = encriptarTexto(textoOriginal);
    document.getElementById('mensaje-ingresar').innerHTML = textoEncriptado;
    document.getElementsByClassName("imagen")[0].style.display = "none";
    document.getElementsByClassName("mensaje-noencontrado")[0].style.display = "none";
    document.getElementById("mensaje-ingresar").style.textAlign = "Left";
    document.getElementById("copiar").style.display = "show"; 
    document.getElementById("copiar").style.display = "block";
  }

  function desencriptar() {
    var textoEncriptado = document.getElementById('text-area').value;
    var textoOriginal = desencriptarTexto(textoEncriptado);
    document.getElementById('mensaje-ingresar').innerHTML = textoOriginal;
    document.getElementsByClassName("imagen")[0].style.display = "none";
    document.getElementsByClassName("mensaje-noencontrado")[0].style.display = "none";
    document.getElementById("mensaje-ingresar").style.textAlign = "Left";
    document.getElementById("copiar").style.display = "show"; 
    document.getElementById("copiar").style.display = "block";
  }

  function encriptarTexto(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    
    return texto;
  }

  function desencriptarTexto(texto) {
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
 
    return texto;
  }

  function copiar() {
    var resultado = document.getElementById('mensaje-ingresar').innerHTML;
    navigator.clipboard.writeText(resultado);
    alert('El texto ha sido copiado al portapapeles.');
  }