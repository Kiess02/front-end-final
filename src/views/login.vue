<template>
  <main>
    <v-container fluid class="px-3" mt-3>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8" class="px-3">
          <v-card class="elevation-12" mt-3>
            <v-row>
              <v-col cols="12" md="8">
                <v-card-text class="mt-12">
                  <h1
                    class="text-center blue--text"
                    style="font-size: xx-large"
                    align="center"
                  >
                    ເຂົ້າສູ່ລະບົບ
                  </h1>

                  <h4 class="text-center mt-4">
                    ກະລຸນາປ້ອນຂໍ້ມູນຂອງທ່ານດັ່ງລຸ່ມນີ້
                  </h4>
                  <v-form @submit.prevent="login">
                    <v-text-field
                      label="ກະລຸນາປ້ອນອີເມວ"
                      prepend-icon="mdi-account"
                      type="int"
                      color="teal accent-3"
                      v-model="formLogin.email"
                    />

                    <v-text-field
                      label="ກະລຸນາປ້ອນລະຫັດຜ່ານ"
                      prepend-icon="mdi-lock"
                      type="password"
                      color="teal accent-3"
                      v-model="formLogin.password"
                    />
                
                    
                    <div class="text-center mt-5">


                            

                      <v-btn
                        type="submit"
                        rounded
                        
                        color="blue lighten-2"
                        dark
                        align="center"
                        >ເຂົ້າສູ່ລະບົບ</v-btn
                      >
                    </div>
                  
                  </v-form>
                  <!-- <h3 class="text-center mt-4">Forgot your password ?</h3> -->
                </v-card-text>
                <div class="text-center mt-3"></div>
              </v-col>
              <v-col cols="12" md="4" class="blue lighten-2">
                <v-card-text class="white--text mt-12">
                  <h1 class="text-center" style="font-size: xx-large">
                    ສະບາຍດີ!
                  </h1>
                  <br />
                  <h4 class="text-center">
                    ຍິນດີຕ້ອນຮັບສູ່ລະບົບຈັດການເອກະສານສູນກາງແນວລາວສ້າງຊາດ!
                  </h4>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import VueCookies from "vue-cookies";
Vue.use(VueCookies, {
  // options here
});
Vue.$cookies.config("1d");
import Router from "vue-router";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(Router);
export default {
  data() {
    return {
      formLogin: {
        email: "",
        password: "",
      },
    };
  },
  created() {
    // this.$cookie.set("keyName", keyValue, "expiring time")
  },

  methods: {
    login() {
      axios
        .post("http://127.0.0.1:8000/api/authenticate", this.formLogin)
        .then((res) => {
          var user = res.data.value;
          if (user == "error" || user == "notFound") {
            this.$swal.fire("ລະຫັດຜ່ານ ຫຼື ບັນຊີບໍ່ຖືກຕ້ອງ");
            this.$router.push({ name: "login" });
          } else {
            window.$cookies.set("user", user);
            this.$router.push({ name: "dashboard" });
            console.log(this.$cookies.get("user").name);
          }
        })
        .catch((error) => {
          console.log(error.res.data);
        });
    },
  },
};
</script>
