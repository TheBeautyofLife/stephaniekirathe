<template>
  <div>
    <!--------------------------   Larger screen >= 1440px ------------------------------>
    <v-flex xs12 hidden-md-and-down hidden-sm-and-down>
      <v-app-bar flat class="pr-5 mt-10 transparent">
        <router-link to="/" style="text-decoration:none;">
          <v-layout row align-center>
            <img width="50" class="mt-8 ml-12" :src="require('@/assets/images/logo.svg')" alt="stephanie kirathe's logo - official brand">
            <div class="mt-8 ml-6 main-app-title">Stephanie Kirathe</div>
          </v-layout>
        </router-link>
        <v-layout row justify-end mr-10>
          <router-link class="navlink" active-class="active" exact to="/">
            About
          </router-link>
          <!-- <router-link class="navlink" active-class="active" exact to="/portfolio">
            Portfolio
          </router-link> -->
          <router-link class="navlink" active-class="active" exact to="/gallery">
            Gallery
          </router-link>
          <router-link class="navlink" active-class="active" to="/contactme">
            Contact me
          </router-link>
          <router-link class="navlink" active-class="active" to="/blog">
            Blog
          </router-link>
          <a class="navlink" active-class="active" target="blank"
            href="https://drive.google.com/file/d/1nytf0X8pt11f9LMCpPDb2MLTuYz3JhqJ/view?usp=sharing">
            CV
          </a>
        </v-layout>
        <div>
          <v-tooltip v-if="!$vuetify.theme.dark" bottom>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on" small fab @click="darkMode">
                <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode On</span>
          </v-tooltip>

          <v-tooltip v-else bottom>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on" small fab @click="darkMode">
                <v-icon>mdi-white-balance-sunny</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode Off</span>
          </v-tooltip>
        </div>
      </v-app-bar>
    </v-flex>
    <!-------------------------- Larger screen >= 1024px  ------------------------------->
    <v-flex xs12 hidden-sm-and-down hidden-xl-only hidden-lg-only>
      <v-app-bar flat class="pl-4 pr-4 mt-6 transparent">
         <router-link to="/" style="text-decoration:none;" class="mx-9">
          <v-layout row align-center>
            <img width="50" class="mt-8" :src="require('@/assets/images/logo.svg')" alt="stephanie kirathe's logo - official brand">
            <div class="mt-8 ml-6 main-app-title">Stephanie Kirathe</div>
          </v-layout>
         </router-link>
        <v-layout row justify-end>
          <router-link class="navlink" active-class="active" exact to="/">
            About
          </router-link>
          <!-- <router-link class="navlink" active-class="active" exact to="/portfolio">
            Portfolio
          </router-link> -->
          <router-link class="navlink" active-class="active" exact to="/gallery">
            Gallery
          </router-link>
          <router-link class="navlink" active-class="active" to="/contactme">
            Contact me
          </router-link>
          <a class="navlink" active-class="active" target="blank"
            href="https://drive.google.com/file/d/1nytf0X8pt11f9LMCpPDb2MLTuYz3JhqJ/view?usp=sharing">
            CV
          </a>
        </v-layout>
        <div>
          <v-tooltip v-if="!$vuetify.theme.dark" bottom>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on" small fab @click="darkMode">
                <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode On</span>
          </v-tooltip>

          <v-tooltip v-else bottom>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on" small fab @click="darkMode">
                <v-icon>mdi-white-balance-sunny</v-icon>
              </v-btn>
            </template>
            <span>Dark Mode Off</span>
          </v-tooltip>
        </div>
      </v-app-bar>
    </v-flex>
    <!-------------------------- Tablet screens <= 768px  ------------------------------->
    <v-flex xs12 hidden-xs-only hidden-md-only hidden-xl-only hidden-lg-only>
      <v-app-bar flat class="pl-4 pr-4 mt-8 transparent">
        <v-layout row ml-8>
          <router-link to="/" class="mt-4" style="text-decoration:none;">
            <img width="50" :src="require('@/assets/images/logo.svg')" alt="stephanie kirathe's logo - official brand">
          </router-link>
        </v-layout>
        <v-menu transition="scale-transition" close-on-click close-on-content-click nudge-width="300"
          style="border-radius:0px !important" class="mr-4">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon color="main">
              <v-icon size="35">mdil-menu</v-icon>
            </v-btn>
          </template>

          <!-- drop down menu from the user profile picture -->
          <div>
            <v-card flat class="pa-3" style="border-radius:0px!important">
              <v-row class="pl-6">
                <router-link class="navlink" active-class="active" exact to="/">
                  About
                </router-link>
              </v-row>
            </v-card>
            <!-- <v-card flat class="pa-3" style="border-radius:0px!important">
              <v-row class="pl-6 ">
                <router-link class="navlink" active-class="active" exact to="/portfolio">
                  Portfolio
                </router-link>
              </v-row>
            </v-card> -->
            <v-card flat class="pa-3" style="border-radius:0px!important">
              <v-row class="pl-6 ">
                <router-link class="navlink" active-class="active" to="/contactme">
                  Contact me
                </router-link>
              </v-row>
            </v-card>
            <v-card flat class="pa-3" style="border-radius:0px!important">
              <v-row class="pl-6 ">
                <a class="navlink" active-class="active" target="blank"
                  href="https://drive.google.com/file/d/1nytf0X8pt11f9LMCpPDb2MLTuYz3JhqJ/view?usp=sharing">
                  CV
                </a>
              </v-row>
            </v-card>
            <v-card flat class="pa-3" style="border-radius:0px!important">
              <v-row class="ml-5">
                <v-tooltip v-if="!$vuetify.theme.dark" bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" small fab @click="darkMode">
                      <v-icon>mdi-moon-waxing-crescent</v-icon>
                    </v-btn>
                  </template>
                  <span>Dark Mode On</span>
                </v-tooltip>

                <v-tooltip v-else bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn text v-on="on" small fab @click="darkMode">
                      <v-icon>mdi-white-balance-sunny</v-icon>
                    </v-btn>
                  </template>
                  <div>
                    <span>Dark Mode Off</span>
                  </div>
                </v-tooltip>
                <div class="mt-2 ml-3">
                  <span class="grey--text" v-if="!$vuetify.theme.dark">Dark Mode Off</span>
                  <span v-else>Dark Mode On</span>
                </div>
              </v-row>
            </v-card>
          </div>
        </v-menu>
      </v-app-bar>
    </v-flex>
    <!-------------------------- Mobile screens < 425px --------------------------------->
    <v-flex xs12 hidden-sm-and-up hidden-md-and-up>
      <!--  -->
      <v-app-bar flat class="pl-4 pr-3 mt-8 transparent">

        <v-layout row justify-center align-center mt-13>
          <router-link to="/" style="text-decoration:none;">
            <img width="50" :src="require('@/assets/images/logo.svg')" alt="stephanie kirathe's logo - official brand">
          </router-link>
        </v-layout>
        <v-menu close-on-click close-on-content-click nudge-width="300" style="border-radius:0px !important">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon color="main">
              <v-icon size="35">mdil-menu</v-icon>
            </v-btn>
          </template>

          <!-- drop down menu from the user profile picture -->
          <div>
            <v-card flat class="pa-3" style="border-radius:0px!important">
              <v-row class="pl-6">
                <router-link class="navlink" active-class="active" exact to="/">
                  About
                </router-link>
              </v-row>
            </v-card>
            <!-- <v-card flat class="pa-3" style="border-radius:0px!important">
              <v-row class="pl-6 ">
                <router-link class="navlink" active-class="active" exact to="/portfolio">
                  Portfolio
                </router-link>
              </v-row>
            </v-card> -->
            <v-card flat class="pa-3" style="border-radius:0px!important">
              <v-row class="pl-6 ">
                <router-link class="navlink" active-class="active" to="/contactme">
                  Contact me
                </router-link>
              </v-row>
            </v-card>
            <v-card flat class="pa-3" style="border-radius:0px!important">
              <v-row class="pl-6 ">
                <a class="navlink" active-class="active" target="blank"
                  href="https://drive.google.com/file/d/1nytf0X8pt11f9LMCpPDb2MLTuYz3JhqJ/view?usp=sharing">
                  CV
                </a>
              </v-row>
            </v-card>
              <v-card flat class="pa-3" style="border-radius:0px!important">
              <v-row class="ml-5">
                <v-tooltip v-if="!$vuetify.theme.dark" bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn text v-on="on" small fab @click="darkMode">
                      <v-icon>mdi-moon-waxing-crescent</v-icon>
                    </v-btn>
                  </template>
                  <span>Dark Mode On</span>
                </v-tooltip>

                <v-tooltip v-else bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn text v-on="on" small fab @click="darkMode">
                      <v-icon>mdi-white-balance-sunny</v-icon>
                    </v-btn>
                  </template>
                  <div>
                    <span>Dark Mode Off</span>
                  </div>
                </v-tooltip>
                <div class="mt-2 ml-3">
                  <span class="grey--text" v-if="!$vuetify.theme.dark">Dark Mode Off</span>
                  <span v-else>Dark Mode On</span>
                </div>
              </v-row>
            </v-card >
          </div>
        </v-menu>
      </v-app-bar>
      <!--  -->
    </v-flex>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    color: String
  },
  data: () => ({
    drawer: false
  }),
  methods: {
    darkMode () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}

</script>
