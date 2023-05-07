<template>
  <v-form class="px-3" mt-3 @submit="DocUpdate" enctype="multipart/form-data">
    <v-row>
      <v-col cols="6">
        <v-text-field
          label="Enter doc_Id"
          prepend-icon="fa-sharp fa-solid fa-list-ol "
          color="teal accent-3"
          v-model="show.doc_Id"
        />
      </v-col>

      <v-col cols="6">
        <v-text-field
          label="Enter title"
          prepend-icon="mdi-format-title"
          color="teal accent-3"
          v-model="show.title"
        />
      </v-col>

      <v-col cols="6">
        <v-text-field
          label="Enter ex_doc_id"
          prepend-icon="mdi-file-check"
          color="teal accent-3"
          v-model="show.ex_doc_id"
          required
        />
      </v-col>

      <v-col cols="6">
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="show.date"
              label="Picker in menu"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              required
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="show.date"
            no-title
            scrollable
            :max="
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)
            "
            min="1950-01-01"
          >
          </v-date-picker>
        </v-menu>
      </v-col>

      <v-col cols="6">
        <v-text-field
          label="Enter from"
          prepend-icon="mdi-application-import"
          color="teal accent-3"
          v-model="show.from"
          required
        />
      </v-col>

      <v-col cols="6">
        <!-- <input type="file" class="form-control" @change="onFileChange" /> -->
        <v-file-input
          label="Choose file"
          accept=".pdf"
          show-size
          @change="onFileChange"
          class="form-control"
         
        >
        </v-file-input>
      </v-col>

      <v-col cols="6">
        <v-select
       
        :items="departs_Id"
        item-text="department_Name"
         v-model="show.departs_Id"
        prepend-icon="mdi-file-send"
        label="send to"
        
      ></v-select>
      </v-col>

      <v-col cols="6">
        <v-select
        v-model="show.doc_Category_Id"
        :items="docs_Category_Id"
        item-text="category_Name"
      
        label="doc_Category_Id"
        prepend-icon="fas fa-list"
        required
       
      ></v-select>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-btn
        class="btn btn-success"
        @click.native="DocUpdate"
       @click="showData"
        color="primary"
      >
        Update
      </v-btn>
    </v-row>
  </v-form>
</template>

<script>

import axios from "axios";

export default {
  name: "editdoc",
  date: null,
  menu: false,
  

 
  data: () => ({
    show: [],

    title: "",
    ex_doc_id: "",
    file: "",
    from: "",
    date: "",
    doc_Id: "",
   
    doc_Category_Id: "",
    departs_Id: [],

    docs_Category_Id: [],
  }),

  mounted() {
    this.fetchDataEdit(this.$route.params.doc_Id);
    this.fetchDepartName();
    this.fetchCategory();
  },

  methods: {
    fetchDepartName() {

axios.get("http://127.0.0.1:8000/api/Department/all").then((resp) => {
  this.departs_Id = resp.data.data
  console.log(this.departs_Id)
  
});
},
fetchCategory() {

axios.get("http://127.0.0.1:8000/api/DocCategory/all").then((resp) => {
  this.docs_Category_Id = resp.data.data
  console.log(this.docs_Category_Id)
  
});
},
    fetchDataEdit(doc_Id) {
      axios
        .get(`http://127.0.0.1:8000/api/doc_inbound/${doc_Id}`)
        .then((response) => {
          this.show = response.data;

          console.log(this.show);
        });
    },

    onFileChange(e) {
      // console.log(e.target.files[0]); for normal input tag
      //this.file = e.target.files[0];
      console.log(e); //for vuetify v-text-field
      this.file = e;
    },
    DocUpdate(e,doc_Id ) {
      e.preventDefault();

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

     
      
      let formData = new FormData();
    
      formData.append("from", this.from);
      formData.append("title", this.title);
      formData.append("date", this.date);
      formData.append("depart_Id", this.depart_Id);
      formData.append("doc_Id", this.doc_Id);
      formData.append("doc_Category_Id", this.doc_Category_Id);
      formData.append("ex_doc_id", this.ex_doc_id);

      axios
        .put(
          `http://127.0.0.1:8000/api/doc_inbound/edit/${doc_Id}`,
          formData,
          config
        )
        .then(
          function (response) {
            console.log(response.data);
          },
          function (error) {
            console.log(error.response.data);
          }
        );
    },
    showData() {
      console.log(this.show)
    },
  },

 
};
</script>

<style scoped></style>
