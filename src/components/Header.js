import './Header.css';

function Header(props) {
  return (
    <div>
      <h1 className="nav-bar">Sorting Visualizer</h1>
      
      <div className='controls'>
        <h3 className='sorts' onClick={() => props.chooseSort('Bubble Sort')}>Bubble Sort</h3>
        <h3 className='sorts' onClick={() => props.chooseSort('Insertion Sort')}>Insertion Sort</h3>
        <h3 className='sorts' onClick={() => props.chooseSort('Merge Sort')}>Merge Sort</h3>
        <h3 className='sorts' onClick={() => props.chooseSort('Quick Sort')}>Quick Sort</h3>
      </div>
    </div>
  );
}

export default Header;
