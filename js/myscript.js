let btnRubberBand;
btnRubberBand = document.querySelector('.my-button');


setInterval(function start() {
    
    btnRubberBand.classList.toggle("animate__rubberBand");
 
},3000);


window.onload = function () {
    let popUpBtn = document.querySelector('.my-button'),
        outPopUp = document.querySelector('.my-popup-style'),
        slise = document.querySelector('.my-popup'),
        closest = document.querySelectorAll(".closed");    
        
        const myPopUp = function(event) {
            if(event.target.classList.contains("my-button")) { 
             slise.style.cssText =`
             visibility: visible;
             opacity: 1;
             margin-top: 0;
            `;
            }
          };
        
        popUpBtn.addEventListener("click", myPopUp);
        
        closest.forEach(function(elem) { // проходим все элементы коллекции
        elem.addEventListener("click", function(){ 
            slise.style.cssText =`
            visibility: hidden;
            opacity: 0;
            margin-top: -650px;
            `;  
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








