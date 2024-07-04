function calcularIMC(){
const peso = parseFloat(document.getElementById('peso').value)
const altura = parseFloat(document.getElementById('altura').value)

const IMC = peso/altura ** 2
document.getElementById('imcResultado').textContent = IMC
}



