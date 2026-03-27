const numeros = [1,2,3,4,5];
let soma = 0

//primeiro parâmetro = controlador
//segundo parâmetro = condição de continuidade (quantas vezes percorre)
//terceiro parâmetro = incrementa ao controlador
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log("O resultado de soma é: " + soma);