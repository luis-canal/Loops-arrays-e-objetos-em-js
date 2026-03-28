const pessoas = [
 { nome: "João", idade: 25 },
 { nome: "Maria", idade: 18 },
 { nome: "Pedro", idade: 30 }, 
 { nome: "Aug", idade: 14 }, 
{ nome: "Bruno", idade: 15 }
];

const maiores = []

for (i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade > 18) {
        maiores.push(pessoas[i])
    }
}

console.log(maiores)