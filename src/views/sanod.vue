<template>
  <div class="pl-1 mt-3">
    <v-card height="550px" width="900px" class="mx-auto mt-5">
      <v-card-title class="justify-center">
        <h2>ສ້າງໃບສະໂໜດ</h2>
      </v-card-title>
      <template>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="sanodInfo.user_Id"
                  readonly
                  label="ລະຫັດຜູ້ໃຊ້"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="3">
                <v-menu>
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="sanodInfo.date"
                      label="ວັນເດືອນປີ"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      required
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="sanodInfo.date"
                    no-title
                    scrollable
                    :max="
                      new Date(
                        Date.now() - new Date().getTimezoneOffset() * 60000
                      )
                        .toISOString()
                        .substr(0, 10)
                    "
                    min="1950-01-01"
                  >
                  </v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="12" md="3">
                <v-text-field
                  v-model="sanodInfo.send_to"
                  label="ສົ່ງເຖິງ"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="sanodInfo.title"
                  label="ເລື່ອງ"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </template>

      <!-- sanod -->
      <v-data-table
        :headers="headers2"
        :items="sanod"
        class="elevation-1 font pl-2"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>ອ້າງອິງ</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog2" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                  @click="fetchReferId"
                >
                  ເພີ່ມອ້າງອິງ
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="justify-center">
                  <h2>ອ້າງອິງ</h2>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="referId"
                          label="ລຳດັບ"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="editedItem2.detail"
                          label="ຫົວເລື່ອງ"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text--white
                    @click="save2"
                    class="primary"
                  >
                    ບັນທຶກ
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text--white
                    @click="close2"
                    class="error"
                  >
                    ຍົກເລີກ
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
      </v-data-table>

      <!-- Out-bound Document -->

      <br />
      <pre></pre>

      <v-data-table
        :headers="headers"
        :items="Doc_out_bound"
        class="elevation-1 font pl-2"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>ເອກະສານຂາອອກ</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  ເພີ່ມເອກະສານຂາອອກ
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="justify-center">
                  <h2 class="justify-center">ເພີ່ມເອກະສານຂາອອກ</h2>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="editedItem.doc_title"
                          label="ຫົວເລື່ອງ"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="editedItem.doc_C_Id"
                          label="ເລກທີເອກະສານ"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="editedItem.quantity"
                          label="ຈຳນວນ"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="editedItem.purpose"
                          label="ຈຸດປະສົງ"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text--white
                    @click="save"
                    class="primary"
                  >
                    ບັນທຶກ
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text--white
                    @click="close"
                    class="error"
                  >
                    ຍົກເລີກ
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
      </v-data-table>

      <br />

      <template>
        <div class="text-center">
          <v-btn @click="sanodSubmit" rounded color="primary" dark>
            ບັນທຶກ
          </v-btn>
        </div>
      </template>
    </v-card>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  data: () => ({
    //doc_outbound
    myloadingvariable: true,
    dialog: false,
    email: "",
    date: "",
    user_Id: "",
    referId: "",
    OutdeId: "",
    sanodFor: {},
    headers: [
      {
        text: "ຫົວເລື່ອງ",
        align: "start",
        sortable: false,
        value: "doc_title",
      },
      { text: "ເລກທີເອກະສານ", value: "doc_C_Id" },
      { text: "ມາຈາກ", value: "from" },
      { text: "ຈຳນວນ", value: "quantity" },
      { text: "ຈຸດປະສົງ", value: "purpose" },
    ],
    Doc_out_bound: [],
    editedIndex: -1,
    editedItem: {
      doc_title: "",
      doc_C_Id: "",
      from: "",
      quantity: "",
      purpose: "",
    },
    defaultItem: {
      doc_title: "",
      doc_C_Id: "",
      from: "",
      quantity: "",
      purpose: "",
    },

    //sanod
    dialog2: false,

    headers2: [
      {
        text: "ລຳດັບ",
        align: "start",
        sortable: false,
        value: "referId",
      },
      { text: "ເລື່ອງ", value: "detail" },
    ],
    sanod: [],
    editedIndex2: -1,
    editedItem2: {
      detail: "",
    },
    defaultItem2: {
      detail: "",
    },

    sanodInfo: {
      user_Id: "",
      date: "",
      send_to: "",
      title: "",
      refer: [
        {
          detail: "",
        },
      ],
      doc_out: [
        {
          outbound_Detail_Id: "",
          doc_title: "",
          doc_C_Id: "",
          from: "",
          quantity: "",
          purpose: "",
        },
      ],
    },
    sanodId:'',
  }),

  mounted() {
    this.fetchUserId(), this.fetchOutDeId();
  },
  watch: {
    dialog2(val) {
      val || this.close2();
    },
    dialog(val) {
      val || this.close();
    },
  },

  methods: {
    close2() {
      this.dialog2 = false;
      this.$nextTick(() => {
        this.editedItem2 = Object.assign({}, this.defaultItem2);
        this.editedIndex2 = -1;
      });
    },

    save2() {
      if (this.editedIndex2 > -1) {
        Object.assign(this.sanod[this.editedIndex2], this.editedItem2);
      } else {
        this.sanod.push(this.editedItem2);
      }
      this.close2();
      this.sanodInfo.refer = this.sanod;
      console.log(this.sanodInfo.refer);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.Doc_out_bound[this.editedIndex], this.editedItem);
      } else {
        this.Doc_out_bound.push(this.editedItem);
      }
      this.close();
      this.editedItem.from = window.$cookies.get("user").depart;
      this.sanodInfo.doc_out = this.Doc_out_bound;

      console.log(this.sanodInfo.doc_out);
    },
    sanodSubmit() {
      console.log(this.sanodInfo);
      axios
        .post(
          "http://127.0.0.1:8000/api/outbound_detail/makeOutForm",
          this.sanodInfo
        )
        .then((res) => {
          this.sanodId = res.data.data
          this.displaySanod(this.sanodId)
          console.log('success');
        });
    },
    displaySanod(sanodId) {
      window.open(`http://127.0.0.1:8000/OutDetail/view/${sanodId}`, "_blank");
    },
    fetchUserId() {
      let userId = window.$cookies.get("user").id;
      this.sanodInfo.user_Id = userId;
    },
    fetchReferId() {
      this.referId = this.sanod.length + 1;
      console.log(this.referId);
    },
    fetchOutDeId() {
      axios.get("http://127.0.0.1:8000/api/outbound_detail/all").then((res) => {
        // let OutDeId = res.data.length;
        let OutDeIds = Object.keys(res.data).length;
        this.OutdeId = OutDeIds;
        console.log(this.OutdeId);
        console.log(res);
      });
    },
  },
};
</script>

<style scoped lang="css"></style>
