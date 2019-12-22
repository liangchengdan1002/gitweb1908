<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #000;
  font-weight: 500;
  background-color:#f1f1f1;
}
ul,li{
   list-style: none;
 }
 .router-link-active {
  text-decoration: none;
}
</style>
