// const nome = "Luan";
// const sobrenome = "Oliveira";

// const falaNome = () => nome + ' ' + sobrenome;
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = "qualque coisa";

// console.log(exports)


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = "Luan";
const sobrenome = "Oliveira";

module.exports = {
    nome, sobrenome, Pessoa
}

// module.exports.nome = 'Luan';
// exports.Pessoa = Pessoa;
// this.sobrenome = "Text"
