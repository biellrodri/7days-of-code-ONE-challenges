//to generate a random number from 1 to 10
const guessNumber = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let attempt = "";
let sure = false;
//condition to count 3 attempts, if attempt is equal to guess number a congratulatory message appears and the program ends
for(let accountant = 0; accountant < 3; accountant++){    
    attempt = prompt("Tente adivinhar o número de 0 a 10:");
    if(attempt == guessNumber){
        alert(`Parabéns, você acertou! O número era ${guessNumber}.`);
        sure = true;
        break;
    }
    alert("Errado!");
}
//If none of the three attempts are correct, this message appears saying that unfortunately it did not get it right and reveals what the number was
if(!sure){
    alert(`Infelizmente, você não acertou. O número era ${guessNumber}!`);
}