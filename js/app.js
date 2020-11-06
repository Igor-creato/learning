" use strict ";

let personalMovieDB = {
count: 0,
movies: {},
actors: {},
genres: [],
privat: false,
start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
rememberMyFilms: function() {
        for (let i=0; i<2; i++){
            let a = prompt('Один из просмотренных фильмов', ''),
                b = prompt('На сколько оцените его', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
        
            } else {
        
                i--;
            }
        }
    },
detectPersonalLevel: function() {
        if (personalMovieDB.count < 10){
            console.log('Просмотренно мало фильмов');
        }else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            console.log('Классический зритель');
        }else if(personalMovieDB.count > 30){
            console.log('Киноман');
        }else {
            console.log('Error');
        }
    
    },
showMyDB: function(hidden) {
        if (!hidden){
            
        }
    },
writeYourGenres: function () {
        for (let i=1; i<=3; i++){
          let genre = prompt(`Ваш любимый жанр под нмером ${i}`);

          if (genre === '' || genre == null){
              console.log('No te dannie');
              i--;
          } else {
           personalMovieDB.genres[i - 1] = genre;   
          }
          personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
          });
        }  
      },
toggleVisibleMyDB: function () {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};




