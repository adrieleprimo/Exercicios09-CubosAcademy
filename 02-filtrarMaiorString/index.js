const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro"
];

const maiorString = cidades.reduce((acumulador, elementoAtual, indice, array)=>{
    let maior = acumulador;
    if(elementoAtual.length > maior.length){
        maior = elementoAtual;
    }
    return maior;
});
console.log(maiorString);