var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink() {
  var allImages = document.querySelectorAll("img");
  //Gets all elements with a tag of 'img'

  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }
  //Hides all images before each click so only one picture appear on screen at once

  var picId = this.attributes["data-img"].value;
  //'this' is the element that get clicked. This line gets the value of the attribute data-img that is being clicked on (simon-pic, bruce-pic or ben-pic)
  var pic = document.getElementById(picId);
  //Now pic gets the coreesponding Id 

  if (pic.className == "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}
