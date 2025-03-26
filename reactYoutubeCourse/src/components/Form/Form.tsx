//import { FormEvent, /*useState*/ /*useRef*/ } from "react";
import { z } from "zod";
import style from "./Form.module.css";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 letras" }),
  age: z
    .number({ invalid_type_error: "El campo edad debe ser un numero" })
    .min(18, { message: "La edad debe ser al menos 18 anhos" }),
});

// interface FormData {
//   name: string;
//   age: number;
// }
type FormData = z.infer<typeof schema>; //Usando Zod

export const Form = () => {
  //USEREF
  /* const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const person = {name: "", age: 0}
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(nameRef.current !== null) person.name = nameRef.current.value;
    if(ageRef.current !== null) person.age = parseInt(ageRef.current.value);

    console.log(person);
  } */

  //USESTATE
  /* const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(person);
  }; */

  //USEFORM -> conviene cuando el formulario es mas extenso
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style["form"]}>
      <div>
        Form
        <label htmlFor="name" className={style["form-label"]}>
          Nombre
        </label>
        <input
          /*ref={nameRef}*/
          /* onChange={(e) => setPerson({ ...person, name: e.target.value })}
          value={person.name} */
          {...register("name")}
          type="text"
          className={style["form-control"]}
          id="name"
        />
        {errors.name && (
          <p className={style["text-error"]}>{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="age" className={style["form-label"]}>
          Edad
        </label>
        <input
          /*ref={ageRef}*/
          /*onChange={(e) =>
            setPerson({ ...person, age: parseInt(e.target.value) })
          }
          value={person.age} */
          {...register("age", { valueAsNumber: true })}
          type="number"
          id="age"
          className={style["form-control"]}
        />
        {errors.name && (
          <p className={style["text-error"]}>{errors.age?.message}</p>
        )}
      </div>

      <button
        type="submit"
        className={
          !isValid
            ? `${style["btn-primary"]} ${style["btn"]} ${style["btn-disabled"]}`
            : `${style["btn-primary"]} ${style["btn"]}`
        }
        disabled={!isValid}
      >
        Enviar
      </button>
    </form>
  );
};
