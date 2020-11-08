" use strict ";

const filterBox = document.querySelectorAll('.card'),
      courses = document.querySelector('.check-boxes'),
      courseOne = document.querySelectorAll('.check-box'),
      idSet = [];
//////////////////////////////////////////////////////////////////////////////////////////
courseOne.forEach(function (elem) {
    elem.addEventListener('click', function (event) {
        let ch = event.target;
        if (ch.tagName === 'INPUT' && ch.type === 'checkbox'){
            console.log(ch.id, ch.checked);
            let a = ch.id;
            if (idSet.indexOf(a) == -1){
                idSet.push(a); 
                console.log(idSet);
            } else if (idSet.indexOf(a) != -1){
                let index = idSet.indexOf(a);
                idSet.splice(index, 1);
                console.log(idSet);
            }
        }
    });
});


//       function getId() {
//         //   courseOne.forEach(function (e) {
//         //       courseOne.id = idSet;
//         //       console.log(idSet);   
//         //   });
//           for(let i = 0; i < courseOne.length; i++){
//               let a;
//             courseOne.id = a;
//             a = idSet[i];
//             console.log(courseOne.id);
//             }
            
//         }
//       getId();
// console.log(idSet);

//  courseOne.forEach(function (e) {
//      e.addEventListener('click', function (event) {
//          console.log(event.target.id);
//      });
//  });


// courses.addEventListener('click', function (event) {
//      console.log(event.target.id);

//     // if(event.target.id){
//     //     let 
//     // }
// });


//////////////////////////////////////////////////////////////////////
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