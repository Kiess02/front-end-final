<template>
  <main class="pl-4" id="customStyle">
   
    <v-data-table
      :headers="headers"
      :items="show"
      :loading="myloadingvariable"
      loading-text="ກຳລັງໂຫຼດ... ກະລຸນາລໍຖ້າ"
      class="elevation-1 font pl-2"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>ຂາເຂົ້າສຳນັກງານ</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="1000px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                <v-icon dark> mdi-cloud-upload </v-icon>Upload
              </v-btn>
            </template>

            <v-card height="500px" class="pa-1">
              <v-card-title>
                <h2>ຟອມບັນທຶກເອກະສານຂາເຂົ້າ</h2>
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
                              Date.now() -
                                new Date().getTimezoneOffset() * 60000
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
                      @click.native="formSubmit"
                      @click="submit"
                      color="error"
                    >
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
        <router-link
          :to="{
            path: '/show/' + item.doc_Id + '/editdoc',
            params: { doc_Id },
          }"
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
        <v-icon small color="error">fa-duotone fa-book</v-icon>
        <v-icon small @click="Read(item.doc_Id)" href="#" > mdi-book </v-icon>
      </template>
    </v-data-table>
  </main>
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
      { text: "ເລກທີຂາເຂົ້າ", value: "doc_Id" },
      { text: "ເລື່ອງ", value: "title" },
      { text: "ວັນມເດືອນມປີ", value: "date" },
      { text: "ມາຈາກ", value: "from" },
      { text: "ສົ່ງເຖິງ", value: "department_Name" },
      { text: "ໝວດເອກະສານ", value: "category_Name" },
      { text: "ເລກທີເອກະສານ", value: "ex_doc_id" },
      { text: "Actions", value: "actions", sortable: false },
    ],
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

      !this.$v.title.required && errors.push("ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ");
      return errors;
    },
    ex_doc_idErrors() {
      const errors = [];
      if (!this.$v.ex_doc_id.$dirty) return errors;
      !this.$v.ex_doc_id.required && errors.push("ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ ");
      return errors;
    },
    fileErrors() {
      const errors = [];
      if (!this.$v.file.$dirty) return errors;
      !this.$v.file.required && errors.push("ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ");
      return errors;
    },
    fromErrors() {
      const errors = [];
      if (!this.$v.from.$dirty) return errors;

      !this.$v.from.required &&
        errors.push(" ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ");
      return errors;
    },
    dateErrors() {
      const errors = [];
      if (!this.$v.date.$dirty) return errors;

      !this.$v.date.required && errors.push(" ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ");
      return errors;
    },

    doc_IdErrors() {
      const errors = [];
      if (!this.$v.doc_Id.$dirty) return errors;
      !this.$v.doc_Id.required && errors.push("ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ");
      return errors;
    },
    depart_IdErrors() {
      const errors = [];
      if (!this.$v.depart_Id.$dirty) return errors;
      !this.$v.depart_Id.required && errors.push(" ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ");
      return errors;
    },
    doc_Category_IdErrors() {
      const errors = [];
      if (!this.$v.doc_Category_Id.$dirty) return errors;
      !this.$v.doc_Category_Id.required &&
        errors.push("  ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ");
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
        this.departs_Id = resp.data;
        console.log('successfully fetch');
      });
    },
    fetchCategory() {
      axios.get("http://127.0.0.1:8000/api/DocCategory/all").then((resp) => {
        this.docs_Category_Id = resp.data.data;
        console.log('successfully fetch');
      });
    },
    Read(doc_Id) {
        console.log(doc_Id)
         window.open(`http://127.0.0.1:8000/api/viewDocIn/${doc_Id}`)
      
    },
    DeleteShow(doc_Id) {
      this.$swal
        .fire({
          title: "ທ່ານຕ້ອງການລຶບແທ້ບໍ ?",
          text: "ທ່ານຈະບໍ່ສາມາດກູ້ຄືນຂໍ້ມູນນີ້ໄດ້ອີກ!",
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "ຍົກເລີກ",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ແມ່ນ!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios.delete(
              `http://127.0.0.1:8000/api/doc_inbound/delete/${doc_Id}`
            );
            this.$swal.fire({
              title: "ລົບສຳເລັດ!",
              text: "ຂໍ້ມູນລົບສຳເລັດແລ້ວ.",
              icon: "success",
              ConfirmButtonText: "ຕົກລົງ",
              showConfirmButton: false,
            timer: 2000,
            });
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            this.$swal.fire({
              title: "ລົບບໍ່ສຳເລັດ",
              text: "ຂໍ້ມູນຂອງທ່ານຍັງປອດໄພ :)",
              icon: "error",
           
              showConfirmButton: false,
             timer: 2000,
            });
          }
        })
        .catch(() => {
          this.$swal("ຜິດພາດ", "ມີຂໍ້ຜິດພາດເກີດຂຶ້ນ", "warning");
        });
    },
    async fetchData() {
      axios
        .get("http://127.0.0.1:8000/api/doc_inbound/all")
        .then((response) => {
          this.show = response.data.data;
          this.myloadingvariable = false;
          console.log('successfully fetch');
        });
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
    close() {
      this.dialog = false;
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

<style scoped type="text/css">

.swal2-popup {
  font-family: "phetsarath_ot" !important;
}
</style>
