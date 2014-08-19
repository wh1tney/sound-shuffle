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
        alert('Hello, ' + user.username); 
      });
    });
  }

  function playCallback(e) {
    console.log("Play");
    SC.stream("/tracks/53126096", function(sound){
      sound.play();
    });
  }

  bindEvents();
});
