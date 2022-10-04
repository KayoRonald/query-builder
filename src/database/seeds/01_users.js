/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('usuarios').del()
  await knex('usuarios').insert([
    { name: "Fulano", email: 'fulano@gmail.com', curso: '2 Informática ' },
		{ name: "Beutrano", email: 'beutrano@gmail.com', curso: '2 Geologia' },
		{ name: "Ciclano", email: 'ciclano@gmail.com', curso: '2 Edificações' },
  ]);
};
