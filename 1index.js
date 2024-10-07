function calculateTotalPrice(items) {
    let total = 0;
    items.forEach(item => {
        total += item.price;
    });
    return total;
}

// Example usage:
const order = [
    { name: 'Laptop', price: 500 },
    { name: 'Mouse', price: 20 },
    { name: 'Keyboard', price: 30 }
];

const totalPrice = calculateTotalPrice(order);
console.log(`Total Price: $${totalPrice}`);
