<template>
  <div>
    <div>
      <h3 class="text-h5 font-weight-medium pb-4">Popular Recipes</h3>

      <v-divider></v-divider>

      <div>
        <v-row v-for="item in this.recipes.slice(1, 5).reverse()" :key="item.recipes_UID" class="py-2">
          <v-col cols="12" lg="10" md="6">
            <div>
              <v-card height="100%"
                      :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 12 : 0"
                      flat
                      hover
                      @click="redirectAndReload('/recipes/'+item.recipes_UID)">
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

                    <div class="pl-2">{{ getDateFromRecipe(item.recipes_UID) | formatDate }}</div>
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
          <v-card v-for="item in sortByNrOfRecipes()" :key="item.users_UID" class="d-flex align-center mb-4"
                  flat
                  hover
                  to="/authors">
            <v-avatar color="accent" size="64">
              <v-img :src="item.image"></v-img>
            </v-avatar>

            <div class="pl-2">
              <div class="text-h6">{{ item.email }}</div>
              <div class="text-subtitle-1">{{ getNrOfRecipesFromAuthor(item.users_UID) }} Recipes</div>
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
      date: Date,
    }
  },
  methods: {
    async fetchData() {
      try {
        const recipeResponse = await axios.get(`http://localhost:3000/recipes/`);
        this.recipes = recipeResponse.data;
        const categoryResponse = await axios.get(`http://localhost:3000/categories/`);
        this.categories = categoryResponse.data;
        const userResponse = await axios.get(`http://localhost:3000/users`);
        this.authors = userResponse.data;
      } catch (error) {
        console.log(error);
      }
    },
    redirectAndReload(path){
      this.$router.push({path: `${path}`})
      location.reload();
    },
    getCategoryFromRecipe(categoryID){
      return this.categories[categoryID-1];
    },
    getAuthorFromRecipe(userID){
      return this.authors[userID-1];
    },
    getDateFromRecipe(recipeID) {
      this.date = new Date(this.recipes[recipeID - 1].date)
      return this.date;
    },
    getNrOfRecipesFromAuthor(authorID) {
      return this.recipes.filter(element => element.author === authorID).length;
    },
    sortByNrOfRecipes(){
      let authorsWithRecipeCount = this.authors.map(author => {
        let recipeCount = this.recipes.filter(recipe => recipe.author === author.uid).length;
        return {...author, recipeCount};
      });

      return authorsWithRecipeCount.sort((a, b) => b.recipeCount - a.recipeCount).slice(0,5)
    }
  },
  created() {
    this.fetchData();
  },
  filters: {
    formatDate(value) {
      return value.toLocaleDateString("en-UK", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  }
};
</script>
