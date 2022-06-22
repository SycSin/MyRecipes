<template>
  <v-row class="d-flex justify-center align-center fill-height"
         style="min-height: 100vh; background-image: url('https://images.pexels.com/photos/4920540/pexels-photo-4920540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
    <v-col cols="12" md="6">
      <v-card class="py-6" style="border-radius: 15px;">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">
            Profil
          </div>
        </v-card-title>
        <v-card-text>
          <v-text-field
              label="Benutzer"
              v-model="username"
              name="user"
              type="text"
              placeholder="Benutzer"
              required
              outlined
          ></v-text-field>
          <v-text-field
              label="Mail"
              v-model="email"
              name="title"
              type="text"
              placeholder="E-Mail"
              required
              outlined
          ></v-text-field>
          <v-text-field
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              validate-on-blur
              :type="showPassword ? 'text' : 'password'"
              label="Passwort"
              class="mb-6"
              @click:append="showPassword = !showPassword"
          ></v-text-field>
          <div class="text-right" style="margin-top: 30px;">
            <v-btn color="accent" class="ml-3 text-capitalize" @click.prevent="updateAccount">
              Editieren
            </v-btn>
            <v-btn color="red" class="ml-3 text-capitalize" @click.prevent="deleteAccount">
              Profil löschen
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>

import axios from "axios"
import appbar from "../components/layout/appbar";

const config = {
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
}

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      newPassword: '',
      formReset: {},
      showPassword: false,
      rules: {
        required: value => !!value || 'Enter a password',
        min: v => v.length >= 8 || 'Use 8 characters or more for your password'
      }
    };
  },
  methods: {
    async submitForm() {
      const response = await axios.post('http://localhost:8081/auth/register', this.form)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      this.form = {...this.formReset};
      await this.$router.push('/login');
    },
    async deleteAccount() {
      await axios.delete('http://localhost:8081/user/deleteUser', config)
          .then(() => localStorage.removeItem('token'))
          .finally(() => this.$root.$emit('logout'))
    },
    updateAccount() {
      axios.put('http://localhost:8081/user/updateUser', {
        password: this.password,
        username: this.username,
        email: this.email
      },config).finally(() => {
            window.alert("Account updated");
            this.$router.push('/');
          }
      )
    }
  },
  mounted() {
    const response = axios.get('http://localhost:8081/user/getSelf', config
    ).then(
        (response) => {this.username = response.data.username;
            this.email = response.data.email;}
    )
  }
}
</script>