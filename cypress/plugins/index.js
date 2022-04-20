module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
  on('task', {
    queryDb: query => {
      return queryDb(query, config)
    }
  })
}