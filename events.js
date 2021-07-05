var numOne = document.getElementById('num-one');
var numTwo = document.getElementById('num-two');
var addSum = document.getElementById('add-sum');
//Create variables for the different Ids'

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);
//addEventListener("the event", function(){Response when event happens})
//Some events include blur, focus, click, mouseenter, mouseleave, keyup, keydown, mousemove etc.

function add() {
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;

    addSum.innerHTML = "Your sum is: " (one + two);
}





