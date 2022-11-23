const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

        //Definir a rota e o verbo
    //Visualizar todos usuários
 router.get("/all", controller.getAll);
    //Criar usuário
 router.post("/create", controller.createUser);
    //Adicinar Cliente
 //router.post("/createClient", controllers.createUser);
    //Excluir um usuário
router.delete("/delete/:id", controller.deleteUserById);
    //Atualizar email do usuário
router.patch("/updateEmail/:id", controller.updateUserById);

module.exports = router;
 