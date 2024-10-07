const expenses = [
    { amount: 1000, category: 'rent' },
    { amount: 200, category: 'groceries' },
    { amount: 150, category: 'utilities' },
    { amount: 300, category: 'entertainment' }
];

const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

console.log(totalAmount);
