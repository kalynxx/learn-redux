import type { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, incrementAsync } from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <h2>{count}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          style={{ margin: ".5rem" }}
          onClick={() => dispatch(incrementAsync(10))}
        >
          incr
        </button>
        <button onClick={() => dispatch(decrement())}>dec</button>
      </div>
    </>
  );
};

export default Counter;
