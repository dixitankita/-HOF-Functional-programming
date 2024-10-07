const expenses = [
    { amount: 1000, category: 'rent' },
    { amount: 200, category: 'groceries' },
    { amount: 150, category: 'utilities' },
    { amount: 300, category: 'entertainment' }
];

const taxRate = 0.1; // 10% tax rate

const expensesWithTax = expenses.map(expense => {
    return {
        ...expense,
        tax: expense.amount * taxRate
    };
});

console.log(expensesWithTax);
