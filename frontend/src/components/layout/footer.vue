<template>
  <div>
    <v-card absolute app color="primary" dark flat>
      <v-container>
        <v-row align="start">
          <v-col cols="12" md="3">
            <h4 class="text-h5 font-weight-bold">
              MyRecipes
            </h4>
            <p class="text-body-1">
              Create recipes and share them with the world. Plan your meals and save it to your calendar.
            </p>
          </v-col>

          <v-col cols="12" md="3">
            <v-list color="transparent" flat>
              <v-subheader class="text-h6">Team</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                    v-for="(item, i) in team"
                    :key="i"
                    :href="item.href"
                    dense
                    target="_black"
                    color="white"
                >
                  <v-list-item-content>
                    <v-list-item-title
                        class="text-body-1"
                        v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col cols="12" md="3">
            <v-list color="transparent" flat>
              <v-subheader class="text-h6">MyRecipes</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                    v-for="(item, i) in shock"
                    :key="i"
                    :href="item.href"
                    dense
                    target="_black"
                    color="white"
                >
                  <v-list-item-content>
                    <v-list-item-title
                        class="text-body-1"
                        v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>


          <v-col cols="12" md="3">
            <v-list color="transparent" flat>
              <v-subheader class="text-h6">Impressum</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                    v-for="(item, i) in impressum"
                    :key="i"
                    :href="item.href"
                    dense
                    target="_black"
                    color="white"
                >
                  <v-list-item-content>
                    <v-list-item-title
                        class="text-body-1"
                        v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>


        </v-row>

        <div class="text-center mt-6">
          Copyright &copy;
          <a
              class="white--text"
              href="https://www.myrecipes.at"
              rel="noopener noreferrer"
              target="_blank"
          >MyRecipes</a
          >
          {{ new Date().getFullYear() }}. All rights reserved.
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    team: [
      {
        text: "SycSin",
        href: "https://github.com/SycSin"
      },
      {
        text: "tacsi566",
        href: "https://github.com/tacsi566"
      }
    ]
    ,
    shock: [
      {
        text: "Github",
        href: "https://github.com/SycSin/MyRecipes.git",
      },
      {
        text: "Issues",
        href: "https://github.com/SycSin/MyRecipes.git/issues",
      },
      {
        text: "LICENSE",
        href: "https://github.com/AGDholo/giraffe/blob/master/LICENSE",
      },
    ],
    impressum: [
      {
        text: "FH Campus Wien",
        href: "https://www.fh-campuswien.ac.at/"
      },
      {
        text: "Favoritenstraße 226",
        href: "https://goo.gl/maps/yz8hisW4vxPKhpiu7"
      },
      {
        text: "1100 Wien",
        href: "https://goo.gl/maps/yz8hisW4vxPKhpiu7"
      }
    ]
  }),
};
</script>
