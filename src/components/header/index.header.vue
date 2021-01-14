<template>
    <div>
        <!--------------------------   Larger screen >= 1440px ------------------------------>
        <v-flex xs12 hidden-md-and-down hidden-sm-and-down>
            <v-app-bar flat class="pr-5 mt-10 transparent">
                <div to="/">
                <v-layout row  align-center>
                     <img width="50" class="mt-8 ml-12" :src="require('@/assets/images/logo.svg')">
                    <div class="mt-8 ml-6 main-app-title">Stephanie Kirathe</div>
                </v-layout>
                </div>
                <v-layout row justify-end mr-10>
                    <router-link  class="navlink" active-class="active" exact to="/">
                        About
                    </router-link>
                    <router-link class="navlink" active-class="active" exact to="/portfolio">
                        Portfolio
                    </router-link>
                    <router-link  class="navlink" active-class="active" to="/contactme">
                        Contact me
                    </router-link>
                     <a class="navlink" active-class="active" target="blank" href="https://drive.google.com/file/d/14PV-nd_RQQZBBMhGeofvMnbRKtuZ0DaP/view">
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
                <div to="/" class="mx-9">
                <v-layout row align-center>
                     <img width="50" class="mt-8" :src="require('@/assets/images/logo.svg')">
                    <div class="mt-8 ml-6 main-app-title">Stephanie Kirathe</div>
                </v-layout>
                </div>
                <v-layout row justify-end>
                       <router-link  class="navlink" active-class="active" exact to="/">
                        About
                    </router-link>
                    <router-link class="navlink" active-class="active" exact to="/portfolio">
                        Portfolio
                    </router-link>
                    <router-link  class="navlink" active-class="active" to="/contactme">
                        Contact me
                    </router-link>
                    <a class="navlink" active-class="active" target="blank" href="https://drive.google.com/file/d/14PV-nd_RQQZBBMhGeofvMnbRKtuZ0DaP/view">
                        CV
                    </a>
                </v-layout>
            </v-app-bar>
        </v-flex>
               <!-------------------------- Tablet screens <= 768px  ------------------------------->
        <v-flex xs12 hidden-xs-only hidden-md-only hidden-xl-only hidden-lg-only>
            <v-app-bar flat class="pl-4 pr-4 mt-8 transparent">
                <v-layout row ml-8>
                    <router-link to="/" class="mt-4" style="text-decoration:none;">
                        <img width="50" :src="require('@/assets/images/logo.svg')">
                    </router-link>
                </v-layout>
                <v-menu transition="scale-transition" close-on-click close-on-content-click  nudge-width="300"
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
                                   <router-link  class="navlink" active-class="active" exact to="/">
                        About
                    </router-link>
                            </v-row>
                        </v-card>
                        <v-card flat class="pa-3" style="border-radius:0px!important">
                            <v-row class="pl-6 ">
                    <router-link class="navlink" active-class="active" exact to="/portfolio">
                        Portfolio
                    </router-link>
                            </v-row>
                        </v-card>
                        <v-card flat class="pa-3" style="border-radius:0px!important">
                            <v-row class="pl-6 ">
                    <router-link  class="navlink" active-class="active" to="/contactme">
                        Contact me
                    </router-link>
                            </v-row>
                        </v-card>
                        <v-card flat class="pa-3" style="border-radius:0px!important">
                            <v-row class="pl-6 ">
                    <a class="navlink" active-class="active"  target="blank" href="https://drive.google.com/file/d/14PV-nd_RQQZBBMhGeofvMnbRKtuZ0DaP/view">
                        CV
                    </a>
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
                        <img width="50" :src="require('@/assets/images/logo.svg')">
                    </router-link>
                </v-layout>
               <v-menu close-on-click close-on-content-click nudge-width="300"
                    style="border-radius:0px !important">
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" icon color="main">
                            <v-icon size="35">mdil-menu</v-icon>
                        </v-btn>
                    </template>

                    <!-- drop down menu from the user profile picture -->
                    <div>
                        <v-card flat class="pa-3" style="border-radius:0px!important">
                            <v-row class="pl-6">
                                   <router-link  class="navlink" active-class="active" exact to="/">
                        About
                    </router-link>
                            </v-row>
                        </v-card>
                        <v-card flat class="pa-3" style="border-radius:0px!important">
                            <v-row class="pl-6 ">
                    <router-link class="navlink" active-class="active" exact to="/portfolio">
                        Portfolio
                    </router-link>
                            </v-row>
                        </v-card>
                        <v-card flat class="pa-3" style="border-radius:0px!important">
                            <v-row class="pl-6 ">
                    <router-link  class="navlink" active-class="active" to="/contactme">
                        Contact me
                    </router-link>
                            </v-row>
                        </v-card>
                        <v-card flat class="pa-3" style="border-radius:0px!important">
                            <v-row class="pl-6 ">
                    <a class="navlink" active-class="active" target="blank" href="https://drive.google.com/file/d/14PV-nd_RQQZBBMhGeofvMnbRKtuZ0DaP/view">
                        CV
                    </a>
                            </v-row>
                        </v-card>

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
