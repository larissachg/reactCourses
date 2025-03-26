import { toast } from "react-toastify";
import { usePatientStore } from "../store";
import { Patient } from "../types";
import { PatientItem } from "./PatientItem";

type PatientDetailsProps = {
  patient: Patient;
};
export const PatientDetails = ({ patient }: PatientDetailsProps) => {
  //const deletePatient = usePatientStore((state) => state.deletePatient);
  //const getPatientById = usePatientStore((state) => state.getPatientById);
  //Es lo mismo que:
  const { deletePatient, getPatientById } = usePatientStore((state) => state);

  const handleClick = () => {
    deletePatient(patient.id);
    toast.error("Paciente Eliminado");
  };

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientItem label="ID" data={patient.id} />
      <PatientItem label="Nombre" data={patient.name} />
      <PatientItem label="Propietario" data={patient.owner} />
      <PatientItem label="Email" data={patient.email} />
      <PatientItem label="Fecha de Alta" data={patient.date.toString()} />
      <PatientItem label="Sintomas" data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleClick}
        >
          Elminar
        </button>
      </div>
    </div>
  );
};
