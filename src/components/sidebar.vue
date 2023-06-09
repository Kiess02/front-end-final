<template>
  <div id="font">
    <v-app-bar dense flat class="flex-grow-0" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-text-field
      placeholder='search'
    prepend-inner-icon="mdi-magnify"
      hide-details
      style="max-width: 165px;"
    >
      <template
       
        v-slot:append-outer
      >
      
      </template>
    </v-text-field>
    <template>
      <v-btn class="ml-2" min-width="0" text >
        <v-icon>mdi-bell-ring</v-icon>
      </v-btn>
     
    </template>
  
      <template>
        <v-btn class="ml-2" min-width="0" text to="/dashboard">
          <v-icon>mdi-view-dashboard</v-icon>
        </v-btn>
      </template>

      <v-menu
        bottom
        offset-x
        offset-y
        :close-on-click="true"
        :close-on-content-click="true"
        :left="true"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on" class="align-center">
            <v-icon color="black">mdi-account-multiple</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="item in userlogin"
            :key="item.userlogin"
            :to="{ path: item.router }"
            link
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

  
    <v-navigation-drawer app v-model="drawer"  class="blue-grey darken-4"
    dark
    persistent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item class="py-6">
            <v-list-item-title class="text-capitalize" align="center">
              <v-icon x-large>mdi-folder-open</v-icon> Document manager
            </v-list-item-title>
          </v-list-item>
          <div><v-divider></v-divider></div>

          <router-link to="/dashboard" class="decoration"  active-class="green">
            <v-list-item >
              <v-list-item-icon>
                <v-icon>mdi-microsoft-windows</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title >ໜ້າຫຼັກ</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/profile" class="decoration"  active-class="green">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>ຂໍ້ມູນຜູ້ໃຊ້</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <router-link to="/search" class="decoration"  active-class="green">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-magnify</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>ຄົ້ນຫາ</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list-item-content>
      </v-list-item>

      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
          class="align-self-center"
          color="white"
        >
          <template v-slot:activator>
            <v-list-item-content class="display-1">
              <v-list-item-title style="font-family:phetsarath OT">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            :prepend-icon="child.icon"
            :to="{ path: child.router }"
            active-class="green"
          >
            <v-list-item-content>
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    activeColor: "secondary",
    drawer: false,
    userlogin: [
      { title: "ເຂົ້າສູ່ລະບົບອື່ນ", router: "/login" },
      { title: "ອອກຈາກລະບົບ", router: "/documentCategory" },
    ],

    items: [
      {
        action: "mdi-folder-multiple",

        items: [
          { title: "ຈັດການຂໍ້ມູນຜູ້ໃຊ້", router: "/Users" },
          { title: "ປະເພດເອກະສານ", router: "/documentCategory" },
          { title: "ຈັດການຂໍ້ມູນກົມ", router: "/department" },
        ],
        title: "ຈັດການຂໍ້ມູນ", 
      },
      {
        action: "mdi-widgets",
        items: [
          { title: "ສ້າງສະໂໜດ",router:"/sanod" },
          { title: "ສ້າງໃບກິດສຳພັນ", router:"/relationship-form" },
          { title: "ບັນທຶກເອກະສານຂາເຂົ້າ",router:"/Input-inbound-document" },
     
        ],
        title: "ບໍລິການ",
      },
      {
        action: "mdi-script",
        items: [
          { title: "ລາຍງານຂາອອກກົມ", router: "/report-outbound"  },
          { title: "ລາຍງານຂາເຂົ້າກົມ" , router: "/report-outbound" },
          { title: "ລາຍງານຂາອອກສຳນັກງານ", router: "/tableOutbound" },
          { title: "ລາຍງານຂາເຂົ້າສຳນັກງານ", router: "/tableInbound" },
        ],
        title: "ລາຍງານ",
      },

      {
        action: " fa-file-exclamation",
        items: [
          {  title: "lap2", router: "/lap2"  },
          { title: "lap3", router: "/lap3" },
          { title: "lap", router: "/lap" },
          { title: "ຂາເຂົ້າສຳນັກງານ" },
        ],
        title: "try",
      },
    ],
  }),
};
</script>
<style>
.decoration {
  text-decoration: none;
}
#font {
  font-family: Phetsarath OT;
}
</style>
