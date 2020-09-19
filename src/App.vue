<template>
  <div id="app">
    <NavBar/>
    <SneakerCard color="black" bgColor=" #222A2C"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import SneakerCard from './components/SneakerCard'

export default {
  name: 'App',
  components: {
    NavBar,
    SneakerCard
  }
}
</script>

<style>
#app {
  font-family: Tahoma,Verdana,Segoe,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
