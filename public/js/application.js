$(function(){

  // Event handlers
  function bindEvents() {
    $('#connect').on('click', connectCallback);
    $('#play').on('click', playCallback);
    $('#fav').on('click', favesCallback);
  };

  // Event callbacks
  function connectCallback(e) {
    // initiate auth popup
    SC.connect(function() {
      SC.get('/me', function(user) { 
        alert('Hello, ' + user.username); 
      });
    });
  };

  function playCallback(e) {
    var track = "/tracks/53126096";
    SC.stream(track, playSound);
  };

  function favesCallback(e) {
    SC.get("/me/favorites", {}, getFavoriteTracks);
  };

  // SC callbacks
  function playSound(sound){
    sound.play();
  }; 

  function getFavoriteTracks(res, err) {
    // console.log(res);
    $.ajax({
      type: "POST",
      url: "/favorites",
      data: {'faves': res},
      dataType: 'json'
    }).done(function(response) {
      console.log(response);
    }).fail(function() {
      console.log("ajax fail");
    });
  };

  bindEvents();
});
