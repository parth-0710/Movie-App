
## Description

The-Movie Hub is a web app that allows users to see the full list of the latest and most popular movies. Users can click on movies to view their specific information like casts, runtime, average rating, and revenue data. Furthermore, users can choose to 'favorite' certain movies so that they can easily oragnize and catalog movies they enjoyed watching. There is also a 'favorite-count' number on each movie page, and everyone can see how many others have favorited the movie. In order to use the favorite features, users must register for the website and sign in.

This web app was built with the MERN stack and [The Movie Database API](https://developers.themoviedb.org/3). In order to clone and use this web app, you need to have your own mongoDB URI information and TMDb API key as part of the code. 

## Functionality


->The ability to search for movies by title or keyword.<br />
->The ability to view detailed information about a selected movie, including the title, release date, synopsis, and ratings.<br />
->The ability to create an account, log in, and save favorite movies.<br />
->The ability to view a list of favorite movies for the logged-in user.<br />
->The ability to remove movies from the list of favorites.<br />


## Installation

I used node.js version 14.16.0 and npm version 6.14.11.

```bash
nvm install 14.16.0
```

```bash
nvm use 14.16.0
```

## Usage

Clone the movie-app-mern repository in your directory.

```bash
git clone https://github.com/parth-0710/Movie-App.git
```

Create "dev.js" file in /server/config directory and insert your mongoDB information.

```bash
module.exports = {
    mongoURI: "<your_mongoDB_URI_goes_here>"
}
```

Go to the root directory and install all the requirements for the server-side.

```bash
npm install
```

Now go to the client directory and install all the requirements for the client-side.

```bash
npm install
```

You also need to have your own TMDb API key to fetch movie data. Create "key.js" file in /client/src directory and insert your API key information.

```bash
module.exports = {
  MOVIE_API: "<your_TMDb_API_key_goes_here>"
}
```

Finally, once you have all the requirements above, go back to the root directory and start the app using the command below.

```bash
npm run dev
```
