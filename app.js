// Income save karna
function saveBudget() {
  let income = document.getElementById('income').value;

  if (income === '') {
    alert('Pehle income likho!');
    return;
  }

  document.getElementById('show-income').textContent = '₹' + income;
  updateRemaining();
}

// Expense add karna
function addExpense() {
  let name = document.getElementById('exp-name').value;
  let amount = document.getElementById('exp-amount').value;

  if (name === '' || amount === '') {
    alert('Expense ka naam aur amount dono likho!');
    return;
  }

  let list = document.getElementById('expense-list');

  if (list.innerHTML.includes('Abhi koi expense nahi')) {
    list.innerHTML = '';
  }

  let item = document.createElement('li');
  item.textContent = name + ' — ₹' + amount;
  list.appendChild(item);

  updateSpent(Number(amount));

  document.getElementById('exp-name').value = '';
  document.getElementById('exp-amount').value = '';
}

// Total spent
let totalSpent = 0;

function updateSpent(amount) {
  totalSpent += amount;
  document.getElementById('show-spent').textContent = '₹' + totalSpent;
  updateRemaining();
}

// Remaining calculate karna
function updateRemaining() {
  let income = document.getElementById('show-income').textContent.replace('₹', '');
  let remaining = Number(income) - totalSpent;
  document.getElementById('show-remaining').textContent = '₹' + remaining;
}