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
    
        <v-form>
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
                <v-text-field  v-model="myData.Lname" class="purple-input" label="ອີເມວ" />
              </v-col>
             
            
             
              <v-col cols="12" md="4">
              <v-file-input
                      label="ກະລຸນາເລືອກຮູບຂອງທ່ານ"
                     
                      prepend-icon="mdi-camera"
                    ></v-file-input>
              </v-col>
    
           
    
              <v-col cols="12" class="text-right">
                <v-btn color="success" class="mr-0"> ອັບເດດ ໂປຣໄຟລ </v-btn>
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
     profile:''

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

}

};

</script>
