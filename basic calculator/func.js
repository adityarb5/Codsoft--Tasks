const result = document.getElementById("result");

function displayValue(input) {
  result.value += input;
}

function clearValue() {
  result.value = "";
}

function deleteValue() {
  result.value = result.value.slice(0, -1);
}

function calc() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}
