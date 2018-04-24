const Mock = require('mockjs')

Mock.mock('api/data/string',(req, res) => {
  return {
    data:Mock.mock({
      "string|1-100":"123"
    })
  }
})
