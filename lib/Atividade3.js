function verificaDesenvolvedor(funcionario) { 

        if(funcionario.cargo === "DESENVOLVEDOR" && funcionario.salario_base >= 3000){
            funcionario.salario_liquido = funcionario.salario_base - (funcionario.salario_base * 0.20);
            funcionario.tipo_salario = 0;
        }      
        else if(funcionario.cargo === "DESENVOLVEDOR" && funcionario.salario_base < 3000){
            funcionario.salario_liquido = funcionario.salario_base - (funcionario.salario_base * 0.10);
            funcionario.tipo_salario = 1;
        }

        return funcionario;
 
}

module.exports = verificaDesenvolvedor;