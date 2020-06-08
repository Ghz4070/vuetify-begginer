<template>
  <v-app dark>
    <Navigation />

    <v-content>
      <vue-page-transition>
        <router-view></router-view>
      </vue-page-transition>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Navigation from "@/components/nav/Navigation";
import Footer from "@/components/footer/Footer";

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  }
};
</script>
