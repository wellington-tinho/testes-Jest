
const calculadora = require("./calc")

describe("Calculadora",()=>{
    describe('soma',()=>{
        it("retorna 3 quando somado 2 com 1",()=>{
            const num1 = 2 
            const num2 = 1 
            expect(calculadora.soma(num1,num2)).toBe(3);
        });
    });

    describe('subtração',()=>{
        it("retorna 1 quando 2 é subtraido por 1",()=>{
            const num1 = 2 
            const num2 = 1 
            expect(calculadora.subtracao(num1,num2)).toBe(1);
        });
    });

    describe('multiplicação',()=>{
        it("retorna 2 quando multiplicado 2 por 1",()=>{
            const num1 = 2 
            const num2 = 1 
            expect(calculadora.multiplicacao(num1,num2)).toBe(2);
        });
    });

    describe('divisao',()=>{
        it("retorna 2 quando dividido 2 por 1",()=>{
            const num1 = 2 
            const num2 = 1 
            expect(calculadora.divisao(num1,num2)).toBe(2);
        });
    });
    describe('divisao por 0',()=>{
        it("retorna 0 quando dividio 'num1' por 0",()=>{
            const num1 = 2 
            const num2 = 0 
            expect(calculadora.divisao(num1,num2)).toBe(0);
        });
    });

});