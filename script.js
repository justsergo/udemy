'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');



const personalMovieDB = {
    count: numberOfFilms,
    actors: {},
    movies: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотренно мало фильмов', '');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель', '');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман', '');
}

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На соклько оцените его?', '');

    (a != null && b != null && a != '' && a.length < 50) ? personalMovieDB.movies[a] = b : i-- ; 

    
}



console.log(personalMovieDB);