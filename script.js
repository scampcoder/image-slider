let slideIndex = 1; //initialize index of slides
showDivs(slideIndex); //run showDivs(1)

function plusDivs(n) { //where n is the slide number
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  const x = document.getElementByClassName('mySlides');
  if (n > x.length) {slideIndex = 1} //if the number of slides is reached, return to the first
  if (n < 1) {slideIndex = x.length} //if n is less than the lowest slide number, return to the last slide
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = 'block'; //display the imgs as a block
}
