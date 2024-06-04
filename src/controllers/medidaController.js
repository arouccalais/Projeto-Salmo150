var medidaModel = require("../models/medidaModel");

function buscarPontuacoesUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando pontuações do usuário ${idUsuario}`);

    medidaModel.buscarPontuacoesUsuario(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            console.log("Resultado encontrado:", resultado);
            res.status(200).json(resultado);
        } else {
            console.log("Nenhuma pontuação encontrada!");
            res.status(204).send("Nenhuma pontuação encontrada!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as pontuações do usuário.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarPontuacoesUsuario
}
