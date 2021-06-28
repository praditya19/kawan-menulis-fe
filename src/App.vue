<template>
  <div>
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
