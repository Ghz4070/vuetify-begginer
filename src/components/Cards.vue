<template>
  <div v-if="meals.length">
    <v-row justify="center">
      <div :key="data.index" v-for="data in meals">
        <v-col col="4">
          <v-card class="mb-2" style="max-width: 20rem;" tag="article">
            <v-img class="white--text align-end" height="200px" :src="data.strCategoryThumb"></v-img>
            <v-card-subtitle class="pb-0">{{ data.strCategory }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ `${data.strCategoryDescription.slice(0,100)}...` }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="buttonCards" text>Share</v-btn>

              <v-btn color="buttonCards" text>Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </div>
    </v-row>
  </div>
  <div v-else>
    <h5>No meals available yet 😢</h5>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Cards",
  data() {
    return {
      meals: []
    };
  },
  mounted() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => {
        this.meals = response.data.categories;
        // console.log(response.data.categories[2].strCategoryDescription.slice(0,100));
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>