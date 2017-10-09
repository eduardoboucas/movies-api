const API = require('static-api-generator')
const api = new API({
  blueprint: 'source/:language/:genre/:year/:movie',
  outputPath: 'output'
})

api.generate({
  endpoints: ['genre'],
  levels: ['year', 'language'],
  root: 'genre'
})

api.generate({
  endpoints: ['movie']
})
