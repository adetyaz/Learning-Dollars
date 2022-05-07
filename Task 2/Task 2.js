/*
  Write a function that takes an input a filename, the function parses the file reading line by line
  determines if the line contains a single valid number, ii should reurn a list of all numbers found in the file
*/

const getNumbersPresent = () => {
	let selected = document.getElementById('fileContent').files[0]

	let reader = new FileReader()
	reader.addEventListener('loadend', () => {
		let matches = reader.result.match(/\d+/g)
		document.getElementById('fileNumbers').innerHTML = matches
		console.log(matches)
	})
	reader.readAsText(selected)
}
