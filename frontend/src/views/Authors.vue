<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <div class="my-2">
              <h2 class="text-h4 font-weight-bold">Our Authors</h2>
            </div>

            <v-row>
              <v-col cols="12" md="6" v-for="item in authors" :key="item.id">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >
                  <div>
                    <v-card
                      flat
                      :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 12 : 0"
                      hover
                    >
                      <v-img
                        :src=item.image
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="700px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      ></v-img>

                      <v-card-text class="text-center">
                        <v-avatar color="accent" size="86" class="authors">
                          <v-img :src=item.image></v-img>
                        </v-avatar>

                        <div
                          class="text-h5 font-weight-bold primary--text pt-4"
                        >
                          {{ item.name }}
                        </div>

                        <div class="text-body-1 py-4">
                          {{ item.description }}
                        </div>

                        <div>
                          <v-btn icon>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn icon>
                            <v-icon>mdi-twitter</v-icon>
                          </v-btn>

                          <v-btn icon>
                            <v-icon>mdi-youtube</v-icon>
                          </v-btn>

                          <v-btn icon>
                            <v-icon>mdi-instagram</v-icon>
                          </v-btn>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
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

import { authors } from '../resources/js/data';

export default {
    name: "Authors",
    components: {
    },
    data(){
      return {
        authors: authors,
      }
    }
  };
</script>

<style lang="scss" scoped>
.authors {
  position: relative;
  top: -50px;
  margin-bottom: -50px;
}
</style>
