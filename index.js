var len= document.querySelectorAll(".drum").length;
for(var i=0;i<len; i++)
{document.querySelectorAll(".drum")[i].addEventListener("click", function(){
   
    var buttonInnerHTML= this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)

});
}
document.addEventListener("keydown",function(lambda){
   makeSound(lambda.key);
   buttonAnimation(lambda.key);
});

var j=0;
function makeSound(key)
{
    switch (key) {
        case 'w':
            var tom1= new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2= new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
          j++;
          if(j%5==0)
          {
            var tom3= new Audio('sounds/moan2ftw.mp3');
            tom3.play();
          }
          else{
         var tom3= new Audio('sounds/tom-3.mp3');
            tom3.play();
        }
            break;
        case 'd':
          var tom4= new Audio('sounds/Hi-Hat.mp3');
          tom4.play();
          break;

        case 'j':
            var snare= new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash= new Audio('sounds/crash.mp3');
            crash.play();
         break;
        case 'l':
         var bassk= new Audio('sounds/bass1.mp3');
            bassk.play();
            break;
        default:
            console.log(key);
        
    }
}

function buttonAnimation(currentKey)
{
   var activeKey= document.querySelector("." +  currentKey);
   activeKey.classList.add(".pressed");

   setTimeout(function(){
    activeKey.classList.remove("pressed");
   }, 100);

}






// function switchColors(element)  
// {  
//     links=document.getElementsByClassName("drum") ;  
// for (var i = 0 ; i < links.length ; i ++)  
// links.item(i).style.color = ' #DA0463' ;  
// element.style.color='white' ;  
// }  


