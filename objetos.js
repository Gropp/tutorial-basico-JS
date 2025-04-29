// Criando objetos no JS
// usando let criasse uma variavel
const person =  {
    nome: 'Joao',
    sobrenome: 'Alberto',
    idade: 33
}

// somente podemos atribuir valor as propriedades do objeto, o JS nao permite reatribuir o objeto
person.nome = 'Felipe'
console.log(person)

// desconstruindo um objeto (array)
const array =  [1, 2, 3]

const array2 = [...array, 4, 5, 6]
console.log(array2)

// desconstruindo o objeto person para usar os dados na pessoa 2
const person2 = {
    ...person,
    idade : 25, //se declarar um objeto que já existe ele sobrescreve
    telefone : '9.9999-9999'
}

console.log(person2)

const mostraIdade = (idade) => {
    console.log(idade)
}

mostraIdade(20);

// funçõoes em JS

function test() {
    console.log('teste de função padrão')
}

test();

// como funções em js tambem são objetos eu posso salvar ela como uma variavel

const test_anonima_arrow = () => {
    console.log('função anonima')
}

test_anonima_arrow();

module.exports = {
    person,
    person2 : person2,
    mostraIdade: mostraIdade
};