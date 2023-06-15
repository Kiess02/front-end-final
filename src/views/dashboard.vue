<template>
  <div class="home ml-1">
    <v-toolbar
      dense
      color="primary"
      dark
      extended
      extension-height="200"
      flat
    
    >
      <v-toolbar-title class="mx-auto" slot="extension" >
   

  <h2 align="center">ຍິນດີຕ້ອນຮັບ</h2> <br>
  <h1 class="font-weight-bold" text-align="left">{{this.myData.gender}} {{this.myData.Fname}}  {{this.myData.Lname}}</h1>
  

        
      </v-toolbar-title>
    </v-toolbar>

      
 

    <v-container class="mt-5">
     
      
     
      <v-row>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              color="cyan darken-1"
              :elevation="hover ? 16 : 2"
              :to="{ path: '/tableOutbound' }"
            >
              <v-row>
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="cyan lighten-2" elevation="0">
                          <v-icon color="white" x-large
                            >mdi-page-previous-outline</v-icon
                          >
                        </v-btn>
                      </div>
                      <v-list-item-title
                        class="mb-1 white--text"
                        style="font-size: x-large"
                      >
                        ຂາອອກສຳນັກງານ
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text"
                        >ກົດເພື່ອໄປເບິ່ງໜ້ານີ້</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-avatar size="100" class="ml-n10 mt-6" tile>
                    <v-img src="wallet.png"></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              color="pink darken-1"
              :elevation="hover ? 16 : 2"
              :to="{ path: '/tableInbound' }"
            >
              <v-row>
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="pink lighten-2" elevation="0">
                          <v-icon color="white" x-large
                            >mdi-page-next-outline</v-icon
                          >
                        </v-btn>
                      </div>
                      <v-list-item-title
                        class="mb-1 white--text"
                        style="font-size: x-large"
                      >
                        ຂາເຂົ້າສຳນັກງານ
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text"
                        >ກົດເພື່ອໄປເບິ່ງໜ້ານີ້</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-avatar size="100" class="ml-n10 mt-6" tile>
                    <v-img src="wallet.png"></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              color="orange darken-1"
              :elevation="hover ? 16 : 2"
              :to="{ path: '/Users' }"
            >
              <v-row>
                <v-col cols="12" sm="8">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="mb-4">
                        <v-btn fab color="orange lighten-2" elevation="0">
                          <v-icon color="white" x-large
                            >mdi-account-group</v-icon
                          >
                        </v-btn>
                      </div>
                      <v-list-item-title
                        class="mb-1 white--text"
                        style="font-size: x-large"
                      >
                        ຈັດການຜູ້ໃຊ້
                      </v-list-item-title>
                      <v-list-item-subtitle class="white--text"
                        >ກົດເພື່ອໄປເບິ່ງໜ້ານີ້</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-avatar size="100" class="ml-n10 mt-6" tile>
                    <v-img src="wallet.png"></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
          <!-- <v-col cols="12" sm="6">
            <v-card>
              <v-app-bar flat color="rgba(0,0,0,0)">
                <v-toolbar-title class="title black--text pl-0 ml-2">
                  Impression 
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn color="deep-purple" class="white--text mr-2">Weekly</v-btn>
                <v-btn color="deep-purple lighten-4" class="deep-purple--text ">Monthly</v-btn>
              </v-app-bar>
              <v-sparkline
              :fill="fill"
              :line-width="width"
              :padding="padding"
              :smooth="radius || false"
              :value="value"
              auto-draw
              color="deep-purple"></v-sparkline>
            </v-card>
          </v-col> -->
          <v-col cols="12" sm="6">
            <v-card>
              <v-app-bar flat color="rgba(0,0,0,0)">
                <v-toolbar-title >
                  ການເຄື່ອນໄຫວລ່າສຸດ
                </v-toolbar-title>
              </v-app-bar>
              <v-app-bar flat color="rgba(0,0,0,0)">
                <v-btn fab color="purple lighten-4" elevation="0">
                  <v-icon color="purple">fab fa-bitcoin</v-icon>
                </v-btn>
                <v-toolbar-title class=" ml-2">
                  User 1<span style="font-size:small" ><br>ປ້ອນເອກະສານມາໃໝ່</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-title class=" ml-2" style="font-size:small">
                  ເລື່ອງ: ເຂົ້າຮ່ວມກອງປະຊຸມ
                </v-toolbar-title>
                <v-icon color="green" class="ml-2">fas fa-long-arrow-alt-up</v-icon>
              </v-app-bar>
               <v-app-bar flat color="rgba(0,0,0,0)">
                <v-btn fab color="green lighten-4" elevation="0">
                  <v-icon color="green">fas fa-yen-sign</v-icon>
                </v-btn>
                <v-toolbar-title class=" black--text ml-2">
                 User 2 <span  style="font-size:small" ><br>ແກ້ໄຂເອກະສານ</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-title class=" ml-2" style="font-size:small">
                  ເລື່ອງ: ແຈ້ງການພະນັກງານ
                </v-toolbar-title>
                <v-icon color="red" class="ml-2">fas fa-long-arrow-alt-down</v-icon>
              </v-app-bar>
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
  name: "Home",
  // async created() {
  //   const res = await.axios.post('http://127.0.0.1:8000/api/user/4', {
  //     headers: {
  //       Authorization: 'bareer' + localStorage.getItem('user')
  //     }
  //   });
  //  }
  data: () => ({
    tab: null,
    text: "center",
    fill: true,
    padding: 8,
    radius: 10,
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    width: 2,
    lineCap: "round",
    type: "trend",
    autoLineWidth: false,
    fills: false,
    

   

     myData:[],

   

  }),

mounted(){
  this.cookies();
  setInterval(() => this.checkCookies(), 3000);

 
},
methods: {

     
cookies () {
  this.myData = this.$cookies.get('user')
  console.log('success',this.myData)

},
async checkCookies() {
  if ($cookies.get('user') == null) {
  // Navigate to a new path
  this.$router.push('/login')
}
}

}
};
</script>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
<style scoped>
.border {
  border-right: 1px solid grey;
}
.back-image{
  background-image: url('../assets/ສູນກາງແນວ2.jpg');
  background-position: center bottom;
  opacity: 0.65;
background-size: cover;
}
</style>
