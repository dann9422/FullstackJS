const express = require("express");
const mongoose = require("mongoose");

// crear el servidor
const app = express();

// creando el puerto de arranque del servidor para subir
app.listen(4000, () => {
  console.log("servidor funcionando");
});
