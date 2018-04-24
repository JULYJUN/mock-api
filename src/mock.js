const Mock = require('mockjs')
var Random = Mock.Random

Mock.mock('api/data/string',(req, res) => {
  return {
    data:Mock.mock({
      "string|1-100":"123"
    })
  }
})

Mock.mock('api/data/article',(req,res) => {
  Random.paragraph()
  return {
    data:Mock.mock(
      '@paragraph'
    )
  }
})
