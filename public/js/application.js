$(function(){

  // Event handlers
  function bindEvents() {
    $('#connect').on('click', connectCallback);
    $('.media').on('click', mediaCallback);
  };

  // Event callbacks
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

  function getFavorites() {
    SC.get("/me/favorites", {}, favoritesCallback);
  };

  // SC callbacks
  function playSound(){
    var track = "/tracks/53126096";
    SC.stream(track, function(sound) {
      sound.play();
    });
  }; 

  function favoritesCallback(res, err) {
    // console.log(res);
    $.ajax({
      type: "POST",
      url: "/favorites",
      data: {'faves': res},
      dataType: 'json'
    }).done(function(response) {
        $('.media').append("<button id='play'>Play</button>")
    }).fail(function() {
      console.log("ajax fail");
    });
  };

  bindEvents();
});
