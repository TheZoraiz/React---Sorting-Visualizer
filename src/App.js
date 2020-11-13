import './App.css';
import Header from  './components/Header.js'
import Array from  './components/Array.js'
import { useState } from 'react';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

function App() {
  const forceUpdate = useForceUpdate();
  const [chosenSort, setSort] = useState('Bubble Sort');

  return (
    <div className="App">

      <Header chooseSort={setSort}/>

      <div className='controls' style={{justifyContent: 'center'}}>
        <div id='texts'>
          {/* <p>Number of elements: {rangeVal}</p>
          <input
            id='range'
            type='range'
            min={20} max={250}
            value={rangeVal} 
            onChange={changeVal}
            /> */}
        </div>
      </div>

      <Array />

    </div>
  );
}

export default App;
