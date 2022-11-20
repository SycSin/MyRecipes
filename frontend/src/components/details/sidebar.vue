<template>
  <div>
    <div>
      <h3 class="text-h5 font-weight-medium pb-4">Populäre Rezepte</h3>

      <v-divider></v-divider>

      <div>
        <v-row v-for="item in recipes.slice(0,4).reverse()" :key="item.id" class="py-2">
          <v-col cols="12" lg="10" md="6">
            <div>
              <v-card :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 12 : 0"
                      flat
                      height="100%"
                      hover
                      :to="'/recipe/'+item.id">
                <v-img
                    :aspect-ratio="16 / 9"
                    :src="item.img"
                    class="elevation-2"
                    gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                ></v-img>

                <div>
                  <v-btn v-for="category in item.categories" color="accent" depressed small to="/categories" style="margin-right: 2px;">{{ category }}</v-btn>

                  <h3 class="text-h6 font-weight-bold primary--text py-3">
                    {{ item.title }}
                  </h3>
                  <p>
                    {{ item.description }}
                  </p>

                  <div class="d-flex align-center">
                    <v-avatar color="accent" size="24">
                      <v-img :src="item.author.image"></v-img>
                    </v-avatar>

                    <div class="pl-2">{{ item.author.name }} · {{ item.date }}</div>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="pt-4">
      <h3 class="text-h5 font-weight-medium pb-4">Top Authoren</h3>

      <v-divider></v-divider>

        <div class="pt-4">
          <v-card v-for="item in authors" :key="item.id" class="d-flex align-center mb-4"
                  flat
                  hover
                  to="/authors">
            <v-avatar color="accent" size="64">
              <v-img :src="item.image"></v-img>
            </v-avatar>

            <div class="pl-2">
              <div class="text-h6">{{ item.name }}</div>
              <div class="text-subtitle-1">{{ random() + 2 }} Rezepte</div>
            </div>
          </v-card>
        </div>
    </div>

    <v-divider></v-divider>

  </div>
</template>

<script>

import {recipes, authors, categories, randomId, random} from '../../resources/js/data';

export default {
  data() {
    return {
      recipes: recipes,
      authors: authors,
      categories: categories,
      randomId: randomId,
      random: random,
    }
  }
};
</script>
