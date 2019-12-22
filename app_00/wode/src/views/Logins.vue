<template>
  <div class="login">
    <login></login> 
    <manage></manage>
  </div>
</template>

<script>
import Login from "../components/Login.vue"
import Manage from "../components/Manage.vue"
export default {
  data(){
    return {

    }
  },
  components:{
    Login,
    Manage,
  },
}
</script>

<style scoped>
.login{
  background: #ccc;
} 
</style>