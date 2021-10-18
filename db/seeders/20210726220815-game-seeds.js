'use strict';

const { genGames, getGames } = require("../util");

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let games = await getGames()
        let [gameSeeds, gamesGenres] = await genGames(games)

        await queryInterface.bulkInsert('Games',gameSeeds,{})
        return queryInterface.bulkInsert('GamesGenres', gamesGenres, {})




        // return queryInterface.bulkInsert('Games', [
        //     { title: 'The Legend of Zelda: Ocarina of Time', description: 'The Legend of Zelda: Ocarina of Time is an action-adventure game developed and published by Nintendo for the Nintendo 64', releaseDate: new Date(1998, 11, 21), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2twe.jpg'},
        //     { title: 'Jet Force Gemini', description: 'Jet Force Gemini is a 1999 third-person shooter developed and published by Rare for the Nintendo 64 video game console.', releaseDate: new Date(1999, 10, 11), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co25k1.jpg' },
        //     { title: 'Pokemon Red', description: 'Pokémon Red Version and Pokémon Blue Version are 1996 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy. ', releaseDate: new Date(1998, 9, 28), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2s5t.jpg' },
        //     { title: 'The Elder Scrolls IV: Oblivion', description: 'The Elder Scrolls IV: Oblivion is a 2006 open-world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks and the Take-Two Interactive division 2K Games.', releaseDate: new Date(2006, 3, 20), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tc8.jpg' },
        //     { title: 'Fable', description: 'Fable is a series of action role-playing video games for Xbox, Microsoft Windows, macOS, Xbox 360 and Xbox One platforms. The series was developed by Lionhead Studios until the studio was closed in 2016, and is published by Xbox Game Studios', releaseDate: new Date(2004, 9, 14), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2q4c.jpg' },
        //     { title: 'Minecraft', description: 'Minecraft is a sandbox video game developed by the Swedish video game developer Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language', releaseDate: new Date(2011, 11, 18), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2jin.jpg' },
        //     { title: 'Portal 2', description: 'Portal 2 is a 2011 puzzle-platform video game developed by Valve for Windows, Mac OS X, Linux, PlayStation 3, and Xbox 360. The digital PC version is distributed online by Valve\'s Steam service, while all retail editions were distributed by Electronic Arts.', releaseDate: new Date(2011, 4, 18), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1rs4.jpg' },
        //     { title: 'BioShock', description: 'BioShock is a 2007 first-person shooter game developed by 2K Boston and 2K Australia, and published by 2K Games. It is the first game in the BioShock series.', releaseDate: new Date(2007, 8, 21), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2mli.jpg' },
        //     { title: 'Bloodborne', description: 'Bloodborne is an action role-playing game developed by FromSoftware and published by Sony Computer Entertainment, which released for the PlayStation 4 in March 2015', releaseDate: new Date(2015, 3, 24), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1rba.jpg' },
        //     { title: 'Final Fantasy VII', description: 'Final Fantasy VII is a 1997 role-playing video game developed by Square for the PlayStation console. It is the seventh main installment in the Final Fantasy series. Published in Japan by Square, it was released in other regions by Sony Computer Entertainment and is the first in the main series with a PAL release.', releaseDate: new Date(1997, 1, 31), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2kx2.jpg' },
        //     { title: 'Cities: Skylines', description: 'Cities: Skylines is a 2015 city-building game developed by Colossal Order and published by Paradox Interactive. The game is a single-player open-ended city-building simulation. Players engage in urban planning by controlling zoning, road placement, taxation, public services, and public transportation of an area.', releaseDate: new Date(2015, 3, 10), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1mx3.jpg' },
        //     { title: 'Stellaris', description: 'Explore a vast galaxy full of wonder! Paradox Development Studio, makers of the Crusader Kings and Europa Universalis series presents Stellaris, an evolution of the grand strategy genre with space exploration at its core.', releaseDate: new Date(2016, 5, 9), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r75.jpg' },
        //     { title: 'Divinity: Original Sin II', description: 'Divinity: Original Sin II is a single- and multiplayer top-down, party-based role-playing game with pen & paper RPG-like levels of freedom.It features turn-based combat, a strong focus on systematic gameplay and a well-grounded narrative.', releaseDate: new Date(2017, 9, 14), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1y5v.jpg' },
        //     { title: 'Kerbal Space Program', description: 'In KSP, you must build space-worthy craft, capable of flying your crew out into space, without killing them. At your disposal is a collection of parts, which must be assembled to create a functional ship. Each part has its own function and will affect the way a ship flies (or doesn\'t).', releaseDate: new Date(2015, 4, 27), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co26n5.jpg' },
        //     { title: 'RimWorld', description: 'A sci fi colony sim driven by an intelligent AI storyteller. RimWorld follows three survivors from a crashed space liner as they build a colony on a frontier world at the rim of known space. Inspired by the space western vibe of Firefly, the deep simulation of Dwarf Fortress, and the epic scale of Dune and Warhammer 40,000.', releaseDate: new Date(2018, 10, 17), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1j6x.jpg' },
        //     { title: 'Transport Fever 2', description: 'The classic transport simulation genre has a new gold standard with Transport Fever 2. Discover a whole new world by navigating transport routes through land, water and air. May progress and prosperity find their way!', releaseDate: new Date(2019, 12, 11), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1uor.jpg' },
        //     { title: 'The Witcher 3: Wild Hunt', description: 'RPG and sequel to The Witcher 2 (2011), The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms.', releaseDate: new Date(2015, 5, 19), createdAt: new Date(), updatedAt: new Date(), imageURL: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg' },
        // ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Games', null, {truncate: true, cascade: true, restartIdentity: true});
    }
};
