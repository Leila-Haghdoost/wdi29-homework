

//
// let catImage = document.getElementById("catWalk");
//        catImage.setAttribute("src", "http://www.anniemation.com/clip_art/images/cat-walk.gif");
//    catImage.setAttribute("left", "0px");







var img = document.getElementsByTagName('img')[0];
img.style.left = 0;
img.style.right = 0;
img.style.height = 0;
var newleft = 0;
var newHeight = 0;
var maxWidth = window.innerWidth -296; //296 is the length od the cat
var newRight =maxWidth;
var animateright;

var  catWalk = function(){
    var maxWidthHalf = maxWidth / 2
// console.log(maxWidthHalf);
    newleft +=  10;
    newHeight += 10;
    img.style.height = newHeight + 'px';
    img.style.left = newleft + 'px';
    if(parseInt(img.style.left) >= maxWidthHalf){
      img.src= "images/explosion3.gif"

       // clearInterval(animate);
        // img.style.webkitTransform ="scaleX(-1)";
        // img.style.msTransform="scaleX(-1)";
        // img.style.transform = "scaleX(-1)";
        // animateright = setInterval(walkBack,100);
        // clearInterval(animate);
    }

};

var walkBack = function() {
 console.log('walking back')
    newleft = newleft-10;
    img.style.left = newleft + 'px';
      if(parseInt(img.style.left) === 0){
        clearInterval(animateright);
        //clearInterval(animate);
      }


}
var animate = setInterval(catWalk,100);
// var animateright = setInterval(walkBack,30);



// window.screen.availWidth
