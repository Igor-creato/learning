let btnRubberBand;
btnRubberBand = document.querySelector('.my-button');


setInterval(function start() {
    
    btnRubberBand.classList.toggle("animate__rubberBand");
 
    
},3000);


window.onload = function () {
    let popUp = document.querySelector('.my-popup'),
        outPopUp = document.querySelector('.my-popup-style'),
        slise = document.querySelector('.my-popup');
        
    document.querySelector('.my-button').onclick = function popUpWindow() {
        popUp.style.cssText =`
        visibility: visible;
        opacity: 1;
        margin-top: 0;
        `;
    };

    const   closest = document.querySelectorAll(".closed");

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










