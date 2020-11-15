let quickSort = (origArray, passedI, passedJ) => {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		let left = [];
		let right = [];
        let newArray = [];
        
		let pivot = origArray[origArray.length - 1];
		let length = origArray.length;

        let tempCount = 0;
		for (let i = 0; i < length - 1; i++) {
			if (origArray[i] <= pivot) {
                left.push(origArray[i]);
                outsider[passedI + (tempCount++)] = origArray[i];
			} else {
				right.push(origArray[i]);
                outsider[passedI + (tempCount++)] = origArray[i];
			}
        }
        let passedMid = Math.floor(left.length);
        passedMid += passedI;
        console.log(left, right, pivot, ' --- ', passedI, passedMid - 1, ', ', passedMid, passedJ);
        // console.log(outsider + '');

		return newArray.concat(
            quickSort(left, passedI, passedMid - 1),
            pivot,
            quickSort(right, passedMid, passedJ)
        );
	}
}

const selectionSort = (array) => { 
    let n = array.length;
    let x = [...array];
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(x[j] < x[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = x[i]; 
             x[i] = x[min];
             x[min] = tmp;      
        }
    }
    return x;
}

let myArray = [ 9,7,8,5,6,3,2,4 ];
let outsider = [...myArray];

console.log("\nOriginal array: " + myArray);
let sortedArray = selectionSort(myArray);
console.log("\nSorted array: " + sortedArray);
// console.log("\nOutsider: " + outsider + "\n");