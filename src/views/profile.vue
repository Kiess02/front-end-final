<template>
  <div class="pl-1 mt-3">
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card
        class="mt-4 mx-auto pa-4"
  
      >
        <v-sheet
          class="v-sheet--offset "
          color="green"
          elevation="3"
          max-width="55%"
          justify="start"
        >
          <div class=" white--text"  style="font-size: x-large">
            ແກ້ໄຂໂປຣໄຟລ
          </div>
        </v-sheet>
    
        <v-form   @submit="formSubmit"
        enctype="multipart/form-data">
          <v-container class="py-0">
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field v-model="myData.status" label="Status:" disabled />
              </v-col>
    
              <v-col cols="12" md="4">
                <v-text-field   v-model="myData.id" class="purple-input" label="ລະຫັດຜູ້ໃຊ້" />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field  v-model="myData.depart" label="ລະຫັດກົມ"  />
              </v-col>
    
              <v-col cols="12" md="4">
                <v-text-field  v-model="myData.gender" class="purple-input" label="ເພດ" />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field  v-model="myData.Fname" label="ຊື່"  />
              </v-col>
    
              <v-col cols="12" md="4">
                <v-text-field  v-model="myData.Lname" class="purple-input" label="ນາມສະກຸນ" />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field  v-model="myData.username" label="ຊື່ຜູ້ໃຊ້"  />
              </v-col>
    
              <v-col cols="12" md="4">
                <v-text-field  v-model="myData.email" readonly class="purple-input" label="ອີເມວ" />
              </v-col>
             
            
             
              <v-col cols="12" md="4">
              <v-file-input
                      label="ກະລຸນາເລືອກຮູບຂອງທ່ານ"
                     
                      prepend-icon="mdi-camera"
                    ></v-file-input>
              </v-col>
    
           
    
              <v-col cols="12" class="text-right">
                <v-btn color="success" class="mr-0" @click.native="formSubmit" > ອັບເດດ ໂປຣໄຟລ </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
      </v-col>

      <v-col cols="12" md="4" class="">
        <!-- profile -->
        <v-card class="mx-auto " max-width="434" tile>
          <v-img
            height="100%"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBwcIBwgHBwcHBwoHBwcHBw8ICQgKIBEWFiARHxMYHSggGBolGx8VITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDjcZFRkrKy0tLS0rNysrNy0tKysrNys3LSsrKzc3Kys3Kys3Ny0rNysrKzcrKystKy0rLSstLf/AABEIALEBHAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIDBP/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABcBAQEBAQAAAAAAAAAAAAAAAAABBQT/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD1lYXWzAUUEVDAUKIqaBApFBFEEigCKAIoGUQADQBkNCqM0NAGQaBADQoGWgDNDVAOqKQCKAwxQwVFEEVGkEUQBKBIoAmgARxAyigZDQBkNAGKG2aozQ1RRGQ0AZBCgBQOhRQBRFRRBQxQxAlQgiiCKOIDCVgoTSBkY1iBkY0AZDYVGKGqKDIasZBkNBRmstiiMBoUGQ0lHRIoqIMAkQwDDFDEDDBGoChihQKJFBRAIoAMaQMhoAyGgDLNbrNVGaK1RQYDVAM0NMqMhoCMhpA2koKSCBMBiBjUZjUAwwRqAYYI1EVFQgikCRSARAANBRkVoUGWa0KIzWa3WaozQ1WaDIaoUZDQBkNAGkCISCKYYDEDGozGoBjUZjUAxqMwxFaIhApJApIEkgApFUANACs1qigzWa1RVRmimigyK0yAoKUZRQjJBAmMmCtQgg1DGY1EGoYzDAajUZhRWizCDRZIEhIFBAgkoAQArNIoCims1UFFNFBkGiqBKgEkBGSyVGoWTEGjGYYK01GGog1DGYYDcLMINFkorRZINJkgUECQQIVAEzTQIKKqKoKKazQQQUQSBBIHMslUaLJQahZMBqNRiNCtGMlBqNMQg2WCDa1nTqDS1nTop1aFoHQNQEAKhAAKiqigqyQoAgCQQiSAOZZhijRZhBoslBqNRgwG4WYYK0YyUGiyQaTJBpMkCggIWgCEAQQBUIAqEFBQgIkgBCQORBUaQIEiGATAUGoWSK0WSDSBAlkoEskCggSCBIACEFEEAQQECQBBBQoAGYUgUaSAkIGoYkgYUhSUgKSAxJAUkgkkCCQIVIAClGRSgZoSECCUQqQIJA//2Q=="
          >
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0" cols="12">
                <v-avatar class="profile" color="grey" size="164" tile>
                  <v-img
                    :src=profile
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="">
                      ທ່ານ {{myData.Fname}} {{myData.Lname}}
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >ສະຖານະ: {{myData.status}}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  
  </div>
</template>


<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import VueCookies from 'vue-cookies'
Vue.use(VueCookies, { 
  
})

export default {
  data: () => ({
     myData: [],
     profile:'',
     image: "",
    depart_Id: "",
    gender: "",
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    status: "",

  }),
  mounted () {
   this.cookies();
   
},
methods: {
  cookies () {
  this.myData = this.$cookies.get('user')
  console.log('success',this.myData)
this.profile = "http://127.0.0.1:8000/storage/images/"+this.myData.image
console.log(this.profile)
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
   
   
        this.$swal
        .fire({
          title: "ທ່ານຕ້ອງແກ້ແທ້ບໍ ?",
          text: "ຂໍ້ມູນໃໝ່ຈະແທນທີ່ຂໍ້ມູນເກົ່າ!",
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "ຍົກເລີກ",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ແມ່ນ!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios.post("http://127.0.0.1:8000/api/user/edit/1", formData, config)
            console.log(response.data.data);
            this.$swal.fire({
              title: "ແກ້ໄຂ!",
              text: "ຂໍ້ມູນແກ້ໄຂສຳເລັດແລ້ວ.",
              icon: "success",
              ConfirmButtonText: "ຕົກລົງ",
              showConfirmButton: false,
            timer: 2000,
            });
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            this.$swal.fire({
              title: "ຍົກເລີກ",
              text: "ທ່ານຍົກເລີກການແກ້ໄຂຂໍ້ມູນ",
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
  

}

};

</script>
