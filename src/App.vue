<template>
   <titleBar></titleBar>
</template>
<script>
import titleBar from './views/Title.vue'

export default({
  data(){},
  components:{
    'titleBar': Title
  }
})
</script>
<style>
  body{
    background: rbg(24,34,137);
  }
</style>
