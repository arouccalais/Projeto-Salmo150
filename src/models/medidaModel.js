var database = require("../database/config");

function buscarPontuacoesUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT 
            idpontuacao,
            score
        FROM pontuacao
        WHERE fkUsuario = ${idUsuario}
        ORDER BY idpontuacao ASC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPontuacoesUsuario
}
