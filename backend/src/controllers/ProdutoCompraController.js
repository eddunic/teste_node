const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const produtoCompra = await connection('produtoCompra').select('*');
    
        return response.json(produtoCompra);
    },

    async create(request, response) {
        const {quantidade, compra_id, produto_id} = request.body;
    
        const [id] = await connection('produtoCompra').insert({
            quantidade,
            compra_id,
            produto_id,
        });

        //calculo total da compra
        valorProduto = await connection('produtos').select('preco').where('id', produto_id); 
        const total = quantidade * valorProduto[0].preco;

        await connection('compras').update('total', total).where('id', compra_id);

        return response.json({id}); 
    },

    async delete(request, response) {
        const {id} = request.params;

        await connection('produtoCompra').where('id', id).delete();

        return response.status(204).send();
    },
};