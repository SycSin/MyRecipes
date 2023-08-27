<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <div>
              <h2 class="text-h3 font-weight-bold">Categories</h2>

              <h4 class="text-h6">Here you can find the categories with their corresponding recipes</h4>
            </div>

            <v-divider class="my-4"></v-divider>

            <v-row>
              <v-col cols="12" md="2" lg="4" v-for="category in categories" :key="category.categories_UID">
                <h2 class="text-h4 font-weight-bold" style="margin-bottom: 20px;">{{ category.name }}</h2>
                <div v-for="item in getRecipesFromCategory(category.categories_UID)" :key="item.name">
                    <v-hover
                    v-slot:default="{ hover }"
                    open-delay="50"
                    close-delay="50"
                    >
                      <v-card
                          flat
                          :color="hover ? 'white' : 'transparent'"
                          :elevation="hover ? 12 : 0"
                          hover
                          style="margin-bottom: 15px;"
                          :to="'/recipes/'+item.recipes_UID"
                      >
                        <v-img
                            :src=item.image
                            :aspect-ratio="16 / 9"
                            gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                            height="200px"
                            class="elevation-2"
                            style="border-radius: 16px"
                        >
                          <v-card-text>
                            <v-btn color="accent" to="/categories/">{{ getCategoryFromRecipe(item.category).name }}</v-btn>
                          </v-card-text>
                        </v-img>

                        <v-card-text>
                          <div class="text-h5 font-weight-bold primary--text">
                            {{ item.title }}
                          </div>

                          <div class="text-body-1 py-4">
                            {{ item.description }}
                          </div>

                          <div class="d-flex align-center">
                            <v-avatar color="accent" size="36">
                              <v-img :src=getAuthorFromRecipe(item.author).image></v-img>
                            </v-avatar>

                            <div class="pl-2">{{ getAuthorFromRecipe(item.author).email }} · {{ getDateFromRecipe(item.recipes_UID) | formatDate }}</div>

                          </div>
                        </v-card-text>
                      </v-card>
                    </v-hover>
                </div>
                <v-divider class="my-4"></v-divider>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>

      <v-col>
        <div>
          <siderbar />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Categories",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
  data() {
    return {
      recipes: [],
      categories: [],
      users: [],
    }
  },
  methods: {
    async fetchData() {
      try {
        const recipeResponse = await axios.get(`myrecipes-backend.myrecipes.svc.cluster.local:3000/recipes`);
        this.recipes = recipeResponse.data;
        const categoryResponse = await axios.get(`myrecipes-backend.myrecipes.svc.cluster.local:3000/categories`);
        this.categories = categoryResponse.data;
        const userResponse = await axios.get(`myrecipes-backend.myrecipes.svc.cluster.local:3000/users`);
        this.users = userResponse.data;
        this.generateRandomId(1, this.recipes.length - 1);
      } catch (error) {
        console.log(error);
      }
    },
    generateRandomId(min, max) {
      this.randomID = Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getCategoryFromRecipe(categoryID) {
      return this.categories[categoryID - 1];
    },
    getAuthorFromRecipe(userID) {
      return this.users[userID - 1];
    },
    sortByDate(collection, nrElements) {
      return collection.slice().sort((a, b) => {
        if (Date.parse(a.date) < Date.parse(b.date)) {
          console.log(a.date)
          return 1;
        } else if (Date.parse(a.date) > Date.parse(b.date)) {
          console.log(Date.parse(b.date))
          return -1;
        } else {
          return 0;
        }
      }).slice(0, nrElements);
    },
    getDateFromRecipe(recipeID) {
      this.date = new Date(this.recipes[recipeID - 1].date)
      return this.date;
    },
    getRecipesFromCategory(categoryID){
      let filteredRecipes = this.recipes.filter(recipe => recipe.category === categoryID)
      console.log(filteredRecipes)
      return filteredRecipes
    }
  },
  filters: {
    formatDate(value) {
      return value.toLocaleDateString("en-UK", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  },
  created() {
    this.fetchData();
  },
};
</script>
