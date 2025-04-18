import { useForm } from "react-hook-form";
import { Error } from "./Error";
import { DraftPatient } from "../types";
import { usePatientStore } from "../store";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const PatientForm = () => {
  const { addPatient, updatePatient, activeId, patients } = usePatientStore();
  //Otra forma:
  //const addPatient = usePatientStore(state => state.addPatient);

  // const activeId = usePatientStore((state) => state.activeId);
  // const patients = usePatientStore((state) => state.patients);
  // const updatePatient = usePatientStore((state) => state.updatePatient);

  const {
    register, //register, es un metodo que permite registrar un input o select y aplicar las reglas de validacion de react hook form
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    //formState es el estado del formulario, en que estado se encuentra
  } = useForm<DraftPatient>();

  useEffect(() => {
    if (activeId) {
      const activePatient = patients.find((patient) => patient.id === activeId);

      if (activePatient) {
        setValue("name", activePatient.name);
        setValue("owner", activePatient.owner);
        setValue("email", activePatient.email);
        setValue("date", activePatient.date);
        setValue("symptoms", activePatient.symptoms);
      }
    }
  }, [activeId, patients, setValue]);

  //data es lo que el usuario ingreso
  const registerPatient = (data: DraftPatient) => {
    if (activeId) {
      updatePatient(data);
      toast("Paciente Actualizado", { type: "success" });
    } else {
      addPatient(data);
      toast.success("Paciente Registrado"); //otra forma de poner el success
    }
    reset();
  };

  return (
    <div className="mx-5 md:w-1/2 lg:w-2/5">
      <h2 className="text-3xl font-black text-center">Seguimiento Pacientes</h2>

      <p className="mt-5 mb-10 text-lg text-center">
        Añade Pacientes y {""}
        <span className="font-bold text-indigo-600">Administralos</span>
      </p>

      <form
        className="px-5 py-10 mb-10 bg-white rounded-lg shadow-md"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm font-bold uppercase">
            Paciente
          </label>
          <input
            id="name"
            className="w-full p-3 border border-gray-100"
            type="text"
            placeholder="Nombre del Paciente"
            {...register("name", {
              required: "El nombre del paciente es obligatorio",
            })} //utilizando useForm y la funcion de register quiero que este formulario lo procese react hook form
          />

          {errors.name && <Error>{errors.name?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="owner" className="text-sm font-bold uppercase">
            Propietario
          </label>
          <input
            id="owner"
            className="w-full p-3 border border-gray-100"
            type="text"
            placeholder="Nombre del Propietario"
            {...register("owner", {
              required: "El propietario es obligatorio",
            })}
          />
          {errors.owner && <Error>{errors.owner?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm font-bold uppercase">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3 border border-gray-100"
            type="email"
            placeholder="Email de Registro"
            {...register("email", {
              required: "El Email es Obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email No Válido",
              },
            })}
          />

          {errors.email && <Error>{errors.email?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm font-bold uppercase">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3 border border-gray-100"
            type="date"
            {...register("date", {
              required: "La fecha de alta es obligatoria",
            })}
          />

          {errors.date && <Error>{errors.date?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm font-bold uppercase">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3 border border-gray-100"
            placeholder="Síntomas del paciente"
            {...register("symptoms", {
              required: "Los sintomas son obligatorios",
            })}
          />

          {errors.symptoms && <Error>{errors.symptoms?.message}</Error>}
        </div>

        <input
          type="submit"
          className="w-full p-3 font-bold text-white uppercase transition-colors bg-indigo-600 cursor-pointer hover:bg-indigo-700"
          value="Guardar Paciente"
        />
      </form>
    </div>
  );
};
