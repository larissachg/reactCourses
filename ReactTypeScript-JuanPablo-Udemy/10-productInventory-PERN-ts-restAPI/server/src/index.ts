import server from "./server";
import colors from "colors"; //para darle color a la consola

const port = process.env.PORT || 4000;
server.listen(4000, () => {
  console.log(colors.cyan.bold(`REST API en el puerto ${port}`));
});
