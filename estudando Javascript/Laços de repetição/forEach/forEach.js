// EXEMPLO 1
//DISPARO AUTOMÁTICO DE EMAIL PARA UMA LISTA DE CONTATO

/*
let listaAprovados = [
    'gustavinho@gloob.com',
    'merlyn@plataform.com',
    'morgan@teste.com',
    'coordenador@eduq.com.br',
    'albertEinstein@morgstein.com'
];

const enviarEmail = (email) => {
    console.log(`Email para ${email} foi enviado com sucesso!`)
};

listaAprovados.forEach((item, posicao, array) => { //1ª parâmetro é o item, o 2ª parâmetro é a posição, 3ª parâmetro forEach espera
    enviarEmail(item);
    console.log(`Sua posição é a de: ${posicao}`);
    console.log(`A quantidade de pessoas no processo seletivo é: ${array.length}`)
})
*/

// EXEMPLO 2
// ARRAY SIMPLES
/*
let pessoas = ['Gustavo', 'Maria', 'José']
pessoas.forEach((valorAtual, indice, arrayCompleto) => {
    console.log(indice, valorAtual, arrayCompleto);

})
*/

// EXEMPLO 3 
// ARRAY DE OBJETOS - MOSTRAR NA TELA

/*let produtos = [
    {
        nomeProduto: 'Celular',
        valorProduto: 1200.00,
        porcentagemDesconto: 0.20
    },

    {
        nomeProduto: 'Desktop',
        valorProduto: 3000.00,
        porcentagemDesconto: 0.30,
    },

    {
        nomeProduto: 'Televisao',
        valorProduto: 3500.00,
        porcentagemDesconto: 0.35
    }
];

produtos.forEach((produtoAtual) => {
    console.log(produtoAtual.nomeProduto, + '' + produtoAtual.valorProduto); //produtoAtual imprimi o array do objeto, produtoAtual.nomeProduto imprime apenas o nome
});
*/




//EXEMPLO 4
// CALCULAR O DESCONTO

let produtos = [
    {
        nomeProduto: 'Celular',
        valorProduto: 1200.00,
        porcentagemDesconto: 0.20
    },

    {
        nomeProduto: 'Desktop',
        valorProduto: 3000.00,
        porcentagemDesconto: 0.30,
    },

    {
        nomeProduto: 'Televisao',
        valorProduto: 3500.00,
        porcentagemDesconto: 0.35
    }
];

produtos.forEach((produtoAtual) => {
    let valorDesconto = produtoAtual.valorProduto * produtoAtual.porcentagemDesconto;
    let valorFinal = produtoAtual.valorProduto - valorDesconto;
    console.log('\n');
    console.log(produtoAtual.nomeProduto + ' | Valor: R$' + produtoAtual.valorProduto);
    console.log("Desconto: R$" + valorDesconto);
    console.log("Valor Final: R$" + valorFinal);
    console.log('\n');
})