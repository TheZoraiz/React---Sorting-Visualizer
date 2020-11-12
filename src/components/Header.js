import './Header.css';

function Header() {
  return (
    <div>
      <h1 className="nav-bar">Sorting Visualizer</h1>
      
      <div className='controls'>
        <h3 className='sorts'>Bubble Sort</h3>
        <h3 className='sorts'>Merge Sort</h3>
        <h3 className='sorts'>Quick Sort</h3>
        <h3 className='sorts'>Heap Sort</h3>
      </div>

      <div className='controls'>
        <button>Generate Array</button>
      </div>
    </div>
  );
}

export default Header;
