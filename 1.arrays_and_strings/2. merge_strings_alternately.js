/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let result = '';
    const nMin = Math.min(word1.length, word2.length);

    // Merge overlapping parts
    for (let i = 0; i < nMin; i++) {
        result += word1[i] + word2[i];
    }

    // Append remaining tails (one will be empty)
    result += word1.substring(nMin);
    result += word2.substring(nMin);

    return result;
};

// Test case
console.log(mergeAlternately("abc", "pqr"));    // Output: apbqcr
console.log(mergeAlternately("ab", "pqrs"));   // Output: apbqrs
console.log(mergeAlternately("abcd", "pq"));   // Output: apbqcd
