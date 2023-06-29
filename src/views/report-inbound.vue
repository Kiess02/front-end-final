<template>
  <main class="pl-4">
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
       
          <v-icon
          small
          @click="read(item.doc_Id)"
        >
          mdi-book
        </v-icon>
        
      </template>
    </v-data-table>
  </main>
</template>
<script>

import axios from "axios";

export default {
 



  data: () => ({
    myloadingvariable: true,
    headers: [
      
      { text: "ເລກທີເອກະສານຂາອອກ", value: "doc_Id" },
      { text: "ເລກທີສະໂນດ", value: "outbound_Detail_Id " },
      { text: "ຜູ້ບັນທຶກເອກະສານ", value: "user_Id " },
      { text: "ແຈ້ງການ", value: "title" },
      { text: "ວັນ,ເດືອນ,ປີ", value: "date" },
      { text: "ມາຈາກ", value: "from" },
      { text: "ຈຳນວນ", value: "doc_quantity" },
      { text: "ໝວດເອກະສານ", value: "doc_Category_Id " },
      { text: "ເລກທີເອກະສານ", value: "doc_C_Id" },
      { text: "ຈຸດປະສົງ", value: "doc_purpose" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  
   
    show:[],
    doc_Id: "",
    outbound_Detail_Id: "",
    doc_Category_Id: null,
    user_Id: "",
    title: "",
    doc_C_Id: "",
    date: "",
    from: "",
    doc_quantity: "",
    doc_purpose: "",

    docs_Category_Id: [],

    dialog: false,
    dialogDelete: false,
  }),
  

  mounted() {
  
    // setInterval(() => this.fetchData(), 3000);
   this.fetchData();
  },

  methods: {

    read(doc_Id){
      console.log(doc_Id)
         window.open(`http://127.0.0.1:8000/api/viewDocIn/${doc_Id}`)
    },

fetchData() {

let depart = this.$cookies.get('user').depart
// console.log(depart)

      axios.get(`http://127.0.0.1:8000/api/inbound/${depart}/all`).then((response) => {
    this.show = response.data.data;
    this.myloadingvariable= false;
    console.log(response.data.data);
  })
   
  
  },

    

 
  },
};
</script>

<style scoped lang="css"></style>
