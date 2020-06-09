<template>
  <div id="navigation">
    <v-navigation-drawer
      v-model="drawer"
      color="green darken-1"
      expand-on-hover
      :mini-variant="miniVariant"
      :permanent="permanent"
      app
      dark
    >
      <v-list-item-group v-model="group" active-class="colorListItemLD--text text--accent-1">
        <v-list dense nav class="py-0">
          <v-list-item two-line class="px-0">
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Vuetify-App-Test</v-list-item-title>
              <v-list-item-subtitle>Ceci est juste un test</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <template v-for="item in items">
            <v-list-group
              v-if="item.children"
              :key="item.title"
              v-model="item.model"
              :prepend-icon="item.icon"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="(child, i) in item.children" :key="i" :to="child.link">
                <v-list-item-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ child.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>

            <v-list-item v-else :key="item.title" :to="item.link">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-list-item-group>
    </v-navigation-drawer>

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
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      drawer: false,
      permanent: false,
      miniVariant: false,
      group: null,
      items: [
        { link: "/", title: "Home", icon: "mdi-home" },
        { link: "/account", title: "Account", icon: "mdi-account" },
        {
          icon: "mdi-note",
          title: "Blog",
          model: true,
          children: [
            { link: "/blog/accueil", title: "Accueil" },
            { link: "/blog/display-cards", title: "Affichage des cartes" }
          ]
        },
        {
          icon: "mdi-dots-vertical",
          title: "More",
          model: true,
          children: [
            { title: "Import" },
            { title: "Export" },
            { title: "Print" },
            { title: "Undo changes" },
            { title: "Other contacts" }
          ]
        },
        { link: "/about", title: "About", icon: "mdi-information-outline" },
        { link: "/reglage", icon: "mdi-cog", title: "Settings" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>