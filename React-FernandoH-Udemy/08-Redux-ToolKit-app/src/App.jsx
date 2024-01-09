import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementBy } from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>count is: {counter}</h1>
          <p>
            <button type="button" onClick={() => dispatch(increment())}>
              Increment
            </button>

            <button type="button" onClick={() => dispatch(decrement())}>
              Decrement
            </button>

            <button type="button" onClick={() => dispatch(incrementBy(2))}>
              Increment by 2
            </button>
          </p>
        </header>
      </div>
    </>
  );
}

export default App;
