<template>
    <div>
      <v-card height="550px" width="700px" class="mx-auto mt-5">
        <v-card-title class="justify-center">
          <h2  >ໃບຕິດຕາມເອກະສານ</h2>
        </v-card-title>
        <v-form v-model="valid">
            <v-container>
              <v-row>
                
                <v-col cols="6">
                  <v-select
                    v-model="depart_Id"
                    :items="departs_Id"
                    item-text="department_Name"
                    item-value="depart_Id"
                    prepend-icon="mdi-file-send"
                    label="ກະລຸນາລະບຸປາຍທາງທີ່ຈະສົ່ງ"
                 
                  ></v-select>
                </v-col>
    
               
                <v-col cols="12" md="6">
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="ລົງວັນທີ່, ເດືອນ, ປີ"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        required
                        :error-messages="dateErrors"
                        @input="$v.date.$touch()"
                        @blur="$v.date.$touch()"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
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
                <v-col cols="12" md="6">
                  <v-select
                    v-model="doc_Category_Id"
                    :items="level"
                    item-text="category_Name"
                    item-value="level"
                    label="ລະດັບ"
                    prepend-icon="fas fa-list"
                    required
                   
                  ></v-select>
                </v-col>
                <v-col cols="12" md="6">
                  <v-select
                    v-model="doc_Category_Id"
                    :items="purpose"
                    item-text="category_Name"
                    item-value="purpose"
                    label="ຈຸດປະສົງ"
                    prepend-icon="fas fa-list"
                    required
                  
                  ></v-select>
                </v-col>
                <v-col cols="12" md="6">
                    <v-col cols="12">
                        <v-textarea
                          v-model="bio"
                          color="teal"
                        >
                          <template v-slot:label>
                            <div>
                             ຄຳເຫັນຫົວໜ້າການຈັດຕັ້ງ
                            </div>
                          </template>
                        </v-textarea>
                      </v-col>
                </v-col>
                <v-divider vertical ></v-divider>
                <v-col cols="12" md="6">
                    <v-col cols="12">
                        <v-textarea
                          v-model="bio"
                          color="teal"
                        >
                          <template v-slot:label>
                            <div>
                            ຄຳເຫັນ(ຜູ້ໄດ້ຮັບມອບໝາຍພິຈາລະນາແກ້ໄຂເອກະສານ)
                            </div>
                          </template>
                        </v-textarea>
                      </v-col>
                </v-col>
              </v-row>
            </v-container>
          </v-form>

          <br>
          <template>
            <v-row
            align="center"
            justify="center"
          >
           
            <v-btn
              depressed
              color="primary"
              class="mx-2"
            >
              ບັນທຶກ
            </v-btn>
        
            <v-btn
              depressed
              color="error"
            >
              ຍົກເລີກ
            </v-btn>
          
          </v-row>
          </template>
          </v-card>
    </div>
</template>
<script>

import axios from "axios";
export default {
  data: () => ({
      
      level: [
        'ທຳມະດາ',
        'ດ່ວນ',
        'ດ່ວນທີ່ສຸດ',
        'ລັບ',
        'ລັບສະເພາະ',
        'ລັບທີ່ສຸດ',
        
      ], 
      purpose: [
        'ຂໍລາຍເຊັນ',
        'ຂໍຄຳເຫັນ',
        'ຂໍຄຳຊີ້ນຳ',
        'ຂໍອະນຸມັດ',
        'ຈັດຕັ້ງປະຕິບັດ',
        'ເພື່ອຊາບ',
        
      ],
  
      departs_Id: [],
     
     
      
    }),

mounted() {
  this.fetchDepartName();
},


    methods: {
      fetchDepartName() {

axios.get("http://127.0.0.1:8000/api/Department/all").then((resp) => {
  this.departs_Id = resp.data.data
  console.log(this.departs_Id)
  
});
},
    },




    formSubmit(e) {
     

      axios
        .post("http://127.0.0.1:8000/api/inbound_to_Department/add", input)
        .then(
          function (response) {
            console.log(response.data);
          },
          function (error) {
            console.log(error.response.data);
          }
        );
    },
}
</script>