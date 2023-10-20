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



