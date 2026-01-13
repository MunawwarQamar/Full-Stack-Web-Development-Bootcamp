// 1) Factory Function: pizzaOven
function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

// 2) Create pizzas (required)
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

// 3) Create 2 more pizzas (any toppings)
var pizza3 = pizzaOven("thin crust", "bbq", ["cheddar", "mozzarella"], ["chicken", "red onions", "corn"]);
console.log(pizza3);

var pizza4 = pizzaOven("stuffed crust", "alfredo", ["mozzarella", "parmesan"], ["spinach", "mushrooms", "garlic"]);
console.log(pizza4);

// 4) Bonus: randomPizza using Math.random()
function randomPizza() {
  var crustTypes = ["deep dish", "hand tossed", "thin crust"];
  var sauceTypes = ["traditional", "marinara", "bbq"];
  var cheeses = ["mozzarella", "feta", "cheddar"];
  var toppings = ["pepperoni", "mushrooms", "olives", "onions"];

  var randomCrust = crustTypes[Math.floor(Math.random() * crustTypes.length)];
  var randomSauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
  var randomCheese = cheeses[Math.floor(Math.random() * cheeses.length)];
  var randomTopping = toppings[Math.floor(Math.random() * toppings.length)];

  return {
    crustType: randomCrust,
    sauceType: randomSauce,
    cheeses: [randomCheese],
    toppings: [randomTopping]
  };
}

console.log(randomPizza());
