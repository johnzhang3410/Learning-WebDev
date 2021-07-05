//.pop() method pops the last item off the array while .shift() does it to item at index 0, the item removed from array can be passed to a variable
//document.getElementsByTagName('p') gets all elements with a p tag, you can also get specific element with index [] after the ()
//document.querySelector('#/.') always gives the first class/Id/Tags etc. of the document, querySelectorAll selects all elements

var firstPTag = document.getElementsByTagName('p')[0];
firstPTag.innerHTML = "new paragraph <strong>1</strong>";
//Replaces firstPTag's content

var li = document.querySelector('.done');
li.className = "";
//First element with the .done class is now called li, and changed its className to nothing (no line-through applied in css)

li.className = "done also-done";
li.className = li.className + " special";
//li now has className of done, also-done and special

li.className = li.className.replace("done", "replaced-done");
//Replaced className done with replaced-done, (no line-through again)

li.parentElement.childern[0];
//goes up to parentElement which is <ul> and goes down to childen[0] which is list 1

li.classList.add('done');
li.classList.remove('replaced-done');