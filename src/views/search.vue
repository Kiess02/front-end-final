<template>
  <div class="pt-6 pl-6 pr-6">
    <v-row>
      <v-col cols="4">
        <v-select
          v-model="DocType"
          :items="items"
          outlined
          label="ເລືອກເອກະສານ"
          required
        ></v-select>
      </v-col>
      <v-col cols="6">
        <!-- <v-text-field
        placeholder="search"
          prepend-inner-icon="mdi-magnify"
          outlined
          style="max-width: auto"
        >
        </v-text-field> -->
        <v-text-field
        label="ຄົ້ນຫາ"
        placeholder="ກະລຸນາປ້ອນເລກທີເອກະສານ"
        outlined
      ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn
        
        outlined
      
        fab
        color="indigo"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: ["ເອກະສານຂາເຂົ້າ", "ເອກະສານຂາອອກ", "ໃບສະໂນດ"],
    };
  },
};
</script>
