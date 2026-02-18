/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

*/

const mergeAlternately = (word1, word2) => {
    let mergedString = '';
    for (let i = 0; i < word1.length; i++) {
        if (!word2[i]) {
            mergedString += word1.slice(i);
            break
        }

        mergedString = mergedString + word1[i] + word2[i];

        if (word1.length < word2.length && i === word1.length - 1) {
            mergedString += word2.slice(i + 1);
        }
    }
    return mergedString;
}

mergeAlternately('ab', 'pqrs');
