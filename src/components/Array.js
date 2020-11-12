import './Array.css';

function Array(props) {
    let list = document.getElementsByClassName('bars');
    let realList = [].slice.call(list)
    
    // Converts array of divs into an array of their sizes - in order
    realList = realList.map(item => parseFloat(item.style.height.slice(0, item.style.height.length - 2)));
    console.log(realList);
    return (
        <div className='array-body'>
            <div className='array-container'>
                {props.generateBars(10)}
            </div>
        </div>
    );
}

export default Array;
