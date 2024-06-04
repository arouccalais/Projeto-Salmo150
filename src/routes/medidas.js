var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

// Rota para obter as pontuações de um usuário específico
router.get("/:idUsuario", function (req, res) {
    medidaController.buscarPontuacoesUsuario(req, res);
});

module.exports = router;
