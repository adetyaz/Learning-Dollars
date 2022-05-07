/*
 Given a list of numbers, the 'mode' is the value that occurs most offen, if no number in the list is repeated
 then there is no mode for the list
*/

const mode = {}
const List1 = [1, 5, 2, 6, 2, 3, 3, 2, 8, 2]
const List2 = [500, -100, 200, 50, -100, 300, 50, 700, 50, -100, 500]

const getModes = (number) => {
	mode[number] = ++mode[number] || 1
}

List2.forEach(getModes)
console.log(mode)
