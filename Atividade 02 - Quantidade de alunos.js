const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

rl.question('Qual quantidade de alunos ', (alunos) => {
   console.log(`E quantidade é: ${alunos}`)

var numero = `${alunos}`;
for (var x = 0; x<=numero; x++){
    if (x == 0){
     console.log("O número " + x + " é zero!");
    }
    else if (x % 2 == 0){
    console.log("O número " + x + " é par!");
    }
    else {
    console.log("O número " + x + " é impar!");
    }
                    
}
});