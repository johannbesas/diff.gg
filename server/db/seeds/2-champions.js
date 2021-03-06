
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('champions').del()
    .then(function () {
      // Inserts seed entries
      return knex('champions').insert([
        { id: 1, name: 'Aatrox' },
        { id: 2, name: 'Ahri' },
        { id: 3, name: 'Akali' },
        { id: 4, name: 'Alistar' },
        { id: 5, name: 'Amumu' },
        { id: 6, name: 'Anivia' },
        { id: 7, name: 'Annie' },
        { id: 8, name: 'Aphelios' },
        { id: 9, name: 'Ashe' },
        { id: 10, name: 'Aurelion%20Sol' },
        { id: 11, name: 'Azir' },
        { id: 12, name: 'Bard' },
        { id: 13, name: 'Blitzcrank' },
        { id: 14, name: 'Brand' },
        { id: 15, name: 'Braum' },
        { id: 16, name: 'Caitlyn' },
        { id: 17, name: 'Camille' },
        { id: 18, name: 'Cassiopeia' },
        { id: 19, name: 'Cho\'Gath' },
        { id: 20, name: 'Corki' },
        { id: 21, name: 'Darius' },
        { id: 22, name: 'Diana' },
        { id: 23, name: 'Dr.%20Mundo' },
        { id: 24, name: 'Draven' },
        { id: 25, name: 'Ekko' },
        { id: 26, name: 'Elise' },
        { id: 27, name: 'Evelynn' },
        { id: 28, name: 'Ezreal' },
        { id: 29, name: 'Fiddlesticks' },
        { id: 30, name: 'Fiora' },
        { id: 31, name: 'Fizz' },
        { id: 32, name: 'Galio' },
        { id: 33, name: 'Gangplank' },
        { id: 34, name: 'Garen' },
        { id: 35, name: 'Gnar' },
        { id: 36, name: 'Gragas' },
        { id: 37, name: 'Graves' },
        { id: 38, name: 'Gwen' },
        { id: 39, name: 'Hecarim' },
        { id: 40, name: 'Heimerdinger' },
        { id: 41, name: 'Illaoi' },
        { id: 42, name: 'Irelia' },
        { id: 43, name: 'Ivern' },
        { id: 44, name: 'Janna' },
        { id: 45, name: 'Jarvan_IV' },
        { id: 46, name: 'Jax' },
        { id: 47, name: 'Jayce' },
        { id: 48, name: 'Jhin' },
        { id: 49, name: 'Jinx' },
        { id: 50, name: 'Kai\'Sa' },
        { id: 51, name: 'Kalista' },
        { id: 52, name: 'Karma' },
        { id: 53, name: 'Karthus' },
        { id: 54, name: 'Kassadin' },
        { id: 55, name: 'Katarina' },
        { id: 56, name: 'Kayle' },
        { id: 57, name: 'Kayn' },
        { id: 58, name: 'Kennen' },
        { id: 59, name: 'Kha\'zix' },
        { id: 60, name: 'Kindred' },
        { id: 61, name: 'Kled' },
        { id: 62, name: 'Kog\'maw' },
        { id: 63, name: 'Leblanc' },
        { id: 64, name: 'Leesin' },
        { id: 65, name: 'Leona' },
        { id: 66, name: 'Lillia' },
        { id: 67, name: 'Lissandra' },
        { id: 68, name: 'Lucian' },
        { id: 69, name: 'Lulu' },
        { id: 70, name: 'Lux' },
        { id: 71, name: 'Malphite' },
        { id: 72, name: 'Malzahar' },
        { id: 73, name: 'Maokai' },
        { id: 74, name: 'Master%20Yi' },
        { id: 75, name: 'Miss%20Fortune' },
        { id: 76, name: 'Mordekaiser' },
        { id: 77, name: 'Morgana' },
        { id: 78, name: 'Nami' },
        { id: 79, name: 'Nasus' },
        { id: 80, name: 'Nautilus' },
        { id: 81, name: 'Neeko' },
        { id: 82, name: 'Nidalee' },
        { id: 83, name: 'Nocturne' },
        { id: 84, name: 'Nunu%20%26%20Willump' },
        { id: 85, name: 'Olaf' },
        { id: 86, name: 'Orianna' },
        { id: 87, name: 'Ornn' },
        { id: 88, name: 'Pantheon' },
        { id: 89, name: 'Poppy' },
        { id: 90, name: 'Pyke' },
        { id: 91, name: 'Qiyana' },
        { id: 92, name: 'Quinn' },
        { id: 93, name: 'Rakan' },
        { id: 94, name: 'Rammus' },
        { id: 95, name: 'Rek\'sai' },
        { id: 96, name: 'Renekton' },
        { id: 97, name: 'Rengar' },
        { id: 98, name: 'Riven' },
        { id: 99, name: 'Rumble' },
        { id: 100, name: 'Ryze' },
        { id: 101, name: 'Sejuani' },
        { id: 102, name: 'Senna' },
        { id: 103, name: 'Seraphine' },
        { id: 104, name: 'Sett' },
        { id: 105, name: 'Shaco' },
        { id: 106, name: 'Shen' },
        { id: 107, name: 'Shyvana' },
        { id: 108, name: 'Singed' },
        { id: 109, name: 'Sion' },
        { id: 110, name: 'Sivir' },
        { id: 111, name: 'Skarner' },
        { id: 112, name: 'Sona' },
        { id: 113, name: 'Soraka' },
        { id: 114, name: 'Swain' },
        { id: 115, name: 'Sylas' },
        { id: 116, name: 'Syndra' },
        { id: 117, name: 'Tahm%20Kench' },
        { id: 118, name: 'Taliyah' },
        { id: 119, name: 'Talon' },
        { id: 120, name: 'Taric' },
        { id: 121, name: 'Teemo' },
        { id: 122, name: 'Thresh' },
        { id: 123, name: 'Tristana' },
        { id: 124, name: 'Trundle' },
        { id: 125, name: 'Tryndamere' },
        { id: 126, name: 'Twisted%20Fate' },
        { id: 127, name: 'Twitch' },
        { id: 128, name: 'Udyr' },
        { id: 129, name: 'Urgot' },
        { id: 130, name: 'Varus' },
        { id: 131, name: 'Vayne' },
        { id: 132, name: 'Veigar' },
        { id: 133, name: 'Vel\'koz' },
        { id: 134, name: 'Vi' },
        { id: 135, name: 'Viktor' },
        { id: 136, name: 'Viego' },
        { id: 137, name: 'Vladimir' },
        { id: 138, name: 'Volibear' },
        { id: 139, name: 'Warwick' },
        { id: 140, name: 'Wukong' },
        { id: 141, name: 'Xayah' },
        { id: 142, name: 'Xerath' },
        { id: 143, name: 'Xin%20Zhao' },
        { id: 144, name: 'Yasuo' },
        { id: 145, name: 'Yone' },
        { id: 146, name: 'Yorick' },
        { id: 147, name: 'Yuumi' },
        { id: 148, name: 'Zac' },
        { id: 149, name: 'Zed' },
        { id: 150, name: 'Ziggs' },
        { id: 151, name: 'Zilean' },
        { id: 152, name: 'Zoe' },
        { id: 153, name: 'Zyra' }
      ]);
    });
};
