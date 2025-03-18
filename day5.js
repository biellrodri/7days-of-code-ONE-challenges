let fruits = [];
let dairy = [];
let sweets = [];
let frozen = [];
let food = "";
let category = "";
// initial value as "sim", because the first time will always enter the while
let addMore = "sim";  
while(addMore != "não"){
    addMore = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    while (addMore != "sim" && addMore != "não") {  //As long as the text read is different from "sim" and "não", display that it was not recognized and ask again
	alert(`Operação não reconhecida!`);
        addMore = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (addMore === "não"){  //If the text read is "não", exit the while
        break;
    }
	
    food = prompt("Qual comida você deseja inserir?");
    category = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(category === 'frutas'){
        fruits.push(food);
    } else if (category === 'laticínios'){
        dairy.push(food);
    } else if (category === 'doces'){
        sweets.push(food);
    } else if (category === 'congelados'){
        frozen.push(food);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}
alert(`Lista de compras:\n  Frutas: ${fruits}\n  Laticínios: ${dairy}\n  Doces: ${sweets}\n  Congelados: ${frozen}`);