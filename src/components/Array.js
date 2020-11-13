import './Array.css';
import React, { useState, useEffect } from 'react';


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
    const [ rangeVal, setVal ] = useState(20);
    const [ speed, setSpeed ] = useState(1);
    const [ clickable, setClickable ] = useState(true);
    const [ reload, setReload ] = useState(false)

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
                  style={{height: barHeight/2, width: barWidth, margin: 1}}
                  key={i}
                >
                  { count < 40 ? <p>{ barHeight }</p> : <p></p>}
                </div>
            )
        }
        return bars;
    }
    const [ array, setArray ] = useState(generateArray(rangeVal));


    const bubble_Sort = () => {
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
        swapp = true;

        while (swapp) {
            swapp = false;
            for (let i = 0; i < n; i++)
            {
                // let a = parseFloat(x[i].style.height.slice(0, x[i].style.height.length - 2));
                // let b = parseFloat(x[i+1].style.height.slice(0, x[i+1].style.height.length - 2));

                let a = x[i].props.style.height;
                let b = x[i+1].props.style.height;

                // Highlight the iterators
                x[i] = React.cloneElement(x[i], {
                    style: {
                        ...x[i].props.style,
                        backgroundColor: 'green'
                    }
                });
                
                x[i+1] = React.cloneElement(x[i+1], {
                    style: {
                        ...x[i+1].props.style,
                        backgroundColor: 'red'
                    }
                });

                // Swapping condition for BUBBLE SORT
                if (a > b) {
                    sortHistory.push([...x]);
                    let temp = x[i];
                    x[i] = x[i+1];
                    x[i+1] = temp;
                    swapp = true;     
                    sortHistory.push([...x]);
                } else {
                    sortHistory.push([...x]);
                }

                // Unhighlight the iterators
                x[i] = React.cloneElement(x[i], {
                    style: {
                        ...x[i].props.style,
                        backgroundColor: 'turquoise',
                    }
                });

                x[i+1] = React.cloneElement(x[i+1], {
                    style: {
                        ...x[i+1].props.style,
                        backgroundColor: 'turquoise',
                    }
                });

                if(!swapp)
                    sortHistory.push([...x]);

            }
            n--;
        }        

        console.log(sortHistory);
        let c = 0;

        let interval = setInterval(() => {
            if(c < sortHistory.length - 1 && !reload)
                c++;
            else {
                clearInterval(interval);
                setClickable(true);
                setReload(false);
            }
            iterate([...sortHistory[c]]);
        }, speed);
        
    }

    const updateView = (i) => {
        document.getElementsByClassName('array-container')[0].appendChild(i);
    }

    // useEffect(() => {
    //     array = generateArray(props.count);
    // })

    const newArray = (newArray) => {
        setArray([...newArray]);
        // let bars = []
        // document.getElementsByClassName("array-container")[0].innerHTML = '';
        // newArray.forEach(element => {
        //     document.getElementsByClassName("array-container")[0].appendChild(element);
            
        //     // console.log(element);
        // });
    }

    const generate = () => {
        setArray(generateArray(rangeVal));
    }
    
    const changeVal = (event) => {
        generate();
        setVal(event.target.value);
    }

    const changeSpeed = (event) => {
        setSpeed(event.target.value);
    }

    const check = () => {
        bubble_Sort();
    }

    const reloader = () => {
        console.log(reload);
        setReload(true);
    }

    const iterate = arr => {
        setArray([...arr]);
    }

    return (
        <div className='array-body'>
            <div id='texts'>
                <div id='texts'>
                <div>
                    <p>Number of elements: {rangeVal}</p>
                    <input
                        id='range'
                        type='range'
                        min={20} max={150}
                        value={rangeVal} 
                        onChange={changeVal}
                    />
                </div>
                </div>
                
                 <div style={{margin: '0 40px'}}>
                    <p>Swap time: {speed} milliseconds</p>
                    <input
                        id='range'
                        type='range'
                        style={{width: 220}}
                        min={1} max={300}
                        value={speed} 
                        onChange={changeSpeed}
                    />
                </div>
                <button className='generator' onClick={generate}>Generate New Array</button>
                <button className='sort-button' onClick={() => {
                    if(clickable) {
                        check();
                    } else {
                        generate();
                    }
                    
                    }}>Sort !</button>
                    
                <button className='sort-button' onClick={forceUpdate}>Stop</button>
            </div>
            <div className='array-container'>
                {array}
            </div>
        </div>
    );
}

export default Array;
