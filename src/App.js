import './App.css';
import Header from  './components/Header.js'
import Array from  './components/Array.js'

function App() {

  const generateBars = (count) => {
    let bars = [];
    for(let i = 0; i < count; i++) {
        let barHeight = Math.round((Math.random() * 1000) + 50);
        let barWidth = (count > 25 ? ( 1000 / ( count + 5  ) ) : 30);
        bars.push(
            <div 
            className='bars'
            style={{height: barHeight/2, width: barWidth, margin: (count > 250 ? 0 : 1)}}>
                { count < 30 ? <p>{ barHeight }</p> : <p></p>}
            </div>
        )
    }
    return bars;
}

  return (
    <div className="App">
      <Header/>
      <Array generateBars={generateBars}/>
    </div>
  );
}

export default App;
