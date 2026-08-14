const btnEl = document.getElementById("btn")
const CMCInput = document.getElementById("resultado-CMC")
const condicaoDePesoEl = document.getElementById("condicaoDePeso")

function calcularCMC(){
    const heightValue = document.getElementById("altura").value / 100
    const weighttValue = document.getElementById("peso").value
    const CMCValue = weighttValue / (heightValue * heightValue)
    CMCInput.value =  CMCValue;
    if(CMCValue <18.5){
        condicaoDePesoEl.innerText = "Abaixo do peso!"
    } else if(CMCValue >= 18.5 && CMCValue <= 24.9){
        condicaoDePesoEl.innerText = "Peso normal!"
    } else if(CMCValue >=25 && CMCValue <=  29.9){
        condicaoDePesoEl.innerText = "Acima do Peso!"
    } else if(CMCValue >=30 ){
        condicaoDePesoEl.innerText = "Obeso!"
    }
}



btnEl.addEventListener("click", calcularCMC)




