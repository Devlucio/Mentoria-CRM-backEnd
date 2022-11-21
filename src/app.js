//Importar modulo ou pacote
const express = require('express');
const cors = require('cors');
require('dotenv-safe').config();

//instaciar pacote (deixar disponível)
const app = express();
app.use(cors());

//Para ler as informações que vem do body
app.use(express.json());

//Exportar modulo
module.exports = app;