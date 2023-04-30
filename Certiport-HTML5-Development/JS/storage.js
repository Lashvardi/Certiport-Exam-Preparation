sessionStorage.setItem('username', 'JohnDoe');
sessionStorage.setItem('cartItems', JSON.stringify(['item1', 'item2', 'item3']));

const username = sessionStorage.getItem('username');
const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
console.log(username); // Output: "JohnDoe"
console.log(cartItems); // Output: ["item1", "item2", "item3"]
