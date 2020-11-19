import './App.css';
import Header from  './components/Header.js'
import Array from  './components/Array.js'
import { useState, useEffect } from 'react';
import ReactGA from "react-ga";

function App() {
  const [ chosenSort, setSort ] = useState('Bubble Sort');
  const [ warning, setWarning ] = useState('red')

  useEffect(() => {
    ReactGA.initialize('UA-183443755-1');
    ReactGA.pageview('/');
  }, [])

  return (
    <div className="App">

      <Header setSort={setSort}/>
      <p id='merge-warning' style={{display: 'block', color: warning, textAlign: 'center'}}>(Warning: Merge Sort is best visualized on large arrays with fast speeds due to its recursive nature)</p>

      <Array chosenSort={chosenSort} warn={setWarning}/>

    </div>
  );
}

export default App;
