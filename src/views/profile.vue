<template>
  <div class="pl-1 mt-3">
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card
        class="mt-4 mx-auto pa-4"
        max-width="900"
      >
        <v-sheet
          class="v-sheet--offset "
          color="green"
          elevation="4"
          max-width="35%"
          justify="start"
        >
          <div class="text-h4 white--text">
            Edit Your Profile
          </div>
        </v-sheet>
    
        <v-form>
          <v-container class="py-0">
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field label="Status:" disabled />
              </v-col>
    
              <v-col cols="12" md="4">
                <v-text-field class="purple-input" label="User Name" />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="Status:" disabled />
              </v-col>
    
              <v-col cols="12" md="4">
                <v-text-field class="purple-input" label="User Name" />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="Status:" disabled />
              </v-col>
    
              <v-col cols="12" md="4">
                <v-text-field class="purple-input" label="User Name" />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="Status:" disabled />
              </v-col>
    
              <v-col cols="12" md="4">
                <v-text-field class="purple-input" label="User Name" />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="Status:" disabled />
              </v-col>
    
              <v-col cols="12" md="4">
                <v-text-field class="purple-input" label="User Name" />
              </v-col>
    
             
              <v-col cols="12" md="4">
              <v-file-input
                      label="selectImage"
                      filled
                      prepend-icon="mdi-camera"
                    ></v-file-input>
              </v-col>
    
           
    
              <v-col cols="12" class="text-right">
                <v-btn color="success" class="mr-0"> Update Profile </v-btn>
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
            src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
          >
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0" cols="12">
                <v-avatar class="profile" color="grey" size="164" tile>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="">
                      ທ່ານ {{user.name}}
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >ສະຖານະ: {{user.status}}</v-list-item-subtitle
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
import VueCookies from 'vue-cookies'
// Vue.use(VueCookies, { expires: '1d'})

export default {
  data: () => ({
     user: []


  }),
  mounted () {
    // this.userData = window.$cookies.get("user");
},

};

</script>
