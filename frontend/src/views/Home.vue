<template>
  <div>
    <div>
      <v-card :to="'/recipes/'+randomId">
        <v-img
            :aspect-ratio="16 / 9"
            dark
            gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
            height="500px"
            :src=recipes[randomId].img
        >
          <v-card-text class="fill-height d-flex align-end">
            <v-row class="flex-column">
              <v-col cols="12" lg="8" md="10" xl="7">
                <h2 class="text-h3 py-3" style="line-height: 1.0">
                 {{ recipes[randomId].title }}
                </h2>
              </v-col>
              <v-col>
                <v-btn v-for="item in recipes[randomId].categories" :key="item" color="accent" to="categories" style="margin-right: 10px;">{{ item }}</v-btn>
              </v-col>
              <v-col class="d-flex align-center">
                <v-avatar class="elevation-4" color="accent">
                  <v-img :src="recipes[randomId].author.image"></v-img>
                </v-avatar>

                <div class="text-h6 pl-2">{{ recipes[randomId].author.name }} · {{ recipes[randomId].date }}</div>
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
              <v-col v-for="item in recipes.slice(0,6)" :key="item.id" cols="12" lg="4" md="6">
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
                        :to="'/recipes/' + item.id"
                    >
                      <v-img
                          :aspect-ratio="16 / 9"
                          class="elevation-2"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                          height="200px"
                          :src=item.img
                          style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="accent" to="categories">
                            {{ item.categories[0] }}
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
                            <v-img :src="item.author.image"></v-img>
                          </v-avatar>

                          <div class="pl-2">{{ item.author.name }} · {{ item.date }}</div>
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
              <v-row v-for="item in sortByDate(recipes, 3)" :key="item.id" class="py-4">
                <v-col md="6">
                  <v-card height="100%"
                          :color="hover ? 'white' : 'transparent'"
                          :elevation="hover ? 12 : 0"
                          flat
                          hover
                          :to="'/recipes/' + item.id">
                    <v-img
                        :aspect-ratio="16 / 9"
                        :src=item.img
                    ></v-img>

                <v-col>
                  <div>
                    <v-btn v-for="element in item.categories" :key="element" color="accent" style="margin-right: 10px;" depressed to="/categories">{{ element }}</v-btn>

                    <h3 class="text-h4 font-weight-bold pt-3">
                      {{ item.title }}
                    </h3>

                    <p class="text-h6 font-weight-regular pt-3 text--secondary">
                      {{ item.description }}
                    </p>

                    <div class="d-flex align-center">
                      <v-avatar color="accent" size="36">
                        <v-img :src=item.author.image></v-img>
                      </v-avatar>

                      <div class="pl-2">{{ item.author.name }} · {{ item.date }}</div>
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
import { recipes, authors, categories, sortByDate, randomId, random } from '../resources/js/data';

export default {
  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
  data(){
    return {
      recipes: recipes,
      authors: authors,
      categories: categories,
      sortByDate: sortByDate,
      randomId: randomId,
      random: random,
    }
  }
};
</script>
