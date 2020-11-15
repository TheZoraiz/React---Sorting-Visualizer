import './App.css';
import Header from  './components/Header.js'
import Array from  './components/Array.js'
import { useState } from 'react';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

function App() {
  const [ chosenSort, setSort ] = useState('Bubble Sort');
  const [ warning, setWarning ] = useState('red')

  return (
    <div className="App">

      <Header setSort={setSort}/>
      <p id='merge-warning' style={{display: 'block', color: warning, textAlign: 'center'}}>(Warning: Merge Sort is best visualized on large arrays with fast speeds due to its recursive nature)</p>

      <Array chosenSort={chosenSort} warn={setWarning}/>

    </div>
  );
}

export default App;
