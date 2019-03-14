<template>
  <div class="home">
    <Header class="header"></Header>
    <el-button>12</el-button>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
export default {
  components: {
    Header
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0
}
h1, h2 {
  font-weight: normal;
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
</style>
