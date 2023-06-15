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
            <!-- <template #activator="{ on: dialog }">
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
            </template> -->

            <v-card height="400px" class="pa-1">
              <v-card-title>
                <h2>ເພີ່ມຜູ້ໃຊ້</h2>
              </v-card-title>
              <v-container>
                <v-form @submit="formSubmit" enctype="multipart/form-data">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <v-text-field
                        v-model="firstname"
                        @input="$v.firstname.$touch()"
                        @blur="$v.firstname.$touch()"
                        :error-messages="firstnameErrors"
                        label="ຊື່"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-text-field
                        v-model="lastname"
                        @input="$v.lastname.$touch()"
                        @blur="$v.lastname.$touch()"
                        :error-messages="lastnameErrors"
                        label="ນາມສະກຸນ"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-text-field
                        v-model="depart_Id"
                        
                        @input="$v.depart_Id.$touch()"
                        @blur="$v.depart_Id.$touch()"
                        :error-messages="depart_IdErrors"
                        label="ລະຫັດກົມ"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <!-- <v-text-field
                        v-model="gender"
                        :counter="10"
                       
                        @input="$v.gender.$touch()"
                        @blur="$v.gender.$touch()"
                        :error-messages="genderErrors"
                        label="ເພດ"
                        required
                      ></v-text-field> -->
                      <v-select
                      v-model="gender"
                      :items="genders"
                     
                      @input="$v.gender.$touch()"
                      @blur="$v.gender.$touch()"
                      :error-messages="genderErrors"
                      label="ເພດ"
                      required
                      item-value="gender"
                      prepend-icon=""
                    ></v-select>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-text-field
                        v-model="username"
                    
                        @input="$v.username.$touch()"
                        @blur="$v.username.$touch()"
                        :error-messages="usernameErrors"
                        label="ຊື່ຜູ້ໃຊ້"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-text-field
                        v-model="email"
                       
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                        :error-messages="emailErrors"
                        label="ອີເມວ"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-text-field
                        v-model="password"
                                           
                        @input="$v.password.$touch()"
                        @blur="$v.password.$touch()"
                        :error-messages="passwordErrors"
                        label="ລະຫັດຜ່ານ"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-select
                        v-model="status"
                        :items="statuss"
                        item-value="status"
                        @input="$v.status.$touch()"
                        @blur="$v.status.$touch()"
                        :error-messages="statusErrors"
                       
                        label="ສະຖານະ"
                        required
                        prepend-icon=""
                      ></v-select>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-file-input
                        label="ຮູບ"
                        accept="image/png, image/gif, image/jpeg"
                        show-size
                        :error-messages="imageErrors"                     
                        @change="onFileChange"
                        @input="$v.image.$touch()"
                        @blur="$v.image.$touch()"
                        prepend-icon="mdi-camera"
                        
                       
                      ></v-file-input>
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

                    <v-btn class="btn btn-success"  color="error">
                      ຍົກເລີກ
                    </v-btn>
                  </v-row>
                </v-form>
              </v-container>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2"> mdi-pencil </v-icon>
        <v-icon
          small
          color="error"
          class="mr-2"
          @click="DeleteShow(item.doc_Id)"
        >
          mdi-delete
        </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-book </v-icon>
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
    image: { required },
    depart_Id: { required },
    gender: { required },
    firstname: { required },
    lastname: { required },
    username: { required },
    email: { required },
    password: { required },
    status: { required },
    // image: "",
    // depart_Id: "",
    // gender: "",
    // firstname: "",
    // lastname: "",
    // username: "",
    // email: "",
    // password: "",
    // status: "",
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
    image:'',
    depart_Id: "",
    gender: "",
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    status: "",
    status: null,
    statuss: ["ແອັດມິນ", "ຜູ້ໃຊ້ທົ່ວໄປ"],
    genders: ["ຊາຍ", "ຍິງ"],
    checkbox: false,
  }),

  mounted() {
    this.fetchData();
    setInterval(() => this.fetchData(), 3000);
   
  },
//   mounted(){
//   this.cookies();
 
// },
// methods: {

     
// cookies () {
//   this.myData = this.$cookies.get('user')
//   console.log('success',this.myData)

// }

// }
  methods: {
    async fetchData() {
      axios.get("http://127.0.0.1:8000/api/user/all").then((response) => {
        this.show = response.data.data;
        this.myloadingvariable = false;
        //console.log(response.data.data);
        console.log('successfully fetch')
      });
    },
  

    onFileChange(e) {
      // console.log(e.target.files[0]); for normal input tag
      //this.file = e.target.files[0];
      console.log(e); //for vuetify v-text-field
      this.image = e;
    },

    formSubmit(e) {
      e.preventDefault();

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      let formData = new FormData();
      formData.append("image", this.image);
      formData.append("depart_Id", this.depart_Id);
      formData.append("firstname", this.firstname);
      formData.append("lastname", this.lastname);
      formData.append("username", this.username);
      formData.append("email", this.email);
      formData.append("status", this.status);
      formData.append("gender", this.gender);
      formData.append("password", this.password);
      for (const value of formData.values()) {
  console.log(value);
}
      if (formData !== null && formData !== "") {
        axios
          .post("http://127.0.0.1:8000/api/user/add", formData, config)
          .then((response) => {
            //console.log(response);
            console.log(response.data.data)
            this.$swal.fire({
              title: "ບັນທຶກສຳເຫຼັດ!",
              text: "ບັນທຶກຂໍ້ມູນສຳເຫຼັດ.",
              icon: "success",

              showConfirmButton: false,
              timer: 2000,
            });
            this.close();
          })  .catch(error => {
    console.log(error.reponse); // logs an object to the console

    // Do something with error data
  });;
      }
    },
    submit() {
      this.$v.$touch();
    },
  },

  computed: {
    imageErrors() {
      const errors = [];
      if (!this.$v.image.$dirty) return errors;

      !this.$v.image.required && errors.push("Title is required.");
      return errors;
    },
    depart_IdErrors() {
      const errors = [];
      if (!this.$v.depart_Id.$dirty) return errors;
      !this.$v.depart_Id.required && errors.push("ex_doc_id id is required");
      return errors;
    },
    firstnameErrors() {
      const errors = [];
      if (!this.$v.firstname.$dirty) return errors;
      !this.$v.firstname.required && errors.push("choose file");
      return errors;
    },
    lastnameErrors() {
      const errors = [];
      if (!this.$v.lastname.$dirty) return errors;

      !this.$v.lastname.required &&
        errors.push(" You need to tell where is the document come from");
      return errors;
    },
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;

      !this.$v.username.required && errors.push(" date is required");
      return errors;
    },

    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push(" doc_Id is required");
      return errors;
    },
    statusErrors() {
      const errors = [];
      if (!this.$v.status.$dirty) return errors;
      !this.$v.status.required && errors.push(" depart_Id is required");
      return errors;
    },
    genderErrors() {
      const errors = [];
      if (!this.$v.gender.$dirty) return errors;
      !this.$v.gender.required && errors.push("  doc_Category_Id is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required &&
        errors.push("  doc_Category_Id is required");
      return errors;
    },
  },
};
</script>

<style scoped lang="css"></style>
