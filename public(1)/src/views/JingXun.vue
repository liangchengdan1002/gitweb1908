<template>
  <div >
    <carousel></carousel>
    <shousuo></shousuo>
    <city></city>
    <new-releases></new-releases>
    <gu-si></gu-si>
    
    <div class="main"></div>
  </div>
</template>
<script>
import carousel from "../components/Index/carousel"
import shousuo from "../components/Index/shousuo"
import City from "../components/Index/City"
import NewReleases from "../components/Index/NewReleases"
import GuSi from "../components/Index/GuSi"
export default {
  data(){
    return {}
  },
  components:
  {
    "carousel":carousel,
    "shousuo":shousuo,
    City,
    NewReleases,
    GuSi,

  }
 
}
</script>
<style lang="scss" scoped>
.main{
  padding-bottom: 50px;
}
</style>