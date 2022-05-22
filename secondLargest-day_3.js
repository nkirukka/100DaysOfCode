

function getSecondLargest(nums) {
    const max = Math.max(...nums)
    return Math.max(...nums.filter(x => x !== max))
}
console.log(getSecondLargest([2,3,6,6,5]))
