" use strict ";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};



//  let a = prompt('Один из просмотренных фильмов', ''),
//      b = prompt('На сколько оцените его', ''),
//      c = prompt('Один из просмотренных фильмов', ''),
//      d = prompt('На сколько оцените его', '');

//      personalMovieDB.movies[a] = b;
//      personalMovieDB.movies[c] = d;

 
// for (let i=0; i<2; i++){
//     let a = prompt('Один из просмотренных фильмов', ''),
//         b = prompt('На сколько оцените его', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;

//     } else {

//         i--;
//     }
// }

let i=0;
// while(i<2){
//         let a = prompt('Один из просмотренных фильмов', ''),
//             b = prompt('На сколько оцените его', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//             i++;
//     } else {

//         i--;
//     }
// }

do{
        let a = prompt('Один из просмотренных фильмов', ''),
            b = prompt('На сколько оцените его', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            i++;
    } else {

        i--;
    }
}
while(i<2);

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
