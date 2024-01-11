const axios = require('axios');

const buscaInfoPokemon = (pokeId) => {
    return new Promise((resolve, reject) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;

        axios.get(url).then(resultado => {
            const data = resultado.data;

            const estatisticas = {};
            
            data.stats.forEach((estatistica) => {
                estatisticas[estatistica.stat.name] = estatistica.base_stat;
            });

            const pokemon = {
                id: data.id,
                nome: data.name,
                altura: data.height,
                peso: data.weight,
                imagem: data.sprites.other['official-artwork'].front_default,
                ataques: data.abilities.map(a => a.ability.name).join(', '),
                estatisticas,
            }

            resolve(pokemon);
        }).catch((e) => reject(e));
    });
}

module.exports = buscaInfoPokemon;