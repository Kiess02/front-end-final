<template>
  <v-form class="px-3" mt-3 @submit.prevent="submitData" methods="post">
    <!-- //title -->
    <v-row>
      <v-col cols="6">
        <!-- doc_Id -->
        <v-text-field
          v-model=" inputData.doc_Id"
          :error-messages="doc_IdErrors"
          :counter="10"
          label="Document id"
          required
          @input="$v.doc_Id.$touch()"
          @blur="$v.doc_Id.$touch()"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <!-- //category-->
        <v-select
          v-model=" inputData.doc_Category_Id"
          :items="items2"
          :error-messages="doc_Category_IdErrors"
          label="category"
          required
          @change="$v.doc_Category_Id.$touch()"
          @blur="$v.doc_Category_Id.$touch()"
        ></v-select>
      </v-col>
      <!-- title -->
      <v-col cols="6">
        <v-text-field
          v-model=" inputData.title"
          :error-messages="titleErrors"
          :counter="10"
          label="Title"
          required
          @input="$v.title.$touch()"
          @blur="$v.title.$touch()"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <!-- //from-->
        <v-text-field
          v-model=" inputData.from"
          :error-messages="fromErrors"
          :counter="10"
          label="From"
          required
          @input="$v.from.$touch()"
          @blur="$v.from.$touch()"
        ></v-text-field>
      </v-col>

      <v-col cols="6">
        <!-- //send_to-->
        <v-select
          v-model=" inputData.send_to"
          :items="items"
          :error-messages="send_toErrors"
          label="send to"
          required
          @change="$v.send_to.$touch()"
          @blur="$v.send_to.$touch()"
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-menu
          ref="menu"
          v-model=" inputData.menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model=" inputData.date"
              :items="date"
              :error-messages="dateErrors"
              label="Document date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model=" inputData.date"
           
            :max="
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)
            "
            min="1950-01-01"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <!-- //file -->
      <v-col cols="12">
        <v-file-input
          label="Choose file"
          accept=".pdf"
          show-size
          v-model=" inputData.file"
          :items="file"
          :error-messages="fileErrors"
        >
        </v-file-input>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-btn class="mr-4"  color="primary"> submit </v-btn>
      <v-btn @click="clear" color="error"> clear </v-btn>
    </v-row>
  </v-form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  date: null,
  menu: false,
  mixins: [validationMixin],

  validations: {
    title: { required, maxLength: maxLength(70) },
    from: { required },
    send_to: { required },
    file: { required },
    date: { required },
    doc_Category_Id: { required },
    doc_Id: { required },

    watch: {
      menu(val) {
        val && setTimeout(() => (this.activePicker = "YEAR"));
      },
    },
  },

  data: () => ({
    inputData: {
      title: "",
      file: "",
      from: "",
      date: "",
      doc_Id: "",
      send_to: null,
      doc_Category_Id: null,
    },
    title: "",
    file: "",
    from: "",
    date: "",
    doc_Id: "",
    send_to: null,
    doc_Category_Id: null,

    items: [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
      "Item 6",
      "Item 7",
      "Item 8",
    ],

    items2: [
      "cate 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
      "Item 6",
      "Item 7",
      "Item 8",
    ],
  }),
  computed: {
    fileErrors() {
      const errors = [];
      if (!this.$v.file.$dirty) return errors;
      !this.$v.file.required && errors.push("choose file");
      return errors;
    },
    doc_IdErrors() {
      const errors = [];
      if (!this.$v.doc_Id.$dirty) return errors;
      !this.$v.doc_Id.required && errors.push("doc_Id id is required");
      return errors;
    },
    send_toErrors() {
      const errors = [];
      if (!this.$v.send_to.$dirty) return errors;
      !this.$v.send_to.required && errors.push("Item is required");
      return errors;
    },
    doc_Category_IdErrors() {
      const errors = [];
      if (!this.$v.doc_Category_Id.$dirty) return errors;
      !this.$v.doc_Category_Id.required && errors.push("category is required");
      return errors;
    },

    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.maxLength &&
        errors.push("TiTle must be at most 10 characters long");
      !this.$v.title.required && errors.push("Title is required.");
      return errors;
    },

    fromErrors() {
      const errors = [];
      if (!this.$v.from.$dirty) return errors;

      !this.$v.from.required &&
        errors.push(" You need to tell where is the doc_Id come from");
      return errors;
    },
    dateErrors() {
      const errors = [];
      if (!this.$v.date.$dirty) return errors;

      !this.$v.date.required && errors.push(" date is required");
      return errors;
    },
  },

  

  methods: {
    submitData() {
      axios.post("http://127.0.0.1:8000/api/authenticate", this.inputData)
        .then((Response) => {
          console.log(Response.data);
        });
    },
    submit() {
      this.$v.$touch();
    },

    clear() {
      this.$v.$reset();
      this.title = "";
      this.from = "";
      this.send_to = null;
      this.file = null;
      this.date = "";
      this.doc_Id = "";
      this.doc_Category_Id = null;
    },
  },
};
</script>
