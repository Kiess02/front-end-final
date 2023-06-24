<template>
  <div>
    <v-card height="550px" width="700px" class="mx-auto mt-5">
      <v-card-title class="justify-center">
        <h2>ໃບຕິດຕາມເອກະສານ</h2>
      </v-card-title>
      
        <v-container>
          <v-form @submit.prevent="formSubmit"  enctype="multipart/form-data">
          <v-row>
            <v-col cols="6">
              <v-text-field  label="ກະລຸນາປ້ອນ ເລກທີເອກະສານ" prepend-icon="mdi-numeric " color="teal accent-3"
                v-model="showEdit.doc_Id" required readonly />
            </v-col>
            <v-col cols="12" md="6">
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
                
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  scrollable
                  :max="
                    new Date(
                      Date.now() - new Date().getTimezoneOffset() * 60000
                    )
                      .toISOString()
                      .substr(0, 10)
                  "
                  :min="new Date().toISOString().substr(0, 10)"
                >
                </v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="12" md="6">
              <v-col cols="12">
                <v-textarea v-model="dear" label="" prepend-icon="fas fa-list" required>
                  <template v-slot:label>
                    <div>ຮຽນ</div>
                  </template>
                </v-textarea>
              </v-col>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="12" md="6">
              <v-col cols="12">
                <v-textarea v-model="title" label="" prepend-icon="fas fa-list" required>
                  <template v-slot:label>
                    <div>ເລື່ອງ</div>
                  </template>
                </v-textarea>
              </v-col>
            </v-col>
          </v-row>

          <v-row align="center" justify="center">
            <v-btn depressed color="primary" class="mx-2" type="submit" >
              ບັນທຶກ
            </v-btn>

            <v-btn depressed color="error"> ຍົກເລີກ </v-btn>
          </v-row>
        </v-form>
        </v-container>
     
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
      showEdit:[],

      dear: "",
      title: "",
      date: "",
      doc_Id: "",
 
   


   
  }),

  mounted() {
   // this.fetchDepartName();
  
    setInterval(() =>   this.fetchDataEdit(this.$route.params.doc_Id), 3000);
  },

  methods: {
    // fetchDepartName() {
    //   axios.get("http://127.0.0.1:8000/api/Department/all").then((resp) => {
    //     this.departs_Id = resp.data;
    //     console.log(this.departs_Id);
    //   });
    // },
    async fetchDataEdit(doc_Id) {
      console.log(doc_Id)
     
       axios.get(`http://127.0.0.1:8000/api/doc_inbound/${doc_Id}`)
        .then((response) => {
          console.log(response)
          this.showEdit = response.data.data[0];

          console.log(this.showEdit);
        });
    },
    formSubmit() {
 

let formData = new FormData();
formData.append("dear", this.dear);
formData.append("date", this.date);
formData.append("title", this.title);
formData.append("doc_Id", this.showEdit.doc_Id);
     
    

     
      axios.post("http://127.0.0.1:8000/api/inbound_to_Department/add", formData)
        .then((resp) => {
        this.formData = resp.data.data;
        console.log(this.formData);

      })
      .then(()=>{
      this.Read(this.$route.params.doc_Id);
    })
   
    },
   
    Read(doc_Id) {
        console.log(doc_Id)
         window.open(`http://127.0.0.1:8000/followDocForm/view/${doc_Id}`, "_blank")
        // window.open(`http://127.0.0.1:8000/OutDetail/view/${sanodId}`, "_blank");
    },
    reloadPage() {
      window.location.reload();
    },
    close() {
      this.dialog = false;
    },
    submit() {
      this.dialog = false;
    },


  //   formSubmit()  {
  //   e.preventDefault();

  //   const config = {
  //     headers: { "content-type": "multipart/form-data" },
  //   };

  //   let formData = new FormData();
  //   formData.append("dear", this.dear);
  //   formData.append("title", this.title);
  //   formData.append("date", this.date);
  //   formData.append("doc_Id", this.doc_Id);
   
    

  //         if(formData !== null && formData !== ''){
  //           axios.post("http://127.0.0.1:8000/api/inbound_to_Department/add", formData, config).then(() => {
  //         this.$swal.fire({
  //             title: "ບັນທຶກສຳເຫຼັດ!",
  //             text: "ບັນທຶກຂໍ້ມູນສຳເຫຼັດ.",
  //             icon: "success",
             
  //             showConfirmButton: false,
  //           timer: 2000,
  //           });
  //        this.close();
  //       });
        
  //         }else{
            
  //            this.submit();
  //         }
     

      
  // },
  },
};
</script>
