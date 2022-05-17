/*
 Given a list of numbers, the 'mode' is the value that occurs most offen, if no number in the list is repeated
 then there is no mode for the list
*/

const List1 = [1, 5, 2, 6, 2, 3, 3, 2, 8, 2]
const List2 = [500, -100, 200, 50, -100, 300, 50, 700, 50, -100, 500]
const List3 = [1, 2, 3, 4, 5, 6, 7]

const getModes = (arr) => {
	const mode = {}
	const noModes = []
	const modes = []
	const getNumberModes = (number) => {
		mode[number] = ++mode[number] || 1
	}
	arr.forEach(getNumberModes)

	const max = Math.max(...Object.values(mode))

	Object.keys(mode).forEach((num) => {
		if (mode[num] === max) modes.push(num)
	})

	Object.keys(mode).forEach((num) => {
		if (mode[num] === 1) noModes.push(num)
	})

	if (noModes.length === arr.length) {
		return null
	} else {
		return `The mode is ${modes} and it occurs ${max} times`
	}
}

console.log(getModes(List3))
