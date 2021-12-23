import './App.css';
import Input from './components/Input/input';
import Operators from './components/Operators/operators';
import LeftPanel from './components/LeftPanel/leftPanel';
import Equal from './components/Equal/equal';
import { useState } from 'react';

function App() {
  const initialState = '';
  const [result, setResult] = useState(initialState);

  const handleClick = (event) => {
    setResult(result + event.target.textContent);
  };

  const clear = () => {
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(() => {
        const total = eval(result.toString());

        if (isFinite(total)) {
          return total;
        }

        return 'Error';
      });
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <Input result={result}/>
      <div className="buttons">
        <Operators handleClick={handleClick}/>
        <LeftPanel handleClick={handleClick} clear={clear}/>
        <Equal calculate={calculate}/>
      </div>
    </div>
  );
}

export default App;
