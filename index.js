var ball = document.getElementById('ball');

// // ball.addEventListener('mousedown',function(){
// //     this.style.backgroundColor = 'green';
// // });

// ball.addEventListener('mousedown',function(){

//     // this.style.position = 'absolute';
//     this.style.zIndex = 100;
//     this.style.backgroundColor = '#000';
//     // document.body.append(ball);
//     function move(x , y){
//         ball.style.left = x - ball.offsetWidth/2 + 'px';
//         console.log(x)
//         ball.style.top = y - ball.offsetHeight/2 + 'px';
//     }
//     function onMouseMove(){
//         move(event.pageX, event.pageY);
//     }

//     this.addEventListener('mousemove',onMouseMove);
//     // this.addEventListener('mov')
//     ball.onmouseup = function() {
//         document.removeEventListener('mousemove',onMouseMove);
//         ball.onmouseup = null;
//     }
// });

ball.addEventListener( 'mousedown',function(){
    event.preventDefault();
    // (1) prepare to moving: make absolute and on top by z-index
    ball.style.position = 'absolute';
    // ball.style.zIndex = 1000;
  
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(ball);
    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    console.log(event.clientX);
    let shiftY = event.clientY - ball.getBoundingClientRect().top;
    console.log(shiftX ,shiftY);
    // centers the ball at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
    }
  
    // move our absolutely positioned ball under the pointer
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (2) move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) drop the ball, remove unneeded handlers
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
  
  });



var moveToTop = ball.style.top = 100;
var moveToLeft = ball.style.left =100 ;
var bodyDOM = document.getElementsByTagName('body');
// var top = 100 ;         // Dont use keyword top it is reserved for window object 

// console.log("hey " ,ball.style.top);
window.addEventListener('keydown',function(){
    // console.log(String.fromCharCode(event.keyCode));
    // console.log(event.which);
    // console.log(ball.getBoundingClientRect());
    var keyPressed = String.fromCharCode(event.which);
    if(ball.getBoundingClientRect().top < 0 && (ball.getBoundingClientRect().bottom > bodyDOM.height) && (ball.getBoundingClientRect().left < 0) && (ball.getBoundingClientRect().right > bodyDOM.right)){
      ball.style.top = 100 ;
      ball.style.left = 100 ;
      return ;
    }
    // Dont you think this all should be and conditioned not or your logic is correct
    if(keyPressed == 'w' || keyPressed == 'W'){
        moveToTop -= 10;
        ball.style.top = moveToTop + 'px'; 
    }else if (keyPressed == 's' || keyPressed == 'S'){
        moveToTop += 10;
        ball.style.top = moveToTop + 'px';
    }else if (keyPressed == 'a' || keyPressed == 'A'){
        moveToLeft -= 10 ;
        ball.style.left = moveToLeft + 'px';
    }else if (keyPressed == 'd' || keyPressed == 'D'){
      moveToLeft += 10 ;
      ball.style.left = moveToLeft + 'px';
    }

});

