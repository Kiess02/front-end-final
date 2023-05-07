<template>
  <v-container fluid class="px-6"  mt-3>
    <v-row align="center" justify="center" >
  <v-card class="elevation-12 "   mt-3>
  <v-row>
    <v-col cols="12" md="8">
      <v-card-text class="mt-12">
        <h1
          class="text-center display-2  blue--text "
        >Sign in </h1>
        <!-- <div class="text-center mt-4">
          <v-btn class="mx-2" fab color="black" outlined>
            <v-icon>fab fa-facebook-f</v-icon>
          </v-btn>

          <v-btn class="mx-2" fab color="black" outlined>
            <v-icon>fab fa-google-plus-g</v-icon>
          </v-btn>
          <v-btn class="mx-2" fab color="black" outlined>
            <v-icon>fab fa-linkedin-in</v-icon>
          </v-btn>
        </div> -->
        <h4 class="text-center mt-4">Ensure your email for registration</h4>
        <v-form>
          <v-text-field
          label="Enter your id user"
            name="id"
            prepend-icon="person"
            type="int"
            color="teal accent-3"
          />
          <!-- <v-text-field
            label="Enter your username"
            name="Email"
            prepend-icon="email"
            type="text"
            color="teal accent-3"
          /> -->

          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="lock"
            type="password"
            color="teal accent-3"
          />
        </v-form>
        <!-- <h3 class="text-center mt-4">Forgot your password ?</h3> -->
      </v-card-text>
      <div class="text-center mt-3">
        <v-btn rounded color="blue lighten-2" dark>SIGN IN</v-btn>
      </div>
    </v-col>
    <v-col cols="12" md="4" class="blue lighten-2">
      <v-card-text class="white--text mt-12">
        <h1 class="text-center display-1">Hello! </h1>
        <h4
          class="text-center"
        >Enter your personal details to start!</h4>
      </v-card-text>
    
    </v-col>
  </v-row>
 </v-card>
 </v-row>
</v-container>
</template>