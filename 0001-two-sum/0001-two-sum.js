/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    result = []
    for(let i = 0; i < nums.length; i++){
        for(let q = i+1 ; q < nums.length; q++){
            nums[i]+nums[q] == target ?  result.push(i,q) : false
        }
    }
    let finalResult = [...new Set(result)]
    console.log(finalResult)
    return finalResult
}