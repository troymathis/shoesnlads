import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {
  randomRoll,
  rollDice,
  resetDice,
} from "./redux/actions/index";

function App() {
  const roll = useSelector((state) => state.roll);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{roll}</h1>
      <button onClick={() => dispatch(rollDice(randomRoll()))}>Roll Dice</button>
      <button onClick={() => dispatch(resetDice(randomRoll()))}>Reset</button>
    </div>
  );
}

export default App;
