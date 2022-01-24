let string1 = process.argv[2]
let string2 = process.argv[3]

/*

abac
abc

a

	a	b	a	c
a	1	1	1	1
b	1	2	2	2
c	1	2	2	3

*/

function diff(s1, s2) {
	let matrix = Array(s1.length).fill().map(()=> Array(s2.length).fill(0))
	for (let x=0; x<s1.length; x++) {
		for (let y=0; y<s2.length; y++) {
			let up = 0;
			if (y>0) {
				up = matrix[x][y-1]
			}
			let left = 0;
			if (x>0) {
				left = matrix[x-1][y]
			}
			let c1 = s1.charAt(x)
			let c2 = s2.charAt(y)
			let value = Math.max(left, up)
			if (c1 === c2) {
				value = Math.max(value, left + 1)
			}
			matrix[x][y] = value
		}
	}
	let result = ""
	for (let x=s1.length-1, y=s2.length-1; x>0 && y>0;) {
		let left = 0
		let up = 0
		let value = matrix[x][y]
		if (x > 0) {
			left = matrix[x-1][y]
		}
		if (y > 0) {
			up = matrix[x][y-1]
		}
		if (value === up) {
			result += s1.charAt(x)
			y--
		} else if (value === left) {
			result += s1.charAt(x)
			x--
		} else {
			x--
			y--
		}
	}
	return result
}

console.log(diff(string1, string2))
