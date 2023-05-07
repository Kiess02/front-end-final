<template>
	
		<v-navigation-drawer
		  permanent
		  expand-on-hover
		  v-model="drawer"
      clipped
		>
		 
		<v-list-item class=" py-6">
            <v-list-item-title class="text-capitalize" align="center">
                <v-icon x-large>fa-folder-open</v-icon> Document manager
            </v-list-item-title>
        </v-list-item>
        <div class="text-center">
         
         
        </div>
      
      <v-divider></v-divider>
   <v-list >

    <router-link to="/" class="decoration">
        <v-list-item   link>
          <v-list-item-icon>
            <v-icon>mdi-microsoft-windows</v-icon>
          </v-list-item-icon>
  
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </router-link>
      
    <router-link to="/table" class="decoration">
        <v-list-item   link>
          <v-list-item-icon>
            <v-icon>fa-duotone fa-file</v-icon>
          </v-list-item-icon>
  
          <v-list-item-content>
            <v-list-item-title>Table</v-list-item-title> 
          </v-list-item-content>
        </v-list-item>
    </router-link>
      </v-list>

         <router-link to="/search" class="decoration">
        <v-list-item   link>
          <v-list-item-icon>
            <v-icon>fa-solid fa-magnifying-glass</v-icon>
          </v-list-item-icon>
  
          <v-list-item-content>
            <v-list-item-title>Search</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </router-link>

    
         <router-link to="/report" class="decoration">
        <v-list-item   link>
          <v-list-item-icon>
            <v-icon>fa-solid fa-flag</v-icon>
          </v-list-item-icon>
  
          <v-list-item-content>
            <v-list-item-title>Report</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </router-link>

    
    <router-link to="/test" class="decoration">
      <v-list-item   link>
        <v-list-item-icon>
          <v-icon>fa-solid fa-flag</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Test</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
  </router-link>

     
  <router-link to="/test2" class="decoration">
    <v-list-item   link>
      <v-list-item-icon>
        <v-icon>fa-solid fa-flag</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>test2</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
</router-link>

<router-link to="/login" class="decoration">
  <v-list-item   link>
    <v-list-item-icon>
      <v-icon>fa-solid fa-flag</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>login</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</router-link>
		</v-navigation-drawer>

  </template>

  <script>


  export default {
    name: "Sidebar3",
    props: ["drawer"],
    
    data() {
      return {
        links: [
      
        
          ["mdi-microsoft-windows", "Dashboard",""],
          ["fa-duotone fa-file", "Table","./table"],
          ["fa-solid fa-magnifying-glass", "Search"],
          ["fa-solid fa-flag", "Report"],
          ["fas fa-cog", "System Setting"],
        ],
       
      };
    },
  };
  </script>

<style scoped>
.decoration{
    text-decoration: none;

}

</style>