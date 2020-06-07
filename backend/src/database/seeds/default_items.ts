import Knex from 'knex';

export async function seed(knex: Knex){
     return knex('items').insert([
        {title: 'lampada', image:'lampadas.svg'},
        {title: 'Pilhas e Baterias', image:'baterias.svg'},
        {title: 'Papeis e Bapelão', image:'papeis-papelao.svg'},
        {title: 'Resíduos Eletrônicos', image:'eletronicos.svg'},
        {title: 'Resíduos Orgânicos', image:'organicos.svg'},
        {title: 'Óleo de Cozinha', image:'oleo.svg'},
    ])
}