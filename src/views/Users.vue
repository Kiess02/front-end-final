<template>
  <div class="pl-1 mt-3">
    <v-data-table
      :headers="headers"
      :items="show"
      dark
      :loading="myloadingvariable"
      loading-text="ກຳລັງໂຫຼດ... ກະລຸນາລໍຖ້າ"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>ລາຍຊື່ຜູ້ໃຊ້</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="1000px">
            <template #activator="{ on: dialog }">
              <v-tooltip left>
                <template #activator="{ on: tooltip }">
                  <v-btn
                    v-on="{ ...tooltip, ...dialog }"
                    class="mx-2"
                    fab
                    dark
                    color="indigo"
                    ><v-icon dark> mdi-plus </v-icon></v-btn
                  >
                </template>
                <span>ເພີ່ມຜູ້ໃຊ້</span>
              </v-tooltip>
            </template>

            <v-card height="600px" class="pa-1">
              <v-card-title>
                <h2>ເພີ່ມຜູ້ໃຊ້</h2>
              </v-card-title>
              <v-container>
                <v-form ref="form" v-model="valid" lazy-validation>

                  <v-row>

                    <v-col cols="6">
                      <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="Name"
                        required
                      ></v-text-field>
                    </v-col>


                    <v-col cols="6">
                      <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="lastName"
                        required
                      ></v-text-field>
                    </v-col>


                    <v-col cols="6">
                      <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="depart Id"
                        required
                      ></v-text-field>
                    </v-col>


                    <v-col cols="6">
                      <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="gender"
                        required
                      ></v-text-field>
                    </v-col>


                    <v-col cols="6">
                      <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="userName"
                        required
                      ></v-text-field>
                    </v-col>


                    <v-col cols="6">
                      <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="email"
                        required
                      ></v-text-field>
                    </v-col>


                    <v-col cols="6">
                      <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="password"
                        required
                      ></v-text-field>
                    </v-col>

                    
                    <v-col cols="6">
                      <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="ReEnterPassword"
                        required
                      ></v-text-field>
                    </v-col>



                    <v-col cols="6">
                      <v-select
                        v-model="select"
                        :items="items"
                        :rules="[(v) => !!v || 'Item is required']"
                        label="Status"
                        required
                        prepend-icon=""
                      ></v-select>
                    </v-col>

                    <v-col cols="6">
                      <v-file-input
                        label="selectImage"
                        filled
                        prepend-icon="mdi-camera"
                      ></v-file-input>
                    </v-col>


                   
                  </v-row>

                  <v-row align="center" justify="center">
                    <v-btn
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      @click="validate"
                    >
                      Submit
                    </v-btn>

                    <v-btn color="error" class="mr-4" @click="reset">
                      Reset 
                    </v-btn>
                  </v-row>
                </v-form>
              </v-container>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <router-link
          ><v-icon small class="mr-2"> mdi-pencil </v-icon></router-link
        >

        <v-icon
          small
          color="error"
          class="mr-2"
          @click="DeleteShow(item.doc_Id)"
        >
          mdi-delete
        </v-icon>
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
    myloadingvariable: true,
    headers: [
      {
        text: "ລະຫັດຜູ້ໃຊ້",
        align: "start",
        sortable: false,
        value: "user_Id",
      },
      { text: "ລະຫັດກົມ", value: "depart_Id" },
      { text: "ເພດ", value: "gender" },
      { text: "ຊື່ ແລະ ນາມສະກຸນ", value: "firstname" },
      { text: "ອີເມວ", value: "email" },
      { text: "ສະຖານະ", value: "status" },

      { text: "Actions", value: "actions", sortable: false },
    ],

    dialog: false,
    dialogDelete: false,
    show: [],
    user_Id: "",
    depart_Id: "",
    gender: "",
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    status: "",
    select: null,
    items: ["Admin", "Guest Uer"],
    checkbox: false,
  }),

  mounted() {
    this.fetchData();
    setInterval(() => this.fetchData(), 3000);
  },
  methods: {
    async fetchData() {
      axios.get("http://127.0.0.1:8000/api/user/all").then((response) => {
        this.show = response.data.data;
        this.myloadingvariable = false;
        console.log(response.data.data);
      });
    },
  },

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

  //     methods: {
  //       fetchDepartName() {

  //   axios.get("http://127.0.0.1:8000/api/Department/all").then((resp) => {
  //     this.departs_Id = resp.data.data
  //     console.log(this.departs_Id)

  //   });
  //   },
  //   fetchCategory() {

  //   axios.get("http://127.0.0.1:8000/api/DocCategory/all").then((resp) => {
  //     this.docs_Category_Id = resp.data.data
  //     console.log(this.docs_Category_Id)

  //   });
  //   },
  //       DeleteShow(doc_Id) {

  //         axios.delete(`http://127.0.0.1:8000/api/doc_inbound/delete/${doc_Id}`)
  //         .then(res=>{
  //           alert(res.data.message);

  //         })
  //   },

  //       onFileChange(e) {
  //         // console.log(e.target.files[0]); for normal input tag
  //         //this.file = e.target.files[0];
  //         console.log(e); //for vuetify v-text-field
  //         this.file = e;
  //       },
  //       formSubmit(e) {
  //         e.preventDefault();

  //         const config = {
  //           headers: { "content-type": "multipart/form-data" },
  //         };

  //         let formData = new FormData();
  //         formData.append("file", this.file);
  //         formData.append("from", this.from);
  //         formData.append("title", this.title);
  //         formData.append("date", this.date);
  //         formData.append("depart_Id", this.depart_Id);
  //         formData.append("doc_Id", this.doc_Id);
  //         formData.append("doc_Category_Id", this.doc_Category_Id);
  //         formData.append("ex_doc_id", this.ex_doc_id);

  //         axios
  //           .post("http://127.0.0.1:8000/api/doc_inbound/add", formData, config)
  //           .then(
  //             function (response) {
  //               console.log(response.data);
  //             },
  //             function (error) {
  //               console.log(error.response.data);
  //             }
  //           );
  //       },
  //       submit() {
  //         this.$v.$touch();
  //       },

  //       clear() {
  //         this.$v.$reset();
  //         this.title = "";
  //         this.from = "";
  //         this.select = null;
  //         this.file = null;
  //         this.date = "";
  //         this.document = "";
  //         this.category = null;
  //       },

  //       getColor (text) {
  //           if (text = fg) return 'red'

  //           else return 'green'
  //         },

  //     },
};
</script>

<style scoped lang="css"></style>
