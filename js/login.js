var signupButton = document.getElementsByClassName('signin');
    var popupContainer = document.getElementsByClassName('signup');

    signupButton.addEventListener('click', function() {
      popupContainer.style.display = 'block';
    });

    function closePopup() {
      popupContainer.style.display = 'none';}
