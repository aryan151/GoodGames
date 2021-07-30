# Welcome to GoodGames!

GoodGames is a web application that allows users to view a library of video games and organize a custom selection of games into shelves. Users will also be able to view reviews of each game as well as publish their own. This project is inspired by [Goodreads](https://www.goodreads.com/), a website where individuals can search for books from an existing library, catalog books into custom shelves, and write & discuss reviews.
#### Live link: [goodgames](https://goodgames2021.herokuapp.com/)
***

### Index
[Technologies](#technologies)

[Key Features](#key-features)

[Code Snippets](#code-snippets)

[Wiki Pages](#wiki-pages)

[Future Goals](#future-goals)

***

### Technologies
#### Front End
- JavaScript
- HTML (rendered via Pug)
- CSS styling
- [Favicon.io](https://favicon.io/) for favicon
- Heroku (Hosting)

#### Back End
- Express.js
- PostgreSQL (Database)
- Sequelize.js
- AJAX
- Express Validator Library
- CSURF Library

***

### Key Features
- Bcryptjs library to secure authentication (w/ Demo User) to ensure user security
- CSRUF library used to prevent csrf attacks
- Session cookies used to authorize users when trying to view shelves and read/update their reviews
- Logged in users can create own reviews, store games in shelves and add their own shelves.
- AJAX is used to asynchronously render elements (e.g. adding a review, presenting list of shelves)

***

### Code Snippets
#### Example 1

Retrieve average rating for review using sequelize attribute aggregation:

````javascript
const getAvgRating = async (game) => {
    const reviews = await Review.findAll({
        raw: true,
        where: {
            gameId: game.id
        },
        attributes: [[sequelize.fn('AVG', sequelize.col('rating')), 'avg']]
    })

    return Number(reviews[0].avg).toFixed(2)
}
````

### Wiki Pages
#### [API Documentation](https://github.com/aryan151/GoodGames/wiki/API-Route-Documentation)
#### [Database Schema](https://github.com/aryan151/GoodGames/wiki/Database-Schema)
<img src="https://raw.githubusercontent.com/aryan151/GoodGames/main/planning/visualization/database-schema.png" alt="database-schema.png" height="300">

#### [Feature List](https://github.com/aryan151/GoodGames/wiki/Feature-List)
#### [Frontend Routes](https://github.com/aryan151/GoodGames/wiki/Front-End-Routes)
#### [User Stories](https://github.com/aryan151/GoodGames/wiki/User-Stories)

***

### Future Goals
- Search feature / advanced search
- import a full game library via api
