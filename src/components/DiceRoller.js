import { useSelector, useDispatch } from "react-redux";
import {
  randomRoll,
  rollDice,
  resetDice,
} from "../redux/actions/index";

const DiceRoller = () => {
    const roll = useSelector((state) => state.roll);
    const dispatch = useDispatch();
    return (
    <div>
      <h1>{roll.die1}</h1>
      <button onClick={() => dispatch(rollDice())}>Roll Dice</button>
      <button onClick={() => dispatch(resetDice())}>Reset</button>
    </div>
  );
};

export default DiceRoller;
