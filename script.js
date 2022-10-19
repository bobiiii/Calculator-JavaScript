// function clearOutput() {
//   document.getElementById('output').value = '';
// }

function display(value) {
  document.getElementById('output').innerText += value;
}
// function calculate() {

// }

function calculate() {
  var p = document.getElementById('output').innerText;
  var q = eval(p);
  document.getElementById('output').innerText = q;
}

function clearOutput() {
  document.getElementById('output').innerText = '';
}
