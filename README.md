# Welcome to GoodGames!

GoodGames is a web application that allows users to view a library of video games and organize a custom selection of games into shelves. Users will also be able to view reviews of each game as well as publish their own. This project is inspired by [Goodreads](https://www.goodreads.com/), a website where individuals can search for books from an existing library, catalog books into custom shelves, and write & discuss reviews.

<p align="center">
  <img src="https://github.com/aryan151/GoodGames/blob/main/planning/images/goodgames_home.png" alt="good games home" height="300">
</p>

#### Live link: [goodgames](https://goodgames2021.herokuapp.com/)
***

### Index
[Development](#development)

[Technologies](#technologies)

[Key Features](#key-features)

[Code Snippets](#code-snippets)

[Wiki Pages](#wiki-pages)

[Future Goals](#future-goals)

***

### Development
* You can read more about the project using the wiki located at: https://github.com/aryan151/GoodGames/wiki
* To start a development environment:
    1. Clone the repository at: https://github.com/aryan151/GoodGames
    2. Run the command "npm install" from the root project directory in your terminal to install dependencies
    5. Run the command "npm start" from the react-app directory to start the express server.
    6. Navigate to the localhost port specified in config/index.js
***
### Technologies
#### Front End

The front end of this app renders HTML on the client using the Pug templating engine to compile the HTML and render data provided by the backend and third-party APIs.

- JavaScript
- HTML (rendered via Pug)
- CSS styling
- [Favicon.io](https://favicon.io/) for favicon
- Heroku (Hosting)

#### Back End

Express is the workhorse of this application, serving up Pug templates to the client as well as querying the PostgreSQL database, providing those data and templates via a RESTful API, and handling user authentication.

- Express.js
- PostgreSQL (Database)
- Sequelize.js
- AJAX
- Express Validator Library
- CSURF Library
- IGDB API
- MediaWiki API

***

### Key Features
- Users can add games to their default or custom shelves

<p align="center">
  <img src="https://github.com/aryan151/GoodGames/blob/main/planning/images/goodgames_addtoshelf.gif" alt="good games add game to shelf" height="300">
</p>

- Users can view their shelves and remove games from their shelves

<p align="center">
  <img src="https://github.com/aryan151/GoodGames/blob/main/planning/images/goodgames_shelves.png" alt="good games shelf page" height="300">
  <img src="https://github.com/aryan151/GoodGames/blob/main/planning/images/goodgames_removefromshelf.png" alt="good games remove game from shelf" height="300">
</p>

- Users can search for games to add to their shelves

<p align="center">
  <img src="https://github.com/aryan151/GoodGames/blob/main/planning/images/goodgames_search.gif" alt="good games search" height="300">
</p>

- Bcryptjs library to secure authentication (w/ Demo User) to ensure user security
- CSRUF library used to prevent csrf attacks
- Session cookies used to authorize users when trying to view shelves and read/update their reviews
- Logged in users can create own reviews, store games in shelves and add their own shelves.
- AJAX is used to asynchronously render elements (e.g. adding a review, presenting list of shelves)
- IGDB API is used to seed games into the database
- MediaWiki API is used to seed reviews by querying wikipedia and scraping snippets realated to each game.

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

#### Example 2

Redirect to previous page after editing a review using express sessions

````javascript
    let {history} = req.session
    let previousUrl = history[2].split('/')
    let lastPart = previousUrl[previousUrl.length - 1]
    let redirectTarget
    if(parseInt(lastPart)){
        redirectTarget = `/games/${lastPart}`
    }else{
        redirectTarget = `/${lastPart}`
    }
    
    //code omitted for brevity
    
    res.redirect(redirectTarget)
    
    
    
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

