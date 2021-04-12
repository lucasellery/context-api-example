import Counter from "./components/Counter";
import Mirror from "./components/Mirror";
import CountProvider from "./context/Count";
import "./styles.css";

export default function App() {
  return (
    <CountProvider>
      <div className="App">
        <Counter />

        <hr />

        <Mirror />
      </div>
    </CountProvider>
  );
}
