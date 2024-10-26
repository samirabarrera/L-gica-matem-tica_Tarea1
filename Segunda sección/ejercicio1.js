//Ejercicio 1: Sistema de Evaluación de Riesgo
//Cree una función que evalúe el nivel de riesgo de un cliente bancario basado en varios factores.

let clienteBancario = [altoRiesgo, riesgoModerado]

let altoRiesgo = {
    income: 150000,
    hasLoans: true,
    latePayments: 4,
    isStudent: true,
}

let riesgoModerado = {
    income: 20000,
    hasLoans: true,
    latePayments: 3,
    isStudent: false,

}

function evaluateRisk (income, hasLoans, latePayments, isStudent){
    const clienteBancario = (altoRiesgo, riesgoModerado) => {
        if (income <= 20000, hasLoans === true, latePayments <= 4){
            return ("High")
        } else {
            return ("Low")
        }
    }
}
console.log(evaluateRisk(15000, true, 4, true));