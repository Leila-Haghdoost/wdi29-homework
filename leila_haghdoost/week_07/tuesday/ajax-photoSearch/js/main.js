



const API_KEY = 'c29a188121ac97b7724a7d9dc1f4bd798db6a4f54f21a1024d7ffd1665e657bb'

$(document).ready(function(){

  $(document).on('click', 'li.result', function(){
    console.log( this );

    $('#resultsContainer').hide();

    $('#detailsContainer span').empty();
    $('#detailsContainer').show();
    const id= $(this).attr('photo_id');

  });


  // $('#detailsContainer').hide();
  // $('#resultsContainer').show();




  const url = `https://api.unsplash.com/photos/?client_id=${API_KEY}`
  console.log(url);
  $.getJSON( url )
  .done()
  .fail(function( err){
    // console.warn(err.statusText);
  });



  //
  const displaySearchResults = function( response ){
    console.log('response:', response);

      response.results.forEach(function( photo ){
      console.log(photo.description);
      const $li = $('<li class="result">').html( photo.description )
      // $li.appendTo('#searchResults')

      $('#searchResults').append($li);
      });
  }; // display SearchResults()

// ajax Query
  const performSearch = function( searchTerm ){
    console.log(`search: ${searchTerm}`);

    const url = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${searchTerm}`;
    // console.log(url);
    $.getJSON(url)
    .done( displaySearchResults ) //this will pass the response data to our displaysearchResutls fn
    .fail(function(err){
      console.warn(err.statusText);
    });

  };//performSearch()


//event handler
  $('#searchForm').on('submit', function( ){
    const query = $('#query').val();
    $('#detailsContainer').hide();
    $('#searchResults').empty(); ///clear the list
    $('#resultsContainer').show();//show your
    performSearch( query );
    console.log(query);
    return false; //stops from submitting
    // ev.preventDefault();
    });







});//# document ready
