import './Header.css';
import { useState } from 'react';

function Header(props) {
    const [chosenSort, setSort] = useState('Bubble Sort')

    return (
        <div>
            <h1 className="title">Sorting Visualizer</h1>
            
            <div className='controls'>
                <h3 className='sorts' onClick={() => setSort('Bubble Sort')}>Bubble Sort</h3>
                <h3 className='sorts' onClick={() => setSort('Insertion Sort')}>Insertion Sort</h3>
                <h3 className='sorts' onClick={() => setSort('Merge Sort')}>Merge Sort</h3>
                <h3 className='sorts' onClick={() => setSort('Quick Sort')}>Quick Sort</h3>
            </div>
            
            <p id='chosen'>{chosenSort}</p>
        </div>
    );
}

export default Header;
