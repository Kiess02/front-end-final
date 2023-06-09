<template>
  <v-btn @click="showAlert">Hello world</v-btn>
</template>

<script>
export default {
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal.fire( 'ທ່ານຕ້ອງການລຶບແທ້ບໍ?',
  'ຖ້າລຶບແລ້ວຈະບໍ່ສາມາດກູ້ຄືນໄດ້?',
  'question');
    },
  },
};
</script>