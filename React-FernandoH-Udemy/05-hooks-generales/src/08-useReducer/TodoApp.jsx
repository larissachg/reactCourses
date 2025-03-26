import { useReducer } from "react";
import { todoReducer } from "./todoReduces";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
  },

  {
    id: new Date().getTime() * 3, //Para que tenga un numero diferente al anterior
    description: "Recolectar la piedra del alma",
    done: false,
  },
];

export const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>Todo App</h1>
      <hr /> 

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  );
};
