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
        console.log(genre.id)
        genreArr.push({
            id: genre.id,
            name:genre.slug,
            createdAt: new Date(),
            updatedAt: new Date()
        })
    })

    console.log(genreArr)
return genreArr

}



module.exports = {genUser ,genGenre}
