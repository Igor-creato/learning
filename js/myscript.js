const btnRubberBand = document.querySelector('.my-button');
const animista = document.querySelector('.puff');
const filterBox = document.querySelectorAll('.card'),
      courses = document.querySelector('.check-boxes'),
      courseOne = document.querySelectorAll('.check-box'),
      idSet = [],
      dataAtribute =[];

setInterval(function start() {
    btnRubberBand.classList.toggle('animate__rubberBand');
},2500);

setInterval(function puffOut() {
  animista.classList.add('puffOut');
  setTimeout(function puffOutRemove() {
    animista.classList.remove('puffOut');
  },1000);
},5000);

window.onload = function () {

    let outPopUp = document.querySelector('.my-popup-style'),
        slise = document.querySelector('.my-popup'),
        closest = document.querySelectorAll(".closed"),
        openPopUp = document.querySelectorAll('.open-popup'),
        popUpWrapper = document.querySelector('.my-popup-wrapper'),
        scrollHidden = document.querySelector('body'),
        timeout = 500;
    const lockPaddingValue = window.innerWidth - popUpWrapper.offsetWidth + 'px';

      openPopUp.forEach(function (elem) {
        elem.addEventListener('click', function () {
            slise.classList.add('my-popup-visible'); 
            outPopUp.classList.add('my-popup-style-visible');
            scrollHidden.style.cssText = `
            overflow-y: hidden;
            padding-right: ${lockPaddingValue};
            `;
            closeOut();
            escClose();
          });
      });  
 
      function closeOut() {
        if (slise.classList.contains('my-popup-visible')){
          popUpWrapper.addEventListener('click', function (event) {
            if(event.target === popUpWrapper){
              remove();

                    }
          });
        }
      }

      function escClose() {
        if (slise.classList.contains('my-popup-visible')){
          document.addEventListener('keydown', function (event) {
            if (event.code === 'Escape'){
              remove();
            }
          });
        }
      }


      function remove() {
              slise.classList.remove('my-popup-visible'); 
              outPopUp.classList.remove('my-popup-style-visible');
              setTimeout(function () {
                scrollHidden.style.cssText = `
                overflow-y: '';
                padding-right: '';
                `;
              }, timeout);
      }

      closest.forEach(function(elem) { 
        elem.addEventListener("click", function(e){ 
          remove();
          e.preventDefault();
        });
      });
/////////////////////////////////////////////////////////


addData();
};




function addData() {
  courseOne.forEach(function (elem) {
    let checkElem = elem.parentNode.dataset.course;
     if(elem.checked){
      idSet.push(checkElem);
    } 
  });

  filterBox.forEach(function (elem) {
    let cardElem = elem.dataset.course;
    if(idSet.indexOf(cardElem) == -1 && idSet.length != 0){
      elem.classList.add('close');
    }
  });
}
////////////////////////////////////////////////////////////////
courseOne.forEach(function (elem) {
  elem.addEventListener('click', function (event) {
    let ch = event.target;
    let checkElem = ch.parentNode.dataset.course;
    if (ch.checked && idSet.indexOf(checkElem) == -1){
      idSet.push(checkElem);
    }else if (!ch.cheked && idSet.indexOf(checkElem) != -1){
      let index = idSet.indexOf(checkElem);
      idSet.splice(index, 1);
    }
    filterBox.forEach(function (elem) {
      let cardElem = elem.dataset.course;
      if( idSet.indexOf(cardElem) == -1){
        elem.classList.add('close');
      } else {
        elem.classList.remove('close');
      }
    });
    filterBox.forEach(function (elem) {
      if (idSet.length == 0){
        elem.classList.remove('close');
      }
    });
  });
});








