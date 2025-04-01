const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const router = require('./routes/index.js');
const { sequelize } = require('./db.js');

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(cookieParser());

server.use(router);

const { Factura } = sequelize.models;

sequelize.sync({ force: false })
  .then(() => {
    console.log("✅ Base de datos sincronizada");
  })
  .catch((error) => {
    console.error("❌ Error al sincronizar la base de datos:", error);
  });

module.exports = server;