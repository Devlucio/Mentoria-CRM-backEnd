//Importar modulo ou pacote
const express = require('express');
const cors = require('cors');
require('dotenv-safe').config();

//instaciar pacote (deixar disponível)
const app = express();
app.use(cors());

//Para ler as informações que vem do body
app.use(express.json());

//Importar modulo local
const db = require('./config/database');
const userRoutes = require('./routes/userRoutes');

//Definir rota principal
app.use("/users", userRoutes);




//Inicializando o modulo do banco de dados
db.connect();





//Exportar modulo
module.exports = app;