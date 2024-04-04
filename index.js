const server = require("./src/app.js");
const { conn } = require("./src/db/db.js");
const {
  getDBinfo,
} = require("./src/controllers/productsControllers/getProductsController.js");

const PORT = process.env.PORT;

conn.sync({ force: false })
  .then(async () => {
    await server.listen(PORT);
    await getDBinfo();
    console.log(`Server listening on ${PORT}`);
  })
  .catch((error) => {
    console.error("Error ocurred while starting the server:", error);
    process.exit(1); // Termina el proceso de Node.js con código de error
  });

