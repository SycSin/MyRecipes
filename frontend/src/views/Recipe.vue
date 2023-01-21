<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <v-card color="transparent" flat>
              <v-img
                  :aspect-ratio="16 / 9"
                  :src=recipe.image
                  gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                  style="border-radius: 16px"
              ></v-img>

              <v-card-text>

                <div class="text-h4 font-weight-bold primary--text pt-4">
                  <v-row>
                    <h4>{{ recipe.title }}</h4>
                    &nbsp;
                    <p v-for="i in recipe.rating" :key="i" class="pa-0" style="font-size: 20px;">
                      &#11088;
                    </p>
                  </v-row>
                </div>
                <div>
                  <v-btn :key="category.name" color="accent" style="margin-right: 5px;" to="/categories/">
                    {{ category.name }}
                  </v-btn>
                </div>

                <div class="text-body-1 py-4">
                  {{ recipe.description }}
                </div>

                <div class="d-flex align-center justify-space-between">
                  <div class="d-flex align-center">
                    <v-avatar color="accent" size="36">
                      <v-img :src="user.image"></v-img>
                    </v-avatar>

                    <div class="pl-2 text-body-1">{{ user.email }} · {{ recipe.date }}</div>
                  </div>

                  <div class="d-flex align-center">
                    <div>
                      <v-chip color="transparent" small>
                        <v-icon left>mdi-eye</v-icon>
                        1.2k
                      </v-chip>

                      <v-chip color="transparent" small>
                        <v-icon left>mdi-comment-outline</v-icon>
                        7 Comment
                      </v-chip>
                    </div>
                  </div>
                </div>

                <v-divider class="my-4"></v-divider>


                <v-btn @click="getNutrients" color="accent"> Display Nutrients </v-btn>

                <div class="text-h5 primary--text font-weight-bold" v-if="nutrients">
                  Nutrients:
                  <div class="text-subtitle-1 primary--text font-weight-medium mt-5">
                    <ul>
                      <li v-for="item in nutrients">
                        {{ item.label }} : {{ item.quantity }} {{ item.unit }}
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="text-h5 primary--text font-weight-bold">
                  Ingredients:
                  <div class="text-subtitle-1 primary--text font-weight-medium mt-5">
                    <ul>
                      {{ recipe.ingredients }}
                    </ul>
                    </div>
                </div>


                <div class="text-h5 primary--text font-weight-bold">
                  Steps:
                  <div class="text-subtitle-1 primary--text font-weight-medium mt-5">
                    <ul>
                      <li class="my-2"> {{ recipe.steps }} </li>
                    </ul>
                  </div>
                </div>

                <div class="d-flex align-center justify-space-between mt-8">
                  <div class="text-h5">
                    <span class="accent--text">
                      Share >
                    </span>
                    <v-btn icon large>
                      <v-icon color="primary" large>mdi-facebook</v-icon>
                    </v-btn>

                    <v-btn icon large>
                      <v-icon color="primary" large>mdi-twitter</v-icon>
                    </v-btn>

                    <v-btn icon large>
                      <v-icon color="primary" large>mdi-instagram</v-icon>
                    </v-btn>
                  </div>
                </div>

                <v-divider class="my-8"></v-divider>

                <div class="my-8">
                  <v-card flat
                          hover
                          to="/authors">
                    <div class="d-flex align-center">
                      <v-avatar color="accent" size="128">
                        <v-img :src="user.image"></v-img>
                      </v-avatar>

                      <div class="pl-4">
                        <div class="text-h5 primary--text font-weight-bold">
                          <span class="accent--text">{{ user.email }}</span>
                        </div>

                        <div class="text-subtitle-1 my-2">
                          Hi! I am {{ user.email }}!
                        </div>

                        <div class="text-subtitle-1">
                          Schreib mir >
                          <v-btn icon>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn icon>
                            <v-icon>mdi-twitter</v-icon>
                          </v-btn>

                          <v-btn icon>
                            <v-icon>mdi-instagram</v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </div>

                <div>
                  <v-row justify="space-between">
                    <v-col cols="12" lg="4" md="6">
                      <v-card flat
                              hover
                              :to="'/recipes/'+3">
                              <!-- :to="'/recipes/'+anotherRandomId()"> -->
                        <div class="d-flex align-center">
                          <div>
                            <v-icon>mdi-arrow-left</v-icon>
                          </div>

                          <div class="text-h6 primary--text pl-2">
                            <div class="text-subtitle-1">Vorheriges Rezept</div>
                            <!-- {{ getRecipe(anotherRandomId()).title }} -->
                            {{ recipe.title }}
                            <p class="text--secondary">
                              <!-- von {{ getUser(getRecipe(anotherRandomId()).author).email }} -->
                              von {{ user.email }}
                            </p>
                          </div>
                        </div>
                      </v-card>
                    </v-col>

                    <v-col cols="12" lg="4" md="6">
                      <v-card flat
                              hover
                              :to="'/recipes/'+2">
                              <!-- :to="'/recipes/'+randomId"> -->
                        <div class="d-flex align-center text-right">
                          <div class="text-h6 primary--text pr-2">
                            <div class="text-subtitle-1">Nächstes Rezept</div>
                            <!-- {{ getRecipe(randomId).title }} -->
                            {{ recipe.title }}
                            <br>
                            <p class="text--secondary">
                              <!-- von {{ getUser(getRecipe(randomId).author).email }} -->
                              von {{ user.email }}
                            </p>
                          </div>

                          <div>
                            <v-icon>mdi-arrow-right</v-icon>
                          </div>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>

      <v-col>
        <div>
          <siderbar/>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import {recipes, author, category, randomId, anotherRandomId, random} from '../resources/js/data';
import axios from "axios"
export default {
  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
  data() {
    return {
      nutrients: '',
      ingredients: [],
      recipe: [],
      category: [],
      user: []
    }
  },
  created(){
    // Fetch the data before rendering
    axios.get(`http://localhost:3000/recipes/${this.$route.params.id}`)
      .then(response => {
        this.recipe = response.data[0]
        axios.get(`http://localhost:3000/categories/${this.recipe.category}`)
            .then(response => {
              this.category = response.data[0]
            })
            .catch(error => {
              console.log(error)
            })
        axios.get(`http://localhost:3000/users/${this.recipe.author}`)
            .then(response => {
              this.user = response.data[0]
            })
            .catch(error => {
              console.log(error)
        })
    })
  },
  methods: {
    async getNutrients(){
      this.ingredients = this.recipe.ingredients;
        await axios({
          method: 'post',
          url: 'https://api.edamam.com/api/nutrition-details',
          params: {
            app_id:"98865d34",
            app_key:"7a1d80dc680e7c8c1349d5a92b542102"
          },
          data: {
            ingr: this.ingredients
          }
        }).then(response => (this.nutrients=response.data.totalNutrientsKCal))
      },
    }
  };
</script>
