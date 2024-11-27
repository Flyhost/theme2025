/**
 * Bundle JS File
 *
 * @package     HostGate
 * @author      NiftyTheme
 * @copyright   Copyright (c) NiftyTheme Limited 2017-2023
 * @version     1.0.0
 * @link        https://themeforest.net/user/niftytheme/
**/

// :: snippet to set the gap value

// Get all elements with the attributes "data-gap-x" or "data-gap-y"
let elements = document.querySelectorAll('[data-gap-x], [data-gap-y]');

// Loop through each element
elements.forEach(element => {
  // Get the value of the "data-gap-x" and "data-gap-y" attributes
  let gapXValue = element.getAttribute('data-gap-x');
  let gapYValue = element.getAttribute('data-gap-y');

  // Check if the element has only the "data-gap-x" attribute
  if (gapXValue && !gapYValue) {
    // Set the CSS "gap" property using the value of "data-gap-x"
    element.style.columnGap = gapXValue;
  }

  // Check if the element has only the "data-gap-y" attribute
  if (gapYValue && !gapXValue) {
    // Set the CSS "gap" property using the value of "data-gap-y"
    element.style.rowGap = gapYValue;
  }

  // Check if the element has both the "data-gap-x" and "data-gap-y" attributes
  if (gapXValue && gapYValue) {
    // Set the CSS "gap" property using the values of "data-gap-x" and "data-gap-y"
    element.style.columnGap = gapXValue;
    element.style.rowGap = gapYValue;
  }
});
/* --------------------------------------------------------------------- */
