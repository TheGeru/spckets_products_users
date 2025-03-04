// Index.js
const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const cors = require("cors");
const socket = require("./sockets/socket");
const { conectarMongo } = require("./bd/conexion"); // Corregido el nombre de la función de conexión

conectarMongo(); // Llamada a la función de conexión correcta
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer); // Se crea el servidor de sockets
socket(io); // Se pasa el servidor de sockets a la función socket

app.use(cors());
app.use("/", express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 8000;

httpServer.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
