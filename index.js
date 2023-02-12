let dollarCurrency = document.getElementById(dollar)
let poundCurrency = document.getElementById(pound)

function submit() {
	console.log('test')
	// enter value to execute on the screen and store in variable"input value"
	let inputValue = dollar.value
	// console.log(inputValue)
	let convert = inputValue * 0.82
	pound.innerHTML = convert
}
function clean() {
	// console.log('test')
	let input = document.getElementById('dollar')
	input.value = ''
	let output = document.getElementById('pound')
	output.value = ''
}
