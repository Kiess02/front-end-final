<template>
  <main>
  <v-container fluid class="px-3" mt-3>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8" class="px-3">
        <v-card class="elevation-12" mt-3>
          <v-row>
            <v-col cols="12" md="8">
              <v-card-text class="mt-12">
                <h1 class="text-center display-2 blue--text">Sign in</h1>
                <!-- <div class="text-center mt-4">
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>fab fa-facebook-f</v-icon>
                        </v-btn>
  
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>fab fa-google-plus-g</v-icon>
                        </v-btn>
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>fab fa-linkedin-in</v-icon>
                        </v-btn>
                      </div> -->
                <h4 class="text-center mt-4">
                  Ensure your email for registration
                </h4>
                <v-form @submit.prevent="login">
                  <v-text-field
                    label="Enter your email user"
                    prepend-icon="person"
                    type="int"
                    color="teal accent-3"
                    v-model="formLogin.email"
                  />
                  <!-- <v-text-field
                          label="Enter your username"
                          name="Email"
                          prepend-icon="email"
                          type="text"
                          color="teal accent-3"
                        /> -->

                  <v-text-field
                    label="Password"
                    prepend-icon="lock"
                    type="password"
                    color="teal accent-3"
                    v-model="formLogin.password"
                  />
                  <v-btn type="submit"  rounded color="blue lighten-2" dark
                    >SIGN IN</v-btn
                  >
                </v-form>
                <!-- <h3 class="text-center mt-4">Forgot your password ?</h3> -->
              </v-card-text>
              <div class="text-center mt-3"></div>
            </v-col>
            <v-col cols="12" md="4" class="blue lighten-2">
              <v-card-text class="white--text mt-12">
                <h1 class="text-center display-1">Hello!</h1>
                <h4 class="text-center">
                  Enter your personal details to start!
                </h4>
              </v-card-text>
            </v-col>
          </v-row>

          <!-- <v-row class="fill-height">
                  <v-col cols="12" md="4" class="teal blue lighten-2">
                    <v-card-text class="white--text mt-12">
                      <h1 class="text-center display-1">Welcome Back!</h1>
                      <h5
                        class="text-center"
                      >To Keep connected with us please login </h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined dark @click="step--">Sign In</v-btn>
                    </div>
                  </v-col> -->

          <!-- <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1 class="text-center display-2  accent--text ">Create Account</h1>
                      <div class="text-center mt-4">
                       
                      </div>
                      <h4 class="text-center mt-4">Ensure your email for registration</h4>
                      <v-form>
                        <v-text-field
                          label="Name"
                          name="Name"
                          prepend-icon="person"
                          type="text"
                          color="teal accent-3"
                        />
                        <v-text-field
                          label="Email"
                          name="Email"
                          prepend-icon="email"
                          type="text"
                          color="teal accent-3"
                        /> -->

          <!-- <v-text-field
                          id="password"
                          label="Password"
                          name="password"
                          prepend-icon="lock"
                          type="password"
                          color="teal accent-3"
                        />
                      </v-form>
                    </v-card-text>
                    <div class="text-center mt-5">
                      <v-btn rounded color="teal blue lighten-2" dark>SIGN UP</v-btn>
                    </div>
                  </v-col>
                </v-row>  -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</main>
</template>
<!-- <template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div  />
          </div>
        </template>

        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          Materio
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          Welcome to Materio! 👋🏻
        </h5>
        <p class="mb-0">
          Please sign-in to your account and start the adventure
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="() => {}">
          <VRow>
             email -->
            <!-- <VCol cols="12">
              <VTextField
            
                label="Email"
                type="email"
              />
            </VCol> -->

            <!-- password -->
            <!-- <VCol cols="12">
              <VTextField
                
                label="Password"
               
              
              /> -->

              <!-- remember me checkbox -->
              <!-- <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox
                
                  label="Remember me"
                />

                <a
                  class="ms-2 mb-1"
                  href="javascript:void(0)"
                >
                  Forgot Password?
                </a>
              </div> -->

              <!-- login button -->
              <!-- <VBtn
                block
                type="submit"
                to="/"
              >
                Login
              </VBtn>
            </VCol> -->

            <!-- create account -->
            <!-- <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>New on our platform?</span>
              <RouterLink
                class="text-primary ms-2"
                :to="{ name: 'register' }"
              >
                Create an account
              </RouterLink>
            </VCol>

            <VCol
              cols="12"
              class="d-flex align-center"
            >
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol> -->

            <!-- auth providers -->
            <!-- <VCol
              cols="12"
              class="text-center"
            >
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

  </div> -->
</template>
<script >
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import VueCookies from 'vue-cookies'
Vue.use(VueCookies, { 
  
})
  

export default {
  data() {
    return {
      
      formLogin: {
        email: "",
        password: "",
      },
    
    };
  },
  created(){
    // this.$cookie.set("keyName", keyValue, "expiring time")
  },
  
  methods: {
    login() {
      axios
        .post("http://127.0.0.1:8000/api/authenticate", this.formLogin)
        .then((res) => {
          var user = res.data.value;
            window.$cookies.set('user',user);
          this.$router.push({name:""});
          
        }).catch((error)=>{
          console.log(error.res.data);
        })
   
    },
    
    
  },
};
</script>
