<template>
  <div class="pt-6 pl-6 pr-6">
    <v-row>
      <v-col cols="4">
        <v-select
          v-model="docInfo.docType"
          :items="items"
          outlined
          label="ເລືອກເອກະສານ"
          required
        ></v-select>
      </v-col>
      <v-col cols="6">
        <!-- <v-text-field
        placeholder="search"
          prepend-inner-icon="mdi-magnify"
          outlined
          style="max-width: auto"
        >
        </v-text-field> -->
        <v-text-field
          label="ຄົ້ນຫາ"
          placeholder="ກະລຸນາປ້ອນເລກທີເອກະສານ"
          v-model="docInfo.docId"
          outlined
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn outlined fab color="indigo">
          <v-icon @click="search">mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="show"
      class="elevation-1 font pl-2"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>ຜົນການຄົ້ນຫາ</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
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
        <v-icon small @click="Read(item.doc_Id)" href="#"> mdi-book </v-icon>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  data() {
    return {
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
        docType:"",
        docId:""
    },
doc_Id:'',
    
      show: [],
    };
  },
  methods: {
    Read(doc_Id) {
      console.log(doc_Id);
      window.open(`http://127.0.0.1:8000/api/viewDocIn/${doc_Id}`);
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
    search() {
      console.log(this.docInfo)
      axios
        .post("http://127.0.0.1:8000/api/search",this.docInfo)
        .then((response) => {
          if(response.data.data.length == 0){
            this.$swal.fire('ບໍ່ມີຂໍ້ມູນເອກະສານ')
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
