let fruits = [];
let dairy = [];
let sweets = [];
let frozen = [];
let food = "";
let category = "";
let remove = "";

let addMore = "sim";  // initial value as "sim", because the first time will always enter the while
while(addMore != "não"){
    if(fruits.length === 0 && dairy.length === 0 && sweets.length === 0 && frozen.length === 0){
        addMore = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    } else {
        addMore = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'.");
    }
	
    while (addMore != "sim" && addMore != "não" && addMore != "remover") {  //As long as the text read is different from "sim", "não" and "remover", display that it was not recognized and ask again
	alert(`Operação não reconhecida!`);
        addMore = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (addMore === "não"){  //If the text read is "não", exit the while
	break;
    }
	
    if(addMore === "sim"){
        food = prompt("Qual comida você deseja inserir?");
        category = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
        if(category === 'frutas'){
            fruits.push(food);
        } else if (category === 'laticínios'){
            dairy.push(food);
        } else if (category === 'doces'){
            doces.push(food);
        } else if (category === 'congelados'){
            frozen.push(food);
        } else {
            alert("Essa categoria não foi pré-definida.")
        }
    } else if(addMore === "remover"){
	if(fruits.length === 0 && dairy.length === 0 && sweets.length === 0 && frozen.length === 0){  //If the list is empty (bug handling, if the person types "remover" even when only the "sim and "não" options are displayed
		alert(`A lista está vazia!`);
	} else {  //If the list is not empty
		remove = prompt(`Lista de compras:\n  Frutas: ${fruits}\n  Laticínios: ${dairy}\n  Doces: ${sweets}\n  Congelados: ${frozen}\n\nQual produto você deseja remover?`);
		if(fruits.indexOf(remove) != -1){
			fruits.splice(fruits.indexOf(remove), 1);
			alert(`O item ${remove} foi removido com sucesso!`)
		} else if(dairy.indexOf(remove) != -1){
			dairy.splice(dairy.indexOf(remove), 1);
			alert(`O item ${remove} foi removido com sucesso!`)
		} else if (sweets.indexOf(remove != -1)){
			sweets.splice(sweets.indexOf(remove), 1);
			alert(`O item ${remove} foi removido com sucesso!`)
		} else if (frozen.indexOf(remove) != -1){
			frozen.splice(frozen.indexOf(remove), 1);
			alert(`O item ${remove} foi removido com sucesso!`)
		} else {
			alert(`Não foi possível encontrar o item dentro da lista!`)
		}
	}
    }
}
alert(`Lista de compras:\n  Frutas: ${fruits}\n  Laticínios: ${dairy}\n  Doces: ${sweets}\n  Congelados: ${frozen}`);