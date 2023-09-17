//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }
    
    let firstMax = -Infinity;
    let secondMax = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        } else if (arr[i] < firstMax && arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }
    
    if (secondMax === -Infinity) {
        return -Infinity; // All elements are the same or there's only one element.
    }
    
    return secondMax;
}
