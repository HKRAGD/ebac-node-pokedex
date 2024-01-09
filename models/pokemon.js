const { Schema } = require('mongoose');

const Pokemon = new Schema({
    id: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    peso: {
        type: Number,
        required: true,
    },
    altura: {
        type: Number,
        required: true,
    },
    imagem: {
        type: String,
        required: true,
        validade: {
            validator: (valor) => {
                return valor && valor.startsWith('http');
            },
            message: () => "a imagem deve ser uma url absoluta",
        }
    },
    ataques: {
        type: String,
        required: true,
    },
    estatisticas: {
        type: Object,
        required: true,
    },
});

module.exports = Pokemon;