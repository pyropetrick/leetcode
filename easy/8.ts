function isPalindrome(x: number): boolean {
	const strX = x.toString();
	let resultStr = "";
	for (let i = strX.length - 1; i >= 0; i--) {
		resultStr += strX[i];
	}

	return resultStr === strX;
}
// O(n) time / O(n) space
