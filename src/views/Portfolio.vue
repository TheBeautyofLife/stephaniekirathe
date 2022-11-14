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
                <p class="display-3 mb-4">UI/UX Work</p>
                <p class="body-2 ml-1"> projects I've worked on...</p>
              </v-layout>
              <v-layout row justify-center>
                 <!--  -->
              <div class="mt-n5">
              <v-layout row justify-center>
                 <!-- Alero  -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(249, 180, 40, 0.4) -13.68%, rgba(249, 180, 40, 0.2627) 20.56%, rgba(249, 180, 40, 0) 90.67%);" to="/portfolio/alero" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Alero.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">creative agency</p>
                              <p class="headline black--text mt-n3">Alero</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light pb-5 des">UI/UX Design | Branding | Social Media Marketing</p>
                    </v-card>
                  </v-hover>
                </div>
                 <!-- The Paint Depo  -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(102, 37, 131, 0.4) -13.68%, rgba(102, 37, 131, 0.2627) 20.56%, rgba(102, 37, 131, 0) 90.67%);" to="/portfolio/paintdepo" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/PaintDepo.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">paint and coatings</p>
                              <p class="headline black--text mt-n3">The Paint Depo</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Class & Sass -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(231, 191, 191, 0.4) -13.68%, rgba(231, 191, 191, 0.2627) 20.56%, rgba(231, 191, 191, 0) 90.67%);" to="/portfolio/classandsasskenya" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Class & Sass.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">fashion ecommerce</p>
                              <p class="headline black--text mt-n3">Class & Sass Kenya</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Ganana Developers -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(17, 99, 71, 0.4) -13.68%, rgba(17, 99, 71, 0.2627) 20.56%, rgba(17, 99, 71, 0) 90.67%);" to="/portfolio/gananadevelopers" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Ganana.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">real estate</p>
                              <p class="headline black--text mt-n3">Ganana Developers Ltd.</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding | Social Media Marketing</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Muhara Salon  -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(52, 21, 9, 0.4) -13.68%, rgba(52, 21, 9, 0.2627) 20.56%, rgba(52, 21, 9, 0) 90.67%);" to="/portfolio/muharabeauty" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Muhara.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">beauty Salon & cosmetics</p>
                              <p class="headline black--text mt-n3">Muhara Hair & Beauty</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding</p>
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Alero ERP Mobile Hybrid application -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(25, 109, 166, 0.4) -13.68%, rgba(25, 109, 166, 0.2627) 20.56%, rgba(25, 109, 166, 0) 90.67%);" to="/portfolio/aleroerpapp" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/aleroERP.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Online Retailing</p>
                              <p class="headline black--text mt-n3">Alero ERP Cloud</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design</p>
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Celebuddy
                 -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(246, 219, 150, 0.4) -13.68%, rgba(246, 219, 150, 0.2627) 20.56%, rgba(246, 219, 150, 0) 90.67%);">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Celebuddy.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Entertainment</p>
                              <p class="headline black--text mt-n3">Celebuddy</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Mindfulliving -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(52, 142, 145, 0.4) -13.68%, rgba(52, 142, 145, 0.2627) 20.56%, rgba(52, 142, 145, 0) 90.67%);">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Mindfulliving.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Wellbeing</p>
                              <p class="headline black--text mt-n3">Mindfulliving Uganda</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding</p>
                    </v-card>
                  </v-hover>
                </div>
              </v-layout>
              </div>
              <!--  -->
              </v-layout>
              <v-layout row justify-center align-center>
               <!--  -->
              </v-layout>
            </div>
            <v-layout column justify-center align-center mt-19>
              <div class="social-text font-weight-bold">Follow, Like & Subscribe </div>
              <v-layout row wrap mt-3>
                <!-- <a href="https://web.facebook.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Facebook.svg"
                    alt="https://web.facebook.com/stephkirathe">
                </a>
                <a href="https://www.instagram.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Instagram.svg"
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
              COPYRIGHT STEPHANIE KIRATHE 2023
              <!-- | <a href="http://www.alero.co.ke" target="_blank" rel="dofollow"
                class="caption grey--text">POWERED BY ALERO CORPORATION</a> -->
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
                <p class="display-3 mb-4">UI/UX Work</p>
                <p class="body-2 ml-1"> projects I've worked on...</p>
              </v-layout>
              <v-layout row justify-center>
                 <!--  -->
              <div class="mt-n5">
              <v-layout row justify-center>
                 <!-- Alero  -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(249, 180, 40, 0.4) -13.68%, rgba(249, 180, 40, 0.2627) 20.56%, rgba(249, 180, 40, 0) 90.67%);" to="/portfolio/alero" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Alero.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">creative agency</p>
                              <p class="headline black--text mt-n3">Alero</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light pb-5 des">UI/UX Design | Branding | Social Media Marketing</p>
                    </v-card>
                  </v-hover>
                </div>
                 <!-- The Paint Depo  -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(102, 37, 131, 0.4) -13.68%, rgba(102, 37, 131, 0.2627) 20.56%, rgba(102, 37, 131, 0) 90.67%);" to="/portfolio/paintdepo" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/PaintDepo.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">paint and coatings</p>
                              <p class="headline black--text mt-n3">The Paint Depo</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Class & Sass -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(231, 191, 191, 0.4) -13.68%, rgba(231, 191, 191, 0.2627) 20.56%, rgba(231, 191, 191, 0) 90.67%);" to="/portfolio/classandsasskenya" target="_blank">
                     <v-img width="370" src="../assets/images/Portfolio/Cover/Class & Sass.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">fashion ecommerce</p>
                              <p class="headline black--text mt-n3">Class & Sass Kenya</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Ganana Developers -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(17, 99, 71, 0.4) -13.68%, rgba(17, 99, 71, 0.2627) 20.56%, rgba(17, 99, 71, 0) 90.67%);" to="/portfolio/gananadevelopers" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Ganana.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">real estate</p>
                              <p class="headline black--text mt-n3">Ganana Developers Ltd.</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding | Social Media Marketing</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Muhara Salon  -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(52, 21, 9, 0.4) -13.68%, rgba(52, 21, 9, 0.2627) 20.56%, rgba(52, 21, 9, 0) 90.67%);" to="/portfolio/muharabeauty" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Muhara.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">beauty Salon & cosmetics</p>
                              <p class="headline black--text mt-n3">Muhara Hair & Beauty</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding</p>
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Alero ERP Mobile Hybrid application -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(25, 109, 166, 0.4) -13.68%, rgba(25, 109, 166, 0.2627) 20.56%, rgba(25, 109, 166, 0) 90.67%);" to="/portfolio/aleroerpapp" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/aleroERP.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Online Retailing</p>
                              <p class="headline black--text mt-n3">Alero ERP Cloud</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design</p>
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Celebuddy
                 -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(246, 219, 150, 0.4) -13.68%, rgba(246, 219, 150, 0.2627) 20.56%, rgba(246, 219, 150, 0) 90.67%);">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Celebuddy.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Entertainment</p>
                              <p class="headline black--text mt-n3">Celebuddy</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Mindfulliving -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(52, 142, 145, 0.4) -13.68%, rgba(52, 142, 145, 0.2627) 20.56%, rgba(52, 142, 145, 0) 90.67%);">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Mindfulliving.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Wellbeing</p>
                              <p class="headline black--text mt-n3">Mindfulliving Uganda</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding</p>
                    </v-card>
                  </v-hover>
                </div>
              </v-layout>
              </div>
              <!--  -->
              </v-layout>
            </div>
            <v-layout column justify-center align-center mt-19>
              <div class="social-text font-weight-bold">Follow, Like & Subscribe </div>
              <v-layout row wrap mt-3>
                <!-- <a href="https://web.facebook.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Facebook.svg"
                    alt="https://web.facebook.com/stephkirathe">
                </a>
                <a href="https://www.instagram.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Instagram.svg"
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
              COPYRIGHT STEPHANIE KIRATHE 2023
              <!-- | <a href="http://www.alero.co.ke" target="_blank" rel="dofollow"
                class="caption grey--text">POWERED BY Alero Corporation</a> -->
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
                <p class="display-2 font-weight-light">UI/UX Work</p>
                <p class="body-2 ml-1"> projects I've worked on...</p>
              </v-layout>
               <v-layout row justify-center>
                 <!--  -->
              <div class="mt-n5">
              <v-layout row justify-center>
                 <!-- Alero  -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(249, 180, 40, 0.4) -13.68%, rgba(249, 180, 40, 0.2627) 20.56%, rgba(249, 180, 40, 0) 90.67%);" to="/portfolio/alero" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Alero.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">creative agency</p>
                              <p class="headline black--text mt-n3">Alero</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light pb-5 des">UI/UX Design | Branding | Social Media Marketing</p>
                    </v-card>
                  </v-hover>
                </div>
                 <!-- The Paint Depo  -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(102, 37, 131, 0.4) -13.68%, rgba(102, 37, 131, 0.2627) 20.56%, rgba(102, 37, 131, 0) 90.67%);" to="/portfolio/paintdepo" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/PaintDepo.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">paint and coatings</p>
                              <p class="headline black--text mt-n3">The Paint Depo</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Class & Sass -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(231, 191, 191, 0.4) -13.68%, rgba(231, 191, 191, 0.2627) 20.56%, rgba(231, 191, 191, 0) 90.67%);" to="/portfolio/classandsasskenya" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Class & Sass.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">fashion ecommerce</p>
                              <p class="headline black--text mt-n3">Class & Sass Kenya</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Ganana Developers -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(17, 99, 71, 0.4) -13.68%, rgba(17, 99, 71, 0.2627) 20.56%, rgba(17, 99, 71, 0) 90.67%);" to="/portfolio/gananadevelopers" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Ganana.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">real estate</p>
                              <p class="headline black--text mt-n3">Ganana Developers Ltd.</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding | Social Media Marketing</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Muhara Salon -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(52, 21, 9, 0.4) -13.68%, rgba(52, 21, 9, 0.2627) 20.56%, rgba(52, 21, 9, 0) 90.67%);" to="/portfolio/muharabeauty" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Muhara.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">beauty Salon & cosmetics</p>
                              <p class="headline black--text mt-n3">Muhara Hair & Beauty</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding</p>
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Alero ERP Mobile Hybrid application -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(25, 109, 166, 0.4) -13.68%, rgba(25, 109, 166, 0.2627) 20.56%, rgba(25, 109, 166, 0) 90.67%);" to="/portfolio/aleroerpapp" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/aleroERP.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Online Retailing</p>
                              <p class="headline black--text mt-n3">Alero ERP Cloud</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design</p>
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Celebuddy -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(246, 219, 150, 0.4) -13.68%, rgba(246, 219, 150, 0.2627) 20.56%, rgba(246, 219, 150, 0) 90.67%);">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Celebuddy.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Entertainment</p>
                              <p class="headline black--text mt-n3">Celebuddy</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Mindfulliving -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(52, 142, 145, 0.4) -13.68%, rgba(52, 142, 145, 0.2627) 20.56%, rgba(52, 142, 145, 0) 90.67%);">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Mindfulliving.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Wellbeing</p>
                              <p class="headline black--text mt-n3">Mindfulliving Uganda</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding</p>
                    </v-card>
                  </v-hover>
                </div>
              </v-layout>
              </div>
              <!--  -->
              </v-layout>
            </div>
            <v-layout column justify-center align-center mt-19>
              <div class="social-text font-weight-bold">Follow, Like & Subscribe </div>
              <v-layout row wrap mt-3>
                <!-- <a href="https://web.facebook.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Facebook.svg"
                    alt="https://web.facebook.com/stephkirathe">
                </a>
                <a href="https://www.instagram.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Instagram.svg"
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
              COPYRIGHT STEPHANIE KIRATHE 2023
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
                <p class="display-2 font-weight-light">UI/UX Work</p>
                <p class="body-2 ml-1"> projects I've worked on...</p>
              </v-layout>
              <v-layout row justify-center>
                 <!--  -->
              <div class="mt-n5">
              <v-layout row justify-center>
                 <!-- Alero  -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(249, 180, 40, 0.4) -13.68%, rgba(249, 180, 40, 0.2627) 20.56%, rgba(249, 180, 40, 0) 90.67%);" to="/portfolio/alero" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Alero.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">creative agency</p>
                              <p class="headline black--text mt-n3">Alero</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light pb-5 des">UI/UX Design | Branding | Social Media Marketing</p>
                    </v-card>
                  </v-hover>
                </div>
                 <!-- The Paint Depo  -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(102, 37, 131, 0.4) -13.68%, rgba(102, 37, 131, 0.2627) 20.56%, rgba(102, 37, 131, 0) 90.67%);" to="/portfolio/paintdepo" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/PaintDepo.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">paint and coatings</p>
                              <p class="headline black--text mt-n3">The Paint Depo</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Class & Sass -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(231, 191, 191, 0.4) -13.68%, rgba(231, 191, 191, 0.2627) 20.56%, rgba(231, 191, 191, 0) 90.67%);" to="/portfolio/classandsasskenya" target="_blank">
   <v-img width="370" src="../assets/images/Portfolio/Cover/Class & Sass.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">fashion ecommerce</p>
                              <p class="headline black--text mt-n3">Class & Sass Kenya</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Ganana Developers -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(17, 99, 71, 0.4) -13.68%, rgba(17, 99, 71, 0.2627) 20.56%, rgba(17, 99, 71, 0) 90.67%);" to="/portfolio/gananadevelopers" target="_blank">
   <v-img width="370" src="../assets/images/Portfolio/Cover/Ganana.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">real estate</p>
                              <p class="headline black--text mt-n3">Ganana Developers Ltd.</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding | Social Media Marketing</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Muhara Salon  -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(52, 21, 9, 0.4) -13.68%, rgba(52, 21, 9, 0.2627) 20.56%, rgba(52, 21, 9, 0) 90.67%);" to="/portfolio/muharabeauty" target="_blank">
   <v-img width="370" src="../assets/images/Portfolio/Cover/Muhara.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">beauty Salon & cosmetics</p>
                              <p class="headline black--text mt-n3">Muhara Hair & Beauty</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding</p>
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Alero ERP Mobile Hybrid application -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(25, 109, 166, 0.4) -13.68%, rgba(25, 109, 166, 0.2627) 20.56%, rgba(25, 109, 166, 0) 90.67%);" to="/portfolio/aleroerpapp" target="_blank">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/aleroERP.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Online Retailing</p>
                              <p class="headline black--text mt-n3">Alero ERP Cloud</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design</p>
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Celebuddy -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(246, 219, 150, 0.4) -13.68%, rgba(246, 219, 150, 0.2627) 20.56%, rgba(246, 219, 150, 0) 90.67%);">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Celebuddy.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Entertainment</p>
                              <p class="headline black--text mt-n3">Celebuddy</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Mindfulliving -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat style="background: linear-gradient(180deg, rgba(52, 142, 145, 0.4) -13.68%, rgba(52, 142, 145, 0.2627) 20.56%, rgba(52, 142, 145, 0) 90.67%);">
                      <v-img width="370" src="../assets/images/Portfolio/Cover/Mindfulliving.png"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Wellbeing</p>
                              <p class="headline black--text mt-n3">Mindfulliving Uganda</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                      <p class="body-2 font-weight-light des pb-5">UI/UX Design | Branding</p>
                    </v-card>
                  </v-hover>
                </div>
              </v-layout>
              </div>
              <!--  -->
              </v-layout>
            </div>
            <v-layout column justify-center align-center mt-19>
              <div class="social-text font-weight-bold">Follow, Like & Subscribe </div>
              <v-layout row wrap mt-3>
                <!-- <a href="https://web.facebook.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Facebook.svg"
                    alt="https://web.facebook.com/stephkirathe">
                </a>
                <a href="https://www.instagram.com/stephkirathe" target="_blank" rel="noopener noreferrer" class="ma-3">
                  <img width="33" src="../assets/icons/socials/Instagram.svg"
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
              COPYRIGHT STEPHANIE KIRATHE 2023
            </div>
          </v-layout>
        </v-footer>
      </div>
    </v-flex>
  </div>
</template>

<script>
import Header from '@/components/header/index.header.vue'
export default {
  components: {
    'main-header': Header
  },
  head: {
    title: {
      inner: 'My work'
    },
    meta: [{
      name: 'application-name',
      content: 'Welcome to Stephanie\'s Kirathe official website.This is the portfolio page, feel free to reach out to me anytime'
    },
    {
      name: 'description',
      content: 'Welcome to Stephanie\'s Kirathe official website. This is the portfolio page, feel free to reach out to me anytime',
      id: 'desc'
    }, // id to replace intead of create element
    // ...
    // Google+ / Schema.org
    {
      itemprop: 'name',
      content: 'portfolio page'
    },
    {
      itemprop: 'description',
      content: 'Welcome to Stephanie\'s Kirathe official website.This is the portfolio page, feel free to reach out to me anytime'
    },
    {
      property: 'og:title',
      content: 'Stephanie\'s Kirathe official website.This is the portfolio page'
    }
    ]
  }
}
</script>

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

  .des {
    color:#AC7339;
    font-weight: 400;
  }
</style>
