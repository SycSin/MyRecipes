<template>
  <v-row class="d-flex justify-center align-center fill-height" style="min-height: 100vh">
    <v-col cols="12" md="6">
      <v-card class="py-6">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">
            Login
          </div>
        </v-card-title>
        <v-card-text>
        <form ref="form" @submit.prevent="login()">
          <v-text-field
              v-model="username"
              name="username"
              label="Username"
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
export default {
    name: "Login",
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        login() {
            fetch('http://host.docker.internal:8081/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then((response) => response.json())
            .then((result) => {
                console.log("seas hans");   
            });
        }
    },
};
</script>
