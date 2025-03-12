//reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:
//Rewrite the code below in a way that prints the information correctly, makes sense, and is error-free:

let numberOne = 1;
let stringOne = '1';
let numberThirty = 30;
let stringThirty = '30';
let numberTen = 10;
let stringTen = '10';

//the symbol "not identical to" (!==). Not only does it compare the values on the two sides of the equation,
//but it also checks if they are of different types.
if (numberOne !== stringOne) {
  console.log('The variables numberOne and stringOne have the same value, but different types');
} else {
  console.log('The variables numberOne and stringOne do not have the same value');
}

//the symbol "identical to" (===). Not only does it compare the values on the two sides of the equation,
//but it also checks to see if they are of the same type.
if (numberThirty === stringThirty) {
  console.log('The variables numberThirty and stringThirty have the same value and same type');
} else {
  console.log('The variables numberThirty and stringThirty do not have the same type');
}

if (numberTen !== stringTen) {
  console.log('The variables numberTen and stringTen have the same value, but different types');
} else {
  console.log('The variables numberTen and stringTen do not have the same value');
}