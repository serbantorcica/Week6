// 1
for (let i = 1; i <= 20; i++) {
    console.log(i)
}
// 2
for (let i = 1; i <= 20; i++) {
    if (i%2==1)
        console.log(i)
}
// 3
function sumOfArray(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

let myArr = [1, 2, 3, 4, 5, 6, 7];
console.log(sumOfArray(myArr));
// 4
function maxOfArr(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    
    return max;
}

let mySecondArr = [204, 7, 12, 0, 1115, 44, 82, 1105];
console.log(maxOfArr(mySecondArr));
// 5
function countHowMany(array, element) {
    let count = 0;
    for (let i = 0; i < array.length; i++)
        if (array[i] == element) {
            count++;
        }
        return count;
}
let myThirdArray = [1, 2, 2, 3, 3, 3, 4, 4, 5 ,3, 2, 1];
console.log(countHowMany(myThirdArray, 3));
// // challenge
// var x = 0;
// for (let i = 0; i <= 1; i++) {
//     console.log(i);
//     for (let j = 0; j <= 1; j++) { 
//         console.log(j);
//     }
// }
// // console.log('1' + '0' + '1' + '0');