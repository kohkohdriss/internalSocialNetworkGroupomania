<template>
    <div id="app">
      <NavHeader></NavHeader>
      <router-view></router-view>
      <Footer></Footer>
    </div>
</template>

<script>
import NavHeader from "./navigation/NavHeader.vue"
import Footer from "./components/Footer"

export default {
    name: "App",
    components: { 
        NavHeader,
        Footer
    }
}
</script>

<style>
  body {
      background-color: #1459c7
  }
</style>
