
const array = [5,2,3,3,2,1]

function findRecurringNumber(array) {
    for(i=1;i<array.length;i++){
        if (i>1) {
            for(x=0;x<i;x++){
                if(array[x] === array[i]) {
                    return array[i];
                }
            }
        }
    }
    return undefined
} 


function findRecurringNumber2(array) {
    let map = {}
    for (let i = 0;i < array.length;i++) {
        if (map[array[i]] !== undefined) {
            return array[i]
        } else {
            map[array[i]] = i
        }
    }
    return undefined
}

// O(n^2)
console.log(findRecurringNumber2(array));