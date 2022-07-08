<template>
  <div id="main">
    <form>
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" @keydown="setTxt()" v-model="txt1" placeholder="Your name..">

      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" @keydown="setTxt()" v-model="txt2" placeholder="Your last name..">

      <label for="country">Country</label>
      <select id="country" v-model="opt">
        <option :value="opt" v-for="(opt,index) in optval" :key="index" name="sss">{{ opt }}</option>
      </select>

      <input type="submit" value="Submit">
    </form>
    <button @click="getTxt">哈哈哈1</button>
    <button @click="getArray">哈哈哈2</button>
  </div>
</template>

<script>
  // import axios from 'axios'
  export default {
    name: "AppTest2",
    data (){
      return {
        txt1: '',
        txt2: '',
        oneTimes: '',
        optval: ['australia','canada','usa'],
        opt: 'australia',
      }
    },
    computed: {
      optUp: function () {
        return this.opt.slice(0,1).toUpperCase() + this.opt.slice(1)
      }
    },
    methods: {
      setTxt (){
        // clearTimeout(this.oneTimes)
        // this.oneTimes = setTimeout(()=>{
        //   alert(this.txt1)
        //   console.log(this.txt1)
        // },800)
      },
      async getTxt (){
        let getaa = new Promise(function (resolve, reject){
          let xmlhttp = new XMLHttpRequest()
          xmlhttp.open('GET','https://api.uixsj.cn/hitokoto/get?type=social',true)
          xmlhttp.send()
          xmlhttp.onload = function (){
            if (this.status === 200){
              // console.log(this.responseText)
              resolve(this.responseText)
            }else {
              reject("File not Found")
            }
          }
        })
        this.txt2 = await getaa
        sessionStorage.setItem("name", this.txt2);
        this.$bus.$emit('poem', this.txt2)
        // axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(response=>{
        //   console.log(response.data);
        //
        // }).catch(error=>{
        //   console.log(error.response);
        // })
      },
      getArray (){
        this.$store.dispatch('pushArray',this.txt1)
        this.$router.push({
          path: '/app-test3',
        })
      }
    },
  }
</script>

<style scoped>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: #45a049;
}
div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin: auto;
  width: 50rem;
  height: auto;
}
</style>