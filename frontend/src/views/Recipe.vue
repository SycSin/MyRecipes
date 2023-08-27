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

                    <div class="pl-2 text-body-1">{{ user.email }} · {{ getDateFromRecipe() | formatDate }}</div>
                  </div>

                  <div class="d-flex align-center">
                    <div>
                      <v-chip color="transparent" small>
                        <v-icon left>mdi-eye</v-icon>
                        1.2k
                      </v-chip>

                      <v-chip color="transparent" small>
                        <v-icon left>mdi-heart-outline</v-icon>
                        47
                      </v-chip>
                    </div>
                  </div>
                </div>

                <v-divider class="my-4"></v-divider>

                <v-btn @click="getNutrients" color="accent"> Display Nutrients </v-btn>
                <div class="text-h5 primary--text font-weight-bold" v-if="nutrients">
                  <h4 v-if="nutrients.length > 0">
                    <br/> Nutrients:
                  </h4>
                  <div class="text-subtitle-1 primary--text font-weight-medium mt-5">
                    <ul>
                      <li v-for="item in nutrients">
                        {{ item.label }} : {{ item.quantity }} {{ item.unit }}
                      </li>
                    </ul>
                  </div>
                </div>
                <br/>

                <div class="text-h5 primary--text font-weight-bold">
                  Ingredients:
                  <div class="text-subtitle-1 primary--text font-weight-medium mt-5">
                    <ul>
                      <li v-for="item in recipe.ingredients.split(',')">
                        {{ item }}
                      </li>
                    </ul>
                    </div>
                </div>

                <br/>
                <div class="text-h5 primary--text font-weight-bold">
                  Steps:
                  <div class="text-subtitle-1 primary--text font-weight-medium mt-5">
                    <ul>
                      {{ recipe.steps }}
                    </ul>
                  </div>
                </div>
                <slot name="calendarAppPrint">
                  <v-btn
                      class="ds-add-event-today"
                      color="primary2"
                      style="margin-top: 60px"
                      right
                      bottom
                      @click="print"
                  >
                    <v-icon>mdi-printer</v-icon>
                  </v-btn>
                </slot>


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
                          Hi! I hope you like my recipe!
                        </div>

                        <div class="text-subtitle-1">
                          Follow me >
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
                              @click="redirectAndReload('/recipes/'+getPrev().recipes_UID)"
                              >
                        <div class="d-flex align-center">
                          <div>
                            <v-icon>mdi-arrow-left</v-icon>
                          </div>

                          <div class="text-h6 primary--text pl-2">
                            <div class="text-subtitle-1">Previous Recipe</div>
                            {{ this.getPrev().title }}
                            <p class="text--secondary">
                              by {{ getAuthorFromRecipe(this.getPrev().author).email }}
                            </p>
                          </div>
                        </div>
                      </v-card>
                    </v-col>

                    <v-col cols="12" lg="4" md="6">
                      <v-card flat
                              hover
                              @click="redirectAndReload('/recipes/'+getNext().recipes_UID)">
                        <div class="d-flex align-center text-right">
                          <div class="text-h6 primary--text pr-2">
                            <div class="text-subtitle-1">Next Recipe</div>
                            {{ this.getNext().title }}
                            <br>
                            <p class="text--secondary">
                              by {{ getAuthorFromRecipe(this.getNext().author).email }}
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
import axios from "axios"

export default {
  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
  data() {
    return {
      nutrients: [],
      ingredients: [],
      recipe: [],
      recipes: [],
      categories: [],
      category: [],
      user: [],
      users: [],
    }
  },
  methods: {
    async getNutrients() {
      this.ingredients = this.recipe.ingredients.split(",");
      await axios({
        method: 'post',
        url: 'https://api.edamam.com/api/nutrition-details',
        params: {
          app_id: "98865d34",
          app_key: "7a1d80dc680e7c8c1349d5a92b542102"
        },
        data: {
          ingr: this.ingredients
        }
      }).then(response => {
        const energy = response.data.totalNutrients.ENERC_KCAL;
        energy.quantity = Math.round(energy.quantity)
        const protein = response.data.totalNutrients.PROCNT;
        protein.quantity = Math.round(protein.quantity)
        const fat = response.data.totalNutrients.FAT;
        fat.quantity = Math.round(fat.quantity)
        fat.label = "Fat";
        const carbs = response.data.totalNutrients.CHOCDF;
        carbs.quantity = Math.round(carbs.quantity)
        carbs.label = "Carbohydrates";
        this.nutrients.push(energy, protein, fat, carbs)
        }
      )
    },
    async fetchData() {
      try {
        const recipeResponse = await axios.get(`https://myrecipes-backend.myrecipes.svc.cluster.local:3000/recipes`);
        this.recipes = recipeResponse.data;
        const categoryResponse = await axios.get(`https://myrecipes-backend.myrecipes.svc.cluster.local:3000/categories`);
        this.categories = categoryResponse.data;
        const userResponse = await axios.get(`https://myrecipes-backend.myrecipes.svc.cluster.local:3000/users`);
        this.users = userResponse.data;

        axios.get(`https://myrecipes-backend.myrecipes.svc.cluster.local:3000/recipes/${this.$route.params.id}`)
            .then(response => {
              this.recipe = response.data[0]
              axios.get(`https://myrecipes-backend.myrecipes.svc.cluster.local:3000/categories/${this.recipe.category}`)
                  .then(response => {
                    this.category = response.data[0]
                  })
                  .catch(error => {
                    console.log(error)
                  })
              axios.get(`https://myrecipes-backend.myrecipes.svc.cluster.local:3000/users/${this.recipe.author}`)
                  .then(response => {
                    this.user = response.data[0]
                  })
                  .catch(error => {
                    console.log(error)
                  })
            });
      } catch (error) {
        console.log(error);
      }
    },
    getDateFromRecipe() {
      this.date = new Date(this.recipe.date)
      return this.date;
    },
    getAuthorFromRecipe(userID) {
      return this.users[userID-1];
    },
    getPrev() {
      let currentIndex = this.recipes.findIndex(element => element.recipes_UID === this.recipe.recipes_UID);
      let prevIndex = (currentIndex + this.recipes.length - 1) % this.recipes.length;
      return this.recipes[prevIndex];
    },
    getNext() {
      let currentIndex = this.recipes.findIndex(element => element.recipes_UID === this.recipe.recipes_UID);
      let nextIndex = (currentIndex + 1) % this.recipes.length;
      return this.recipes[nextIndex];
    },
    redirectAndReload(path){
      this.$router.push({path: `${path}`})
      location.reload();
    },
    print(){
      window.print();
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
