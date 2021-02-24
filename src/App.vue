<template>
  <Navigation/>
  <router-view />
  <Footer/>
</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {Footer, Navigation},
}
</script>
