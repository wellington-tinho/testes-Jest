const calculadora = require("./calc")

const prompt = require('prompt-sync')()

function optionSelected(option) {
    
    const num1 = Number(prompt("Digite o numero 1: "))
    const num2 = Number(prompt("Digite o numero 2: "))
    
    if(option == "1"){
        return calculadora.soma(num1,num2)
    }
    if(option == "2"){
        return calculadora.subtracao(num1,num2)
    }
    if(option == "3"){
        return calculadora.multiplicacao(num1,num2)
    }
    if(option == "4"){
        return calculadora.divisao(num1,num2)
    }
}


function options() {
    console.log(`
    1 - somar
    2 - subtrair 
    3 - multiplicar 
    4 - dividir
    0 - sair
    `)
}
let option;
while (option != '0') {
    options();
    option = prompt("Qual a opção? ");

    if(option != '0'){
        const resultado = optionSelected(option);
        console.log(`O resltado da operação foi ${resultado}`);
    }else{
        console.log("Voce escolheu sair");
    }
}


