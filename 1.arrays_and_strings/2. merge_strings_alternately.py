class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        res = []
        # Loop once up to the longest string
        for i in range(max(len(word1), len(word2))):
            if i < len(word1):
                res.append(word1[i])
            if i < len(word2):
                res.append(word2[i])
        return "".join(res)

# Test case
if __name__ == "__main__":
    solution = Solution()
    print(solution.mergeAlternately("abc", "pqr"))    # Output: apbqcr
    print(solution.mergeAlternately("ab", "pqrs"))   # Output: apbqrs
    print(solution.mergeAlternately("abcd", "pq"))   # Output: apbqcd
