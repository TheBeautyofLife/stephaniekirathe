<template>
  <div>
    <!--------------------------   Larger screen >= 1440px ------------------------------>
    <v-flex xs12 hidden-md-and-down hidden-sm-and-down>
         <v-layout column wrap mb-9>
              <main-header></main-header>
        <v-container style="width:1200px" class="my-17">
             <v-sheet>
                 <p>Alero</p>
             </v-sheet>
        </v-container>
     </v-layout>
    </v-flex>
        <!-------------------------- Larger screen >= 1024px  ------------------------------->
    <v-flex xs12 hidden-sm-and-down hidden-xl-only hidden-lg-only>
         <v-layout column wrap mb-9>
             <main-header></main-header>
        <v-container style="width:1200px" class="my-17">
             <v-sheet>
                 <p>Alero</p>
             </v-sheet>
        </v-container>
     </v-layout>
    </v-flex>
        <!-------------------------- Tablet screens <= 768px  ------------------------------->
    <v-flex xs12 hidden-xs-only hidden-md-only hidden-xl-only hidden-lg-only>
     <v-layout column wrap mb-9>
        <main-header></main-header>
        <v-container style="width:1200px" class="my-17">
             <v-sheet>
                 <p>Alero</p>
             </v-sheet>
        </v-container>
     </v-layout>
    </v-flex>
        <!-------------------------- Mobile screens < 425px --------------------------------->
    <v-flex xs12 hidden-sm-and-up hidden-md-and-up>
      <v-layout column wrap mb-9>
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
