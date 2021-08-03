
async function delay (ms) {
	return new Promise(function (resolve) {
		setTimeout(resolve, ms)
	})
}


async function main () {
	console.log('waiting for long task...')
	await delay(2000)
	console.log('done!')
}


main()
