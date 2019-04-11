/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let startIdx = 0;
    let endIdx = 1;
    
    while (endIdx < nums.length) {
        if (nums[startIdx] < nums[endIdx]) {
            startIdx = startIdx + 1;
            nums[startIdx] = nums[endIdx];
        }
        
        endIdx++;
    }
    
    return startIdx+1;
};
