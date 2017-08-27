<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import keys from './../.siteconfig.json'

console.log(keys.breweryDB)

export default {
  name: 'app'
}
</script>

<style>

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #b29e94;
}

</style>
