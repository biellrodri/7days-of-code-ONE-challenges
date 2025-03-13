```develop a program simulating one of these sites. It should ask the user to answer 3 questions:

- What's your name?
-How old are you?
- What programming language are you studying?

As the questions are asked, the person using the program must answer each one.

At the end, the system will display the message:```

"Hello [name], you are [age] old and already learning [language]!"


alert('Seja bem vindo ao Simulador de Estudo')
let name;
let age;
let language;

name = prompt('Qual seu nome?');
age = prompt('Quantos anos você tem?');
language = prompt('Qual linguagem de programação você está estudando?');

alert(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`)


