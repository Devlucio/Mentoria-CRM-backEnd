const UserSchema = require("../models/userSchema");
const bcrypt = require('bcrypt');

          //Ver todos os usuários
const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
};

          //Adicionar usuário
const createUser = async (req, res) => {
  //Hasherisar senha
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashedPassword
  try {
    //Acessar informações que vem do body da requisição
    const newUser = new UserSchema(req.body);

    //Criar novo usuário
    const savedUser = await newUser.save();

    //Enviar uma res
    res.status(201).send({
      "message": "Usuário criado com sucesso",
      savedUser
    })
  } catch(e) {
    console.error(e)
  }
};

                //Deletar um usuário
const deleteUserById = async (req, res) => {
    const requestedId = req.params.id;
    const filteredUser = users.find(user => user.id == requestedId);

    const index = users.indexOf(filteredUser);

    users.splice(index, 1);

    res.status(200).json([{
        "mensagem": "Usuário deletado com sucesso",
        users
    }]);
};
                //Atualizar o contato do usuário
const updateUserById = async (req, res) => {
    // pegar os dados da requisição
    const requestedId = req.params.id;
    const newEmail = req.body.email;
    const newPhoneNumber = req.body.phoneNumber;

    // achar o item da lista que tem o mesmo id
    const filteredUser = users.find(user => user.id == requestedId);

    // o título do post filtrado seja igual ao título que vem da requisição
    filteredUser.email = newEmail;
    filteredUser.phoneNumber = newPhoneNumber;

    res.status(200).send({
        "mensagem": "Contato atualizado com sucesso",
        filteredUser
    });
};

module.exports = {
  getAll,
  createUser,
  deleteUserById,
  updateUserById
};
