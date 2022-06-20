<template>
  <v-row class="d-flex justify-center align-center fill-height"
         style="min-height: 100vh; background-image: url('https://images.pexels.com/photos/4686816/pexels-photo-4686816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
    <v-col cols="12" md="6">
      <v-card class="py-6" style="border-radius: 20px;">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">
            Rezept erstellen
          </div>
        </v-card-title>
        <v-card-text>
          <form ref="form" v-on:submit.prevent="submitForm">
            <div class="container">
              <div class="large-12 medium-12 small-12 cell">
                <label>File
                  <input type="file" id="file" ref="file" v-on:change="handleFileUpload"/>
                </label>
              </div>
            </div>
            <v-text-field
                label="Titel"
                v-model="form.title"
                name="title"
                type="text"
                placeholder="Titel"
                required
                outlined
            ></v-text-field>
            <v-select
                v-model="form.selectedCategories"
                :options="categories"
                :items="categories"
                item-text="name"
                label="Kategorie"
                multiple
                persistent-hint
                chips
                deletable-chips
            ></v-select>
            <v-textarea
                v-model="form.description"
                name="description"
                label="Beschreibung"
                type="textarea"
                placeholder="Beschreibung"
                required
                outlined
            ></v-textarea>
            <v-textarea
                v-model="form.ingredient"
                name="ingredient"
                label="Zutaten"
                type="textarea"
                placeholder="Zutaten z.B.: 1kg Mehl"
                required
                outlined
            ></v-textarea>
            <div class="text-right">
              <v-btn type="submit" color="accent" value="create">
                Erstellen
              </v-btn>
            </div>
          </form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import {categories} from '../resources/js/data';
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {

      form: {
        description: '',
        title: '',
        selectedCategories: [],
        ingredient: ''
      },
      file: '',
      categories: categories,
      formFieldsCopy : {},
      fileCopy: {}
    };
  },
  methods: {
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    submitForm(){
      let formData = new FormData();
      formData.append('file', this.file);
      axios.post('/recipe', this.form).
          then((res) => {
            console.log(res)
            console.log(this.form)
      })
      axios.post('/single-file', formData).
      then(function(){
        console.log('SUCCESS!!');
      })
          .catch(function(){
            console.log('FAILURE!!');
          });
      this.form = {...this.formFieldsCopy};
      this.$refs.fileupload.value=null;
      this.file = this.fileCopy;
    }

  },
  computed: {
    extension() {
      return (this.file) ? this.file.name.split('.').pop() : '';
    }
  }

}
</script>