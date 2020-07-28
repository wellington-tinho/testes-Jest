const calculadora = require("./calc")

describe("Calculadora",()=>{
    it("Teste exemplo",()=>{
        const numero1 = 23
        const numero2 = 7
        expect(calculadora.soma(23,7)).toBe(30);
    });
});