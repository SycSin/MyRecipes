<template>
  <v-row class="d-flex justify-center align-center fill-height" style="min-height: 100vh">
    <v-col cols="12" md="6">
      <v-card class="py-6">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">
            Sign Up
          </div>
        </v-card-title>
        <v-card-text>
          <v-text-field
              label="Email"
              outlined
          ></v-text-field>
          <v-text-field
              label="Firstname"
              outlined
              required
          ></v-text-field>
          <v-text-field
              label="Lastname"
              outlined
              required
          ></v-text-field>
          <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                  v-model="date"
                  label="Birthdate"
                  prepend-icon="event"
                  readonly
                  v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
                ref="picker"
                locale="en-us"
                v-model="date"
                :day-format="date => new Date(date).getDate()"
                :max="new Date().toISOString().substr(0, 10)"
                :picker-date="pickerDate"
                min="1950-01-01"
                @change="save"
            ></v-date-picker>
          </v-menu>
          <v-text-field
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min, rules.strength]"
              validate-on-blur
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              class="mb-6"
              @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-text-field
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min, rules.strength]"
              validate-on-blur
              :type="showPassword ? 'text' : 'password'"
              label="Re-type Password"
              class="mb-6"
              @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-progress-linear
              :background-opacity="opacity"
              :color="score.color"
              :value="score.value"
          ></v-progress-linear>
          <div class="text-right">
            <vue-recaptcha sitekey="6Ld9KAsfAAAAAGCMWWL_GbXL5MWcvWSV8P3uxV1A"></vue-recaptcha>
            <v-btn color="primary">
              Sign Up
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import zxcvbn from "zxcvbn";
import { VueRecaptcha } from 'vue-recaptcha';
export default {
  data: () => ({
    date: null,
    menu: false,
    pickerDate: '1995-1-1',
    showPassword: false,
    password: '',
    rules: {
      required: value => !!value || 'Enter a password',
      min: v => v.length >= 8 || 'Use 8 characters or more for your password',
      strength: v => zxcvbn(v).score >= 3 || 'Please choose a stronger password. Try a mix of letters, numbers, and symbols.',
    },
  }),
  components: { VueRecaptcha },
  watch: {
    menu(val) {
      val && setTimeout(() => (
          this.$refs.picker.activePicker = 'YEAR',
              this.pickerDate = null
      ))
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date)
      this.pickerDate = date;
    },
  },
  computed: {
    score() {
      const result = zxcvbn(this.password);

      switch (result.score) {
        case 4:
          return {
            color: "light-blue",
            value: 100
          };
        case 3:
          return {
            color: "light-green",
            value: 75
          };
        case 2:
          return {
            color: "yellow",
            value: 50
          };
        case 1:
          return {
            color: "orange",
            value: 25
          };
        default:
          return {
            color: "red",
            value: 0
          };
      }
    }
  }
}
</script>