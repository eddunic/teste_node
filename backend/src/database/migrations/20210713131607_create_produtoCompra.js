exports.up = function(knex) {
    return knex.schema.createTable('produtoCompra', function(table) {
        table.increments();
        table.integer('quantidade').notNullable();

        table.integer('compra_id');

        table.integer('produto_id').notNullable();
        table.foreign('produto_id').references('id').inTable('produtos');
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('produtoCompra');
};
