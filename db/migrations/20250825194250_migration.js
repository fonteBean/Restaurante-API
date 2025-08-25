/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  const exists = await knex.schema.hasTable("pratos");
  if (!exists) {
    await knex.schema.createTable("pratos", (table) => {
      table.increments("id").primary();          
      table.string("nome").notNullable();
      table.text("descricao").notNullable();
      table.decimal("preco", 10, 2).notNullable(); 
      table.text("ingredientes").notNullable();
    });
  }
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("pratos");
};
