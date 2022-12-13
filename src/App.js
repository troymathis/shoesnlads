import './App.css';
import DiceRoller from './components/DiceRoller';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Board/>
      <DiceRoller/>
    </div>
  );
}

export default App;
