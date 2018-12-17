console.log('AJAX homeWork');

$(document).ready(function(){
  $('#submitButton').on('click', function(){

    const movieOfInterest = $('#searchMovie').val();

    const xhr = new XMLHttpRequest();
//////////////////////////////////////////////////////////////////////////////////////////



//           each(arr, function(elem){
//   console.log(elem);
// });
//
// Array.prototype.each = function( callback ){
// for (var i = 0; i < array.length; i++) {
//   callback(array[i])
// }
//
// };

//////////////////////////////////////////////////////////////////////////////////////////
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${ movieOfInterest }`);
    xhr.send();
    console.log('Finished request');

    xhr.onload = function(){
      const fact = JSON.parse( xhr.response );

      // var x = xhr.getElementsById("id");
      for (i = 0; i <fact.length; i++) {
        console.log(fact.length[i]);

        const $output = $('<div class="result">').html( fact.title );

        $('#results').append( $output );

      }

          };







  }); //end of 'click'

});//Document ready
