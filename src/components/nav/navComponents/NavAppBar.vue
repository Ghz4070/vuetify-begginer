<template>
  <v-app-bar app color="green darken-1" dark>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <!-- Liste deroulante avec effet  -->
    <div class="text-center">
      <v-menu transition="scale-transition" origin="center center">
        <template v-slot:activator="{ on }">
          <v-btn dark color="orange" v-on="on">Scale Transition</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <!-- Liste deroulante avec effet  -->
  </v-app-bar>
</template>

<script>
export default {
  name: "NavAppBar",
  data: () => {
      return {
          drawer: false,
      }
  }
};
</script>

<style lang="scss" scoped>
</style>