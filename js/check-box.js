" use strict ";

// const filterBox = document.querySelectorAll('.card'),
//       courses = document.querySelector('.check-boxes'),
//       courseOne = document.querySelectorAll('.check-box'),
//       idSet = [],
//       dataAtribute =[];
//////////////////////////////////////////////////////////////////////////////////////////
// courseOne.forEach(function (elem) {
//     elem.addEventListener('click', function (event) {
//         let ch = event.target;
//         if (ch.tagName === 'INPUT' && ch.type === 'checkbox'){
//             // console.log(ch.id, ch.checked);
//             let a = ch.id;
//             if (idSet.indexOf(a) == -1){
//                 idSet.push(a); 
//                 // console.log(idSet);
//             } else if (idSet.indexOf(a) != -1){
//                 let index = idSet.indexOf(a);
//                 idSet.splice(index, 1);
//                 //  console.log(idSet);
//             }
//         }
//     });
// });

//////////////////////////////////////////////////////////////////////

// function arrayAdd() {
//     courseOne.forEach(function (elem) {
//         elem.addEventListener('click', function (event) {
//             let ch = event.target;
//             if (ch.tagName === 'INPUT' && ch.type === 'checkbox' /*&& ch.checked*/){
//                 // console.log(ch.id, ch.checked);
//                 let b = ch.parentNode.dataset.course;
//                     // dataAtribute.push(b);
//                 if (idSet.indexOf(b) == -1){
//                     idSet.push(b); 
//                      console.log(idSet);
//                 } else if (idSet.indexOf(b) != -1){
//                     let index = idSet.indexOf(b);
//                     idSet.splice(index, 1);
//                      console.log(idSet);
//                 }
//             }
            
//         });
//     });
// }

// document.addEventListener("DOMContentLoaded", () => {
//     courseOne.forEach(function () {
//         if (courseOne.checked){
//            idSet.push(courseOne.parentNode.dataset.course);
//         }
//     });
//     console.log(idSet);
//   });


// arrayAdd();

////////////////////////////////////////////////////////////////////
// function filterElem() {

// }


// const filterBox = document.querySelectorAll('.box');

// document.querySelector('nav').addEventListener('click', (event) => {

//     if (event.target.tagName !== 'LI') return false;
//     let filterClass = event.target.dataset['f'];

//     filterBox.forEach(elem => {
//         elem.classList.remove('hide');
//         if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
//             elem.classList.add('hide');
//         }
//     });

// });