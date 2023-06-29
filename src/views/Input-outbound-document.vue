<template>
  <v-main>
    <v-dialog v-model="dialog"  width="500">
     
     
      <v-card height="auto" class="pa-1">
       
        <v-card-title>
          <h2>ຟອມບັນທຶກເອກະສານຂາອອກ</h2>
        </v-card-title>
        <v-container>
          <v-form class="px-3" mt-3 @submit="formSubmit" enctype="multipart/form-data">
            <v-row>
              
              <v-col cols="12">
                <v-file-input label="ກະລຸນາເລືອກໄຟລ" accept=".pdf" show-size @change="onFileChange"
                  :error-messages="fileErrors" @input="$v.file.$touch()" @blur="$v.file.$touch()" class="form-control">
                </v-file-input>
              </v-col>

             
            </v-row>

            <v-row align="center" justify="center">
              <v-btn class="btn btn-success mx-2" @click.native="formSubmit" @click="submit" color="primary">
                ບັນທຶກ
              </v-btn>

              <v-btn class="btn btn-success" @click.native="formSubmit" @click="submit" color="error">
                ຍົກເລີກ
              </v-btn>
            </v-row>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <div class="pt-6 pl-6 pr-6">
      <v-row>
        <v-col cols="6">
          <!-- <v-text-field
        placeholder="search"
          prepend-inner-icon="mdi-magnify"
          outlined
          style="max-width: auto"
        >
        </v-text-field> -->
          <v-text-field label="ຄົ້ນຫາ" placeholder="ກະລຸນາປ້ອນເລກທີເອກະສານ" v-model="docInfo.outDeId" outlined
            prepend-inner-icon="mdi-magnify"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn outlined fab color="indigo">
            <v-icon @click="search">mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-data-table :headers="headers" :items="show" class="elevation-1 font pl-2">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>ຜົນການຄົ້ນຫາ</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
          </v-toolbar>
        </template>

        <template v-slot:[`item.actions`]="{ item }"  >
          
         <v-icon small class="mr-2"      @click="dialog = true"> mdi-plus </v-icon>

          
          <v-icon small color="error">fa-duotone fa-book</v-icon>
          <v-icon small @click="Read(item.doc_Id)" href="#"> mdi-book </v-icon>
        </template>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            <v-icon dark> mdi-cloud-upload </v-icon>Upload
          </v-btn>
        </template> 
      </v-data-table>
      
    </div>
 
  </v-main>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      items: [
        {
          text: "ເອກະສານຂາເຂົ້າ",
          value: "docInbound",
        },
        {
          text: "ເອກະສານຂາອອກ",
          value: "docOutbound",
        },
      ],
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
      docInfo: {
        outDeId: "",
      },
      doc_Id: "",

      show: [],
    };
  },
  methods: {
    Read(doc_Id) {
      console.log(doc_Id);
      window.open(`http://127.0.0.1:8000/api/viewDocIn/${doc_Id}`);
    },
    // DeleteShow(doc_Id) {
    //   this.$swal
    //     .fire({
    //       title: "ທ່ານຕ້ອງການລຶບແທ້ບໍ ?",
    //       text: "ທ່ານຈະບໍ່ສາມາດກູ້ຄືນຂໍ້ມູນນີ້ໄດ້ອີກ!",
    //       icon: "warning",
    //       showCancelButton: true,
    //       cancelButtonText: "ຍົກເລີກ",
    //       confirmButtonColor: "#3085d6",
    //       cancelButtonColor: "#d33",
    //       confirmButtonText: "ແມ່ນ!",
    //     })
    //     .then((result) => {
    //       if (result.isConfirmed) {
    //         axios.delete(
    //           `http://127.0.0.1:8000/api/doc_inbound/delete/${doc_Id}`
    //         );
    //         this.$swal.fire({
    //           title: "ລົບສຳເລັດ!",
    //           text: "ຂໍ້ມູນລົບສຳເລັດແລ້ວ.",
    //           icon: "success",
    //           ConfirmButtonText: "ຕົກລົງ",
    //           showConfirmButton: false,
    //           timer: 2000,
    //         });
    //       } else if (result.dismiss === this.$swal.DismissReason.cancel) {
    //         this.$swal.fire({
    //           title: "ລົບບໍ່ສຳເລັດ",
    //           text: "ຂໍ້ມູນຂອງທ່ານຍັງປອດໄພ :)",
    //           icon: "error",

    //           showConfirmButton: false,
    //           timer: 2000,
    //         });
    //       }
    //     })
    //     .catch(() => {
    //       this.$swal("ຜິດພາດ", "ມີຂໍ້ຜິດພາດເກີດຂຶ້ນ", "warning");
    //     });
    // },
    search() {
      console.log(this.docInfo);

      axios.post("http://127.0.0.1:8000/api/doc_outbounds/byOutDeId", this.docInfo)
        .then((response) => {
          if (response.data.data.length == 0) {
            this.$swal.fire("ບໍ່ມີຂໍ້ມູນເອກະສານ");
          }
          this.show = response.data.data;

          console.log(this.show.length);
        })
        .catch(() => {
          this.$swal("ຜິດພາດ", "ມີຂໍ້ຜິດພາດເກີດຂຶ້ນ", "warning");
        });
    },
  },
};
</script>
