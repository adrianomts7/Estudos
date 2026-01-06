// import {addToCart, totalPrice as price, tq} from './shoppingCart.js';

console.log('Importing Module')
// addToCart('Bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('Bread', 5);
// console.log(ShoppingCart.totalPrice);

// Não se mistura importação nomeada com importação padrão.
// import add, {addToCart, totalPrice as price, tq} from './shoppingCart.js';
// console.log(price);

import add from './shoppingCart.js';
add('pizza', 2);