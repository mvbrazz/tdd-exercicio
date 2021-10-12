const { test } = require("@jest/globals");
const verificaFuncionario = require('../lib/Atividade3');

describe('Atv3',()=>{
    test('Desenvolvedor com salário maior ou igual a 3000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=3000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="DESENVOLVEDOR";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.cargo).toBe("DESENVOLVEDOR");
        expect(aux.tipo_salario).toBe(0);
    });

    test('Desenvolvedor com salário menor que 3000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=2000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="DESENVOLVEDOR";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.cargo).toBe("DESENVOLVEDOR");
        expect(aux.tipo_salario).toBe(1);
    });

    test('Desenvolvedor com salário liquido correto maior  ou igual a 3000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=3000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="DESENVOLVEDOR";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.salario_liquido).toBe(2400);
    });

    test('Desenvolvedor com salário liquido correto menor que 3000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=2000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="DESENVOLVEDOR";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.salario_liquido).toBe(1800);
    });

    test('DBA com salário maior ou igual a 2000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=2000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="DBA";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.cargo).toBe("DBA");
        expect(aux.tipo_salario).toBe(0);
    });

    test('DBA com salário menor que 2000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=1000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="DBA";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.cargo).toBe("DBA");
        expect(aux.tipo_salario).toBe(1);
    });

    test('DBA com salário liquido correto maior  ou igual a 2000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=2000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="DBA";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.salario_liquido).toBe(1500);
    });

    test('DBA com salário liquido correto menor que 2000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=1000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="DBA";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.salario_liquido).toBe(850);
    });

    test('TESTADOR com salário maior ou igual a 2000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=2000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="TESTADOR";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.cargo).toBe("TESTADOR");
        expect(aux.tipo_salario).toBe(0);
    });

    test('TESTADOR com salário menor que 2000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=1000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="TESTADOR";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.cargo).toBe("TESTADOR");
        expect(aux.tipo_salario).toBe(1);
    });

    test('TESTADOR com salário liquido correto maior  ou igual a 2000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=2000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="TESTADOR";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.salario_liquido).toBe(1500);
    });

    test('TESTADOR com salário liquido correto menor que 2000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=1000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="TESTADOR";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.salario_liquido).toBe(850);
    });    

    test('GERENTE com salário maior ou igual a 5000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=5000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="GERENTE";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.cargo).toBe("GERENTE");
        expect(aux.tipo_salario).toBe(0);
    });

    test('GERENTE com salário menor que 5000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=4000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="GERENTE";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.cargo).toBe("GERENTE");
        expect(aux.tipo_salario).toBe(1);
    });

    test('GERENTE com salário liquido correto maior  ou igual a 5000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=2000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="GERENTE";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.salario_liquido).toBe(1500);
    });

    test('GERENTE com salário liquido correto menor que 5000',()=>{
        let funcionario = {};
        funcionario.nome = "Milena";
        funcionario.e_mail = "funcionario@gmail.com";
        funcionario.salario_base=4000.00;
        funcionario.salario_liquido=0;
        funcionario.tipo_salario=0;
        funcionario.cargo="GERENTE";

        var aux = verificaFuncionario(funcionario);
        
        expect(aux.salario_liquido).toBe(850);
    }); 

})
