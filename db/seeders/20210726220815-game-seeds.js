'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Games', [
            { title: 'The Legend of Zelda: Ocarina of Time', description: 'The Legend of Zelda: Ocarina of Time is an action-adventure game developed and published by Nintendo for the Nintendo 64', releaseDate: new Date(1998, 11, 21), createdAt: new Date(), updatedAt: new Date() },
            { title: 'Jet Force Gemini', description: 'Jet Force Gemini is a 1999 third-person shooter developed and published by Rare for the Nintendo 64 video game console.', releaseDate: new Date(1999, 10, 11), createdAt: new Date(), updatedAt: new Date() },
            { title: 'Pokemon Red and Blue', description: 'Pokémon Red Version and Pokémon Blue Version are 1996 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy. ', releaseDate: new Date(1998, 9, 28), createdAt: new Date(), updatedAt: new Date() },
            { title: 'The Elder Scrolls IV: Oblivion', description: 'The Elder Scrolls IV: Oblivion is a 2006 open-world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks and the Take-Two Interactive division 2K Games.', releaseDate: new Date(2006, 3, 20), createdAt: new Date(), updatedAt: new Date() },
            { title: 'Fable', description: 'Fable is a series of action role-playing video games for Xbox, Microsoft Windows, macOS, Xbox 360 and Xbox One platforms. The series was developed by Lionhead Studios until the studio was closed in 2016, and is published by Xbox Game Studios', releaseDate: new Date(2004, 9, 14), createdAt: new Date(), updatedAt: new Date() },
            { title: 'Minecraft', description: 'Minecraft is a sandbox video game developed by the Swedish video game developer Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language', releaseDate: new Date(2011, 11, 18), createdAt: new Date(), updatedAt: new Date() },
            { title: 'Portal 2', description: 'Portal 2 is a 2011 puzzle-platform video game developed by Valve for Windows, Mac OS X, Linux, PlayStation 3, and Xbox 360. The digital PC version is distributed online by Valve\'s Steam service, while all retail editions were distributed by Electronic Arts.', releaseDate: new Date(2011, 4, 18), createdAt: new Date(), updatedAt: new Date() },
            { title: 'BioShock', description: 'BioShock is a 2007 first-person shooter game developed by 2K Boston and 2K Australia, and published by 2K Games. It is the first game in the BioShock series.', releaseDate: new Date(2007, 8, 21), createdAt: new Date(), updatedAt: new Date() },
            { title: 'Bloodborne', description: 'Bloodborne is an action role-playing game developed by FromSoftware and published by Sony Computer Entertainment, which released for the PlayStation 4 in March 2015', releaseDate: new Date(2015, 3, 24), createdAt: new Date(), updatedAt: new Date() },
            { title: 'Final Fantasy VII', description: 'Final Fantasy VII is a 1997 role-playing video game developed by Square for the PlayStation console. It is the seventh main installment in the Final Fantasy series. Published in Japan by Square, it was released in other regions by Sony Computer Entertainment and is the first in the main series with a PAL release.', releaseDate: new Date(1997, 1, 31), createdAt: new Date(), updatedAt: new Date() },
            { title: 'Cities: Skylines', description: 'Cities: Skylines is a 2015 city-building game developed by Colossal Order and published by Paradox Interactive. The game is a single-player open-ended city-building simulation. Players engage in urban planning by controlling zoning, road placement, taxation, public services, and public transportation of an area.', releaseDate: new Date(2015, 3, 10), createdAt: new Date(), updatedAt: new Date() },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Games', null, {truncate: true, cascade: true, restartIdentity: true});
    }
};
