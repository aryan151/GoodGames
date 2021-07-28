'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Reviews', [
        { content: 'This is the best game ever! It has a large world, great graphics, ( some ) hard puzzles and it brought, like all Zelda games, something new in the Zelda series and in the gaming world.', userId: 1, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 5 },
        { content: 'This Zelda adventure will undoubtedly withstand the test of time and take its place as one of the best games to ever grace a home system.', userId: 2, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: 'Jet Force Gemini is synonym of PERFECTION. For its time its visual graphics and OST were so amazing, the story is really interesting, the gameplay is very enjoyable. This videogame DESERVES a remasterization. I wish someday to see a remake about it, I\'d totally buy it with no hesitation.', userId: 3, gameId: 2, createdAt: new Date(), updatedAt: new Date(), rating: 2 },
        { content: 'I really like this game .... it\'s a great shootin\' one.', userId: 4, gameId: 2, createdAt: new Date(), updatedAt: new Date(), rating: 5 },
        { content: 'An amazing game, fun to play, could spend 100+ hours in it and still be playing. It\'s even better if you bought it for PC, as there are tons of community mods for it, adding loads of new content, bug fixes, and more!', userId: 5, gameId: 4, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: 'One of the best packages of the past several years, with no element even average; everything is as close to perfect as can be expected.', userId: 1, gameId: 4, createdAt: new Date(), updatedAt: new Date(), rating: 2 },
        { content: 'Much of what was supposed to make Fable innovative was ultimately cut out, but what\'s left still looks incredible and is amazingly fun to play.', userId: 2, gameId: 5, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: 'A sensation, and rightly so. This is a game that makes you both happy and creative.', userId: 3, gameId: 6, createdAt: new Date(), updatedAt: new Date(), rating: 5 },
        { content: `Now that it's finally "finished," Minecraft stands as a remarkable achievement - not only a well-rounded gaming experience, but a chance for players to experiment, explore freely and reshape their environment to an almost ludicrous level. If you own a computer and haven't given Minecraft a try, you're missing one of the most unique experiences of this generation.`, userId: 4, gameId: 6, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: `I feel bad for all these players who can't get off their high horse and enjoy this great game. The first Portal while short and mostly devoid of cutscenes had more story and personality than many games that come out retail.`, userId: 2, gameId: 7, createdAt: new Date(), updatedAt: new Date(), rating: 5 },
        { content: `This game mixes slight horror, great graphics, amazing game play and an engaging story line all wrapped in one cd. This has and will always will be my favorite game. 2K games, keep up the good work and thank you for this absolutely phenomenal game.`, userId: 1, gameId: 8, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: 'The first-person shooter is, simply, one of the best games ever made.', userId: 2, gameId: 8, createdAt: new Date(), updatedAt: new Date(), rating: 5 },
        { content: 'I want to keep playing, I want to discover its secrets, I want to fight every monster, try every weapon, discuss theories and explore as many of the community dungeons as possible. To put it bluntly, I want to bleed the game dry.', userId: 5, gameId: 9, createdAt: new Date(), updatedAt: new Date(), rating: 3 },
        { content: 'Bloodborne takes the best of Dark Souls and builds the unrelenting gaming challenge on a prefect foundation - it will test your abilities to the max. The first true must-have exclusive for PS4 is here. ', userId: 2, gameId: 9, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: 'Bloodborne is an incredible game; tight in its mechanics, logical in its systems, rewarding, intense, gloriously frustrating and exciting in equal measure. The PS4 has its first absolutely essential game. As if there was ever any doubt.', userId: 1, gameId: 9, createdAt: new Date(), updatedAt: new Date(), rating: 5 },
        { content: 'The first PS one installment of Final Fantasy is still one of the best ever.', userId: 2, gameId: 10, createdAt: new Date(), updatedAt: new Date(),rating: 5 },
        { content: 'Final fantasy VII is a great ps1 game, it was released in 1997 along with crash bandicoot 2 and oddworld abe\'s oddysee, if you\'re final fantasy fan check it out!', userId: 4, gameId: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: 'This is the current apex in RPG games. In fact it is probably one of the best OVERALL games ever created for ANY system.', userId: 1, gameId: 10, createdAt: new Date(), updatedAt: new Date(), rating: 3 },
        { content: 'GOAT! This was a real game-changer for the videogames industry. It had it all!', userId: 4, gameId: 10, createdAt: new Date(), updatedAt: new Date(), rating: 5 },
        { content: 'Truly beautiful game and an experience that is fully appreciated from my point of view. The next Sim City 4 deluxemade by Paradox. Thank you, I am sincerely grateful!', userId: 3, gameId: 11, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: 'How do I know this is a great game? Thought, I\'ll just fire it up, make sure it works as I intended to play BF4. 4 hours later, I\'m balls deep in cultivating a high ed, high tech city of awesomeness.', userId: 2, gameId: 11, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Reviews', null, {truncate: true, cascade: true, restartIdentity: true});
    }
};
