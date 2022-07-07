<template>
  <div id="one">哈哈</div>
</template>

<script>
  export default {
    name: "AppTest1"
  }
</script>

<style scoped>
  #one{
    width: 10rem;
    height: 10rem;
    text-align: center;
    line-height: 10rem;
    color: #FFF;
    font-size: xx-large;
    background-color: red;
    border-radius: 0.5rem;
    transition: width 2s, height 2s, transform 2s;
    animation: ssss 6s;
    position: relative;
  }
  #one:hover{
    width: 20rem;
    height: 20rem;
    transform: rotate(180deg);
    /* line-height: 20rem; */
  }
  @keyframes ssss {
    0%   {background-color:red; left:0rem; top:0rem; transform: rotate(0deg);}
    25%  {background-color:yellow; left:20rem; top:0; transform: rotate(90deg);}
    50%  {background-color:blue; left:20rem; top:20rem; transform: rotate(180deg);}
    75%  {background-color:green; left:0; top:20rem; transform: rotate(270deg);}
    100% {background-color:red; left:0; top:0; transform: rotate(360deg);}
  }
</style>