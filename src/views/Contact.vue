<template>
  <div>
    <!--------------------------   Larger screen >= 1440px ------------------------------>
    <v-flex xs12 hidden-md-and-down hidden-sm-and-down>
      <v-layout column wrap mb-9>
        <main-header></main-header>
        <!--  -->
        <v-container style="width:1033px">
              <center class="mt-10">
            <div id="career" class="mt-18">
              <v-layout column justify-start align-start mb-8>
                 <div class="display-3 mb-4">Hi!</div>
                 <p></p>
              </v-layout>
            </div>
          </center>
        </v-container>
      </v-layout>
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
  },
  head: {
    title: {
      inner: 'Welcome to Nature\'s Pasture'
    },
    meta: [{
      name: 'application-name',
      content: 'Welcome to Nature\'s Pasture'
    },
    {
      name: 'description',
      content: 'Welcome to Nature\'s Pasture',
      id: 'desc'
    }, // id to replace intead of create element
    // ...
    // Google+ / Schema.org
    {
      itemprop: 'name',
      content: 'Welcome to Nature\'s Pasture'
    },
    {
      itemprop: 'description',
      content: 'Welcome to Nature\'s Pasture'
    },
    {
      property: 'og:title',
      content: 'Welcome to Nature\'s Pasture'
    }
    ]
  }
}

</script>
