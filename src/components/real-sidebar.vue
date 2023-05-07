<template>

  <v-navigation-drawer v-model="drawer" app permanent expand-on-hover flat>
 
    <v-img height="" class="pa-4 indigo" app>
      <v-list-item class="py-6">
        <v-list-item-title class="text-capitalize" align="center">
          <v-icon x-large>fa-folder-open</v-icon> Document manager
        </v-list-item-title>
      </v-list-item>
      <div class="text-center"></div>
    </v-img>
    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in navbars"
        :key="item.title"
        link
        :to="{ path: item.router }"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.names }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>

</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      name: "sidebar",
      props: ["drawer"],
     
      navbars: [
        { icon: "mdi-microsoft-windows", names: "Home", router: "/",  },
        { icon: "fa-duotone fa-file", names: "Table", router: "/table",},
        { icon: "fa-solid fa-magnifying-glass", names: "Login", router: "/login",  },
        { icon: "fa-solid fa-flag", names: "Search", router: "/search",  },
        { icon: "fa-solid fa-flag", names: "formtry", router: "/edit_doc",  },
        { icon: "fa-solid fa-flag", names: "lap", router: "/lap",  },
        { icon: "fa-solid fa-flag", names: "department", router: "/department",  },
        { icon: "fa-solid fa-flag", names: "DocumentCategory", router: "/DocumentCategory",  },
      ],
    };
  },
};
</script>

<style scoped>
.decoration {
  text-decoration: none;
}
</style>
