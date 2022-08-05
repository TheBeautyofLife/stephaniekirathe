<template>
  <div>
    <!--------------------------   Larger screen >= 1440px ------------------------------>
    <v-flex xs12 hidden-md-and-down hidden-sm-and-down>
      <v-layout column wrap mb-9>
        <main-header style="z-index:1"></main-header>
        <div class="my-n19 mb-10">
          <v-sheet>
          <v-carousel
    cycle
    height="1000"
    hide-delimiters
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      style="width:100vw!important"
    >

    </v-carousel-item>
  </v-carousel>
          </v-sheet>
  <v-layout row justify-center align-center my-n15 pa-5>
    <v-flex ml-14>
      <v-card flat color="transparent" style="z-index:1">
         <p style="width:450px;color:#CD9E6F;font-weight: 400;font-size: 14px;">Stephanie is a <strong style="font-style: italic;"> multidisciplinary</strong> designer, with a focus on user experiences, and human centric designs. Her <strong style="font-style: italic;">passion</strong> is to improve peoples everyday interactions with digital products.</p>
      </v-card>
    </v-flex>
    <v-flex ml-12>
      <v-card flat color="transparent" style="z-index:1">
         <v-img class="bounce-top" width="50" src="../assets/icons/scroller.svg"></v-img>
      </v-card>
    </v-flex>
      <v-flex justify-end ml-16>
      <v-card flat color="transparent" style="z-index:1">
        <v-layout rowwrap>
          <v-btn to="/portfolio" class="mr-5" outlined rounded color="#CD9E6F">VIEW DESIGN WORK</v-btn>
          <!-- <v-btn outlined rounded color="#CD9E6F">VIEW DESIGN WORK</v-btn> -->
        </v-layout>
      </v-card>
      </v-flex>
    </v-layout>
        </div>
        <v-container style="width:1200px" class="my-20">
          <p class="main-title">I am a</p>
          <p class="main-desc">Out-of-the box thinker, Problem Solver, Creative, Workshop Facilitator, User Experience, User Interface Designer, Front-end Developer, Dev Ops Facilitator, Design Sprinter, Entrepreneur</p>
          <p class="main-title">Product Designer</p>
        </v-container>
        <v-container style="width:1200px" class="my-n8">
          <img width="1200px" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/cover_zYWNP3JLbm.svg" alt="">
          <div>
          <center class="mt-10">
              <v-divider class="mt-9" width="1200px"></v-divider>
            <div class="mt-17 quotes">
              <p class="title font-weight-medium font-italic">
                “Concentrating on one thing at a time may be the single most important factor in achieving flow.”
              </p>
              <p class="body-1 font-weight-regular">
                — A thoughtful quote by Hector Garcia Puigcerver
              </p>
            </div>
            <div id="career" class="mt-19">
              <v-layout column justify-start align-start mb-8>
                <div class="display-3 mb-4">Career Overview</div>
              </v-layout>
              <v-layout row wrap justify-space-around>
                <div class="ml-6 mr-5">
                  <img width="200px" src="../assets/images/experience.svg" alt="my experience in the industry">
                  <p class="mt-5 font-weight-medium">Over 6 years industry experience</p>
                </div>
                <div class="ml-6 mr-5">
                  <img width="200px" src="../assets/images/building.svg" alt="">
                  <p class="mt-5 font-weight-medium">Building products from the ground up!</p>
                </div>
                <div class="ml-6">
                  <img width="215px" src="../assets/images/smes.svg" alt="">
                  <p class="mt-5 font-weight-medium">Working with Start-ups to SMEs</p>
                </div>
              </v-layout>
            </div>
          </center>
          <!--  -->
          <center class="mt-10">
            <v-divider width="1200px"></v-divider>
            <div class="mt-17 quotes">
              <p class="title font-weight-medium font-italic">
                “Norman’s Law: The day the product team is announced, it is behind schedule and over its budget.”
              </p>
              <p class="body-1 font-weight-regular">
                — Donald A. Norman best description of product development
              </p>
            </div>
            <div id="career" class="mt-19">
              <v-layout column justify-start align-start mb-8>
                <div class="display-3 mb-4">Collaboration</div>
              </v-layout>
              <v-layout row justify-space-between wrap>
                <div class="ml-4 mr-5">
                  <v-card dark>
                    <img width="310" src="../assets/images/team-builder.svg" alt="my experience in the industry">
                  </v-card>
                  <p class="mt-5 title font-weight-medium">I'm a Team Builder</p>
                </div>
                <div class="ml-5 mr-5">
                  <v-card dark>
                    <img width="310" src="../assets/images/team-player.svg" alt="">
                  </v-card>
                  <p class="mt-5 title font-weight-medium">I'm a Team Player</p>
                </div>
                <div class="ml-4">
                  <v-card dark>
                    <img width="310" src="../assets/images/team-facilitator.svg" alt="">
                  </v-card>
                  <p class="mt-5 title font-weight-medium">I'm a Team Facilitator</p>
                </div>
              </v-layout>
            </div>
            <div id="career" class="mt-16">
              <v-layout column justify-start align-start mb-8>
                <div class="display-3 mb-4">Workflow</div>
              </v-layout>
              <v-layout row justify-space-between wrap>
                <div class="ml-4">
                  <v-card dark>
                    <img width="250" src="../assets/images/Collaboration.svg" alt="my experience in the industry">
                  </v-card>
                  <p class="mt-5 title font-weight-medium">Collaboration</p>
                </div>
                <div class="ml-4">
                  <v-card dark>
                    <img width="250" src="../assets/images/Workshops.svg" alt="">
                  </v-card>
                  <p class="mt-5 title font-weight-medium">Workshops</p>
                </div>
                <div class="ml-4">
                  <v-card dark>
                    <img width="250" src="../assets/images/Design Sprints.svg" alt="">
                  </v-card>
                  <p class="mt-5 title font-weight-medium">Design Sprints</p>
                </div>
                <div class="ml-4">
                  <v-card dark>
                    <img width="250" src="../assets/images/Measuring Success.svg" alt="">
                  </v-card>
                  <p class="mt-5 title font-weight-medium">Measuring Success</p>
                </div>
              </v-layout>
            </div>
          </center>
          <!--  -->
          <center class="mt-10">
            <v-divider width="1200px"></v-divider>
            <div class="mt-17 quotes">
              <p class="title font-weight-medium font-italic">
                “Norman’s Law: The day the product team is announced, it is behind schedule and over its budget.”
              </p>
              <p class="body-1 font-weight-regular">
                — Donald A. Norman best description of product development
              </p>
            </div>
            <div id="career" class="mt-19">
              <v-layout column justify-start align-start mb-4>
                <div class="display-3 mb-4">Continuously Learning</div>
                <p class="body-2 font-italic">Learning, as they say, is a never-ending process and is very crucial for people.</p>
              </v-layout>
              <v-layout row wrap justify-space-between>
                <div class="ml-4 mr-5">
                  <img width="250" src="../assets/images/Double dimond.svg" alt="my experience in the industry">
                  <div style="width:240px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">Double dimond</p>
                    <p class="body-3"> I rely on the Double Diamond framework to create effective product development & deployment processes. This framework explicitly provides designers and non-designers alike with a  process that facilitates innovation.</p>
                  </div>
                  </div>
                <div class="ml-5 mr-5">
                  <img width="250" src="../assets/images/UI Development.svg" alt="">
                  <div style="width:240px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">UI Development</p>
                    <p class="body-3"> I frequently do research and study UI guidelines of relevant operating systems and CSS frameworks. These guidelines help me to meet standards in digital products and websites. I'm also a Javascript hobbyists- and highly proficient in Vue.js, CSS3, Sass/Scss and HTML5 have really been the core in designing "codeable", data driven interfaces. I believe a good UI design is a combination of design skills and technical know-how.

                    </p>
                  </div>
                </div>
                <div class="ml-5 mr-5">
                  <img width="250" src="../assets/images/Value Ladder.svg" alt="">
                  <div style="width:240px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">Value Ladder</p>
                    <p class="body-3">
                      A value ladder is a lineup of offers that increase in price and value that meet people where they are on their journey to become a customer. The value ladder one of many business tools I used to design efficient interfaces that follows user stories.
                    </p>
                  </div>
                </div>
                <div class="ml-4">
                  <img width="250" src="../assets/images/Growth Funnels.svg" alt="">
                  <div style="width:240px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">Growth funnel</p>
                    <p class="body-3">
                     As a Designer, I rely on reliable information which tells them where to focus efforts in digital products.
One of the most reliable models for understanding customer behaviour is what’s known as the growth funnel.
                    </p>
                  </div>
                </div>
              </v-layout>
            </div>
            <!--  -->
            <div id="career" class="mt-19">
              <v-layout column justify-start align-start mb-4>
                <div class="display-3 mb-4">Tools</div>
                <p class="body-2 font-italic">UI/UX Design & Prototyping tools I use</p>
              </v-layout>
              <v-layout row wrap justify-space-between>
                <div class="ml-4 mr-5">
                  <img width="94.21" src="../assets/icons/Figma.svg" alt="my experience in the industry">
                  <p class="mt-5 title font-weight-medium">Figma</p>
                </div>
                <div class="ml-5 mr-5">
                  <img width="144.91" src="../assets/icons/Ai.svg" alt="">
                  <p class="mt-5 title font-weight-medium"> Adobe Illustrator CC</p>
                </div>
                <div class="ml-5 mr-5">
                  <img width="144.94" src="../assets/icons/XD.svg" alt="">
                  <p class="mt-5 title font-weight-medium"> Adobe XD</p>
                </div>
                <div class="ml-4">
                  <img width="102.93" src="../assets/icons/Principal.svg" alt="">
                  <p class="mt-5 title font-weight-medium">Principle App</p>
                </div>
              </v-layout>
            </div>
            <div id="career" class="mt-16">
              <v-layout column justify-start align-start mb-4>
                <p class="body-2 font-italic">Front-end Develpment tools & frameworks I use</p>
              </v-layout>
              <v-layout row wrap justify-space-between>
                <div class="ml-4 mr-5">
                  <img width="144.91" src="../assets/icons/cib_html5.svg" alt="html5">
                  <p class="mt-5 title font-weight-medium">HTML5</p>
                </div>
                <div class="ml-5 mr-5">
                  <img width="144.91" src="../assets/icons/cib_css3-shiled.svg" alt="">
                  <p class="mt-5 title font-weight-medium">CSS3</p>
                </div>
                <div class="ml-5 mr-5">
                  <img width="144.94" src="../assets/icons/cib_javascript.svg" alt="">
                  <p class="mt-5 title font-weight-medium"> Javascript</p>
                </div>
                <div class="ml-4">
                  <img width="144.91" src="../assets/icons/cib_vue-js.svg" alt="">
                  <p class="mt-5 title font-weight-medium">Vue.js</p>
                </div>

              </v-layout>
            </div>
          </center>
          <!--  -->
          <center class="mt-10">
            <v-divider width="1200px"></v-divider>
            <div id="career" class="mt-16">
              <v-layout column justify-start align-start mb-1>
                <div class="display-3 mb-4">Inspirations</div>
                <p class="body-1">My Top 5 Books</p>
              </v-layout>
              <v-layout row wrap justify-space-between>
                <div class="ma-2 ml-3 mr-3">
                  <img width="160" src="../assets/images/bible.png" alt="my experience in the industry">
                  <p class="mt-2 title font-weight-medium text-left">The Power of <br />Moments</p>
                </div>
                <div class="ma-2">
                  <img width="160" src="../assets/images/sprint.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left">Sprint</p>
                </div>
                <div class="ma-2">
                  <img width="160" src="../assets/images/hacking.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left">Hacking Growth</p>
                </div>
                <div class="ma-2">
                  <img width="160" src="../assets/images/hooked.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left">Hooked</p>
                </div>
                <div class="ma-2">
                  <img width="160" src="../assets/images/designoflife.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left"> The Design of<br /> Everyday<br /> Things</p>
                </div>
              </v-layout>
              <v-layout column justify-center align-center mt-19>
                <div class="social-text">Follow, Like & Subscribe </div>
                <v-layout row wrap mt-3>
                  <a href="https://web.facebook.com/stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
                    <img width="33" src="../assets/icons/socials/Facebook.svg"
                      alt="https://web.facebook.com/stephkirathe">
                  </a>
                  <a href="https://www.instagram.com/stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
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
                  <a href="https://www.behance.net/stephkirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="36" src="../assets/icons/socials/Behance.svg"
                    alt="https://www.behance.net/stephkirathe" class="mt-1">
                  </a>
                    <a href="https://www.figma.com/@stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
                    <img width="20" src="../assets/icons/socials/Figma.svg"
                      alt="https://www.figma.com/@stephkirathe">
                  </a>
                </v-layout>
              </v-layout>
            </div>
          </center>
          </div>
        </v-container>
      </v-layout>
      <div>
      <v-divider></v-divider>
      <v-footer class="transparent pa-3">
        <v-layout column wrap justify-center align-center>
       <div class="caption grey--text">
         COPYRIGHT   STEPHANIE KIRATHE 2020   |  <a href="http://www.alero.co.ke" target="_blank" rel="dofollow" class="caption grey--text">POWERED BY ALERO GROUP</a>
       </div>
       </v-layout>
      </v-footer>
      </div>
    </v-flex>
    <!-------------------------- Larger screen >= 1024px  ------------------------------->
    <v-flex xs12 hidden-sm-and-down hidden-xl-only hidden-lg-only>
      <v-layout column wrap mb-9>
        <main-header style="z-index:1"></main-header>
        <div class="my-n19 mb-10">
          <v-sheet>
          <v-carousel
    cycle
    height="1000"
    hide-delimiters
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      style="width:100vw!important"
    >

    </v-carousel-item>
  </v-carousel>
          </v-sheet>
  <v-layout row justify-center align-center my-n15 pa-5>
    <v-flex ml-7>
      <v-card flat color="transparent" style="z-index:1">
         <p style="width:340px;color:#CD9E6F;font-weight: 400;font-size: 14px;">Stephanie is a <strong style="font-style: italic;"> multidisciplinary</strong> designer, with a focus on user experiences, and human centric designs. Her <strong style="font-style: italic;">passion</strong> is to improve peoples everyday interactions with digital products.</p>
      </v-card>
    </v-flex>
    <v-flex ml-12>
      <v-card flat color="transparent" style="z-index:1">
         <v-img class="bounce-top" width="50" src="../assets/icons/scroller.svg"></v-img>
      </v-card>
    </v-flex>
      <v-flex justify-end ml-16>
      <v-card flat color="transparent" style="z-index:1">
        <v-layout rowwrap>
          <v-btn to="/portfolio" class="mr-5" outlined rounded color="#CD9E6F">VIEW DESIGN WORK</v-btn>
          <!-- <v-btn outlined rounded color="#CD9E6F">VIEW DESIGN WORK</v-btn> -->
        </v-layout>
      </v-card>
      </v-flex>
    </v-layout>
        </div>
        <v-container style="width:950px" class="my-17">
          <p class="main-title">I am a</p>
          <p class="main-desc">Out-of-the box thinker, Problem Solver, Creative, Workshop Facilitator, User Experience, User Interface Designer, Front-end Developer, Dev Ops Facilitator, Design Sprinter, Entrepreneur</p>
          <p class="main-title">Product Designer</p>
        </v-container>
        <v-container style="width:950px" class="my-n8">
          <img width="900px" src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/cover_zYWNP3JLbm.svg" alt="">
          <center class="mt-10">
            <v-divider width="950px"></v-divider>
            <!--  -->
            <div class="mt-17">
               <v-layout column justify-center align-center>
                <div class="display-3 mb-4">Portfolio</div>
              </v-layout>
              <v-layout row justify-center>
                 <!-- Alero  -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/alero" target="_blank">
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
                      <p class="body-2 font-weight-light black--text pb-5">UI/UX Design | Branding | Social Media Marketing</p>
                    </v-card>
                  </v-hover>
                </div>
                 <!-- The Paint Depo  -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/paintdepo" target="_blank">
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
                      <p class="body-2 font-weight-light black--text pb-5">UI/UX Design | Branding</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Class & Sass -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/classandsasskenya" target="_blank">
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
                      <p class="body-2 font-weight-light black--text pb-5">UI/UX Design</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Ganana Developers -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/gananadevelopers" target="_blank">
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
                      <p class="body-2 font-weight-light black--text pb-5">UI/UX Design | Branding | Social Media Marketing</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Muhara Salon  -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/muharabeauty" target="_blank">
   <v-img width="370" src="../assets/images/Portfolio/Cover/Muhara.png"
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
                      <p class="body-2 font-weight-light black--text pb-5">UI/UX Design | Branding</p>
                    </v-card>
                  </v-hover>
                </div>
                <!-- Alero ERP Mobile Hybrid application -->
                <div class="ml-4">
                  <v-hover v-slot="{ hover }">
                    <v-card flat color="#fff" to="/portfolio/aleroerpapp" target="_blank">
   <v-img width="370" src="../assets/images/Portfolio/Cover/aleroERP.png"
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
                      <p class="body-2 font-weight-light black--text pb-5">UI/UX Design</p>
                    </v-card>
                  </v-hover>
                </div>
              </v-layout>
              </div>
              <!--  -->
            <v-divider class="mt-9" width="950px"></v-divider>
            <div class="mt-17 quotes">
              <p class="title font-weight-medium font-italic">
                “Concentrating on one thing at a time may be the single most important factor in achieving flow.”
              </p>
              <p class="body-1 font-weight-regular">
                — A thoughtful quote by Hector Garcia Puigcerver
              </p>
            </div>
            <div id="career" class="mt-19">
              <v-layout column justify-center align-center mb-8>
                <div class="display-3 mb-4">Career Overview</div>
              </v-layout>
              <v-layout row wrap justify-space-around>
                <div class="ml-4 mr-5">
                  <img width="150px" src="../assets/images/experience.svg" alt="my experience in the industry">
                  <p class="mt-5 font-weight-medium">Over 6 years industry experience</p>
                </div>
                <div class="ml-4 mr-5">
                  <img width="150px" src="../assets/images/building.svg" alt="">
                  <p class="mt-5 font-weight-medium">Building products from the ground up!</p>
                </div>
                <div class="ml-4">
                  <img width="161px" src="../assets/images/smes.svg" alt="">
                  <p class="mt-5 font-weight-medium">Working with Start-ups to SMEs</p>
                </div>
              </v-layout>
            </div>
          </center>
          <!--  -->
          <center class="mt-10">
            <v-divider width="950px"></v-divider>
            <div class="mt-17 quotes">
              <p class="title font-weight-medium font-italic">
                “Norman’s Law: The day the product team is announced, it is behind schedule and over its budget.”
              </p>
              <p class="body-1 font-weight-regular">
                — Donald A. Norman best description of product development
              </p>
            </div>
             <div id="career" class="mt-19">
              <v-layout column justify-center align-center mb-4>
                <div class="display-3 mb-4">Continuously Learning</div>
              </v-layout>
              <v-layout row wrap justify-center ml-5 mt-n8 >
                <div class="ml-4 mr-5">
                  <img width="290" src="../assets/images/Double dimond.svg" alt="my experience in the industry">
                  <div style="width:240px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">Double dimond</p>
                    <p class="body-3"> I rely on the Double Diamond framework to create effective product development & deployment processes. This framework explicitly provides designers and non-designers alike with a  process that facilitates innovation.</p>
                  </div>
                  </div>
                <div class="ml-5 mr-5">
                  <img width="290" src="../assets/images/UI Development.svg" alt="">
                  <div style="width:240px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">UI Development</p>
                    <p class="body-3"> I frequently do research and study UI guidelines of relevant operating systems and CSS frameworks. These guidelines help me to meet standards in digital products and websites. I'm also a Javascript hobbyists- and highly proficient in Vue.js, CSS3, Sass/Scss and HTML5 have really been the core in designing "codeable", data driven interfaces. I believe a good UI design is a combination of design skills and technical know-how.

                    </p>
                  </div>
                </div>
                <div class="ml-5 mr-5">
                  <img width="290" src="../assets/images/Value Ladder.svg" alt="">
                  <div style="width:240px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">Value Ladder</p>
                    <p class="body-3">
                      A value ladder is a lineup of offers that increase in price and value that meet people where they are on their journey to become a customer. The value ladder one of many business tools I used to design efficient interfaces that follows user stories.
                    </p>
                  </div>
                </div>
                <div class="ml-4">
                  <img width="290" src="../assets/images/Growth Funnels.svg" alt="">
                  <div style="width:240px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">Growth funnel</p>
                    <p class="body-3">
                     As a Designer, I rely on reliable information which tells them where to focus efforts in digital products.
One of the most reliable models for understanding customer behaviour is what’s known as the growth funnel.
                    </p>
                  </div>
                </div>
              </v-layout>
            </div>
            <div id="career" class="mt-19">
              <v-layout column justify-center align-center mb-8>
                <div class="display-3 mb-4">Collaboration</div>
              </v-layout>
              <v-layout row wrap>
                <div class="ml-4 mr-5">
                  <v-card dark>
                    <img width="260" src="../assets/images/team-builder.svg" alt="my experience in the industry">
                  </v-card>
                  <p class="mt-5 font-weight-medium">I'm a Team Builder</p>
                </div>
                <div class="ml-5 mr-5">
                  <v-card dark>
                    <img width="260" src="../assets/images/team-player.svg" alt="">
                  </v-card>
                  <p class="mt-5 font-weight-medium">I'm a Team Player</p>
                </div>
                <div class="ml-4">
                  <v-card dark>
                    <img width="260" src="../assets/images/team-facilitator.svg" alt="">
                  </v-card>
                  <p class="mt-5 font-weight-medium">I'm a Team Facilitator</p>
                </div>
              </v-layout>
            </div>
            <div id="career" class="mt-16">
              <v-layout column justify-center align-center mb-8>
                <div class="display-3 mb-4">Workflow</div>
              </v-layout>
              <v-layout row wrap justify-center align-center>
                <div class="ml-4">
                  <v-card dark>
                    <img width="230" src="../assets/images/Collaboration.svg" alt="my experience in the industry">
                  </v-card>
                  <p class="mt-5 font-weight-medium">Collaboration</p>
                </div>
                <div class="ml-4">
                  <v-card dark>
                    <img width="230" src="../assets/images/Workshops.svg" alt="">
                  </v-card>
                  <p class="mt-5 font-weight-medium">Workshops</p>
                </div>
                <div class="ml-4">
                  <v-card dark>
                    <img width="230" src="../assets/images/Design Sprints.svg" alt="">
                  </v-card>
                  <p class="mt-5 font-weight-medium">Design Sprints</p>
                </div>
                <div class="ml-4">
                  <v-card dark>
                    <img width="230" src="../assets/images/Measuring Success.svg" alt="">
                  </v-card>
                  <p class="mt-5 font-weight-medium">Measuring Success</p>
                </div>
              </v-layout>
            </div>
          </center>
          <!--  -->
          <center class="mt-10">
            <v-divider width="950px"></v-divider>
            <div class="mt-17 quotes">
              <p class="title font-weight-medium font-italic">
                “Norman’s Law: The day the product team is announced, it is behind schedule and over its budget.”
              </p>
              <p class="body-1 font-weight-regular">
                — Donald A. Norman best description of product development
              </p>
            </div>
            <div id="career" class="mt-19">
              <v-layout column justify-center align-center mb-4>
                <div class="display-3 mb-4">Tools</div>
                <p class="body-2">UI/UX Design & Prototyping tools I use</p>
              </v-layout>
              <v-layout row wrap justify-center>
                <div class="mr-12">
                  <img width="80" src="../assets/icons/Figma.svg" alt="my experience in the industry">
                  <p class="mt-5 font-weight-medium">Figma</p>
                </div>
                <div class="mr-12">
                  <img width="130" src="../assets/icons/Ai.svg" alt="">
                  <p class="mt-5 font-weight-medium"> Adobe Illustrator CC</p>
                </div>
                <div class="mr-12">
                  <img width="130" src="../assets/icons/XD.svg" alt="">
                  <p class="mt-5 font-weight-medium"> Adobe XD</p>
                </div>
                <div class="">
                  <img width="90" src="../assets/icons/Principal.svg" alt="">
                  <p class="mt-5 font-weight-medium">Principle App</p>
                </div>
              </v-layout>
            </div>
            <div id="career" class="mt-16">
              <v-layout column justify-center align-center mb-4>
                <p class="body-2">Front-end Develpment tools & frameworks I use</p>
              </v-layout>
              <v-layout row wrap justify-center align-center>
                <div class="mr-5">
                  <img width="130" src="../assets/icons/cib_html5.svg" alt="html5">
                  <p class="mt-5 font-weight-medium">HTML5</p>
                </div>
                <div class="ml-5 mr-5">
                  <img width="130" src="../assets/icons/cib_css3-shiled.svg" alt="">
                  <p class="mt-5 font-weight-medium">CSS3</p>
                </div>
                <div class="ml-5 mr-5">
                  <img width="130" src="../assets/icons/cib_javascript.svg" alt="">
                  <p class="mt-5 font-weight-medium"> Javascript</p>
                </div>
                <div class="ml-4">
                  <img width="130" src="../assets/icons/cib_vue-js.svg" alt="">
                  <p class="mt-5 font-weight-medium">Vue.js</p>
                </div>
              </v-layout>
            </div>
          </center>
          <!--  -->
          <center class="mt-10">
            <v-divider width="950px"></v-divider>
            <div id="career" class="mt-16">
              <v-layout column justify-center align-center mb-1>
                <div class="display-3 mb-4">Inspirations</div>
                <p class="body-1">My Top 5 Books</p>
              </v-layout>
              <v-layout row wrap justify-center align-center>
                <div class="ma-5">
                  <img width="210" src="../assets/images/bible.png" alt="my experience in the industry">
                  <p class="mt-2 title font-weight-medium text-left">The Power of Moments</p>
                </div>
                <div class="ma-5">
                  <img width="210" src="../assets/images/sprint.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left">Sprint</p>
                </div>
                <div class="ma-5">
                  <img width="210" src="../assets/images/hacking.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left">Hacking Growth</p>
                </div>
                <div class="ma-5">
                  <img width="210" src="../assets/images/hooked.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left">Hooked</p>
                </div>
                <div class="ma-5">
                  <img width="210" src="../assets/images/designoflife.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left"> The Design of Everyday Things</p>
                </div>
              </v-layout>
              <v-layout column justify-center align-center mt-19>
                <div class="social-text">Follow, Like & Subscribe </div>
                <v-layout row wrap mt-3>
                  <a href="https://web.facebook.com/stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
                    <img width="33" src="../assets/icons/socials/Facebook.svg"
                      alt="https://web.facebook.com/stephkirathe">
                  </a>
                  <a href="https://www.instagram.com/stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
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
                  <a href="https://www.behance.net/stephkirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="36" src="../assets/icons/socials/Behance.svg"
                    alt="https://www.behance.net/stephkirathe" class="mt-1">
                  </a>
                    <a href="https://www.figma.com/@stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
                    <img width="20" src="../assets/icons/socials/Figma.svg"
                      alt="https://www.figma.com/@stephkirathe">
                  </a>
                </v-layout>
              </v-layout>
            </div>
          </center>
        </v-container>
      </v-layout>
       <div>
      <v-divider></v-divider>
      <v-footer class="transparent pa-3">
        <v-layout column wrap justify-center align-center>
       <div class="caption grey--text">
         COPYRIGHT   STEPHANIE KIRATHE 2020   |  <a href="http://www.alero.co.ke" target="_blank" rel="dofollow" class="caption grey--text">POWERED BY ALERO GROUP</a>
       </div>
       </v-layout>
      </v-footer>
      </div>
    </v-flex>
    <!-------------------------- Tablet screens <= 768px  ------------------------------->
    <v-flex xs12 hidden-xs-only hidden-md-only hidden-xl-only hidden-lg-only>
     <v-layout column wrap mb-9>
        <main-header class="pr-1"></main-header>
        <v-container class="my-17 pl-5 pr-5">
          <p class="main-title">I am a</p>
          <p class="main-desc-mobile">Out-of-the box thinker, Problem Solver, Creative, Workshop Facilitator, User Experience, User Interface Designer, Front-end Developer, Dev Ops Facilitator, Design Sprinter, Entrepreneur</p>
          <p class="main-title">Product Designer</p>
          <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/mobile-cover_Rdh5BedQN.svg" class="mt-10" contain alt=""/>
        </v-container>
        <v-container class="my-n10">
          <center>
            <v-divider width="950px"></v-divider>
            <div class="mt-17">
              <p class="title font-weight-medium font-italic">
                “Concentrating on one thing at a time may be the single <br/> most important factor in achieving flow.”
              </p>
              <p class="body-1 font-weight-regular">
                — A thoughtful quote by Hector Garcia Puigcerver
              </p>
            </div>
            <div id="career" class="mt-17">
              <v-layout column justify-center align-center mb-8>
                <div class="display-2 font-weight-light mb-4">Career Overview</div>
              </v-layout>
              <v-layout row justify-center>
                <div class="ml-8 mr-8">
                  <img width="220px" src="../assets/images/experience.svg" alt="my experience in the industry">
                  <p class="mt-5 font-weight-medium">Over 6 years industry experience</p>
                </div>
                <div class="ml-8 mr-8">
                  <img width="210px" src="../assets/images/building.svg" alt="">
                  <p class="mt-5 font-weight-medium">Building products from the ground up!</p>
                </div>
                <div class="ml-8 mr-8">
                  <img width="220px" src="../assets/images/smes.svg" alt="">
                  <p class="mt-5 font-weight-medium">Working with Start-ups to SMEs</p>
                </div>
              </v-layout>
            </div>
          </center>
          <!--  -->
          <center>
            <v-divider width="950px"></v-divider>
            <div class="mt-17">
              <p class="title font-weight-medium font-italic">
                “Norman’s Law: The day the product team is announced, <br/> it is behind schedule and over its budget.”
              </p>
              <p class="body-1 font-weight-regular">
                — Donald A. Norman best description of product development
              </p>
            </div>
             <div id="career" class="mt-19">
              <v-layout column justify-center align-center mb-4>
                <div class="display-3 mb-4">Continuously Learning</div>
              </v-layout>
              <v-layout row wrap justify-center ml-5 mt-n8 >
                <div class="ml-6 mr-6">
                  <img width="270" src="../assets/images/Double dimond.svg" alt="my experience in the industry">
                  <div style="width:250px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">Double dimond</p>
                    <p class="body-3"> I rely on the Double Diamond framework to create effective product development & deployment processes. This framework explicitly provides designers and non-designers alike with a  process that facilitates innovation.</p>
                  </div>
                  </div>
                <div class="ml-6 mr-6">
                  <img width="270" src="../assets/images/UI Development.svg" alt="">
                  <div style="width:250px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">UI Development</p>
                    <p class="body-3"> I frequently do research and study UI guidelines of relevant operating systems and CSS frameworks. These guidelines help me to meet standards in digital products and websites. I'm also a Javascript hobbyists- and highly proficient in Vue.js, CSS3, Sass/Scss and HTML5 have really been the core in designing "codeable", data driven interfaces. I believe a good UI design is a combination of design skills and technical know-how.

                    </p>
                  </div>
                </div>
                <div class="ml-6 mr-6">
                  <img width="270" src="../assets/images/Value Ladder.svg" alt="">
                  <div style="width:250px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">Value Ladder</p>
                    <p class="body-3">
                      A value ladder is a lineup of offers that increase in price and value that meet people where they are on their journey to become a customer. The value ladder one of many business tools I used to design efficient interfaces that follows user stories.
                    </p>
                  </div>
                </div>
                <div class="ml-6">
                  <img width="270" src="../assets/images/Growth Funnels.svg" alt="">
                  <div style="width:250px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">Growth funnel</p>
                    <p class="body-3">
                     As a Designer, I rely on reliable information which tells them where to focus efforts in digital products.
One of the most reliable models for understanding customer behaviour is what’s known as the growth funnel.
                    </p>
                  </div>
                </div>
              </v-layout>
            </div>
            <div id="career" class="mt-17">
              <v-layout column justify-center align-center mb-8>
                <div class="display-3 mb-4">Collaboration</div>
              </v-layout>
              <v-layout row justify-center align-center>
                <div class="mt-4 mr-5">
                  <v-card dark>
                    <img width="320" src="../assets/images/team-builder.svg" alt="my experience in the industry">
                  </v-card>
                  <p class="mt-5 font-weight-medium">I'm a Team Builder</p>
                </div>
                <div class="mt-4">
                  <v-card dark>
                    <img width="320" src="../assets/images/team-player.svg" alt="">
                  </v-card>
                  <p class="mt-5 font-weight-medium">I'm a Team Player</p>
                </div>
                <div class="mt-4">
                  <v-card dark>
                    <img width="320" src="../assets/images/team-facilitator.svg" alt="">
                  </v-card>
                  <p class="mt-5 font-weight-medium">I'm a Team Facilitator</p>
                </div>
              </v-layout>
            </div>
            <div id="career" class="mt-16">
              <v-layout column justify-center align-center mb-8>
                <div class="display-3 mb-4">Workflow</div>
              </v-layout>
              <v-layout row wrap justify-center align-center>
                <div class="ml-4">
                  <v-card dark>
                    <img width="230" src="../assets/images/Collaboration.svg" alt="my experience in the industry">
                  </v-card>
                  <p class="mt-5 font-weight-medium">Collaboration</p>
                </div>
                <div class="ml-4">
                  <v-card dark>
                    <img width="230" src="../assets/images/Workshops.svg" alt="">
                  </v-card>
                  <p class="mt-5 font-weight-medium">Workshops</p>
                </div>
                <div class="ml-4">
                  <v-card dark>
                    <img width="230" src="../assets/images/Design Sprints.svg" alt="">
                  </v-card>
                  <p class="mt-5 font-weight-medium">Design Sprints</p>
                </div>
                <div class="ml-4">
                  <v-card dark>
                    <img width="230" src="../assets/images/Measuring Success.svg" alt="">
                  </v-card>
                  <p class="mt-5 font-weight-medium">Measuring Success</p>
                </div>
              </v-layout>
            </div>
          </center>
          <!--  -->
          <center>
            <v-divider width="950px"></v-divider>
            <div class="mt-17">
              <p class="title font-weight-medium font-italic">
                “May the favor of the Lord our God rest on us; establish the <br/> work of our hands for us- yes, establish the work of our hands.”
              </p>
              <p class="body-1 font-weight-regular">
                — Psalm 90:17, Holy Bible
              </p>
            </div>
            <div id="career" class="mt-19">
              <v-layout column justify-center align-center mb-4>
                <div class="display-3 mb-4">Software & Tools</div>
                <p class="body-2">UI/UX Design & Prototyping tools I use</p>
              </v-layout>
              <v-layout row justify-center align-center>
                <div class="ma-5">
                  <img width="90" src="../assets/icons/Figma.svg" alt="my experience in the industry">
                  <p class="mt-5 font-weight-medium">Figma</p>
                </div>
                <div class="ma-5">
                  <img width="120" src="../assets/icons/Ai.svg" alt="">
                  <p class="mt-5 font-weight-medium"> Adobe Illustrator CC</p>
                </div>
                <div class="ma-5">
                  <img width="120" src="../assets/icons/XD.svg" alt="">
                  <p class="mt-5 font-weight-medium"> Adobe XD</p>
                </div>
                <div class="ma-5">
                  <img width="90" src="../assets/icons/Principal.svg" alt="">
                  <p class="mt-5 font-weight-medium">Principle App</p>
                </div>
              </v-layout>
            </div>
            <div id="career" class="mt-16">
              <v-layout column justify-center align-center mb-4>
                <p class="body-2">Front-end Develpment tools & frameworks I use</p>
              </v-layout>
              <v-layout row wrap justify-center align-center>
                <div class="ma-4">
                  <img width="120" src="../assets/icons/cib_html5.svg" alt="html5">
                  <p class="mt-5 font-weight-medium">HTML5</p>
                </div>
                <div class="ma-4">
                  <img width="120" src="../assets/icons/cib_css3-shiled.svg" alt="">
                  <p class="mt-5 font-weight-medium">CSS3</p>
                </div>
                <div class="ma-4">
                  <img width="120" src="../assets/icons/cib_javascript.svg" alt="">
                  <p class="mt-5 font-weight-medium"> Javascript</p>
                </div>
                <div class="ml-4">
                  <img width="120" src="../assets/icons/cib_vue-js.svg" alt="">
                  <p class="mt-5 font-weight-medium">Vue.js</p>
                </div>
              </v-layout>
            </div>
          </center>
          <!--  -->
          <center class="mt-10">
            <v-divider width="950px"></v-divider>
            <div id="career" class="mt-16">
              <v-layout column justify-center align-center mb-1>
                <div class="display-3 mb-4">Inspirations</div>
                <p class="body-1">My Top 5 Books</p>
              </v-layout>
              <v-layout row wrap justify-center align-center>
                <div class="ma-5">
                  <img width="210" src="../assets/images/bible.png" alt="my experience in the industry">
                  <p class="mt-2 title font-weight-medium text-left">The Power of Moments</p>
                </div>
                <div class="ma-5">
                  <img width="210" src="../assets/images/sprint.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left">Sprint</p>
                </div>
                <div class="ma-5">
                  <img width="210" src="../assets/images/hacking.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left">Hacking Growth</p>
                </div>
                <div class="ma-5">
                  <img width="210" src="../assets/images/hooked.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left">Hooked</p>
                </div>
                <div class="ma-5">
                  <img width="210" src="../assets/images/designoflife.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left"> The Design of Everyday Things</p>
                </div>
              </v-layout>
              <v-layout column justify-center align-center mt-19>
                <div class="social-text">Follow, Like & Subscribe </div>
                <v-layout row wrap mt-3>
                  <a href="https://web.facebook.com/stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
                    <img width="33" src="../assets/icons/socials/Facebook.svg"
                      alt="https://web.facebook.com/stephkirathe">
                  </a>
                  <a href="https://www.instagram.com/stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
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
                  <a href="https://www.behance.net/stephkirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="36" src="../assets/icons/socials/Behance.svg"
                    alt="https://www.behance.net/stephkirathe" class="mt-1">
                  </a>
                    <a href="https://www.figma.com/@stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
                    <img width="20" src="../assets/icons/socials/Figma.svg"
                      alt="https://www.figma.com/@stephkirathe">
                  </a>
                </v-layout>
              </v-layout>
            </div>
          </center>
        </v-container>
      </v-layout>
       <div>
      <v-divider></v-divider>
      <v-footer class="transparent pa-3">
        <v-layout column wrap justify-center align-center>
       <div class="caption grey--text">
         COPYRIGHT   STEPHANIE KIRATHE 2020   |  <a href="http://www.alero.co.ke" target="_blank" rel="dofollow" class="caption grey--text">POWERED BY ALERO GROUP</a>
       </div>
       </v-layout>
      </v-footer>
      </div>
    </v-flex>
    <!-------------------------- Mobile screens < 425px --------------------------------->
    <v-flex xs12 hidden-sm-and-up hidden-md-and-up>
      <v-layout column wrap mb-9>
        <main-header class="pr-1"></main-header>
        <v-container class="my-17 pl-5 pr-5">
          <p class="main-title">I am a</p>
          <p class="main-desc-mobile">Out-of-the box thinker, Problem Solver, Creative, Workshop Facilitator, User Experience, User Interface Designer, Front-end Developer, Dev Ops Facilitator, Design Sprinter, Entrepreneur</p>
          <p class="main-title">Product Designer</p>
          <v-img src="https://ik.imagekit.io/qpt2onjfe/StephanieKirathe/mobile-cover_Rdh5BedQN.svg" class="mt-10" contain alt=""/>
        </v-container>
        <v-container class="my-n10">
          <center>
            <v-divider width="950px"></v-divider>
            <div class="mt-17">
              <p class="title font-weight-medium font-italic">
                “Concentrating on one thing at a time may be the single <br/> most important factor in achieving flow.”
              </p>
              <p class="body-1 font-weight-regular">
                — A thoughtful quote by Hector Garcia Puigcerver
              </p>
            </div>
            <div id="career" class="mt-17">
              <v-layout column justify-center align-center mb-8>
                <div class="display-2 font-weight-light mb-4">Career Overview</div>
              </v-layout>
              <v-layout column wrap justify-center>
                <div>
                  <img width="220px" src="../assets/images/experience.svg" alt="my experience in the industry">
                  <p class="mt-5 font-weight-medium">Over 6 years industry experience</p>
                </div>
                <div class="mt-12 mr-5">
                  <img width="220px" src="../assets/images/building.svg" alt="">
                  <p class="mt-5 font-weight-medium">Building products from the ground up!</p>
                </div>
                <div class="mt-12">
                  <img width="220px" src="../assets/images/smes.svg" alt="">
                  <p class="mt-5 font-weight-medium">Working with Start-ups to SMEs</p>
                </div>
              </v-layout>
            </div>
          </center>
          <!--  -->
          <center>
            <v-divider width="950px"></v-divider>
            <div class="mt-17">
              <p class="title font-weight-medium font-italic">
                “Norman’s Law: The day the product team is announced, <br/> it is behind schedule and over its budget.”
              </p>
              <p class="body-1 font-weight-regular">
                — Donald A. Norman best description of product development
              </p>
            </div>
            <div id="career" class="mt-19">
              <v-layout column justify-center align-center mb-4>
                <div class="display-3 mb-4">Continuously Learning</div>
              </v-layout>
              <v-layout row wrap justify-center align-center mt-n8 >
                <div class="ml-6 mr-6">
                  <img width="270" src="../assets/images/Double dimond.svg" alt="the double diamond">
                  <div style="width:250px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">Double dimond</p>
                    <p class="body-3"> I rely on the Double Diamond framework to create effective product development & deployment processes. This framework explicitly provides designers and non-designers alike with a  process that facilitates innovation.</p>
                  </div>
                  </div>
                <div class="ml-6 mr-6">
                  <img width="270" src="../assets/images/UI Development.svg" alt="UI development - Vue.js development, JS, HTML & CSS">
                  <div style="width:250px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">UI Development</p>
                    <p class="body-3"> I frequently do research and study UI guidelines of relevant operating systems and CSS frameworks. These guidelines help me to meet standards in digital products and websites. I'm also a Javascript hobbyists- and highly proficient in Vue.js, CSS3, Sass/Scss and HTML5 have really been the core in designing "codeable", data driven interfaces. I believe a good UI design is a combination of design skills and technical know-how.

                    </p>
                  </div>
                </div>
                <div class="ml-6 mr-6">
                  <img width="270" src="../assets/images/Value Ladder.svg" alt="">
                  <div style="width:250px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">Value Ladder</p>
                    <p class="body-3">
                      A value ladder is a lineup of offers that increase in price and value that meet people where they are on their journey to become a customer. The value ladder one of many business tools I used to design efficient interfaces that follows user stories.
                    </p>
                  </div>
                </div>
                <div class="ml-6">
                  <img width="270" src="../assets/images/Growth Funnels.svg" alt="">
                  <div style="width:250px!important" class="text-left">
                    <p class="mt-n1 title font-weight-medium">Growth funnel</p>
                    <p class="body-3">
                     As a Designer, I rely on reliable information which tells them where to focus efforts in digital products.
One of the most reliable models for understanding customer behaviour is what’s known as the growth funnel.
                    </p>
                  </div>
                </div>
              </v-layout>
            </div>
            <div id="career" class="mt-17">
              <v-layout column justify-center align-center mb-8>
                <div class="display-2 font-weight-light mb-4">Collaboration</div>
              </v-layout>
              <v-layout column justify-center align-center>
                <div class="mt-4">
                  <v-card dark>
                    <img width="250" src="../assets/images/team-builder.svg" alt="my experience in the industry">
                  </v-card>
                  <p class="mt-5 font-weight-medium">I'm a Team Builder</p>
                </div>
                <div class="mt-4">
                  <v-card dark>
                    <img width="250" src="../assets/images/team-player.svg" alt="">
                  </v-card>
                  <p class="mt-5 font-weight-medium">I'm a Team Player</p>
                </div>
                <div class="mt-4">
                  <v-card dark>
                    <img width="250" src="../assets/images/team-facilitator.svg" alt="">
                  </v-card>
                  <p class="mt-5 font-weight-medium">I'm a Team Facilitator</p>
                </div>
              </v-layout>
            </div>
            <div id="career" class="mt-16">
              <v-layout column justify-center align-center mb-8>
                <div class="display-2 font-weight-light mb-4">Workflow</div>
              </v-layout>
              <v-layout column wrap justify-center align-center>
                <div class="ml-4">
                  <v-card dark>
                    <img width="250" src="../assets/images/Collaboration.svg" alt="my experience in the industry">
                  </v-card>
                  <p class="mt-5 font-weight-medium">Collaboration</p>
                </div>
                <div class="ml-4">
                  <v-card dark>
                    <img width="250" src="../assets/images/Workshops.svg" alt="">
                  </v-card>
                  <p class="mt-5 font-weight-medium">Workshops</p>
                </div>
                <div class="ml-4">
                  <v-card dark>
                    <img width="250" src="../assets/images/Design Sprints.svg" alt="">
                  </v-card>
                  <p class="mt-5 font-weight-medium">Design Sprints</p>
                </div>
                <div class="ml-4">
                  <v-card dark>
                    <img width="250" src="../assets/images/Measuring Success.svg" alt="">
                  </v-card>
                  <p class="mt-5 font-weight-medium">Measuring Success</p>
                </div>
              </v-layout>
            </div>
          </center>
          <!--  -->
          <center>
            <v-divider width="950px"></v-divider>
            <div class="mt-17">
              <p class="title font-weight-medium font-italic">
                “May the favor of the Lord our God  <br/>rest on us;establish the  work of our hands for us- yes, establish the work of our hands.”
              </p>
              <p class="body-1 font-weight-regular">
                — Psalm 90:17, Holy Bible
              </p>
            </div>
            <div id="career" class="mt-17">
              <v-layout column justify-center align-center mb-4>
                <div class="display-2 font-weight-light mb-4">Software & Tools</div>
                <p class="body-2">UI/UX Design & Prototyping tools I use</p>
              </v-layout>
              <v-layout column justify-center align-center>
                <div class="ma-4">
                  <img width="120" src="../assets/icons/Figma.svg" alt="my experience in the industry">
                  <p class="mt-5 font-weight-medium">Figma</p>
                </div>
                <div class="ma-4">
                  <img width="170" src="../assets/icons/Ai.svg" alt="">
                  <p class="mt-5 font-weight-medium"> Adobe Illustrator CC</p>
                </div>
                <div class="ma-4">
                  <img width="170" src="../assets/icons/XD.svg" alt="">
                  <p class="mt-5 font-weight-medium"> Adobe XD</p>
                </div>
                <div class="ma-4">
                  <img width="120" src="../assets/icons/Principal.svg" alt="">
                  <p class="mt-5 font-weight-medium">Principle App</p>
                </div>
              </v-layout>
            </div>
            <div id="career" class="mt-16">
              <v-layout column justify-center align-center mb-4>
                <p class="body-2">Front-end Develpment tools & frameworks I use</p>
              </v-layout>
              <v-layout column wrap justify-center align-center>
                <div class="ma-4">
                  <img width="180" src="../assets/icons/cib_html5.svg" alt="html5">
                  <p class="mt-5 font-weight-medium">HTML5</p>
                </div>
                <div class="ma-4">
                  <img width="160" src="../assets/icons/cib_css3-shiled.svg" alt="">
                  <p class="mt-5 font-weight-medium">CSS3</p>
                </div>
                <div class="ma-4">
                  <img width="160" src="../assets/icons/cib_javascript.svg" alt="">
                  <p class="mt-5 font-weight-medium"> Javascript</p>
                </div>
                <div class="ml-4">
                  <img width="160" src="../assets/icons/cib_vue-js.svg" alt="">
                  <p class="mt-5 font-weight-medium">Vue.js</p>
                </div>
                <div class="ma-4">
                  <img width="160" src="../assets/icons/cib_node-js.svg" alt="">
                  <p class="mt-5 font-weight-medium">Node.js</p>
                </div>
              </v-layout>
            </div>
          </center>
          <!--  -->
          <center class="mt-10">
            <v-divider width="950px"></v-divider>
            <div id="career" class="mt-16">
              <v-layout column justify-center align-center mb-1>
                <div class="display-3 mb-4">Inspirations</div>
                <p class="body-1">My Top 5 Books</p>
              </v-layout>
              <v-layout row wrap justify-center align-center>
                <div class="ma-5">
                  <img width="210" src="../assets/images/bible.png" alt="my experience in the industry">
                  <p class="mt-2 title font-weight-medium text-left">The Power of Moments</p>
                </div>
                <div class="ma-5">
                  <img width="210" src="../assets/images/sprint.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left">Sprint</p>
                </div>
                <div class="ma-5">
                  <img width="210" src="../assets/images/hacking.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left">Hacking Growth</p>
                </div>
                <div class="ma-5">
                  <img width="210" src="../assets/images/hooked.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left">Hooked</p>
                </div>
                <div class="ma-5">
                  <img width="210" src="../assets/images/designoflife.png" alt="">
                  <p class="mt-2 title font-weight-medium text-left"> The Design of Everyday Things</p>
                </div>
              </v-layout>
              <v-layout column justify-center align-center mt-19>
                <div class="social-text">Follow, Like & Subscribe </div>
                <v-layout row wrap mt-3>
                  <a href="https://web.facebook.com/stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
                    <img width="33" src="../assets/icons/socials/Facebook.svg"
                      alt="https://web.facebook.com/stephkirathe">
                  </a>
                  <a href="https://www.instagram.com/stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
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
                  <a href="https://www.behance.net/stephkirathe" target="_blank" rel="noopener noreferrer"
                  class="ma-3">
                  <img width="36" src="../assets/icons/socials/Behance.svg"
                    alt="https://www.behance.net/stephkirathe" class="mt-1">
                  </a>
                    <a href="https://www.figma.com/@stephkirathe" target="_blank" rel="noopener noreferrer"
                    class="ma-3">
                    <img width="20" src="../assets/icons/socials/Figma.svg"
                      alt="https://www.figma.com/@stephkirathe">
                  </a>
                </v-layout>
              </v-layout>
            </div>
          </center>
        </v-container>
      </v-layout>
       <div>
      <v-divider></v-divider>
      <v-footer class="transparent pa-3">
        <v-layout column wrap justify-center align-center>
       <div class="caption grey--text">
         COPYRIGHT   STEPHANIE KIRATHE 2020   |  <a href="http://www.alero.co.ke" target="_blank" rel="dofollow" class="caption grey--text">POWERED BY ALERO CORPORATION</a>
       </div>
       </v-layout>
      </v-footer>
      </div>
    </v-flex>
    <!-- Messenger Chat plugin Code -->
    <div id="fb-root"></div>

    <!-- Your Chat plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

  </div>
</template>
<script>
import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'
import Header from '@/components/header/index.header'

Vue.use(VueFbCustomerChat, {
  page_id: 1519000258183530, //  change 'null' to your Facebook Page ID,
  theme_color: '#CD9E6F', // theme color in HEX
  locale: 'en_US' // default 'en_US'
})

export default {
  components: {
    'main-header': Header
  },
  head: {
    title: {
      inner: 'About me'
    },
    meta: [{
      name: 'application-name',
      content: 'I am an out-of-the box thinkner, problem solver, creative, workshop facilitation, user experience, user interface, front-end developer, dev ops facilitator, design sprinter, enterprenuer and product designer'
    },
    {
      name: 'description',
      content: 'I am an out-of-the box thinkner, problem solver, creative, workshop facilitation, user experience, user interface, front-end developer, dev ops facilitator, design sprinter, enterprenuer and product designer',
      id: 'desc'
    }, // id to replace intead of create element
    // ...
    // Google+ / Schema.org
    {
      itemprop: 'name',
      content: 'Welcome to Stephanie\'s Kirathe official website'
    },
    {
      itemprop: 'description',
      content: 'I am an out-of-the box thinkner, problem solver, creative, workshop facilitation, user experience, user interface, front-end developer, dev ops facilitator, design sprinter, enterprenuer and product designer'
    },
    {
      property: 'og:title',
      content: 'Welcome to Stephanie\'s Kirathe official website'
    }
    ]
  },
  data () {
    return {
      items: [
        {
          src: require('../assets/images/Portfolio/Main/Alero - 1.png')
        },
        {
          src: require('../assets/images/Portfolio/Main/PaintDepo - 1.png')
        },
        {
          src: require('../assets/images/Portfolio/Main/Mindfuliving_website - 1.png')
        },
        {
          src: require('../assets/images/Portfolio/Main/Class & Sass - 1.png')
        },
        {
          src: require('../assets/images/Portfolio/Main/Muhara - 1.png')
        },
        {
          src: require('../assets/images/Portfolio/Main/Ganana - 1.png')
        }
      ]
    }
  }
}

</script>

<style scoped>
  .social-text {
    font-family: Helvetica Neue;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;

  }

  a {
    text-decoration: none;
  }

 .bounce-top {
  -webkit-animation: bounce-top 4s 9s infinite both;
          animation: bounce-top 4s 9s infinite both;
}
/**
 * ----------------------------------------
 * animation bounce-top
 * ----------------------------------------
 */
@-webkit-keyframes bounce-top {
  0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
}
@keyframes bounce-top {
  0% {
    -webkit-transform: translateY(-45px);
            transform: translateY(-45px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateY(-24px);
            transform: translateY(-24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateY(-12px);
            transform: translateY(-12px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
}
</style>
