import './Array.css';
import React, { useState } from 'react';


// Used for mergeSort()'s logic
let outsider = [];

function Array(props) {
    const [ rangeVal, setVal ] = useState(20);
    const [ speed, setSpeed ] = useState(500);
    const [ clickable, setClickable ] = useState(true);

    let sortHistory = [];
    let interval = undefined;

    if(props.chosenSort == 'Merge Sort')
        props.warn('red');
    else
        props.warn('black');

    const generateArray = (count) => {
        count = parseInt(count);
        let bars = [];
        for(let i = 0; i < count; i++) {
            let barHeight = Math.round((Math.random() * 850) + 50);
            let barWidth = (count > 25 ? ( 1000 / ( count + 5  ) ) : 30);
            bars.push(
                <div 
                  className='bars'
                  style={{height: barHeight/2, width: barWidth, margin: 1}}
                >
                  { count < 40 ? <p>{ barHeight }</p> : <p></p>}
                </div>
            )
        }
        return bars;
    }
    const [ array, setArray ] = useState(generateArray(rangeVal));


    const bubbleSort = () => {
        let swapp;
        let n = array.length - 1;
        let x = [...array];
        swapp = true;

        while (swapp) {
            swapp = false;
            for (let i = 0; i < n; i++)
            {
                let a = x[i].props.style.height;
                let b = x[i+1].props.style.height;

                // Highlight the iterators
                x[i] = changeElementColor(x[i], 'green');
                x[i+1] = changeElementColor(x[i+1], 'green');

                // Swapping condition for BUBBLE SORT
                if (a > b) {
                    x[i] = changeElementColor(x[i], 'red');
                    x[i+1] = changeElementColor(x[i+1], 'red');

                    sortHistory.push([...x]);
                    let temp = x[i];
                    x[i] = x[i+1];
                    x[i+1] = temp;
                    swapp = true;     

                    x[i] = changeElementColor(x[i], 'green');
                    x[i+1] = changeElementColor(x[i+1], 'green');
                    sortHistory.push([...x]);
                } else {
                    sortHistory.push([...x]);
                }

                x[i] = changeElementColor(x[i], 'turquoise');
                x[i+1] = changeElementColor(x[i+1], 'turquoise');

                if(!swapp)
                    sortHistory.push([...x]);

            }
            n--;
        }        

        console.log(sortHistory);
    }

    const insertionSort = () => {
        let x = [...array];
        let n = x.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            x[i] = changeElementColor(x[i], 'red');
            let current = x[i];
            sortHistory.push([...x]);
            // The last element of our sorted subarray
            let j = i-1; 
            
            while ((j > -1) && (current.props.style.height < x[j].props.style.height)) {
                x[j+1] = x[j];
                x[j+1] = changeElementColor(x[j+1], 'red');
                sortHistory.push([...x]);

                x[j+1] = changeElementColor(x[j+1], 'turquoise');
                sortHistory.push([...x]);
                j--;
            }
            x[j+1] = current;
            x[j+1] = changeElementColor(x[j+1], 'green');
            sortHistory.push([...x]);
            x[j+1] = changeElementColor(x[j+1], 'turquoise');
            sortHistory.push([...x]);
        }
    }


    const mergeSort = (arr, passedI, passedJ) => {
        if(arr.length == 1) return arr;
    
        let mid = Math.floor(arr.length / 2);
        let passedMid = Math.floor((passedI + passedJ) / 2);
    
        let firstHalf = mergeSort(arr.slice(0, mid), passedI, passedMid);
        let secondHalf = mergeSort(arr.slice(mid), passedMid, passedJ);
    
        // The Merge Part
    
        let sorted = [];
    
        let i = 0, j = 0;
    
        let tempCount = 0;
        while(i < firstHalf.length && j < secondHalf.length) {
            firstHalf[i] = changeElementColor(firstHalf[i], 'green');
            secondHalf[j] = changeElementColor(secondHalf[j], 'red');
        

            if(firstHalf[i].props.style.height < secondHalf[j].props.style.height) {
                
                sorted.push(firstHalf[i++]);
                outsider[passedI + (tempCount++)] = firstHalf[i - 1];
                sortHistory.push([...outsider]);

                firstHalf[i - 1] = changeElementColor(firstHalf[i - 1], 'turquoise');
                secondHalf[j] = changeElementColor(secondHalf[j], 'turquoise');

                outsider[passedI + (tempCount - 1)] = firstHalf[i - 1];
                
                sortHistory.push([...outsider]);
                
                
            } else {

                sorted.push(secondHalf[j++]);
                outsider[passedI + (tempCount++)] = secondHalf[j - 1];
                sortHistory.push([...outsider]);

                firstHalf[i] = changeElementColor(firstHalf[i], 'turquoise');
                secondHalf[j - 1] = changeElementColor(secondHalf[j - 1], 'turquoise');

                outsider[passedI + (tempCount - 1)] = secondHalf[j - 1];

                sortHistory.push([...outsider]);

            }
        }
        while(i < firstHalf.length) {

            sorted.push(firstHalf[i++]);
            firstHalf[i - 1] = changeElementColor(firstHalf[i - 1], 'green');
            outsider[passedI + (tempCount++)] = firstHalf[i - 1];
            sortHistory.push([...outsider]);

            firstHalf[i - 1] = changeElementColor(firstHalf[i - 1], 'turquoise');
            outsider[passedI + (tempCount - 1)] = firstHalf[i - 1];
            sortHistory.push([...outsider]);
        };
        while(j < secondHalf.length) {

            sorted.push(secondHalf[j++]);
            secondHalf[j - 1] = changeElementColor(secondHalf[j - 1], 'red');
            outsider[passedI + (tempCount++)] = secondHalf[j - 1];
            sortHistory.push([...outsider]);
            
            secondHalf[j - 1] = changeElementColor(secondHalf[j - 1], 'turquoise');
            outsider[passedI + (tempCount - 1)] = secondHalf[j - 1];
            sortHistory.push([...outsider]);
        };
        return sorted;
    }

    const selectionSort = () => { 
        let n = array.length;
        let x = [...array];
            
        for(let i = 0; i < n; i++) {
            // Finding the smallest number in the subarray
            let min = i;
            for(let j = i+1; j < n; j++){
                x[j] = changeElementColor(x[j], 'green');
                x[min] = changeElementColor(x[min], 'green');
                sortHistory.push([...x]);

                if(x[j].props.style.height < x[min].props.style.height) {

                    x[j] = changeElementColor(x[j], 'red');
                    x[min] = changeElementColor(x[min], 'red');
                    sortHistory.push([...x]);
                    
                    let old = min;
                    min=j; 
                    
                    x[old] = changeElementColor(x[old], 'turquoise');
                    sortHistory.push([...x]);
                    continue;
                }
                
                x[j] = changeElementColor(x[j], 'turquoise');
                x[min] = changeElementColor(x[min], 'turquoise');
                sortHistory.push([...x]);

             }
             if (min != i) {
                 // Swapping the elements
                x[i] = changeElementColor(x[i], 'green');
                x[min] = changeElementColor(x[min], 'green');
                sortHistory.push([...x]);
                let tmp = x[i]; 
                x[i] = x[min];
                x[min] = tmp;      
                x[i] = changeElementColor(x[i], 'turquoise');
                x[min] = changeElementColor(x[min], 'turquoise');
                sortHistory.push([...x]);
            }
        }
    }

    const quickSort = () => {

    }

    const generate = () => {
        setArray(generateArray(rangeVal));
    }
    
    const changeVal = (event) => {
        setVal(event.target.value);
        generate();
    }

    const changeSpeed = (event) => {
        setSpeed(event.target.value);
    }

    const sortIt = (chosenSort) => {
        setClickable(false);
        sortHistory = [];

        switch(chosenSort) {
            case 'Bubble Sort':
                bubbleSort();
                break;

            case 'Selection Sort':
                selectionSort();
                break;
            
            case 'Insertion Sort':
                insertionSort();
                break;
            
            case 'Merge Sort':
                outsider = [];
                outsider = [...array];
                let tempArr = [...array];
                mergeSort(tempArr, 0, tempArr.length - 1);
                // console.log(outsider);
                outsider = [];
                break;

            case 'Quick Sort':
                quickSort();
                break;
        }

        showHistory();
    }

    const iterate = arr => {
        setArray([...arr]);
    }

    const showHistory = () => {
        let c = 0;
        if(sortHistory.length != 0) {
            interval = setInterval(() => {
                if(c < sortHistory.length - 1)
                    c++;
                else {
                    clearInterval(interval);
                    setClickable(true);
                }
                iterate([...sortHistory[c]]);
            }, 500 - speed);
        }
    }

    const changeElementColor = (element, color) => {
        return React.cloneElement(element, {
            style: {
                ...element.props.style,
                backgroundColor: color,
            }
        });
    }

    return (
        <div className='array-body'>
            <div id='texts'>
                <div id='texts'>
                <div>
                    <p style={{textAlign: 'center'}}>Number of elements: <br></br> {rangeVal}</p>
                    <input
                        id='range'
                        type='range'
                        min={20} max={200}
                        value={rangeVal} 
                        onChange={changeVal}
                    />
                </div>
                </div>
                
                 <div style={{margin: '0 40px'}}>
                    <p style={{fontSize: 17, textAlign: 'center'}}><b>Sorting Speed</b>:<br></br> Depends upon your CPU as well</p>
                    <input
                        id='rangeSpeed'
                        type='range'
                        min={1} max={500}
                        value={speed} 
                        onChange={changeSpeed}
                    />
                </div>
                
                <button className='sort-button' style={{fontWeight: 'bold', fontSize: 25}} onClick={() => {
                    if(clickable) sortIt(props.chosenSort);
                }}>Sort !</button>
                    
                <button className='generator' onClick={() => {
                    if(clickable) generate();
                }}>Generate New Array</button>

                <button className='sort-button' onClick={() => window.location.reload()}>Reset / Stop</button>
            </div>
            <div className='array-container'>
                {array}
            </div>
        </div>
    );
}

export default Array;
