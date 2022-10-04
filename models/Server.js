const express = require("express");
const cors = require("cors");
require("dotenv/config");
class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //Middlewares
    this.middlewares();

    //Rutas de mi aplicacion

    this.routes();
  }

  middlewares() {
    //Cors
    this.app.use(cors());

    //Parseo y lectura del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios-routes"));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log("Escuchando el puerto ", this.PORT);
    });
  }
}

module.exports = Server;
