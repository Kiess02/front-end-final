<template>
    <div>
      <v-sheet
      height="400"
      class="overflow-hidden"
      style="position: relative;"
      right
    >
      <v-container class="fill-height">
        <v-row
          align="center"
          justify="center"
        >
          <v-btn
            color="pink"
            dark
            @click.stop="drawer2 = !drawer2"
          >
            Toggle
          </v-btn>
        </v-row>
      </v-container>
  
      <v-navigation-drawer
        v-model="drawer2"
        absolute
        temporary
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense>
          <v-list-item
            v-for="item in login"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>
    </div>
  
  
</template>

<script>
export default {
  name: "topbarlogin",
  data: () => ({
    drawer: false,
    drawer2: false,
    login: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
    

 
  }),
};
</script>
<style>
.decoration{
  text-decoration: none;
}
</style>
