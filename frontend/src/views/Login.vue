<template>
  <v-row class="d-flex justify-center align-center fill-height"
         style="min-height: 100vh; background-image: url('https://images.pexels.com/photos/4686816/pexels-photo-4686816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
    <v-col cols="12" md="6">
      <v-card class="py-6" style="border-radius: 20px;">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">
            Login
          </div>
        </v-card-title>
        <v-card-text>
          <form ref="form" @submit.prevent="login()">
            <v-text-field
                label="E-Mail"
                v-model="email"
                name="email"
                type="text"
                placeholder="E-Mail"
                required
                outlined
            ></v-text-field>
            <v-text-field
                v-model="password"
                name="password"
                label="Password"
                type="password"
                placeholder="password"
                required
                outlined
            ></v-text-field>
            <div class="text-right">
              <v-btn type="submit" color="primary" value="login">
                Login
              </v-btn>
            </div>
          </form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import axios from "axios"

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      await axios.post('http://myrecipes-backend:3000/auth/login',
          {
            email: this.email,
            password: this.password
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
      )
          //.if()
          .then((response) => localStorage.setItem('token', response.data[0].authToken))
          .finally(() => {
            this.$router.push('/');
            location.reload();

          })
      console.log("This is the local storage: " + localStorage.getItem('token'));
    }
  },
};
</script>
