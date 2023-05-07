<template>
  <v-app>
<div id="app">

  <sidebar/>
  <v-main>
    <router-view/>
  </v-main>
</div>
</v-app>
  
</template>

<script lang="ts">
import sidebar from '../src/components/sidebar.vue'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
Vue.use(Vuetify);

export default Vue.extend({
  name: 'App',
 components:{
sidebar,
 },
  data: () => ({
    //
  }),
});
</script>
<style>
#app{
  font-family: Phetsarath OT;
}
</style>
