
function initPago(){
    console.log("Inicio procedimiento pago");
}
function PagoEfectivo(efectivo){
    console.log(`Metodo de pago: ${efectivo}`);
}
function PagoTarjeta(){
    console.log(`Cancelas con otro metodo de pago`);
}
const MetodoPago = "efectivo";
initPago();

if(MetodoPago){
    PagoEfectivo(MetodoPago);
    console.log("Cancelas con: " + MetodoPago + ", tienes descuento");
}else{
    PagoTarjeta();
}

const suma = (numero1, numero2) => {
    return numero1 + numero2;
}
const num = prompt("Ingrese numero mayor a 0");
function parOimpar(numero){
    if(Number.parseInt(numero) % 2 == 0){
        alert("Número par");
    }else{
        alert("Número impar");
    }
}
parOimpar(num);