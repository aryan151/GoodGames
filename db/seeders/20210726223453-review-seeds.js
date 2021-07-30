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
        { content: 'Without a doubt one of the most god awful games there is.', userId: 1, gameId: 9, createdAt: new Date(), updatedAt: new Date(), rating: 1 },
        { content: 'The first PS one installment of Final Fantasy is still one of the best ever.', userId: 2, gameId: 10, createdAt: new Date(), updatedAt: new Date(),rating: 5 },
        { content: 'Final fantasy VII is a great ps1 game, it was released in 1997 along with crash bandicoot 2 and oddworld abe\'s oddysee, if you\'re final fantasy fan check it out!', userId: 4, gameId: 10, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: 'This is the current apex in RPG games. In fact it is probably one of the best OVERALL games ever created for ANY system.', userId: 1, gameId: 10, createdAt: new Date(), updatedAt: new Date(), rating: 3 },
        { content: 'GOAT! This was a real game-changer for the videogames industry. It had it all!', userId: 4, gameId: 10, createdAt: new Date(), updatedAt: new Date(), rating: 5 },
        { content: 'Truly beautiful game and an experience that is fully appreciated from my point of view. The next Sim City 4 deluxemade by Paradox. Thank you, I am sincerely grateful!', userId: 3, gameId: 11, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: 'WHOA!', userId: 3, gameId: 12, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: 'I\'m so sick of playing through the beginning of this game over and over...', userId: 4, gameId: 13, createdAt: new Date(), updatedAt: new Date(), rating: 1 },
        { content: 'Steep learning curve but totall worth it!', userId: 1, gameId: 14, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: 'Just could NOT get into this game--wayyy too many mods', userId: 2, gameId: 15, createdAt: new Date(), updatedAt: new Date(), rating: 1 },
        { content: 'Such a lovely game with great trains!', userId: 1, gameId: 16, createdAt: new Date(), updatedAt: new Date(), rating: 5 },
        { content: `I ended up uninstalling the game, it is so frustrating and doesn't hold the comparison against the Elder Scrolls franchise or the Assassin Creed one. Have to say, the lore is wonderful, and its open world is huge. Geralt is certainly badass, and there's loads of content (Bestiary, NPCs, Gwent, sidequests etc.) Issue I have is it's LONG. not long as "Ah i'm so glad i am going to have 300 hours of unlimited fun", but long as "I need to go from point A to point B for a quest, by the time i finish the quest I will have spent 30 minutes, whilst the boss fight itself will take 2 minutes at best".`, userId: 1, gameId: 17, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: 'If there is one game I would recommend, it would be this one. Since the beginning of the story in White Orchard to the lush fields of Toussaint found in the DLC, this game has changed me. I would highly recommend this game to those who enjoy playing a game for the story and taking the time to immerse yourself in this world created by CD Project Red.', userId: 1, gameId: 17, createdAt: new Date(), updatedAt: new Date(), rating: 5 },

        //ton of reviews on one game

        { content: 'Rarely is there such a perfect mixture of graphics, sound, and gameplay that even the most cynical players will admit that Zelda 64 is poised to shape the action RPG genre for years to come.', userId: 4, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 5 },
        { content: ' The quest, which inevitably turns into a rescue mission for Princess Zelda, leads players through dark dungeons, picturesque villages, into the heart of a volcano', userId: 3, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: `As soon as you pick up the controls for the first time and start to explore the vast universe that makes up this latest creation from the hands of Shigeru Miyamoto and team, you know you're in for a treat.`, userId: 4, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: 'The gameplay objectives will be instantly familiar to friends of the series.', userId: 3, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 5 },
        { content: `Pressing B will make Link draw his sword. Press it again to slash at your enemy once. Press it three times to swing the blade from the bottom to the top. Press forward and B to slash downward. Turn the 3D Stick in a circle to do a roundhouse slash. And once you found the proper "power-up", press and hold B to charge your sword and make it glow, then unleash a nice helicopter slash that's sure to turn any stinking skeleton into a heap of bones. Similar controls are available for the other items, which can be distributed over any of the lower three C buttons. Press the corresponding key once to draw the weapon or item, then press it again to attack. `, userId: 2, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 2 },
        { content: 'Koji Kondo returns to deliver a whole songbook full of marvelous melodies. ', userId: 3, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 1 },
        { content: ` I had to wait six years for Zelda's jump to a next generation console. The wait was very well worth it.`, userId: 2, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 2 },
        { content: `I don't know how many games I have played in my life where you see some cool scenery`, userId: 3, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: 'The Legend of Zelda: Ocarina of Time should be recommended playing for ever aspiring videogame designer and programmer out there.', userId: 2, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 2 },
        { content: `In my opinion, The Legend of Zelda: Ocarina of Time was (and still is) my favorite game in the series. I would say the mute hero Link isn't the best role model, but it's not like kids are actually going around through private property and stealing their money from pots`, userId: 1, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        { content: 'It has a lot of really fun things in it but also some scary things like the battle against Dead Hand', userId: 2, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 5 },
        { content: 'An amazing game.', userId: 1, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 3 },
        { content: 'When The Legend of Zelda: Ocarina of Time released in 1998, it was widely considered to be the greatest video game ever made.', userId: 4, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 3 },
        { content: 'While some elements are clearly dated, it’s fair to say that the N64’s finest adventure still holds up for the most part.', userId: 4, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 4 },
        ///////////////////////////////

        //one user with many reviews

        { content: 'Great games which have aged well. I only wish it were possible to trade/transfer between games on a single console given the lack of an online trading feature.', userId: 3, gameId: 3, createdAt: new Date(), updatedAt: new Date(), rating: 5 },
        { content: 'Rare is soooooo good', userId: 3, gameId: 2, createdAt: new Date(), updatedAt: new Date(), rating: 2 },
        { content: `It's a bit ridiculous to say that this game is "completely unplayable" because it doesn't have features a newer game doesn't have.`, userId: 3, gameId: 3, createdAt: new Date(), updatedAt: new Date(), rating: 3 },
        { content: 'Pokemon is my life', userId: 3, gameId: 10, createdAt: new Date(), updatedAt: new Date(), rating: 1 },
        { content: 'Rad', userId: 3, gameId: 6, createdAt: new Date(), updatedAt: new Date(), rating: 2 },
        { content: `In the game, players control one of three main characters, Juno, Vela, and Lupus the dog. As the title begins, each character is forced to play through three huge, though entirely unique worlds before finally travelling to Mizar's Palace -- a meeting point. Only`, userId: 3, gameId: 2, createdAt: new Date(), updatedAt: new Date(), rating: 1 },
        { content: 'Love it!!!!', userId: 3, gameId: 3, createdAt: new Date(), updatedAt: new Date(), rating: 1 },
        { content: `
        On the whole everything's aged surprisingly well. The visuals are hugely dated of course, but the mechanics and gameplay are just as engrossing as they were two decades ago. It's true that the various new elements found in later Pokémon titles do allow for more precise and repeatable strategies, but the simplicity of this older system matches the hardware it was originally running on, so we found ourselves very quickly adapting to this more archaic way of playing. One major drawback however is the lack of description for any of the in-game moves, meaning the only real way to find out what they do is through trial and error. This isn't going to be any kind of an issue for the more experienced players, but those without prior Pokémon knowledge will likely find this unnecessarily frustrating.`, userId: 3, gameId: 3, createdAt: new Date(), updatedAt: new Date(), rating: 3 },
        { content: `
        The action is non-stop. JFG features its share of exploration and puzzle-solving, but the game is a shooter at its core. In any given level, there are literally dozens and dozens of drones to kill and each weapon will take them out in a different way.`, userId: 3, gameId: 2, createdAt: new Date(), updatedAt: new Date(), rating: 5 },
        { content: 'This game has a geographically diverse land comprising many biomes. It’s steeped in history and legend, and home to a number of different races and tribes.', userId: 3, gameId: 1, createdAt: new Date(), updatedAt: new Date(), rating: 2  },
        { content: 'Fantastic find!', userId: 3, gameId: 4, createdAt: new Date(), updatedAt: new Date(), rating: 5 },

        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Reviews', null, {truncate: true, cascade: true, restartIdentity: true});
    }
};
