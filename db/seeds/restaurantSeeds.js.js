/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
 
  await knex('pratos').del();
  
  await knex('pratos').insert([
    {
      nome: 'Pizza Margherita',
      descricao: 'Molho de tomate, mussarela, manjericão fresco e azeite.',
      preco: 45.00,
      ingredientes: 'molho de tomate, mussarela, manjericão, azeite',
    },
    {
      nome: 'Lasanha à Bolonhesa',
      descricao: 'Lasanha com molho bolonhesa, queijo e molho branco.',
      preco: 55.00,
      ingredientes: 'massa, molho bolonhesa, queijo, molho branco'
    },
    {
      nome: 'Salmão Grelhado',
      descricao: 'Filé de salmão grelhado com molho de maracujá e purê de batata.',
      preco: 75.50,
      ingredientes: 'salmão, maracujá, batata, manteiga',
    }
  ]);
};