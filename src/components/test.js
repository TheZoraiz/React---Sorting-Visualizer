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
    console.log(passedI, passedJ);
    while(i < firstHalf.length && j < secondHalf.length) {
        if(firstHalf[i] < secondHalf[j]) {
            sorted.push(firstHalf[i++]);
            // console.log(firstHalf[i]);
            outsider[passedI + (tempCount++)] = firstHalf[i - 1];
            collector.push([...outsider]);
        } else {
            sorted.push(secondHalf[j++]);
            // console.log(secondHalf[j]);
            outsider[passedI + (tempCount++)] = secondHalf[j - 1];
            collector.push([...outsider]);
        }
        // console.log(outsider);
    }
    while(i < firstHalf.length) {
        sorted.push(firstHalf[i++]);
        outsider[passedI + (tempCount++)] = firstHalf[i - 1];
        collector.push([...outsider]);
    };
    while(j < secondHalf.length) {
        sorted.push(secondHalf[j++]);
        outsider[passedI + (tempCount++)] = secondHalf[j - 1];
        collector.push([...outsider]);
    };
    // console.log(passedI, passedJ);
    // console.log(outsider);
    return sorted;
}

let arr = [4, 3, 2, 1];
let collector = [];
let outsider = [...arr]

console.log(arr);
console.log('\n', mergeSort(arr, 0, arr.length - 1));
console.log('Collector: ', collector);