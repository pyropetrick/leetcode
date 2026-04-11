function isValid(s: string): boolean {
	const stack: string[] = [];

	const map: Record<string, string> = {
		")": "(",
		"}": "{",
		"]": "[",
	};

	for (const char of s) {
		if (map[char]) {
			const top = stack.pop();
			if (top !== map[char]) return false;
		} else {
			stack.push(char);
		}
	}

	return stack.length === 0;
}
