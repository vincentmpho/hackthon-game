var income = 0;
var expenses = 0;
var remaining = 0;

function startGame() {
  document.getElementById("welcome-section").style.display = "none";
  document.getElementById("game-section").style.display = "block";
  document.getElementById("remaining").textContent = "$0";
  document.getElementById("income").textContent = "$0";
  document.getElementById("expenses").textContent = "$0";
  document.getElementById("investment").value = "";
  document.getElementById("expense").value = "";
}

function makeInvestment() {
  var investmentAmount = parseFloat(document.getElementById("investment").value);
  if (isNaN(investmentAmount) || investmentAmount < 0) {
    alert("Invalid investment amount!");
    return;
  }
  
  income += investmentAmount;
  remaining += investmentAmount;
  
  updateBudget();
}

function addExpense() {
  var expenseAmount = parseFloat(document.getElementById("expense").value);
  if (isNaN(expenseAmount) || expenseAmount < 0) {
    alert("Invalid expense amount!");
    return;
  }
  
  if (expenseAmount > remaining) {
    alert("Not enough remaining budget!");
    return;
  }
  
  expenses += expenseAmount;
  remaining -= expenseAmount;
  
  updateBudget();
}

function updateBudget() {
  document.getElementById("income").textContent = "$" + income.toFixed(2);
  document.getElementById("expenses").textContent = "$" + expenses.toFixed(2);
  document.getElementById("remaining").textContent = "$" + remaining.toFixed(2);
}

function goBack() {
  var confirmQuit = confirm("Are you sure you want to quit the game?");
  if (confirmQuit) {
    window.close();
  }
}

window.addEventListener("beforeunload", function(event) {
  event.preventDefault();
  event.returnValue = "";
});
 