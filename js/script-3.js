" use strict ";
let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
// start();

let personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};



function rememberMyFilms() {
    for (let i=0; i<2; i++){
        let a = prompt('Один из просмотренных фильмов', ''),
            b = prompt('На сколько оцените его', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
    
        } else {
    
            i--;
        }
    }
}
// rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('Просмотренно мало фильмов');
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log('Классический зритель');
    }else if(personalMovieDB.count > 30){
        console.log('Киноман');
    }else {
        console.log('Error');
    }
    console.log(personalMovieDB);
}
// detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }
}
showMyDB();

let writeYourGenres = function () {
  for (let i=1; i<=3; i++){

    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под нмером ${i}`);
  }  
};
//  writeYourGenres();
console.log(personalMovieDB.genres);