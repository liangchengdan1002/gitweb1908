<template>
  <div>
    <mt-swipe  class="swipe">
      <mt-swipe-item>
        <img src="/img/1.jpg" alt="" @click="tiao1">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/img/2.jpg" alt="" @click="tiao1">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/img/6.jpg" alt="" @click="tiao1">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  methods:{
    tiao1(){
    this.$router.push("/del");
    }
  }
}
</script>

<style lang="scss" scoped>
div{
  width: 100%;
  height: 160px;
  background:#0f0;
  box-sizing: border-box;
  padding: 0 -5px;
}
.swipe{
  box-sizing: border-box;

    img{
    width:100%;
    height: 100%;
  }
}

</style>