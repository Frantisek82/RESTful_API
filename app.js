// Cargamos el modulo http en el servidor
const http = require("http");
// Seleccionamos el puerto 8000 para conflictos con el Front, puerto 3000
const PORT = 8000;
// Creamos un servidor http con una función callback que gestione los codigos de respuesta
const server = http
  .createServer(
    // Request contiene los detalles de la solicitud
    // Response enviará la respuesta al cliente
    (req, res) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1>Hello World!!!</h1>");
    }
  )
  .listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
  });
