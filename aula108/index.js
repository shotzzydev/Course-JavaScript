function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") reject(new Error('ERRO'));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    })
}

esperaAi('Conexão com o DB', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(22222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibi dados na tela')
    })
    .catch(e => {
        console.log('ERRO', e)
    });

    console.log('Isso aqui será exibido antes de qualquer promisse.')

// esperaAi('Frase 1', rand(1, 3), function() {
//     esperaAi('Frase 2', rand(1, 3), function () {
//         esperaAi('Frase 3', rand(1, 3));
//     });
// });

