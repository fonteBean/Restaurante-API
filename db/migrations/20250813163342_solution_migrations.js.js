/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pratos', (table) => {
    table.string('nome', 255).notNullable();

    table.text('descricao');

    table.decimal('preco', 10, 2).notNullable();

    table.text('ingredientes');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('pratos');
};
