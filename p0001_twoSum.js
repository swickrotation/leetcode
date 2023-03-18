/**
 *  @param{number[]} nums
 *  @param{number} target
 *  return {number[]}
 */
var twoSum = function(nums, target) {
    let a;
    let b;
    let output = [];
    for ( i = 0; i < nums.length; i++) {
        a = nums[i];
        for (j = 0; j < nums.length; j++) {
            b = nums[j];
            if (a + b == target && i !=j) {
                output.push(i);
                output.push(j);
                return output;
            } 
        }
    }
    return [];
}
