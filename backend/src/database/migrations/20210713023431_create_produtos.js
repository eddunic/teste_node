exports.up = function(knex) {
    return knex.schema.createTable('produtos', function(table) {
        table.integer('id').primary();
        table.string('nome').notNullable();
        table.string('descricao').notNullable();
        table.double('preco').notNullable();
        table.date('data_criacao').notNullable();
        table.date('data_atualizacao');
    }); 
};

exports.down = function(knex) {
    return knex.schema.dropTable('produtos');
};
