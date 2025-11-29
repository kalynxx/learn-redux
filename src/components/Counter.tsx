import type { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, incrementAsync } from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{ margin: ".5rem" }}
          onClick={() => dispatch(incrementAsync(10))}
        >
          increment!
        </button>
        <h2 style={{ margin: "1rem" }}>{count}</h2>
        <button
          style={{ margin: ".5rem" }}
          onClick={() => dispatch(decrement())}
        >
          Decrement!
        </button>
      </div>
    </>
  );
};

export default Counter;
