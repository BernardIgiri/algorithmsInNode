function getMatrixValue(matrix,x,y) {
	if (matrix.length > 0 &&
		x>-1 && x< matrix.length &&
		y>-1 && y<matrix[0].length) {
		return matrix[x][y];
	} else {
		return 0;
	}
}
function longestCommonSubsequence(string1, string2) {
	let matchMatrix = Array(string1.length).
		fill(Array(string2.length).fill(0));
	for (let i=0; i<string1.length; i++) {
		matchMatrix[i]=[];
		let c1 = string1.charAt(i);
		for (let j=0; j<string2.length; j++) {
			let c2 = string2.charAt(j);
			if (c1===c2) {
				let bridgeValue = getMatrixValue(matchMatrix, i-1, j-1);
				matchMatrix[i][j] = bridgeValue + 1;
			} else {
				let left = getMatrixValue(matchMatrix, i-1, j);
				let up = getMatrixValue(matchMatrix, i, j-1);
				matchMatrix[i][j] = Math.max(left, up);
			}
		}
	}
	let output = [];
	for (let i=string1.length-1;i>=0;i--) {
		for (let j=string2.length-1;j>=0;j--) {
			let value = matchMatrix[i][j];
			let left = getMatrixValue(matchMatrix, i-1, j);
			let up = getMatrixValue(matchMatrix, i, j-1);
			if (left!=value && up!=value) {
				output.unshift(string1.charAt(i));
				let bridgeValue = getMatrixValue(matchMatrix, i-1, j-1);
				if (bridgeValue === 0) {
					i = -1;
					j = -1;
					break;
				}
			}		
		}
	}
	return output.join("");
}
console.log("Longest Common Subsequence for \"" + process.argv[2] + "\" and \"" + process.argv[3]+"\"");
console.log(longestCommonSubsequence(process.argv[2], process.argv[3]));
