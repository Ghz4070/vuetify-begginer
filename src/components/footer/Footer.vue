<template>
  <v-footer color="green darken-1" app>
    
    <span class="white--text">&copy; 2019</span>

    <v-spacer></v-spacer>

    <v-btn icon v-if="$vuetify.theme.dark" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      <v-icon>mdi-white-balance-sunny</v-icon>
    </v-btn>
    <v-btn icon v-else @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      <v-icon>mdi-brightness-2</v-icon>
    </v-btn>

  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
</style>