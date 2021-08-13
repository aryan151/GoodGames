const faker = require('faker')
const { default: fetch } = require('node-fetch')
const {clientId, clientSecret} = require('../config')


const genUser = (genNum) => {
    faker.seed(200)
    let usersArr = []
    for(let i = 0; i < genNum; i++ ){
        let username = i%4 !== 0 ? faker.name.findName(): faker.internet.userName()

        let email = faker.internet.email(username)


        let hashedPassword = '$2y$12$aJTw0.m0Bb/x1cjPHqiy1.lxvNzha3IjhbNzETXDHsd3qd8XBUCRC'

        let private = `${Math.round(Math.random())}`

        let createdAt = new Date()

        let updatedAt = new Date()

        usersArr.push({
            username,
            email,
            hashedPassword,
            private,
            createdAt,
            updatedAt
        })
    }

    return usersArr
}

const fakerTest = (num) => {
    for(let i = 0; i <= num; i++){

        console.log(faker.lorem.paragraph())
    }
}
// fakerTest(23)

const genGenre = async () =>{

    let genreArr = []
    let res = await fetch('https://api.igdb.com/v4/genres' ,{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Client-ID': 'x5wure9pzry24x199i5227zgbr4w93',
            'Authorization': 'Bearer 9jhwr3on4xv75nf7010wlpkcufytyb',
            'Content-Type': 'text/plain'
        },

        body: "fields name,slug; limit 100; sort id desc;"

    })

    let genres = await res.json()

    genres.forEach(genre => {
        genreArr.push({
            id: genre.id,
            name:genre.name,
            createdAt: new Date(),
            updatedAt: new Date()
        })
    })
return genreArr

}

const getGames = async () =>{
    let resBefore2000 = await fetch('https://api.igdb.com/v4/games' ,{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Client-ID': 'x5wure9pzry24x199i5227zgbr4w93',
            'Authorization': 'Bearer 9jhwr3on4xv75nf7010wlpkcufytyb',
            'Content-Type': 'text/plain'
        },

        body: "fields name,first_release_date,storyline, genres,summary,cover.image_id; limit 50; sort total_rating desc; where first_release_date < 978101051 & total_rating_count > 15 & total_rating > 65;"

    })

    let gamesBefore2000 = await resBefore2000.json()

    let res2000To2015 = await fetch('https://api.igdb.com/v4/games' ,{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Client-ID': 'x5wure9pzry24x199i5227zgbr4w93',
            'Authorization': 'Bearer 9jhwr3on4xv75nf7010wlpkcufytyb',
            'Content-Type': 'text/plain'
        },

        body: "fields name,first_release_date,storyline,genres,summary,cover.image_id; limit 50; sort total_rating desc; where first_release_date > 978101051 & first_release_date < 1451412732 & total_rating_count > 15 & total_rating > 65;"

    })
    let games2000To2015 = await res2000To2015.json()

    let resAfter2015 = await fetch('https://api.igdb.com/v4/games' ,{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Client-ID': 'x5wure9pzry24x199i5227zgbr4w93',
            'Authorization': 'Bearer 9jhwr3on4xv75nf7010wlpkcufytyb',
            'Content-Type': 'text/plain'
        },

        body: "fields name,first_release_date,storyline, genres,summary,cover.image_id; limit 50; sort total_rating desc; where first_release_date > 1451412732 & total_rating_count > 15 & total_rating > 65;"

    })

    let gamesAfter2015 = await resAfter2015.json()

    let allGames = [...gamesBefore2000,...games2000To2015,...gamesAfter2015]

    return allGames
}

const genGames = async (games) =>{
    let gamesAndGenres = [[],[]]
    games.forEach(async (game,i) => {
        let title = game.name
        let description = game.summary
        let releaseDate = new Date(game.first_release_date * 1000)
        let imageURL = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`
        let createdAt = new Date();
        let updatedAt = new Date();
        let genres = game.genres
        let gameId = i + 1
            if(genres){
            genres.forEach(genreId => {
                gamesAndGenres[1].push({genreId,gameId,createdAt,updatedAt})
            })}else{
                gamesAndGenres[1].push({genreId: 1,gameId,createdAt,updatedAt})
            }
        gamesAndGenres[0].push({title,description,releaseDate,imageURL,createdAt,updatedAt})
    })
    return gamesAndGenres
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


const getWiki = async (title , gameId) =>{

    await sleep(1000);
    let res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrlimit=1&prop=extracts&exintro&explaintext&exlimit=max&format=json&gsrsearch=${title.trim()}`,{
        headers: {
            'Accept': 'application/json'
        },
    })
    let goodResults  = {}
    let data
    try{
        console.log('try parse')
        data = await res.json()
        console.log(res.url)
        let pages = data.query.pages
        for(let page in pages){

            if(true){
                goodResults[gameId] = (pages[page].extract.split('\n'))
            }
        }
    }catch(e){
     console.log('woops')
     console.log(res.url)
    }

    return goodResults
}

// let dummy = `Super Mario World *
// Suikoden II *
// Super Metroid *
// The Legend of Zelda: A Link to the Past *
// System Shock *
// Ratchet & Clank: Rift Apart *
// Day of the Tentacle *
// Xenogears *
// Zool *
// Toonstruck *
// Sid Meier's Alpha Centauri *
// Fallout 2 *
// System Shock 2 *
// Master of Orion II: Battle at Antares *
// StarCraft: Brood War *
// Might and Magic VI: The Mandate of Heaven *
// Baldur's Gate II: Shadows of Amn *
// Monkey Island 2: LeChuck's Revenge *
// Heroes of Might and Magic III: The Restoration of Erathia *
// Phantasy Star IV: The End of the Millennium *
// Indiana Jones and the Fate of Atlantis *
// Wasteland *
// Dune II: The Building of a Dynasty *
// Heroes of Might and Magic III: Complete *
// Dungeon Master *
// Ridge Racer Type 4 *
// Wing Commander *
// Ultima VII: The Black Gate *
// JoJo's Bizarre Adventure: Heritage for the Future *
// Star Ocean: The Second Story *
// Commander Keen in Goodbye, Galaxy!: The Armageddon Machine *
// Super Mario 64 *
// Sonic the Hedgehog 3 & Knuckles *
// Lemmings 2: The Tribes *
// ToeJam & Earl *
// Mass Effect Trilogy *
// Fate/Grand Order *
// The Cat Lady *
// OFF *
// Bloodborne: Game Of The Year Edition *
// The Last of Us Remastered *
// Pac-Man: Championship Edition DX *
// Persona 4 Golden *
// Metal Gear Solid 3: Subsistence *
// Super Smash Bros. Melee *
// Mario & Luigi: Bowser's Inside Story *
// Batman: Arkham City - Game of the Year Edition *
// Lisa *
// The Witcher 3: Wild Hunt *
// Super Mario Galaxy *
// Mass Effect 2 *
// Metroid Prime *
// Metal Gear Solid: The Legacy Collection *
// World of Warcraft: Wrath of the Lich King *
// Grand Theft Auto V *
// Gran Turismo 3: A-Spec *
// Super Mario Galaxy 2 *
// System Shock: Enhanced Edition *
// Uncharted 2: Among Thieves *
// The Last of Us *
// The Witcher 3: Wild Hunt - Hearts of Stone *
// Star Wars: Knights of the Old Republic *
// Undertale *
// Portal 2 *
// The Legend of Zelda: Ocarina of Time 3D *
// The Elder Scrolls V: Skyrim *
// Portal: Still Alive *
// Persona 5 Royal *
// F1 2020 *
// Guacamelee! Gold Edition *
// Grand Theft Auto: San Andreas *
// `.split('*')
// async function Write(){

//     for(let el of dummy){
//         await getWiki(el)
//     }
// }

// Write()

module.exports = {genUser ,genGenre ,getGames,  genGames, getWiki}
