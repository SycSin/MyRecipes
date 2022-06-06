<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <v-card color="transparent" flat>
              <v-img
                  :aspect-ratio="16 / 9"
                  :src=recipes[0].img
                  gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                  style="border-radius: 16px"
              ></v-img>

              <v-card-text>

                <div class="text-h4 font-weight-bold primary--text pt-4">
                  <v-row>
                    <h4>{{ recipes[0].title }}</h4>
                    &nbsp;
                    <p v-for="i in recipes[0].rating" :key="i" class="pa-0" style="font-size: 20px;">
                      &#11088;
                    </p>
                  </v-row>
                </div>
                <div>
                  <v-btn v-for="item in recipes[0].categories" :key="item" color="accent" style="margin-right: 5px;">
                    {{ item }}
                  </v-btn>
                </div>

                <div class="text-body-1 py-4">
                  {{ recipes[0].description }}
                </div>

                <div class="d-flex align-center justify-space-between">
                  <div class="d-flex align-center">
                    <v-avatar color="accent" size="36">
                      <v-img :src="recipes[0].author.image"></v-img>
                    </v-avatar>

                    <div class="pl-2 text-body-1">{{ recipes[0].author.name }} · {{ recipes[0].date }}</div>
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

                <div>
                  <!--b-table stacked :items="recipes[0].ingredients"></b-table-->
                </div>


                <div class="text-h5 primary--text font-weight-bold">
                  Zutaten:
                  <p class="text-subtitle-1 primary--text font-weight-medium mt-5">
                  <ul>
                    <li> Mehl: 200 g</li>
                    <li> Zucker: 30 g</li>
                    <li> Salz: 1 Prise</li>
                    <li> Eier: 4 Stück</li>
                    <li> Milch: 330 ml</li>
                    <li> Butter: 40 g</li>
                    <li> Staubzucker: 1 Prise</li>
                  </ul>
                  </p>
                </div>


                <div class="text-h5 primary--text font-weight-bold">
                  Schritte:
                  <div class="text-subtitle-1 primary--text font-weight-medium mt-5">
                    <ul>
                      <li class="my-2">
                        Die Eier trennen und das Eiklar in einer Schüssel zum Schnee schlagen.
                      </li>

                      <li class="my-2">
                        Mehl, Ei-Dotter und Zucker mit einer Prise Salz in einer Schüssel verrühren.
                      </li>

                      <li class="my-2">
                        Das steifgeschlagene Eiklar in den Teig unterheben. 
                      </li>
                      
		      <li class="my-2">
                        Eine Pfanne mit Butter befetten und anschließen erhitzen.
                      </li>

                      <li class="my-2">
                        Sobald die Pfanne erhitzt ist, den Teig hineingießen und bei mittlerer Hitze
                        gold-braun anbraten.
                      </li>

                      <li class="my-2">
                        Den angebratenen Teig in Vierteln schneiden und anschließend wenden.
                      </li>

                      <li class="my-2">
                        Die gewendeten Stücke auf der Unterseite leicht anbraten lassen und in einzelne Teile reißen.
                      </li>

                      <li class="my-2">
                        Zur Zubereitung den Kaiserschmarrn noch mit einer Prise Staubzucker verfeinern und genießen. :)
                      </li>
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
                        <v-img :src="recipes[0].author.image"></v-img>
                      </v-avatar>

                      <div class="pl-4">
                        <div class="text-h5 primary--text font-weight-bold">
                          <span class="accent--text">{{ recipes[0].author.name }}</span>
                        </div>

                        <div class="text-subtitle-1 my-2">
                          {{ recipes[0].author.description }}
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
                              to="/recipe/anotherRandomId">
                        <div class="d-flex align-center">
                          <div>
                            <v-icon>mdi-arrow-left</v-icon>
                          </div>

                          <div class="text-h6 primary--text pl-2">
                            <div class="text-subtitle-1">Vorheriges Rezept</div>
                            {{ recipes[anotherRandomId()].title }}
                            <p class="text--secondary">
                              von {{ recipes[anotherRandomId()].author.name }}
                            </p>
                          </div>
                        </div>
                      </v-card>
                    </v-col>

                    <v-col cols="12" lg="4" md="6">
                      <v-card flat
                              hover
                              to="/recipe/randomId">
                        <div class="d-flex align-center text-right">
                          <div class="text-h6 primary--text pr-2">
                            <div class="text-subtitle-1">Nächstes Rezept</div>
                            {{ recipes[randomId].title }}
                            <br>
                            <p class="text--secondary">
                              von {{ recipes[randomId].author.name }}
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
import {recipes, authors, categories, randomId, anotherRandomId, random} from '../resources/js/data';

export default {
  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
  data() {
    return {
      recipes: recipes,
      authors: authors,
      categories: categories,
      randomId: randomId,
      anotherRandomId: anotherRandomId,
      random: random,
    }
  }
};
</script>
