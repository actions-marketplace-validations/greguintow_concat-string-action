const core = require('@actions/core')

try {
  const re = /{([^}]+){1,}}/
  const globalRe = new RegExp(re, 'g')
  const string = core.getInput('string')
  const ids = [...string.matchAll(globalRe)].map(match => match.slice(0, 2))
  let finalString = string
  ids.forEach(([toReplace, id]) => {
    const mappedId = process.env[id] || process.env.default
    finalString = finalString.replace(toReplace, mappedId || id)
  })

  core.setOutput('replaced', finalString)
} catch (error) {
  core.setFailed(error.message)
}
