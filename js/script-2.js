" use strict ";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};



 let a = prompt('Один из просмотренных фильмов', ''),
     b = prompt('На сколько оцените его', ''),
     c = prompt('Один из просмотренных фильмов', ''),
     d = prompt('На сколько оцените его', '');

     personalMovieDB.movies[a] = b;
     personalMovieDB.movies[c] = d;

 if (4 === 4) {
     console.log('Ok');
 } else{
     console.log('Error');
 }
const num = 50;
// (num === 50) ? console.log('Ok') : console.log('Error');


switch (num) {
    case 49:
        console.log('False');
        break;
    case 100:
        console.log('False');
        break;
    case 50:
        console.log('True');
        break;
    default:
        console.log('Нет верного значения');
        break;
}