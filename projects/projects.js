/* Functions for each operation */

function addition() {
  /* Adds to two numbers */
  const num1 = document.getElementById("first-number").value;
  const num2 = document.getElementById("second-number").value;
  let result = Number(num1) + Number(num2);
  /* If negative then color red */
  if (result < 0) {
    document.getElementById("output").style.color = "red";
  } else {
    document.getElementById("output").style.color = "#868e96";
  }
  document.getElementById("output").innerHTML = String(result);
}

function subtraction() {
  /* Subtracts two numbers */
  const num1 = document.getElementById("first-number").value;
  const num2 = document.getElementById("second-number").value;
  let result = Number(num1) - Number(num2);
  /* If negative then color red */
  if (result < 0) {
    document.getElementById("output").style.color = "red";
  } else {
    document.getElementById("output").style.color = "#868e96";
  }
  document.getElementById("output").innerHTML = String(result);
}

function multiplication() {
  /* Multiples two numbers */
  const num1 = document.getElementById("first-number").value;
  const num2 = document.getElementById("second-number").value;
  let result = Number(num1) * Number(num2);
  /* If negative then color red */
  if (result < 0) {
    document.getElementById("output").style.color = "red";
  } else {
    document.getElementById("output").style.color = "#868e96";
  }
  document.getElementById("output").innerHTML = String(result);
}

function division() {
  /* Divides two numbers */
  const num1 = document.getElementById("first-number").value;
  const num2 = document.getElementById("second-number").value;
  let result = Number(num1) / Number(num2);
  /* If negative then color red */
  if (result < 0) {
    document.getElementById("output").style.color = "red";
  } else {
    document.getElementById("output").style.color = "#868e96";
  }
  document.getElementById("output").innerHTML = String(result);
}

function power() {
  /* Exponents two numbers */
  const num1 = Number(document.getElementById("first-number").value);
  const num2 = Number(document.getElementById("second-number").value);
  let result = 1;
  for (let i = 0; i < num2; i++) {
    result = result * num1;
  }
  /* If negative then color red */
  if (result < 0) {
    document.getElementById("output").style.color = "red";
  } else {
    document.getElementById("output").style.color = "#868e96";
  }
  document.getElementById("output").innerHTML = String(result);
}

function clearall() {
  /* Get rids of the inputs and output */
  document.getElementById("output").style.color = "#868e96";
  document.getElementById("output").innerHTML = "";
  document.getElementById("first-number").value = "";
  document.getElementById("second-number").value = "";
}