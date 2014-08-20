$(function(){

  // Event handlers
  function bindEvents() {
    $('#connect').on('click', connectCallback);
    $('#play').on('click', playCallback);
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

  function playCallback(e) {
    var track = "/tracks/53126096";
    SC.stream(track, playSound);
  };

  function getFavorites() {
    SC.get("/me/favorites", {}, favoritesCallback);
  };

  // SC callbacks
  function playSound(sound){
    sound.play();
  }; 

  function favoritesCallback(res, err) {
    // console.log(res);
    $.ajax({
      type: "POST",
      url: "/favorites",
      data: {'faves': res},
      dataType: 'json'
    }).done(function(response) {
//      console.log(response);
      $('body').append("<img src="+response[0].waveform_url+" />")
    }).fail(function() {
      console.log("ajax fail");
    });
  };

  bindEvents();
});
