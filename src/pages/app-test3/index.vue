<template>
  <div id="num">{{array1}}</div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "AppTest3",
    data (){
      return {
        // array: array1,
      }
    },
    computed: {
      ...mapState(["array1"])
    },
  }
</script>

<style scoped>
  #num{
    width: 50rem;
    height: 6rem;
    background-color: #cccccc;
    margin: 1rem auto;
    text-align: center;
    line-height: 6rem;
    font-size: x-large;
    overflow: auto;
  }
</style>