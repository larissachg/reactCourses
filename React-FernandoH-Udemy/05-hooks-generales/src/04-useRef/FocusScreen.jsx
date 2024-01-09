import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector("input").select(); //Si tenemos varios inputs y utilizamos este codigo solo va a seleccionar el texto del 1er input, para que no pase esto se usa useRef
    inputRef.current.select();
    console.log(inputRef);
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set Focus
      </button>
    </>
  );
};
