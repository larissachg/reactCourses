import { IoIosArrowDown } from "react-icons/io";
import style from "./ExpenseFilter.module.css";
import categories from "../../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className={style["select-box"]}>
      <select
        id={style["parent-selector"]}
        className={style["event-type-select"]}
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">Categories</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}

        {/* <option value="Super-6">Super-6</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option> */}
      </select>

      <div className={style["arrow-box"]}>
        <IoIosArrowDown size={28} color="#a8a8a8"/>
      </div>
    </div>
  );
};

export default ExpenseFilter;
