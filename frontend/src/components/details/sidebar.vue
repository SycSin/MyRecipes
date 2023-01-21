<template>
  <div>
    <div>
      <h3 class="text-h5 font-weight-medium pb-4">Popular Recipes</h3>

      <v-divider></v-divider>

      <div>
        <v-row v-for="item in this.recipes.slice(0,4).reverse()" :key="item.recipes_UID" class="py-2">
          <v-col cols="12" lg="10" md="6">
            <div>
              <v-card :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 12 : 0"
                      flat
                      height="100%"
                      hover
                      :to="'/recipes/'+item.recipes_UID">
                <v-img
                    :aspect-ratio="16 / 9"
                    :src="item.image"
                    class="elevation-2"
                    gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                ></v-img>

                <div>
                  <v-btn color="accent" depressed small to="/categories" style="margin-right: 2px;">{{ getCategoryFromRecipe(item.category).name }}</v-btn>

                  <h3 class="text-h6 font-weight-bold primary--text py-3">
                    {{ item.title }}
                  </h3>
                  <p>
                    {{ item.description }}
                  </p>

                  <div class="d-flex align-center">
                    <v-avatar color="accent" size="24">
                      <v-img :src="getAuthorFromRecipe(item.author).image"></v-img>
                    </v-avatar>

                    <div class="pl-2">{{ getAuthorFromRecipe(item.author).email }} · {{ item.date }}</div>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="pt-4">
      <h3 class="text-h5 font-weight-medium pb-4">Top Authors</h3>

      <v-divider></v-divider>

        <div class="pt-4">
          <v-card v-for="item in authors" :key="item.users_UID" class="d-flex align-center mb-4"
                  flat
                  hover
                  to="/authors">
            <v-avatar color="accent" size="64">
              <v-img :src="item.image"></v-img>
            </v-avatar>

            <div class="pl-2">
              <div class="text-h6">{{ item.email }}</div>
              <div class="text-subtitle-1">2 Recipes</div>
            </div>
          </v-card>
        </div>
    </div>

    <v-divider></v-divider>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      recipes: [],
      authors: [],
      categories: [],
      randomId: '',
    }
  },
  methods: {
    async fetchData() {
      try {
        const recipeResponse = await axios.get(`http://localhost:3000/recipes/`);
        this.recipes = recipeResponse.data;
        console.log(this.recipes)
        const categoryResponse = await axios.get(`http://localhost:3000/categories/`);
        this.categories = categoryResponse.data;
        console.log(this.categories)
        const userResponse = await axios.get(`http://localhost:3000/users`);
        this.authors = userResponse.data;
        console.log(this.authors)
        this.generateRandomId(1, this.recipes.length-1);
      } catch (error) {
        console.log(error);
      }
    },
    generateRandomId(min, max) {
      this.randomID = Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getCategoryFromRecipe(categoryID){
      return this.categories[categoryID-1];
    },
    getAuthorFromRecipe(userID){
      return this.users[userID-1];
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
