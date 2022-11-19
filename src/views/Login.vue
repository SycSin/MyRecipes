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
                label="Benutzername"
                v-model="username"
                name="username"
                type="text"
                placeholder="username"
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
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const response = await axios.post('http://localhost:8081/auth/login',
          {
            username: this.username,
            password: this.password
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
      ).then((response) => localStorage.setItem('token', response.data.authToken))
          .finally(() => {
            this.$router.push('/');
            location.reload();

          })
      // console.log(localStorage.getItem('token'));
    }
  },
};
</script>
