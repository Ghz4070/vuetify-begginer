<template>
  <div class="home">
    <v-container>
      <Cards />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from "@/components/Cards";

export default {
  name: "Home",
  components: {
    Cards
  }
};
</script>
