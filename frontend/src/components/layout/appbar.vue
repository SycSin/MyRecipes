<template>
  <div>
    <v-navigation-drawer
        v-if="!$vuetify.breakpoint.smAndUp"
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
        color="primary"
        dark
    >
      <v-list color="primary" nav>
        <v-list-item
            v-for="(item, i) in btnItems"
            :key="i"
            :href="item.href"
            :target="item.target"
            :to="item.to"
            link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
            v-for="(item, i) in barItems"
            :key="i"
            :href="item.href"
            :target="item.target"
            :to="item.to"
            link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="white"
        elevate-on-scroll
        flat
    >
      <v-container :class="{ 'px-0': !$vuetify.breakpoint.smAndUp }">
        <v-row
            :no-gutters="!$vuetify.breakpoint.smAndUp"
            align="center"
            justify="space-between"
        >
          <v-col class="d-flex align-center">
            <v-app-bar-nav-icon
                v-if="!$vuetify.breakpoint.mdAndUp"
                @click.stop="drawer = !drawer"
            />
            <v-toolbar-title
                class="font-weight-bold text-h5 primary--text"
                style="cursor: pointer"
                @click="$router.push('/')"
            >
              <v-icon color="primary" large>mdi-chef-hat</v-icon> My<span class="accent--text">Recipes</span>
            </v-toolbar-title>
          </v-col>

          <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="6">
            <v-btn
                v-for="(item, i) in barItems"
                :key="i"
                :to="item.to"
                class="text-capitalize"
                exact
                exact-active-class="accent--text"
                text
            >{{ item.title }}
            </v-btn
            >
          </v-col>
          <v-col v-if="$vuetify.breakpoint.mdAndUp" class="text-right">
            <v-btn
                v-if="isLoggedIn"
                color="accent"
                :target="_black"
                href="/profile"
                to="/profile"
                class="ml-3 text-capitalize"
            ><v-icon left>mdi-account</v-icon>
              Profil</v-btn>
            <v-btn
                v-else
                color="primary"
                :target="_black"
                href="/signup"
                to="/signup"
                class="ml-3 text-capitalize"
            ><v-icon left>mdi-account-plus</v-icon>
              Registrieren</v-btn>

            <v-btn
                v-if="isLoggedIn"
                v-on:click="logout"
                color="red"
                :target="_black"
                href="/home"
                to="/home"
                class="ml-3 text-capitalize"
            ><v-icon left>mdi-login-variant</v-icon>
              Logout</v-btn>
            <v-btn
                v-else
                color="accent"
                :target="_black"
                href="/login"
                to="/login"
                class="ml-3 text-capitalize"
            ><v-icon left>mdi-login-variant</v-icon>
              Login</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>


export default {
  data: () => ({
    randomId: '',
    drawer: null,
    btnItems: [
      {
        text: "Registrieren",
        to: "/signup",
        target: "_black",
        color: "primary",
        icon: "mdi-account-plus",
      },
      {
        text: "Login",
        to: "/login",
        target: "_black",
        color: "accent",
        icon: "mdi-login-variant"
      },
    ],
    barItems: [
      {
        title: "Startseite",
        to: "/",
      },
      {
        title: "Kategorien",
        to: "/categories",
      },
      {
        title: "Rezept",
        to: "/recipes/" + this.randomId,
      },
      {
        title: "Authoren",
        to: "/authors",
      }
    ],
  }),
  created() {
    this.generateRandomID(1, 6);
  },
  methods:{
    logout(){
      localStorage.removeItem('token');
      this.$router.push('/');
      location.reload();
    },
    generateRandomID(min, max){
      this.randomId = Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  computed: {
    isLoggedIn(){
      return localStorage.getItem('token');
    }
  },
  mounted() {
    const thisInstance = this
    this.$root.$on('logout', function(){
      thisInstance.logout();
    })
  }
};
</script>
