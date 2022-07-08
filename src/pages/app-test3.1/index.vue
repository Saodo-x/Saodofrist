<template>
  <div id="main">
    <div
        id="aaa"
        v-for="rec in rectangle"
        :key="rec.name"
        :style={background:rec.color,display:rec.display}
    >
      <div class="left" @click="getLeft(rec.name)">
        <svg t="1657263878244" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2730" width="48" height="48">
          <path d="M842.666667 864c-8.533333 0-14.933333-2.133333-21.333334-8.533333l-341.333333-309.333334c-6.4-6.4-10.666667-14.933333-10.666667-23.466666 0-8.533333 4.266667-17.066667 10.666667-23.466667l341.333333-309.333333c12.8-12.8 34.133333-10.666667 44.8 2.133333 12.8 12.8 10.666667 34.133333-2.133333 44.8L548.266667 522.666667l315.733333 285.866666c12.8 10.666667 14.933333 32 2.133333 44.8-6.4 6.4-14.933333 10.666667-23.466666 10.666667z" p-id="2731"></path>
          <path d="M512 864c-8.533333 0-14.933333-2.133333-21.333333-8.533333L149.333333 546.133333c-6.4-6.4-10.666667-14.933333-10.666666-23.466666 0-8.533333 4.266667-17.066667 10.666666-23.466667L490.666667 189.866667c12.8-12.8 34.133333-10.666667 44.8 2.133333 12.8 12.8 10.666667 34.133333-2.133334 44.8L217.6 522.666667 533.333333 808.533333c12.8 12.8 14.933333 32 2.133334 44.8-6.4 6.4-14.933333 10.666667-23.466667 10.666667z" p-id="2732"></path>
        </svg>
      </div>
      <div class="right" @click="getRight(rec.name)">
        <svg t="1657264236000" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3162" width="48" height="48">
          <path d="M544 522.666667c0-8.533333-4.266667-17.066667-10.666667-23.466667L192 189.866667c-12.8-12.8-34.133333-10.666667-44.8 2.133333-12.8 12.8-10.666667 34.133333 2.133333 44.8l315.733334 285.866667L149.333333 808.533333c-12.8 12.8-14.933333 32-2.133333 44.8 6.4 6.4 14.933333 10.666667 23.466667 10.666667 8.533333 0 14.933333-2.133333 21.333333-8.533333l341.333333-309.333334c6.4-6.4 10.666667-14.933333 10.666667-23.466666z" p-id="3163"></path>
          <path d="M864 499.2l-341.333333-309.333333c-12.8-12.8-34.133333-10.666667-44.8 2.133333-12.8 12.8-10.666667 34.133333 2.133333 44.8l315.733333 285.866667-315.733333 285.866666c-12.8 12.8-14.933333 32-2.133333 44.8 6.4 6.4 14.933333 10.666667 23.466666 10.666667 8.533333 0 14.933333-2.133333 21.333334-8.533333l341.333333-309.333334c6.4-6.4 10.666667-14.933333 10.666667-23.466666 0-8.533333-4.266667-17.066667-10.666667-23.466667z" p-id="3164"></path>
        </svg>
      </div>
    </div>
    <div id="hhh">
      <div id="circle" v-for="(n,index) in num" :key="index" @click="show(n.a)" :style="{background:n.col}"></div>
    </div>
  </div>
</template>

<script>
  import 'animate.css'

  export default {
    name: "AppTest3_1",
    data (){
      return {
        rectangle: [
          {color: '#d7000f', name: 1, display: 'block'},
          {color: '#002e9b', name: 2, display: 'none'},
          {color: '#c1c1c1', name: 3, display: 'none'},
          {color: '#697723', name: 4, display: 'none'},
        ],
        col: '#ff770f',
        num: [
          {a:1, col: "#ff770f"},
          {a:2, col: "#cccccc"},
          {a:3, col: "#cccccc"},
          {a:4, col: "#cccccc"}
        ],
        count: 1,
        times: null,
      }
    },
    mounted() {
      this.times = setInterval(()=>{
        this.rectangle.forEach((item)=>{
          if (item.name === this.count){
            item.display = 'block'
            this.num[item.name-1].col = this.col
          }else {
            item.display = 'none'
            this.num[item.name-1].col = "#cccccc"
          }
        })
        if (this.count === 4){
          this.count = 1
        }else {
          this.count++
        }
      },1500)
    },
    methods: {
      show (a){
        this.rectangle.forEach((item)=>{
          if (item.name === a){
            item.display = 'block'
            this.num[item.name-1].col = this.col
            this.count = a
          }else {
            item.display = 'none'
            this.num[item.name-1].col = "#cccccc"
          }
        })
      },
      getLeft (index){
        if (index === 1){
          this.rectangle[this.rectangle.length-1].display = 'block'
          this.rectangle[index-1].display = 'none'
          this.num[this.num.length-1].col = this.col
          this.num[index-1].col = "#cccccc"
          this.count = this.rectangle.length
        }else {
          this.rectangle[index-2].display = 'block'
          this.rectangle[index-1].display = 'none'
          this.num[index-2].col = this.col
          this.num[index-1].col = "#cccccc"
          this.count = index-1
        }
        //有BUG的代码
        // this.rectangle.forEach((item)=>{
        //   if (item.display === 'block'){
        //     if (item.name === 1){
        //       console.log(this.rectangle.length-1)
        //       this.rectangle[this.rectangle.length-1].display = 'block'
        //       item.display = 'none'
        //       this.num[this.num.length-1].col = this.col
        //       this.num[item.name-1].col = "#cccccc"
        //       this.count = this.rectangle.length
        //       console.log(this.rectangle[this.rectangle.length-1].display)
        //       console.log(this.rectangle[2].display)
        //     }else {
        //       this.rectangle[item.name-2].display = 'block'
        //       item.display = 'none'
        //       this.num[item.name-2].col = this.col
        //       this.num[item.name-1].col = "#cccccc"
        //       this.count = item.name-1
        //     }
        //   }
        // })
      },
      getRight (index){
        if (index === 4){
          this.rectangle[0].display = 'block'
          this.rectangle[index-1].display = 'none'
          this.num[0].col = this.col
          this.num[index-1].col = "#cccccc"
          this.count = 1
        }else {
          this.rectangle[index].display = 'block'
          this.rectangle[index-1].display = 'none'
          this.num[index].col = this.col
          this.num[index-1].col = "#cccccc"
          this.count = index+1
        }
        //有BUG的代码
        // this.rectangle.forEach((item)=>{
        //   if (item.display === 'block'){
        //     if (item.name === 4){
        //       console.log(item.name)
        //       this.rectangle[0].display = 'block'
        //       item.display = 'none'
        //       this.num[0].col = this.col
        //       this.num[item.name-1].col = "#cccccc"
        //       this.count = 1
        //     }else {
        //       this.rectangle[item.name].display = 'block'
        //       item.display = 'none'
        //       this.num[item.name].col = this.col
        //       this.num[item.name-1].col = "#cccccc"
        //       this.count = item.name+1
        //     }
        //   }
        // })
      },
    },
    beforeDestroy() {
      clearInterval(this.times)
    }
  }
</script>

<style scoped>
  #main{
    width: 45rem;
    margin: 5rem auto;
  }
  #main #aaa{
    width: 45rem;
    height: 40rem;
    border-radius: 4rem;
    position: relative;
  }
  #main #aaa .left{
    box-sizing: border-box;
    padding: 1rem 0;
    width: 4.8rem;
    height: 6.8rem;
    position: absolute;
    top: 17.6rem;
    left: 0.5rem;
    background-color: rgba(255, 255, 255, 0.3);
    opacity: 0.7;
  }
  #main #aaa .left:hover{
    opacity: 1;
  }
  #main #aaa .right{
    box-sizing: border-box;
    padding: 1rem 0;
    width: 4.8rem;
    height: 6.8rem;
    position: absolute;
    top: 17.6rem;
    right: 0.5rem;
    background-color: rgba(255, 255, 255, 0.3);
    opacity: 0.7;
  }
  #main #aaa .right:hover{
    opacity: 1;
  }
  #main #hhh{
    width: 12rem;
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem auto;
  }
  #main #hhh #circle{
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
  }
</style>