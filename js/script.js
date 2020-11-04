" use strict ";
// let number = 4.5;

// console.log(number);
// console.log('string' * 9);

// const persone = 'Igor';
// const bool = true;

// let scheme;

// const obj = {
//     name: 'John',
//     age: 25,
//     isMarrid: false
// };

// console.log(obj.name); // Выводит знчение положенное в name (John)
//console.log(obj ['name']); // тоже самое, но лучше через точку

// let arr = ['img.png', 'img2.png', 8, 'apple.jpg', {}, []];

// console.log(arr[1]);

// const result = confirm('Are you here?'); 
// console.log(result); //Есло ок то возвращает true иначе false

// const answer = prompt('Вам есть 18?', ''); //пустые кавычки для ввода ответа
// console.log(answer); //В переменную answer попадает введенный ответ в виде строки

// const answers = [];
// answers[0] = prompt('Your name?', '');
// answers[1] = prompt('Your sername?', '');
// answers[2] = prompt('How old are you?', '');

// document.write(answers);
// console.log(answers);
//  const category = 'toys';

//  console.log('https://mysite.com/' + category + '/');

//  console.log(`https://mysite.com/${category}/`);

// let incr = 10,
//     decr = 10;

//     incr++;
//     decr--;

//     ++incr;
//     --decr;

    // console.log(2*4 === 8);

    // && оператор и
    // || оператор или
    
    // const isChecked = true,
    //       isClose = false;

        //   console.log(isChecked || isClose);
//Если хотябы один true то в итоге будет true

// ! оператор отрицания != не равно

// if (4 === 4) {
//     console.log('Ok');
// } else{
//     console.log('Error');
// }
// let num = 50;
// (num === 50) ? console.log('Ok') : console.log('Error');


// switch (num) {
//    case 49:
//        console.log('False');
//        break;
//    case 100:
//        console.log('False');
//        break;
//    case 50:
//        console.log('True');
//        break;
//    default:
//        console.log('Нет верного значения');
//        break;
// }

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <55);

// for (let i = 1; i < 8; i++){
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);

// }

// Фуркции
// let num =20;
//  function showFirstMessage(text) {

//      console.log(text);
//      let num = 10; //Локальная переменная
//      console.log(num);
//  }
// showFirstMessage("Hello world");
//  console.log(num); 

//  function calc(a,b) {
//      return (a+b); //завершает функцию, после нее в функции ничего
//      //не работает и позволяет использовать ее много раз
//  }

//  console.log(calc(8,7));
//  console.log(calc(10,7));
//  console.log(calc(8,15));

//  function ret() {
//      let num = 50;

//      //какойто код

//      return num;
//  }
//  const anotherNum = ret();
//  console.log(anotherNum);

//  const logger = function () {
//      console.log('Hello world');
//  };
//  logger();

//  const calc = (a, b) => a + b;

//  const calc1 = (a, b) => {
//     return a + b;
//  };

const str = 'teSt';
const arr = [1,2,3,4,5,6,7];

// console.log(str[2]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// let fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));

// const logg = 'Здорова Саня';

// console.log(logg.slice(8, 12));

// console.log(logg.substring(8, 12));

// console.log(logg.substr(8, 5));

// const num = 12.3;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));