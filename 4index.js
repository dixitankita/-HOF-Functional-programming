const expenses = [
    { amount: 1000, category: 'rent' },
    { amount: 200, category: 'groceries' },
    { amount: 150, category: 'utilities' },
    { amount: 300, category: 'entertainment' }
];

const groceryExpenses = expenses.filter(expense => expense.category === 'groceries');

console.log(groceryExpenses);
