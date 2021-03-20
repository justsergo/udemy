'use strict';

const personalMovieDB = {
    count: 0,
    actors: {},
    movies: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На соклько оцените его?', '');
        
            (a != null && b != null && a != '' && a.length < 50) ? personalMovieDB.movies[a] = b : i-- ;   
        }
    },
    detectedPersonaLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно мало фильмов', '');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель', '');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман', '');
        }
    },
    showMyDb: function (hidden) {
        (!hidden) ? console.log(personalMovieDB) : '';
    },
    toggleVisibleMyDb: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else  {
            personalMovieDB.privat = true;
        } 
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            (genre == '' || genre == null) ? i-- : personalMovieDB.genres[i-1]  
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        })

    }
};




