/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('account').del()
  await knex('account').insert([
    {name: 'rion',password:'0000',high_score:40.03,icon:"Seal.png"},
    {name: 'koike',password:'0000',high_score:39.03,icon:"Squid.png"},
    {name: 'tsukiyama',password:'0000',high_score:38.03,icon:"Cow.png"},
    {name: 'akaishi',password:'0000',high_score:37.03,icon:"Horse.png"},
    {name: 'aida',password:'0000',high_score:36.03,icon:"Wolf.png"},
    {name: 'rion2',password:'0000',high_score:35.03,icon:"Hippo.png"},
    {name: 'koike2',password:'0000',high_score:34.03,icon:"Fox.png"},
    {name: 'tsukiyama2',password:'0000',high_score:33.03,icon:"Giraffe.png"},
    {name: 'akaishi2',password:'0000',high_score:32.03,icon:"Bear.png"},
    {name: 'aida2',password:'0000',high_score:31.03,icon:"Koala.png"},
    {name: 'rion3',password:'0000',high_score:30.03,icon:"Monkey.png"},
    {name: 'koike3',password:'0000',high_score:29.03,icon:"Deer.png"},
    {name: 'tsukiyama3',password:'0000',high_score:28.03,icon:"PlarBear.png"},
    {name: 'akaishi3',password:'0000',high_score:27.03,icon:"Elephant.png"},
    {name: 'aida3',password:'0000',high_score:26.03,icon:"Raccoon.png"},
    {name: 'rion4',password:'0000',high_score:25.03,icon:"Chimpanzee.png"},
    {name: 'koike4',password:'0000',high_score:24.03,icon:"Bird.png"},
    {name: 'tsukiyama4',password:'0000',high_score:23.03,icon:"Cat.png"},
    {name: 'akaishi4',password:'0000',high_score:22.03,icon:"Panda.png"},
    {name: 'aida4',password:'0000',high_score:21.03,icon:"Sheep.png"},
    {name: 'rion5',password:'0000',high_score:20.03,icon:"Chick.png"},
    {name: 'koike5',password:'0000',high_score:19.03,icon:"Pig.png"},
    {name: 'tsukiyama5',password:'0000',high_score:18.03,icon:"Penguin.png"},
    {name: 'akaishi5',password:'0000',high_score:17.03,icon:"Seal.png"},
    {name: 'aida5',password:'0000',high_score:41.03,icon:"Squid.png"},
    {name: 'rion6',password:'0000',high_score:42.03,icon:"Cow.png"},
    {name: 'koike6',password:'0000',high_score:43.03,icon:"Horse.png"},
    {name: 'tsukiyama6',password:'0000',high_score:44.03,icon:"Wolf.png"},
    {name: 'akaishi6',password:'0000',high_score:45.03,icon:"Hippo.png"},
    {name: 'aida6',password:'0000',high_score:46.03,icon:"Fox.png"},
    {name: 'rion7',password:'0000',high_score:55.03,icon:"Giraffe.png"},
    {name: 'koike7',password:'0000',high_score:122.03,icon:"Bear.png"},
    {name: 'tsukiyama7',password:'0000',high_score:23.03,icon:"Koala.png"},
    {name: 'akaishi7',password:'0000',high_score:45.03,icon:"Monkey.png"},
    {name: 'aida7',password:'0000',high_score:98.03,icon:"Deer.png"},
  ]);
};
