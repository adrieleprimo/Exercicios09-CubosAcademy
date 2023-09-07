const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

const ordemCrescente = numeros.sort((a, b)=>{
    return a-b;
});
console.log(ordemCrescente)

const ordemDecrescente = numeros.sort((a, b)=>{
    return b-a;
});
console.log(ordemDecrescente);

console.log(numeros.sort());

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const ordemAlfabetica = frutas.sort((a, b)=>{
    return a.localeCompare(b);
});
console.log(ordemAlfabetica);

const ordemAlfabeticaDecre = frutas.sort((a, b)=>{
    return b.localeCompare(a);
});
console.log(ordemAlfabeticaDecre);

const ordemCaracters = frutas.sort((a, b)=>{
    return a.length-b.length;
});
console.log(ordemCaracters);