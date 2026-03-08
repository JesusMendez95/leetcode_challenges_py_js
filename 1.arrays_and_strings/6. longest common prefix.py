"""
14. Longest Common Prefix
Solved
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
"""

# submission: https://leetcode.com/problems/longest-common-prefix/submissions/1635875369

import time
from statistics import mean, stdev, median, quantiles
from typing import List, Tuple, Dict
import numpy as np
from scipy import stats


class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        if not strs:
            return ""
        lcp = []
        for tuple_char in zip(*strs):
            if len(set(tuple_char)) == 1:
                lcp.append(tuple_char[0])
            else:
                break
        return "".join(lcp)


class Solution2:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        """
        Alternative solution using the first string as reference.
        Time Complexity: O(S) where S is the sum of all characters in all strings
        Space Complexity: O(1)
        """
        if not strs:
            return ""

        # Use the first string as reference
        first = strs[0]

        # Find the minimum length among all strings
        min_len = min(len(s) for s in strs)

        # Compare each character position
        for i in range(min_len):
            char = first[i]
            # Check if all other strings have the same character at this position
            if any(s[i] != char for s in strs[1:]):
                return first[:i]

        # If we get here, the entire first string (up to min_len) is the common prefix
        return first[:min_len]


class Solution3:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        """
        Alternative solution using binary search approach.
        Time Complexity: O(S * log M) where S is the sum of all characters and M is the length of the shortest string
        Space Complexity: O(1)
        """
        if not strs:
            return ""

        def is_common_prefix(length: int) -> bool:
            # Get the prefix of the first string
            prefix = strs[0][:length]
            # Check if all other strings start with this prefix
            return all(s.startswith(prefix) for s in strs[1:])

        # Find the minimum length among all strings
        min_len = min(len(s) for s in strs)

        # Binary search for the longest common prefix
        left, right = 0, min_len

        while left < right:
            mid = (left + right + 1) // 2
            if is_common_prefix(mid):
                left = mid
            else:
                right = mid - 1

        return strs[0][:left]

class Solution4:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        """
        Improved vertical-scan solution using the shortest string as baseline.
        Time Complexity: O(n * m), where n is number of strings and m is shortest length
        Space Complexity: O(1) auxiliary (excluding output)
        """
        shortest_str = min(strs, key=len)
        if shortest_str == "":
            return ""

        for i, candidate_letter in enumerate(shortest_str):
            for s in strs:
                if s[i] != candidate_letter:
                    return shortest_str[:i]

        return shortest_str
