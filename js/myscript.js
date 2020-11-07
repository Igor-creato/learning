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
          });
      });  
 
      function closeOut() {
        if (slise.classList.contains('my-popup-visible')){
          popUpWrapper.addEventListener('click', function (event) {
            if(event.target === popUpWrapper){
                      slise.classList.remove('my-popup-visible'); 
                      outPopUp.classList.remove('my-popup-style-visible');
                      setTimeout(function () {
                        scrollHidden.classList.remove('lock-body');
                        scrollHidden.style.paddingRight = '';
                      }, timeout);

                    }
          });
        }
      }
////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
      closest.forEach(function(elem) { 
        elem.addEventListener("click", function(e){ 
          slise.classList.remove('my-popup-visible'); 
          outPopUp.classList.remove('my-popup-style-visible');
          // scrollHidden.classList.remove('lock-body');
          // scrollHidden.style.paddingRight = '';

          setTimeout(function () {
            scrollHidden.style.cssText = `
            overflow-y: '';
            padding-right: '';
            `;
          }, timeout);

          e.preventDefault();
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








