<template>
  <div>
    <v-card height="550px" width="700px" class="mx-auto mt-5">
      <v-card-title class="justify-center">
        <h2>ໃບຕິດຕາມເອກະສານ</h2>
      </v-card-title>
      
        <v-container>
          <v-form @submit.prevent="formSubmit">
          <v-row>
            <v-col cols="6">
              <v-select v-model="relationshipForm.depart_Id" :items="departs_Id" item-text="department_Name"
                item-value="depart_Id" prepend-icon="mdi-file-send" label="ກະລຸນາລະບຸປາຍທາງທີ່ຈະສົ່ງ"></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="date" label="ລົງວັນທີ່, ເດືອນ, ປີ" prepend-icon="mdi-calendar" readonly
                    v-bind="attrs" v-on="on" required></v-text-field>
                </template>
                <v-date-picker v-model="relationshipForm.date" no-title scrollable :max="new Date(
                  Date.now() - new Date().getTimezoneOffset() * 60000
                )
                    .toISOString()
                    .substr(0, 10)
                  " min="1950-01-01">
                </v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="12" md="6">
              <v-col cols="12">
                <v-textarea v-model="relationshipForm.dear" label="" prepend-icon="fas fa-list" required>
                  <template v-slot:label>
                    <div>ຮຽນ</div>
                  </template>
                </v-textarea>
              </v-col>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="12" md="6">
              <v-col cols="12">
                <v-textarea v-model="relationshipForm.title" label="" prepend-icon="fas fa-list" required>
                  <template v-slot:label>
                    <div>ເລື່ອງ</div>
                  </template>
                </v-textarea>
              </v-col>
            </v-col>
          </v-row>

          <v-row align="center" justify="center">
            <v-btn depressed color="primary" class="mx-2" type="submit">
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
    relationshipForm: {
      dear: "",
      title: "",
      date: "",
      depart_Id: "",
    },
   
    departs_Id: [],
  }),

  mounted() {
    this.fetchDepartName();
  },

  methods: {
    fetchDepartName() {
      axios.get("http://127.0.0.1:8000/api/Department/all").then((resp) => {
        this.departs_Id = resp.data;
        console.log(this.departs_Id);
      });
    },
    formSubmit() {

      console.log(this.relationshipForm);

      axios.post(
        "http://127.0.0.1:8000/api/inbound_to_Department/add", this.relationshipForm)
        .then((resp) => {
        this.relationshipForm = resp.data.data;
        console.log(this.relationshipForm);
      });
       
      
     
    },
  },
};
</script>
