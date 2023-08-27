<template>
  <div>
    <div>
      <v-card :to="'/recipes/'+randomID">
        <v-img
            :aspect-ratio="16 / 9"
            dark
            gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
            height="500px"
            :src=recipes[randomID-1].image
        >
          <v-card-text class="fill-height d-flex align-end">
            <v-row class="flex-column">
              <v-col cols="12" lg="8" md="10" xl="7">
                <h2 class="text-h3 py-3" style="line-height: 1.0">
                 {{ recipes[randomID-1].title }}
                </h2>
              </v-col>
              <v-col>
                <v-btn :key="getCategoryFromRecipe(recipes[randomID-1].category).name" color="accent" to="categories" style="margin-right: 10px;">{{ getCategoryFromRecipe(recipes[randomID-1].category).name }}</v-btn>
              </v-col>
              <v-col class="d-flex align-center">
                <v-avatar class="elevation-4" color="accent">
                  <v-img :src="getAuthorFromRecipe(recipes[randomID-1].author).image"></v-img>
                </v-avatar>

                <div class="text-h6 pl-2">{{ this.getAuthorFromRecipe(recipes[randomID-1].author).email }} · {{ getDateFromRecipe(this.recipes[randomID-1].recipes_UID) | formatDate }}</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-img>
      </v-card>
    </div>

    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold pb-4">Recommendations</h2>
            <v-row>
              <v-col v-for="item in this.recipes.slice(0,this.recipes.length+1)" :key="item.recipes_UID" cols="12" lg="4" md="6">
                <v-hover
                    v-slot:default="{ hover }"
                    close-delay="50"
                    open-delay="50"
                >
                  <div>
                    <v-card
                        :color="hover ? 'white' : 'transparent'"
                        :elevation="hover ? 12 : 0"
                        flat
                        hover
                        :to="'/recipes/' + item.recipes_UID"
                    >
                      <v-img
                          :aspect-ratio="16 / 9"
                          class="elevation-2"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                          height="200px"
                          :src=item.image
                          style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="accent" to="categories">
                            {{ getCategoryFromRecipe(item.category).name }}
                          </v-btn>
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
                            <v-img :src="getAuthorFromRecipe(item.author).image"></v-img>
                          </v-avatar>

                          <div class="pl-2">{{ getAuthorFromRecipe(item.author).email }} · {{ getDateFromRecipe(item.recipes_UID) | formatDate }}</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </div>

          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold">Recent Recipes</h2>

            <div>
              <v-row v-for="item in sortByDate(this.recipes, 3)" :key="item.recipes_UID" class="py-4">
                <v-col md="6">
                  <v-card height="100%"
                          :color="hover ? 'white' : 'transparent'"
                          :elevation="hover ? 12 : 0"
                          flat
                          hover
                          @click="redirectAndReload('/recipes/'+item.recipes_UID)">
                    <v-img
                        :aspect-ratio="16 / 9"
                        :src=item.image
                    ></v-img>

                <v-col>
                  <div>
                    <v-btn :key="getCategoryFromRecipe(item.category).name" color="accent" style="margin-right: 10px;" depressed to="/categories">{{ getCategoryFromRecipe(item.category).name }}</v-btn>

                    <h3 class="text-h4 font-weight-bold pt-3">
                      {{ item.title }}
                    </h3>

                    <p class="text-h6 font-weight-regular pt-3 text--secondary">
                      {{ item.description }}
                    </p>

                    <div class="d-flex align-center">
                      <v-avatar color="accent" size="36">
                        <v-img :src=getAuthorFromRecipe(item.author).image></v-img>
                      </v-avatar>

                      <div class="pl-2">{{ getAuthorFromRecipe(item.author).email }} · {{ getDateFromRecipe(item.recipes_UID) | formatDate }}</div>
                    </div>
                  </div>
                </v-col>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>

      <v-col>
        <div class="pt-16">
          <siderbar/>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
  data() {
    return {
      nutrients: '',
      ingredients: [],
      recipes: [],
      categories: [],
      users: [],
      randomID: ''
    }
  },
  methods: {
    async fetchData() {
      try {
        const recipeResponse = await axios.get(`http://myrecipes-backend.myrecipes.svc.cluster.local:3000/recipes`);
        this.recipes = recipeResponse.data;
        const categoryResponse = await axios.get(`http://myrecipes-backend.myrecipes.svc.cluster.local:3000/categories`);
        this.categories = categoryResponse.data;
        const userResponse = await axios.get(`http://myrecipes-backend.myrecipes.svc.cluster.local:3000/users`);
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
