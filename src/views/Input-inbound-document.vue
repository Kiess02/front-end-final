<template>
  <div>
      <v-card height="500px" width="700px" class="mx-auto mt-5">
          <v-card-title class="justify-center">
            <h2  >ເພີ່ມເອກະສານຂາເຂົ້າ</h2>
          </v-card-title>
          <v-container>
            <v-form
              class="px-3"
              mt-3
              @submit="formSubmit"
              enctype="multipart/form-data"
            >
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="ກະລຸນາປ້ອນ ເລກທີເອກະສານ"
                    prepend-icon="mdi-numeric "
                    color="teal accent-3"
                    v-model="doc_Id"
                    required
                    :error-messages="doc_IdErrors"
                    @input="$v.doc_Id.$touch()"
                    @blur="$v.doc_Id.$touch()"
                  />
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    label="ກະລຸນາປ້ອນຫົວເລື່ອງ"
                    prepend-icon="mdi-format-title"
                    color="teal accent-3"
                    v-model="title"
                   
                    required
                    :error-messages="titleErrors"
                    @input="$v.title.$touch()"
                    @blur="$v.title.$touch()"
                  />
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    label="ກະລຸນາປ້ອນເລກທີເອກະສານທີ່ມີຢູ່"
                    prepend-icon="mdi-file-check"
                    color="teal accent-3"
                    v-model="ex_doc_id"
                    required
                    :error-messages="ex_doc_idErrors"
                    @input="$v.ex_doc_id.$touch()"
                    @blur="$v.ex_doc_id.$touch()"
                  />
                </v-col>

                <v-col cols="6">
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="ວັນເດືອນປີ"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        required
                        :error-messages="dateErrors"
                        @input="$v.date.$touch()"
                        @blur="$v.date.$touch()"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      no-title
                      scrollable
                      :max="
                        new Date(
                          Date.now() - new Date().getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .substr(0, 10)
                      "
                      :min="new Date().toISOString().substr(0, 10)"
                    >
                    </v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    label="ກະລຸນາລະບຸທີ່ມາ"
                    prepend-icon="mdi-application-import"
                    color="teal accent-3"
                    v-model="from"
                    required
                    :error-messages="fromErrors"
                    @input="$v.from.$touch()"
                    @blur="$v.from.$touch()"
                  />
                </v-col>

                <v-col cols="6">
                 
                  <v-file-input
                    label="ກະລຸນາເລືອກໄຟລ"
                    accept=".pdf"
                    show-size
                    @change="onFileChange"
                    :error-messages="fileErrors"
                    @input="$v.file.$touch()"
                    @blur="$v.file.$touch()"
                    class="form-control"
                  >
                  </v-file-input>
                </v-col>

                <v-col cols="6">
                  <v-select
                    v-model="depart_Id"
                    :items="departs_Id"
                    item-text="department_Name"
                    item-value="depart_Id"
                    prepend-icon="mdi-file-send"
                    label="ກະລຸນາລະບຸປາຍທາງທີ່ຈະສົ່ງ"
                    :error-messages="depart_IdErrors"
                    @input="$v.depart_Id.$touch()"
                    @blur="$v.depart_Id.$touch()"
                  ></v-select>
                </v-col>

                <v-col cols="6">
                  <v-select
                    v-model="doc_Category_Id"
                    :items="docs_Category_Id"
                    item-text="category_Name"
                    item-value="doc_Category_Id"
                    label="ກະລຸນາເລືອກໝວດໝູ່ເລກທີ່ເອກະສານ"
                    prepend-icon="mdi-numeric"
                    required
                    :error-messages="doc_Category_IdErrors"
                    @input="$v.doc_Category_Id.$touch()"
                    @blur="$v.doc_Category_Id.$touch()"
                  ></v-select>
                </v-col>
              </v-row>

              <v-row align="center" justify="center">
                <v-btn
                  class="btn btn-success mx-2"
                  @click.native="formSubmit"
                  @click="submit"
                  color="primary"
                >
                  ບັນທຶກ
                </v-btn>
                
                <v-btn
                  class="btn btn-success"
                 
                  @click="clear"
                  color="error"
                >
                  ຍົກເລີກ
                </v-btn>
            
              </v-row>
            </v-form>
          </v-container>
        </v-card>




        
  </div>
</template>

<script >

import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import axios from "axios";

export default {
date: null,
menu: false,
mixins: [validationMixin],



validations: {
  title: { required },
  ex_doc_id: { required },
  file: { required },
  from: { required },
  date: { required },
  doc_Id: { required },
  depart_Id: { required },
  doc_Category_Id: { required },
},

data: () => ({

  show: [],
  title: "",
  ex_doc_id: "",
  file: "",
  from: "",
  date: "",
  doc_Id: "",
  depart_Id: "",
  doc_Category_Id: "",
  ex_doc_id: "",
  departs_Id: [],

  docs_Category_Id: [],

  dialog: false,
  dialogDelete: false,

 
 
  
}),
computed: {
  titleErrors() {
    const errors = [];
    if (!this.$v.title.$dirty) return errors;

    !this.$v.title.required && errors.push("Title is required.");
    return errors;
  },
  ex_doc_idErrors() {
    const errors = [];
    if (!this.$v.ex_doc_id.$dirty) return errors;
    !this.$v.ex_doc_id.required && errors.push("ex_doc_id id is required");
    return errors;
  },
  fileErrors() {
    const errors = [];
    if (!this.$v.file.$dirty) return errors;
    !this.$v.file.required && errors.push("choose file");
    return errors;
  },
  fromErrors() {
    const errors = [];
    if (!this.$v.from.$dirty) return errors;

    !this.$v.from.required &&
      errors.push(" You need to tell where is the document come from");
    return errors;
  },
  dateErrors() {
    const errors = [];
    if (!this.$v.date.$dirty) return errors;

    !this.$v.date.required && errors.push(" date is required");
    return errors;
  },

  doc_IdErrors() {
    const errors = [];
    if (!this.$v.doc_Id.$dirty) return errors;
    !this.$v.doc_Id.required && errors.push(" doc_Id is required");
    return errors;
  },
  depart_IdErrors() {
    const errors = [];
    if (!this.$v.depart_Id.$dirty) return errors;
    !this.$v.depart_Id.required && errors.push(" depart_Id is required");
    return errors;
  },
  doc_Category_IdErrors() {
    const errors = [];
    if (!this.$v.doc_Category_Id.$dirty) return errors;
    !this.$v.doc_Category_Id.required &&
      errors.push("  doc_Category_Id is required");
    return errors;
  },
},

mounted() {
  this.fetchData();
  setInterval(() => this.fetchData(), 3000);
  this.fetchDepartName();

  this.fetchCategory();
  
},

methods: {
  fetchDepartName() {

axios.get("http://127.0.0.1:8000/api/Department/all").then((resp) => {
this.departs_Id = resp.data
console.log(this.departs_Id)

});
},
fetchCategory() {

axios.get("http://127.0.0.1:8000/api/DocCategory/all").then((resp) => {
this.docs_Category_Id = resp.data.data
console.log(this.docs_Category_Id)

});
},
  DeleteShow(doc_Id) {
    
    
    axios.delete(`http://127.0.0.1:8000/api/doc_inbound/delete/${doc_Id}`)
    .then(res=>{
      alert(res.data.message);

    })  
},
async fetchData() {

      axios.get("http://127.0.0.1:8000/api/doc_inbound/all").then((response) => {
    this.show = response.data.data;
    this.myloadingvariable= false;
    console.log(response.data.data);
  })
   
  
  },
  onFileChange(e) {
    // console.log(e.target.files[0]); for normal input tag
    //this.file = e.target.files[0];
    console.log(e); //for vuetify v-text-field
    this.file = e;
  },
 
  
  formSubmit(e) {
    e.preventDefault();

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    let formData = new FormData();
    formData.append("file", this.file);
    formData.append("from", this.from);
    formData.append("title", this.title);
    formData.append("date", this.date);
    formData.append("depart_Id", this.depart_Id);
    formData.append("doc_Id", this.doc_Id);
    formData.append("doc_Category_Id", this.doc_Category_Id);
    formData.append("ex_doc_id", this.ex_doc_id); 
          if(formData !== null && formData !== ''){
        axios.post("http://127.0.0.1:8000/api/doc_inbound/add", formData, config).then(() => {
          this.$swal.fire({
              title: "ບັນທຶກສຳເຫຼັດ!",
              text: "ບັນທຶກຂໍ້ມູນສຳເຫຼັດ.",
              icon: "success",
             
              showConfirmButton: false,
            timer: 2000,
            });
         this.close();
        });
        
          }else{
            
             this.submit();
          }
     

      
  },
  submit() {
    this.$v.$touch();
  },

  clear() {
    this.$v.$reset();
    this.title = "";
    this.from = "";
    this.select = null;
    this.file = null;
    this.date = "";
    this.document = "";
    this.category = null;
  },

  // getColor (calories) {
  //     if (calories > 400) return 'red'
  //     else if (calories > 200) return 'orange'
  //     else return 'green'
  //   },
 
},
};
</script>
