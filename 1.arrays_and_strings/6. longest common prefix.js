/*
14. Longest Common Prefix
Easy
Topics
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
*/

/**
 * Equivalent approach to Python Solution4:
 * - Use shortest string as baseline
 * - Vertical scan each position across all strings
 * Time: O(n * m), where n = number of strings, m = shortest string length
 * Space: O(1) auxiliary
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let shortestStr = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortestStr.length) {
            shortestStr = strs[i];
        }
    }

    if (shortestStr === "") {
        return "";
    }

    for (let i = 0; i < shortestStr.length; i++) {
        const candidateLetter = shortestStr[i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== candidateLetter) {
                return shortestStr.slice(0, i);
            }
        }
    }

    return shortestStr;
};
