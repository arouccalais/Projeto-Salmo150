var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n\n function autenticar(): ", email, senha);
    var instrucaoSql = `
        SELECT idUsuario, nome, email 
        FROM usuario 
        WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, telefone, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, telefone, email, senha);
    var instrucaoSql = `
        INSERT INTO usuario (nome, telefone, email, senha) VALUES ('${nome}', '${telefone}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrar(score, fkUsuario) {
    var instrucaoSql = `
        INSERT INTO pontuacao (score, fkUsuario) VALUES (${score}, ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dashboard(nome, telefone, email) {
    var instrucaoSQL = `
    SELECT nome, telefone, email FROM usuario;`
    
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

function ranking(){
    var instrucaoSQL = `
    SELECT 
            usuario.nome AS Nome,
            pontuacao.score
        FROM usuario
            INNER JOIN pontuacao
                ON pontuacao.fkUsuario = usuario.idUsuario
                ORDER BY pontuacao.score desc;
        `

        console.log("Executando a instrução SQL: \n" + instrucaoSQL);
        return database.executar(instrucaoSQL);
}

module.exports = {
    autenticar,
    cadastrar,
    registrar,
    dashboard,
    ranking
};
