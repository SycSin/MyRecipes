<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <div>
              <h2 class="text-h3 font-weight-bold">Kategorien</h2>

              <h4 class="text-h6">Hier findest du die Kategorien und deren dazugehörige Rezepte gelistet.</h4>
            </div>

            <v-divider class="my-4"></v-divider>

            <v-row>
              <v-col cols="12" md="2" lg="4" v-for="category in categories" :key="category.id">
                <h2 class="text-h4 font-weight-bold" style="margin-bottom: 20px;">{{ category.name }}</h2>
                <div v-for="item in getRecipesByCategory(category)" :key="item.id">
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
                          :to="'/recipe/'+item.id"
                      >
                        <v-img
                            :src=item.img
                            :aspect-ratio="16 / 9"
                            gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                            height="200px"
                            class="elevation-2"
                            style="border-radius: 16px"
                        >
                          <v-card-text>
                            <v-btn color="accent" to="/categories/">{{ item.categories[0] }}</v-btn>
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
                              <v-img :src=item.author.image></v-img>
                            </v-avatar>

                            <div class="pl-2">{{ item.author.name }} · {{ item.date }}</div>

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
import { recipes, authors, categories, getRecipesByCategory } from '../resources/js/data';

export default {
  name: "Kategorien",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
  data(){
    return {
      recipes: recipes,
      authors: authors,
      categories: categories,
      getRecipesByCategory: getRecipesByCategory,
    }
  },
};
</script>
