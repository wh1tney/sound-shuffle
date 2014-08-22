$(function(){
  'use strict';

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
        redirectToRadio();
    }).fail(function() {
        console.log("ajax fail");
    });
  };

  function arrangeViews() {
    $('#top').remove();
  }

  function redirectToRadio() {
    window.location.href = "/favorites";
  }

  bindEvents();
});
