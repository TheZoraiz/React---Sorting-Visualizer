import './App.css';
import Header from  './components/Header.js'
import Array from  './components/Array.js'
import { useState } from 'react';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

function App() {
  const [chosenSort, setSort] = useState('Bubble Sort');

  return (
    <div className="App">

      <Header setSort={setSort}/>
      
      <Array chosenSort={chosenSort}/>

    </div>
  );
}

export default App;
