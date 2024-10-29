//Ejercicio 2: Motor de Recomendación de Productos
//Diseñe una función para recomendar productos a un usuario basado en varios factores.


function recommendProduct (age, isMember, purchaseHistory) {
    if ((isMember === true && purchaseHistory.tech >= 5) || (age >= 18 && age <= 30 && purchaseHistory.fashion >= 2)) {
        return ("High-Tech Product")
    } else if (age >= 18 && purchaseHistory.fashion >= 2){
        return ("Fashion Product")
    } else {
        return ("Low-Tech Product")
    }
}
console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 }));