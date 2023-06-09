<template>


  <div>
    <v-card height="500px" width="700px" class="mx-auto mt-5">
      <v-card-title class="justify-center">
        <h2>ແກ້ໄຂ</h2>
      </v-card-title>
      <v-container>
        <v-form class="px-3" mt-3 @submit="DocUpdate" enctype="multipart/form-data">
          <v-row>
            <v-col cols="6">
              <v-text-field label="ກະລຸນາປ້ອນ ເລກທີເອກະສານ" prepend-icon="mdi-numeric " color="teal accent-3"
                v-model="showEdit.doc_Id" required readonly />
            </v-col>

            <v-col cols="6">
              <v-text-field label="ກະລຸນາປ້ອນຫົວເລື່ອງ" prepend-icon="mdi-format-title" color="teal accent-3"
                v-model="showEdit.title" required />
            </v-col>

            <v-col cols="6">
              <v-text-field label="ກະລຸນາປ້ອນເລກທີເອກະສານທີ່ມີຢູ່" prepend-icon="mdi-file-check" color="teal accent-3"
                v-model="showEdit.ex_doc_id" required />
            </v-col>

            <v-col cols="6">
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="showEdit.date" label="ວັນເດືອນປີ" prepend-icon="mdi-calendar" readonly
                    v-bind="attrs" v-on="on" required></v-text-field>
                </template>
                <v-date-picker v-model="showEdit.date" no-title scrollable :max="new Date(
                  Date.now() - new Date().getTimezoneOffset() * 60000
                )
                    .toISOString()
                    .substr(0, 10)
                  " min="1950-01-01">
                </v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="6">
              <v-text-field label="ກະລຸນາລະບຸທີ່ມາ" prepend-icon="mdi-application-import" color="teal accent-3"
                v-model="showEdit.from" required />
            </v-col>

            <v-col cols="6">
              <v-file-input label="ກະລຸນາເລືອກໄຟລ" accept=".pdf" show-size @change="onFileChange"
                class="form-control">
              </v-file-input>
            </v-col>

            <v-col cols="6">
              <v-select v-model="showEdit.depart_Id" :items="departs_Id" item-text="department_Name"
                item-value="depart_Id" prepend-icon="mdi-file-send" label="ກະລຸນາລະບຸປາຍທາງທີ່ຈະສົ່ງ"></v-select>
            </v-col>

            <v-col cols="6">
              <v-select v-model="showEdit.doc_Category_Id" :items="docs_Category_Id" item-text="category_Name"
                item-value="doc_Category_Id" label="ກະລຸນາເລືອກໝວດໝູ່ເລກທີ່ເອກະສານ" prepend-icon="mdi-numeric" required
                ></v-select>
            </v-col>
          </v-row>

          <v-row align="center" justify="center">
            <v-btn class="btn btn-success" @click.native="DocUpdate"  color="primary">
              Update
            </v-btn>
          </v-row>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "editdoc",
  date: null,
  menu: false,

  data: () => ({
    showEdit: [],

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
        this.departs_Id = resp.data;
        console.log(this.departs_Id);
      });
    },
    fetchCategory() {
      axios.get("http://127.0.0.1:8000/api/DocCategory/all").then((resp) => {
        this.docs_Category_Id = resp.data.data;
        console.log(this.docs_Category_Id);
      });
    },
    fetchDataEdit(doc_Id) {
      axios
        .get(`http://127.0.0.1:8000/api/doc_inbound/${doc_Id}`)
        .then((response) => {
          console.log(response)
          this.showEdit = response.data.data[0];

          console.log(this.showEdit);
        });
    },

    onFileChange(e) {
      // console.log(e.target.files[0]); for normal input tag
      //this.file = e.target.files[0];
      console.log(e); //for vuetify v-text-field
      this.file = e;
    },
    DocUpdate(e, doc_Id) {
      e.preventDefault();

      const config = {
        headers: {
          Accept: "application/json",
          "Content-type": "multipart/form-data",
        },
      };

      let formData = new FormData();

      formData.append("from", this.showEdit.from);
      formData.append("title", this.showEdit.title);
      formData.append("date", this.showEdit.date);
      formData.append("depart_Id", this.showEdit.depart_Id);
      formData.append("doc_Category_Id", this.showEdit.doc_Category_Id);
      formData.append("ex_doc_id", this.showEdit.ex_doc_id);
      formData.append("file", this.file);

        for (const value of formData.values()) {
          console.log(value);
        }

     
      axios
        .post(
          `http://127.0.0.1:8000/api/doc_inbound/edit/${this.$route.params.doc_Id}`, formData, config
        
         
        )
        // this.$axios.put(`api/user/${this.$route.params.id}`, this.user)
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
      console.log(this.showEdit);
    },
  },
};
</script>

<style scoped></style>
