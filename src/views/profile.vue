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
                    src="data:image/jpeg;base64,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"
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


  }),
  mounted () {
   this.cookies();
},
methods: {
  cookies () {
  this.myData = this.$cookies.get('user')
  console.log('success',this.myData)

}
}

};

</script>
