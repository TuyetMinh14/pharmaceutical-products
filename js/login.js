var signupButton = document.querySelector(".sigin");
      const popupContainer = document.querySelector(".signup");
      console.log(popupContainer)
      signupButton.addEventListener("click", function () {
        popupContainer.style.display = "block";
      });

      function closePopup() {
        popupContainer.style.display = "none";
      }