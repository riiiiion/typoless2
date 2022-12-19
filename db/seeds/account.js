/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('account').del()
  await knex('account').insert([
    {name: 'rion',password:'0000',high_score:40.03,icon:"icon1"},
    {name: 'koike',password:'0000',high_score:39.03,icon:"icon1"},
    {name: 'tsukiyama',password:'0000',high_score:38.03,icon:"icon1"},
    {name: 'akaishi',password:'0000',high_score:37.03,icon:"icon1"},
    {name: 'aida',password:'0000',high_score:36.03,icon:"icon1"},
    {name: 'rion2',password:'0000',high_score:35.03,icon:"icon1"},
    {name: 'koike2',password:'0000',high_score:34.03,icon:"icon1"},
    {name: 'tsukiyama2',password:'0000',high_score:33.03,icon:"icon1"},
    {name: 'akaishi2',password:'0000',high_score:32.03,icon:"icon1"},
    {name: 'aida2',password:'0000',high_score:31.03,icon:"icon1"},
    {name: 'rion3',password:'0000',high_score:30.03,icon:"icon1"},
    {name: 'koike3',password:'0000',high_score:29.03,icon:"icon1"},
    {name: 'tsukiyama3',password:'0000',high_score:28.03,icon:"icon1"},
    {name: 'akaishi3',password:'0000',high_score:27.03,icon:"icon1"},
    {name: 'aida3',password:'0000',high_score:26.03,icon:"icon1"},
    {name: 'rion4',password:'0000',high_score:25.03,icon:"icon1"},
    {name: 'koike4',password:'0000',high_score:24.03,icon:"icon1"},
    {name: 'tsukiyama4',password:'0000',high_score:23.03,icon:"icon1"},
    {name: 'akaishi4',password:'0000',high_score:22.03,icon:"icon1"},
    {name: 'aida4',password:'0000',high_score:21.03,icon:"icon1"},
    {name: 'rion5',password:'0000',high_score:20.03,icon:"icon1"},
    {name: 'koike5',password:'0000',high_score:19.03,icon:"icon1"},
    {name: 'tsukiyama5',password:'0000',high_score:18.03,icon:"icon1"},
    {name: 'akaishi5',password:'0000',high_score:17.03,icon:"icon1"},
    {name: 'aida5',password:'0000',high_score:41.03,icon:"icon1"},
    {name: 'rion6',password:'0000',high_score:42.03,icon:"icon1"},
    {name: 'koike6',password:'0000',high_score:43.03,icon:"icon1"},
    {name: 'tsukiyama6',password:'0000',high_score:44.03,icon:"icon1"},
    {name: 'akaishi6',password:'0000',high_score:45.03,icon:"icon1"},
    {name: 'aida6',password:'0000',high_score:46.03,icon:"icon1"},
    {name: 'rion7',password:'0000',high_score:55.03,icon:"icon1"},
    {name: 'koike7',password:'0000',high_score:122.03,icon:"icon1"},
    {name: 'tsukiyama7',password:'0000',high_score:23.03,icon:"icon1"},
    {name: 'akaishi7',password:'0000',high_score:45.03,icon:"icon1"},
    {name: 'aida7',password:'0000',high_score:98.03,icon:"icon1"},
  ]);
};
