/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let result = '';
    const length = Math.max(word1.length, word2.length);

    for (let i = 0; i < length; i++) {
        // Checking for truthiness handles characters and undefined
        if (word1[i]) result += word1[i];
        if (word2[i]) result += word2[i];
    }

    return result;
};

// Test case
console.log(mergeAlternately("abc", "pqr"));    // Output: apbqcr
console.log(mergeAlternately("ab", "pqrs"));   // Output: apbqrs
console.log(mergeAlternately("abcd", "pq"));   // Output: apbqcd
