require("dotenv").config();
const { join } = require("path")
const express = require('express');
const app = express();
const routes = require("./src/routes/index.js");
const connnection = require("./src/data/index.js");

const PORT = process.env.PORT || 3000;
console.log(process.env.PORT)
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.set('views', __dirname + '/src/views');
app.use(routes);
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`)) 