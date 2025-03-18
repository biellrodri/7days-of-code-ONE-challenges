function sum(value1, value2){
    return Number(value1) + Number(value2);
}

function subtraction(value1, value2){
    return Number(value1) - Number(value2);
}

function multiplication(value1, value2){
    return Number(value1) * Number(value2);
}

function division(value1, value2){
    return Number(value1) / Number(value2);
}

let value1;
let value2;
let operation = "";

do {  //Using the 'do' while', since the first time we'll always walk in
	
    operation = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);	
    while (operation != "soma" && operation != "subtração" && operation != "multiplicação" && operation != "divisão" && operation != "sair") {  //As long as the text read is different from "soma", "subtração", "mulltiplicação", "divisão" and "sair", show that it was not recognized and ask again
	alert(`Operação não reconhecida!`);
	operation = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
    }
	
    if (operation === "sair"){  //If the text read is "sair", exit the loop and calculator
		break;	
    }
	
    value1 = prompt(`Insira o primeiro valor:`);
    value2 = prompt(`Insira o segundo valor:`);
    switch (operation) {
        case 'soma':
          alert(`O resultado da ${operation} é ${sum(value1, value2)}`);
          break;
        case 'subtração':
            alert(`O resultado da ${operation} é ${subtraction(value1, value2)}`);
            break;
        case 'multiplicação':
            alert(`O resultado da ${operation} é ${multiplication(value1, value2)}`);
            break;
        case 'divisão':
            alert(`O resultado da ${operation} é ${division(value1, value2)}`);
            break;
    }
} while(operation === "soma" || operation === "subtração" || operation === "multiplicação" || operation === "divisão")
alert(`Até a próxima!`);