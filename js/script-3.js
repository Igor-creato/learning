" use strict ";
// let numberOfFilms;

// function start() {
//     numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();

// let personalMovieDB = {
// count: numberOfFilms,
// movies: {},
// actors: {},
// genres: [],
// privat: false
// };



// function rememberMyFilms() {
//     for (let i=0; i<2; i++){
//         let a = prompt('Один из просмотренных фильмов', ''),
//             b = prompt('На сколько оцените его', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50){
//             personalMovieDB.movies[a] = b;
    
//         } else {
    
//             i--;
//         }
//     }
// }
// rememberMyFilms();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10){
//         console.log('Просмотренно мало фильмов');
//     }else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
//         console.log('Классический зритель');
//     }else if(personalMovieDB.count > 30){
//         console.log('Киноман');
//     }else {
//         console.log('Error');
//     }

// }
// detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB.privat === false){
        
//     }
// }
// showMyDB();

// let writeYourGenres = function () {
//   for (let i=1; i<=3; i++){

//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под нмером ${i}`);
//   }  
// };
//  writeYourGenres();
// console.log(personalMovieDB.genres);
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log('Test');
//     }
// };

// console.log(options['colors']['border']);

// delete options.name;
// console.log(options);
// let counter = 0;
// for(let key in options){
//     if (typeof(options[key]) === 'object'){
//         for(let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     }else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
    
// }

// console.log(counter);

// options.makeTest();
// console.log(Object.keys(options).length);
// const {border, bg} = options.colors;
// console.log(border);

 const arr = [2, 13, 26, 8, 10];
 arr.sort(compareNum);
 console.log(arr);

 function compareNum(a, b) {
     return a - b;
 }
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i=0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }

// const str = prompt("", "");
// const product = str.split(", ");
// product.sort();
// console.log(product.join("; "));

// const q = {
//     one: 1,
//     two: 2
// };
// const newObj = {...q};
// newObj.one = 20;
// console.log(newObj);
// console.log(q);