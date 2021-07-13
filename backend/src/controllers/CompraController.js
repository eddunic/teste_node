const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const compras = await connection('compras').select('*');
    
        return response.json(compras);
    },

    async indexEspecifico(request, response) {
        const {id} = request.params;

        const compra = await connection('compras').select('*').where('id', id);
    
        return response.json(compra);
    },

    async create(request, response) {
        const {total, data_criacao, tipo_pagamento, status} = request.body;

        const id = crypto.randomInt(2147483647);

        await connection('compras').insert({
            id,
            total,
            data_criacao,
            tipo_pagamento,
            status,
        });
    
        return response.json({id});
    },

    async put(request, response) {
        const {id} = request.params;
        const {total, tipo_pagamento, status} = request.body;

        await connection('compras').where('id', id).update({
            total, tipo_pagamento, status,
        });

        return response.status(204).send();
    },

    async delete(request, response) {
        const {id} = request.params;

        await connection('compras').where('id', id).delete();

        return response.status(204).send();
    },
}