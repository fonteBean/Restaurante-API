/**
 * @param { import("knex").Knex } knex
 * @return { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('pratos').del();
  await knex('pratos').insert([
    {
      nome: 'Salada Mediterrânea',
      descricao: 'Uma mistura fresca de folhas verdes, tomate-cereja, pepino, azeitonas, queijo feta e um molho leve de limão e azeite.',
      preco: 25.50,
      ingredientes: 'Alface, rúcula, tomate-cereja, pepino, azeitonas pretas, queijo feta, azeite, suco de limão, sal, pimenta.'
    },
    {
      nome: 'Risoto de Funghi Secchi',
      descricao: 'Risoto cremoso com cogumelos funghi secchi, parmesão e um toque de azeite trufado.',
      preco: 45.00,
      ingredientes: 'Arroz arbóreo, cogumelos funghi secchi, caldo de legumes, cebola, alho, vinho branco, queijo parmesão, manteiga, azeite trufado, sal, pimenta.'
    },
    {
      nome: 'Filé Mignon ao Molho de Vinho Tinto',
      descricao: 'Suculento filé mignon grelhado, servido com um molho rico de vinho tinto, acompanhado de purê de batata.',
      preco: 68.90,
      ingredientes: 'Filé mignon, vinho tinto, cebola, alho, tomilho, caldo de carne, batatas, leite, manteiga, sal, pimenta.'
    }
  ]);
};