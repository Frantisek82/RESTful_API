// Importar los modulos express y mongoose
const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
// Obtener la información el archivo "env"
require("dotenv").config();
// Almacenar la cadena de conexión
const mongoString = process.env.DATABASE_URL;
console.log(mongoString);

// Conectar con la base de datos

/* Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
(Use `node --trace-warnings ...` to show where the warning was created) */
/* mongoose.connect(mongoString, { useNewUrlParser: true }); */

mongoose.connect(mongoString);

// Guardar la conexión
const db = mongoose.connection;
// Verificar si la conexión ha sido exitosa
db.on("error", (error) => {
  console.log(error);
});
// Se ejecuta una unica vez, por eso "once" en lugar de "on", cuando se conecta a base de datos, en lugar de en cada petición
db.once("connected", () => {
  console.log("succesfully connected");
});
// Recibir una notificación cuando la conexión se haya cerrado
db.on("disconnected", () => {
  console.log("mongoose default connection is disconnected");
});

// Importacion de controladores
const users = require("./Controller/userController");

const PORT = 8000;
// Crear la app
const app = express();

// Analizar los archivos JSON
app.use(express.json());

app.use("/users", users);

app.listen(PORT, () => {
  console.log(`server valid al http://127.0.0.1:${PORT}`);
});
