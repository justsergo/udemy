'use strict';

let numberOfFilms;

start();

const personalMovieDB = {
    count: numberOfFilms,
    actors: {},
    movies: {},
    genres: [],
    privat: false
};

rememberMyFilms();

detectedPersonaLevel();

showMyDb(personalMovieDB.privat);

writeYourGenres();

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На соклько оцените его?', '');
    
        (a != null && b != null && a != '' && a.length < 50) ? personalMovieDB.movies[a] = b : i-- ;   
    }
}

function detectedPersonaLevel () {
    if (personalMovieDB.count < 10) {
        alert('Просмотренно мало фильмов', '');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель', '');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман', '');
    }
}

function showMyDb (hidden) {
    (!hidden) ? console.log(personalMovieDB) : '';
}

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);  
        (genre != '' ) ? personalMovieDB.genres[i-1] = genre : i-- ;   
    }
}

