//the user chooses one of the alternatives of which area he wants to follow
const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
let language = "";

//if the chosen area is Front-End it will display whether he wants to learn React or Vue
if (area === "Front-End"){
    language = prompt("Você quer aprender React ou Vue?");
}
//if not, if the chosen area is Back-End, it will appear to choose between C# or Java
else if (area === "Back-End"){
    language = prompt("Você quer aprender C# ou Java?");
}
//if neither is the case, a message appears to the user informing them that they did not enter a valid option
else {
    alert("Você não inseriu uma área válida!");
}
//this message will appear informing the user to enter 1 to specialize in the area of the chosen option or 2 to become Fullstack
const specialtyOrFullStack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
//if the chosen option is 1, the message will appear: "Keep specializing in {language} to master the area of {area}"
if (specialtyOrFullStack == 1){
    alert(`Continue se especializando em ${language} para dominar a área de ${area}!`);
}
//if the chosen option is 2, the message will appear: "the time has come to learn languages other than {language} if you want to become Fukkstack"
else if (specialtyOrFullStack == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${language} se você quer se tornar Fullstack!`);
}
//if it is neither, a message appears to the user informing them that they have not entered a valid option
else {
    alert("Você não inseriu um valor válido!");
}
//this message will ask if there are any other technologies that the user would like to learn
let message = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
//as long as the response is "OK", the message will continue to appear
while (message === "ok"){
    //when the condition is true, the user will be asked "which" technology he would like to learn
    let newTechnology = prompt("Qual?");
    alert(`${newTechnology} é realmente uma tecnologia muito legal!`)
    message = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}