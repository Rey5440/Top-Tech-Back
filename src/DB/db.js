const mongoose = require("mongoose");

const { MONGO_URL } = process.env; //

mongoose.connect(MONGO_URL); // establece conexion cn el mi propio pc y en el puerto 27017
const db = mongoose.connection; // guarda la conexion en la const db para exportarla

db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", () => {
  console.log("Conexión exitosa a MongoDB");
});
// .on y .once son manejadores de evento, funcionan diferente al .then de siempre

module.exports = db;
