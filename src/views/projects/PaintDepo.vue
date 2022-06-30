<template>
  <div>
    <!--------------------------   Larger screen >= 1440px ------------------------------>
    <v-flex xs12 hidden-md-and-down hidden-sm-and-down>
         <v-layout column wrap mb-9>
              <main-header></main-header>
        <v-container style="width:1200px" class="my-12">
             <v-sheet>
              <v-layout justify-center align-center>
                 <v-card flat>
                  <v-layout row justify-center align-center>
                      <v-img  src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_1_qq5M0DNKe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610760849" alt="Paint Depo-1"></v-img>
                      <v-img  src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_2_atDGtv5hn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610759087" alt="Paint Depo-2"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_3_3flHRAJgZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610784109" alt="Paint Depo-3"></v-img>
                      <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_4_Rwu1EQmYB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656611486349" alt="Paint Depo-4"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_5_RwBnbig1m.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610770487" alt="Paint Depo-5"></v-img>
                      <v-img src=" " alt="Paint Depo-1"></v-img>
                  </v-layout>
                 </v-card>
              </v-layout>
             </v-sheet>

             <v-sheet>
                <v-layout mt-12>
                <v-layout justify-start>
                                     <!-- Alero  -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/alero">
   <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/Alero_4o1RGsjQM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605340376"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Previous</p>
                              <p class="headline black--text mt-n3">Alero</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div>
                </v-layout>
               <v-layout justify-end>

                 <!-- The Paint Depo  -->
                <!-- <div>
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/paintdepo">
                      <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/PaintDepo_qu1uQlInV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605341034"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Next</p>
                              <p class="headline black--text mt-n3">The Paint Depo</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Class & Sass -->
                <div>
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/classandsasskenya" >
   <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/Class___Sass_oCvuuCnrNO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605340534"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Next</p>
                              <p class="headline black--text mt-n3">Class & Sass Kenya</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Ganana Developers -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/gananadevelopers" >
   <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/Ganana_fWWUlrXsDY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605340533"
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
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Muhara Salon  -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/muharabeauty" >
   <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/Muhara_bfPWg3Rtq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605340796"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">beauty Salon and cosmetic agency</p>
                              <p class="headline black--text mt-n3">Muhara Hair & Beauty</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Alero ERP Mobile Hybrid application -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/aleroerpapp" >
   <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/aleroERP_zDPa1OC6H.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605340429"
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
                    </v-card>
                  </v-hover>
                </div> -->
              </v-layout>
                </v-layout>
             </v-sheet>
        </v-container>
     </v-layout>
    </v-flex>
        <!-------------------------- Larger screen >= 1024px  ------------------------------->
    <v-flex xs12 hidden-sm-and-down hidden-xl-only hidden-lg-only>
         <v-layout column wrap mb-9>
             <main-header></main-header>
        <v-container style="width:950px" class="my-17">
             <v-sheet>
              <v-layout justify-center align-center>
                 <v-card flat>
                  <v-layout row justify-center align-center>
                      <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_1_qq5M0DNKe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610760849" alt="Paint Depo-1"></v-img>
                      <v-img  src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_2_atDGtv5hn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610759087" alt="Paint Depo-2"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_3_3flHRAJgZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610784109" alt="Paint Depo-3"></v-img>
                      <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_4_Rwu1EQmYB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656611486349" alt="Paint Depo-4"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_5_RwBnbig1m.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610770487" alt="Paint Depo-5"></v-img>
                      <v-img src=" " alt="Paint Depo-1"></v-img>
                  </v-layout>
                 </v-card>
              </v-layout>
             </v-sheet>
            <v-sheet>
                <v-layout mt-12>
                <v-layout justify-start>
                                     <!-- Alero  -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/alero">
   <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/Alero_4o1RGsjQM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605340376"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Previous</p>
                              <p class="headline black--text mt-n3">Alero</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div>
                </v-layout>
               <v-layout justify-end>

                 <!-- The Paint Depo  -->
                <!-- <div>
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/paintdepo">
                      <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/PaintDepo_qu1uQlInV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605341034"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Next</p>
                              <p class="headline black--text mt-n3">The Paint Depo</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Class & Sass -->
                <div>
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/classandsasskenya" >
   <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/Class___Sass_oCvuuCnrNO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605340534"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Next</p>
                              <p class="headline black--text mt-n3">Class & Sass Kenya</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Ganana Developers -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/gananadevelopers" >
   <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/Ganana_fWWUlrXsDY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605340533"
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
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Muhara Salon  -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/muharabeauty" >
   <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/Muhara_bfPWg3Rtq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605340796"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">beauty Salon and cosmetic agency</p>
                              <p class="headline black--text mt-n3">Muhara Hair & Beauty</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Alero ERP Mobile Hybrid application -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/aleroerpapp" >
   <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/aleroERP_zDPa1OC6H.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605340429"
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
                    </v-card>
                  </v-hover>
                </div> -->
              </v-layout>
                </v-layout>
             </v-sheet>
        </v-container>
     </v-layout>
    </v-flex>
        <!-------------------------- Tablet screens <= 768px  ------------------------------->
    <v-flex xs12 hidden-xs-only hidden-md-only hidden-xl-only hidden-lg-only>
     <v-layout column wrap mb-9>
        <main-header></main-header>
        <v-container class="my-9">
                 <v-sheet>
              <v-layout justify-center align-center>
                 <v-card flat>
                  <v-layout row justify-center align-center>
                      <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_1_qq5M0DNKe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610760849" alt="Paint Depo-1"></v-img>
                      <v-img  src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_2_atDGtv5hn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610759087" alt="Paint Depo-2"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_3_3flHRAJgZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610784109" alt="Paint Depo-3"></v-img>
                      <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_4_Rwu1EQmYB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656611486349" alt="Paint Depo-4"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_5_RwBnbig1m.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610770487" alt="Paint Depo-5"></v-img>
                      <v-img src=" " alt="Paint Depo-1"></v-img>
                  </v-layout>
                 </v-card>
              </v-layout>
             </v-sheet>
             <v-sheet>
                <v-layout mt-12>
                <v-layout justify-start>
                                     <!-- Alero  -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/alero">
   <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/Alero_4o1RGsjQM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605340376"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Previous</p>
                              <p class="headline black--text mt-n3">Alero</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div>
                </v-layout>
               <v-layout justify-end>

                 <!-- The Paint Depo  -->
                <!-- <div>
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/paintdepo">
                      <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/PaintDepo_qu1uQlInV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605341034"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Next</p>
                              <p class="headline black--text mt-n3">The Paint Depo</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Class & Sass -->
                <div>
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/classandsasskenya" >
   <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/Class___Sass_oCvuuCnrNO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605340534"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">Next</p>
                              <p class="headline black--text mt-n3">Class & Sass Kenya</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Ganana Developers -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/gananadevelopers" >
   <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/Ganana_fWWUlrXsDY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605340533"
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
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Muhara Salon  -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/muharabeauty" >
   <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/Muhara_bfPWg3Rtq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605340796"
                        alt="my experience in the industry">
                        <v-expand-transition>
                          <v-sheet color="#fff" v-if="hover" class="transition-fast-in-fast-out v-card--reveal"
                            style="height:100%;opacity:0.8">
                             <v-layout column justify-center>
                               <p class="overline black--text mt-18">beauty Salon and cosmetic agency</p>
                              <p class="headline black--text mt-n3">Muhara Hair & Beauty</p>
                            </v-layout>
                          </v-sheet>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div> -->
                <!-- Alero ERP Mobile Hybrid application -->
                <!-- <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/aleroerpapp" >
   <v-img width="370" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/title/aleroERP_zDPa1OC6H.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656605340429"
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
                    </v-card>
                  </v-hover>
                </div> -->
              </v-layout>
                </v-layout>
             </v-sheet>
        </v-container>
     </v-layout>
    </v-flex>
        <!-------------------------- Mobile screens < 425px --------------------------------->
    <v-flex xs12 hidden-sm-and-up hidden-md-and-up>
      <v-layout column wrap mb-9>
        <v-container class="my-9">
                 <v-sheet>
              <v-layout justify-center align-center>
                 <v-card flat>
                  <v-layout row justify-center align-center>
                      <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_1_qq5M0DNKe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610760849" alt="Paint Depo-1"></v-img>
                      <v-img  src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_2_atDGtv5hn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610759087" alt="Paint Depo-2"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_3_3flHRAJgZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610784109" alt="Paint Depo-3"></v-img>
                      <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_4_Rwu1EQmYB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656611486349" alt="Paint Depo-4"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_5_RwBnbig1m.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656610770487" alt="Paint Depo-5"></v-img>
                      <v-img src=" " alt="Paint Depo-1"></v-img>
                  </v-layout>
                 </v-card>
              </v-layout>
             </v-sheet>
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
      inner: 'The Paint Depo Limited'
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
