var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario as id, apelidoUsuario as apelido, emailUsuario as email, senhaUsuario FROM usuario WHERE emailUsuario = '${email}' AND senhaUsuario = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, apelido, email, senha, celular) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into usuario (nomeCompletoUsuario, apelidoUsuario, senhaUsuario, emailUsuario, telefoneUsuario) VALUES ('${nome}','${apelido}', '${senha}', '${email}', '${celular}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterDadosGrafico(limite_linhas) {

    instrucaoSql = ''

    
 if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select lux_adt as lux,
        momento,
        DATE_FORMAT(momento,'%H:%i:%s') as mome  from tarefaservidorlocal.sensor
    order by idSensor desc limit ${limite_linhas};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    instrucaoSql = ''
        instrucaoSql = `select  
        lux_adt as lux,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico  
                        from tarefaservidorlocal.sensor 
                    order by idSensor desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    obterDadosGrafico,
    buscarMedidasEmTempoReal
};