import { useState } from "react";
// import ExpandableText from "./components/ExpandableText";
// import Button from "./components/Button";
// import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";
// import { BsFillCalendarFill } from "react-icons/bs";
// import Like from "./components/Like";
// import Navbar from "./components/Navbar";
// import Cart from "./components/Cart";
// import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  // const items = ["China", "Nepal", "Australia"];
  // const [alertVisibility, setAlertVisibility] = useState(false);

  // const [cartItems, setCartItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Manzana", amount: 12, category: "Super-6" },
    { id: 2, description: "Silla", amount: 30, category: "Utilities" },
    { id: 3, description: "Pelicula", amount: 20, category: "Entertainment" },
    { id: 4, description: "Queso", amount: 10, category: "Super-6" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      {/* <ListGroup items={items} heading="Paises" onSelectedItem={() => {}} /> */}

      {/* {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Mi mensaje de alerta
        </Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        Mi boton
      </Button> */}

      {/* <BsFillCalendarFill color="blue" size={40}/> */}

      {/* <Like onClick={() => console.log("click")} /> */}

      {/* <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} /> */}

      {/* <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a hic
        iusto saepe, sequi provident repellendus laborum cum ex voluptatem ipsam
        libero perspiciatis laboriosam explicabo maxime earum tempore expedita
        magni?
      </ExpandableText> */}

      {/* <Form/> */}

      <div className="main">
        <div className="main-left">
          <div className="form">
            <ExpenseForm
              onSubmit={(expense) =>
                setExpenses([
                  ...expenses,
                  { ...expense, id: expenses.length + 1 },
                ])
              }
            />
          </div>
        </div>

        <div className="main-right">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
          <ExpenseList
            expenses={visibleExpenses}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
