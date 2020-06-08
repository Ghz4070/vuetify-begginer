<template>
  <div class="home">
    <v-container class="text-center" fluid>
      <HelloWorld />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
