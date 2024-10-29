//Ejercicio 1: Sistema de Evaluación de Riesgo
//Cree una función que evalúe el nivel de riesgo de un cliente bancario basado en varios factores.

function evaluateRisk (income, hasLoans, latePayments, isStudent){
        if (income <= 20000, hasLoans === true, latePayments <= 4){
            return ("High")
        } else {
            return ("Low")
        }
}
console.log(evaluateRisk(15000, true, 4, true));