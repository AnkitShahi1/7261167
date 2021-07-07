
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function validateForm() {
if( document.myForm.fname.value == "" ) {
alert( "Please enter your name!" ); document.myForm.fname.focus() ; return false;
}
if( document.myForm.email.value == "" ) {
alert( "Please enter your email" ); document.myForm.email.focus() ; return false;
}
if( document.myForm.number.value == "" || isNaN( document.myForm.number.value ) ||
document.myForm.number.value.length != 10 ) {
alert( "Please enter your phone number." ); document.myForm.number.focus() ; return false;
}
if( document.myForm.message.value == "" ) {
alert( "Please enter your message." );document.myForm.message.focus() ;
 return false;
}
return( true );
}


