const core = require('@actions/core')

try {
	// {([^}]+){1,}}
	// (?<={)(.*)(?=})
	const re = /{([^}]+){1,}}/g
	const string = core.getInput('string')
	// const map = core.
	const ids = [...string.matchAll(re)].map(match => match[1])
	// console.log(map)
	console.log(ids)
	ids.forEach(id => {
		console.log(process.env[id])
	})

	core.setOutput('replaced', string)
} catch (error) {
	core.setFailed(error.message)
}
