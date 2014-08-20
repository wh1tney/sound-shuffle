$(function(){

  // ----- EVENT HANDLERS

  function bindEvents() {
    $('#connect').on('click', connectCallback);
    $('.media').on('click', mediaCallback);
  };

  // ----- EVENT CALLBACKS

  function connectCallback(e) {
    // initiate auth popup
    SC.connect(function() {
      SC.get('/me', function(user) { 
        // TODO: do something with user.username
        getFavorites();
      });
    });
  };

  function mediaCallback(e) {
    if( e.target && e.target.id == "play" ) {
      playSound();
    }
  };

  // ----- SC CALLBACKS

  function getFavorites() {
    SC.get("/me/favorites", {}, saveFavorites);
  };


  function playSound(){
    var track = "/tracks/53126096";
    SC.stream(track, function(sound) {
      sound.play();
    });
  }; 

  function saveFavorites(res, err) {
    $.ajax({
      type: "POST",
      url: "/favorites",
      data: {'faves': res},
      dataType: 'json'
    }).done(function(response) {
        processTracks(response);
    }).fail(function() {
      console.log("ajax fail");
    });
  };

  function processTracks(tracks) {
    $('.media').append("<button id='play'>Play</button>")
    $('#connect').remove();
  }

  bindEvents();
});
