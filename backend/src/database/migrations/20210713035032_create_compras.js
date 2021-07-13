exports.up = function(knex) {
    return knex.schema.createTable('compras', function(table) {
        table.integer('id').primary();
        table.double('total').notNullable();
        table.date('data_criacao').notNullable();
        table.string('tipo_pagamento').notNullable();
        table.string('status').notNullable();
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('compras');
};
