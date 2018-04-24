<template>
  <div class="hello">

    <h2>
      <span style="border-bottom: 3px solid red">如何生成随机数</span>
    </h2>
    template：
    <pre class="word" style="text-align: left;font-size: 20px;">
      var Random = Mock.Random
      Mock.mock('api/data/integer',(req,res) => {
        Random.integer()
        return {
          data:Mock.mock(
            '@integer'
          )
        }
      })
    </pre>
    result:
    <div class="result">{{data1}}</div>

    <h2>
      <span style="border-bottom: 3px solid red">如何生成文章</span>
    </h2>
    template：
    <pre class="word" style="text-align: left;font-size: 20px;">
      var Random = Mock.Random
      Mock.mock('api/data/article',(req,res) => {
        Random.paragraph()
          return {
          data:Mock.mock(
          '@paragraph'
          )
        }
      })
    </pre>
    result:
    <div class="result">{{data}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: [],
      data1: ''
    }
  },
  mounted(){

    this.$axios.get('api/data/integer').then(res=>{
      this.data1 = res.data.data
      console.log(res)
    })

    this.$axios.get('api/data/article').then(res=>{
      this.data = res.data.data
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align:center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  width:1000px;
  margin:0 auto;
}
  .word{
    background:#f4f4f4;
    padding:20px;
    font-size:16px;
  }
  .result{
    background:#eaeaea;
    padding:18px;
  }
</style>
