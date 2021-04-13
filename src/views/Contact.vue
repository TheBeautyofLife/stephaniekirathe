<template>
  <div>
    <!--------------------------   Larger screen >= 1440px ------------------------------>
    <v-flex xs12 hidden-md-and-down hidden-sm-and-down>
      <v-layout column wrap mb-9>
        <main-header></main-header>
        <!--  -->
        <v-container style="width:1200px">
          <center class="mt-10">
            <div id="career" class="mt-18">
              <v-layout row justify-start mb-8>
                <v-sheet class="transparent text-left">
                  <h1 class="display-3 mb-4">Hi!</h1>
                  <p class="decription-section">
                    I’m Stephanie Kirathe, a product designer
                    <br /><br />
                    My knowledge of the tech industry spans a 6 year career working with start-ups and SMEs.
                    <br /><br />
                    I would love to work with you.
                  </p>
                  <div class="mt-20">
                    <span>Call</span>
                    <h1><a class="display-1  email" href="tel:+254729245657">+254729245657</a></h1>
                  </div>
                  <div class="mt-5">
                    <span>Email</span>
                    <h1><a target="_blank" href="mailto:stephaniekirathe@alero.co.ke"
                        class="display-1 email">stephaniekirathe@alero.co.ke</a></h1>
                  </div>
                </v-sheet>
                <v-flex xs12 md4 class="ml-20 mt-17">
                  <v-layout column justify-start text-left>
                    <p class="caption">Fill out this form and our team will contact you promptly to discuss next steps.
                    </p>
                    <form name="emaillist" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"
                      @submit.prevent="handleSubmit" class="mt-n8" netlify>
                      <p class="hidden">
                        <label><input name="bot-field" /></label>
                      </p>
                      <div class="mb-4">
                        <label for="fullname" class="body-3 font-weight-medium">Name *</label>
                        <v-text-field hide-details="" v-model="form.fullname" type="name" name="fullname" dense
                          single-line outlined color="#CD9E6F">
                        </v-text-field>
                      </div>

                      <div class="mb-4">
                        <label for="email" class="body-3 font-weight-medium">Email *</label>
                        <v-text-field hide-details v-model="form.email" type="email" name="email" dense single-line
                          outlined color="#CD9E6F">
                        </v-text-field>
                      </div>

                      <div class="mb-4">
                        <label for="email" class="body-3 font-weight-medium">Project description</label>
                        <v-textarea auto-grow v-model="form.description" type="text" name="description" dense
                          single-line outlined color="#CD9E6F">
                        </v-textarea>
                      </div>
                      <v-layout justify-end>
                        <div class="pt-2">
                          <v-btn dark rounded height="42px" class="elevation-2 subtitle-1 font-weight-medium button"
                            type="submit">
                            Lets talk
                          </v-btn>
                        </div>
                      </v-layout>
                    </form>
                  </v-layout>
                </v-flex>
              </v-layout>
            </div>
          </center>
        </v-container>
        <v-snackbar v-model="snackbar" :timeout="timeout" absolute bottom color="#CD9E6F"
          class="headline font-weight-medium">
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-layout>
      <div>
        <v-divider></v-divider>
        <v-footer class="transparent pa-3">
          <v-layout column wrap justify-center align-center>
            <div class="caption grey--text">
              COPYRIGHT STEPHANIE KIRATHE 2020 | <a href="http://www.alero.co.ke" target="_blank" rel="dofollow"
                class="caption grey--text">POWERED BY ALERO GROUP</a>
            </div>
          </v-layout>
        </v-footer>
      </div>
    </v-flex>
    <!-------------------------- Larger screen >= 1024px  ------------------------------->
    <v-flex xs12 hidden-sm-and-down hidden-xl-only hidden-lg-only>
      <v-layout column mb-9>
        <main-header></main-header>
        <!--  -->
        <v-container style="width:1200px">
          <center class="mt-10">
            <div id="career" class="mt-18">
              <v-layout row justify-start mb-8>
                <v-sheet class="transparent text-left">
                  <h1 class="display-3 mb-4">Hi!</h1>
                  <p class="decription-section">
                    I’m Stephanie Kirathe, a product designer
                    <br /><br />
                    My knowledge of the tech industry spans a 6 year career working with start-ups and SMEs.
                    <br /><br />
                    I would love to work with you.
                  </p>
                  <div class="mt-20">
                    <span>Call</span>
                    <h1><a class="display-1  email" href="tel:+254729245657">+254729245657</a></h1>
                  </div>
                  <div class="mt-5">
                    <span>Email</span>
                    <h1><a target="_blank" href="mailto:stephaniekirathe@alero.co.ke"
                        class="display-1 email">stephaniekirathe@alero.co.ke</a></h1>
                  </div>
                </v-sheet>
                <v-flex xs12 md4 class="ml-19 mt-17">
                  <v-layout column justify-start text-left>
                    <p class="caption">Fill out this form and our team will contact you promptly to discuss next steps.
                    </p>
                    <form name="emaillist" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"
                      @submit.prevent="handleSubmit" class="mt-n8" netlify>
                      <p class="hidden">
                        <label><input name="bot-field" /></label>
                      </p>
                      <div class="mb-4">
                        <label for="fullname" class="body-3 font-weight-medium">Name *</label>
                        <v-text-field hide-details="" v-model="form.fullname" type="name" name="fullname" dense
                          single-line outlined color="#CD9E6F">
                        </v-text-field>
                      </div>

                      <div class="mb-4">
                        <label for="email" class="body-3 font-weight-medium">Email *</label>
                        <v-text-field hide-details="" v-model="form.email" type="email" name="email" dense single-line
                          outlined color="#CD9E6F">
                        </v-text-field>
                      </div>

                      <div class="mb-4">
                        <label for="email" class="body-3 font-weight-medium">Project description</label>
                        <v-textarea auto-grow v-model="form.description" type="text" name="description" dense
                          single-line outlined color="#CD9E6F">
                        </v-textarea>
                      </div>
                      <v-layout justify-end>
                        <div class="pt-2">
                          <v-btn dark rounded height="42px" class="elevation-2 subtitle-1 font-weight-medium button"
                            type="submit">
                            Lets talk
                          </v-btn>
                        </div>
                      </v-layout>
                    </form>
                  </v-layout>
                </v-flex>
              </v-layout>
            </div>
          </center>
        </v-container>
        <v-snackbar v-model="snackbar" :timeout="timeout" absolute bottom color="#CD9E6F"
          class="headline font-weight-medium">
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-layout>
      <div>
        <v-divider></v-divider>
        <v-footer class="transparent pa-3">
          <v-layout column wrap justify-center align-center>
            <div class="caption grey--text">
              COPYRIGHT STEPHANIE KIRATHE 2020 | <a href="http://www.alero.co.ke" target="_blank" rel="dofollow"
                class="caption grey--text">POWERED BY ALERO GROUP</a>
            </div>
          </v-layout>
        </v-footer>
      </div>
    </v-flex>
    <!-------------------------- Tablet screens <= 768px  ------------------------------->
    <v-flex xs12 hidden-xs-only hidden-md-only hidden-xl-only hidden-lg-only>
      <v-layout column mb-9>
        <main-header></main-header>
        <!--  -->
        <v-container style="width:1200px">
          <center class="mt-10">
            <div id="career" class="mt-18">
              <v-layout column justify-center mx-12>
                <v-sheet class="transparent text-left ml-12">
                  <h1 class="display-3 mb-4">Hi!</h1>
                  <p class="decription-section">
                    I’m Stephanie Kirathe, a product designer
                    <br /><br />
                    My knowledge of the tech industry spans a 6 year career working with start-ups and SMEs.
                    <br /><br />
                    I would love to work with you.
                  </p>
                  <div class="mt-10">
                    <span>Call</span>
                    <h1><a class="display-1  email" href="tel:+254729245657">+254729245657</a></h1>
                  </div>
                  <div class="mt-5">
                    <span>Email</span>
                    <h1><a target="_blank" htransparentref="mailto:stephaniekirathe@alero.co.ke"
                        class="title  email">stephaniekirathe@alero.co.ke</a></h1>
                  </div>
                </v-sheet>
                <v-sheet width="450" class="transparent mt-17 ml-12">
                  <v-layout column justify-center text-left>
                    <p class="caption">Fill out this form and our team will contact you promptly to discuss next steps.
                    </p>
                    <form name="emaillist" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"
                      @submit.prevent="handleSubmit" class="mt-n8">
                      <p class="hidden">
                        <label><input name="bot-field" /></label>
                      </p>
                      <div class="mb-4">
                        <label for="fullname" class="body-3 font-weight-medium">Name *</label>
                        <v-text-field hide-details="" v-model="form.fullname" type="name" name="fullname" dense
                          single-line outlined color="#CD9E6F">
                        </v-text-field>
                      </div>

                      <div class="mb-4">
                        <label for="email" class="body-3 font-weight-medium">Email *</label>
                        <v-text-field hide-details="" v-model="form.email" type="email" name="email" dense single-line
                          outlined color="#CD9E6F">
                        </v-text-field>
                      </div>

                      <div class="mb-4">
                        <label for="email" class="body-3 font-weight-medium">Project description</label>
                        <v-textarea hide-details auto-grow v-model="form.description" type="text" name="description"
                          dense single-line outlined color="#CD9E6F">
                        </v-textarea>
                      </div>
                      <v-layout justify-end>
                        <div class="pt-3 mb-4">
                          <v-btn dark rounded height="42px" class="elevation-2 subtitle-1 font-weight-medium button"
                            type="submit">
                            Lets talk
                          </v-btn>
                        </div>
                      </v-layout>
                    </form>
                  </v-layout>
                </v-sheet>
              </v-layout>
            </div>
          </center>
        </v-container>
        <v-snackbar v-model="snackbar" :timeout="timeout" absolute bottom color="#CD9E6F"
          class="headline font-weight-medium">
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-layout>
      <div>
        <v-divider></v-divider>
        <v-footer class="transparent pa-3">
          <v-layout column wrap justify-center align-center>
            <div class="caption grey--text">
              COPYRIGHT STEPHANIE KIRATHE 2020 | <a href="http://www.alero.co.ke" target="_blank" rel="dofollow"
                class="caption grey--text">POWERED BY ALERO GROUP</a>
            </div>
          </v-layout>
        </v-footer>
      </div>
    </v-flex>
    <!-------------------------- Mobile screens < 425px --------------------------------->
    <v-flex xs12 hidden-sm-and-up hidden-md-and-up>
      <v-layout wrap column>
        <main-header></main-header>
        <div id="career">
          <v-layout column ml-4 mr-4 class="mt-10">
            <div class="text-left pa-3">
              <h1 class="display-3 mb-4">Hi!</h1>
              <p class="decription">
                I’m Stephanie Kirathe, a product designer
                <br /><br />
                My knowledge of the tech industry spans <br />a 6 year career working with start-ups and SMEs.
                <br /><br />
                I would love to work with you.
              </p>
              <div class="mt-10">
                <span>Call</span>
                <h1><a class="title  email" href="tel:+254729245657">+254729245657</a></h1>
              </div>
              <div class="mt-5">
                <span>Email</span>
                <h1><a target="_blank" href="mailto:stephaniekirathe@alero.co.ke" class="title  email"
                    style="text-decoration: none;">stephaniekirathe@alero.co.ke</a></h1>
              </div>
            </div>
            <div class="mt-8">
              <v-layout wrap column justify-center class="text-left">
                <v-flex xs12 class="pr-2 pl-2">
                  <p class="caption">Fill out this form and our team will contact you promptly to discuss next steps.
                  </p>
                </v-flex>
                <form name="emaillist" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"
                  @submit.prevent="handleSubmit" class="mt-n9">
                  <v-flex xs12 class="pr-2 pl-2">
                    <p class="hidden">
                      <label><input name="bot-field" /></label>
                    </p>
                    <div class="mb-4">
                      <label for="fullname" class="body-3 font-weight-medium">Name *</label>
                      <v-text-field hide-details="" v-model="form.fullname" type="name" name="fullname" dense
                        single-line outlined color="#CD9E6F">
                      </v-text-field>
                    </div>
                  </v-flex>
                  <v-flex xs12 class="pr-2 pl-2">
                    <div class="mb-4">
                      <label for="email" class="body-3 font-weight-medium">Email *</label>
                      <v-text-field hide-details="" v-model="form.email" type="email" name="email" dense single-line
                        outlined color="#CD9E6F">
                      </v-text-field>
                    </div>
                  </v-flex>

                  <v-flex xs12 class="pr-2 pl-2">
                    <div class="mb-4">
                      <label for="email" class="body-3 font-weight-medium">Project description</label>
                      <v-textarea hide-details auto-grow v-model="form.description" type="text" name="description" dense
                        single-line outlined color="#CD9E6F">
                      </v-textarea>
                    </div>
                  </v-flex>
                  <v-layout justify-center>
                    <div class="pt-3 mb-4">
                      <v-btn dark rounded height="42px" class="elevation-2 subtitle-1 font-weight-medium button"
                        type="submit">
                        Lets talk
                      </v-btn>
                    </div>
                  </v-layout>
                </form>
              </v-layout>
            </div>
          </v-layout>
        </div>
        <!-- <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      absolute
      bottom
      color="#CD9E6F"
      class="headline font-weight-medium"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar> -->
      </v-layout>
      <div>
        <v-divider></v-divider>
        <v-footer class="transparent pa-3">
          <v-layout column wrap justify-center align-center>
            <div class="caption grey--text">
              COPYRIGHT STEPHANIE KIRATHE 2020 | <a href="http://www.alero.co.ke" target="_blank" rel="dofollow"
                class="caption grey--text">POWERED BY ALERO GROUP</a>
            </div>
          </v-layout>
        </v-footer>
      </div>
    </v-flex>
  </div>
</template>
<script>
import Header from '@/components/header/index.header'
import axios from 'axios'
export default {
  components: {
    'main-header': Header
  },
  data () {
    return {
      checkbox: false,
      submitStatus: null,
      form: {
        fullname: '',
        email: '',
        description: ''
      },
      snackbar: false,
      text: 'Form submitted',
      timeout: 2000
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&')
    },
    handleSubmit () {
      // console.log(this.form)
      const axiosConfig = {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      axios.post('/',
        this.encode({
          'form-name': 'emaillist',
          ...this.form
        }),
        axiosConfig
      ).then(() => {
        this.snackbar = true
        this.clearform()
        console.log('Succesfully Sent')
      }).catch(e => console.error(e))
    },
    clearform () {
      this.form.fullname = ''
      this.form.email = ''
      this.form.description = ''
    }
    // handleSubmit2 () {
    //   // console.log(this.form)
    //   const axiosConfig = {
    //     header: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    //   }
    //   axios.post('/',
    //     this.encode({
    //       'form-name': 'emaillist2',
    //       ...this.form
    //     }),
    //     axiosConfig
    //   ).then(() => {
    //     this.$router.push('success')
    //     console.log('Succesfully Sent')
    //   }).catch(e => console.error(e))
    // },
    // handleSubmit3 () {
    //   console.log(this.form)
    //   const axiosConfig = {
    //     header: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    //   }
    //   axios.post('/',
    //     this.encode({
    //       'form-name': 'emaillist3',
    //       ...this.form
    //     }),
    //     axiosConfig
    //   ).then(() => {
    //     // this.$router.push('success')
    //     console.log('Succesfully Sent')
    //   }).catch(e => console.error(e))
    // },
    // handleSubmit4 () {
    //   console.log(this.form)
    //   const axiosConfig = {
    //     header: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    //   }
    //   axios.post('/',
    //     this.encode({
    //       'form-name': 'emaillist4',
    //       ...this.form
    //     }),
    //     axiosConfig
    //   ).then(() => {
    //     this.$router.push('success')
    //     console.log('Succesfully Sent')
    //   }).catch(e => console.error(e))
    // }
  },
  head: {
    title: {
      inner: 'My Contact\'s'
    },
    meta: [{
      name: 'application-name',
      content: 'Welcome to Stephanie\'s Kirathe official website.This is the contact page, feel free to reach out to me anytime'
    },
    {
      name: 'description',
      content: 'Welcome to Stephanie\'s Kirathe official website. This is the contact page, feel free to reach out to me anytime',
      id: 'desc'
    }, // id to replace intead of create element
    // ...
    // Google+ / Schema.org
    {
      itemprop: 'name',
      content: 'contact page'
    },
    {
      itemprop: 'description',
      content: 'Welcome to Stephanie\'s Kirathe official website.This is the contact page, feel free to reach out to me anytime'
    },
    {
      property: 'og:title',
      content: 'Stephanie\'s Kirathe official website.This is the contact page'
    }
    ]
  }
}

</script>

<style scoped>
  .decription-section {
    width: 464px !important;
  }

  a {
    text-decoration: none;
  }

  .email:hover {
    color: #AC7339 !important;
  }

  .v-text-field {
    color: #AC7339 !important;
  }

  .button {
    /* g */

    background: linear-gradient(225.28deg, #E8CDA8 0%, #CD9E6F 133.27%);
    width: 204.61px;
    height: 45.75px;
  }

</style>
