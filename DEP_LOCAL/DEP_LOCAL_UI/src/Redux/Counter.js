import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  //state.reducer.stateValue
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const { isLoggedIn } = useSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());

    console.log(isLoggedIn);
  };

  return (
    <div style={{ border: "3px solid black", padding: "20px" }}>
      <h2>Count:{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
