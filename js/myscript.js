let btnRubberBand;
btnRubberBand = document.querySelector('.my-button');


setInterval(function start() {
    
    btnRubberBand.classList.toggle("animate__rubberBand");
 
    
},2000);

window.onload = function () {
    let popUp,
        slise,
        close;
    document.querySelector('.my-button').onclick = function popUpWindow() {
        popUp = document.querySelector('.my-popup');
        slise = document.querySelector('.my-popup-style');
        // slise.style.cssText = `
        // margin: 0;
        // `
        popUp.style.cssText =`
        visibility: visible;
        opacity: 1;
        margin-top: 0;
        `;
    };
    document.querySelector('.close').onclick = function popUpClose() {
        close = document.querySelector('.my-popup');
        // slise.style.cssText = `
        // margin: -650px;
        // `
        close.style.cssText =`
        visibility: hidden;
        opacity: 0;
        margin-top: -650px;
        `;
    };

};



// popUpWindow();

