

/*
2239. Find Closest Number to Zero
Easy
Topics
Companies
Hint
Given an integer array nums of size n, return the number with the value closest to 0 in nums.
 If there are multiple answers, return the number with the largest value.

Example 1:

Input: nums = [-4,-2,1,4,8]
Output: 1
Explanation:
The distance from -4 to 0 is |-4| = 4.
The distance from -2 to 0 is |-2| = 2.
The distance from 1 to 0 is |1| = 1.
The distance from 4 to 0 is |4| = 4.
The distance from 8 to 0 is |8| = 8.
Thus, the closest number to 0 in the array is 1.
Example 2:

Input: nums = [2,-1,1]
Output: 1
Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.

Constraints:

1 <= n <= 1000
-105 <= nums[i] <= 105
Accepted
142.3K
Submissions
304.3K
Acceptance Rate
46.8%
*/

// submission: https://leetcode.com/problems/find-closest-number-to-zero/solutions/7622149/javascrip-without-using-abs-by-dvlsfdxun-e13t/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    let closest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let x = nums[i];
        // Distance without Math.abs() as per Python logic
        let x_distance = x >= 0 ? x : -x;
        let closest_distance = closest >= 0 ? closest : -closest;

        // Look for the lesser value
        if (x_distance < closest_distance) {
            closest = x;
        }
        // Look for same distance but int positive
        else if (x_distance === closest_distance && x > closest) {
            closest = x;
        }
    }
    return closest;
};