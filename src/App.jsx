import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  const decrementHandler = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const incrementHandler = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={decrementHandler}
          >
            <span>-</span>
          </a>
          <input
            type="text"
            name="quantity"
            className="quantity__input"
            value={counter}
          />
          <a
            className="quantity__plus"
            title="Increment"
            onClick={incrementHandler}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
