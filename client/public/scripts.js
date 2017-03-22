$(document).ready(function() {
  console.log("scripts loaded")

  $('.chips').material_chip();
   $('.chips-initial').material_chip({
     data: [{
       tag: 'Apple',
     }, {
       tag: 'Microsoft',
     }, {
       tag: 'Google',
     }],
   });
   $('.chips-placeholder').material_chip({
     placeholder: 'Enter a tag',
     secondaryPlaceholder: '+Tag',
   });
   $('.chips-autocomplete').material_chip({
     autocompleteData: {
       'Apple': null,
       'Microsoft': null,
       'Google': null
     }
   });



}); //end
