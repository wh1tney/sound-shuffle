$(function(){

  // Event handlers
  function bindEvents() {
    $('#connect').on('click', connectCallback);
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
});
