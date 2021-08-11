const faker = require('faker')


const genUser = (genNum) => {
    faker.seed(200)
    let usersArr = []
    for(let i = 0; i < genNum; i++ ){
        let username = i%4 !== 0 ? faker.name.findName(): faker.internet.userName()

        let email = faker.internet.email()
        console.log(username)

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

module.exports = {genUser}
