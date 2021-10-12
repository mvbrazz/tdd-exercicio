const { test } = require("@jest/globals");

describe('Atv3',()=>{
    test('Desenvolvedor com salário maior que 3000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=3000.00;
        funcionario.cargo="DESENVOLVEDOR";

        var aux = verificaDesenvolvedor(funcionario);
        
        expect(aux.cargo).toBe("DESENVOLVEDOR");
        expect(aux.TipoSalario).toBe(0);
    });

    test('Desenvolvedor com salário menor que 3000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=2000.00;
        funcionario.cargo="DESENVOLVEDOR";

        var aux = verificaDesenvolvedor(funcionario);
        
        expect(aux.cargo).toBe("DESENVOLVEDOR");
        expect(aux.TipoSalario).toBe(1);
    });

    test('Desenvolvedor com salário liquido correto maior que 3000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=3000.00;
        funcionario.cargo="DESENVOLVEDOR";

        var aux = verificaDesenvolvedor(funcionario);
        
        expect(aux.SalarioLiquido).toBe(2400);
    });

    test('Desenvolvedor com salário liquido correto menor que 3000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=2000.00;
        funcionario.cargo="DESENVOLVEDOR";

        var aux = verificaDesenvolvedor(funcionario);
        
        expect(aux.SalarioLiquido).toBe(1800);
    });

})
