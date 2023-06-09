<template>
    <main class=" pl-4">
    <v-data-table
      :headers="headers"
      :items="show"
      :loading="myloadingvariable"
      loading-text="ກຳລັງໂຫຼດ... ກະລຸນາລໍຖ້າ"
      class="elevation-1 font pl-2"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>ຂາເຂົ້າສະເພາະກົມ</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        
        </v-toolbar>
      </template>
  
      <template v-slot:[`item.actions`]="{ item }">
      
          <v-icon small color="error">fa-duotone fa-book</v-icon>
          <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-book
        </v-icon>
      </template>
    
     
     
    </v-data-table>
  </main>
  
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
   
    mounted() {
      this.fetchData();
      setInterval(() => this.fetchData(), 3000);
      this.fetchDepartName();
    
      this.fetchCategory();
      
    },
  
    methods: {
      
  async fetchData() {
    
          axios.get("http://127.0.0.1:8000/api/inbound/ຫ້ອງການ/all").then((response) => {
        this.show = response.data;
        this.myloadingvariable= false;
        console.log('successfully fetch');
      })
       
      
      },
     
     
    },
  };
  </script>
  
  <style scoped lang="css">
  
  </style>
  