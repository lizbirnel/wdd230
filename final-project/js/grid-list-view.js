// List View
function listView() {
  // Get the elements with class="column"
  var elements = document.getElementsByClassName("cards");

  // Declare a loop variable
  var i;
  for (i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
}

// Grid View
function gridView() {
  // Get the elements with class="column"
  var elements = document.getElementsByClassName("cards");

  // Declare a loop variable
  var i;
  for (i = 0; i < elements.length; i++) {
    elements[i].style.display = "grid";
  }
}
