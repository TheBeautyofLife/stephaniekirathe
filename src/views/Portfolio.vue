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
                <p class="body-2 ml-1"> projects I've worked on...</p>
              </v-layout>
              <v-layout row justify-center>
                <div class="ml-4 mt-19">
                  <v-hover v-slot="{ hover }">
                    <v-card color="#262AA3">
                      <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Brick_VMod9FoSn.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#262AA3" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                            <v-layout class="white--text headline" row justify-center>
                              <a target="_blank" rel="nofollow" href="https://brickcom.alero.co.ke/"
                                class="white--text mt-18" style="text-decoration:none">Visit Site</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="headline font-weight-light white--text pb-5">Brickcom Logistics Limited</p>
                    </v-card>
                  </v-hover>
                </div>
                <div class="ml-4 mt-16">
                  <v-hover v-slot="{ hover }">
                    <v-card color="#662583">
                      <v-img width="370"
                        src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Paint_Depo_Limited_1__2x7IrMzxb.png"
                        alt="">
                        <v-expand-transition>
                          <v-sheet color="#662583" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.85">
                            <v-layout class="white--text headline" column justify-center align-center>
                              <a target="_blank" href="https://www.thepaintdepo.co.ke/" class="white--text mt-18"
                                style="text-decoration:none">Visit Site</a>
                              <v-row class="mt-5 align-center">
                                <a href="https://web.facebook.com/decorativepaint17/" target="_blank"
                                  rel="noopener noreferrer" class="ma-3">
                                  <img width="30" src="../assets/icons/socials/Facebook-white.svg"
                                    alt="https://web.facebook.com/decorativepaint17/">
                                </a>
                                <a href="https://www.instagram.com/thepaintdepo_ke/" target="_blank"
                                  rel="noopener noreferrer" class="ma-3">
                                  <img width="30" src="../assets/icons/socials/Instagram-white.svg"
                                    alt="https://www.instagram.com/stephkirathe">
                                </a>
                              </v-row>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="headline font-weight-light white--text pb-5">Paint Depo Limited</p>
                    </v-card>
                  </v-hover>
                </div>
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card color="#FD7D12">
                      <v-img width="370"
                        src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/LociFood_Ecommerce_DYdMlexzi.png" alt="">
                        <v-expand-transition>
                          <v-sheet color="#FD7D12" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.85">
                            <v-layout class="white--text headline" row justify-center>
                              <a target="_blank" href="#" class="white--text mt-18" style="text-decoration:none">Link
                                unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="headline font-weight-light white--text pb-5">LociFood Ecommerce</p>
                    </v-card>
                  </v-hover>
                </div>
              </v-layout>
              <v-layout row justify-center align-center>
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card color="#264C2D">
                      <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Frame_38_jEHh4q7Lk.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#264C2D" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.85">
                            <v-layout class="black--text headline" column justify-center align-center>
                              <a target="_blank" href="https://www.alero.co.ke/" class="white--text mt-18"
                                style="text-decoration:none">Visit Site</a>
                              <v-row class="mt-5 align-center">
                                <a href="https://web.facebook.com/alerogroup" target="_blank" rel="noopener noreferrer"
                                  class="ma-3">
                                  <img width="30" src="../assets/icons/socials/Facebook-white.svg"
                                    alt="https://web.facebook.com/alerogroup">
                                </a>
                                <a href="https://www.instagram.com/thepaintdepo_ke/" target="_blank"
                                  rel="noopener noreferrer" class="ma-3">
                                  <img width="30" src="../assets/icons/socials/Instagram-white.svg"
                                    alt="https://www.instagram.com/alerogroup">
                                </a>
                                <a href="https://www.twitter.com/alerogroup" target="_blank" rel="noopener noreferrer"
                                  class="ma-3">
                                  <img width="33" src="../assets/icons/socials/Twitter-white.svg"
                                    alt="https://www.instagram.com/alerogroup">
                                </a>
                              </v-row>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="headline font-weight-light white--text pb-5">Alero Corporation</p>
                    </v-card>
                  </v-hover>
                </div>
                <div class="ml-4 mt-n21">
                  <v-hover v-slot="{ hover }">
                    <v-card color="#0A093D">
                      <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Frame_13_o3eUpKY9C.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#0A093D" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.85">
                            <v-layout class="white--text headline" row justify-center>
                              <a target="_blank" href="#" class="white--text mt-18" style="text-decoration:none">Link
                                unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="headline font-weight-light white--text pb-5">Joshua Kimbareeba</p>
                    </v-card>
                  </v-hover>
                </div>
                <div class="ml-4 mt-n23">
                  <v-hover v-slot="{ hover }">
                    <v-card color="#DC121F">
                      <v-img width="370"
                        src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Health_App_9wOIhC8StKwZ.svg"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#DC121F" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.85">
                            <v-layout class="white--text headline" row justify-center>
                              <a target="_blank" href="#" class="white--text mt-18" style="text-decoration:none">Link
                                unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="headline font-weight-light white--text pb-5">Health App</p>
                    </v-card>
                  </v-hover>
                </div>
              </v-layout>
              <v-layout row justify-center align-center>
                <div class="ml-4 mt-n17">
                  <v-card flat color="transparent">
                    <img width="370" src="../assets/images/empty-slot.svg" alt="">
                    <p class="headline font-weight-light white--text pb-5"></p>
                  </v-card>
                </div>
                <div class="ml-4 mt-n17">
                  <v-card flat color="transparent">
                    <img width="370" src="../assets/images/empty-slot.svg" alt="">
                    <p class="headline font-weight-light white--text pb-5"></p>
                  </v-card>
                </div>

                <!-- <div class="ml-4 mt-n22">
                  <v-hover v-slot="{ hover }">
                  <v-card color="#E2E2E2">
                    <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/web-design_2__0rftxF21W.png" alt="my experience in the industry">
                    <v-expand-transition>
                          <v-sheet color="#E2E2E2" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.85">
                            <v-layout class="white--text headline" row justify-center>
                              <a target="_blank" href="#" class="black--text mt-18" style="text-decoration:none">Link unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    <p class="headline font-weight-light white--text black--text pb-5">Nature’s Pasture</p>
                  </v-card>
                  </v-hover>
                </div> -->

                <div class="ml-4 mt-n22">
                  <v-hover v-slot="{ hover }">
                    <v-card color="#DD99A3">
                      <v-img width="370"
                        src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/web-design_1__A89QxeXXT.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#DD99A3" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.85">
                            <v-layout class="white--text headline" row justify-center>
                              <a target="_blank" href="#" class="white--text mt-18" style="text-decoration:none">Link
                                unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="headline font-weight-light white--text  pb-5">Mindfuliving Uganda</p>
                    </v-card>
                  </v-hover>
                </div>
              </v-layout>
            </div>
            <v-layout column justify-center align-center mt-19>
              <div class="social-text font-weight-bold">Follow, Like & Subscribe </div>
              <v-layout row wrap mt-3>
                <a href="https://web.facebook.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Facebook.svg"
                    alt="https://web.facebook.com/stephkirathe">
                </a>
                <a href="https://www.instagram.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Instagram.svg"
                    alt="https://www.instagram.com/stephkirathe">
                </a>
                <!-- <a href="https://www.twitter.com/stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
                    <img width="33" src="../assets/icons/socials/Twitter.svg"
                      alt="https://www.instagram.com/stephkirathe">
                  </a> -->
                <a href="https://www.linkedin.com/in/stephkirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/LinkedIn.svg"
                    alt="https://www.linkedin.com/in/stephkirathe/">
                </a>
                <a href="https://www.behance.net/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="36" src="../assets/icons/socials/Behance.svg" alt="https://www.behance.net/stephkirathe"
                    class="mt-1">
                </a>
                <a href="https://www.figma.com/@stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="20" src="../assets/icons/socials/Figma.svg" alt="https://www.figma.com/@stephkirathe">
                </a>
              </v-layout>
            </v-layout>
          </center>
          <!--  -->
        </v-container>
      </v-layout>
      <div>
        <v-divider></v-divider>
        <v-footer class="transparent pa-3">
          <v-layout column wrap justify-center align-center>
            <div class="caption grey--text">
              COPYRIGHT STEPHANIE KIRATHE 2020 | <a href="http://www.alero.co.ke" target="_blank" rel="dofollow"
                class="caption grey--text">POWERED BY ALERO CORPORATION</a>
            </div>
          </v-layout>
        </v-footer>
      </div>
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
                <p class="body-2 ml-1"> projects I've worked on...</p>
              </v-layout>
              <v-layout row justify-center align-center>
                <div class="ml-4 mt-19">
                  <v-hover v-slot="{ hover }">
                    <v-card color="#262AA3">
                      <v-img width="270" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Brick_VMod9FoSn.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#262AA3" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.85">
                            <v-layout class="white--text headline" row justify-center>
                              <a target="_blank" rel="nofollow" href="https://brickcom.alero.co.ke/"
                                class="white--text mt-18" style="text-decoration:none">Visit Site</a>
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
                        src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Paint_Depo_Limited_1__2x7IrMzxb.png"
                        alt="">
                        <v-expand-transition>
                          <v-sheet color="#662583" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.85">
                            <v-layout class="white--text headline" column align-center justify-center>
                              <a target="_blank" href="https://www.thepaintdepo.co.ke/" class="white--text mt-18"
                                style="text-decoration:none">Visit Site</a>
                                <v-row class="mt-n1 align-center">
                                <a href="https://web.facebook.com/decorativepaint17/" target="_blank"
                                  rel="noopener noreferrer" class="ma-3">
                                  <img width="25" src="../assets/icons/socials/Facebook-white.svg"
                                    alt="https://web.facebook.com/decorativepaint17/">
                                </a>
                                <a href="https://www.instagram.com/thepaintdepo_ke/" target="_blank"
                                  rel="noopener noreferrer" class="ma-3">
                                  <img width="25" src="../assets/icons/socials/Instagram-white.svg"
                                    alt="https://www.instagram.com/stephkirathe">
                                </a>
                              </v-row>
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
                        src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/LociFood_Ecommerce_DYdMlexzi.png" alt="">
                        <v-expand-transition>
                          <v-sheet color="#FD7D12" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.85">
                            <v-layout class="white--text headline" row justify-center>
                              <a target="_blank" href="#" class="white--text mt-18" style="text-decoration:none">Link
                                unavailable</a>
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
                      <v-img width="270" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Frame_38_jEHh4q7Lk.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#264C2D" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.85">
                            <v-layout class="white--text headline" row justify-center>
                              <a target="_blank" href="https://www.alero.co.ke/" class="white--text mt-18"
                                style="text-decoration:none">Visit Site</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="portfolio-text pb-5">Alero Corporation</p>
                    </v-card>
                  </v-hover>
                </div>
                <div class="ml-4 mt-n17">
                  <v-hover v-slot="{ hover }">
                    <v-card color="#0A093D">
                      <v-img width="270" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Frame_13_o3eUpKY9C.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#0A093D" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.85">
                            <v-layout class="white--text headline" row justify-center>
                              <a target="_blank" href="#" class="white--text mt-18" style="text-decoration:none">Link
                                unavailable</a>
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
                      <v-img width="270"
                        src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Health_App_9wOIhC8StKwZ.svg"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#DC121F" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.85">
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
                <!-- <div class="ml-4 mt-n16">
                  <v-hover v-slot="{ hover }">
                  <v-card color="#E2E2E2">
                    <v-img width="270" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/web-design_2__0rftxF21W.png" alt="my experience in the industry">
                    <v-expand-transition>
                          <v-sheet color="#E2E2E2" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.85">
                            <v-layout class="white--text headline" row justify-center>
                              <a href="#" class="black--text mt-18" style="text-decoration:none">Link unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                    </v-img>
                    <p class="portfolio-text black--text pb-5">Nature’s Pasture</p>
                  </v-card>
                  </v-hover>
                </div> -->

                <div class="ml-4 mt-n16">
                  <v-hover v-slot="{ hover }">
                    <v-card color="#DD99A3">
                      <v-img width="270"
                        src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/web-design_1__A89QxeXXT.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#DD99A3" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.85">
                            <v-layout class="white--text headline" row justify-center>
                              <a href="#" class="white--text mt-18" style="text-decoration:none">Link unavailable</a>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="portfolio-text pb-5">Mindfuliving Uganda</p>
                    </v-card>
                  </v-hover>
                </div>
              </v-layout>
            </div>
            <v-layout column justify-center align-center mt-19>
              <div class="social-text font-weight-bold">Follow, Like & Subscribe </div>
              <v-layout row wrap mt-3>
                <a href="https://web.facebook.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Facebook.svg"
                    alt="https://web.facebook.com/stephkirathe">
                </a>
                <a href="https://www.instagram.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Instagram.svg"
                    alt="https://www.instagram.com/stephkirathe">
                </a>
                <!-- <a href="https://www.twitter.com/stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
                    <img width="33" src="../assets/icons/socials/Twitter.svg"
                      alt="https://www.instagram.com/stephkirathe">
                  </a> -->
                <a href="https://www.linkedin.com/in/stephkirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/LinkedIn.svg"
                    alt="https://www.linkedin.com/in/stephkirathe/">
                </a>
                <a href="https://www.behance.net/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="36" src="../assets/icons/socials/Behance.svg" alt="https://www.behance.net/stephkirathe"
                    class="mt-1">
                </a>
                <a href="https://www.figma.com/@stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="20" src="../assets/icons/socials/Figma.svg" alt="https://www.figma.com/@stephkirathe">
                </a>
              </v-layout>
            </v-layout>
          </center>
          <!--  -->
        </v-container>
      </v-layout>
      <div>
        <v-divider></v-divider>
        <v-footer class="transparent pa-3">
          <v-layout column wrap justify-center align-center>
            <div class="caption grey--text">
              COPYRIGHT STEPHANIE KIRATHE 2020 | <a href="http://www.alero.co.ke" target="_blank" rel="dofollow"
                class="caption grey--text">POWERED BY Alero Corporation</a>
            </div>
          </v-layout>
        </v-footer>
      </div>
    </v-flex>
    <!-------------------------- Tablet screens <= 768px  ------------------------------->
    <v-flex xs12 hidden-xs-only hidden-md-only hidden-xl-only hidden-lg-only>
      <v-layout column wrap mb-10>
        <main-header></main-header>
        <!--  -->
        <v-container class="my-5">
          <center class="mt-5">
            <div id="career" class="">
              <v-layout column justify-center align-center mb-8>
                <p class="display-2 font-weight-light">My Work</p>
                <p class="body-2 ml-1"> projects I've worked on...</p>
              </v-layout>
              <v-layout column justify-center align-center>
                <div class="ml-4">
                  <a target="_blank" rel="nofollow" href="https://brickcom.alero.co.ke/" class="white--text mt-18"
                    style="text-decoration:none">
                    <v-card color="#262AA3">
                      <img width="450" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Brick_VMod9FoSn.png"
                        alt="my experience in the industry">
                      <p class="portfolio-text pb-5">Brickcom Logistics Limited</p>
                    </v-card>
                  </a>
                </div>
                <div class="ml-4">
                  <a target="_blank" rel="nofollow" href="https://www.thepaintdepo.co.ke/" class="white--text mt-18"
                    style="text-decoration:none">
                    <v-card color="#662583">
                      <img width="450"
                        src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Paint_Depo_Limited_1__2x7IrMzxb.png"
                        alt="">
                      <p class="portfolio-text pb-5">Paint Depo Limited</p>
                    </v-card>
                  </a>
                </div>
                <div class="ml-4">
                  <a target="_blank" rel="nofollow" href="" class="white--text mt-18" style="text-decoration:none">
                    <v-card color="#FD7D12">
                      <img width="450"
                        src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/LociFood_Ecommerce_DYdMlexzi.png" alt="">
                      <p class="portfolio-text pb-5">LociFood Ecommerce</p>
                    </v-card>
                  </a>
                </div>
              </v-layout>
              <v-layout column justify-center align-center>
                <div class="ml-4">
                  <a target="_blank" href="https://www.alero.co.ke/" rel="nofollow" class="white--text mt-18"
                    style="text-decoration:none">
                    <v-card color="#264C2D">
                      <img width="450" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Frame_38_jEHh4q7Lk.png"
                        alt="my experience in the industry">
                      <p class="portfolio-text pb-5">Alero Corporation</p>
                    </v-card>
                  </a>
                </div>
                <div class="ml-4">
                  <v-card color="#0A093D">
                    <img width="450" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Frame_13_o3eUpKY9C.png"
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
                <!-- <div class="ml-4">
                  <v-card color="#E2E2E2">
                    <img width="450" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/web-design_2__0rftxF21W.png" alt="my experience in the industry">
                    <p class="portfolio-text black--text pb-5">Nature’s Pasture</p>
                  </v-card>
                </div> -->

                <div class="ml-4">
                  <v-card color="#DD99A3">
                    <img width="450" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/web-design_1__A89QxeXXT.png"
                      alt="my experience in the industry">
                    <p class="portfolio-text pb-5">Mindfuliving Uganda</p>
                  </v-card>
                </div>
              </v-layout>
            </div>
            <v-layout column justify-center align-center mt-19>
              <div class="social-text font-weight-bold">Follow, Like & Subscribe </div>
              <v-layout row wrap mt-3>
                <a href="https://web.facebook.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Facebook.svg"
                    alt="https://web.facebook.com/stephkirathe">
                </a>
                <a href="https://www.instagram.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Instagram.svg"
                    alt="https://www.instagram.com/stephkirathe">
                </a>
                <!-- <a href="https://www.twitter.com/stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
                    <img width="33" src="../assets/icons/socials/Twitter.svg"
                      alt="https://www.instagram.com/stephkirathe">
                  </a> -->
                <a href="https://www.linkedin.com/in/stephkirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/LinkedIn.svg"
                    alt="https://www.linkedin.com/in/stephkirathe/">
                </a>
                <a href="https://www.behance.net/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="36" src="../assets/icons/socials/Behance.svg" alt="https://www.behance.net/stephkirathe"
                    class="mt-1">
                </a>
                <a href="https://www.figma.com/@stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="19" src="../assets/icons/socials/Figma.svg" alt="https://www.figma.com/@stephkirathe">
                </a>
              </v-layout>
            </v-layout>
          </center>
          <!--  -->
        </v-container>
      </v-layout>
      <div>
        <v-divider></v-divider>
        <v-footer class="transparent pa-3">
          <v-layout column wrap justify-center align-center>
            <div class="caption grey--text">
              COPYRIGHT STEPHANIE KIRATHE 2020 | <a href="http://www.alero.co.ke" target="_blank" rel="dofollow"
                class="caption grey--text">POWERED BY Alero Corporation</a>
            </div>
          </v-layout>
        </v-footer>
      </div>
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
                <p class="body-2 ml-1"> projects I've worked on...</p>
              </v-layout>
              <v-layout column justify-center align-center>
                <div>
                  <a target="_blank" rel="nofollow" href="https://brickcom.alero.co.ke/">
                    <v-card color="#262AA3">
                      <img width="350" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Brick_VMod9FoSn.png"
                        alt="my experience in the industry">
                      <p class="portfolio-text pb-5">Brickcom Logistics Limited</p>
                    </v-card>
                  </a>
                </div>
                <div>
                  <a target="_blank" rel="nofollow" href="https://www.thepaintdepo.co.ke/">
                    <v-card color="#662583">
                      <img width="350"
                        src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Paint_Depo_Limited_1__2x7IrMzxb.png"
                        alt="">
                      <p class="portfolio-text pb-5">Paint Depo Limited</p>
                    </v-card>
                  </a>
                </div>
                <div>
                  <v-card color="#FD7D12">
                    <img width="350"
                      src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/LociFood_Ecommerce_DYdMlexzi.png" alt="">
                    <p class="portfolio-text pb-5">LociFood Ecommerce</p>
                  </v-card>
                </div>
              </v-layout>
              <v-layout column justify-center align-center>
                <div>
                  <a target="_blank" rel="nofollow" href="https://www.alero.co.ke/">
                    <v-card color="#264C2D">
                      <img width="350" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Frame_38_jEHh4q7Lk.png"
                        alt="my experience in the industry">
                      <p class="portfolio-text pb-5">Alero Corporation</p>
                    </v-card>
                  </a>
                </div>
                <div>
                  <v-card color="#0A093D">
                    <img width="350" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/Frame_13_o3eUpKY9C.png"
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
                <!-- <div>
                  <v-card color="#E2E2E2">
                    <img width="350" src="../assets/images/Coming Soon.svg" alt="">
                    <p class="portfolio-text dark pb-5">LearnHub</p>
                  </v-card>
                </div> -->
                <!-- <div>
                  <v-card color="#E2E2E2">
                    <img width="350" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/web-design_2__0rftxF21W.png"
                      alt="my experience in the industry">
                    <p class="portfolio-text black--text pb-5">Nature’s Pasture</p>
                  </v-card>
                </div> -->

                <div>
                  <v-card color="#DD99A3">
                    <img width="350" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/web-design_1__A89QxeXXT.png"
                      alt="my experience in the industry">
                    <p class="portfolio-text pb-5">Mindfuliving Uganda</p>
                  </v-card>
                </div>
              </v-layout>
            </div>
            <v-layout column justify-center align-center mt-19>
              <div class="social-text font-weight-bold">Follow, Like & Subscribe </div>
              <v-layout row wrap mt-3>
                <a href="https://web.facebook.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Facebook.svg"
                    alt="https://web.facebook.com/stephkirathe">
                </a>
                <a href="https://www.instagram.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Instagram.svg"
                    alt="https://www.instagram.com/stephkirathe">
                </a>
                <!-- <a href="https://www.twitter.com/stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
                    <img width="33" src="../assets/icons/socials/Twitter.svg"
                      alt="https://www.instagram.com/stephkirathe">
                  </a> -->
                <a href="https://www.linkedin.com/in/stephkirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="33" src="../assets/icons/socials/LinkedIn.svg"
                    alt="https://www.linkedin.com/in/stephkirathe/">
                </a>
                <a href="https://www.behance.net/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="36" src="../assets/icons/socials/Behance.svg" alt="https://www.behance.net/stephkirathe"
                    class="mt-1">
                </a>
                <a href="https://www.figma.com/@stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="20" src="../assets/icons/socials/Figma.svg" alt="https://www.figma.com/@stephkirathe">
                </a>
              </v-layout>
            </v-layout>
          </center>
          <!--  -->
        </v-container>
      </v-layout>
      <div>
        <v-divider></v-divider>
        <v-footer class="transparent pa-3">
          <v-layout column wrap justify-center align-center>
            <div class="caption grey--text">
              COPYRIGHT STEPHANIE KIRATHE 2020 | <a href="http://www.alero.co.ke" target="_blank" rel="dofollow"
                class="caption grey--text">POWERED BY Alero Corporation</a>
            </div>
          </v-layout>
        </v-footer>
      </div>
    </v-flex>
  </div>
</template>

<style scoped>
  .portfolio-text {
    font-family: Helvetica Neue;
    font-size: 18px;
    font-style: thin;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.006532743107527494px;
    text-align: center;
    color: white;
  }

  .portfolio-text.dark {
    font-family: Helvetica Neue;
    font-size: 18px;
    font-style: thin;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.006532743107527494px;
    text-align: center;
    color: #AC7339;
  }

  a {
    text-decoration: none;
  }
</style>
