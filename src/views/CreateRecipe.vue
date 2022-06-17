<template>
  <v-row class="d-flex justify-center align-center fill-height" style="min-height: 100vh; background-image: url('https://images.pexels.com/photos/4686816/pexels-photo-4686816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');">
    <v-col cols="12" md="6">
      <v-card class="py-6" style="border-radius: 20px;">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">
            Rezept erstellen
          </div>
        </v-card-title>
        <v-card-text>
          <form ref="form">
            <div id="app">
              <div v-if="!file">
                <div :class="['dropZone', dragging ? 'dropZone-over' : '']" @dragenter="dragging = true" @dragleave="dragging = false">
                  <div class="dropZone-info" @drag="onChange">
                    <span class="fa fa-cloud-upload dropZone-title"></span>
                    <span class="dropZone-title">Drop file or click to upload</span>
                    <div class="dropZone-upload-limit-info">
                      <div>extension support: jpeg</div>
                      <div>maximum file size: 5 MB</div>
                    </div>
                  </div>
                  <input type="file" @change="onChange">
                </div>
              </div>
              <div v-else class="dropZone-uploaded">
                <div class="dropZone-uploaded-info">
                  <span class="dropZone-title">Uploaded</span>
                  <button type="button" class="btn btn-primary removeFile" @click="removeFile">Remove File</button>
                </div>
              </div>

              <div class="uploadedFile-info">
                <div>fileName: {{ file.name }}</div>
                <div>fileZise(bytes): {{ file.size }}</div>
                <div>extension：{{ extension }}</div>
              </div>
            </div>
            <v-text-field
                label="Titel"
                v-model="title"
                name="title"
                type="text"
                placeholder="Titel"
                required
                outlined
            ></v-text-field>
            <v-select
                v-model="categories"
                :options="categories"
                :items="categories"
                item-text="category"
                label="Kategorie"
            ></v-select>
            <v-textarea
                v-model="description"
                name="description"
                label="Beschreibung"
                type="textarea"
                placeholder="Beschreibung"
                required
                outlined
            ></v-textarea>

            <v-row  style="align-items: center">
              <v-col>
                <v-text-field
                    label="Zutat"
                    v-model="ingredient"
                    name="ingredient"
                    type="text"
                    placeholder="Zutat"
                    required
                    outlined>
                </v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                    label="Menge"
                    v-model="amount"
                    name="amount"
                    type="text"
                    placeholder="Menge"
                    required
                    outlined>
                </v-text-field>
              </v-col>
              <v-col>
                <v-btn @click="addIngredient" icon>
                  <v-icon size="30">mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
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

export default {
  name: "Login",
  data() {
    return {
      amount: '',
      ingredient: '',
      description: '',
      title: '',
      file: '',
      dragging: false,
      categories: [
        {category: "Süßes"},
        {category: "Vegan"},
        {category: "Vegetarisch"},
        {category: "Fleisch"},
        {category: "Fisch"},
      ]
    };
  },
  methods: {
   addIngredient(){
     console.log("Klick");
   },
  onChange(e) {
    var files = e.target.files || e.dataTransfer.files;

    if (!files.length) {
      this.dragging = false;
      return;
    }

    this.createFile(files[0]);
  },
  createFile(file) {
    if (!file.type.match("image.*")) {

      alert('please select image file');
      this.dragging = false;
      return;
    }

    if (file.size > 5000000) {
      alert('please check file size no over 5 MB.')
      this.dragging = false;
      return;
    }

    this.file = file;
    console.log(this.file);
    this.dragging = false;
  },
  removeFile() {
    this.file = '';
  }
  },
  computed: {
    extension() {
      return (this.file) ? this.file.name.split('.').pop() : '';
    }
  }

  }
</script>

<style>
.dropZone {
  width: 80%;
  height: 200px;
  position: relative;
  border: 2px dashed #eee;
}

.dropZone:hover {
  border: 2px solid #2e94c4;
}

.dropZone:hover .dropZone-title {
  color: #1975A0;
}

.dropZone-info {
  color: #A8A8A8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

..dropZone-title {
  color: #787878;
}

.dropZone input {
  position: absolute;
  cursor: pointer;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.dropZone-upload-limit-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.dropZone-over {
  background: #5C5C5C;
  opacity: 0.8;
}

.dropZone-uploaded {
  width: 80%;
  height: 200px;
  position: relative;
  border: 2px dashed #eee;
}

.dropZone-uploaded-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #A8A8A8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

.removeFile {
  width: 200px;
}
</style>