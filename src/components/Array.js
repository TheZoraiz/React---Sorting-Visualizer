import './Array.css';
import { useState, useEffect } from 'react';


function sleep(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}


function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}
  


function Array(props) {
    const forceUpdate = useForceUpdate();
    const [ mounted, setMounted ] = useState(1);
    const [ rangeVal, setVal ] = useState(20);

    // Converts array of divs into an array of their sizes - in order
    // realList = realList.map(item => parseFloat(item.style.height.slice(0, item.style.height.length - 2)));
    // console.log(realList);

    const generateArray = (count) => {
        count = parseInt(count);
        let bars = [];
        for(let i = 0; i < count; i++) {
            let barHeight = Math.round((Math.random() * 900) + 50);
            let barWidth = (count > 25 ? ( 1000 / ( count + 5  ) ) : 30);
            bars.push(
                <div 
                  className='bars'
                  style={{height: barHeight/2, width: barWidth, margin: (count > 250 ? 0 : 1)}}
                >
                  { count < 40 ? <p>{ barHeight }</p> : <p></p>}
                </div>
            )
        }
        return bars;
    }
    const [ array, setArray ] = useState(generateArray(rangeVal));


    const bubble_Sort = async() => {
        let list = document.getElementsByClassName('array-container')[0];
        let realList = list.children;
        // console.log(realList)
        // console.log(realList)
        // let x = parseFloat(realList[0].style.height.slice(0, realList[0].style.height.length - 2));
        // let y = parseFloat(realList[1].style.height.slice(0, realList[1].style.height.length - 2));
        // console.log(x < y);
        
        let count = 50;
        let sortHistory = []

        let swapp;
        let n = realList.length-1;
        // var x=[...realList];
        let x = [...array];
        do {
            swapp = false;
            for (let i=0; i < n; i++)
            {
                // let a = parseFloat(x[i].style.height.slice(0, x[i].style.height.length - 2));
                // let b = parseFloat(x[i+1].style.height.slice(0, x[i+1].style.height.length - 2));

                let a = x[i].props.style.height;
                let b = x[i+1].props.style.height;

                if (a > b)
                {
                    let temp = x[i];
                    x[i] = x[i+1];
                    x[i+1] = temp;
                    swapp = true;
                    
                    sortHistory.push([...x]);
                    // count += 50;
                    // setTimeout(() => {
                    //     setArray([...x]);
                    //     console.log('checked');
                    // }, count);
                    // sleep(100);
                }
            }
            n--;
        } while (swapp);
        
        // console.log(sortHistory);
        // // setArray(sortHistory[10])
        for(let i = 0; i < sortHistory.length; i++) {
            setArray([...sortHistory[i]]);
            // sleep(10);
        }
    }

    const updateView = (i) => {
        document.getElementsByClassName('array-container')[0].appendChild(i);
    }

    // useEffect(() => {
    //     array = generateArray(props.count);
    // })

    const generate = () => {
        setArray(generateArray(rangeVal));
    }
    
    const changeVal = (event) => {
        generate();
        setVal(event.target.value);
    }

    const newArray = (newArray) => {
        setArray([...newArray]);
        // let bars = []
        // document.getElementsByClassName("array-container")[0].innerHTML = '';
        // newArray.forEach(element => {
        //     document.getElementsByClassName("array-container")[0].appendChild(element);
            
        //     // console.log(element);
        // });
    }

    const check = () => {
        bubble_Sort();
    }

    const test = () => {
        setTimeout(() => setArray(generateArray(rangeVal)), 1000);
        setTimeout(() => setArray(generateArray(rangeVal)), 2000);
        // console.log(document.getElementsByClassName('array-container')[0].children);
        sleep(500);
        console.log('Leaving test')
    }

    return (
        <div className='array-body'>
            <div id='texts'>
                <button className='generator' onClick={generate}>Generate New Array</button><div id='texts'>
                <div>
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
                <button className='sort-button' onClick={check}>Sort !</button>
                <button className='sort-button' onClick={test}>Test</button>
            </div>
            <div className='array-container'>
                {array}
            </div>
        </div>
    );
}

export default Array;
