'use strict';

$(function(){

  var nextTrackId = null;

  // ----- EVENT HANDLERS

  function bindEvents() {
    $('#connect').on('click', connectCallback);
    // media callback not used (using Plangular for playback)
    // $('.media').on('click', mediaCallback);
  };

  // ----- EVENT CALLBACKS

  function connectCallback(e) {
    // initiate auth popup
    console.log("connecting");
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
    var track = "/tracks/" + nextTrackId;
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
        arrangeButtons();
        processTracks(response);
    }).fail(function() {
      console.log("ajax fail");
    });
  };

  function arrangeButtons() {
    // $('.media').append("<button id='play'>Play</button>")
    $('#connect').remove();
  }

  function processTracks(tracks) {
    nextTrackId = tracks["0"].track_id;
  }

  bindEvents();
});
