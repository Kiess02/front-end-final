<template>
  <div id="font">
    <v-app-bar dense flat class="flex-grow-0" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <!-- <v-text-field
      placeholder='search'
    prepend-inner-icon="mdi-magnify"
      hide-details
      style="max-width: 165px;"
    >
      <template
       
        v-slot:append-outer
      >
      
      </template>
    </v-text-field> -->
      <template>
        <v-btn class="ml-2" min-width="0" text>
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
            <v-list-item-title @click="logout">{{
              item.title
            }}</v-list-item-title>
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
      <v-list>
        <v-list-item-content>
          <v-list-item class="py-6">
            <v-list-item-title class="text-capitalize" align="center">
              <v-icon x-large>mdi-folder-open</v-icon> Document manager
            </v-list-item-title>
          </v-list-item>
          <div><v-divider></v-divider></div>

          <router-link to="/dashboard" class="decoration" active-class="green">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-microsoft-windows</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>ໜ້າຫຼັກ</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/profile" class="decoration" active-class="green">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>ຂໍ້ມູນຜູ້ໃຊ້</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <router-link to="/search" class="decoration" active-class="green">
            <v-list-item id="searchBtn">
              <v-list-item-icon>
                <v-icon>mdi-magnify</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>ຄົ້ນຫາ</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list-item-content>
      </v-list>
      <v-list>
        <v-list-group
          :value="true"
          no-action
          sub-group
          prepend-icon="mdi-widgets"
          color="white"
          class="align-self-center"
        >
          <template v-slot:activator>
            <v-list-item-content class="display-1">
              <v-list-item-title style="font-family: phetsarath OT"
                >ບໍລິການ</v-list-item-title
              >
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(services, index) in service"
            :key="index"
            :id="services.name"
            :to="{ path: services.router }"
            ref="servicRefs"
          >
            <v-list-item-title>{{ services.title }}</v-list-item-title>

            <!-- <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon> -->
          </v-list-item>
        </v-list-group>
        <v-list-group
          :value="true"
          no-action
          sub-group
          prepend-icon="mdi-folder-multiple"
          color="white"
          class="align-self-center"
          id="MInfor"
        >
          <template v-slot:activator>
            <v-list-item-content class="display-1">
              <v-list-item-title style="font-family: phetsarath OT"
                >ຈັດການຂໍ້ມູນ</v-list-item-title
              >
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(managements, index) in management"
            :key="index"
            :id="managements.name"
            :to="{ path: managements.router }"
            ref="managementRefs"
          >
            <v-list-item-title>{{ managements.title }}</v-list-item-title>

            <!-- <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon> -->
          </v-list-item>
        </v-list-group>
        <v-list-group
          :value="true"
          no-action
          sub-group
          prepend-icon="mdi-script"
          color="white"
          class="align-self-center"
        >
          <template v-slot:activator>
            <v-list-item-content class="display-1">
              <v-list-item-title style="font-family: phetsarath OT"
                >ລາຍງານ</v-list-item-title
              >
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(reports, index) in report"
            :key="index"
            :id="reports.name"
            :to="{ path: reports.router }"
            ref="reportRefs"
          >
            <v-list-item-title>{{ reports.title }}</v-list-item-title>

            <!-- <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon> -->
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
      { title: "ອອກຈາກລະບົບ", router: "/login" },
    ],
    service: [
      { title: "ສ້າງສະໂໜດ", router: "/sanod", name: "CSanod" },
      {
        title: "ສ້າງໃບຕິດຕາມເອກະສານ",
        router: "/relationship-form",
        name: "CFolDoc",
      },
      {
        title: "ບັນທຶກເອກະສານຂາເຂົ້າ",
        router: "/Input-inbound-document",
        name: "ADocIn",
      },
    ],
    management: [
      {
        title: "ຈັດການຂໍ້ມູນຜູ້ໃຊ້",
        router: "/Users",
        name: "MUser",
      },
      {
        title: "ປະເພດເອກະສານ",
        router: "/documentCategory",
        name: "MDocType",
      },
      { title: "ຈັດການຂໍ້ມູນກົມ", router: "/department", name: "MDepart" },
    ],
    report: [
      {
        title: "ລາຍງານຂາອອກກົມ",
        router: "/report-outbound",
        name: "ROutDepart",
      },
      {
        title: "ລາຍງານຂາເຂົ້າກົມ",
        router: "/report-inbound",
        name: "RInDepart",
      },
      {
        title: "ລາຍງານຂາອອກສຳນັກງານ",
        router: "/tableOutbound",
        name: "ROut",
      },
      {
        title: "ລາຍງານຂາເຂົ້າສຳນັກງານ",
        router: "/tableInbound",
        name: "RIn",
      },
    ],
   
  }),

  mounted() {
    // let id = this.$refs;

    // console.log(id);
    // if (this.$refs.listRefer && this.$refs.listRefer.length > 0) {
    //   const item0 = this.$refs.listRefer[0];
    //   console.log(item0); // will log the v-list-item with id "item-0"
    // }

    let statuss = window.$cookies.get("user").status;
    console.log(statuss);
    if (statuss == "admin") {
      document.getElementById("").style.display = "none";
    } else if (statuss == "receiver") {
      document.getElementById("CFolDoc").style.display = "none";
      document.getElementById("MInfor").style.display = "none";
      document.getElementById("ADocIn").style.display = "none";
      document.getElementById("ROut").style.display = "none";
      document.getElementById("RIn").style.display = "none";
    } else if (statuss == "sender") {

      document.getElementById("MInfor").style.display = "none";
      document.getElementById("ROutDepart").style.display = "none";
      document.getElementById("RInDepart").style.display = "none";
    }
  },
  methods: {
    logout() {
      window.$cookies.remove("user");
      console.log("successfully log out");
    },
  },
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

