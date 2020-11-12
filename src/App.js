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
  const [rangeVal, setVal] = useState(25);

  const changeVal = (event) => {
    setVal(event.target.value);
  }

  const generateBars = (count = parseInt(rangeVal)) => {
    let bars = [];
    for(let i = 0; i < count; i++) {
        let barHeight = Math.round((Math.random() * 1000) + 50);
        let barWidth = (count > 25 ? ( 1000 / ( count + 5  ) ) : 30);
        bars.push(
            <div 
              className='bars'
              style={{height: barHeight/2, width: barWidth, margin: (count > 250 ? 0 : 1)}}
            >
              { count < 30 ? <p>{ barHeight }</p> : <p></p>}
            </div>
        )
    }
    return bars;
}

  return (
    <div className="App">

      <Header chooseSort={setSort}/>

      <div className='controls' style={{justifyContent: 'center'}}>
        <p id='chosen'>{`Chosen Sort: ${chosenSort}`}</p>
        <button className='generator' onClick={forceUpdate}>Generate New Array</button>
        <div id='texts'>
  <p>Number of elements: {rangeVal}</p>
          <input
            id='range'
            type='range'
            min={20} max={250}
            value={rangeVal} 
            onChange={changeVal}
            />
        </div>
      </div>

      <Array generateBars={generateBars} amount={rangeVal}/>

    </div>
  );
}

export default App;
