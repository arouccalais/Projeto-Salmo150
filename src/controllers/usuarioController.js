const usuarioModel = require('../models/usuarioModel');

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (!email || !senha) {
        return res.status(400).send("Email ou senha não fornecidos!");
    }

    usuarioModel.autenticar(email, senha)
        .then(resultado => {
            if (resultado.length > 0) {
                return res.json(resultado[0]);
            } else {
                return res.status(401).send("Usuário ou senha inválidos!");
            }
        })
        .catch(erro => {
            console.log("Erro ao autenticar usuário:", erro);
            return res.status(500).send("Erro interno no servidor");
        });
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var telefone = req.body.telefoneServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.cadastrar(nome, telefone, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function registrar(req, res) {
    var score = req.body.scoreServer;
    var fkUsuario = req.body.fkUsuarioServer;

    if (score == undefined) {
        res.status(400).send("Seu score está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua fkUsuario está undefined!");
    } else {
        usuarioModel.registrar(score, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao registrar a pontuação! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    registrar
};
