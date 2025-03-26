import { z } from "zod";
import style from "./ExpenserForm.module.css";
import { IoIosArrowDown } from "react-icons/io";
import categories from "../../categories";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Debe tener al menos 3 letras" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Debe ser un numero" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Debes seleccionar una categoria" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
      className={style["expense-form"]}
    >
      <div className={style["mb-3"]}>
        <label htmlFor="description" className={style["form-label"]}>
          Description
        </label>

        <input
          {...register("description")}
          type="text"
          id="description"
          className={style["form-control"]}
        />
        {errors.description && (
          <p className={style["text-error"]}>{errors.description.message}</p>
        )}
      </div>

      <div className={style["mb-3"]}>
        <label htmlFor="amount" className={style["form-label"]}>
          Price
        </label>

        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          id="amount"
          className={style["form-control"]}
        />
        {errors.amount && (
          <p className={style["text-error"]}>{errors.amount.message}</p>
        )}
      </div>

      <div className={style["mb-3"]}>
        <label htmlFor="category" className={style["form-label"]}>
          Category
        </label>

        <div className={style["select-box"]}>
          <select
            {...register("category")}
            id="category"
            className={style["category"]}
          >
            <option value=""></option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          <div className={style["arrow-box"]}>
            <IoIosArrowDown size={20} color="#a8a8a8" />
          </div>
        </div>

        {errors.category && (
          <p className={style["text-error"]}>{errors.category.message}</p>
        )}

        <button className={`${style["btn"]} ${style["btn-primary"]}`}>
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
