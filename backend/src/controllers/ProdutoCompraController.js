const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const produtoCompra = await connection('produtoCompra').select('*');
    
        return response.json(produtoCompra);
    },

    async create(request, response) {
        const {quantidade, produto_id} = request.body;
    
        const [id] = await connection('produtoCompra').insert({
            quantidade,
            produto_id,
        });

        // //calculo total da compra
        // valorProduto = await connection('produtos').select('preco').where('id', produto_id); 
        // const total = quantidade * valorProduto[0].preco;

        // await connection('compras').update('total', total).where('id', compra_id);

        return response.json({id}); 
    },

    async put(request, response) {
        const {id} = request.params;
        const {compra_id} = request.body;

        // await connection('compras').where('id', id).update({
        //     total, tipo_pagamento, status,
        // });

        await connection('compras').increment('compra_id', compra_id).where('id', id);

        return response.status(204).send();
    },

    async delete(request, response) {
        const {id} = request.params;

        await connection('produtoCompra').where('id', id).delete();

        return response.status(204).send();
    },
};