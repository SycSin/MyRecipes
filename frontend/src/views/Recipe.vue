<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            {{ getRecipe(1).title }}
            <v-card color="transparent" flat>
              <v-img
                  :aspect-ratio="16 / 9"
                  :src=getRecipe(1).image
                  gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                  style="border-radius: 16px"
              ></v-img>

              <v-card-text>

                <div class="text-h4 font-weight-bold primary--text pt-4">
                  <v-row>
                    <h4>{{ getRecipe(1).title }}</h4>
                    &nbsp;
                    <!--p v-for="i in getRecipe(1).rating" :key="i" class="pa-0" style="font-size: 20px;">
                      &#11088;
                    </p-->
                  </v-row>
                </div>
                <div>
                  <v-btn :key="getCategories(getRecipe(1).category).name" color="accent" style="margin-right: 5px;" to="/categories/">
                    {{ getCategories(getRecipe(1).category).name }}
                  </v-btn>
                </div>

                <div class="text-body-1 py-4">
                  {{ getRecipe(1).description }}
                </div>

                <div class="d-flex align-center justify-space-between">
                  <div class="d-flex align-center">
                    <v-avatar color="accent" size="36">
                      <v-img :src="getUser(getRecipe(1).author).image"></v-img>
                    </v-avatar>

                    <div class="pl-2 text-body-1">{{ getUser(getRecipe(1).author).email }} · {{ getRecipe(1).date }}</div>
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


                <v-btn @click="getNutrients" color="accent">Nährwerte Anzeigen </v-btn>

                <div class="text-h5 primary--text font-weight-bold" v-if="nutrients">
                  Nährwerte:
                  <div class="text-subtitle-1 primary--text font-weight-medium mt-5">
                    <ul>
                      <li v-for="item in nutrients">
                        {{ item.label }} : {{ item.quantity }} {{ item.unit }}
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="text-h5 primary--text font-weight-bold">
                  Zutaten:
                  <div class="text-subtitle-1 primary--text font-weight-medium mt-5">
                    <ul>
                      {{ getRecipe(1).ingredients }}
                    </ul>
                    </div>
                </div>


                <div class="text-h5 primary--text font-weight-bold">
                  Schritte:
                  <div class="text-subtitle-1 primary--text font-weight-medium mt-5">
                    <ul>
                      <li class="my-2"> {{ getRecipe(1).steps }} </li>
                    </ul>
                  </div>
                </div>

                <div class="d-flex align-center justify-space-between mt-8">
                  <div class="text-h5">
                    <span class="accent--text">
                      Rezept teilen >
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
                        <v-img :src="getUser(getRecipe(1).author).image"></v-img>
                      </v-avatar>

                      <div class="pl-4">
                        <div class="text-h5 primary--text font-weight-bold">
                          <span class="accent--text">{{ getUser(getRecipe(1).author).email }}</span>
                        </div>

                        <div class="text-subtitle-1 my-2">
                          Hi! I am {{ getUser(getRecipe(1).author).email }}!
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
                            {{ getRecipe(3).title }}
                            <p class="text--secondary">
                              <!-- von {{ getUser(getRecipe(anotherRandomId()).author).email }} -->
                              von {{ getUser(getRecipe(3).author).email }}
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
                            {{ getRecipe(2).title }}
                            <br>
                            <p class="text--secondary">
                              <!-- von {{ getUser(getRecipe(randomId).author).email }} -->
                              von {{ getUser(getRecipe(2).author).email }}
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
      recipe: ''
    }

  },
  methods: {
    async getNutrients(){
      let recipe = this.getRecipe(1).ingredients;
      await axios({
        method: 'post',
        url: 'https://api.edamam.com/api/nutrition-details',
        params: {
          app_id:"98865d34",
          app_key:"7a1d80dc680e7c8c1349d5a92b542102"
        },
        data: {
          ingr: recipe
        }
      }).then(response => (this.nutrients=response.data.totalNutrientsKCal))
    },
    async getRecipe(id) {
      try {
        const response = await axios.get(`http://localhost:3000/recipes/${id}`);
        this.recipe = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getUser(id) {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        this.recipe = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getCategories(id) {
      try {
        const response = await axios.get(`http://localhost:3000/categories/${id}`);
        this.recipe = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
