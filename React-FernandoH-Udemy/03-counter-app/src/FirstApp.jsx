const newMessageText = 'Larissa'; // Texto
const newMessageNum = [1,2,3,4,5]; //Arreglo
const newMessageOp = 2 + 2; // Operacion
const newMessageArr = [1,2,3,4,5]; // Arreglo
const newMessageObj = { //Los Objetos tienen una forma especial para poder ser impresos en el HTML
  message: 'Hola Mundo',
  title: 'Lara'
};
const saludo = (a, b) => { //Funcion
  return a+b;
}

//Impresion en HTML:
export const FirstApp = () => {
  return (
      <>
      <h1> {saludo(50, 50)} </h1> {/* retornando una funcion */}
      <p> {newMessageText} </p>
      <p> {newMessageNum} </p>
      <p> {newMessageOp} </p>
      <p> {newMessageArr} </p>
      <p> {JSON.stringify(newMessageObj)} </p> {/* retornando un objeto */}
      </>
  );
}
  