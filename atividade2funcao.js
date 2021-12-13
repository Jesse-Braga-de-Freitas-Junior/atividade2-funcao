function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: 'Cristiane',
    idade: 37,
};

const pessoa2 = {
    nome: 'Jessé',
    idade: 35,
};

const pessoa3 = {
    nome: 'Miguel',
    idade: 2,
};

const animal = {
    nome: 'Lion',
    idade: 1,
    raca: 'Rotwaille',
};

console.log(calculaIdade.call(pessoa1, 30));
console.log(calculaIdade.apply(pessoa1, [40]));
console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.apply(pessoa2, [40]));
console.log(calculaIdade.call(pessoa3, 30));
console.log(calculaIdade.apply(pessoa3, [40]));
console.log(calculaIdade.call(animal, 5));
console.log(calculaIdade.apply(animal, [7]));
