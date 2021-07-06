var checklist = document.getElementById('checklist');
//the ul

var items = checklist.querySelectorAll('li');
//All li 

var inputs = checklist.querySelectorAll('input');
//All inputs

for (var i = 0; i < items.length; i++){
    items[i].addEventListener('click', editItem);
    //when click event happens on an li, function editItem runs
    inputs[i].addEventListener('blur', updateItem);
    //Update item when mouse clicks outside of li
    inputs[i].addEventListener('keypress', itemKeypress);
    //or Update item when enter key (key code 13) is pressed
}
//looping through all items, 

function editItem () {
    this.className = "edit";
    //li's className get changed to 'edit'
    var input = this.querySelector('input');
    //input tag under the clicked li is defined as 'input'

    input.focus();
    input.setSelectionRange(0, input.value.length);
    //Selects all letters within the input (from index 0 to the length of the input value)
}

function updateItem() {
    this.previousElementSibling.innerHTML = this.value;
    //Update Span's innerHTML to this.value (the input from user)

    this.parentNode.className = "";
    //the li exits edit mode
}

function itemKeypress (event) {
    if (event.which == 13){
        updateItem.call(this);
        //calls updateItem and passes the current user input (this), span gets changed to 'this' by updateItem()
    }
}