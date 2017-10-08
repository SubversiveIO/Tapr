<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import keys from './../.siteconfig.json'

export default {
  name: 'app',

  mounted: function () {
	axios({
		method: 'get',
		url: 'http:http://api.brewerydb.com/v2/locations?region=Colorado&key='+ {keys}
	})
  }
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
