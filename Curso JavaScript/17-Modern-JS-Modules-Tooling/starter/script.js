// import {addToCart, totalPrice as price, tq} from './shoppingCart.js';

/*
import shoppingCart from "./shoppingCart";
console.log('Importing Module')
// addToCart('Bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('Bread', 5);
// console.log(ShoppingCart.totalPrice);

// Não se mistura importação nomeada com importação padrão.
// import add, {addToCart, totalPrice as price, tq} from './shoppingCart.js';
// console.log(price);

// import add from './shoppingCart.js';
// add('pizza', 2);

// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);

const getLastPost = async function() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
}

const lastPost = getLastPost();
console.log(lastPost);

// Essa maneira não é mais limpa de se fazer 
// lastPost.then( post => console.log(post) );

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

const ShoppingCart2 = (function() {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart (sipping cost is ${shippingCost})`);
  }

  const orderStock = function(product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  }

  return {
    addToCart, 
    cart,
    totalPrice, 
    totalQuantity 
  }

})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);