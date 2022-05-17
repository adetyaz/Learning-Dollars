/*
  Write a function that takes an input a filename, the function parses the file reading line by line
  determines if the line contains a single valid number, ii should return a list of all numbers found in the file
*/

const getNumbersPresent = () => {
	let selected = document.getElementById('fileContent').files[0]
	console.log(selected.name)
	let reader = new FileReader()
	reader.addEventListener('loadend', () => {
		let matches = reader.result.match(/^[+-]?\d+(?:\.\d*(?:[eE][+-]?\d+)?)?$/gm)
		document.getElementById('fileNumbers').innerHTML = matches
		console.log(matches)
	})
	reader.readAsText(selected)
}
