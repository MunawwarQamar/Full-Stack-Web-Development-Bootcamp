// Print all odd numbers from 1 to 20
for (var i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Print all numbers from 100 to 0 that are multiples of 3
for (var i = 100; i >= 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Print numbers from 4 to -3.5 in decrements of 1.5
for (var i = 4; i >= -3.5; i -= 1.5) {
    console.log(i);
}

// Calculate the sum of all numbers from 1 to 100
var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);


// Calculate the product of all numbers from 1 to 12 
var product = 1;
for (var i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product);
