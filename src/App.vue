<template>
  <div id="app">
    <AppTest1/>
    <AppTest2/>
  </div>
</template>

<script>
  import AppTest1 from './components/app-test1'
  import AppTest2 from "@/components/app-test2";

  export default {
    name: 'App',
    components: {
      AppTest2,
      AppTest1,
    }
  }
</script>

