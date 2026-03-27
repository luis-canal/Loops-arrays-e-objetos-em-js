const numeros = [1,2,2,3,3,4,5,5];
const elementos_unicos = []

for (let i = 0; i < numeros.length; i++) {
    if (elementos_unicos.includes(numeros[i]) == false) {
        elementos_unicos.push(numeros[i])
    }
}

console.log("Quantidade de elementos únicos: " + elementos_unicos.length);