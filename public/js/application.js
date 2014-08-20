'use strict';

$(function(){

  var nextTrackId = null;

  // ----- EVENT HANDLERS

  function bindEvents() {
    $('#conn').on('click', connectCallback);
  };

  // ----- EVENT CALLBACKS

  function connectCallback(e) {
    if(e.target && e.target.id == "conn") {
      // initiate auth popup
      SC.connect(function() {
        SC.get('/me', function(user) { 
          // TODO: do something with user.username
          getFavorites();
        });
      });
    }
  };

  // ----- SC CALLBACKS

  function getFavorites() {
    SC.get("/me/favorites", {}, saveFavorites);
  };

  function saveFavorites(res, err) {
    $.ajax({
      type: "POST",
      url: "/favorites",
      data: {'faves': res},
      dataType: 'json'
    }).done(function(response) {
        arrangeViews();
        processTracks(response);
    }).fail(function() {
      console.log("ajax fail");
    });
  };

  function arrangeViews() {
    $('#conn').remove();
    $('#player').css('display', 'initial');
  }

  function processTracks(tracks) {
    nextTrackId = tracks["0"].track_id;
  }

  bindEvents();
});
