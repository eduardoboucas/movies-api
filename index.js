const API = require('./../static-api-generator')
const api = new API({
  blueprint: 'source/:language/:genre/:year/:movie',
  targetDirectory: 'output'
})

api.generate({
  endpointsPerItem: ['movie'],
  entriesPerPage: 3,
  root: 'genre',
  sort: {
    movie: {
      field: 'budget',
      order: 'ascending'
    }
  }
})