


function appendToInputbox(value) {
  document.getElementById('inputbox').value += value;
}

function clearInput() {
  document.getElementById('inputbox').value = '';
}

function clearLast() {
  var input = document.getElementById('inputbox').value;
  document.getElementById('inputbox').value = input.slice(0, -1);
}

function calculate() {
  var input = document.getElementById('inputbox').value;
  try {
      var result = eval(input);
      document.getElementById('inputbox').value = result;
  } catch (error) {
      document.getElementById('inputbox').value = 'Error';
  }
}