const mergeSort = (arr) => {
    if(arr.length == 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let firstHalf = mergeSort(arr.slice(0, mid));
    let secondHalf = mergeSort(arr.slice(mid));

    let sorted = [];

    let i = 0, j = 0;

    while(i < firstHalf.length && j < secondHalf.length) {
        if(firstHalf[i] < secondHalf[j]) 
            sorted.push(firstHalf[i++])
        else 
            sorted.push(secondHalf[j++])
    }
    while(i < firstHalf.length) sorted.push(firstHalf[i++]);
    while(j < secondHalf.length) sorted.push(secondHalf[j++]);
    console.log(sorted);
    return sorted;
}

const insertionSort = (x) => {
    let n = x.length;

    for (let i = 1; i < n; i++) {
        
        let current = x[i];
        
        let j = i-1; 
        while ((j > -1) && (current < x[j])) {
            x[j+1] = x[j];
            j--;
        }
        x[j+1] = current;
    }

    return x;
}

let arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
console.log(arr);
// console.log(mergeSort(arr, 0, arr.length - 1));
console.log(insertionSort(arr));
