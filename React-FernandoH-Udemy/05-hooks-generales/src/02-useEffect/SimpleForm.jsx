import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'larissa@gmail.com'
  });

  const { username, email } = formState;

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
        ...formState,
        [name]: value
    });
  }

  /* useEffect(() => {
    console.log('useEffect Called');
  }, [])
  */
  
  //Si se desea hacer varias cosas se recomienda usar varios efectos especificos por cada accion o efecto secundario:

  //Se va a dispara cada vez que haya un cambio en el formulario
  /* 
  useEffect(() => {
    console.log('formState Called');
  }, [formState]) 
  */

  //Se va a dispara cada vez que haya un cambio en el email
  /* useEffect(() => {
    console.log('email Called');
  }, [email])  
  */

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />

      <input
        type="email"
        className="form-control mt-2"
        name="email"
        placeholder="larissachg@gmail.com"
        value={email}
        onChange={ onInputChange }
      />

      <Message/>
    </>
  );
};
