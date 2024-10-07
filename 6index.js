const expenses = [
    { amount: 150, category: 'rent' },
    { amount: 50, category: 'groceries' },
    { amount: 200, category: 'utilities' },
    { amount: 90, category: 'entertainment' }
];

const categorizeExpense = (amount) => amount > 100 ? "High Expense" : "Low Expense";

const categorizedExpenses = expenses.map(expense => categorizeExpense(expense.amount));

console.log(categorizedExpenses);
