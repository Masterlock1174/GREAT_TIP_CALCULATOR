// Tip Calculator by Andy

// Event listener for the button
document
  .getElementById("btn")
  .addEventListener("click", initialize_calculation);

// Store code in a function
function initialize_calculation() {
  // Input
  let tip_percentage = +document.getElementById("tip_percentage").value * 0.01;
  let initial_bill = +document.getElementById("initial_bill").value;

  //Process
  let GST = Math.round(100 * (initial_bill * 0.05)) / 100;
  let tip_amount = Math.round(100 * (tip_percentage * initial_bill)) / 100;
  let total_bill = Math.round(100 * (initial_bill + GST + tip_amount)) / 100;

  // Output
  document.getElementById("GST").innerHTML = `$${GST}`;
  document.getElementById("tip_amount").innerHTML = `$${tip_amount}`;
  document.getElementById("total_bill").innerHTML = `$${total_bill}`;
}
