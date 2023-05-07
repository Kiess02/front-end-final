

<template>
  <div>
    <v-app-bar ccolor="deep-purple accent-4" dense color="teal" class="flex-grow-0" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-spacer></v-spacer>

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
            <v-icon>mdi-account-multiple</v-icon>
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
    <v-navigation-drawer
      app
      v-model="drawer"
      class="blue-grey darken-4"
      dark
      persistent
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item class="py-6">
            <v-list-item-title class="text-capitalize" align="center">
              <v-icon x-large>fa-folder-open</v-icon> Document manager
            </v-list-item-title>
          </v-list-item>
          <div class="text-center"></div>

          <v-divider></v-divider>

          <router-link to="/dashboard" class="decoration">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-microsoft-windows</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  active-class="deep-purple--text text--accent-4"
                  >ໜ້າຫຼັກ</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/profile" class="decoration">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>ບັນຊີຜູ້ໃຊ້</v-list-item-title>
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
          class="pt-1 text--white"
          active-class="deep-purple--text text--accent-4"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            :to="{ path: child.router }"
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
import { createVuetify } from "vuetify";

import colors from "vuetify/lib/util/colors";


export default {

  name: "App",
  data: () => ({
    drawer: false,
    userlogin: [
      { title: "ເຂົ້າສູ່ລະບົບອື່ນ", router: "/login" },
      { title: "ອອກຈາກລະບົບ", router: "/documentCategory" },
    ],

    items: [
      {
        action: "mdi-silverware-fork-knife",

        items: [
          { title: "ຈັດການຂໍ້ມູນຜູ້ໃຊ້", router: "/Users" },
          { title: "ປະເພດເອກະສານ", router: "/documentCategory" },
          { title: "ຈັດການຂໍ້ມູນກົມ", router: "/department" },
        ],
        title: "ຈັດການຂໍ້ມູນ",
      },
      {
        action: "mdi-school",
        items: [
          { title: "ສ້າງສະໂນດ" },
          { title: "ສ້າງໃບກິດສຳພັນ" },
          { title: "ເອກະສານຂາເຂົ້າ" },
          { title: "ເອກະສານຂາອອກ" },
        ],
        title: "ບໍລິການ",
      },
      {
        action: "mdi-human-male-female-child",
        items: [
          { title: "ຂາອອກກົມ" },
          { title: "ຂາເຂົ້າກົມ" },
          { title: "ຂາອອກສຳນັກງານ", router: "/tableOutbound" },
          { title: "ຂາເຂົ້າສຳນັກງານ", router: "/tableInbound" },
        ],
        title: "ລາຍງານ",
      },

      {
        action: "mdi-human-male-female-child",
        items: [
          { title: "ຂາອອກກົມ" },
          { title: "ຂາເຂົ້າກົມ" },
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
</style>
