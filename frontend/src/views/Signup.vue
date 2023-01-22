<template>
  <v-row class="d-flex justify-center align-center fill-height" style="min-height: 100vh; background-image: url('https://images.pexels.com/photos/4920540/pexels-photo-4920540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
    <v-col cols="12" md="6">
      <v-card class="py-6" style="border-radius: 15px;">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">
            Sign Up
          </div>
        </v-card-title>
        <v-card-text>
          <form ref="form" @submit.prevent="submitForm()">
              <v-text-field
                  label="E-Mail"
                  v-model="form.email"
                  name="title"
                  type="text"
                  placeholder="E-Mail"
                  required
                  outlined
              ></v-text-field>
              <v-text-field
                  v-model="form.password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  validate-on-blur
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  class="mb-6"
                  @click:append="showPassword = !showPassword"
              ></v-text-field>
            <div class="text-right" style="margin-top: 30px;">
              <v-btn color="primary" type="submit">
                Sign Up
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
  data () {
  return {
    form: {
      email: '',
      password: ''
    },
    formReset: {},
    showPassword: false,
    rules: {
      required: value => !!value || 'Enter a password',
      min: v => v.length >= 8 || 'Use 8 characters or more for your password'
    }};
},
  methods: {
    async submitForm(){
      const response = await axios.post('http://localhost:3000/auth/signup', this.form)
          .then(function (response) {
            //console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      this.form = {...this.formReset};
      await this.$router.push('/login');
    }
  }
}
</script>