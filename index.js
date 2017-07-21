const API = require('static-api-generator')
const api = new API({
  blueprint: 'data/:genre/:year/:movie',
  targetDirectory: 'output'
})

api.addEndpoint({
  addIdToFiles: true,
  depth: 1,
  forEach: 'movie'
})

api.addEndpoint({
  addIdToFiles: true,
  depth: 2,
  forEach: 'year'
})
