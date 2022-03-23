<template>
  <div>
    <div>
      <v-card to="detail">
        <v-img
            :aspect-ratio="16 / 9"
            dark
            gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
            height="500px"
            src="https://img.taste.com.au/vEJ9w_Zy/w720-h480-cfill-q80/taste/2019/02/healthy-tuna-mornay-153401-1.jpg"
        >
          <v-card-text class="fill-height d-flex align-end">
            <v-row class="flex-column">
              <v-col>
                <v-btn color="accent" to="category">Recipe</v-btn>
              </v-col>
              <v-col cols="12" lg="8" md="10" xl="7">
                <h2 class="text-h3 py-3" style="line-height: 1.2">
                  Healthy Tuna Mornay
                </h2>
              </v-col>
              <v-col class="d-flex align-center">
                <v-avatar class="elevation-4" color="accent">
                  <v-icon large>mdi-feather</v-icon>
                </v-avatar>

                <div class="text-h6 pl-2">Vorname Nachname · 23 Feb 2022</div>
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
            <h2 class="text-h4 font-weight-bold pb-4">Recommended For You</h2>

            <v-row>
              <v-col v-for="i in 6" :key="i" cols="12" lg="4" md="6">
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
                        to="/detail"
                    >
                      <v-img
                          :aspect-ratio="16 / 9"
                          class="elevation-2"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                          height="200px"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iUfICWyjri-xEfJAy3G7viql5bLCSy3nfA&usqp=CAU"
                          style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="accent" to="category">TIPS</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                          Burgers and Wraps for the perfect party.
                        </div>

                        <div class="text-body-1 py-4">
                          Looking for a nice snack for your next party?
                          Then this is the recipe for you!
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="accent" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">Vorname Nachname · 23 Feb 2022</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </div>

          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold pb-4">Featured</h2>

            <v-row>
              <v-col v-for="i in 3" :key="i" cols="6" lg="4">
                <v-card dark flat>
                  <v-img
                      :aspect-ratio="16 / 9"
                      class="elevation-2 fill-height"
                      gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                      height="600px"
                      src="https://www.viennafood.at/images/cover/cover-2.jpg"
                  >
                    <div
                        class="d-flex flex-column justify-space-between fill-height"
                    >
                      <v-card-text>
                        <v-btn color="accent">ANIMALS</v-btn>
                      </v-card-text>

                      <v-card-text>
                        <div
                            class="text-h5 py-3 font-weight-bold"
                            style="line-height: 1.2"
                        >
                          15 things I have always wondered about birds
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="accent" size="36">
                            <v-icon dark>mdi-feather</v-icon>
                          </v-avatar>

                          <div class="pl-2">Vorname Nachname · 23 Feb 2022</div>
                        </div>
                      </v-card-text>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold">Latest Posts</h2>

            <div>
              <v-row v-for="i in 6" :key="i" class="py-4">
                <v-col cols="12" md="4">
                  <v-card flat height="100%">
                    <v-img
                        :aspect-ratio="16 / 9"
                        height="100%"
                        src="https://www.viennafood.at/theme/vienna/images/lasagne.jpg"
                    ></v-img>
                  </v-card>
                </v-col>

                <v-col>
                  <div>
                    <v-btn color="accent" depressed>Recipe</v-btn>

                    <h3 class="text-h4 font-weight-bold pt-3">
                      Ut enim blandit volutpat maecenas volutpat blandit
                    </h3>

                    <p class="text-h6 font-weight-regular pt-3 text--secondary">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>

                    <div class="d-flex align-center">
                      <v-avatar color="accent" size="36">
                        <v-icon dark>mdi-feather</v-icon>
                      </v-avatar>

                      <div class="pl-2">Vorname Nachname · 22 Jan 2022</div>
                    </div>
                  </div>
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
export default {
  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
};
</script>
