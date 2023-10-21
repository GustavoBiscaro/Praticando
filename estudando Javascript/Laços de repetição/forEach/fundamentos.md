1) AULA SOBRE FOREACH

- QUANDO E POR QUE VOCÊ DEVE USAR O FOREACH
- O QUE É
- COMO ELE FUNCIONA

2) BAIXAR OS EXERCÍCIOS / DESAFIOS

3) RESOLUÇÃO

PRÉ-REQUISITOS:

-Variáveis
-Strings
-Arrays
    -como acessar. adicionar ou remover itens de um array
    -métodos auxiliares: push e join (exercícios)
    -funções
    -objetos
    -estruturas de repetição (for)
---
forEach: quando usar (porque usar)

Você deve usar o forEach quando precisar executar efeito colateral
para cada item de um array.

O que é o forEach?
- Significado: para cada
- Método para percorrer um array

Qual problema um loop resolve?
<code>
const numbers = [1, 2, 3]
numbers[0] + numbers[1] + numbers[2] // Ou seja, 1 + 2 + 3,

console.log(numbers[0] + numbers[1] + numbers[2]);
</code>

Ao invés disso

<code>
const numbers = [1, 2, 3]
    let result = 0
    numbers.forEach(number => result += number)
console.log(result)
</code>

Como funciona o forEach?
Ele recebe uma função...

<code>const numbers = [1, 2, 3]
number.forEach(() => {
    console.log('olá') //Retorna olá três vezes
})
</code>

Utilizando parâmetros...

<code>
numbers.forEach((number, index, array) => {
    console.log(number) // retorna 1, 2 3
    console.log(index) // retorna 1, 2, 3 (posição)
    console.log(array) // retorna o próprio array
});
<br><br>

</code>
    <p>Melhor visualizando...</p>
<code>

const numbers = [1, 2, 3]

numbers.forEach((number, index, array) => {
    console.log(number, index, array)
})

</code>

Ele é síncrono, executado de cima para baixo obrigatoriamente

Isso quer dizer que se tiver código abaixo do forEach, só será exibido após executar todo laço de repetição

# O que é efeito colateral (side-effect)?

Qualquer mudança de estado em uma aplicação, que pode ser percebida do lado de fora da função, e que não é um valor retornado pela função.

**Alguns exemplos de  side-effects**:

- Modificar alguma variável ou propriedade de objeto que está do lado de fora da função.
- Logar no console.
- Manipular DOM.
- Desencadear qualquer processo do lado de fora da função.
- Invocar outra função que executa efeito colateral.
- Não deve ser usado para retornar valor

<code>
const numbers = [1, 2, 3]
let result = 0

numbers.forEach(number > result += number)

console.log(result)
</code>

Essa função acima está executado side-effects pois está modificando uma variável do lado de fora.

Se eu declaro dentro, ela executa uma chamada e é removida da memória, por isso result tem que ficar fora

Uma maneira de deixar legível seria:

<code>

const numbers = [1, 2, 3]
let result = 0

const sum = number => {
    result += number
}

numbers.forEach(sum)

console.log(result)
</code>

<code>
const sum = numbers => {
    let result = 0
    numbers.forEach(number => result += number)
    return result
}

console.log(sum(numbers))
console.log(sum(4, 5, 6))
</code>

## forEach x for ##

**Legibilidade**

**Com o forEach**

<code>

const numbers = [1, 2, 3]

let result = 0

numbers.forEach(number => result += number)
</code>

**Com o for**

<code>
    for (let i = 0; i <code numbers.length; i++) {
        result += numbers[i]
    }

    console.log(result)
</code>

**Outro exemplo**

const numbers = [1, 2, 3, 4, 5]

<code>
numbers.forEach(number => {
    if (number === 3) {
        return
    }

    console.log(number)
})
</code>

Observe que ele não para a execução.

<code>

for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 3) {
        break
    }
    console.log(numbers[i])
}

</code>

Neste caso ele para a execução
