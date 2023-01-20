<template>
  <div>
    <div>
      <v-card :to="'/recipes/'+randomID">
        <v-img
            :aspect-ratio="16 / 9"
            dark
            gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
            height="500px"
            :src=this.recipes[randomID].image
        >
          <v-card-text class="fill-height d-flex align-end">
            <v-row class="flex-column">
              <v-col cols="12" lg="8" md="10" xl="7">
                <h2 class="text-h3 py-3" style="line-height: 1.0">
                 {{ this.recipes[randomID].title }}
                </h2>
              </v-col>
              <v-col>
                <v-btn :key="this.recipes[randomID].category" color="accent" to="categories" style="margin-right: 10px;">{{ getCategoryFromRecipe(this.recipes[randomID].category).name }}</v-btn>
              </v-col>
              <v-col class="d-flex align-center">
                <v-avatar class="elevation-4" color="accent">
                  <v-img :src="getAuthorFromRecipe(this.recipes[randomID].author).image"></v-img>
                </v-avatar>

                <div class="text-h6 pl-2">{{ this.recipes[randomID].name }} · {{ this.recipes[randomID].date }}</div>
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
            <h2 class="text-h4 font-weight-bold pb-4">Persönliche Vorschläge</h2>
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

                          <div class="pl-2">{{ getAuthorFromRecipe(item.author).email }} · {{ item.date }}</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </div>

          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold">Neueste Rezepte</h2>

            <div>
              <v-row v-for="item in sortByDate(this.recipes, 3)" :key="item.recipes_UID" class="py-4">
                <v-col md="6">
                  <v-card height="100%"
                          :color="hover ? 'white' : 'transparent'"
                          :elevation="hover ? 12 : 0"
                          flat
                          hover
                          :to="'/recipes/' + item.recipes_UID">
                    <v-img
                        :aspect-ratio="16 / 9"
                        :src=item.image
                    ></v-img>

                <v-col>
                  <div>
                    <v-btn :key="item.category" color="accent" style="margin-right: 10px;" depressed to="/categories">{{ item.category }}</v-btn>

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

                      <div class="pl-2">{{ getAuthorFromRecipe(item.author).email }} · {{ item.date }}</div>
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
import { sortByDate, randomId, random } from '../resources/js/data';
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
      sortByDate: sortByDate,
      random: random,
      randomID: ''
    }
  },
  async created() {
    // Fetch the data before rendering
    await this.getRecipes()
    await this.getCategories()
    await this.getUsers()
    await this.generateRandomID(1, this.recipes.length)

  },
  methods: {
    async getRecipes() {
      try {
        const response = await axios.get(`http://localhost:3000/recipes/`)
        this.recipes = response.data
        console.log(this.recipes)
      } catch (error) {
        console.log(error)
      }
    },
    async getCategories() {
      try {
        const response = await axios.get(`http://localhost:3000/categories/`)
        this.categories = response.data
        console.log(this.categories)
      } catch (error) {
        console.log(error)
      }
    },
    async getUsers() {
      try {
        const response = await axios.get(`http://localhost:3000/users/`)
        this.users = response.data
        console.log(this.users)
      } catch (error) {
        console.log(error)
      }
    },
    generateRandomID(min, max){
      this.randomID = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log("This is in generateRandomID "+randomId)
      return this.randomID
    },
    getCategoryFromRecipe(categoryID){
      return this.categories[categoryID-1]
    },
    getAuthorFromRecipe(userID){
      return this.users[userID-1];
    }
  }
};
</script>
