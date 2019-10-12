function counter(str) {
  var typed = str.length;
  document.getElementById("charCount").innerHTML = typed + ' characters';
  var tooMany = typed - 3;
  if (typed > 3) {
    alert("You have written " + typed + " characters - those are " + tooMany + " too many! Delete " + tooMany + ".");
  }
}

// function under3(str) {
//   var typed = str.length;
//   var under3 = typed.slice(0,4);
// }
