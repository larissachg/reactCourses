import express from "express";
import colors from "colors"; //para darle color a la consola
import swaggerUi from "swagger-ui-express";
import swaggerSpec, { swaggerUiOptions } from "./config/swagger";
import router from "./router";
import db from "./config/db";

//Conectar a la base de datos
export const connectDB = async () => {
  try {
    await db.authenticate();
    db.sync();
    // console.log(colors.magenta("Conexion exitosa a la base de datos"));
  } catch (error) {
    // console.log(error);
    console.log(
      colors.red.bold("Hubo un error al conectar a la base de datos")
    );
  }
};

connectDB();

//Instancia de express
const server = express();

//Leer datos de formularios
server.use(express.json());

server.use("/api/products", router);

//Documentacion
server.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerUiOptions)
);

export default server;
