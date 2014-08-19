/*$(function(){

  console.log("application.js loaded");

  // Event listeners
  function bindEvents() {
    $('#connect').on('click', connectCallback);
    console.log("binding events");
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

  bindEvents();
});*/
