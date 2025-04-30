// os objetos de paradigma funcional nunca alteram o array original, sempre criam novas instancias
// criação de arrays
const array = [1,2,3,4,5,6,7,8,9,10,11,12]

// o map corre o array e transforma cada um dos elementos conforme a regra
// function arrow com uma simples operacao 
const novoArray = array.map(item => item *2)
console.log(novoArray);

// function arrow com um retorno multiplo, mais de uma linha
const arrayObjetoNumero = array.map((item) => {
    return {
        numero: item
    }
})

console.log(arrayObjetoNumero);

// filtrar os numeros do array dada uma condição
const numerosParesFiltrados = array.filter(numero => numero % 2 === 0);
console.log('Numeros pares do array: ', numerosParesFiltrados);

// filtrar por um elemento (retorna só um valor)
const numeroProcurado = array.find(numero => numero === 4);
console.log(`Retornando o numero procurado: ${numeroProcurado}`);

// retornar um boleano - existe ou nao existe (True or False)
const existeNumero = array.includes(15);
console.log(`O numero procurado esta no array? `, existeNumero);

// retorna se exite pelo menos um elemento do array valida a condição
// escrito da forma padrao
const existeNumeroPar = array.some(numero => {
    return numero % 2 === 0
});
console.log('Existe numeros pares no array: ', existeNumeroPar);

// retorna se todos os elemento do array atendem a condição
// escrito da forma padrao
const TodosOsNumerosDoArrayPares = array.every(numero => {
    return numero % 2 === 0
});
console.log('Todos os elementos do arry são pares? ', TodosOsNumerosDoArrayPares);

// conta quantos elementos te no array
console.log(array.length);


// funções que não seguem o paradigma funcional pois alteram o array origem

// adicionando um item no array - apenda no final
// essa propriedade do array modifica o array original
array.push(13);
console.log('Adicionado o número 13 no array ', array);

// remover o ultimo elemento do array
array.pop();
console.log('Apagando o ultimo elemento do array ', array);

// a função splice (posicao, elementos a deletar, elemento a adicionar)
// adicionando na posicao 1 o elemento 20
array.splice(1, 0, 20);
console.log('Adiciona na posicao 1 o numero 20 no array ', array);

// deletando na posicao 1, 1 elemento
array.splice(1, 1);
console.log('deleta na posicao 1, um elemento no array ', array);

// deletando na posicao 1, 2 elementos
array.splice(1, 2);
console.log('deleta na posicao 1, dois elementos no array ', array);

// deletando na posicao 1, e coloca um novo elemento nesta posição, como se fosse update
array.splice(0, 1, 30);
console.log('deleta na posicao 0, um elemento e coloca o 30 na mesma posição no array ', array);
