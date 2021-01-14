<template>
  <div>
    <!--------------------------   Larger screen >= 1440px ------------------------------>
    <v-flex xs12 hidden-md-and-down hidden-sm-and-down>
      <v-layout column wrap mb-9>
        <main-header></main-header>
        <!--  -->
        <v-container style="width:1200px" class="my-n8">
          <center class="mt-10">
            <div id="career" class="mt-19">
              <v-layout column justify-start align-start mb-8>
                <p class="display-3 mb-4">My Work</p>
                <p class="body-2 ml-1">Projects I've worked on...</p>
              </v-layout>
              <v-layout row justify-center>
                <div class="ml-4 mt-19">
                  <v-hover v-slot="{ hover }">
                    <v-card color="#262AA3">
                      <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/brickom_l-grS7hR1.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#262AA3" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.7">
                            <v-layout class="white--text headline" row justify-center>
                              <a target="_blank" rel="nofollow" href="https://brickcom.alero.co.ke/" class="white--text mt-18" style="text-decoration:none">Visit</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="portfolio-text pb-5">Brickcom Logistics Limited</p>
                    </v-card>
                  </v-hover>
                </div>
                <div class="ml-4 mt-16">
                  <v-hover v-slot="{ hover }">
                  <v-card color="#662583">
                    <v-img width="370"
                      src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Paint_Depo_Limited_FbPcxz-oU.png" alt="">
                      <v-expand-transition>
                          <v-sheet color="#662583" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.7">
                            <v-layout class="white--text headline" row justify-center>
                             <a target="_blank" href="#" class="white--text mt-18" style="text-decoration:none">Link has been removed or is unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    <p class="portfolio-text pb-5">Paint Depo Limited</p>
                  </v-card>
                  </v-hover>
                </div>
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                  <v-card color="#FD7D12">
                    <v-img width="370"
                      src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/LociFood_Ecommerce_4PUOsKNuqIls.png"
                      alt="">
                      <v-expand-transition>
                          <v-sheet color="#FD7D12" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.7">
                            <v-layout class="white--text headline" row justify-center>
                             <a target="_blank" href="#" class="white--text mt-18" style="text-decoration:none">Link has been removed or is unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    <p class="portfolio-text pb-5">LociFood Ecommerce</p>
                  </v-card>
                  </v-hover>
                </div>
              </v-layout>
              <v-layout row justify-center align-center>
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                  <v-card color="#264C2D">
                    <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/alerogroup_ifSj4_gdV.png" alt="my experience in the industry">
                    <v-expand-transition>
                          <v-sheet color="#264C2D" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.7">
                            <v-layout class="black--text headline" row justify-center>
                              <a target="_blank" href="#" class="white--text mt-18" style="text-decoration:none">Link has been removed or is unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    <p class="portfolio-text pb-5">Alero Group</p>
                  </v-card>
                  </v-hover>
                </div>
                <div class="ml-4 mt-n21">
                  <v-hover v-slot="{ hover }">
                  <v-card color="#0A093D">
                    <v-img width="370"
                      src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Joshua_Kimbareeba_6A1RbpRqE.png"
                      alt="my experience in the industry">
                      <v-expand-transition>
                          <v-sheet color="#0A093D" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.7">
                            <v-layout class="white--text headline" row justify-center>
                             <a target="_blank" href="#" class="white--text mt-18" style="text-decoration:none">Link has been removed or is unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    <p class="portfolio-text pb-5">Joshua Kimbareeba</p>
                  </v-card>
                  </v-hover>
                </div>
                <div class="ml-4 mt-n22">
                  <v-hover v-slot="{ hover }">
                  <v-card color="#DC121F">
                    <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Health_App_9wOIhC8StKwZ.svg"
                      alt="my experience in the industry">
                      <v-expand-transition>
                          <v-sheet color="#DC121F" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.7">
                            <v-layout class="white--text headline" row justify-center>
                             <a target="_blank" href="#" class="white--text mt-18" style="text-decoration:none">Link has been removed or is unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    <p class="portfolio-text pb-5">Health App</p>
                  </v-card>
                  </v-hover>
                </div>
              </v-layout>
              <v-layout row justify-center align-center>
                <div class="ml-4 mt-n17">
                  <v-card flat color="transparent">
                    <img width="370" src="../assets/images/empty-slot.svg" alt="">
                    <p class="portfolio-text pb-5"></p>
                  </v-card>
                </div>
                <div class="ml-4 mt-n17">
                  <v-card flat color="transparent">
                    <img width="370" src="../assets/images/empty-slot.svg" alt="">
                    <p class="portfolio-text pb-5"></p>
                  </v-card>
                </div>
                <div class="ml-4 mt-n16">
                  <v-hover v-slot="{ hover }">
                  <v-card color="#E2E2E2">
                    <v-img width="370" src="../assets/images/Coming Soon.svg" alt="my experience in the industry">
                    <v-expand-transition>
                          <v-sheet color="#E2E2E2" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.7">
                            <v-layout class="white--text headline" row justify-center>
                              <a target="_blank" href="#" class="black--text mt-18" style="text-decoration:none">Link has been removed or is unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    <p class="portfolio-text dark pb-5">LearnHub</p>
                  </v-card>
                  </v-hover>
                </div>
              </v-layout>
            </div>
            <v-layout column justify-center align-center mt-19>
              <div class="social-text">Follow, Like & Subscribe </div>
              <v-layout row wrap mt-3>
                <a href="https://web.facebook.com/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/Facebook.svg"
                    alt="https://web.facebook.com/stephaniekirathe">
                </a>
                <a href="https://www.instagram.com/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/Instagram.svg"
                    alt="https://www.instagram.com/stephaniekirathe">
                </a>
                <a href="https://www.linkedin.com/in/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/LinkedIn.svg"
                    alt="https://www.linkedin.com/in/stephaniekirathe/">
                </a>
                 <a href="https://www.behance.net/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="36" src="../assets/icons/socials/Behance.svg"
                    alt="https://www.behance.net/stephaniekirathe" class="mt-1">
                </a>
              </v-layout>
            </v-layout>
          </center>
          <!--  -->
        </v-container>
      </v-layout>
    </v-flex>
    <!-------------------------- Larger screen >= 1024px  ------------------------------->
    <v-flex xs12 hidden-sm-and-down hidden-xl-only hidden-lg-only>
      <v-layout column wrap mb-9>
        <main-header></main-header>
        <!--  -->
        <v-container style="width:950px" class="my-n10">
          <center class="mt-5">
            <div id="career" class="mt-19">
              <v-layout column justify-center align-center mb-8>
                <p class="display-3 mb-4">My Work</p>
                <p class="body-2 ml-1">Projects I've worked on...</p>
              </v-layout>
              <v-layout row justify-center align-center>
                <div class="ml-4 mt-19">
                  <v-hover v-slot="{ hover }">
                  <v-card color="#262AA3">
                    <v-img width="270" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/brickom_l-grS7hR1.png"
                      alt="my experience in the industry">
                       <v-expand-transition>
                          <v-sheet color="#262AA3" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.7">
                            <v-layout class="white--text headline" row justify-center>
                              <a target="_blank" rel="nofollow" href="https://brickcom.alero.co.ke/" class="white--text mt-18" style="text-decoration:none">Visit</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                        </v-img>
                    <p class="portfolio-text pb-5">Brickcom Logistics Limited</p>
                  </v-card>
                  </v-hover>
                </div>
                <div class="ml-4 mt-16">
                  <v-hover v-slot="{ hover }">
                  <v-card color="#662583">
                    <v-img width="270"
                      src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Paint_Depo_Limited_FbPcxz-oU.png" alt="">
                       <v-expand-transition>
                          <v-sheet color="#662583" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.7">
                            <v-layout class="white--text headline" row justify-center>
                             <a target="_blank" href="#" class="white--text mt-18" style="text-decoration:none">Link has been removed or is unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                    </v-img>
                    <p class="portfolio-text pb-5">Paint Depo Limited</p>
                  </v-card>
                  </v-hover>
                </div>
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                  <v-card color="#FD7D12">
                    <v-img width="270"
                      src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/LociFood_Ecommerce_4PUOsKNuqIls.png"
                      alt="">
                    <v-expand-transition>
                          <v-sheet color="#FD7D12" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.7">
                            <v-layout class="white--text headline" row justify-center>
                             <a target="_blank" href="#" class="white--text mt-18" style="text-decoration:none">Link has been removed or is unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                    </v-img>
                       <p class="portfolio-text pb-5">LociFood Ecommerce</p>
                  </v-card>
                  </v-hover>
                </div>
              </v-layout>
              <v-layout row justify-center align-center>
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                  <v-card color="#264C2D">
                    <v-img width="270" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/alerogroup_ifSj4_gdV.png" alt="my experience in the industry">
                    <v-expand-transition>
                          <v-sheet color="#264C2D" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.7">
                            <v-layout class="white--text headline" row justify-center>
                             <a target="_blank" href="#" class="white--text mt-18" style="text-decoration:none">Link has been removed or is unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                    </v-img>
                    <p class="portfolio-text dark pb-5">Alero Group</p>
                  </v-card>
                  </v-hover>
                </div>
                <div class="ml-4 mt-n17">
                  <v-hover v-slot="{ hover }">
                  <v-card color="#0A093D">
                    <v-img width="270"
                      src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Joshua_Kimbareeba_6A1RbpRqE.png"
                      alt="my experience in the industry">
                      <v-expand-transition>
                          <v-sheet color="#0A093D" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.7">
                            <v-layout class="white--text headline" row justify-center>
                             <a target="_blank" href="#" class="white--text mt-18" style="text-decoration:none">Link has been removed or is unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                    </v-img>
                    <p class="portfolio-text pb-5">Joshua Kimbareeba</p>
                  </v-card>
                  </v-hover>
                </div>
                <div class="ml-4 mt-n20">
                  <v-hover v-slot="{ hover }">
                  <v-card color="#DC121F">
                    <v-img width="270" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Health_App_9wOIhC8StKwZ.svg"
                      alt="my experience in the industry">
                      <v-expand-transition>
                          <v-sheet color="#DC121F" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.7">
                            <v-layout class="white--text headline" row justify-center>
                              <a href="#" class="white--text mt-18" style="text-decoration:none">Visit</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                    </v-img>
                    <p class="portfolio-text pb-5">Health App</p>
                  </v-card>
                  </v-hover>
                </div>
              </v-layout>
              <v-layout row justify-center align-center>
                <div class="ml-4 mt-n17">
                  <v-card flat color="transparent">
                    <img width="270" src="../assets/images/empty-slot.svg" alt="">
                    <p class="portfolio-text pb-5"></p>
                  </v-card>
                </div>
                <div class="ml-4 mt-n17">
                  <v-card flat color="transparent">
                    <img width="270" src="../assets/images/empty-slot.svg" alt="">
                    <p class="portfolio-text pb-5"></p>
                  </v-card>
                </div>
                <div class="ml-4 mt-n16">
                  <v-hover v-slot="{ hover }">
                  <v-card color="#E2E2E2">
                    <v-img width="270" src="../assets/images/Coming Soon.svg" alt="my experience in the industry">
                    <v-expand-transition>
                          <v-sheet color="#E2E2E2" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.7">
                            <v-layout class="white--text headline" row justify-center>
                              <a href="#" class="white--text mt-18" style="text-decoration:none">Visit</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                    </v-img>
                    <p class="portfolio-text dark pb-5">LearnHub</p>
                  </v-card>
                  </v-hover>
                </div>
              </v-layout>
            </div>
            <v-layout column justify-center align-center mt-19>
              <div class="social-text">Follow, Like & Subscribe </div>
              <v-layout row wrap mt-3>
                <a href="https://web.facebook.com/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/Facebook.svg"
                    alt="https://web.facebook.com/stephaniekirathe">
                </a>
                <a href="https://www.instagram.com/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/Instagram.svg"
                    alt="https://www.instagram.com/stephaniekirathe">
                </a>
                <a href="https://www.linkedin.com/in/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/LinkedIn.svg"
                    alt="https://www.linkedin.com/in/stephaniekirathe/">
                </a>
                <a href="https://www.behance.net/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="36" src="../assets/icons/socials/Behance.svg"
                    alt="https://www.behance.net/stephaniekirathe" class="mt-1">
                </a>
              </v-layout>
            </v-layout>
          </center>
          <!--  -->
        </v-container>
      </v-layout>
    </v-flex>
    <!-------------------------- Tablet screens <= 768px  ------------------------------->
    <v-flex xs12 hidden-xs-only hidden-md-only hidden-xl-only hidden-lg-only>
      <v-layout column wrap mb-9>
        <main-header></main-header>
        <!--  -->
        <v-container class="my-5">
          <center class="mt-5">
            <div id="career" class="">
              <v-layout column justify-center align-center mb-8>
                <p class="display-2 font-weight-light">My Work</p>
                <p class="body-2 ml-1">Projects I've worked on...</p>
              </v-layout>
              <v-layout column justify-center align-center>
                <div class="ml-4">
                  <a target="_blank" rel="nofollow" href="https://brickcom.alero.co.ke/" class="white--text mt-18" style="text-decoration:none">
                  <v-card color="#262AA3">
                    <img width="450" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/brickom_l-grS7hR1.png"
                      alt="my experience in the industry">
                    <p class="portfolio-text pb-5">Brickcom Logistics Limited</p>
                  </v-card>
                  </a>
                </div>
                <div class="ml-4">
                  <a target="_blank" rel="nofollow" href="" class="white--text mt-18" style="text-decoration:none">
                  <v-card color="#662583">
                    <img width="450"
                      src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Paint_Depo_Limited_FbPcxz-oU.png" alt="">
                    <p class="portfolio-text pb-5">Paint Depo Limited</p>
                  </v-card>
                  </a>
                </div>
                <div class="ml-4">
                  <a target="_blank" rel="nofollow" href="" class="white--text mt-18" style="text-decoration:none">
                  <v-card color="#FD7D12">
                    <img width="450"
                      src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/LociFood_Ecommerce_4PUOsKNuqIls.png"
                      alt="">
                    <p class="portfolio-text pb-5">LociFood Ecommerce</p>
                  </v-card>
                  </a>
                </div>
              </v-layout>
              <v-layout column justify-center align-center>
                <div class="ml-4">
                  <a target="_blank" rel="nofollow" href="" class="white--text mt-18" style="text-decoration:none">
                  <v-card color="#264C2D">
                    <img width="450" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/alerogroup_ifSj4_gdV.png" alt="my experience in the industry">
                    <p class="portfolio-text pb-5">Alero Group</p>
                  </v-card>
                  </a>
                </div>
                <div class="ml-4">
                  <v-card color="#0A093D">
                    <img width="450"
                      src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Joshua_Kimbareeba_6A1RbpRqE.png"
                      alt="my experience in the industry">
                    <p class="portfolio-text pb-5">Joshua Kimbareeba</p>
                  </v-card>
                </div>
                <div class="ml-4">
                  <v-card color="#DC121F">
                    <img width="450" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Health_App_9wOIhC8StKwZ.svg"
                      alt="my experience in the industry">
                    <p class="portfolio-text pb-5">Health App</p>
                  </v-card>
                </div>
              </v-layout>
              <v-layout column justify-center align-center>
                <!-- <div class="ml-4">
                  <v-card flat color="transparent">
                    <v-img width="270" src="../assets/images/empty-slot.svg" alt="">
                    <p class="portfolio-text pb-5"></p>
                  </v-card>
                </div>
                <div class="ml-4">
                  <v-card flat color="transparent">
                    <v-img width="270" src="../assets/images/empty-slot.svg" alt="">
                    <p class="portfolio-text pb-5"></p>
                  </v-card>
                </div> -->
                <div class="ml-4">
                  <v-card color="#E2E2E2">
                    <img width="450" src="../assets/images/Coming Soon.svg" alt="">
                    <p class="portfolio-text dark pb-5">LearnHub</p>
                  </v-card>
                </div>
              </v-layout>
            </div>
            <v-layout column justify-center align-center mt-19>
              <div class="social-text">Follow, Like & Subscribe </div>
              <v-layout row wrap mt-3>
                <a href="https://web.facebook.com/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/Facebook.svg"
                    alt="https://web.facebook.com/stephaniekirathe">
                </a>
                <a href="https://www.instagram.com/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/Instagram.svg"
                    alt="https://www.instagram.com/stephaniekirathe">
                </a>
                <a href="https://www.linkedin.com/in/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/LinkedIn.svg"
                    alt="https://www.linkedin.com/in/stephaniekirathe/">
                </a>
                <a href="https://www.behance.net/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="36" src="../assets/icons/socials/Behance.svg"
                    alt="https://www.behance.net/stephaniekirathe" class="mt-1">
                </a>
              </v-layout>
            </v-layout>
          </center>
          <!--  -->
        </v-container>
      </v-layout>
    </v-flex>
    <!-------------------------- Mobile screens < 425px --------------------------------->
    <v-flex xs12 hidden-sm-and-up hidden-md-and-up>
      <v-layout column wrap mb-9>
        <main-header></main-header>
        <!--  -->
        <v-container class="my-5">
          <center class="mt-5">
            <div id="career" class="">
              <v-layout column justify-center align-center mb-8>
                <p class="display-2 font-weight-light">My Work</p>
                <p class="body-2 ml-1">Projects I've worked on...</p>
              </v-layout>
              <v-layout column justify-center align-center>
                <div>
                  <a target="_blank" rel="nofollow" href="https://brickcom.alero.co.ke/">
                  <v-card color="#262AA3">
                    <img width="350" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/brickom_l-grS7hR1.png"
                      alt="my experience in the industry">
                    <p class="portfolio-text pb-5">Brickcom Logistics Limited</p>
                  </v-card>
                  </a>
                </div>
                <div>
                  <v-card color="#662583">
                    <img width="350"
                      src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Paint_Depo_Limited_FbPcxz-oU.png" alt="">
                    <p class="portfolio-text pb-5">Paint Depo Limited</p>
                  </v-card>
                </div>
                <div>
                  <v-card color="#FD7D12">
                    <img width="350"
                      src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/LociFood_Ecommerce_4PUOsKNuqIls.png"
                      alt="">
                    <p class="portfolio-text pb-5">LociFood Ecommerce</p>
                  </v-card>
                </div>
              </v-layout>
              <v-layout column justify-center align-center>
                <div>
                  <v-card color="#264C2D">
                    <img width="350" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/alerogroup_ifSj4_gdV.png" alt="my experience in the industry">
                    <p class="portfolio-text pb-5">Alero Group</p>
                  </v-card>
                </div>
                <div>
                  <v-card color="#0A093D">
                    <img width="350"
                      src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Joshua_Kimbareeba_6A1RbpRqE.png"
                      alt="my experience in the industry">
                    <p class="portfolio-text pb-5">Joshua Kimbareeba</p>
                  </v-card>
                </div>
                <div>
                  <v-card color="#DC121F">
                    <img width="350" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Health_App_9wOIhC8StKwZ.svg"
                      alt="my experience in the industry">
                    <p class="portfolio-text pb-5">Health App</p>
                  </v-card>
                </div>
              </v-layout>
              <v-layout column justify-center align-center>
                <!-- <div class="ml-4">
                  <v-card flat color="transparent">
                    <v-img width="270" src="../assets/images/empty-slot.svg" alt="">
                    <p class="portfolio-text pb-5"></p>
                  </v-card>
                </div>
                <div class="ml-4">
                  <v-card flat color="transparent">
                    <v-img width="270" src="../assets/images/empty-slot.svg" alt="">
                    <p class="portfolio-text pb-5"></p>
                  </v-card>
                </div> -->
                <div>
                  <v-card color="#E2E2E2">
                    <img width="350" src="../assets/images/Coming Soon.svg" alt="">
                    <p class="portfolio-text dark pb-5">LearnHub</p>
                  </v-card>
                </div>
              </v-layout>
            </div>
            <v-layout column justify-center align-center mt-19>
              <div class="social-text">Follow, Like & Subscribe </div>
              <v-layout row wrap mt-3>
                <a href="https://web.facebook.com/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/Facebook.svg"
                    alt="https://web.facebook.com/stephaniekirathe">
                </a>
                <a href="https://www.instagram.com/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/Instagram.svg"
                    alt="https://www.instagram.com/stephaniekirathe">
                </a>
                <a href="https://www.linkedin.com/in/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/LinkedIn.svg"
                    alt="https://www.linkedin.com/in/stephaniekirathe/">
                </a>
                <a href="https://www.behance.net/stephaniekirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="36" src="../assets/icons/socials/Behance.svg"
                    alt="https://www.behance.net/stephaniekirathe" class="mt-1">
                </a>
              </v-layout>
            </v-layout>
          </center>
          <!--  -->
        </v-container>
      </v-layout>
    </v-flex>
  </div>
</template>
<script>
import Header from '@/components/header/index.header'
export default {
  components: {
    'main-header': Header
  },
  head: {
    title: {
      inner: 'Welcome to Stephanie\'s Kirathe personal website'
    },
    meta: [{
      name: 'application-name',
      content: 'Welcome to Stephanie\'s Kirathe personal website'
    },
    {
      name: 'description',
      content: 'Welcome to Stephanie\'s Kirathe personal website',
      id: 'desc'
    }, // id to replace intead of create element
    // ...
    // Google+ / Schema.org
    {
      itemprop: 'name',
      content: 'Welcome to Stephanie\'s Kirathe personal website'
    },
    {
      itemprop: 'description',
      content: 'Welcome to Stephanie\'s Kirathe personal website'
    },
    {
      property: 'og:title',
      content: 'Welcome to Stephanie\'s Kirathe personal website'
    }
    ]
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
