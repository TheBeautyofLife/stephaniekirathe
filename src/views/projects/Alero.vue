<template>
  <div>
    <!--------------------------   Larger screen >= 1440px ------------------------------>
    <v-flex xs12 hidden-md-and-down hidden-sm-and-down>
         <v-layout column wrap mb-9>
              <main-header style="background-color:#FDE5B5;z-index:1"></main-header>
        <v-container fluid class="my-n3">
             <v-sheet>
              <v-layout column justify-center align-center>
                 <v-card flat>
                  <v-layout row justify-center align-center>
                      <v-img src="../../assets/images/Portfolio/Alero/Alero - 1.png" alt="Alero-1"></v-img>
                      <v-img src="../../assets/images/Portfolio/Alero/Alero - 2.png" alt="Alero-2"></v-img>
                       <v-img src="../../assets/images/Portfolio/Alero/Alero - 3.png" alt="Alero-3"></v-img>
                      <v-img src="../../assets/images/Portfolio/Alero/Alero - 4.png" alt="Alero-4"></v-img>
                  </v-layout>
                 </v-card>
                 <v-card flat>
                  <v-layout column justify-center align-center>
                    <v-img src="../../assets/images/Portfolio/Alero/Alero - 5.png" alt="Alero-5"></v-img>
                   <v-sheet class="mt-14" >
                       <iframe src="https://player.vimeo.com/video/732640481?h=b3e456cd6b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1000" height="625" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Alero Corp. Website Design"></iframe>
                  </v-sheet>
                  </v-layout>
                 </v-card>
                 <v-card flat class="mt-16">
                  <v-layout column justify-center align-center>
                   <v-img  src="../../assets/images/Portfolio/Alero/Alero - 6.png" alt="Alero-6"></v-img>
                      <v-img src=" " alt="Alero-1"></v-img>
                  </v-layout>
                 </v-card>
              </v-layout>
             </v-sheet>
             <v-sheet>
               <v-layout row justify-end mt-12>
                 <!-- The Paint Depo  -->
                <div>
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/paintdepo">
                      <v-img width="370" src="../../assets/images/Portfolio/Cover/PaintDepo.png"
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
                </div>
              </v-layout>
             </v-sheet>
        </v-container>
     </v-layout>
    </v-flex>
        <!-------------------------- Larger screen >= 1024px  ------------------------------->
    <v-flex xs12 hidden-sm-and-down hidden-xl-only hidden-lg-only>
         <v-layout column wrap mb-9>
             <main-header style="z-index:1"></main-header>
        <v-container fluid class="my-n13">
              <v-sheet>
              <v-layout column justify-center align-center>
                 <v-card flat>
                  <v-layout row justify-center align-center>
                      <v-img src="../../assets/images/Portfolio/Alero/Alero - 1.png" alt="Alero-1"></v-img>
                      <v-img src="../../assets/images/Portfolio/Alero/Alero - 2.png" alt="Alero-2"></v-img>
                       <v-img class="my-n9" src="../../assets/images/Portfolio/Alero/Alero - 3.png" alt="Alero-3"></v-img>
                      <v-img src="../../assets/images/Portfolio/Alero/Alero - 4.png" alt="Alero-4"></v-img>
                  </v-layout>
                 </v-card>
                 <v-card flat>
                  <v-layout column justify-center align-center>
                    <v-img src="../../assets/images/Portfolio/Alero/Alero - 5.png" alt="Alero-5"></v-img>
                  </v-layout>
                 </v-card>
                 <v-card flat class="mt-18">
                  <v-layout fullscreen column justify-center align-center>
                   <v-img  src="../../assets/images/Portfolio/Alero/Alero - 6.png" alt="Alero-6"></v-img>
                      <v-img src=" " alt="Alero-1"></v-img>
                  </v-layout>
                 </v-card>
              </v-layout>
             </v-sheet>
             <v-sheet>
               <v-layout row justify-end mt-12>
                 <!-- The Paint Depo  -->
                <div>
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/paintdepo">
                      <v-img width="370" src="../../assets/images/Portfolio/Cover/PaintDepo.png"
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
                </div>
              </v-layout>
             </v-sheet>
        </v-container>
     </v-layout>
    </v-flex>
        <!-------------------------- Tablet screens <= 768px  ------------------------------->
    <v-flex xs12 hidden-xs-only hidden-md-only hidden-xl-only hidden-lg-only>
     <v-layout column wrap mb-9>
        <main-header style="z-index:1"></main-header>
        <v-container fluid class="my-n13">
                 <v-sheet>
              <v-layout justify-center align-center>
                 <v-card flat>
                  <v-layout row justify-center align-center>
                      <v-img src="../../assets/images/Portfolio/Alero/Alero - 1.png" alt="Alero-1"></v-img>
                      <v-img  src="../../assets/images/Portfolio/Alero/Alero - 2.png" alt="Alero-2"></v-img>
                       <v-img src="../../assets/images/Portfolio/Alero/Alero - 3.png" alt="Alero-3"></v-img>
                      <v-img src="../../assets/images/Portfolio/Alero/Alero - 4.png" alt="Alero-4"></v-img>
                       <v-img src="../../assets/images/Portfolio/Alero/Alero - 5.png" alt="Alero-5"></v-img>
                       <v-img  src="../../assets/images/Portfolio/Alero/Alero - 6.png" alt="Alero-6"></v-img>
                      <v-img src=" " alt="Alero-1"></v-img>
                  </v-layout>
                 </v-card>
              </v-layout>
             </v-sheet>
             <v-sheet>
               <v-layout row justify-end mt-12>
                 <!-- The Paint Depo  -->
                <div>
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/paintdepo">
                      <v-img width="370" src="../../assets/images/Portfolio/Cover/PaintDepo.png"
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
                </div>
              </v-layout>
             </v-sheet>
        </v-container>
     </v-layout>
    </v-flex>
        <!-------------------------- Mobile screens < 425px --------------------------------->
    <v-flex xs12 hidden-sm-and-up hidden-md-and-up>
      <v-layout column wrap mb-9>
        <main-header style="background-color:#FDE5B5;z-index:1"></main-header>
        <v-container fluid class="my-n7">
                 <v-sheet>
              <v-layout justify-center align-center>
                 <v-card flat>
                  <v-layout row justify-center align-center>
                      <v-img src="../../assets/images/Portfolio/Alero/Alero - 1.png" alt="Alero-1"></v-img>
                      <v-img  src="../../assets/images/Portfolio/Alero/Alero - 2.png" alt="Alero-2"></v-img>
                       <v-img src="../../assets/images/Portfolio/Alero/Alero - 3.png" alt="Alero-3"></v-img>
                      <v-img src="../../assets/images/Portfolio/Alero/Alero - 4.png" alt="Alero-4"></v-img>
                       <v-img src="../../assets/images/Portfolio/Alero/Alero - 5.png" alt="Alero-5"></v-img>
                       <v-img  src="../../assets/images/Portfolio/Alero/Alero - 6.png" alt="Alero-6"></v-img>
                      <v-img src=" " alt="Alero-1"></v-img>
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
import Header from '@/components/header/index.header.vue'
export default {
  components: {
    'main-header': Header
  },
  head: {
    title: {
      inner: 'Alero Corporation'
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
