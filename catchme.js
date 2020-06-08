var box = document.getElementById('box');
// console.log(box.style.height);
var widthWindow = window.innerWidth;
var heightWindow = window.innerHeight;

box.addEventListener('mouseover',randomBox);

window.addEventListener('resize',function(){
    widthWindow = window.innerWidth;
    heightWindow = window.innerHeight;
});

function randomBox(){
    var coordinates = getCoordinates();
    console.log(coordinates);
    box.style.left = coordinates.x + 'px';
    box.style.top = coordinates.y + 'px';
}


function getCoordinates(){
    var moveLeft = Math.floor(Math.random()*widthWindow - box.offsetWidth);
    var moveTop = Math.floor(Math.random()*heightWindow - box.offsetHeight);
    if (moveLeft < 0){
        moveLeft = 0 ;
    }
    if(moveTop < 0 ){
        moveTop = 0 ;
    }
    return {
        x : moveLeft,
        y : moveTop
    }
}