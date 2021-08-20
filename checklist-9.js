const numbers = [31, 45, 12, 95, 67, 21, 1, 7, 39, 10, 3, 20, 5, 2, 79, 4];
const sorted = numbers.sort(function (a, b) {
    return a - b;
});
const revseredNumber = sorted.reverse();

console.log(revseredNumber);