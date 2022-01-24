let inputWords = process.argv[2]

console.log("Reverse order of: \"" + inputWords + "\" is \"" + reverseWords(inputWords) + "\"");

function reverseSubString(str, start, end) {
	for (let i=start, j=end; i<j; i++,j--) {
		let t = str[i];
		str[i] = str[j];
		str[j] = t;
	}
}

function reverseWords(words) {
	let result = words.split('');
	reverseSubString(result, 0, result.length-1);
	let start = 0, end = 1;
	for (; end<result.length; end++) {
		let c = result[end];
		if (c===' ') {
			reverseSubString(result, start, end-1);
			start = end +1;
		}
	}
	reverseSubString(result, start, end);
	return result.join('');
}
