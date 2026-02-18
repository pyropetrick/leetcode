/* For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2. */

const getPatternLength = (num1, num2) => {
    if (num2 === 0) {
        return num1;
    }
    const nextNum = num1 % num2;
    return getPatternLength(num2, nextNum);
}

const gcdOfStrings = (str1, str2) => {
    if (str1 + str2 !== str2 + str1) {
        return ''
    }
    const str1Length = str1.length;
    const str2Length = str2.length;
    const maxLengthPattern = str1Length > str2Length ? getPatternLength(str1Length, str2Length) : getPatternLength(str2Length, str1Length);
    return str2.slice(0, maxLengthPattern);
};

gcdOfStrings('TAUXXTAUXXTAUXXTAUXXTAUXX', 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX');