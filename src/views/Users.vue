<template>
  <v-main class="pl-4">
    <div>
      <v-data-table
        :headers="headers"
        :items="show"
        dark
        :loading="myloadingvariable"
        loading-text="ກຳລັງໂຫຼດ... ກະລຸນາລໍຖ້າ"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>ລາຍຊື່ຜູ້ໃຊ້</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="1000px">
              <template #activator="{ on: dialog }">
                <v-tooltip left>
                  <template #activator="{ on: tooltip }">
                    <v-btn
                      v-on="{ ...tooltip, ...dialog }"
                      class="mx-2"
                      fab
                      dark
                      color="indigo"
                      ><v-icon dark> mdi-plus </v-icon></v-btn
                    >
                  </template>
                  <span>ເພີ່ມຜູ້ໃຊ້</span>
                </v-tooltip>
              </template>

              <v-card height="400px" class="pa-1">
                <v-card-title>
                  <h2>ເພີ່ມຜູ້ໃຊ້</h2>
                </v-card-title>
                <v-container>
                  <v-form @submit="formSubmit" enctype="multipart/form-data">
                    <v-row>
                      <v-col cols="12" sm="4">
                        <v-text-field
                          v-model="firstname"
                          @input="$v.firstname.$touch()"
                          @blur="$v.firstname.$touch()"
                          :error-messages="firstnameErrors"
                          label="ຊື່"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="4">
                        <v-text-field
                          v-model="lastname"
                          @input="$v.lastname.$touch()"
                          @blur="$v.lastname.$touch()"
                          :error-messages="lastnameErrors"
                          label="ນາມສະກຸນ"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="4">
                        <v-select
                          v-model="depart_Id"
                          :items="departs_Id"
                          item-text="department_Name"
                          item-value="depart_Id"
                          prepend-icon="mdi-file-send"
                          label="ເລືອກກົມ"
                          :error-messages="depart_IdErrors"
                          @input="$v.depart_Id.$touch()"
                          @blur="$v.depart_Id.$touch()"
                        ></v-select>
                      </v-col>

                      <v-col cols="12" sm="4">
                        <!-- <v-text-field
                      v-model="gender"
                      :counter="10"
                     
                      @input="$v.gender.$touch()"
                      @blur="$v.gender.$touch()"
                      :error-messages="genderErrors"
                      label="ເພດ"
                      required
                    ></v-text-field> -->
                        <v-select
                          v-model="gender"
                          :items="genders"
                          @input="$v.gender.$touch()"
                          @blur="$v.gender.$touch()"
                          :error-messages="genderErrors"
                          label="ເພດ"
                          required
                          item-value="gender"
                          prepend-icon=""
                        ></v-select>
                      </v-col>

                      <v-col cols="12" sm="4">
                        <v-text-field
                          v-model="username"
                          @input="$v.username.$touch()"
                          @blur="$v.username.$touch()"
                          :error-messages="usernameErrors"
                          label="ຊື່ຜູ້ໃຊ້"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="4">
                        <v-text-field
                          v-model="email"
                          :error-messages="emailErrors"
                          label="ອີເມວ"
                          required
                          @input="$v.email.$touch()"
                          @blur="$v.email.$touch()"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="4">
                        <v-text-field
                          v-model="password"
                          @input="$v.password.$touch()"
                          @blur="$v.password.$touch()"
                          :error-messages="passwordErrors"
                          label="ລະຫັດຜ່ານ"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="4">
                        <v-select
                          v-model="status"
                          :items="statuss"
                          @input="$v.status.$touch()"
                          @blur="$v.status.$touch()"
                          :error-messages="statusErrors"
                          label="ສະຖານະ"
                          required
                          prepend-icon=""
                        ></v-select>
                      </v-col>

                      <v-col cols="12" sm="4">
                        <v-file-input
                          label="ຮູບ"
                          accept="image/png, image/gif, image/jpeg"
                          show-size
                          :error-messages="imageErrors"
                          @change="onFileChange"
                          @input="$v.image.$touch()"
                          @blur="$v.image.$touch()"
                          prepend-icon="mdi-camera"
                        ></v-file-input>
                      </v-col>
                    </v-row>

                    <v-row align="center" justify="center">
                      <v-btn
                        class="btn btn-success mx-2"
                        @click.native="formSubmit"
                        @click="submit"
                        color="primary"
                      >
                        ບັນທຶກ
                      </v-btn>

                      <v-btn class="btn btn-success" color="error">
                        ຍົກເລີກ
                      </v-btn>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>

        <template>
          <v-toolbar flat>
            <v-toolbar-title>ລາຍຊື່ຜູ້ໃຊ້</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog2" max-width="1000px">
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <v-card class="mt-4 mx-auto pa-4">
                    <v-sheet
                      class="v-sheet--offset"
                      color="green"
                      elevation="3"
                      max-width="55%"
                      justify="start"
                    >
                      <div class="white--text" style="font-size: x-large">
                        ແກ້ໄຂໂປຣໄຟລ
                      </div>
                    </v-sheet>

                    <v-form @submit="formSubmit" enctype="multipart/form-data">
                      <v-container class="py-0">
                        <v-row>
                          <v-col cols="12" md="4">
                            <v-text-field
                              v-model="myData.status"
                              label="Status:"
                              disabled
                            />
                          </v-col>

                          <v-col cols="12" md="4">
                            <v-text-field
                              v-model="myData.id"
                              class="purple-input"
                              label="ລະຫັດຜູ້ໃຊ້"
                            />
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-text-field
                              v-model="myData.depart"
                              label="ລະຫັດກົມ"
                            />
                          </v-col>

                          <v-col cols="12" md="4">
                            <v-text-field
                              v-model="myData.gender"
                              class="purple-input"
                              label="ເພດ"
                            />
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-text-field v-model="myData.Fname" label="ຊື່" />
                          </v-col>

                          <v-col cols="12" md="4">
                            <v-text-field
                              v-model="myData.Lname"
                              class="purple-input"
                              label="ນາມສະກຸນ"
                            />
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-text-field
                              v-model="myData.username"
                              label="ຊື່ຜູ້ໃຊ້"
                            />
                          </v-col>

                          <v-col cols="12" md="4">
                            <v-text-field
                              v-model="myData.email"
                              readonly
                              class="purple-input"
                              label="ອີເມວ"
                            />
                          </v-col>

                          <v-col cols="12" md="4">
                            <v-file-input
                              label="ກະລຸນາເລືອກຮູບຂອງທ່ານ"
                              prepend-icon="mdi-camera"
                            ></v-file-input>
                          </v-col>

                          <!-- <v-col cols="12" class="text-right">
                      <v-btn color="success" class="mr-0" @click.native="formSubmit" > ອັບເດດ ໂປຣໄຟລ </v-btn>
                    </v-col> -->
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4" class="">
                  <!-- profile -->
                  <v-card class="mx-auto" max-width="434" tile>
                    <v-img
                      height="100%"
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBwcIBwgHBwcHBwoHBwcHBw8ICQgKIBEWFiARHxMYHSggGBolGx8VITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDjcZFRkrKy0tLS0rNysrNy0tKysrNys3LSsrKzc3Kys3Kys3Ny0rNysrKzcrKystKy0rLSstLf/AABEIALEBHAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIDBP/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABcBAQEBAQAAAAAAAAAAAAAAAAABBQT/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD1lYXWzAUUEVDAUKIqaBApFBFEEigCKAIoGUQADQBkNCqM0NAGQaBADQoGWgDNDVAOqKQCKAwxQwVFEEVGkEUQBKBIoAmgARxAyigZDQBkNAGKG2aozQ1RRGQ0AZBCgBQOhRQBRFRRBQxQxAlQgiiCKOIDCVgoTSBkY1iBkY0AZDYVGKGqKDIasZBkNBRmstiiMBoUGQ0lHRIoqIMAkQwDDFDEDDBGoChihQKJFBRAIoAMaQMhoAyGgDLNbrNVGaK1RQYDVAM0NMqMhoCMhpA2koKSCBMBiBjUZjUAwwRqAYYI1EVFQgikCRSARAANBRkVoUGWa0KIzWa3WaozQ1WaDIaoUZDQBkNAGkCISCKYYDEDGozGoBjUZjUAxqMwxFaIhApJApIEkgApFUANACs1qigzWa1RVRmimigyK0yAoKUZRQjJBAmMmCtQgg1DGY1EGoYzDAajUZhRWizCDRZIEhIFBAgkoAQArNIoCims1UFFNFBkGiqBKgEkBGSyVGoWTEGjGYYK01GGog1DGYYDcLMINFkorRZINJkgUECQQIVAEzTQIKKqKoKKazQQQUQSBBIHMslUaLJQahZMBqNRiNCtGMlBqNMQg2WCDa1nTqDS1nTop1aFoHQNQEAKhAAKiqigqyQoAgCQQiSAOZZhijRZhBoslBqNRgwG4WYYK0YyUGiyQaTJBpMkCggIWgCEAQQBUIAqEFBQgIkgBCQORBUaQIEiGATAUGoWSK0WSDSBAlkoEskCggSCBIACEFEEAQQECQBBBQoAGYUgUaSAkIGoYkgYUhSUgKSAxJAUkgkkCCQIVIAClGRSgZoSECCUQqQIJA//2Q=="
                    >
                      <v-row align="end" class="fill-height">
                        <v-col align-self="start" class="pa-0" cols="12">
                          <v-avatar
                            class="profile"
                            color="grey"
                            size="164"
                            tile
                          >
                            <v-img :src="profile"></v-img>
                          </v-avatar>
                        </v-col>
                        <v-col class="py-0">
                          <v-list-item color="rgba(0, 0, 0, .4)" dark>
                            <v-list-item-content>
                              <v-list-item-title class="">
                                ທ່ານ {{ myData.Fname }} {{ myData.Lname }}
                              </v-list-item-title>
                              <v-list-item-subtitle
                                >ສະຖານະ:
                                {{ myData.status }}</v-list-item-subtitle
                              >
                            </v-list-item-content>
                          </v-list-item>
                        </v-col>
                      </v-row>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-dialog>
          </v-toolbar>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            color="error"
            class="mr-2"
            @click="DeleteShow(item.user_Id)"
          >
            mdi-delete
          </v-icon>

          <v-icon small @click="dialog4 = true"> mdi-book </v-icon>
        </template>
      </v-data-table>
      <v-row justify="center">
        <v-dialog
          v-model="dialog4"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
          scrollable
        >
          <v-card tile>
            <v-toolbar flat dark color="primary">
              <v-btn icon dark @click="dialog4 = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>ຕັ້ງຄ່າຜູ້ໃຊ້</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="dialog = false"> ບັນທຶກ </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <div class="pl-1 mt-3">
              <v-container id="user-profile" fluid tag="section">
                <v-row justify="center">
                  <v-col cols="12" md="8">
                    <v-card class="mt-4 mx-auto pa-4">
                      <v-sheet
                        class="v-sheet--offset"
                        color="green"
                        elevation="3"
                        max-width="55%"
                        justify="start"
                      >
                        <div class="white--text" style="font-size: x-large">
                          ແກ້ໄຂໂປຣໄຟລ
                        </div>
                      </v-sheet>

                      <v-form
                        @submit="formSubmit"
                        enctype="multipart/form-data"
                      >
                        <v-container class="py-0">
                          <v-row>
                            <v-col cols="12" md="4">
                              <v-text-field
                                v-model="myData.status"
                                label="Status:"
                                disabled
                              />
                            </v-col>

                            <v-col cols="12" md="4">
                              <v-text-field
                                v-model="myData.id"
                                class="purple-input"
                                label="ລະຫັດຜູ້ໃຊ້"
                              />
                            </v-col>
                            <v-col cols="12" md="4">
                              <v-text-field
                                v-model="myData.depart"
                                label="ລະຫັດກົມ"
                              />
                            </v-col>

                            <v-col cols="12" md="4">
                              <v-text-field
                                v-model="myData.gender"
                                class="purple-input"
                                label="ເພດ"
                              />
                            </v-col>
                            <v-col cols="12" md="4">
                              <v-text-field
                                v-model="myData.Fname"
                                label="ຊື່"
                              />
                            </v-col>

                            <v-col cols="12" md="4">
                              <v-text-field
                                v-model="myData.Lname"
                                class="purple-input"
                                label="ນາມສະກຸນ"
                              />
                            </v-col>
                            <v-col cols="12" md="4">
                              <v-text-field
                                v-model="myData.username"
                                label="ຊື່ຜູ້ໃຊ້"
                              />
                            </v-col>

                            <v-col cols="12" md="4">
                              <v-text-field
                                v-model="myData.email"
                                readonly
                                class="purple-input"
                                label="ອີເມວ"
                              />
                            </v-col>

                            <v-col cols="12" md="4">
                              <v-file-input
                                label="ກະລຸນາເລືອກຮູບຂອງທ່ານ"
                                prepend-icon="mdi-camera"
                              ></v-file-input>
                            </v-col>

                            <!-- <v-col cols="12" class="text-right">
                          <v-btn color="success" class="mr-0" @click.native="formSubmit" > ອັບເດດ ໂປຣໄຟລ </v-btn>
                        </v-col> -->
                          </v-row>
                        </v-container>
                      </v-form>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="4" class="">
                    <!-- profile -->
                    <v-card class="mx-auto" max-width="434" tile>
                      <v-img
                        height="100%"
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBwcIBwgHBwcHBwoHBwcHBw8ICQgKIBEWFiARHxMYHSggGBolGx8VITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDjcZFRkrKy0tLS0rNysrNy0tKysrNys3LSsrKzc3Kys3Kys3Ny0rNysrKzcrKystKy0rLSstLf/AABEIALEBHAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAAIDBP/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABcBAQEBAQAAAAAAAAAAAAAAAAABBQT/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD1lYXWzAUUEVDAUKIqaBApFBFEEigCKAIoGUQADQBkNCqM0NAGQaBADQoGWgDNDVAOqKQCKAwxQwVFEEVGkEUQBKBIoAmgARxAyigZDQBkNAGKG2aozQ1RRGQ0AZBCgBQOhRQBRFRRBQxQxAlQgiiCKOIDCVgoTSBkY1iBkY0AZDYVGKGqKDIasZBkNBRmstiiMBoUGQ0lHRIoqIMAkQwDDFDEDDBGoChihQKJFBRAIoAMaQMhoAyGgDLNbrNVGaK1RQYDVAM0NMqMhoCMhpA2koKSCBMBiBjUZjUAwwRqAYYI1EVFQgikCRSARAANBRkVoUGWa0KIzWa3WaozQ1WaDIaoUZDQBkNAGkCISCKYYDEDGozGoBjUZjUAxqMwxFaIhApJApIEkgApFUANACs1qigzWa1RVRmimigyK0yAoKUZRQjJBAmMmCtQgg1DGY1EGoYzDAajUZhRWizCDRZIEhIFBAgkoAQArNIoCims1UFFNFBkGiqBKgEkBGSyVGoWTEGjGYYK01GGog1DGYYDcLMINFkorRZINJkgUECQQIVAEzTQIKKqKoKKazQQQUQSBBIHMslUaLJQahZMBqNRiNCtGMlBqNMQg2WCDa1nTqDS1nTop1aFoHQNQEAKhAAKiqigqyQoAgCQQiSAOZZhijRZhBoslBqNRgwG4WYYK0YyUGiyQaTJBpMkCggIWgCEAQQBUIAqEFBQgIkgBCQORBUaQIEiGATAUGoWSK0WSDSBAlkoEskCggSCBIACEFEEAQQECQBBBQoAGYUgUaSAkIGoYkgYUhSUgKSAxJAUkgkkCCQIVIAClGRSgZoSECCUQqQIJA//2Q=="
                      >
                        <v-row align="end" class="fill-height">
                          <v-col align-self="start" class="pa-0" cols="12">
                            <v-avatar
                              class="profile"
                              color="grey"
                              size="164"
                              tile
                            >
                              <v-img :src="profile"></v-img>
                            </v-avatar>
                          </v-col>
                          <v-col class="py-0">
                            <v-list-item color="rgba(0, 0, 0, .4)" dark>
                              <v-list-item-content>
                                <v-list-item-title class="">
                                  ທ່ານ {{ myData.Fname }} {{ myData.Lname }}
                                </v-list-item-title>
                                <v-list-item-subtitle
                                  >ສະຖານະ:
                                  {{ myData.status }}</v-list-item-subtitle
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

            <div style="flex: 1 1 auto"></div>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </v-main>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  date: null,
  menu: false,
  mixins: [validationMixin],

  validations: {
    image: { required },
    depart_Id: { required },
    gender: { required },
    firstname: { required },
    lastname: { required },
    username: { required },
    email: { required, email },
    password: { required },
    status: { required },
    // image: "",
    // depart_Id: "",
    // gender: "",
    // firstname: "",
    // lastname: "",
    // username: "",
    // email: "",
    // password: "",
    // status: "",
  },

  data: () => ({
    myData: [],
    profile: "",
    image: "",
    depart_Id: "",
    gender: "",
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    status: "",
    user_Id: "",
    //////
    myloadingvariable: true,
    headers: [
      {
        text: "ລະຫັດຜູ້ໃຊ້",
        align: "start",
        sortable: false,
        value: "user_Id",
      },
      { text: "ລະຫັດກົມ", value: "depart_Id" },
      { text: "ເພດ", value: "gender" },
      { text: "ຊື່ ແລະ ນາມສະກຸນ", value: "firstname" },
      { text: "ອີເມວ", value: "email" },
      { text: "ສະຖານະ", value: "status" },

      { text: "Actions", value: "actions", sortable: false },
    ],

    dialog: false,
    dialog2: false,
    dialog4: false,
    dialogDelete: false,
    show: [],
    image: "",
    depart_Id: "",
    gender: "",
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    status: "",
    status: null,

    statuss: [
      {
        text: "ແອັດມິນ",
        value: "admin",
      },
      {
        text: "ຜູ້ຮັບ",
        value: "receiver",
      },
      {
        text: "ຜູ້ສົ່ງ",
        value: "sender",
      },
    ],
    genders: [
      {
        text: "ຊາຍ",
        value: "male",
      },
      {
        text: "ຍິງ",
        value: "female",
      },
    ],
    checkbox: false,

    departs_Id: [],
  }),

  mounted() {
    this.fetchData();
    setInterval(() => this.fetchData(), 3000);
    this.fetchDepartName();
  },
  //   mounted(){
  //   this.cookies();

  // },
  // methods: {

  // cookies () {
  //   this.myData = this.$cookies.get('user')
  //   console.log('success',this.myData)

  // }

  // }
  methods: {
    async fetchData() {
      axios.get("http://127.0.0.1:8000/api/user/all").then((response) => {
        this.show = response.data.data;
        this.myloadingvariable = false;
        //console.log(response.data.data);
        console.log("successfully fetch");
      });
    },
    fetchDepartName() {
      axios.get("http://127.0.0.1:8000/api/Department/all").then((resp) => {
        this.departs_Id = resp.data;
        console.log("successfully fetch");
      });
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
      if (formData !== null && formData !== "") {
        axios
          .post("http://127.0.0.1:8000/api/user/add", formData, config)
          .then((response) => {
            //console.log(response);
            console.log(response.data.data);
            this.$swal.fire({
              title: "ບັນທຶກສຳເຫຼັດ!",
              text: "ບັນທຶກຂໍ້ມູນສຳເຫຼັດ.",
              icon: "success",

              showConfirmButton: false,
              timer: 2000,
            });
            this.close();
          })
          .catch((error) => {
            console.log(error.reponse); // logs an object to the console

            // Do something with error data
          });
      }
    },
    submit() {
      this.$v.$touch();
    },
    DeleteShow(user_Id) {
      console.log(user_Id);
      this.$swal
        .fire({
          title: "ທ່ານຕ້ອງການລຶບແທ້ບໍ ?",
          text: "ທ່ານຈະບໍ່ສາມາດກູ້ຄືນຂໍ້ມູນນີ້ໄດ້ອີກ!",
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "ຍົກເລີກ",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ແມ່ນ!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`http://127.0.0.1:8000/api/user/delete/${user_Id}`)
              .then((res) => {
                window.location.reload();
              });

            this.$swal.fire({
              title: "ລົບສຳເລັດ!",
              text: "ຂໍ້ມູນລົບສຳເລັດແລ້ວ.",
              icon: "success",
              ConfirmButtonText: "ຕົກລົງ",
              showConfirmButton: false,
              timer: 2000,
            });
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            this.$swal.fire({
              title: "ລົບບໍ່ສຳເລັດ",
              text: "ຂໍ້ມູນຂອງທ່ານຍັງປອດໄພ :)",
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
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
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
  },
};
</script>

<style scoped lang="css"></style>
