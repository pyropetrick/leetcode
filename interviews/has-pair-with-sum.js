/* Дана коллекция чисел, необходимо реализовать функцию,
которая находит в ней пару чисел, составляющие заданную сумму */
// O(n)
const hasPairWithSum = (arr, sum) => {
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(sum - num)) return true;
        seen.add(num);
    }
    return false;
}


console.log(hasPairWithSum([3, 4, 7, 10], 8)) // false
console.log(hasPairWithSum([1, 4, 4, 9], 8)) // true
console.log(hasPairWithSum([-8, 1, 4, 9, 16], 8)) // true