import reduxLogo from "./assets/redux.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <img src={reduxLogo} className="logo" />
      <h1>Learning Redux</h1>
      <div style={{ marginTop: "6rem" }}>
        <Counter />
      </div>
    </>
  );
}

export default App;
