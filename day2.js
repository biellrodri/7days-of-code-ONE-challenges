//here 3 variables are declared that receive the name, age and language of study that the user informs
let name = prompt('Qual o seu nome?');
let age = prompt('Quantos anos você tem?');
let language = prompt('Qual linguagem de programação você está estudando?');

//after filling in the values of the variables, a message will appear welcoming the user according to the information he filled in
alert(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`);

//the program will show the user a question about whether he likes to study the language he has entered
let reply = prompt(`Você gosta de estudar ${language}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (reply == 1){
// give positive answer
console.log(' > Muito bom! Continue estudando e você terá muito sucesso.');
}
if (reply == 2){
// give the negative answer
console.log('> Ahh que pena... Já tentou aprender outras linguagens?');
}


