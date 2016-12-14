window.onload = function () {
  // Get the color builder form element and the submit button
  // element and save them to variables to work with
  var submitButton = document.querySelector("button[type=submit]");
  var colorFormElement = document.getElementById("colorbuilder");
  // When the submit button is clicked...
  submitButton.addEventListener('click', function(event) {
    // ...call the validateColorRanges function
    validateColorRanges();
  });
  // When the submit event is detected on the color builder form...
  colorFormElement.addEventListener('submit', function(event) {
    // ...prevent its default operation of sending the form
    // since this is not required for the project
    event.preventDefault();
  });
  // The validateColorRanges function checks to ensure all of the color range
  // inputs are within the minimum and maximum number ranges for their
  // corresponding rgba inputs
  function validateColorRanges() {
    // Initialize an empty array to hold the color range elements
    var colorRangeElements = [];
    // Add the different color range elements to the array
    colorRangeElements.push(document.getElementById('red_value'));
    colorRangeElements.push(document.getElementById('green_value'));
    colorRangeElements.push(document.getElementById('blue_value'));
    // Get the alpha range element and save it to a variable
    var alphaElement = document.getElementById('alpha_value');
    // For each color range element in the array...
    for (var i = 0; i < colorRangeElements.length; i++) {
      // If the color range value is less than 0 or greater than 255...
      if (colorRangeElements[i].value < 0 || colorRangeElements[i].value > 255) {
        // ...display a custom message that the current color value is out of
        // range
        colorRangeElements[i].setCustomValidity("Sorry but " +
          colorRangeElements[i].id + " needs to be between 0 and 255.");
        // ...else resent the validity of the current color range input
      } else {
        colorRangeElements[i].setCustomValidity("");
      }
      // If the alpha element range is less than 0 or greater than 1...
      if (alphaElement.value < 0 || alphaElement.value > 1) {
        // ...display a custom message that the alpha value is out of range
        alphaElement.setCustomValidity("The " + alphaElement.id + " needs to" +
          " to be between 0 and 1");
        // ...else reset the validity of the alpha range element
      } else {
        alphaElement.setCustomValidity("");
      }
    }
  }
};
