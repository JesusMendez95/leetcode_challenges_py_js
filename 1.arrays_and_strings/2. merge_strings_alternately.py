class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        res = []
        n_min = min(len(word1), len(word2))
        
        # Merge overlapping parts
        for i in range(n_min):
            res.append(word1[i])
            res.append(word2[i])
            
        # Append remaining tails (one will be empty)
        res.append(word1[n_min:])
        res.append(word2[n_min:])
        
        return "".join(res)

# Test case
if __name__ == "__main__":
    solution = Solution()
    print(solution.mergeAlternately("abc", "pqr"))    # Output: apbqcr
    print(solution.mergeAlternately("ab", "pqrs"))   # Output: apbqrs
    print(solution.mergeAlternately("abcd", "pq"))   # Output: apbqcd
