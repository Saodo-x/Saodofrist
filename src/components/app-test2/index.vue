<template>
  <div id="main">
    <form>
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" @keydown="setTxt" v-model="txt1" placeholder="Your name..">

      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" @keydown="setTxt" v-model="txt2" placeholder="Your last name..">

      <label for="country">Country</label>
      <select id="country" name="country">
        <option value="opt" v-for="(opt,index) in optval" :key="index">{{ opt }}</option>
      </select>

      <input type="submit" value="Submit">
    </form>
    <button @click="getTxt">哈哈哈</button>
  </div>
</template>

<script>
  export default {
    name: "AppTest2",
    data (){
      return {
        txt1: '',
        txt2: '',
        oneTimes: '',
        optval: ['australia','canada','usa'],
      }
    },
    methods: {
      setTxt (){
        clearTimeout(this.oneTimes)
        this.oneTimes = setTimeout(()=>{
          alert(this.txt1)
        },800)
      },
      getTxt (){
        // let xmlhttp = new XMLHttpRequest()
        // xmlhttp.open('GET','src/assets/text/content1.txt',true)
        // xmlhttp.send()
        // xmlhttp.onreadystatechange = function (){
        //   if (this.readyState === 4 && this.status === 200){
        //     console.log(this.responseText)
        //   }
        // }
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