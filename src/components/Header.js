import './Header.css';
import { useState } from 'react';

function Header(props) {
    const [chosenSort, setSort] = useState('Bubble Sort')

    return (
        <div>
            <h1 className="title">Sorting Algorithm Visualizer</h1>
            <p className='daddy'>By Zoraiz</p>
            
            <div className='controls'>
                <h3 className='sorts' onClick={() => {
                    setSort('Bubble Sort');
                    props.setSort('Bubble Sort');
                }}>Bubble Sort</h3>
                
                <h3 className='sorts' onClick={() => {
                    setSort('Selection Sort');
                    props.setSort('Selection Sort');
                }}>Selection Sort</h3>

                <h3 className='sorts' onClick={() => {
                    setSort('Insertion Sort');
                    props.setSort('Insertion Sort');
                }}>Insertion Sort</h3>

                <h3 className='sorts' onClick={() => {
                    setSort('Merge Sort');
                    props.setSort('Merge Sort');
                }}>Merge Sort</h3>

                {/* <h3 className='sorts' onClick={() => {
                    setSort('Quick Sort');
                    props.setSort('Quick Sort');
                }}>Quick Sort</h3> */}
            </div>
            
            <p id='chosen'>{chosenSort}</p>
        </div>
    );
}

export default Header;
