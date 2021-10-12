function verificaFuncionario(funcionario) { 

        const fun = funcionario;

        if(fun.cargo === "DESENVOLVEDOR" && fun.salario_base >= 3000){
            fun.salario_liquido = fun.salario_base - (fun.salario_base * 0.20);
            fun.tipo_salario = 0;
        }      
        else if(fun.cargo === "DESENVOLVEDOR" && fun.salario_base < 3000){
            fun.salario_liquido = fun.salario_base - (fun.salario_base * 0.10);
            fun.tipo_salario = 1;
        }
        else if(fun.cargo === "DBA" && fun.salario_base >= 2000){
            fun.salario_liquido = fun.salario_base - (fun.salario_base * 0.25);
            fun.tipo_salario = 0;
        }      
        else if(fun.cargo === "DBA" && fun.salario_base < 2000){
            fun.salario_liquido = fun.salario_base - (fun.salario_base * 0.15);
            fun.tipo_salario = 1;
        }
        return fun;
 
}

module.exports = verificaFuncionario;