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
fakerTest(23)

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

class GameSeed {
    constructor(title,description,releaseDate,imageId){
        this.title = title;
        this.description = description;
        this.releaseDate = new Date(releaseDate);
        this.imageURL = `https://images.igdb.com/igdb/image/upload/t_cover_big/${imageId}.jpg`;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
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


module.exports = {genUser ,genGenre ,getGames, GameSeed, genGames}
