<template>
  <div class="pl-4">
  <v-data-table
    :headers="headers"
    :items="show"
    class="elevation-1 font pl-2"
    
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>ການຈັດການຂໍ້ມູນກົມ</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" width="500" >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary"
             dark v-bind="attrs" v-on="on">
             <v-icon dark>
              mdi-cloud-upload
            </v-icon>Upload
            </v-btn>
          </template>

          <v-card  class="pa-1 mx-auto">
            <v-card-title>
              <h2>Add a New Department</h2>
            </v-card-title>
            <v-container>
              <v-form
                class="px-3"
                mt-3
                @submit="formSubmit"
                enctype="multipart/form-data"
              >
                <v-row>
              

                  <v-col cols="12">
                    <v-text-field
                      label="ກະລຸນາໃສ່ຊື່ກົມ"
                      prepend-icon="mdi-format-title"
                      color="teal accent-3"
                      v-model="department_Name"
                     
                      required
                      :error-messages="DepartmentNameErrors"
                      @input="$v.department_Name.$touch()"
                      @blur="$v.department_Name.$touch()"
                    />
                  </v-col>

                 
              
                </v-row>

                <v-row align="center" justify="center">
                  <v-btn
                    class="btn btn-success"
                    @click.native="formSubmit"
                    @click="submit"
                    color="primary"
                  >
                    submit
                  </v-btn>
              
                </v-row>
              </v-form>
            </v-container>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <router-link :to="{ path: '' }" ><v-icon small class="mr-2" > mdi-pencil </v-icon></router-link>

        <v-icon small color="error" class="mr-2" @click="DeleteShow(item.doc_Id)"> mdi-delete </v-icon>
        <v-icon
          small
          class="mr-2"
          type="button"
          value="Open"
          @click="readFile()"
        >
          fa-duotone fa-book</v-icon
        >
    </template>
  
   
   
  </v-data-table>
</div>
</template>
<script>

import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import axios from "axios";

export default {

  menu: false,
  mixins: [validationMixin],
  name:'department',
 

  validations: {
    depart_Id: { required },
    department_Name: { required },

  },

  data: () => ({
    headers: [
    
      { text: "ລະຫັດກົມ", value: "depart_Id" },
      { text: "ຊື່ກົມ", value: "department_Name" },
  

      { text: "Actions", value: "actions", sortable: false },
    ],
    show: [],
    depart_Id: "",
    department_Name: "",
   

    dialog: false,
    dialogDelete: false,

   
   
    
  }),
  computed: {
   

    DepartmentNameErrors() {
      const errors = [];
      if (!this.$v.department_Name.$dirty) return errors;
      !this.$v.department_Name.required && errors.push(" ກະລຸນາປ້ອນຊື່ກົມ ");
      return errors;
    },
  },

  mounted() {
    this.fetchData();
   
    // this.fetchDepartName();
  
    // this.fetchCategory();
  },

  methods: {
//     fetchDepartName() {

// axios.get("http://127.0.0.1:8000/api/Department/all").then((resp) => {
//   this.departs_Id = resp.data.data
//   console.log(this.departs_Id)
  
// });
// },
// fetchCategory() {

// axios.get("http://127.0.0.1:8000/api/DocCategory/all").then((resp) => {
//   this.docs_Category_Id = resp.data.data
//   console.log(this.docs_Category_Id)
  
// });
// },
//     DeleteShow(doc_Id) {
      
      
//       axios.delete(`http://127.0.0.1:8000/api/doc_inbound/delete/${doc_Id}`)
//       .then(res=>{
//         alert(res.data.message);

//       })  
// },
    fetchData() {
  
        axios.get("http://127.0.0.1:8000/api/Department/all").then((response) => {
      this.show = response.data.data;
      console.log(response.data.data);
    })
     
    
    },
    // onFileChange(e) {
    //   // console.log(e.target.files[0]); for normal input tag
    //   //this.file = e.target.files[0];
    //   console.log(e); //for vuetify v-text-field
    //   this.file = e;
    // },
    formSubmit(e) {
      e.preventDefault();

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      let formData = new FormData();
      
      formData.append("department_Name", this.department_Name);
 

      axios
        .post("http://127.0.0.1:8000/api/Department/add", formData, config)
        .then(
          function (response) {
            console.log(response.data);
          },
          function (error) {
            console.log(error.response.data);
          }
        );
    },
    submit() {
      this.$v.$touch();
    },
   
 
    // clear() {
    //   this.$v.$reset();
    //   this.title = "";
    //   this.from = "";
    //   this.select = null;
    //   this.file = null;
    //   this.date = "";
    //   this.document = "";
    //   this.category = null;
    // },


   
  },
};
</script>


