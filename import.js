// quando estamos usado o nodejs somente conseguimos usar o que for feito em um arquivo
// somente é possivel se no final do arquivo que vc criou os objetos, voce exportar os
// objetos

// Importando objeto
const objeto = require('./objetos');

// desconstruindo na hora de importar
// const {mostraIdade, person} = require('./objetos');

// console.log(objeto.person);
// objeto.mostraIdade(20);

// mostraIdade(20)
// console.log(person)

const person3 = {
    nome: 'Maria',
    idade: 44
}

function testNome({ nome, idade}){
    console.log('nome: ', nome)
    console.log('idade: ', idade)
}

testNome(objeto.person);
testNome(person3);