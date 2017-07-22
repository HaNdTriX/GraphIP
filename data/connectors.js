const got = require('got')

async function location (value = '') {
  const { body } = await got(`https://freegeoip.net/json/${value}`, { json: true })
  return body
}

module.exports = {
  location
}
