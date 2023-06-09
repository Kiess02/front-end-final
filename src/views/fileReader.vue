<template>

    <div>
      <v-card height="500px" width="700px" class="mx-auto mt-5">
        <v-card-title class="justify-center">
          <h2>ແກ້ໄຂ</h2>
        </v-card-title>
        <v-container>
         
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
      this.readFile(this.$route.params.doc_Id);
      this.fetchDepartName();
      this.fetchCategory();
    },
  
    methods: {
    
      readFile(doc_Id) {
        axios
          .get(`http://127.0.0.1:8000/api/doc_inbound/${doc_Id}`)
          .then((response) => {
            this.showEdit = response.data.data[0];
  
            console.log(this.showEdit);
          });
      },
  
   
   
    
    },
  };
  </script>
  
  <style scoped></style>
  