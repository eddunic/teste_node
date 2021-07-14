const crypto = require('crypto');
const { json } = require('express');
const connection = require('../database/connection');
const { put } = require('../routes');

module.exports = {
    async index(request, response) {
        const produtos = await connection('produtos').select('*');
    
        return response.json(produtos);
    },

    async indexEspecifico(request, response) {
        const {id} = request.params;

        const produto = await connection('produtos').select('*').where('id', id);
    
        return response.json(produto);
    },

    async create(request, response) {
        const {nome, descricao, preco, data_criacao} = request.body;

        const id = crypto.randomInt(2147483647);
    
        await connection('produtos').insert({
            id,
            nome,
            descricao,
            preco,
            data_criacao,
        });
    
        return response.json({id});
    },

    async put(request, response) {
        const {id} = request.params;
        const {nome, descricao, preco, data_atualizacao} = request.body;

        await connection('produtos').where('id', id).update({
            nome, descricao, preco, data_atualizacao,
        });

        return response.status(204).send();
    },

    async delete(request, response) {
        const {id} = request.params;

        await connection('produtos').where('id', id).delete();

        return response.status(204).send();
    },
};