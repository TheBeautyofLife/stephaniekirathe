<template>
  <div>
    <!--------------------------   Larger screen >= 1440px ------------------------------>
    <v-flex xs12 hidden-md-and-down hidden-sm-and-down>
      <main-header></main-header>
      <!--  -->
       <v-container class="mb-8">
             <center class="mt-10">
            <div id="career" class="mt-19">
              <v-layout column justify-start align-start mb-8>
                 <div class="display-3 mb-4">My Work</div>
              </v-layout>
              <v-layout row>
                <div class="ml-4 mt-19">
                  <v-card class="elevation-0" color="#262AA3">
                    <img width="320" src="../assets/images/brickcomsvg.svg" alt="my experience in the industry">
                    <p class="portfolio-text pb-5">Brickcom Logistics Limited</p>
                  </v-card>
                </div>
                <div class="ml-4 mt-16">
                  <v-card class="elevation-0"  color="#662583">
                  <img width="320" src="../assets/images/Paint Depo Limited.svg" alt="">
                  v<p class="portfolio-text pb-5">Paint Depo Limited</p>
                  </v-card>
                  </div>
                <div class="ml-4">
                  <v-card class="elevation-0" color="#FD7D12">
                  <img width="320" src="../assets/images/LociFood Ecommerce.svg" alt="">
                  <p class="portfolio-text pb-5">LociFood Ecommerce</p>
                  </v-card>
                </div>
              </v-layout>
               <v-layout row>
                <div class="ml-4">
                  <v-card class="elevation-0"  color="#E2E2E2">
                    <img width="320" src="../assets/images/Coming Soon.svg" alt="my experience in the industry">
                    <p class="portfolio-text dark pb-5">Alero Group</p>
                  </v-card>
                </div>
                <div class="ml-4 mt-n17">
                  <v-card class="elevation-0"  color="#0A093D">
                    <img width="320" src="../assets/images/Joshua Kimbareeba.svg" alt="my experience in the industry">
                    <p class="portfolio-text pb-5">Joshua Kimbareeba</p>
                  </v-card>
                </div>
                <div class="ml-6 mt-n20">
                  <v-card class="elevation-0"  color="#DC121F">
                    <img width="320" src="../assets/images/Health App.svg" alt="my experience in the industry">
                    <p class="portfolio-text pb-5">Health App</p>
                  </v-card>
                </div>
              </v-layout>
            </div>
             <v-layout column justify-center align-center mt-19>
                <div class="social-text">Follow, Like & Subscribe </div>
                <v-layout row wrap mt-3>
                  <a href="https://web.facebook.com/stephaniekirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                    <img width="33" src="../assets/icons/socials/Facebook.svg" alt="https://web.facebook.com/stephaniekirathe">
                  </a>
                  <a href="https://www.instagram.com/stephaniekirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                    <img width="33" src="../assets/icons/socials/Instagram.svg" alt="https://www.instagram.com/stephaniekirathe">
                  </a>
                  <a href="https://www.linkedin.com/in/stephaniekirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                    <img width="33" src="../assets/icons/socials/LinkedIn.svg" alt="https://www.linkedin.com/in/stephaniekirathe/">
                  </a>
                </v-layout>
              </v-layout>
            </center>
              <!--  -->
       </v-container>

    </v-flex>
    <!-------------------------- Larger screen >= 1024px  ------------------------------->
    <v-flex xs12 hidden-sm-and-down hidden-xl-only hidden-lg-only>
    </v-flex>
    <!-------------------------- Tablet screens <= 768px  ------------------------------->
    <v-flex xs12 hidden-xs-only hidden-md-only hidden-xl-only hidden-lg-only>
    </v-flex>
    <!-------------------------- Mobile screens < 425px --------------------------------->
    <v-flex xs12 hidden-sm-and-up hidden-md-and-up>
    </v-flex>
  </div>
</template>
<script>
import Header from '@/components/header/index.header'
export default {
  components: {
    'main-header': Header
  }
}
</script>

<style scoped>
.portfolio-text {
font-family: Helvetica Neue;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.006532743107527494px;
text-align: center;
color: white;
}
.portfolio-text.dark {
font-family: Helvetica Neue;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.006532743107527494px;
text-align: center;
color: #AC7339;
}
</style>
