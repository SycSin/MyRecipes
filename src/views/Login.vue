<template>
  <v-row class="d-flex justify-center align-center fill-height" style="min-height: 100vh; background-image: url('https://images.pexels.com/photos/4686816/pexels-photo-4686816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
    <v-col cols="12" md="6">
      <v-card class="py-6" style="border-radius: 20px;">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">
            Login
          </div>
        </v-card-title>
        <v-card-text>
          <v-text-field
              label="Benutzername"
              outlined
          ></v-text-field>
          <v-text-field
              label="Password"
              outlined
          ></v-text-field>
          <div class="text-right">
            <v-btn color="primary">
              Login
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
