const btnRubberBand = document.querySelector('.my-button');
const animista = document.querySelector('.puff');


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

        

          ///////////////////////////////////////////////////////////////////////////////////
          
          
         
          ///////////////////////////////////////////////////////////////////////////////////////
    let outPopUp = document.querySelector('.my-popup-style'),
        slise = document.querySelector('.my-popup'),
        closest = document.querySelectorAll(".closed"),
        openPopUp = document.querySelectorAll('.open-popup');          

      openPopUp.forEach(function (elem) {
        elem.addEventListener('click', function () {
            // slise.classList.add('my-popup-visible', outPopUp.classList.add('my-popup-style-visible'));
            slise.classList.add('my-popup-visible'); 
            outPopUp.classList.add('my-popup-style-visible');
          });
      });  

        
      closest.forEach(function(elem) { // проходим все элементы коллекции
        elem.addEventListener("click", function(){ 
          slise.classList.remove('my-popup-visible'); 
          outPopUp.classList.remove('my-popup-style-visible');
        });
      });
};




  // document.querySelector('.my-button').onclick = function popUpWindow() {
    //     popUp.style.cssText =`
    //     visibility: visible;
    //     opacity: 1;
    //     margin-top: 0;
    //     `;
    // };








