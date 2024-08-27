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
    altura:{
        type: Number,
        required: true,
        min: 0,
    },
    peso: {
        type: Number,
        required: true,
        min: 0,
    },
    imagem: {
        type: String,
        required: true,
        validate: {
            validator: (valor) => {
                return valor && valor.startsWith('http');
            },
            message: () => "a imagem deve ser uma URL absoluta",
        },
    },
    ataques: {
        type: String,
        require: true,
    },
    estatisticas: {
        type: Object,
        required: true,
    },
});

module.exports = Pokemon;