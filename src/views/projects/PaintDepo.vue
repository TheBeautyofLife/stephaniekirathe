<template>
  <div>
    <!--------------------------   Larger screen >= 1440px ------------------------------>
    <v-flex xs12 hidden-md-and-down hidden-sm-and-down>
         <v-layout column wrap mb-9>
              <main-header style="background-color:#662583;z-index:1"></main-header>
        <v-container fluid class="my-n9">
             <v-sheet>
              <v-layout justify-center align-center>
                 <v-card flat>
                  <v-layout row justify-center align-center>
                      <v-img  src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_1_2b_AksCgK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032590816" alt="Paint Depo-1"></v-img>
                      <v-img  src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_2_1__iVduGQE0Ri.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032657237" alt="Paint Depo-2"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_3_TQ1ede6Fe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032594187" alt="Paint Depo-3"></v-img>
                      <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_4_1__SA4G32q5m.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671033381748" alt="Paint Depo-4"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_5_Lec5pxX8y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032596569" alt="Paint Depo-5"></v-img>
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
              </v-layout>
                </v-layout>
             </v-sheet>
        </v-container>
     </v-layout>
    </v-flex>
        <!-------------------------- Larger screen >= 1024px  ------------------------------->
    <v-flex xs12 hidden-sm-and-down hidden-xl-only hidden-lg-only>
         <v-layout column wrap mb-9>
             <main-header style="background-color:#662583;z-index:1"></main-header>
        <v-container fluid class="my-n13">
             <v-sheet>
              <v-layout justify-center align-center>
                 <v-card flat>
                  <v-layout row justify-center align-center>
                     <v-img  src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_1_2b_AksCgK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032590816" alt="Paint Depo-1"></v-img>
                      <v-img  src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_2_1__iVduGQE0Ri.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032657237" alt="Paint Depo-2"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_3_TQ1ede6Fe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032594187" alt="Paint Depo-3"></v-img>
                      <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_4_1__SA4G32q5m.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671033381748" alt="Paint Depo-4"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_5_Lec5pxX8y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032596569" alt="Paint Depo-5"></v-img>
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

              </v-layout>
                </v-layout>
             </v-sheet>
        </v-container>
     </v-layout>
    </v-flex>
        <!-------------------------- Tablet screens <= 768px  ------------------------------->
    <v-flex xs12 hidden-xs-only hidden-md-only hidden-xl-only hidden-lg-only>
     <v-layout column wrap mb-9>
        <main-header style="background-color:#662583;z-index:1"></main-header>
        <v-container fluid class="my-n13">
                 <v-sheet>
              <v-layout justify-center align-center>
                 <v-card flat>
                  <v-layout row justify-center align-center>
                      <v-img  src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_1_2b_AksCgK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032590816" alt="Paint Depo-1"></v-img>
                      <v-img  src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_2_1__iVduGQE0Ri.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032657237" alt="Paint Depo-2"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_3_TQ1ede6Fe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032594187" alt="Paint Depo-3"></v-img>
                      <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_4_1__SA4G32q5m.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671033381748" alt="Paint Depo-4"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_5_Lec5pxX8y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032596569" alt="Paint Depo-5"></v-img>
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
              </v-layout>
                </v-layout>
             </v-sheet>
        </v-container>
     </v-layout>
    </v-flex>
        <!-------------------------- Mobile screens < 425px --------------------------------->
    <v-flex xs12 hidden-sm-and-up hidden-md-and-up>
      <v-layout column wrap mb-9>
        <v-container fluid class="my-n7">
                 <v-sheet>
              <v-layout justify-center align-center>
                 <v-card flat>
                  <v-layout row justify-center align-center>
                      <v-img  src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_1_2b_AksCgK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032590816" alt="Paint Depo-1"></v-img>
                      <v-img  src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_2_1__iVduGQE0Ri.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032657237" alt="Paint Depo-2"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_3_TQ1ede6Fe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032594187" alt="Paint Depo-3"></v-img>
                      <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_4_1__SA4G32q5m.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671033381748" alt="Paint Depo-4"></v-img>
                       <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/PaintDepo/PaintDepo_-_5_Lec5pxX8y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671032596569" alt="Paint Depo-5"></v-img>
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
<style scoped>
.navlink,
.navlink-dark {
    color: #fff !important;
}
</style>
