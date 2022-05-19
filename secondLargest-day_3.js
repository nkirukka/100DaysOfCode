

// const secondLar = (nums) => {
//     let sort = nums.sort(function (a, b) { return (a - b) });
//     console.log(sort[sort.length - 2])
// }

// secondLar([8,2,35,3,1,8,7])

function getSecondLargest(nums) {
    const max = Math.max(...nums)
    return Math.max(...nums.filter(x => x !== max))
}
console.log(getSecondLargest([2,3,6,6,5]))